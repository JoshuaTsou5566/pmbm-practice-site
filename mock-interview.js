const QUESTION_BANK = [
  {
    id: 1,
    category: "動機定位",
    priority: "高",
    prompt: "請做 30-45 秒自我介紹",
    answerType: "30 秒自我介紹",
    shortAnswer:
      "各位老師好，我是鄒松樺，東吳微生物學系畢業，目前擔任 SPG Holdings 的首席行銷總監。我的核心經驗是在高度專業環境中做跨域轉譯、流程制度化與協作整合。我報考 PMBM，是希望把這些實務經驗再往上提升成更完整的專業產業管理能力。",
    followUps: [
      "如果要再多說一句，你最核心的能力是什麼？",
      "你希望在 PMBM 最先補強什麼？"
    ],
    coachNote: "前 10 秒先講現在是誰，不要先講求學歷程。"
  },
  {
    id: 2,
    category: "動機定位",
    priority: "高",
    prompt: "你為什麼報考台大 PMBM？",
    answerType: "45 秒報考動機",
    shortAnswer:
      "我報考 PMBM，主要是因為這幾年的工作讓我很清楚看到，單靠前端市場或專案能力不夠，還需要理解法規、風險、治理與跨部門協作。PMBM 不是單純一般管理課程，而是把專業、管理與法規放在一起訓練，這和我下一階段想培養的能力最貼近。",
    followUps: [
      "那你工作中最明顯碰到的治理問題是什麼？",
      "為什麼是現在，而不是再晚幾年？"
    ],
    coachNote: "第一句先回答原因，不要先鋪陳背景。"
  },
  {
    id: 4,
    category: "動機定位",
    priority: "高",
    prompt: "你現在在資產管理顧問，為什麼不是念 MBA／PMBA？",
    answerType: "45 秒學程比較",
    shortAnswer:
      "如果只是補一般商管知識，MBA 或 PMBA 當然也是選項，但我真正想學的不是單純工具，而是如何在高度專業、法規敏感的產業裡做整合型管理。我現在的工作其實就很常碰到這類問題，所以 PMBM 對我來說更貼近未來方向。",
    followUps: [
      "你覺得 PMBM 和 PMBA 最大差別是什麼？",
      "你真的會用到 PMBM 學到的東西嗎？"
    ],
    coachNote: "不要把 PMBA 講低，重點放在適配性。"
  },
  {
    id: 7,
    category: "管理案例",
    priority: "高",
    prompt: "你最重要的一個管理成就是什麼？",
    answerType: "60 秒管理成就",
    shortAnswer:
      "我目前最有代表性的管理成就，是協助公司把原本較依賴人治的研討會運作，逐步建立成制度化流程。我重新梳理 SOP、角色分工與現場協作邏輯，之後活動規模從二十多人穩定成長到七十人以上。對我來說，最重要的不只是人數成長，而是把事情做成一套別人也能運作的機制。",
    followUps: [
      "你在這個案例裡最關鍵的角色是什麼？",
      "如果沒有你，這件事會怎麼樣？"
    ],
    coachNote: "只講一個案例，不要分散到太多專案。"
  },
  {
    id: 8,
    category: "管理案例",
    priority: "高",
    prompt: "你最深刻的一次挫折是什麼？學到什麼？",
    answerType: "60 秒挫折學習",
    shortAnswer:
      "我最深刻的挫折，是曾經發現自己即使把單一流程優化得很好，仍然無法阻止整體組織治理失衡帶來的動盪。那次經驗讓我意識到，前端做得再好，如果制度、風險控管和信任結構不足，組織還是會很脆弱。也因為這樣，我更確定自己未來想補的是更完整的營運與治理視角。",
    followUps: [
      "那你後來實際改變了什麼？",
      "這個挫折對你報考 PMBM 的影響是什麼？"
    ],
    coachNote: "聚焦學習，不要講成抱怨前公司。"
  },
  {
    id: 12,
    category: "動機定位",
    priority: "高",
    prompt: "PMBM 為什麼要錄取你？",
    answerType: "45 秒錄取理由",
    shortAnswer:
      "我覺得 PMBM 可以錄取我，主要有三個原因。第一，我的報考動機很明確，我不是來補一個學歷，而是已經在工作裡碰到跨域整合與治理問題。第二，我有真實的管理實務。第三，我不只會從這裡學習，也能在同儕交流與班級合作中帶來實際貢獻。",
    followUps: [
      "你覺得你和其他考生最不一樣的是什麼？",
      "你進來後會怎麼參與班上？"
    ],
    coachNote: "講三點就夠，第三點講完收尾。"
  },
  {
    id: 13,
    category: "挑戰追問",
    priority: "高",
    prompt: "你不是典型生技背景，為什麼要念 PMBM？",
    answerType: "45 秒挑戰題",
    shortAnswer:
      "我理解自己不是最典型的生技產業申請者，但我認為自己適合 PMBM 的地方，不是單一技術，而是我有理科訓練基礎，也有長期跨域整合的實務經驗。我現在最常做的事情，是把複雜專業資訊轉成客戶、團隊與組織都能運作的模式。我希望進一步學的是高度專業產業中的管理能力。",
    followUps: [
      "那你覺得自己的生技連結在哪裡？",
      "你不怕進來後跟不上嗎？"
    ],
    coachNote: "先承認非典型，再重定義你的優勢。"
  },
  {
    id: 14,
    category: "挑戰追問",
    priority: "高",
    prompt: "你微生物背景現在還剩多少？",
    answerType: "30 秒敏感題",
    shortAnswer:
      "老實說，我畢業後沒有持續走實驗或純研究路線，所以如果是非常技術性的微生物內容，我不會說自己現在還很熟。不過那段訓練留下來的，不只是知識本身，而是我理解證據、建立邏輯架構、面對複雜資訊時的分析方式。",
    followUps: [
      "那這樣你的理科背景還有什麼用？",
      "如果教授問你生技技術細節怎麼辦？"
    ],
    coachNote: "坦白，但不要說自己都忘光了。"
  },
  {
    id: 16,
    category: "挑戰追問",
    priority: "高",
    prompt: "你是不是其實比較想念 PMBA？",
    answerType: "30 秒敏感題",
    shortAnswer:
      "我在準備申請時，確實也有一起思考 PMBA 和 PMBM，因為我很確定自己想往管理能力深化。不過我後來會認真看待 PMBM，是因為它不是單純一般商管訓練，而是更強調專業背景、管理與法規整合的學習環境。",
    followUps: [
      "那你當初為什麼兩邊都報？",
      "如果 PMBA 也上、PMBM 也上，你怎麼選？"
    ],
    coachNote: "可以承認評估過，但不能顯得搖擺。"
  },
  {
    id: 18,
    category: "挑戰追問",
    priority: "高",
    prompt: "如果我們覺得你比較像 PMBA，不像 PMBM，你怎麼回應？",
    answerType: "45 秒定位挑戰",
    shortAnswer:
      "我會接受自己不是最典型的 PMBM 考生，但我也認為這正是我的差異化。我的優勢不在單一生技技術，而是在高度專業的場域中，做跨域轉譯、流程制度化與協作整合。對 PMBM 這種強調跨領域交流與專業產業管理的學程來說，我覺得我不是不像，而是以不同路徑對上它想培養的能力。",
    followUps: [
      "那你覺得 PMBM 最需要哪種學生？",
      "你的差異化會怎麼幫助班上？"
    ],
    coachNote: "不要 defensive，語氣要穩。"
  },
  {
    id: 19,
    category: "挑戰追問",
    priority: "高",
    prompt: "你的工作和生技醫療距離不近，怎麼說服我們這不是斷裂？",
    answerType: "45 秒產業距離題",
    shortAnswer:
      "我現在雖然不在典型生技公司，但我面對的工作場景同樣是高度專業、資訊不對稱，而且很需要風險意識和跨專業協作。這讓我越來越清楚看到，自己需要的不只是前端拓展能力，而是更完整的治理與整合視角。",
    followUps: [
      "那你現在工作最像生技管理的地方是什麼？",
      "你未來會想更靠近生醫場域嗎？"
    ],
    coachNote: "核心是講管理本質相近，不要硬說自己現在就在生技。"
  },
  {
    id: 23,
    category: "管理案例",
    priority: "高",
    prompt: "你建立 SOP，具體改了哪三件事？",
    answerType: "45 秒拆解題",
    shortAnswer:
      "如果拆成三件事，第一是把流程拆清楚，從企劃、邀請、現場分流到後續追蹤都標準化。第二是把角色與判斷權定義清楚。第三是用數位工具把資訊同步與追蹤做起來，降低跨部門資訊落差。",
    followUps: [
      "三件事裡最難的是哪一件？",
      "你怎麼讓大家真的照 SOP 走？"
    ],
    coachNote: "這題就老老實實列三點，最清楚。"
  },
  {
    id: 25,
    category: "管理案例",
    priority: "高",
    prompt: "研討會從 20 人到 70+，最關鍵的管理動作是什麼？",
    answerType: "45 秒關鍵動作",
    shortAnswer:
      "我覺得最關鍵的管理動作，不是宣傳做得更多，而是把原本依賴單一主管的運作，改成團隊可以穩定複製的制度。當第一線同仁有清楚分工、資訊同步和基本判斷空間之後，活動規模才有辦法穩定放大。",
    followUps: [
      "那你怎麼知道不是單純市場變好？",
      "你覺得下一步還可以怎麼放大？"
    ],
    coachNote: "第一句直接下判斷，會比較有力。"
  },
  {
    id: 33,
    category: "動機定位",
    priority: "高",
    prompt: "你對 PMBM 的理解是什麼？",
    answerType: "45 秒學程理解",
    shortAnswer:
      "我對 PMBM 的理解，是它不是單純教管理工具的學程，而是把生技醫療這種高度專業、法規密集、跨領域合作頻繁的產業，當作管理訓練的核心場景。它的價值除了課程本身，也來自跨院師資、實務導向，以及和不同背景同學的交流。",
    followUps: [
      "哪個部分最吸引你？",
      "你最想和哪類同學交流？"
    ],
    coachNote: "不要只背官網，用你自己的理解說。"
  },
  {
    id: 41,
    category: "時事產業",
    priority: "高",
    prompt: "你怎麼看台灣生醫產業的發展機會？",
    answerType: "45 秒產業趨勢",
    shortAnswer:
      "我覺得台灣生醫產業的機會很大，特別是在 AI 醫療、精準健康、數位醫療和跨域資料應用上。台灣本來就有不錯的醫療體系、科技供應鏈與工程人才，這些都是優勢。不過真正的挑戰還是在商業化、法規、臨床驗證和跨領域整合。",
    followUps: [
      "你覺得最大的限制是什麼？",
      "如果你來提一個方向，你會先做什麼？"
    ],
    coachNote: "先講機會，再補限制，會比較完整。"
  },
  {
    id: 42,
    category: "時事產業",
    priority: "高",
    prompt: "你怎麼看 AI 對醫療或生技產業的影響？",
    answerType: "45 秒時事題",
    shortAnswer:
      "我覺得 AI 對醫療和生技產業最大的影響，會是在資料整理、決策支持和流程效率提升上。不過 AI 的價值不會只靠技術本身，還要看資料品質、臨床驗證、法規配套和實際導入場景。",
    followUps: [
      "你覺得哪個環節最容易先落地？",
      "AI 進醫療最大的風險是什麼？"
    ],
    coachNote: "時事題要有平衡感，不要只講很厲害。"
  }
];

const MODES = {
  mixed: null,
  motivation: "動機定位",
  management: "管理案例",
  challenge: "挑戰追問",
  industry: "時事產業"
};

const els = {
  modeButtons: [...document.querySelectorAll(".mode-chip")],
  stageCategory: document.querySelector("#stage-category"),
  stagePriority: document.querySelector("#stage-priority"),
  stageProgress: document.querySelector("#stage-progress"),
  stagePrompt: document.querySelector("#stage-prompt"),
  stageMeta: document.querySelector("#stage-meta"),
  buildQueue: document.querySelector("#build-queue"),
  nextQuestion: document.querySelector("#next-question"),
  revealAnswer: document.querySelector("#reveal-answer"),
  revealFollowup: document.querySelector("#reveal-followup"),
  answerPanel: document.querySelector("#answer-panel"),
  answerText: document.querySelector("#answer-text"),
  followupPanel: document.querySelector("#followup-panel"),
  followupList: document.querySelector("#followup-list"),
  queueList: document.querySelector("#queue-list"),
  voiceToggle: document.querySelector("#voice-toggle"),
  answerStart: document.querySelector("#answer-start"),
  answerStop: document.querySelector("#answer-stop"),
  timerValue: document.querySelector("#timer-value"),
  timerStatus: document.querySelector("#timer-status"),
  timerBanner: document.querySelector("#timer-banner"),
  timerPresets: [...document.querySelectorAll(".timer-preset")],
  timerStart: document.querySelector("#timer-start"),
  timerPause: document.querySelector("#timer-pause"),
  timerReset: document.querySelector("#timer-reset"),
  mark30: document.querySelector("#mark-30"),
  mark45: document.querySelector("#mark-45"),
  markEnd: document.querySelector("#mark-end"),
  recordPill: document.querySelector("#record-pill"),
  recordStatus: document.querySelector("#record-status"),
  recordStart: document.querySelector("#record-start"),
  recordStop: document.querySelector("#record-stop"),
  recordPlay: document.querySelector("#record-play"),
  recordClear: document.querySelector("#record-clear"),
  recordAudio: document.querySelector("#record-audio"),
  audioHint: document.querySelector("#audio-hint")
};

const state = {
  mode: "mixed",
  queue: [],
  index: 0,
  totalSeconds: 45,
  remainingSeconds: 45,
  timerId: null,
  cueMarks: new Set()
};

let mediaRecorder = null;
let recordChunks = [];
let recordAudioUrl = null;

function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function getPool() {
  const category = MODES[state.mode];
  return category ? QUESTION_BANK.filter((item) => item.category === category) : [...QUESTION_BANK];
}

function currentQuestion() {
  const id = state.queue[state.index];
  return QUESTION_BANK.find((item) => item.id === id);
}

function renderQueue() {
  els.queueList.innerHTML = "";
  if (!state.queue.length) {
    const empty = document.createElement("div");
    empty.className = "queue-item";
    empty.innerHTML = "<strong>尚未建立題組</strong><span>先選題型，再建立 5 題模擬。</span>";
    els.queueList.append(empty);
    return;
  }

  state.queue.forEach((id, index) => {
    const question = QUESTION_BANK.find((item) => item.id === id);
    if (!question) return;
    const node = document.createElement("div");
    node.className = "queue-item";
    const label = index === state.index ? "目前題目" : `第 ${index + 1} 題`;
    node.innerHTML = `<strong>${label}</strong><span>${question.prompt}</span>`;
    els.queueList.append(node);
  });
}

function renderStage() {
  const question = currentQuestion();
  renderQueue();

  if (!question) {
    els.stageCategory.textContent = "尚未開始";
    els.stagePriority.textContent = "待抽題";
    els.stageProgress.textContent = "0 / 0";
    els.stagePrompt.textContent = "先選一組題型，再按「建立 5 題模擬」。";
    els.stageMeta.textContent = "建議先直接回答，不要先看參考答案。";
    els.answerPanel.hidden = true;
    els.followupPanel.hidden = true;
    els.followupList.innerHTML = "";
    return;
  }

  els.stageCategory.textContent = question.category;
  els.stagePriority.textContent = `${question.priority}優先`;
  els.stageProgress.textContent = `${state.index + 1} / ${state.queue.length}`;
  els.stagePrompt.textContent = question.prompt;
  els.stageMeta.textContent = `${question.answerType} · 先自己答，再決定要不要看參考答案。`;
  els.answerText.textContent = question.shortAnswer;
  els.answerPanel.hidden = true;
  els.followupPanel.hidden = true;
  els.followupList.innerHTML = "";
}

function buildQueue() {
  const pool = getPool();
  state.queue = [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(5, pool.length)).map((item) => item.id);
  state.index = 0;
  renderStage();
  resetTimer();
  resetRecording();
}

function nextQuestion() {
  if (!state.queue.length) {
    buildQueue();
    return;
  }
  if (state.index < state.queue.length - 1) {
    state.index += 1;
  } else {
    state.queue = [];
    state.index = 0;
  }
  renderStage();
  resetTimer();
  resetRecording();
}

function revealAnswer() {
  if (!currentQuestion()) return;
  els.answerPanel.hidden = false;
}

function revealFollowups() {
  const question = currentQuestion();
  if (!question) return;
  els.followupPanel.hidden = false;
  els.followupList.innerHTML = "";

  question.followUps.forEach((text) => {
    const node = document.createElement("div");
    node.className = "followup-item";
    node.innerHTML = `<strong>${text}</strong><p>${question.coachNote}</p>`;
    els.followupList.append(node);
  });

  if (!question.followUps.length) {
    const node = document.createElement("div");
    node.className = "followup-item";
    node.innerHTML = `<strong>教練提醒</strong><p>${question.coachNote}</p>`;
    els.followupList.append(node);
  }
}

function speak(message) {
  if (!els.voiceToggle.checked || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(message);
  utterance.lang = "zh-TW";
  utterance.rate = 1;
  window.speechSynthesis.speak(utterance);
}

function updateTimerBanner(text, tone = "normal") {
  els.timerBanner.textContent = text;
  els.timerBanner.classList.remove("is-warning", "is-danger");
  if (tone === "warning") els.timerBanner.classList.add("is-warning");
  if (tone === "danger") els.timerBanner.classList.add("is-danger");
}

function renderMilestones() {
  els.mark30.classList.remove("is-active", "is-danger");
  els.mark45.classList.remove("is-active", "is-danger");
  els.markEnd.classList.remove("is-active", "is-danger");
  if (state.cueMarks.has("30")) els.mark30.classList.add("is-active");
  if (state.cueMarks.has("45")) els.mark45.classList.add("is-danger");
  if (state.cueMarks.has("5")) els.markEnd.classList.add("is-danger");
}

function renderTimer() {
  els.timerValue.textContent = formatTime(state.remainingSeconds);
  const running = Boolean(state.timerId);
  els.timerStatus.textContent = running ? "倒數中" : "待開始";
  els.timerStart.disabled = running;
  els.timerPause.disabled = !running;
  els.timerPresets.forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.seconds) === state.totalSeconds);
  });
  renderMilestones();
  renderSessionControls();
}

function handleThresholds() {
  const elapsed = state.totalSeconds - state.remainingSeconds;
  if (elapsed >= 30 && !state.cueMarks.has("30")) {
    state.cueMarks.add("30");
    updateTimerBanner("30 秒了，準備收斂重點。", "warning");
    speak("三十秒，準備收斂重點");
  }
  if (elapsed >= 45 && !state.cueMarks.has("45")) {
    state.cueMarks.add("45");
    updateTimerBanner("45 秒了，現在應該收尾。", "danger");
    speak("四十五秒，現在收尾");
  }
  if (state.remainingSeconds <= 5 && state.remainingSeconds > 0 && !state.cueMarks.has("5")) {
    state.cueMarks.add("5");
    updateTimerBanner("剩 5 秒，用一句話結尾。", "danger");
    speak("剩五秒，用一句話結尾");
  }
  renderMilestones();
}

function startTimer() {
  if (state.timerId) return;
  state.timerId = window.setInterval(() => {
    state.remainingSeconds -= 1;
    renderTimer();
    handleThresholds();
    if (state.remainingSeconds <= 0) {
      pauseTimer();
      state.remainingSeconds = 0;
      renderTimer();
      updateTimerBanner("時間到，直接停下來。", "danger");
      speak("時間到，停");
    }
  }, 1000);
  renderTimer();
}

function pauseTimer() {
  window.clearInterval(state.timerId);
  state.timerId = null;
  renderTimer();
}

function resetTimer() {
  pauseTimer();
  state.remainingSeconds = state.totalSeconds;
  state.cueMarks = new Set();
  renderTimer();
  updateTimerBanner("按下開始後，直接回答題目。");
}

function setTimerPreset(seconds) {
  state.totalSeconds = seconds;
  state.remainingSeconds = seconds;
  state.cueMarks = new Set();
  renderTimer();
  updateTimerBanner(`目前是 ${seconds} 秒模式。`);
}

function renderSessionControls() {
  const timerRunning = Boolean(state.timerId);
  const isRecording = Boolean(mediaRecorder && mediaRecorder.state === "recording");
  const hasQuestion = Boolean(currentQuestion());
  const active = timerRunning || isRecording;

  els.answerStart.disabled = !hasQuestion || active;
  els.answerStop.disabled = !active;
}

function setRecordStatus(pill, text, tone = "normal") {
  els.recordPill.textContent = pill;
  els.recordStatus.textContent = text;
  els.recordPill.classList.remove("is-warning", "is-danger");
  if (tone === "warning") els.recordPill.classList.add("is-warning");
  if (tone === "danger") els.recordPill.classList.add("is-danger");
  renderSessionControls();
}

function renderRecordControls() {
  const hasAudio = Boolean(els.recordAudio.src);
  const isRecording = Boolean(mediaRecorder && mediaRecorder.state === "recording");
  els.recordStart.disabled = isRecording;
  els.recordStop.disabled = !isRecording;
  els.recordPlay.disabled = !hasAudio || isRecording;
  els.recordClear.disabled = !hasAudio && !isRecording;
  renderSessionControls();
}

function clearRecordUrl() {
  if (recordAudioUrl) {
    URL.revokeObjectURL(recordAudioUrl);
    recordAudioUrl = null;
  }
}

function resetRecording() {
  setRecordStatus("尚未錄音", "先抽一題，再按開始作答。");
  clearRecordUrl();
  els.recordAudio.removeAttribute("src");
  els.recordAudio.load();
  els.audioHint.textContent = "目前還沒有錄音檔。";
  renderRecordControls();
}

async function startAnswerSession() {
  if (!currentQuestion()) return;
  resetTimer();
  resetRecording();
  startTimer();
  await startRecording();
}

function stopAnswerSession() {
  pauseTimer();
  stopRecording();
}

async function startRecording() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    setRecordStatus("不支援", "這個瀏覽器不支援錄音", "danger");
    return;
  }
  if (mediaRecorder && mediaRecorder.state === "recording") return;

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recordChunks = [];
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.addEventListener("dataavailable", (event) => {
      if (event.data.size > 0) recordChunks.push(event.data);
    });
    mediaRecorder.addEventListener("stop", () => {
      clearRecordUrl();
      const blob = new Blob(recordChunks, { type: mediaRecorder.mimeType || "audio/webm" });
      recordAudioUrl = URL.createObjectURL(blob);
      els.recordAudio.src = recordAudioUrl;
      setRecordStatus("已錄音", "可以直接播放回聽");
      els.audioHint.textContent = "錄音完成，可以播放回聽。";
      renderRecordControls();
      mediaRecorder.stream.getTracks().forEach((track) => track.stop());
    });
    mediaRecorder.start();
    setRecordStatus("錄音中", "正在錄音，答完再按停止", "warning");
    els.audioHint.textContent = "錄音中，答完再按停止。";
    renderRecordControls();
  } catch (error) {
    setRecordStatus("無法錄音", "請先允許瀏覽器使用麥克風", "danger");
  }
}

function stopRecording() {
  if (!mediaRecorder || mediaRecorder.state !== "recording") return;
  mediaRecorder.stop();
}

function playRecording() {
  if (!els.recordAudio.src) {
    setRecordStatus("尚未錄音", "請先錄一段再播放");
    return;
  }
  els.recordAudio.play();
  setRecordStatus("播放中", "正在回放你的回答");
}

function clearRecording() {
  if (mediaRecorder && mediaRecorder.state === "recording") {
    mediaRecorder.stop();
  }
  resetRecording();
}

function attachEvents() {
  els.modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      els.modeButtons.forEach((node) => node.classList.toggle("is-active", node === button));
      buildQueue();
    });
  });

  els.buildQueue.addEventListener("click", buildQueue);
  els.nextQuestion.addEventListener("click", nextQuestion);
  els.revealAnswer.addEventListener("click", revealAnswer);
  els.revealFollowup.addEventListener("click", revealFollowups);
  els.answerStart.addEventListener("click", () => {
    void startAnswerSession();
  });
  els.answerStop.addEventListener("click", stopAnswerSession);

  els.timerStart.addEventListener("click", startTimer);
  els.timerPause.addEventListener("click", pauseTimer);
  els.timerReset.addEventListener("click", resetTimer);
  els.timerPresets.forEach((button) => {
    button.addEventListener("click", () => {
      setTimerPreset(Number(button.dataset.seconds));
    });
  });

  els.recordStart.addEventListener("click", startRecording);
  els.recordStop.addEventListener("click", stopRecording);
  els.recordPlay.addEventListener("click", playRecording);
  els.recordClear.addEventListener("click", clearRecording);
}

function init() {
  renderStage();
  renderTimer();
  resetRecording();
  renderSessionControls();
  attachEvents();
}

init();
