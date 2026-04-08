const bank = Array.isArray(window.PMBM_QUESTION_BANK) ? window.PMBM_QUESTION_BANK : [];
const config = window.PMBM_SUPABASE_CONFIG || {};

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
  sheetList: document.querySelector("#sheet-list"),
  syncBadge: document.querySelector("#sync-badge"),
  syncText: document.querySelector("#sync-text"),
  setupNotice: document.querySelector("#setup-notice"),
  authEmail: document.querySelector("#auth-email"),
  authPassword: document.querySelector("#auth-password"),
  authSignup: document.querySelector("#auth-signup"),
  authSignin: document.querySelector("#auth-signin"),
  authSignout: document.querySelector("#auth-signout")
};

const state = {
  query: "",
  category: "all",
  priority: "all",
  answers: {},
  session: null,
  supabase: null,
  syncReady: false
};

function isConfigured() {
  return Boolean(config.url && config.anonKey && window.supabase?.createClient);
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

function setSyncState(label, text, tone = "normal") {
  els.syncBadge.textContent = label;
  els.syncText.textContent = text;
  els.syncBadge.classList.remove("is-ready", "is-live");
  if (tone === "ready") els.syncBadge.classList.add("is-ready");
  if (tone === "live") els.syncBadge.classList.add("is-live");
}

function renderAuthState() {
  const configured = isConfigured();
  const signedIn = Boolean(state.session?.user);

  els.authSignup.disabled = !configured || signedIn;
  els.authSignin.disabled = !configured || signedIn;
  els.authSignout.disabled = !configured || !signedIn;
  els.authEmail.disabled = !configured || signedIn;
  els.authPassword.disabled = !configured || signedIn;
  els.setupNotice.hidden = configured;

  if (!configured) {
    setSyncState("未設定", "先填入 Supabase 設定後，才能用帳號同步手機和電腦的回答。");
    return;
  }

  if (signedIn) {
    setSyncState("已同步", `目前登入：${state.session.user.email || "已登入"}。儲存後，手機與電腦會同步。`, "live");
  } else {
    setSyncState("可登入", "請先註冊或登入，再使用每題的儲存 / 刪除功能。", "ready");
  }
}

function setAnswerStatus(questionId, text) {
  const node = document.querySelector(`[data-status-id="${questionId}"]`);
  if (node) node.textContent = text;
}

function getAnswerValue(questionId) {
  const textarea = document.querySelector(`[data-answer-id="${questionId}"]`);
  return textarea ? textarea.value.trim() : "";
}

function getQuestionDetails(questionId) {
  return {
    saveBtn: document.querySelector(`[data-save-id="${questionId}"]`),
    deleteBtn: document.querySelector(`[data-delete-id="${questionId}"]`),
    textarea: document.querySelector(`[data-answer-id="${questionId}"]`)
  };
}

function updateQuestionControls(questionId) {
  const { saveBtn, deleteBtn, textarea } = getQuestionDetails(questionId);
  const signedIn = Boolean(state.session?.user);
  const hasSavedValue = Boolean(state.answers[questionId]);

  if (textarea) textarea.disabled = !signedIn;
  if (saveBtn) saveBtn.disabled = !signedIn;
  if (deleteBtn) deleteBtn.disabled = !signedIn || !hasSavedValue;
}

function updateAllQuestionControls() {
  bank.forEach((item) => updateQuestionControls(item.id));
}

async function fetchAnswers() {
  if (!state.supabase || !state.session?.user) {
    state.answers = {};
    renderList();
    return;
  }

  const { data, error } = await state.supabase
    .from(config.answersTable || "interview_answers")
    .select("question_id, answer_text");

  if (error) {
    setSyncState("同步失敗", "已登入，但讀取回答時發生錯誤，請確認 Supabase table 和 RLS 設定。");
    return;
  }

  state.answers = Object.fromEntries((data || []).map((row) => [row.question_id, row.answer_text]));
  renderList();
  renderAuthState();
}

async function saveAnswer(questionId) {
  if (!state.supabase || !state.session?.user) return;
  const answerText = getAnswerValue(questionId);

  if (!answerText) {
    setAnswerStatus(questionId, "內容是空的，請先輸入回答再儲存。");
    return;
  }

  setAnswerStatus(questionId, "儲存中...");

  const { error } = await state.supabase
    .from(config.answersTable || "interview_answers")
    .upsert(
      {
        user_id: state.session.user.id,
        question_id: questionId,
        answer_text: answerText
      },
      { onConflict: "user_id,question_id" }
    );

  if (error) {
    setAnswerStatus(questionId, "儲存失敗，請確認 Supabase table / policy 設定。");
    return;
  }

  state.answers[questionId] = answerText;
  updateQuestionControls(questionId);
  setAnswerStatus(questionId, "已儲存到雲端。");
}

async function deleteAnswer(questionId) {
  if (!state.supabase || !state.session?.user) return;
  setAnswerStatus(questionId, "刪除中...");

  const { error } = await state.supabase
    .from(config.answersTable || "interview_answers")
    .delete()
    .eq("question_id", questionId);

  if (error) {
    setAnswerStatus(questionId, "刪除失敗，請稍後再試。");
    return;
  }

  delete state.answers[questionId];
  const { textarea } = getQuestionDetails(questionId);
  if (textarea) textarea.value = "";
  updateQuestionControls(questionId);
  setAnswerStatus(questionId, "已從雲端刪除。");
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
            <textarea id="answer-${item.id}" data-answer-id="${item.id}" placeholder="先寫你的版本，再按儲存。"></textarea>
            <div class="answer-actions">
              <button class="primary-btn" data-save-id="${item.id}" type="button">儲存</button>
              <button class="ghost-btn" data-delete-id="${item.id}" type="button">刪除</button>
            </div>
            <span class="save-status-row" data-status-id="${item.id}">尚未登入，無法同步。</span>
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

    details.querySelector(`[data-save-id="${item.id}"]`).addEventListener("click", () => {
      void saveAnswer(item.id);
    });

    details.querySelector(`[data-delete-id="${item.id}"]`).addEventListener("click", () => {
      void deleteAnswer(item.id);
    });

    els.sheetList.append(details);
    updateQuestionControls(item.id);
    setAnswerStatus(item.id, state.session?.user ? (state.answers[item.id] ? "已載入雲端回答。" : "可編輯，按儲存即可同步。") : "尚未登入，無法同步。");
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

async function handleSignUp() {
  if (!state.supabase) return;
  const email = els.authEmail.value.trim();
  const password = els.authPassword.value.trim();
  if (!email || !password) {
    setSyncState("缺少資料", "請先填入 Email 和 Password。");
    return;
  }

  const { error } = await state.supabase.auth.signUp({ email, password });
  if (error) {
    setSyncState("註冊失敗", error.message);
    return;
  }

  setSyncState("已送出", "註冊成功。如果你的 Supabase 有開 email confirmation，請先到信箱確認，再登入。", "ready");
}

async function handleSignIn() {
  if (!state.supabase) return;
  const email = els.authEmail.value.trim();
  const password = els.authPassword.value.trim();
  if (!email || !password) {
    setSyncState("缺少資料", "請先填入 Email 和 Password。");
    return;
  }

  const { data, error } = await state.supabase.auth.signInWithPassword({ email, password });
  if (error) {
    setSyncState("登入失敗", error.message);
    return;
  }

  state.session = data.session;
  els.authPassword.value = "";
  renderAuthState();
  await fetchAnswers();
}

async function handleSignOut() {
  if (!state.supabase) return;
  await state.supabase.auth.signOut();
  state.session = null;
  state.answers = {};
  renderAuthState();
  renderList();
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
  els.authSignup.addEventListener("click", () => {
    void handleSignUp();
  });
  els.authSignin.addEventListener("click", () => {
    void handleSignIn();
  });
  els.authSignout.addEventListener("click", () => {
    void handleSignOut();
  });
}

async function initSupabase() {
  if (!isConfigured()) {
    renderAuthState();
    return;
  }

  state.supabase = window.supabase.createClient(config.url, config.anonKey);
  state.syncReady = true;

  const {
    data: { session }
  } = await state.supabase.auth.getSession();

  state.session = session;
  renderAuthState();

  state.supabase.auth.onAuthStateChange((_event, sessionData) => {
    state.session = sessionData;
    renderAuthState();
    void fetchAnswers();
  });

  if (session) {
    await fetchAnswers();
  }
}

async function init() {
  populateCategories();
  renderList();
  attachEvents();
  renderAuthState();
  await initSupabase();
}

void init();
