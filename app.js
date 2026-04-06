const questionSeed = [
  {
    id: 1,
    category: "必答核心題",
    priority: "高",
    round: 1,
    prompt: "請做 30-45 秒自我介紹",
    answerType: "30 秒自我介紹",
    keyPoints: ["現任 CMO", "跨域轉譯與流程制度化", "報考 PMBM 是為了提升專業產業管理能力"],
    shortAnswer:
      "各位老師好，我是鄒松樺，東吳微生物學系畢業，目前擔任 SPG Holdings 的首席行銷總監。我的核心經驗是在高度專業環境中做跨域轉譯、流程制度化與協作整合。我報考 PMBM，是希望把這些實務經驗再往上提升成更完整的專業產業管理能力。",
    followUps: [
      {
        question: "如果要再多說一句，你最核心的能力是什麼？",
        answer: "我最核心的能力，是在高度專業環境中做跨域轉譯與流程制度化，讓複雜資訊變成團隊可以協作與執行的模式。"
      },
      {
        question: "你希望在 PMBM 最先補強什麼？",
        answer: "我最想先補強的是專業產業中的治理與整合視角，特別是法規、風險與跨部門協作的連動理解。"
      }
    ],
    coachNote: "前 10 秒先講現在是誰，不要先講求學歷程。"
  },
  {
    id: 2,
    category: "必答核心題",
    priority: "高",
    round: 1,
    prompt: "你為什麼報考台大 PMBM？",
    answerType: "45 秒報考動機",
    keyPoints: ["工作上碰到治理與風險問題", "一般行銷能力已不夠", "PMBM 能補專業、管理與法規"],
    shortAnswer:
      "我報考 PMBM，主要是因為這幾年的工作讓我很清楚看到，單靠前端市場或專案能力不夠，還需要理解法規、風險、治理與跨部門協作。PMBM 不是單純一般管理課程，而是把專業、管理與法規放在一起訓練，這和我下一階段想培養的能力最貼近。",
    followUps: [
      {
        question: "那你工作中最明顯碰到的治理問題是什麼？",
        answer: "我最明顯感受到的是，當組織處在高度專業又資訊不對稱的環境時，前端拓展和後端制度如果沒有同步，成長很容易卡住，甚至產生風險。"
      },
      {
        question: "為什麼是現在，而不是再晚幾年？",
        answer: "因為我現在已經不是在探索興趣，而是很明確碰到管理瓶頸，所以我希望在還能把工作經驗和學習互相驗證的階段進來讀。"
      }
    ],
    coachNote: "第一句先回答原因，不要先鋪陳背景。"
  },
  {
    id: 3,
    category: "必答核心題",
    priority: "高",
    round: 1,
    prompt: "你為什麼適合 PMBM？",
    answerType: "45 秒適配度",
    keyPoints: ["不是單一技術型，而是整合型", "有理科基礎也有管理實務", "擅長在專業之間搭橋"],
    shortAnswer:
      "我覺得自己適合 PMBM，不是因為我是最典型的生技背景，而是因為我同時有理科訓練基礎、跨域整合實務，以及在高度專業環境中做制度化與協作推動的經驗。PMBM 重視的是專業場域中的管理能力，而這正是我現在想深化的方向。",
    followUps: [],
    coachNote: "重點是講你和學程的能力對位。"
  },
  {
    id: 4,
    category: "必答核心題",
    priority: "高",
    round: 1,
    prompt: "你現在在資產管理顧問，為什麼不是念 MBA／PMBA？",
    answerType: "45 秒學程比較",
    keyPoints: ["想學的是專業場域管理", "不是一般商管工具而已", "PMBM 更貼近未來方向"],
    shortAnswer:
      "如果只是補一般商管知識，MBA 或 PMBA 當然也是選項，但我真正想學的不是單純工具，而是如何在高度專業、法規敏感的產業裡做整合型管理。我現在的工作其實就很常碰到這類問題，所以 PMBM 對我來說更貼近未來方向。",
    followUps: [
      {
        question: "你覺得 PMBM 和 PMBA 最大差別是什麼？",
        answer: "我理解 PMBM 更強調專業產業中的管理脈絡，特別是結合法規、專業知識與跨域協作，這和我想學的東西更接近。"
      },
      {
        question: "你真的會用到 PMBM 學到的東西嗎？",
        answer: "會，因為我現在工作就已經在面對專業轉譯、風險意識與協作整合，只是我希望把這些實務經驗提升成更完整的方法。"
      }
    ],
    coachNote: "不要講成 PMBA 不好，重點放在適配性。"
  },
  {
    id: 5,
    category: "必答核心題",
    priority: "高",
    round: 2,
    prompt: "你和 PMBM 的連結是什麼？",
    answerType: "45 秒連結性",
    keyPoints: ["理科背景", "專業轉譯工作", "想深化專業產業管理能力"],
    shortAnswer:
      "我和 PMBM 的連結，不是我現在就在典型生技公司，而是我同時有理科背景，也長期在高度專業、資訊不對稱、需要法規與風險意識的場景中工作。我現在最想提升的，就是在這類專業產業裡做整合型管理的能力。",
    followUps: [],
    coachNote: "講本質連結，不要硬湊產業標籤。"
  },
  {
    id: 6,
    category: "必答核心題",
    priority: "中",
    round: 2,
    prompt: "你未來 3 到 5 年的規劃是什麼？",
    answerType: "45 秒職涯規劃",
    keyPoints: ["補強治理與整合能力", "從功能角色走向整體管理", "持續靠近高度專業產業管理"],
    shortAnswer:
      "未來 3 到 5 年，我希望先把自己從現在的跨域整合角色，進一步提升成更完整的營運與治理型管理者。具體來說，我想補足法規、風險與跨部門協作的視角，未來持續往高度專業產業的管理角色發展。",
    followUps: [],
    coachNote: "方向要清楚，不必把職稱講得太死。"
  },
  {
    id: 7,
    category: "必答核心題",
    priority: "高",
    round: 1,
    prompt: "你最重要的一個管理成就是什麼？",
    answerType: "60 秒管理成就",
    keyPoints: ["研討會制度化", "重整 SOP 與角色分工", "活動規模從 20 人到 70+ 人"],
    shortAnswer:
      "我目前最有代表性的管理成就，是協助公司把原本較依賴人治的研討會運作，逐步建立成制度化流程。我重新梳理 SOP、角色分工與現場協作邏輯，之後活動規模從二十多人穩定成長到七十人以上。對我來說，最重要的不只是人數成長，而是把事情做成一套別人也能運作的機制。",
    followUps: [
      {
        question: "你在這個案例裡最關鍵的角色是什麼？",
        answer: "我最關鍵的角色，是把原本仰賴個人經驗的流程整理成可複製的制度，並在策略端和執行端之間建立共同語言。"
      },
      {
        question: "如果沒有你，這件事會怎麼樣？",
        answer: "我覺得活動還是會辦，但很難穩定擴張，因為原本最大的問題就是太依賴少數人的臨場決策。"
      }
    ],
    coachNote: "只講一個案例，不要分散到太多專案。"
  },
  {
    id: 8,
    category: "必答核心題",
    priority: "高",
    round: 1,
    prompt: "你最深刻的一次挫折是什麼？學到什麼？",
    answerType: "60 秒挫折學習",
    keyPoints: ["單點優化救不了整體失衡", "治理與信任更重要", "因此想補營運視角"],
    shortAnswer:
      "我最深刻的挫折，是曾經發現自己即使把單一流程優化得很好，仍然無法阻止整體組織治理失衡帶來的動盪。那次經驗讓我意識到，前端做得再好，如果制度、風險控管和信任結構不足，組織還是會很脆弱。也因為這樣，我更確定自己未來想補的是更完整的營運與治理視角。",
    followUps: [
      {
        question: "那你後來實際改變了什麼？",
        answer: "我後來更重視制度、授權和風險底線，不再只追求把眼前事情做好，而是會先想這個做法能不能被組織承接。"
      },
      {
        question: "這個挫折對你報考 PMBM 的影響是什麼？",
        answer: "它讓我更確定，自己需要的不只是功能面能力，而是更完整的治理與營運視角。"
      }
    ],
    coachNote: "聚焦學習，不要講成抱怨前公司。"
  },
  {
    id: 9,
    category: "必答核心題",
    priority: "高",
    round: 2,
    prompt: "你能為 PMBM 帶來什麼？",
    answerType: "45 秒班級貢獻",
    keyPoints: ["跨領域轉譯能力", "社群治理與流程優化", "班級凝聚與專案協作"],
    shortAnswer:
      "我覺得我能帶來三個面向。第一是跨領域轉譯能力，我習慣在不同專業背景的人之間建立共同語言。第二是社群治理與流程優化經驗。第三是我很願意參與班級合作，協助把活動與專案做得更順。",
    followUps: [],
    coachNote: "這題看人格與同儕適配，語氣可以更溫和。"
  },
  {
    id: 10,
    category: "必答核心題",
    priority: "中",
    round: 2,
    prompt: "你工作很忙，怎麼兼顧課業？",
    answerType: "45 秒時間管理",
    keyPoints: ["已有在職進修經驗", "習慣安排優先順序", "把學習當長期投資"],
    shortAnswer:
      "我對在職進修的節奏並不陌生，過去就有持續進修經驗，也很習慣透過優先順序和流程化方式安排工作。我不會把 PMBM 當成額外負擔，而是會把它視為未來幾年最重要的能力投資。",
    followUps: [],
    coachNote: "不要只說我很努力，要講你已有方法。"
  },
  {
    id: 11,
    category: "必答核心題",
    priority: "中",
    round: 2,
    prompt: "如果錄取，你最想學到什麼？",
    answerType: "45 秒學習目標",
    keyPoints: ["法規與風險視角", "整體營運協作", "可持續制度化能力"],
    shortAnswer:
      "如果錄取，我最想帶走的不是單一工具，而是一套能處理高度專業產業複雜性的管理框架。特別是法規與風險理解、跨部門協作，以及從專業知識走向可持續運作模式的能力。",
    followUps: [],
    coachNote: "不要講成什麼都想學。"
  },
  {
    id: 12,
    category: "必答核心題",
    priority: "高",
    round: 1,
    prompt: "PMBM 為什麼要錄取你？",
    answerType: "45 秒錄取理由",
    keyPoints: ["動機明確", "有跨域整合實務", "能對班上有貢獻"],
    shortAnswer:
      "我覺得 PMBM 可以錄取我，主要有三個原因。第一，我的報考動機很明確，我不是來補一個學歷，而是已經在工作裡碰到跨域整合與治理問題。第二，我有真實的管理實務。第三，我不只會從這裡學習，也能在同儕交流與班級合作中帶來實際貢獻。",
    followUps: [
      {
        question: "你覺得你和其他考生最不一樣的是什麼？",
        answer: "我覺得我比較特別的地方，是我不是走單一路徑，而是同時有理科基礎、跨域整合實務和社群治理經驗。"
      },
      {
        question: "你進來後會怎麼參與班上？",
        answer: "我會很願意參與班級活動、協助專案推進，也希望能在跨背景同學之間扮演連結與整合的角色。"
      }
    ],
    coachNote: "講三點就夠，第三點講完收尾。"
  },
  {
    id: 13,
    category: "高機率挑戰題",
    priority: "高",
    round: 1,
    prompt: "你不是典型生技背景，為什麼要念 PMBM？",
    answerType: "45 秒挑戰題",
    keyPoints: ["不是技術型而是整合型", "有理科訓練基礎", "想學專業產業管理"],
    shortAnswer:
      "我理解自己不是最典型的生技產業申請者，但我認為自己適合 PMBM 的地方，不是單一技術，而是我有理科訓練基礎，也有長期跨域整合的實務經驗。我現在最常做的事情，是把複雜專業資訊轉成客戶、團隊與組織都能運作的模式。我希望進一步學的是高度專業產業中的管理能力。",
    followUps: [
      {
        question: "那你覺得自己的生技連結在哪裡？",
        answer: "我不會說自己現在是技術型生技人才，但我的理科背景讓我能理解科學邏輯，而我現在想發展的是專業產業中的管理能力。"
      },
      {
        question: "你不怕進來後跟不上嗎？",
        answer: "我覺得在技術面我會保持謙虛，但在跨域整合、管理實務和同儕交流上，我反而有可以帶進來的經驗。"
      }
    ],
    coachNote: "先承認非典型，再重定義你的優勢。"
  },
  {
    id: 14,
    category: "高機率挑戰題",
    priority: "高",
    round: 1,
    prompt: "你微生物背景現在還剩多少？",
    answerType: "30 秒敏感題",
    keyPoints: ["沒走純技術路線", "不硬說還很熟", "保留理科分析方式"],
    shortAnswer:
      "老實說，我畢業後沒有持續走實驗或純研究路線，所以如果是非常技術性的微生物內容，我不會說自己現在還很熟。不過那段訓練留下來的，不只是知識本身，而是我理解證據、建立邏輯架構、面對複雜資訊時的分析方式。",
    followUps: [
      {
        question: "那這樣你的理科背景還有什麼用？",
        answer: "我覺得它最大的價值是分析框架，讓我面對複雜資訊時，會先拆邏輯、找證據、看系統關係。"
      },
      {
        question: "如果教授問你生技技術細節怎麼辦？",
        answer: "我會誠實回答自己現在不是技術專家，但我會回到我理解的範圍，從管理或產業角度思考問題。"
      }
    ],
    coachNote: "坦白，但不要說自己都忘光了。"
  },
  {
    id: 15,
    category: "高機率挑戰題",
    priority: "高",
    round: 2,
    prompt: "你畢業後沒有持續走生技技術路線，讀 PMBM 的意義是什麼？",
    answerType: "45 秒意義題",
    keyPoints: ["不是補技術而是補管理", "專業場域中的整合能力", "未來可遷移到高度專業產業"],
    shortAnswer:
      "對我來說，讀 PMBM 的意義不是回去補一段技術路線，而是讓我把理科背景和現在的管理實務真正接起來，學會在高度專業、法規敏感的產業裡做更完整的整合型管理。",
    followUps: [],
    coachNote: "這題要拉高，不要自我防守。"
  },
  {
    id: 16,
    category: "高機率挑戰題",
    priority: "高",
    round: 1,
    prompt: "你是不是其實比較想念 PMBA？",
    answerType: "30 秒敏感題",
    keyPoints: ["確實一起思考過", "但 PMBM 不是備案", "PMBM 跨域特色有吸引力"],
    shortAnswer:
      "我在準備申請時，確實也有一起思考 PMBA 和 PMBM，因為我很確定自己想往管理能力深化。不過我後來會認真看待 PMBM，是因為它不是單純一般商管訓練，而是更強調專業背景、管理與法規整合的學習環境。",
    followUps: [
      {
        question: "那你當初為什麼兩邊都報？",
        answer: "因為我很確定自己想深化管理能力，所以有同步評估不同學程，但不是把 PMBM 當陪榜，而是認真看待它的跨域特色。"
      },
      {
        question: "如果 PMBA 也上、PMBM 也上，你怎麼選？",
        answer: "我會看最終自己希望強化的是哪種訓練，但就目前來說，PMBM 對專業場域管理的聚焦是很吸引我的。"
      }
    ],
    coachNote: "可以承認評估過，但不能顯得搖擺。"
  },
  {
    id: 17,
    category: "高機率挑戰題",
    priority: "高",
    round: 2,
    prompt: "你是不是把 PMBM 當另一個選項一起報？",
    answerType: "30 秒敏感題",
    keyPoints: ["同步評估", "不是順便報", "認真看待 PMBM 的訓練價值"],
    shortAnswer:
      "我有同步評估不同學程，但不是把 PMBM 當順便報的選項，而是因為它的跨域結構、專業場域定位與同學背景，對我有實際吸引力。",
    followUps: [],
    coachNote: "千萬不要用『反正課差不多』這種說法。"
  },
  {
    id: 18,
    category: "高機率挑戰題",
    priority: "高",
    round: 1,
    prompt: "如果我們覺得你比較像 PMBA，不像 PMBM，你怎麼回應？",
    answerType: "45 秒定位挑戰",
    keyPoints: ["接受自己非典型", "優勢在跨域整合", "適合專業型產業管理"],
    shortAnswer:
      "我會接受自己不是最典型的 PMBM 考生，但我也認為這正是我的差異化。我的優勢不在單一生技技術，而是在高度專業的場域中，做跨域轉譯、流程制度化與協作整合。對 PMBM 這種強調跨領域交流與專業產業管理的學程來說，我覺得我不是不像，而是以不同路徑對上它想培養的能力。",
    followUps: [
      {
        question: "那你覺得 PMBM 最需要哪種學生？",
        answer: "我覺得除了技術背景強的人，也需要能把不同專業串起來的人，因為專業產業的管理本來就需要跨域溝通。"
      },
      {
        question: "你的差異化會怎麼幫助班上？",
        answer: "我可以帶來比較多整合型視角，尤其是在把專業內容轉成可討論、可協作、可執行的架構上。"
      }
    ],
    coachNote: "不要 defensive，語氣要穩。"
  },
  {
    id: 19,
    category: "高機率挑戰題",
    priority: "高",
    round: 1,
    prompt: "你的工作和生技醫療距離不近，怎麼說服我們這不是斷裂？",
    answerType: "45 秒產業距離題",
    keyPoints: ["產業不同但管理本質相近", "同樣高度專業與法規敏感", "不是斷裂而是延伸"],
    shortAnswer:
      "我現在雖然不在典型生技公司，但我面對的工作場景同樣是高度專業、資訊不對稱，而且很需要風險意識和跨專業協作。這讓我越來越清楚看到，自己需要的不只是前端拓展能力，而是更完整的治理與整合視角。",
    followUps: [
      {
        question: "那你現在工作最像生技管理的地方是什麼？",
        answer: "我覺得最像的是都處在高度專業、資訊不對稱、需要風險意識和跨專業合作的環境，管理難度其實很相近。"
      },
      {
        question: "你未來會想更靠近生醫場域嗎？",
        answer: "會，我對這類高度專業產業的管理很有興趣，也希望先把自己培養成能在這種場域中創造價值的人。"
      }
    ],
    coachNote: "核心是講管理本質相近，不要硬說自己現在就在生技。"
  },
  {
    id: 20,
    category: "高機率挑戰題",
    priority: "高",
    round: 2,
    prompt: "你說的 general management 具體是什麼？",
    answerType: "45 秒概念題",
    keyPoints: ["法規與風險結構", "整體營運協作", "建立可持續制度"],
    shortAnswer:
      "我說的 general management 不是什麼都想學，而是我很清楚自己想補足三件事：法規與風險結構的理解、從單一部門優化提升到整體營運協作，以及建立可持續、可複製的制度。這三件事才是我下一階段真正缺的。",
    followUps: [],
    coachNote: "回答要具體，避免空泛。"
  },
  {
    id: 21,
    category: "高機率挑戰題",
    priority: "中",
    round: 2,
    prompt: "你未來真的會往生技醫療發展嗎？",
    answerType: "45 秒未來產業題",
    keyPoints: ["不把自己綁死在單一職稱", "明確想進入高度專業產業管理", "生醫是有興趣的方向"],
    shortAnswer:
      "我不會把未來限定成某一個職稱，但我很確定自己想投入的是高度專業產業中的管理工作。生技醫療當然是我很有興趣的方向，因為它同時牽涉專業知識、法規、商業化和跨部門合作。",
    followUps: [],
    coachNote: "開放但不要飄。"
  },
  {
    id: 22,
    category: "高機率挑戰題",
    priority: "中",
    round: 2,
    prompt: "如果畢業後仍留在現在類似產業，PMBM 對你有什麼價值？",
    answerType: "45 秒學位價值題",
    keyPoints: ["把專業場域中的管理能力做深", "治理與法規能力可遷移", "不只對單一產業有用"],
    shortAnswer:
      "就算我畢業後仍留在類似產業，PMBM 對我仍然很有價值，因為我想學的不是單一產業知識，而是高度專業場域中的整合型管理能力。這些能力在很多知識密集產業都會用到。",
    followUps: [],
    coachNote: "把價值講成可遷移，而不是備用方案。"
  },
  {
    id: 23,
    category: "管理經驗追問",
    priority: "高",
    round: 2,
    prompt: "你建立 SOP，具體改了哪三件事？",
    answerType: "45 秒拆解題",
    keyPoints: ["流程標準化", "角色與判斷權清楚", "資訊同步與工具化"],
    shortAnswer:
      "如果拆成三件事，第一是把流程拆清楚，從企劃、邀請、現場分流到後續追蹤都標準化。第二是把角色與判斷權定義清楚。第三是用數位工具把資訊同步與追蹤做起來，降低跨部門資訊落差。",
    followUps: [
      {
        question: "三件事裡最難的是哪一件？",
        answer: "我覺得最難的是角色與判斷權的重整，因為那牽涉到既有習慣、信任和授權邏輯。"
      },
      {
        question: "你怎麼讓大家真的照 SOP 走？",
        answer: "我不是只把流程寫下來，而是搭配分工說明、資訊同步工具和現場演練，讓大家能真的用起來。"
      }
    ],
    coachNote: "這題就老老實實列三點，最清楚。"
  },
  {
    id: 24,
    category: "管理經驗追問",
    priority: "中",
    round: 2,
    prompt: "你怎麼證明 SOP 有效？",
    answerType: "45 秒成效驗證",
    keyPoints: ["規模變大", "協作更穩", "對單一主管依賴降低"],
    shortAnswer:
      "我會從三個面向看：活動規模是否能穩定放大、現場協作是否更順，以及團隊是否不再高度依賴單一主管的即時決策。這三個現象都有改善，所以我認為 SOP 不是形式，而是真的有用。",
    followUps: [],
    coachNote: "效果要具體，不要只說變比較好。"
  },
  {
    id: 25,
    category: "管理經驗追問",
    priority: "高",
    round: 2,
    prompt: "研討會從 20 人到 70+，最關鍵的管理動作是什麼？",
    answerType: "45 秒關鍵動作",
    keyPoints: ["關鍵不是宣傳而是制度化", "前線能自主判斷", "降低對單一主管依賴"],
    shortAnswer:
      "我覺得最關鍵的管理動作，不是宣傳做得更多，而是把原本依賴單一主管的運作，改成團隊可以穩定複製的制度。當第一線同仁有清楚分工、資訊同步和基本判斷空間之後，活動規模才有辦法穩定放大。",
    followUps: [
      {
        question: "那你怎麼知道不是單純市場變好？",
        answer: "因為規模放大的同時，流程穩定度和團隊協作也明顯改善，這不是單純流量變多，而是組織承接能力提升。"
      },
      {
        question: "你覺得下一步還可以怎麼放大？",
        answer: "如果要再放大，我會再補 CRM、客戶分層和跨場次資料回收，讓前後端更完整串起來。"
      }
    ],
    coachNote: "第一句直接下判斷，會比較有力。"
  },
  {
    id: 26,
    category: "管理經驗追問",
    priority: "高",
    round: 2,
    prompt: "你怎麼處理跨部門摩擦？",
    answerType: "45 秒協作題",
    keyPoints: ["先釐清資訊落差", "把分工與判斷權說清楚", "讓衝突回到流程而不是個人"],
    shortAnswer:
      "我處理跨部門摩擦時，會先看是不是資訊不同步或角色定義不清。只要把共同目標、分工和判斷權釐清，很多摩擦就會回到流程問題，而不是個人問題。",
    followUps: [],
    coachNote: "這題要成熟，不要像在抱怨同事。"
  },
  {
    id: 27,
    category: "管理經驗追問",
    priority: "中",
    round: 3,
    prompt: "你怎麼做授權？",
    answerType: "45 秒授權題",
    keyPoints: ["先定範圍", "給判斷空間", "保留回報節點"],
    shortAnswer:
      "我做授權時，會先把目標、邊界和決策範圍說清楚，再給對方足夠的判斷空間，同時保留幾個必要的回報節點。這樣不是放手不管，而是讓協作更有效率。",
    followUps: [],
    coachNote: "不要講成全部自己看。"
  },
  {
    id: 28,
    category: "管理經驗追問",
    priority: "中",
    round: 3,
    prompt: "你遇過最難合作的利害關係人是誰？",
    answerType: "45 秒利害關係人題",
    keyPoints: ["立場不同不是人有問題", "先理解顧慮", "再找共同目標"],
    shortAnswer:
      "我遇過最難合作的情況，通常不是對方難相處，而是各自承擔的風險不同。我會先理解對方顧慮，再把討論拉回共同目標和可執行的分工，這樣比較能把對立轉成協作。",
    followUps: [],
    coachNote: "別講太細，避免出現特定人名。"
  },
  {
    id: 29,
    category: "管理經驗追問",
    priority: "高",
    round: 2,
    prompt: "你怎麼說服習慣人治的人接受制度化？",
    answerType: "45 秒制度推動",
    keyPoints: ["先尊重既有做法", "用痛點和好處溝通", "先做能看到效果的小改動"],
    shortAnswer:
      "我不會一開始就用制度對抗既有習慣，而是先理解對方原本為什麼這樣做，再從最明顯的痛點切入，讓大家看到制度化不是為了增加麻煩，而是減少摩擦、提升效率。通常先做幾個可見的小改動，比一次推整套更有效。",
    followUps: [],
    coachNote: "這題看你是不是有推動變革的成熟度。"
  },
  {
    id: 30,
    category: "管理經驗追問",
    priority: "中",
    round: 3,
    prompt: "你做過最有風險意識的一次決策是什麼？",
    answerType: "45 秒風險判斷",
    keyPoints: ["看長期信任", "不只看短期方便", "考慮制度與法律底線"],
    shortAnswer:
      "我覺得最有風險意識的一次決策，是在組織動盪時，不只考慮眼前怎麼快速處理，而是回頭看制度、法律和信任底線。因為短期方便的做法，可能換來更大的後續風險。",
    followUps: [],
    coachNote: "抓原則，不用講太多內幕。"
  },
  {
    id: 31,
    category: "管理經驗追問",
    priority: "中",
    round: 3,
    prompt: "你提到勞資風險，那次你怎麼判斷與溝通？",
    answerType: "45 秒勞資治理題",
    keyPoints: ["先看制度與法規底線", "用風險語言和高層溝通", "目標是守住信任"],
    shortAnswer:
      "我當時的判斷邏輯很簡單，先看制度與法規底線，再評估如果處理不當，對公司和同事各自會造成什麼風險。溝通時我不是用情緒，而是用風險與後果的語言和高層討論，最後目標是守住基本信任。",
    followUps: [],
    coachNote: "這題適合講成熟度，不適合講八卦。"
  },
  {
    id: 32,
    category: "管理經驗追問",
    priority: "中",
    round: 3,
    prompt: "如果重來一次，你會怎麼做得更好？",
    answerType: "45 秒反思題",
    keyPoints: ["更早建立制度", "更早做溝通", "不只救火也看全局"],
    shortAnswer:
      "如果重來一次，我會更早做兩件事：一是更早把制度和角色定義清楚，二是更早和關鍵利害關係人建立共同認知。因為很多問題不是事情發生當下才出現，而是前面沒先處理好。",
    followUps: [],
    coachNote: "這題就是成熟反思，不要過度自責。"
  },
  {
    id: 33,
    category: "PMBM理解題",
    priority: "高",
    round: 2,
    prompt: "你對 PMBM 的理解是什麼？",
    answerType: "45 秒學程理解",
    keyPoints: ["跨院跨域學程", "專業、管理、法規整合", "重視實務與同儕交流"],
    shortAnswer:
      "我對 PMBM 的理解，是它不是單純教管理工具的學程，而是把生技醫療這種高度專業、法規密集、跨領域合作頻繁的產業，當作管理訓練的核心場景。它的價值除了課程本身，也來自跨院師資、實務導向，以及和不同背景同學的交流。",
    followUps: [
      {
        question: "哪個部分最吸引你？",
        answer: "最吸引我的是它不是抽象談管理，而是放在生技醫療這種高度專業又法規密集的場景裡談管理。"
      },
      {
        question: "你最想和哪類同學交流？",
        answer: "我最想和有研發、臨床、醫材或法規背景的同學交流，因為我很希望從不同專業角度理解管理問題。"
      }
    ],
    coachNote: "不要只背官網，用你自己的理解說。"
  },
  {
    id: 34,
    category: "PMBM理解題",
    priority: "中",
    round: 3,
    prompt: "PMBM 最吸引你的課程或訓練是什麼？",
    answerType: "45 秒課程吸引力",
    keyPoints: ["專業與管理並行", "法規和實務結合", "跨背景同學交流"],
    shortAnswer:
      "最吸引我的，不是某一門單一課程，而是 PMBM 把專業、管理和法規放在一起思考，並且有很強的實務與同儕交流特性。這種學習方式對我來說比單一知識更有價值。",
    followUps: [],
    coachNote: "不一定要講出所有課名，講理解即可。"
  },
  {
    id: 35,
    category: "PMBM理解題",
    priority: "中",
    round: 3,
    prompt: "你最想補強的是管理、法規還是產業理解？為什麼？",
    answerType: "45 秒補強重點",
    keyPoints: ["法規與風險結構", "整體營運視角", "和現職痛點最直接相關"],
    shortAnswer:
      "如果一定要選一個，我最想先補強的是法規與風險結構的理解，因為這和我現在工作裡最明顯碰到的治理問題最直接相關。當然我也會希望把這個能力和整體營運視角一起串起來。",
    followUps: [],
    coachNote: "先選一個，不要三個都要。"
  },
  {
    id: 36,
    category: "PMBM理解題",
    priority: "高",
    round: 2,
    prompt: "你覺得 PMBM 和 PMBA 最大差別是什麼？",
    answerType: "45 秒學程差異",
    keyPoints: ["PMBM 更強調專業場域", "PMBA 更偏一般管理脈絡", "差別在訓練場景"],
    shortAnswer:
      "我覺得最大的差別不只是課名，而是訓練場景。PMBM 更強調在高度專業、法規密集、跨領域合作頻繁的產業裡談管理，而這正是我比較想進一步理解的場景。",
    followUps: [],
    coachNote: "講差異，不要做價值高低比較。"
  },
  {
    id: 37,
    category: "PMBM理解題",
    priority: "中",
    round: 3,
    prompt: "你最想和哪類型同學交流？",
    answerType: "30 秒同儕學習",
    keyPoints: ["研發、臨床、醫材、法規", "想聽不同專業怎麼看管理", "你擅長把不同觀點串起來"],
    shortAnswer:
      "我最想和有研發、臨床、醫材或法規背景的同學交流，因為我很想理解不同專業的人是怎麼看管理問題的。我也希望自己能在這種交流裡扮演整合觀點的角色。",
    followUps: [],
    coachNote: "這題要有同儕感，不要只講想學老師。"
  },
  {
    id: 38,
    category: "PMBM理解題",
    priority: "中",
    round: 3,
    prompt: "你未來可能的論文方向是什麼？",
    answerType: "45 秒論文方向",
    keyPoints: ["專業知識如何制度化", "跨部門協作", "專業產業的商業化與治理"],
    shortAnswer:
      "如果現在先初步想，我會對專業知識如何被轉化成可持續運作的組織能力很有興趣。像是高度專業產業裡，跨部門協作、制度化與商業化之間的關係，我覺得都很值得研究。",
    followUps: [],
    coachNote: "不用太學術，但要有方向。"
  },
  {
    id: 39,
    category: "PMBM理解題",
    priority: "中",
    round: 3,
    prompt: "你希望把什麼工作經驗帶進課堂？",
    answerType: "45 秒課堂貢獻",
    keyPoints: ["專業轉譯", "制度化案例", "社群治理與協作"],
    shortAnswer:
      "我希望帶進課堂的，是在高度專業環境中做轉譯、制度化與協作推動的實務經驗。這些經驗可能不完全是典型生技案例，但我覺得在管理本質上很有討論價值。",
    followUps: [],
    coachNote: "這題很適合強調你的差異化。"
  },
  {
    id: 40,
    category: "PMBM理解題",
    priority: "中",
    round: 3,
    prompt: "你在個案討論中會扮演什麼角色？",
    answerType: "30 秒課堂角色",
    keyPoints: ["整合型角色", "把複雜內容整理清楚", "促進不同觀點對話"],
    shortAnswer:
      "我覺得我在個案討論裡，會比較自然扮演整合型角色。就是把不同人的觀點和資訊整理清楚，讓討論更聚焦，也讓不同背景的人比較容易互相接上。",
    followUps: [],
    coachNote: "這題不要講自己什麼都會，講角色就好。"
  },
  {
    id: 41,
    category: "時事與產業題",
    priority: "高",
    round: 2,
    prompt: "你怎麼看台灣生醫產業的發展機會？",
    answerType: "45 秒產業趨勢",
    keyPoints: ["AI 醫療、精準健康、數位醫療有機會", "台灣有醫療與科技優勢", "挑戰在商業化與法規"],
    shortAnswer:
      "我覺得台灣生醫產業的機會很大，特別是在 AI 醫療、精準健康、數位醫療和跨域資料應用上。台灣本來就有不錯的醫療體系、科技供應鏈與工程人才，這些都是優勢。不過真正的挑戰還是在商業化、法規、臨床驗證和跨領域整合。",
    followUps: [
      {
        question: "你覺得最大的限制是什麼？",
        answer: "我覺得最大的限制還是在商業化能力、法規驗證週期，以及跨領域人才整合成本高。"
      },
      {
        question: "如果你來提一個方向，你會先做什麼？",
        answer: "我會先強化跨域整合，特別是讓技術、臨床、法規和市場之間更早對話，減少後段落差。"
      }
    ],
    coachNote: "先講機會，再補限制，會比較完整。"
  },
  {
    id: 42,
    category: "時事與產業題",
    priority: "高",
    round: 2,
    prompt: "你怎麼看 AI 對醫療或生技產業的影響？",
    answerType: "45 秒時事題",
    keyPoints: ["效率提升", "資料應用與決策支持", "仍需法規與驗證配合"],
    shortAnswer:
      "我覺得 AI 對醫療和生技產業最大的影響，會是在資料整理、決策支持和流程效率提升上。不過 AI 的價值不會只靠技術本身，還要看資料品質、臨床驗證、法規配套和實際導入場景。",
    followUps: [],
    coachNote: "時事題要有平衡感，不要只講很厲害。"
  },
  {
    id: 43,
    category: "時事與產業題",
    priority: "中",
    round: 3,
    prompt: "你怎麼看精準健康、數位醫療這些趨勢？",
    answerType: "45 秒時事題",
    keyPoints: ["方向正確", "關鍵在資料與整合", "最後還是要能落地"],
    shortAnswer:
      "我覺得精準健康和數位醫療是很重要的方向，但真正的關鍵不是概念本身，而是資料整合、法規驗證和實際導入場景。如果最後無法轉成可被醫療體系承接的模式，趨勢就很難真正落地。",
    followUps: [],
    coachNote: "先肯定方向，再指出落地條件。"
  },
  {
    id: 44,
    category: "時事與產業題",
    priority: "中",
    round: 3,
    prompt: "台灣做生技醫療的優勢與限制是什麼？",
    answerType: "45 秒產業分析",
    keyPoints: ["醫療體系、科技人才是優勢", "市場規模與商業化是限制", "跨域整合是關鍵"],
    shortAnswer:
      "台灣的優勢是有不錯的醫療體系、科技供應鏈和工程人才，這些很適合支撐生醫創新。限制則在市場規模、商業化能力以及法規與驗證成本，所以跨域整合能力會變得很重要。",
    followUps: [],
    coachNote: "答法簡潔就好。"
  },
  {
    id: 45,
    category: "時事與產業題",
    priority: "中",
    round: 3,
    prompt: "如果提升台灣生技競爭力，你會先做哪一件事？",
    answerType: "45 秒策略題",
    keyPoints: ["先做跨域對話", "提早讓研發、法規、市場對接", "減少後段落差"],
    shortAnswer:
      "如果要先做一件事，我會先強化跨域對話，讓研發、法規、臨床和市場更早接起來。因為很多問題不是技術做不出來，而是前後端沒有提早對齊，最後商業化落差太大。",
    followUps: [],
    coachNote: "這題講方向感，不用太政策化。"
  },
  {
    id: 46,
    category: "時事與產業題",
    priority: "中",
    round: 3,
    prompt: "你覺得生技產業最難的是研發、法規、商業化還是人才整合？",
    answerType: "45 秒判斷題",
    keyPoints: ["可選一個核心", "講原因", "承認彼此相連"],
    shortAnswer:
      "如果一定要選，我會先說商業化最難，因為它其實是研發、法規、臨床驗證和市場需求都要一起接上的結果。不過本質上，這幾件事彼此是連動的，所以整合能力特別重要。",
    followUps: [],
    coachNote: "先選一個，不要四個都講。"
  },
  {
    id: 47,
    category: "時事與產業題",
    priority: "中",
    round: 3,
    prompt: "你如何看待法規與創新的拉扯？",
    answerType: "45 秒平衡題",
    keyPoints: ["不是對立", "法規是信任基礎", "重點是怎麼讓創新被承接"],
    shortAnswer:
      "我不會把法規和創新看成完全對立，因為在醫療與生技領域，法規本來就是信任的基礎。真正的問題不是要不要法規，而是怎麼讓法規與驗證機制能更有效承接創新。",
    followUps: [],
    coachNote: "語氣要成熟，不要喊口號。"
  },
  {
    id: 48,
    category: "時事與產業題",
    priority: "中",
    round: 3,
    prompt: "如果教授丟一則健康產業新聞，你會怎麼分析它的管理意義？",
    answerType: "45 秒應變題",
    keyPoints: ["先看趨勢", "再看利害關係人", "最後看法規與商業模式"],
    shortAnswer:
      "如果遇到這種題目，我會先看它反映的是哪一個產業趨勢，再看牽涉哪些利害關係人，最後再從法規、商業模式和組織承接能力去判斷它的管理意義。",
    followUps: [],
    coachNote: "先給分析框架，就不容易亂掉。"
  },
  {
    id: 49,
    category: "臨場反應題",
    priority: "中",
    round: 3,
    prompt: "你最大的優點是什麼？",
    answerType: "30 秒臨場題",
    keyPoints: ["跨域整合", "把複雜事情講清楚", "能把人和流程串起來"],
    shortAnswer:
      "我覺得我最大的優點，是能在不同專業背景的人之間做整合，讓複雜資訊變成可以溝通、可以執行、可以合作的架構。這也是我在工作裡最常被需要的能力。",
    followUps: [],
    coachNote: "優點要和 PMBM 有關。"
  },
  {
    id: 50,
    category: "臨場反應題",
    priority: "中",
    round: 3,
    prompt: "你最大的缺點是什麼？",
    answerType: "30 秒臨場題",
    keyPoints: ["以前比較容易自己扛", "現在更重視授權", "有成長方向"],
    shortAnswer:
      "我過去比較容易先把事情扛起來，傾向自己先整合、自己先補位。後來我慢慢意識到，成熟的管理不是自己撐住全部，而是建立制度、授權團隊，讓事情不依賴單一個人。",
    followUps: [],
    coachNote: "不要回答太完美主義那種空話。"
  },
  {
    id: 51,
    category: "臨場反應題",
    priority: "低",
    round: 4,
    prompt: "你最欣賞哪一位主管或領導者？",
    answerType: "30 秒臨場題",
    keyPoints: ["講特質", "講你認同的管理方式", "回到自己學習"],
    shortAnswer:
      "我通常更欣賞能把方向講清楚、同時又願意授權與培養團隊的領導者。因為我覺得真正成熟的管理，不只是自己能力強，而是能讓整個團隊穩定運作。",
    followUps: [],
    coachNote: "重點是你欣賞的特質，不是背名字。"
  },
  {
    id: 52,
    category: "臨場反應題",
    priority: "中",
    round: 3,
    prompt: "同學或同事不配合你，你怎麼辦？",
    answerType: "45 秒臨場題",
    keyPoints: ["先理解原因", "把問題拉回角色與目標", "必要時調整分工"],
    shortAnswer:
      "我通常會先看不配合是因為資訊不清楚、立場不同，還是真的沒有意願。大部分時候，只要把角色、目標和顧慮講清楚，問題就能回到協作上。如果真的不適合，也要務實調整分工。",
    followUps: [],
    coachNote: "不要太硬，也不要太軟。"
  },
  {
    id: 53,
    category: "臨場反應題",
    priority: "中",
    round: 3,
    prompt: "如果這次沒錄取，你怎麼看？",
    answerType: "30 秒臨場題",
    keyPoints: ["當然會失望", "但不會否定自己", "會繼續累積與修正"],
    shortAnswer:
      "我當然會失望，但我不會把它看成否定，而是提醒自己還有哪些地方需要更成熟。我本來就有持續進修和累積實務經驗的習慣，所以我會繼續準備，用更完整的狀態再挑戰。",
    followUps: [],
    coachNote: "成熟就好，不要太悲壯。"
  },
  {
    id: 54,
    category: "臨場反應題",
    priority: "低",
    round: 4,
    prompt: "如果錄取後發現課業比想像中重很多，你怎麼調整？",
    answerType: "30 秒臨場題",
    keyPoints: ["先做取捨", "優先順序與時間管理", "找同儕支持"],
    shortAnswer:
      "如果真的比預期重，我會先調整時間安排和工作取捨，把 PMBM 當成階段性的優先投資。同時我也會透過同儕合作和更有紀律的節奏，避免最後變成臨時抱佛腳。",
    followUps: [],
    coachNote: "講務實調整，不要只說我會努力。"
  },
  {
    id: 55,
    category: "臨場反應題",
    priority: "低",
    round: 4,
    prompt: "用一句話形容你自己。",
    answerType: "15 秒臨場題",
    keyPoints: ["一句話定位", "要和整體故事一致"],
    shortAnswer:
      "我是一個能把專業、流程、人和制度串起來的人。",
    followUps: [],
    coachNote: "一句話就好，越短越有力。"
  },
  {
    id: 56,
    category: "臨場反應題",
    priority: "中",
    round: 3,
    prompt: "你有沒有想問教授的問題？",
    answerType: "20 秒臨場題",
    keyPoints: ["問學程學習建議", "問能力準備方向", "不要問官網有的資訊"],
    shortAnswer:
      "如果可以，我會想請教老師，像我這樣背景的學生，在進入 PMBM 前最值得先補強的能力是什麼，才能在入學後更快進入學習狀態？",
    followUps: [],
    coachNote: "問短一點，別問時間地點這種官網題。"
  }
];

const stationPlans = [
  {
    name: "第一關",
    focus: "整體印象與動機",
    style: "先看你是誰、為什麼來，偏整體印象與學程適配。",
    questions: [1, 2, 4, 13, 33],
    tip: "先讓教授記住你是跨域整合型管理者，不要一開始就講太滿。"
  },
  {
    name: "第二關",
    focus: "管理案例與反思",
    style: "開始拆你的真實經驗，看你是不是做過事，也看你怎麼反思。",
    questions: [7, 23, 25, 8, 26],
    tip: "多講動作和結果，少講形容詞。每題都盡量有一個可量化成果。"
  },
  {
    name: "第三關",
    focus: "產業觀點與臨場反應",
    style: "偏時事、班級適配與快問快答，考臨場穩定度。",
    questions: [41, 42, 9, 12, 56],
    tip: "時事題先講判斷，再講理由。最後一關重點是穩定、成熟、好合作。"
  }
];

const STORAGE_KEY = "pmbm-practice-site-state";

const state = {
  view: "all",
  query: "",
  category: "all",
  priority: "all",
  practiced: {},
  notes: {},
  quickDrill: [],
  currentFlipId: null,
  mockQueue: [],
  mockIndex: 0
};

const els = {
  listTitle: document.querySelector("#list-title"),
  listSubtitle: document.querySelector("#list-subtitle"),
  questionList: document.querySelector("#question-list"),
  categoryFilter: document.querySelector("#category-filter"),
  priorityFilter: document.querySelector("#priority-filter"),
  searchInput: document.querySelector("#search-input"),
  tabs: [...document.querySelectorAll(".tab")],
  questionTemplate: document.querySelector("#question-card-template"),
  stationTemplate: document.querySelector("#station-card-template"),
  stationList: document.querySelector("#station-list"),
  statTotal: document.querySelector("#stat-total"),
  statPriority: document.querySelector("#stat-priority"),
  statPracticed: document.querySelector("#stat-practiced"),
  quickPlan: document.querySelector("#quick-plan"),
  timerDisplay: document.querySelector("#timer-display"),
  timerLabel: document.querySelector("#timer-label"),
  timerStart: document.querySelector("#timer-start"),
  timerPause: document.querySelector("#timer-pause"),
  timerReset: document.querySelector("#timer-reset"),
  jumpPriority: document.querySelector("#jump-priority"),
  jumpFlip: document.querySelector("#jump-flip"),
  jumpMock: document.querySelector("#jump-mock"),
  jumpSimulation: document.querySelector("#jump-simulation"),
  flipSection: document.querySelector("#flip-section"),
  flipCategory: document.querySelector("#flip-category"),
  flipPriority: document.querySelector("#flip-priority"),
  flipRound: document.querySelector("#flip-round"),
  flipPrompt: document.querySelector("#flip-prompt"),
  flipAnswerType: document.querySelector("#flip-answer-type"),
  flipAnswerPanel: document.querySelector("#flip-answer-panel"),
  flipShortAnswer: document.querySelector("#flip-short-answer"),
  flipFollowupPanel: document.querySelector("#flip-followup-panel"),
  flipFollowupList: document.querySelector("#flip-followup-list"),
  flipDraw: document.querySelector("#flip-draw"),
  flipRevealAnswer: document.querySelector("#flip-reveal-answer"),
  flipRevealFollowup: document.querySelector("#flip-reveal-followup"),
  flipMarkPracticed: document.querySelector("#flip-mark-practiced"),
  flipSourceHint: document.querySelector("#flip-source-hint"),
  mockSection: document.querySelector("#mock-section"),
  mockCategory: document.querySelector("#mock-category"),
  mockPriority: document.querySelector("#mock-priority"),
  mockProgress: document.querySelector("#mock-progress"),
  mockPrompt: document.querySelector("#mock-prompt"),
  mockMeta: document.querySelector("#mock-meta"),
  mockStart: document.querySelector("#mock-start"),
  mockRevealAnswer: document.querySelector("#mock-reveal-answer"),
  mockRevealFollowup: document.querySelector("#mock-reveal-followup"),
  mockNext: document.querySelector("#mock-next"),
  mockAnswerPanel: document.querySelector("#mock-answer-panel"),
  mockAnswer: document.querySelector("#mock-answer"),
  mockFollowupPanel: document.querySelector("#mock-followup-panel"),
  mockFollowupList: document.querySelector("#mock-followup-list"),
  mockQueue: document.querySelector("#mock-queue"),
  cueModeLabel: document.querySelector("#cue-mode-label"),
  cueVoiceToggle: document.querySelector("#cue-voice-toggle"),
  cueStatusValue: document.querySelector("#cue-status-value"),
  cueNextStep: document.querySelector("#cue-next-step"),
  cueDisplay: document.querySelector("#cue-display"),
  cueBanner: document.querySelector("#cue-banner"),
  cueMark30: document.querySelector("#cue-mark-30"),
  cueMark45: document.querySelector("#cue-mark-45"),
  cueMarkEnd: document.querySelector("#cue-mark-end"),
  cuePresets: [...document.querySelectorAll(".cue-preset")],
  cueStart: document.querySelector("#cue-start"),
  cuePause: document.querySelector("#cue-pause"),
  cueReset: document.querySelector("#cue-reset"),
  recordStatusPill: document.querySelector("#record-status-pill"),
  recordStatusText: document.querySelector("#record-status-text"),
  recordStart: document.querySelector("#record-start"),
  recordStartText: document.querySelector(".record-main-btn__text"),
  recordStop: document.querySelector("#record-stop"),
  recordPlay: document.querySelector("#record-play"),
  recordClear: document.querySelector("#record-clear"),
  recordAudio: document.querySelector("#record-audio"),
  recordHelperTitle: document.querySelector("#record-helper-title"),
  recordHelperText: document.querySelector("#record-helper-text"),
  recordPlayerHint: document.querySelector("#record-player-hint"),
  simulationSection: document.querySelector("#simulation-section"),
  randomQuestion: document.querySelector("#random-question"),
  startQuickDrill: document.querySelector("#start-quick-drill"),
  clearProgress: document.querySelector("#clear-progress")
};

const viewMeta = {
  all: {
    title: "全部題庫",
    subtitle: "先從高頻題開始，熟了再擴大範圍。"
  },
  priority: {
    title: "優先 15 題",
    subtitle: "這是最值得反覆練熟的核心題。"
  },
  drill30: {
    title: "30 秒短答",
    subtitle: "練第一反應，控制在 25 到 35 秒就收。"
  },
  followup: {
    title: "教授追問",
    subtitle: "先答主題，再接 15 到 20 秒追問。"
  }
};

let timerSeconds = 270;
let timerId = null;
let cueTotalSeconds = 45;
let cueRemainingSeconds = 45;
let cueTimerId = null;
let cueMarksTriggered = new Set();
let mediaRecorder = null;
let recordChunks = [];
let recordAudioUrl = null;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    Object.assign(state, parsed);
  } catch (_) {
    // ignore storage issues
  }
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      view: state.view,
      query: state.query,
      category: state.category,
      priority: state.priority,
      practiced: state.practiced,
      notes: state.notes,
      quickDrill: state.quickDrill,
      currentFlipId: state.currentFlipId,
      mockQueue: state.mockQueue,
      mockIndex: state.mockIndex
    })
  );
}

function normalizeView() {
  const supportedViews = new Set(Object.keys(viewMeta));
  if (!supportedViews.has(state.view)) {
    state.view = "all";
  }
}

function getQuestionById(id) {
  return questionSeed.find((question) => question.id === id);
}

function getVisibleQuestions() {
  let questions = [...questionSeed];

  if (state.view === "priority") {
    questions = questions.filter((question) => question.priority === "高" && [1, 2, 4, 7, 8, 12, 13, 14, 16, 18, 19, 23, 25, 33, 41].includes(question.id));
  }

  if (state.view === "drill30") {
    questions = questions.filter((question) => question.id <= 41 && [1, 2, 4, 7, 8, 12, 13, 14, 16, 18, 19, 23, 25, 33, 41].includes(question.id));
  }

  if (state.view === "followup") {
    questions = questions.filter((question) => question.followUps.length > 0);
  }

  if (state.category !== "all") {
    questions = questions.filter((question) => question.category === state.category);
  }

  if (state.priority !== "all") {
    questions = questions.filter((question) => question.priority === state.priority);
  }

  if (state.query) {
    const query = state.query.toLowerCase();
    questions = questions.filter((question) => {
      const haystack = [
        question.prompt,
        question.category,
        question.shortAnswer,
        ...question.keyPoints,
        ...question.followUps.flatMap((item) => [item.question, item.answer])
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }

  return questions;
}

function populateCategories() {
  const categories = [...new Set(questionSeed.map((question) => question.category))];
  for (const category of categories) {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    els.categoryFilter.append(option);
  }
  els.categoryFilter.value = state.category;
}

function renderStats() {
  els.statTotal.textContent = String(questionSeed.length);
  els.statPriority.textContent = String(questionSeed.filter((question) => [1, 2, 4, 7, 8, 12, 13, 14, 16, 18, 19, 23, 25, 33, 41].includes(question.id)).length);
  els.statPracticed.textContent = String(Object.values(state.practiced).filter(Boolean).length);
}

function renderQuestionList() {
  const questions = getVisibleQuestions();
  if (!els.questionList || !els.listTitle || !els.listSubtitle || !els.questionTemplate) return;
  els.questionList.innerHTML = "";
  const meta = viewMeta[state.view] || viewMeta.all;
  els.listTitle.textContent = meta.title;
  els.listSubtitle.textContent = meta.subtitle;

  if (questions.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "目前沒有符合條件的題目，換個關鍵字或篩選條件試試。";
    els.questionList.append(empty);
    return;
  }

  for (const question of questions) {
    const fragment = els.questionTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".question-card");
    const checkbox = fragment.querySelector('input[type="checkbox"]');
    const textarea = fragment.querySelector("textarea");

    fragment.querySelector(".pill-category").textContent = question.category;
    fragment.querySelector(".pill-priority").textContent = `${question.priority}優先`;
    fragment.querySelector(".question-title").textContent = `${question.id}. ${question.prompt}`;
    fragment.querySelector(".question-meta").textContent = `第 ${question.round} 輪建議練習 · ${question.answerType}`;
    fragment.querySelector(".short-answer").textContent = question.shortAnswer;

    const keyPoints = fragment.querySelector(".key-points");
    question.keyPoints.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      keyPoints.append(li);
    });

    const followupList = fragment.querySelector(".followup-list");
    if (question.followUps.length === 0) {
      const block = document.createElement("div");
      block.className = "followup-item";
      block.innerHTML = `<strong>教練提醒</strong><p>${question.coachNote}</p>`;
      followupList.append(block);
    } else {
      question.followUps.forEach((item) => {
        const block = document.createElement("div");
        block.className = "followup-item";
        block.innerHTML = `<strong>${item.question}</strong><p>${item.answer}</p>`;
        followupList.append(block);
      });

      const coach = document.createElement("div");
      coach.className = "followup-item";
      coach.innerHTML = `<strong>答題提醒</strong><p>${question.coachNote}</p>`;
      followupList.append(coach);
    }

    checkbox.checked = Boolean(state.practiced[question.id]);
    checkbox.addEventListener("change", () => {
      state.practiced[question.id] = checkbox.checked;
      saveState();
      renderStats();
      renderQuickPlan();
      if (state.currentFlipId === question.id) {
        renderFlipCard();
      }
      if (state.mockQueue.includes(question.id)) {
        renderMockMode();
      }
    });

    textarea.value = state.notes[question.id] || "";
    textarea.addEventListener("input", () => {
      state.notes[question.id] = textarea.value;
      saveState();
    });

    card.dataset.id = question.id;
    els.questionList.append(fragment);
  }
}

function renderStations() {
  if (!els.stationList || !els.stationTemplate) return;
  els.stationList.innerHTML = "";
  for (const station of stationPlans) {
    const fragment = els.stationTemplate.content.cloneNode(true);
    fragment.querySelector(".station-name").textContent = station.name;
    fragment.querySelector(".station-focus").textContent = station.focus;
    fragment.querySelector(".station-style").textContent = station.style;
    fragment.querySelector(".station-tip").textContent = station.tip;
    const list = fragment.querySelector(".station-questions");
    station.questions.forEach((id) => {
      const li = document.createElement("li");
      li.textContent = getQuestionById(id).prompt;
      list.append(li);
    });
    els.stationList.append(fragment);
  }
}

function renderQuickPlan() {
  const planSource = state.quickDrill.length
    ? state.quickDrill.map((id) => getQuestionById(id)).filter(Boolean)
    : questionSeed.filter((question) => !state.practiced[question.id]).slice(0, 5);

  els.quickPlan.innerHTML = "";

  if (planSource.length === 0) {
    const done = document.createElement("div");
    done.className = "quick-plan-item";
    done.innerHTML = "<strong>今天先休息一下</strong><span>你已經把目前題庫都標記成練過了。</span>";
    els.quickPlan.append(done);
    return;
  }

  planSource.forEach((question, index) => {
    const item = document.createElement("div");
    item.className = "quick-plan-item";
    item.innerHTML = `<strong>第 ${index + 1} 題</strong><span>${question.prompt}</span>`;
    els.quickPlan.append(item);
  });
}

function renderTabs() {
  els.tabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.view === state.view);
  });
}

function renderFlipCard() {
  const current = getQuestionById(state.currentFlipId);
  const visibleCount = getVisibleQuestions().length;

  els.flipSourceHint.textContent =
    state.query || state.category !== "all" || state.priority !== "all"
      ? `目前會從你篩選後的 ${visibleCount} 題裡抽題。`
      : "目前沒有額外篩選，會從全部題庫中抽題。";

  if (!current) {
    els.flipCategory.textContent = "抽卡模式";
    els.flipPriority.textContent = "準備中";
    els.flipRound.textContent = "第 - 輪";
    els.flipPrompt.textContent = "按下「抽下一題」開始。";
    els.flipAnswerType.textContent = "系統會優先從目前篩選結果抽題。";
    els.flipShortAnswer.textContent = "抽到題目後，先自己答 20 到 30 秒，再翻開參考答案。";
    els.flipAnswerPanel.hidden = true;
    els.flipFollowupPanel.hidden = true;
    els.flipFollowupList.innerHTML = "";
    return;
  }

  els.flipCategory.textContent = current.category;
  els.flipPriority.textContent = `${current.priority}優先`;
  els.flipRound.textContent = `第 ${current.round} 輪`;
  els.flipPrompt.textContent = current.prompt;
  els.flipAnswerType.textContent = `${current.answerType} · 先自己答，再翻牌`;
  els.flipShortAnswer.textContent = current.shortAnswer;
  els.flipAnswerPanel.hidden = true;
  els.flipFollowupPanel.hidden = true;
  els.flipFollowupList.innerHTML = "";

  if (state.practiced[current.id]) {
    els.flipMarkPracticed.textContent = "已標記練過";
  } else {
    els.flipMarkPracticed.textContent = "標記已練";
  }
}

function getCurrentMockQuestion() {
  const id = state.mockQueue[state.mockIndex];
  return getQuestionById(id);
}

function renderMockQueue() {
  if (!els.mockQueue) return;
  els.mockQueue.innerHTML = "";

  if (!state.mockQueue.length) {
    const item = document.createElement("div");
    item.className = "quick-plan-item";
    item.innerHTML = "<strong>尚未開始</strong><span>按下「開始模擬」建立一輪 5 題題組。</span>";
    els.mockQueue.append(item);
    return;
  }

  state.mockQueue.forEach((id, index) => {
    const question = getQuestionById(id);
    if (!question) return;
    const item = document.createElement("div");
    item.className = "quick-plan-item";
    const prefix = index === state.mockIndex ? "目前題目" : `第 ${index + 1} 題`;
    item.innerHTML = `<strong>${prefix}</strong><span>${question.prompt}</span>`;
    els.mockQueue.append(item);
  });
}

function renderMockMode() {
  if (!els.mockSection) return;
  const current = getCurrentMockQuestion();

  if (!current) {
    els.mockCategory.textContent = "模擬模式";
    els.mockPriority.textContent = "待開始";
    els.mockProgress.textContent = "0 / 0";
    els.mockPrompt.textContent = "按下「開始模擬」建立一輪題組。";
    els.mockMeta.textContent = "你可以先用上方搜尋和篩選條件縮小抽題範圍。";
    els.mockAnswerPanel.hidden = true;
    els.mockFollowupPanel.hidden = true;
    els.mockFollowupList.innerHTML = "";
    renderMockQueue();
    return;
  }

  els.mockCategory.textContent = current.category;
  els.mockPriority.textContent = `${current.priority}優先`;
  els.mockProgress.textContent = `${state.mockIndex + 1} / ${state.mockQueue.length}`;
  els.mockPrompt.textContent = current.prompt;
  els.mockMeta.textContent = `${current.answerType} · 先自己答，再決定要不要看參考答案`;
  els.mockAnswer.textContent = current.shortAnswer;
  els.mockAnswerPanel.hidden = true;
  els.mockFollowupPanel.hidden = true;
  els.mockFollowupList.innerHTML = "";
  renderMockQueue();
}

function buildMockQueue() {
  if (!els.mockSection) return;
  const filtered = getVisibleQuestions();
  const source = filtered.length ? filtered : questionSeed;
  const queue = [...source].sort(() => Math.random() - 0.5).slice(0, Math.min(5, source.length)).map((question) => question.id);
  state.mockQueue = queue;
  state.mockIndex = 0;
  saveState();
  renderMockMode();
}

function revealMockAnswer() {
  if (!els.mockAnswerPanel) return;
  const current = getCurrentMockQuestion();
  if (!current) return;
  els.mockAnswerPanel.hidden = false;
}

function revealMockFollowup() {
  if (!els.mockFollowupPanel) return;
  const current = getCurrentMockQuestion();
  if (!current) return;

  els.mockFollowupPanel.hidden = false;
  els.mockFollowupList.innerHTML = "";

  if (!current.followUps.length) {
    const block = document.createElement("div");
    block.className = "followup-item";
    block.innerHTML = `<strong>教練提醒</strong><p>${current.coachNote}</p>`;
    els.mockFollowupList.append(block);
    return;
  }

  current.followUps.forEach((item) => {
    const block = document.createElement("div");
    block.className = "followup-item";
    block.innerHTML = `<strong>${item.question}</strong><p>${item.answer}</p>`;
    els.mockFollowupList.append(block);
  });

  const coach = document.createElement("div");
  coach.className = "followup-item";
  coach.innerHTML = `<strong>答題提醒</strong><p>${current.coachNote}</p>`;
  els.mockFollowupList.append(coach);
}

function goToNextMockQuestion() {
  if (!els.mockSection) return;
  if (!state.mockQueue.length) {
    buildMockQueue();
    return;
  }

  if (state.mockIndex < state.mockQueue.length - 1) {
    state.mockIndex += 1;
  } else {
    state.mockQueue = [];
    state.mockIndex = 0;
  }

  saveState();
  renderMockMode();
}

function revealFlipAnswer() {
  const current = getQuestionById(state.currentFlipId);
  if (!current) return;
  els.flipAnswerPanel.hidden = false;
}

function revealFlipFollowup() {
  const current = getQuestionById(state.currentFlipId);
  if (!current) return;

  els.flipFollowupPanel.hidden = false;
  els.flipFollowupList.innerHTML = "";

  if (!current.followUps.length) {
    const block = document.createElement("div");
    block.className = "followup-item";
    block.innerHTML = `<strong>教練提醒</strong><p>${current.coachNote}</p>`;
    els.flipFollowupList.append(block);
    return;
  }

  current.followUps.forEach((item) => {
    const block = document.createElement("div");
    block.className = "followup-item";
    block.innerHTML = `<strong>${item.question}</strong><p>${item.answer}</p>`;
    els.flipFollowupList.append(block);
  });

  const coach = document.createElement("div");
  coach.className = "followup-item";
  coach.innerHTML = `<strong>答題提醒</strong><p>${current.coachNote}</p>`;
  els.flipFollowupList.append(coach);
}

function drawFlipQuestion() {
  const pool = getVisibleQuestions();
  const fallback = questionSeed;
  const source = pool.length ? pool : fallback;
  const choices = source.filter((question) => question.id !== state.currentFlipId);
  const deck = choices.length ? choices : source;
  const picked = deck[Math.floor(Math.random() * deck.length)];
  state.currentFlipId = picked.id;
  saveState();
  renderFlipCard();
}

function markCurrentFlipPracticed() {
  const current = getQuestionById(state.currentFlipId);
  if (!current) return;
  state.practiced[current.id] = !state.practiced[current.id];
  saveState();
  renderStats();
  renderQuickPlan();
  renderQuestionList();
  renderFlipCard();
}

function formatTime(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function speakCue(message) {
  if (!els.cueVoiceToggle) return;
  if (!els.cueVoiceToggle.checked || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(message);
  utterance.lang = "zh-TW";
  utterance.rate = 1;
  window.speechSynthesis.speak(utterance);
}

function setCueBanner(message, tone = "normal") {
  if (!els.cueBanner) return;
  els.cueBanner.textContent = message;
  els.cueBanner.classList.remove("is-warning", "is-danger");
  if (tone === "warning") {
    els.cueBanner.classList.add("is-warning");
  }
  if (tone === "danger") {
    els.cueBanner.classList.add("is-danger");
  }
}

function renderCueTimer() {
  if (!els.cueDisplay || !els.cueModeLabel) return;
  els.cueDisplay.textContent = formatTime(cueRemainingSeconds);
  els.cueModeLabel.textContent = `${cueTotalSeconds} 秒模式`;
  els.cuePresets.forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.seconds) === cueTotalSeconds);
  });
}

function renderCueMilestones() {
  if (!els.cueMark30 || !els.cueMark45 || !els.cueMarkEnd) return;
  els.cueMark30.classList.remove("is-active", "is-danger");
  els.cueMark45.classList.remove("is-active", "is-danger");
  els.cueMarkEnd.classList.remove("is-active", "is-danger");

  if (cueMarksTriggered.has("30")) {
    els.cueMark30.classList.add("is-active");
  }
  if (cueMarksTriggered.has("45")) {
    els.cueMark45.classList.add("is-danger");
  }
  if (cueMarksTriggered.has("5")) {
    els.cueMarkEnd.classList.add("is-danger");
  }
}

function renderCueControls() {
  if (!els.cueStart || !els.cuePause || !els.cueStatusValue || !els.cueNextStep) return;
  const isRunning = Boolean(cueTimerId);
  els.cueStart.disabled = isRunning;
  els.cuePause.disabled = !isRunning;
  els.cueStatusValue.textContent = isRunning ? "倒數中" : "待開始";
  els.cueNextStep.textContent = isRunning ? "看提示收斂重點" : "按開始後直接開口";
}

function resetCueThresholds() {
  cueMarksTriggered = new Set();
}

function handleCueThresholds() {
  const elapsed = cueTotalSeconds - cueRemainingSeconds;

  if (elapsed >= 30 && !cueMarksTriggered.has("30")) {
    cueMarksTriggered.add("30");
    setCueBanner("30 秒了，準備收斂重點。", "warning");
    speakCue("三十秒，準備收斂重點");
  }

  if (elapsed >= 45 && !cueMarksTriggered.has("45")) {
    cueMarksTriggered.add("45");
    setCueBanner("45 秒了，現在應該收尾。", "danger");
    speakCue("四十五秒，現在收尾");
  }

  if (cueRemainingSeconds <= 5 && cueRemainingSeconds > 0 && !cueMarksTriggered.has("5")) {
    cueMarksTriggered.add("5");
    setCueBanner("剩 5 秒，用一句話結尾。", "danger");
    speakCue("剩五秒，用一句話結尾");
  }

  renderCueMilestones();
}

function startCueTimer() {
  if (!els.cueDisplay) return;
  if (cueTimerId) return;
  renderCueControls();
  cueTimerId = window.setInterval(() => {
    cueRemainingSeconds -= 1;
    renderCueTimer();
    handleCueThresholds();

    if (cueRemainingSeconds <= 0) {
      stopCueTimer();
      cueRemainingSeconds = 0;
      renderCueTimer();
      setCueBanner("時間到，直接收尾停下來。", "danger");
      speakCue("時間到，停");
      renderCueControls();
    }
  }, 1000);
}

function stopCueTimer() {
  window.clearInterval(cueTimerId);
  cueTimerId = null;
  renderCueControls();
}

function resetCueTimer() {
  if (!els.cueDisplay) return;
  stopCueTimer();
  cueRemainingSeconds = cueTotalSeconds;
  resetCueThresholds();
  renderCueTimer();
  renderCueMilestones();
  renderCueControls();
  setCueBanner("按下開始，先自己答題。");
}

function setCuePreset(seconds) {
  if (!els.cueDisplay) return;
  cueTotalSeconds = seconds;
  cueRemainingSeconds = seconds;
  resetCueThresholds();
  renderCueTimer();
  renderCueMilestones();
  renderCueControls();
  setCueBanner(`目前是 ${seconds} 秒模式，按下開始後開口作答。`);
}

function setRecordStatus(pillText, statusText, tone = "normal") {
  if (!els.recordStatusPill || !els.recordStatusText) return;
  els.recordStatusPill.textContent = pillText;
  els.recordStatusText.textContent = statusText;
  els.recordStatusPill.classList.remove("is-warning", "is-danger");
  if (tone === "warning") {
    els.recordStatusPill.classList.add("is-warning");
  }
  if (tone === "danger") {
    els.recordStatusPill.classList.add("is-danger");
  }
}

function renderRecordControls() {
  if (!els.recordStart || !els.recordStop || !els.recordPlay || !els.recordClear || !els.recordAudio || !els.recordStartText) return;
  const hasAudio = Boolean(els.recordAudio.src);
  const isRecording = Boolean(mediaRecorder && mediaRecorder.state === "recording");

  els.recordStart.disabled = isRecording;
  els.recordStop.disabled = !isRecording;
  els.recordPlay.disabled = !hasAudio || isRecording;
  els.recordClear.disabled = !hasAudio && !isRecording;
  els.recordStartText.textContent = isRecording ? "錄音中" : "開始錄音";
}

function clearRecordingUrl() {
  if (recordAudioUrl) {
    URL.revokeObjectURL(recordAudioUrl);
    recordAudioUrl = null;
  }
}

function resetRecordingUi() {
  if (!els.recordAudio) return;
  setRecordStatus("尚未錄音", "等待開始");
  els.recordHelperTitle.textContent = "先抽一題，再錄第一反應";
  els.recordHelperText.textContent = "第一輪不要先看答案，回放時再檢查是不是太長、太散，或第一句沒有直接回答。";
  els.recordPlayerHint.textContent = "目前還沒有錄音檔，先按「開始錄音」。";
  els.recordAudio.removeAttribute("src");
  els.recordAudio.load();
  renderRecordControls();
}

async function startRecording() {
  if (!els.recordAudio) return;
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    setRecordStatus("不支援", "這個瀏覽器不支援錄音功能", "danger");
    return;
  }

  if (mediaRecorder && mediaRecorder.state === "recording") return;

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recordChunks = [];
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.addEventListener("dataavailable", (event) => {
      if (event.data.size > 0) {
        recordChunks.push(event.data);
      }
    });

    mediaRecorder.addEventListener("stop", () => {
      clearRecordingUrl();
      const blob = new Blob(recordChunks, { type: mediaRecorder.mimeType || "audio/webm" });
      recordAudioUrl = URL.createObjectURL(blob);
      els.recordAudio.src = recordAudioUrl;
      setRecordStatus("已錄音", "可以直接播放回聽");
      els.recordHelperTitle.textContent = "先回聽，再決定要不要重錄";
      els.recordHelperText.textContent = "回放時先聽有沒有先回答、是不是超時、結尾有沒有收掉。";
      els.recordPlayerHint.textContent = "錄音完成，可以直接播放回聽。";
      renderRecordControls();

      mediaRecorder.stream.getTracks().forEach((track) => track.stop());
    });

    mediaRecorder.start();
    setRecordStatus("錄音中", "正在錄音，答完再按停止", "warning");
    els.recordHelperTitle.textContent = "直接說，不要先看答案";
    els.recordHelperText.textContent = "現在最重要的是把第一反應錄下來，先不要追求完美。";
    els.recordPlayerHint.textContent = "錄音中，答完再按停止。";
    renderRecordControls();
  } catch (error) {
    setRecordStatus("無法錄音", "請確認瀏覽器已允許麥克風", "danger");
    els.recordHelperTitle.textContent = "麥克風沒有開啟";
    els.recordHelperText.textContent = "請允許瀏覽器使用麥克風後，再重新開始錄音。";
    renderRecordControls();
  }
}

function stopRecording() {
  if (!els.recordAudio) return;
  if (!mediaRecorder || mediaRecorder.state !== "recording") return;
  mediaRecorder.stop();
}

function playRecording() {
  if (!els.recordAudio) return;
  if (!els.recordAudio.src) {
    setRecordStatus("尚未錄音", "請先錄一段再播放");
    return;
  }
  els.recordAudio.play();
  setRecordStatus("播放中", "正在回放你的回答");
}

function clearRecording() {
  if (!els.recordAudio) return;
  if (mediaRecorder && mediaRecorder.state === "recording") {
    mediaRecorder.stop();
  }
  clearRecordingUrl();
  recordChunks = [];
  resetRecordingUi();
}

function renderTimer() {
  if (!els.timerDisplay || !els.timerLabel) return;
  const label = formatTime(timerSeconds);
  els.timerDisplay.textContent = label;
  els.timerLabel.textContent = label;
}

function startTimer() {
  if (timerId) return;
  timerId = window.setInterval(() => {
    timerSeconds -= 1;
    renderTimer();
    if (timerSeconds <= 0) {
      pauseTimer();
      timerSeconds = 0;
      renderTimer();
    }
  }, 1000);
}

function pauseTimer() {
  window.clearInterval(timerId);
  timerId = null;
}

function resetTimer() {
  pauseTimer();
  timerSeconds = 270;
  renderTimer();
}

function buildQuickDrill() {
  const pool = questionSeed.filter((question) => [1, 2, 4, 7, 8, 12, 13, 14, 16, 18, 19, 23, 25, 33, 41].includes(question.id));
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  state.quickDrill = shuffled.slice(0, 5).map((question) => question.id);
  saveState();
  renderQuickPlan();
}

function focusQuestion(id) {
  state.view = "all";
  renderTabs();
  renderQuestionList();
  const card = document.querySelector(`.question-card[data-id="${id}"]`);
  if (card) {
    card.scrollIntoView({ behavior: "smooth", block: "center" });
    card.animate(
      [
        { transform: "translateY(0)", boxShadow: "var(--shadow)" },
        { transform: "translateY(-4px)", boxShadow: "0 28px 70px rgba(188, 90, 72, 0.18)" },
        { transform: "translateY(0)", boxShadow: "var(--shadow)" }
      ],
      { duration: 900, easing: "ease" }
    );
  }
}

function attachEvents() {
  els.tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      state.view = tab.dataset.view;
      saveState();
      renderTabs();
      renderQuestionList();
      renderFlipCard();
      renderMockMode();
    });
  });

  els.searchInput.value = state.query;
  els.searchInput.addEventListener("input", () => {
    state.query = els.searchInput.value.trim();
    saveState();
    renderQuestionList();
    renderFlipCard();
    renderMockMode();
  });

  els.categoryFilter.addEventListener("change", () => {
    state.category = els.categoryFilter.value;
    saveState();
    renderQuestionList();
    renderFlipCard();
    renderMockMode();
  });

  els.priorityFilter.value = state.priority;
  els.priorityFilter.addEventListener("change", () => {
    state.priority = els.priorityFilter.value;
    saveState();
    renderQuestionList();
    renderFlipCard();
    renderMockMode();
  });

  if (els.timerStart) els.timerStart.addEventListener("click", startTimer);
  if (els.timerPause) els.timerPause.addEventListener("click", pauseTimer);
  if (els.timerReset) els.timerReset.addEventListener("click", resetTimer);
  if (els.cueStart) els.cueStart.addEventListener("click", startCueTimer);
  if (els.cuePause) els.cuePause.addEventListener("click", stopCueTimer);
  if (els.cueReset) els.cueReset.addEventListener("click", resetCueTimer);
  if (els.cuePresets?.length) {
    els.cuePresets.forEach((button) => {
      button.addEventListener("click", () => {
        setCuePreset(Number(button.dataset.seconds));
      });
    });
  }
  if (els.recordStart) els.recordStart.addEventListener("click", startRecording);
  if (els.recordStop) els.recordStop.addEventListener("click", stopRecording);
  if (els.recordPlay) els.recordPlay.addEventListener("click", playRecording);
  if (els.recordClear) els.recordClear.addEventListener("click", clearRecording);

  els.jumpPriority.addEventListener("click", () => {
    state.view = "priority";
    renderTabs();
    renderQuestionList();
    window.scrollTo({ top: 360, behavior: "smooth" });
  });

  els.jumpFlip.addEventListener("click", () => {
    els.flipSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  els.jumpMock.addEventListener("click", () => {
    window.location.href = "./mock-interview.html";
  });

  els.randomQuestion.addEventListener("click", () => {
    const visible = getVisibleQuestions();
    if (!visible.length) return;
    const random = visible[Math.floor(Math.random() * visible.length)];
    focusQuestion(random.id);
  });

  els.startQuickDrill.addEventListener("click", buildQuickDrill);
  els.flipDraw.addEventListener("click", drawFlipQuestion);
  els.flipRevealAnswer.addEventListener("click", revealFlipAnswer);
  els.flipRevealFollowup.addEventListener("click", revealFlipFollowup);
  els.flipMarkPracticed.addEventListener("click", markCurrentFlipPracticed);
  if (els.mockStart) els.mockStart.addEventListener("click", buildMockQueue);
  if (els.mockRevealAnswer) els.mockRevealAnswer.addEventListener("click", revealMockAnswer);
  if (els.mockRevealFollowup) els.mockRevealFollowup.addEventListener("click", revealMockFollowup);
  if (els.mockNext) els.mockNext.addEventListener("click", goToNextMockQuestion);

  els.clearProgress.addEventListener("click", () => {
    state.practiced = {};
    state.notes = {};
    state.quickDrill = [];
    state.currentFlipId = null;
    state.mockQueue = [];
    state.mockIndex = 0;
    saveState();
    renderStats();
    renderQuestionList();
    renderQuickPlan();
    renderFlipCard();
    renderMockMode();
    resetCueTimer();
    clearRecording();
  });
}

function init() {
  loadState();
  normalizeView();
  populateCategories();
  renderStats();
  renderTabs();
  renderQuestionList();
  renderStations();
  renderQuickPlan();
  renderFlipCard();
  renderTimer();
  renderMockMode();
  renderCueTimer();
  renderCueMilestones();
  renderCueControls();
  resetRecordingUi();
  attachEvents();
}

init();
