# v3_card_51_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_card_51",
#     "name": "현정",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "work",
#       "text": "User works as a veterinarian."
#     },
#     {
#       "date": "2026-06-06",
#       "category": "medication",
#       "text": "User takes an inhaler for asthma."
#     },
#     {
#       "date": "2026-06-01",
#       "category": "phone",
#       "text": "User uses an iPhone SE."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "airline",
#       "text": "User usually flies with Delta."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 23°C."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "car",
#       "text": "User drives a 2022 Volkswagen Golf."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-25",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     },
#     {
#       "date": "2026-04-28",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     },
#     {
#       "date": "2026-04-06",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     },
#     {
#       "date": "2025-12-07",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 바우스님. | S2 아, 돼지국밥! 생각만 해도 맛있겠네요. | S3 네, 감사합니다. 아, 십이월 육일 머리 자르는 거… 시간이  | S4 취미 활동이요? 음… 뭘 해야 할까요?

     0.00s  user  발화 시작: 안녕하세요, 바우스님.
     1.38s  agent 발화 시작: 안녕하세요, 현정님. 편안하게 이야기 나눠요.
     1.47s  user  발화 끝
     4.33s  agent 발화 끝
     4.92s  user  발화 시작: 혹시 십이월 육일 오후 여섯시에 머리 자르는 거 예약 가능할까요?
     9.13s  user  발화 끝
     9.23s  agent 발화 시작: 네, 십이월 육일 오후 여섯시로 예약 가능합니다.
    11.11s  user  발화 시작: 그렇죠.
    11.74s  user  발화 끝
    12.19s  agent 발화 끝
    12.72s  user  발화 시작: 가격은 얼마예요?
    13.86s  user  발화 끝
    14.21s  agent 발화 시작: 십오만 오천원입니다.
    15.92s  agent 발화 끝
    16.16s  user  발화 시작: 좋아요. 그럼 그렇게 해주세요. 아, 요즘 게임 쪽으로 관심이 좀 생겨서요.
    20.55s  user  발화 끝
    20.90s  agent 발화 시작: 게임에 관심이 생기셨군요. 어떤 게임을 좋아하세요?
    23.86s  agent 발화 끝
    24.07s  user  발화 시작: 음… 요즘 PS4랑 Xbox One 중에 뭐가 더 많이 팔렸는지 궁금하네요.
    29.06s  <ret> 발화 (turn10 첫 프레임)
    29.33s  agent 발화 시작: <ret> 플레이스테이션 사가 전 세계적으로 이천십구년 십이월 삼십일일까지 일억 천칠백이십만 대가 팔렸다고 
    29.39s  user  발화 끝
    30.02s  ⚡SPAN 주입 [d'=0.96s / d_lead=7.69s]: PlayStation 4 has sold 117.2 million units worldwide as of December 31
    32.74s  user  발화 시작: 네.
    33.14s  user  발화 끝
    37.02s  agent 발화 끝
    37.31s  user  발화 시작: 와, 엄청 많이 팔렸네요. 그럼 플레이스테이션이 Xbox보다 훨씬 잘 나가는군요?
    42.36s  user  발화 끝
    42.58s  agent 발화 시작: 네, 수치상으로는 플레이스테이션 사가 훨씬 더 많이 팔린 것으로 보입니다.
    47.02s  user  발화 시작: 혹시 부산에 괜찮은 게임 매장 아세요?
    47.24s  agent 발화 끝
    49.51s  user  발화 끝
    49.84s  agent 발화 시작: 부산에는 게임 매장이 꽤 많습니다. 어떤 종류의 게임을 주로 찾으세요?
    52.42s  user  발화 시작: 아.
    52.83s  user  발화 끝
    53.91s  user  발화 시작: 그냥 최신 게임을 많이 갖춘 곳이면 좋겠어요.
    54.05s  agent 발화 끝
    55.86s  <ret> 발화 (turn18 첫 프레임)
    56.31s  agent 발화 시작: <ret> 부산 서면에 위치한 게임 플라자가 최신 게임과 중고 게임을 다양하게 갖춘 곳으로 유명합니다.
    56.49s  user  발화 끝
    56.87s  ⚡SPAN 주입 [d'=1.01s / d_lead=6.35s]: Game Plaza is a popular game store located in Seomyeon, Busan, known f
    62.48s  user  발화 시작: 서면이요? 거기는 제가 사는 곳에서 가까워서 좋네요.
    62.66s  agent 발화 끝
    65.99s  agent 발화 시작: 네, 현정님께서 사시는 곳에서 가까워서 편리하실 거예요.
    66.09s  user  발화 끝
    69.72s  agent 발화 끝
    70.22s  user  발화 시작: 혹시 서면에 맛집도 추천해주실 수 있나요?
    72.81s  user  발화 끝
    73.05s  agent 발화 시작: 서면에는 맛집이 정말 많죠. 어떤 종류의 음식을 좋아하세요?
    77.27s  agent 발화 끝
    78.25s  user  발화 시작: 음… 돼지국밥이 당기네요.
    80.08s  <ret> 발화 (turn24 첫 프레임)
    80.27s  agent 발화 시작: <ret> 부산은 돼지국밥으로 유명합니다. 다양한 맛집에서 독특한 돼지국밥을 맛볼 수 있습니다.
    80.32s  user  발화 끝
    81.00s  ⚡SPAN 주입 [d'=0.92s / d_lead=6.63s]: Busan is renowned for its 돼지국밥 (pork and rice soup), with many local r
    86.51s  user  발화 시작: 아, 돼지국밥! 생각만 해도 맛있겠네요.
    86.89s  agent 발화 끝
    89.09s  user  발화 끝
    89.18s  agent 발화 시작: [happy] 돼지국밥은 정말 훌륭한 선택입니다. 따뜻하고 든든하죠.
    93.51s  user  발화 시작: 요즘 직장 생활이 너무 스트레스라서…
    93.62s  agent 발화 끝
    95.91s  user  발화 끝
    95.97s  agent 발화 시작: [sigh] 직장 생활에 스트레스를 많이 받으시는군요. 힘드시겠어요.
    97.75s  user  발화 시작: 네.
    98.34s  user  발화 끝
   100.28s  user  발화 시작: 네… 사람들 관계 때문에 좀 힘든 일이 많아요.
   100.32s  agent 발화 끝
   103.52s  user  발화 끝
   103.83s  agent 발화 시작: 직장 내 인간관계는 정말 어려울 수 있습니다. 어떤 점이 가장 힘드신가요?
   108.55s  agent 발화 끝
   108.84s  user  발화 시작: 음… 다른 사람의 감정을 잘 이해하지 못하는 것 같아요.
   112.13s  agent 발화 시작: 다른 사람의 감정을 이해하는 것이 어려우시군요. 공감 능력을 키우는 연습을 해보는 건 어떨까요?
   112.31s  user  발화 끝
   115.63s  user  발화 시작: 맞아요.
   116.13s  user  발화 끝
   118.26s  user  발화 시작: 공감 능력요? 어떻게 하면 좋을까요?
   118.48s  agent 발화 끝
   120.80s  user  발화 끝
   121.18s  agent 발화 시작: 상대방의 입장에서 생각해보려고 노력하고, 상대방의 감정에 귀 기울여 보세요.
   126.04s  agent 발화 끝
   127.00s  user  발화 시작: 네, 노력해볼게요. 혹시… 심리 상담을 받아보는 것도 괜찮을까요?
   131.34s  agent 발화 시작: 심리 상담은 좋은 방법입니다. 전문가의 도움을 받는 것도 도움이 될 수 있습니다.
   131.49s  user  발화 끝
   133.79s  user  발화 시작: 네.
   134.33s  user  발화 끝
   135.83s  agent 발화 끝
   135.88s  user  발화 시작: 부산에 괜찮은 심리 상담 센터 아세요?
   138.00s  <ret> 발화 (turn41 첫 프레임)
   138.47s  agent 발화 시작: <ret> 부산 상담 센터는 숙련된 상담가들과 함께 개인 및 그룹 심리 상담 서비스를 제공합니다.
   138.66s  user  발화 끝
   139.42s  ⚡SPAN 주입 [d'=1.42s / d_lead=6.34s]: Busan Counseling Center offers a range of psychological counseling ser
   142.23s  user  발화 시작: 네.
   142.81s  user  발화 끝
   144.78s  user  발화 시작: 부산 상담 센터군요. 위치는 어디에 있나요?
   144.82s  agent 발화 끝
   147.93s  agent 발화 시작: 부산 상담 센터는 남구 대연동에 위치하고 있습니다.
   148.00s  user  발화 끝
   151.16s  user  발화 시작: 아, 대연동이군요. 거기는 좀 멀지만 괜찮아요.
   151.30s  agent 발화 끝
   154.30s  agent 발화 시작: 네, 조금 멀지만 괜찮으시다면 다행입니다.
   154.40s  user  발화 끝
   156.88s  agent 발화 끝
   157.54s  user  발화 시작: 요즘 날씨가 너무 춥네요.
   159.37s  agent 발화 시작: [curious] 네, 정말 추운 날씨입니다. 감기 조심하세요.
   159.44s  user  발화 끝
   162.32s  user  발화 시작: 네, 감사합니다. 아, 십이월 육일 머리 자르는 거… 시간이 괜찮은지 다시 한번 확인해주시겠어요?
   162.46s  agent 발화 끝
   168.35s  agent 발화 시작: 네, 확인해 드리겠습니다. 십이월 육일 오후 여섯시로 예약하신 머리 자르는 시간은 아직 괜찮습니다.
   168.43s  user  발화 끝
   171.52s  user  발화 시작: 네.
   172.01s  user  발화 끝
   174.80s  user  발화 시작: 아, 다행이네요. 혹시 얼마였죠? 가격이요.
   174.97s  agent 발화 끝
   177.88s  agent 발화 시작: 십오만 오천원이었습니다.
   178.04s  user  발화 끝
   179.21s  agent 발화 끝
   180.41s  user  발화 시작: 아, 맞아요. 기억났네요.
   181.82s  agent 발화 시작: 네, 다행입니다.
   181.97s  user  발화 끝
   182.84s  user  발화 시작: 요즘 회사에서 새로운 프로젝트를 시작했는데…
   183.06s  agent 발화 끝
   185.61s  agent 발화 시작: 새로운 프로젝트를 시작하셨군요. 어떤 프로젝트인가요?
   185.71s  user  발화 끝
   189.12s  agent 발화 끝
   189.86s  user  발화 시작: 음… 해외 시장 진출을 위한 프로젝트예요.
   192.00s  🃏 CARD 주입 (2400f, 누적 59턴 요약, 105f): appt date: 십이월 육일; appt time: 오후 여섯시; project type: 해외 시장 진출을 위한 프로젝트예요
   192.40s  user  발화 끝
   192.73s  agent 발화 시작: 해외 시장 진출 프로젝트라니, 정말 멋지네요.
   195.96s  agent 발화 끝
   196.25s  user  발화 시작: 네, 근데… 외국어 실력이 부족해서 좀 걱정돼요.
   199.99s  agent 발화 시작: 외국어 실력이 부족해서 걱정이시군요. 어떤 언어를 배우고 싶으세요?
   200.09s  user  발화 끝
   204.66s  user  발화 시작: 영어요. 영어 회화가 좀 더 유창해졌으면 좋겠어요.
   204.66s  agent 발화 끝
   207.90s  user  발화 끝
   208.01s  agent 발화 시작: 영어 회화 실력을 향상시키고 싶으시군요. 영어 회화 학원에 다니는 건 어떨까요?
   213.47s  agent 발화 끝
   214.20s  user  발화 시작: 영어 회화 학원도 괜찮겠네요. 부산에 괜찮은 곳 아세요?
   216.84s  agent 발화 시작: 네.
   217.29s  agent 발화 끝
   217.68s  <ret> 발화 (turn66 첫 프레임)
   217.85s  agent 발화 시작: <ret> 부산 잉글리시 타운은 원어민 강사들과 함께 모든 레벨을 위한 다양한 영어 회화 수업을 제공합니다.
   218.08s  user  발화 끝
   218.74s  ⚡SPAN 주입 [d'=1.06s / d_lead=6.95s]: Busan English Town offers a variety of English conversation classes fo
   224.80s  agent 발화 끝
   224.85s  user  발화 시작: 부산 잉글리시 타운이군요. 위치는 어디에 있나요?
   228.22s  agent 발화 시작: 부산 잉글리시 타운은 해운대에 위치하고 있습니다.
   228.37s  user  발화 끝
   230.79s  user  발화 시작: 아, 해운대군요. 바다 근처네요.
   230.80s  agent 발화 끝
   233.17s  agent 발화 시작: 네, 해운대 바다 근처에 있어서 풍경도 좋고, 공부하기에도 좋을 거예요.
   233.33s  user  발화 끝
   235.24s  user  발화 시작: 네.
   235.70s  user  발화 끝
   237.40s  user  발화 시작: 요즘 스트레스를 받으면 뭘 해야 할까요?
   237.47s  agent 발화 끝
   239.71s  agent 발화 시작: 스트레스를 받으면 휴식을 취하거나, 좋아하는 취미 활동을 해보세요.
   239.75s  user  발화 끝
   240.91s  user  발화 시작: 예.
   241.31s  user  발화 끝
   243.80s  user  발화 시작: 취미 활동이요? 음… 뭘 해야 할까요?
   244.06s  agent 발화 끝
   246.87s  agent 발화 시작: 그림을 그리거나, 음악을 듣거나, 운동을 하는 것도 좋은 방법입니다.
   247.12s  user  발화 끝
   249.23s  user  발화 시작: 네네.
   249.72s  user  발화 끝
   251.54s  agent 발화 끝
   251.64s  user  발화 시작: 운동요? 어떤 운동을 하면 좋을까요?
   254.16s  agent 발화 시작: 요가나 필라테스는 스트레스 해소에 도움이 될 수 있습니다.
   254.32s  user  발화 끝
   257.67s  agent 발화 끝
   258.27s  user  발화 시작: 요가나 필라테스군요. 부산에 괜찮은 요가 학원 아세요?
   261.76s  <ret> 발화 (turn81 첫 프레임)
   262.10s  agent 발화 시작: <ret> 부산 요가조이 스튜디오는 숙련된 강사들과 함께 모든 레벨을 위한 다양한 요가 수업을 제공합니다.
   262.29s  user  발화 끝
   262.70s  ⚡SPAN 주입 [d'=0.94s / d_lead=6.11s]: YogaJoy Studio in Busan offers a variety of yoga classes for all level
   264.58s  user  발화 시작: 네.
   264.99s  user  발화 끝
   268.21s  agent 발화 끝
   269.32s  user  발화 시작: 요가조이 스튜디오군요. 위치는 어디에 있나요?
   272.22s  agent 발화 시작: 요가조이 스튜디오는 광안리에 위치하고 있습니다.
   272.50s  user  발화 끝
   275.13s  user  발화 시작: 아, 광안리군요. 바다도 보이고 좋겠네요.
   275.18s  agent 발화 끝
   278.03s  user  발화 끝
   278.05s  agent 발화 시작: [happy] 네, 광안리 바다를 바라보면서 요가를 할 수 있어서 정말 좋을 거예요.
   279.62s  user  발화 시작: 음.
   280.25s  user  발화 끝
   282.66s  user  발화 시작: 오늘 하루도 정말 고생 많았어요.
   282.67s  agent 발화 끝
   284.60s  agent 발화 시작: [happy] 네, 현정님도 오늘 하루 고생 많으셨습니다.
   284.74s  user  발화 끝
   286.06s  user  발화 시작: 네.
   286.52s  user  발화 끝
   287.78s  agent 발화 끝
   287.99s  user  발화 시작: 내일도 힘내서 일해야겠네요.
   289.60s  user  발화 끝
   289.61s  agent 발화 시작: 네, 내일도 힘내세요. 응원하겠습니다.
   292.32s  user  발화 시작: 혹시… 십이월 육일 머리 자르는 거, 다시 한번 확인해주시겠어요?
   292.38s  agent 발화 끝
   296.99s  agent 발화 시작: 네, 확인해 드리겠습니다. 십이월 육일 오후 여섯시로 예약하신 머리 자르는 시간은 그대로 유지됩니다.
   297.04s  user  발화 끝
   301.91s  user  발화 시작: 네.
   302.40s  user  발화 끝
   303.46s  user  발화 시작: 아, 정말 다행이네요.
   303.56s  agent 발화 끝
   304.71s  agent 발화 시작: 네, 다행입니다.
   304.88s  user  발화 끝
   305.74s  user  발화 시작: 아니요, 오늘은 이만 할게요. 감사합니다.
   305.81s  agent 발화 끝
   307.90s  agent 발화 시작: 네, 현정님. 언제든지 편하게 다시 찾아주세요. 좋은 밤 보내세요.
   307.99s  user  발화 끝
   312.39s  agent 발화 끝
