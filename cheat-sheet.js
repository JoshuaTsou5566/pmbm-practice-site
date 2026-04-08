const STORAGE_KEY = "pmbm-cheat-sheet-records-v2";
const bank = Array.isArray(window.PMBM_QUESTION_BANK) ? window.PMBM_QUESTION_BANK : [];

const els = {
  statTotal: document.querySelector("#stat-total"),
  statHigh: document.querySelector("#stat-high"),
  statVisible: document.querySelector("#stat-visible"),
  searchInput: document.querySelector("#search-input"),
  categoryFilter: document.querySelector("#category-filter"),
  priorityFilter: document.querySelector("#priority-filter"),
  expandAll: document.querySelector("#expand-all"),
  collapseAll: document.querySelector("#collapse-all"),
  onlyHigh: document.querySelector("#only-high"),
  exportRecords: document.querySelector("#export-records"),
  importRecords: document.querySelector("#import-records"),
  clearRecords: document.querySelector("#clear-records"),
  transferBadge: document.querySelector("#transfer-badge"),
  transferText: document.querySelector("#transfer-text"),
  transferNotice: document.querySelector("#transfer-notice"),
  mnemonicGrid: document.querySelector("#mnemonic-grid"),
  sheetList: document.querySelector("#sheet-list")
};

const state = {
  query: "",
  category: "all",
  priority: "all",
  answers: {},
  activeVoiceQuestionId: null,
  recognition: null
};

const SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition || null;

const CATEGORY_MNEMONICS = {
  "必答核心題": {
    code: "動機-能力-連結",
    hint: "先說你是誰，再講為什麼來 PMBM，最後收回你能帶來什麼。"
  },
  "高機率挑戰題": {
    code: "先認-再轉-再收",
    hint: "先承認表面弱點，再轉成你的定位優勢，最後收回為什麼還是適合 PMBM。"
  },
  "管理經驗追問題": {
    code: "情境-動作-結果",
    hint: "管理題不要講抽象個性，直接講你怎麼做、做了什麼、結果如何。"
  },
  "PMBM 理解題": {
    code: "理解-對位-應用",
    hint: "先講你怎麼理解學程，再講和自己缺口的對位，最後講未來怎麼用。"
  },
  "時事與產業題": {
    code: "趨勢-限制-落地",
    hint: "先講方向，再補風險或限制，最後講管理或商業化上的落地點。"
  },
  "臨場反應題": {
    code: "短答-真誠-不飄",
    hint: "這類題目要短，先給立場，不要講太滿，也不要故作幽默。"
  }
};

function loadAnswers() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    state.answers = raw ? JSON.parse(raw) : {};
  } catch (_) {
    state.answers = {};
  }
}

function persistAnswers() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.answers));
}

function setTransferState(label, text, tone = "normal") {
  els.transferBadge.textContent = label;
  els.transferText.textContent = text;
  els.transferBadge.classList.remove("is-ready");
  if (tone === "ready") els.transferBadge.classList.add("is-ready");
}

function populateCategories() {
  const categories = [...new Set(bank.map((item) => item.category))];
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    els.categoryFilter.append(option);
  });
}

function groupQuestions(questions) {
  const order = [...new Set(bank.map((item) => item.category))];
  return order
    .map((category) => ({
      category,
      items: questions.filter((item) => item.category === category)
    }))
    .filter((group) => group.items.length > 0);
}

function renderMnemonicBoard(groups) {
  if (!els.mnemonicGrid) return;
  els.mnemonicGrid.innerHTML = "";

  groups.forEach((group) => {
    const config = CATEGORY_MNEMONICS[group.category] || {
      code: "結論-例子-收尾",
      hint: "先講結論，再補一個例子，最後收回對 PMBM 的連結。"
    };

    const card = document.createElement("article");
    card.className = "mnemonic-card";
    card.innerHTML = `
      <h3>${group.category}</h3>
      <span class="mnemonic-code">${config.code}</span>
      <p>${config.hint}</p>
    `;
    els.mnemonicGrid.append(card);
  });
}

function getVisibleQuestions() {
  return bank.filter((item) => {
    if (state.category !== "all" && item.category !== state.category) return false;
    if (state.priority !== "all" && item.priority !== state.priority) return false;

    if (!state.query) return true;
    const haystack = [
      item.prompt,
      item.category,
      item.answerType,
      item.shortAnswer,
      ...item.keyPoints,
      item.coachNote,
      state.answers[item.id] || "",
      ...item.followUps.flatMap((entry) => [entry.question || entry, entry.answer || ""])
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(state.query);
  });
}

function renderStats(visible) {
  els.statTotal.textContent = String(bank.length);
  els.statHigh.textContent = String(bank.filter((item) => item.priority === "高").length);
  els.statVisible.textContent = String(visible.length);
}

function createFollowupCard(item) {
  const card = document.createElement("article");
  card.className = "followup-card";

  if (typeof item === "string") {
    card.innerHTML = `<strong>教授可能追問</strong><p>${item}</p>`;
    return card;
  }

  card.innerHTML = `<strong>${item.question}</strong><p>${item.answer}</p>`;
  return card;
}

function setAnswerStatus(questionId, text) {
  const node = document.querySelector(`[data-status-id="${questionId}"]`);
  if (node) node.textContent = text;
}

function getQuestionNodes(questionId) {
  return {
    textarea: document.querySelector(`[data-answer-id="${questionId}"]`),
    saveBtn: document.querySelector(`[data-save-id="${questionId}"]`),
    deleteBtn: document.querySelector(`[data-delete-id="${questionId}"]`)
  };
}

function updateQuestionControls(questionId) {
  const { saveBtn, deleteBtn } = getQuestionNodes(questionId);
  const voiceBtn = document.querySelector(`[data-voice-id="${questionId}"]`);
  const hasSaved = Boolean(state.answers[questionId]?.trim());
  if (saveBtn) saveBtn.disabled = false;
  if (deleteBtn) deleteBtn.disabled = !hasSaved;
  if (voiceBtn) {
    const supported = Boolean(SpeechRecognitionCtor);
    voiceBtn.disabled = !supported;
    voiceBtn.classList.toggle("is-recording", state.activeVoiceQuestionId === questionId);
    voiceBtn.textContent = state.activeVoiceQuestionId === questionId ? "停止語音輸入" : "語音輸入";
  }
}

function saveAnswer(questionId) {
  const { textarea } = getQuestionNodes(questionId);
  const value = textarea ? textarea.value.trim() : "";

  if (!value) {
    setAnswerStatus(questionId, "內容是空的，請先輸入後再儲存。");
    return;
  }

  state.answers[questionId] = value;
  persistAnswers();
  updateQuestionControls(questionId);
  setAnswerStatus(questionId, "已儲存到這台裝置。");
  setTransferState("本機模式", "目前回答存在這台裝置；需要跨裝置時，請用上方匯出 / 導入。");
}

function deleteAnswer(questionId) {
  delete state.answers[questionId];
  persistAnswers();
  const { textarea } = getQuestionNodes(questionId);
  if (textarea) textarea.value = "";
  updateQuestionControls(questionId);
  setAnswerStatus(questionId, "已從這台裝置刪除。");
}

function appendToTextarea(questionId, text) {
  const { textarea } = getQuestionNodes(questionId);
  if (!textarea) return;
  const prefix = textarea.value.trim() ? `${textarea.value.trim()}\n` : "";
  textarea.value = `${prefix}${text}`.trim();
}

function stopVoiceInput() {
  if (state.recognition) {
    state.recognition.stop();
  }
}

function startVoiceInput(questionId) {
  if (!SpeechRecognitionCtor) {
    setAnswerStatus(questionId, "這個瀏覽器目前不支援內建語音輸入。");
    return;
  }

  if (state.activeVoiceQuestionId === questionId) {
    stopVoiceInput();
    return;
  }

  if (state.recognition) {
    state.recognition.abort();
  }

  const recognition = new SpeechRecognitionCtor();
  recognition.lang = "zh-TW";
  recognition.continuous = true;
  recognition.interimResults = true;

  const { textarea } = getQuestionNodes(questionId);
  const baseText = textarea ? textarea.value.trim() : "";
  let finalTranscript = "";
  state.activeVoiceQuestionId = questionId;
  state.recognition = recognition;
  updateQuestionControls(questionId);
  setAnswerStatus(questionId, "語音輸入中，說完後再按一次停止。");

  recognition.onresult = (event) => {
    let interimTranscript = "";
    for (let i = event.resultIndex; i < event.results.length; i += 1) {
      const transcript = event.results[i][0].transcript.trim();
      if (event.results[i].isFinal) {
        finalTranscript += `${transcript}\n`;
      } else {
        interimTranscript += transcript;
      }
    }

    const composed = `${finalTranscript}${interimTranscript}`.trim();
    const merged = [baseText, composed].filter(Boolean).join("\n").trim();
    const { textarea } = getQuestionNodes(questionId);
    if (textarea) {
      textarea.value = merged;
    }
  };

  recognition.onerror = () => {
    setAnswerStatus(questionId, "語音輸入失敗，請改用手動輸入或換支援的瀏覽器。");
  };

  recognition.onend = () => {
    const finalText = finalTranscript.trim();
    if (finalText) {
      const { textarea } = getQuestionNodes(questionId);
      if (textarea) {
        textarea.value = [baseText, finalText].filter(Boolean).join("\n").trim();
      }
      setAnswerStatus(questionId, "語音輸入完成，記得按儲存。");
    } else {
      setAnswerStatus(questionId, "語音輸入已停止。");
    }

    state.activeVoiceQuestionId = null;
    state.recognition = null;
    bank.forEach((item) => updateQuestionControls(item.id));
  };

  recognition.start();
}

function renderList() {
  const visible = getVisibleQuestions();
  const groups = groupQuestions(visible);
  renderStats(visible);
  renderMnemonicBoard(groups);
  els.sheetList.innerHTML = "";

  if (!visible.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "目前沒有符合條件的題目，換個關鍵字試試。";
    els.sheetList.append(empty);
    return;
  }

  groups.forEach((group) => {
    const block = document.createElement("section");
    block.className = "group-block";
    const mnemonic = CATEGORY_MNEMONICS[group.category];
    block.innerHTML = `
      <div class="group-title">
        <div>
          <h2>${group.category}</h2>
          <p>${mnemonic ? `口訣：${mnemonic.code}。${mnemonic.hint}` : "同類型題目放一起，先記骨架再記例子。"}</p>
        </div>
        <span class="group-count">${group.items.length} 題</span>
      </div>
    `;

    group.items.forEach((item) => {
      const details = document.createElement("details");
      details.className = "sheet-card";
      const priorityClass = item.priority === "高" ? "priority-high" : "";

      details.innerHTML = `
      <summary class="sheet-summary">
        <div>
          <div class="pill-row">
            <span class="pill">${item.category}</span>
            <span class="pill ${priorityClass}">${item.priority} 優先</span>
            <span class="pill">第 ${item.round} 輪</span>
          </div>
          <h3>${item.id}. ${item.prompt}</h3>
          <p>${item.answerType}</p>
          <div class="hint-row"></div>
        </div>
        <span class="sheet-arrow">+</span>
      </summary>
      <div class="sheet-body">
        <section class="section-block">
          <h4>30-60 秒短答</h4>
          <p>${item.shortAnswer}</p>
        </section>
        <section class="section-block">
          <h4>答題主軸</h4>
          <ul class="key-points"></ul>
        </section>
        <section class="section-block">
          <h4>教授追問</h4>
          <div class="followup-grid"></div>
        </section>
        <section class="section-block">
          <h4>答題提醒</h4>
          <p>${item.coachNote}</p>
        </section>
        <section class="section-block">
          <div class="answer-editor">
            <label for="answer-${item.id}">我的回答</label>
            <textarea id="answer-${item.id}" data-answer-id="${item.id}" placeholder="先寫你的版本，再按儲存。"></textarea>
            <div class="answer-actions">
              <button class="ghost-btn voice-btn" data-voice-id="${item.id}" type="button">語音輸入</button>
              <button class="primary-btn" data-save-id="${item.id}" type="button">儲存</button>
              <button class="ghost-btn" data-delete-id="${item.id}" type="button">刪除</button>
            </div>
            <span class="save-status-row" data-status-id="${item.id}">尚未儲存。</span>
          </div>
        </section>
      </div>
    `;

      const keyPoints = details.querySelector(".key-points");
      const hintRow = details.querySelector(".hint-row");
      item.keyPoints.forEach((point) => {
        const li = document.createElement("li");
        li.textContent = point;
        keyPoints.append(li);

        const hint = document.createElement("span");
        hint.className = "hint-chip";
        hint.textContent = point;
        hintRow.append(hint);
      });

      const followupGrid = details.querySelector(".followup-grid");
      if (item.followUps.length) {
        item.followUps.forEach((entry) => {
          followupGrid.append(createFollowupCard(entry));
        });
      } else {
        const fallback = document.createElement("article");
        fallback.className = "followup-card";
        fallback.innerHTML = `<strong>教練補充</strong><p>${item.coachNote}</p>`;
        followupGrid.append(fallback);
      }

      const textarea = details.querySelector(`[data-answer-id="${item.id}"]`);
      textarea.value = state.answers[item.id] || "";
      textarea.addEventListener("click", (event) => {
        event.stopPropagation();
        details.open = true;
      });
      textarea.addEventListener("focus", () => {
        details.open = true;
      });
      textarea.addEventListener("keydown", (event) => {
        event.stopPropagation();
      });

      details.querySelector(`[data-save-id="${item.id}"]`).addEventListener("click", (event) => {
        event.stopPropagation();
        saveAnswer(item.id);
      });

      details.querySelector(`[data-voice-id="${item.id}"]`).addEventListener("click", (event) => {
        event.stopPropagation();
        startVoiceInput(item.id);
      });

      details.querySelector(`[data-delete-id="${item.id}"]`).addEventListener("click", (event) => {
        event.stopPropagation();
        deleteAnswer(item.id);
      });

      block.append(details);
      updateQuestionControls(item.id);
      setAnswerStatus(item.id, state.answers[item.id] ? "已載入這台裝置上的紀錄。" : "尚未儲存。");
    });

    els.sheetList.append(block);
  });
}

function setOnlyHigh() {
  state.priority = state.priority === "高" ? "all" : "高";
  els.priorityFilter.value = state.priority;
  els.onlyHigh.textContent = state.priority === "高" ? "取消只看高優先" : "只看高優先";
  renderList();
}

function setAllDetails(open) {
  document.querySelectorAll(".sheet-card").forEach((node) => {
    node.open = open;
  });
}

function exportRecords() {
  const payload = {
    exportedAt: new Date().toISOString(),
    source: "PMBM Cheat Sheet",
    answers: state.answers
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  link.href = url;
  link.download = `pmbm-records-${stamp}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);

  setTransferState("可交換", "紀錄已匯出成 JSON。把檔案傳到另一台裝置後，再用導入紀錄即可。", "ready");
}

function importRecordsFromFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result || "{}"));
      const answers = parsed.answers;
      if (!answers || typeof answers !== "object") {
        throw new Error("Invalid payload");
      }

      state.answers = Object.fromEntries(
        Object.entries(answers).filter(([, value]) => typeof value === "string" && value.trim())
      );
      persistAnswers();
      renderList();
      setTransferState("已導入", "紀錄已導入到這台裝置。之後你可以繼續修改，再重新匯出。", "ready");
    } catch (_) {
      setTransferState("導入失敗", "這個檔案格式不正確，請確認你導入的是本頁匯出的 JSON 紀錄。");
    }
  };
  reader.readAsText(file, "utf-8");
}

function clearAllRecords() {
  state.answers = {};
  persistAnswers();
  renderList();
  setTransferState("已清空", "這台裝置上的全部回答已清空，不會影響你已匯出的檔案。", "ready");
}

function attachEvents() {
  els.searchInput.addEventListener("input", () => {
    state.query = els.searchInput.value.trim().toLowerCase();
    renderList();
  });

  els.categoryFilter.addEventListener("change", () => {
    state.category = els.categoryFilter.value;
    renderList();
  });

  els.priorityFilter.addEventListener("change", () => {
    state.priority = els.priorityFilter.value;
    els.onlyHigh.textContent = state.priority === "高" ? "取消只看高優先" : "只看高優先";
    renderList();
  });

  els.expandAll.addEventListener("click", () => setAllDetails(true));
  els.collapseAll.addEventListener("click", () => setAllDetails(false));
  els.onlyHigh.addEventListener("click", setOnlyHigh);
  els.exportRecords.addEventListener("click", exportRecords);
  els.importRecords.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    importRecordsFromFile(file);
    event.target.value = "";
  });
  els.clearRecords.addEventListener("click", clearAllRecords);
}

function init() {
  loadAnswers();
  populateCategories();
  renderList();
  attachEvents();
  setTransferState("本機模式", "你的回答先存在這台裝置；需要跨裝置時，用上方匯出 / 導入即可。");
}

init();
