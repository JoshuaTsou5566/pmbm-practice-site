const bank = Array.isArray(window.PMBM_QUESTION_BANK) ? window.PMBM_QUESTION_BANK : [];
const STORAGE_KEY = "pmbm-cheat-sheet-notes-v1";

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
  sheetList: document.querySelector("#sheet-list")
};

const state = {
  query: "",
  category: "all",
  priority: "all",
  answers: {}
};

function loadAnswers() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      state.answers = parsed;
    }
  } catch (_) {
    state.answers = {};
  }
}

function saveAnswers() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.answers));
  } catch (_) {
    // ignore storage issues
  }
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

function renderList() {
  const visible = getVisibleQuestions();
  renderStats(visible);
  els.sheetList.innerHTML = "";

  if (!visible.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "目前沒有符合條件的題目，換個關鍵字試試。";
    els.sheetList.append(empty);
    return;
  }

  visible.forEach((item) => {
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
            <textarea id="answer-${item.id}" data-answer-id="${item.id}" placeholder="把你自己的版本寫在這裡，系統會自動儲存。"></textarea>
            <span class="save-status">會自動儲存到這台裝置的瀏覽器。</span>
          </div>
        </section>
      </div>
    `;

    const keyPoints = details.querySelector(".key-points");
    item.keyPoints.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      keyPoints.append(li);
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
    textarea.addEventListener("input", () => {
      state.answers[item.id] = textarea.value;
      saveAnswers();
    });

    els.sheetList.append(details);
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

  els.expandAll.addEventListener("click", () => {
    setAllDetails(true);
  });

  els.collapseAll.addEventListener("click", () => {
    setAllDetails(false);
  });

  els.onlyHigh.addEventListener("click", setOnlyHigh);
}

function init() {
  loadAnswers();
  populateCategories();
  renderList();
  attachEvents();
}

init();
