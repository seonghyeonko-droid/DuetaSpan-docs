# v3_card_49_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_card_49",
#     "name": "예우",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-11",
#       "category": "medication",
#       "text": "User takes antihistamines in spring."
#     },
#     {
#       "date": "2026-04-26",
#       "category": "savings",
#       "text": "User is saving for a new car."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "car",
#       "text": "User drives a 2020 Kia Niro."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "plant",
#       "text": "User is growing a monstera at home."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-06",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     },
#     {
#       "date": "2026-04-01",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 아침에 차 수리 맡기기로 했잖아요. | S2 캐모마일 차… 한번 사봐야겠네요. | S3 "눈물의 여왕"… 한번 봐야겠네요. | S4 좋네요. 그럼 남이섬 가는 방법 좀 알려주세요.

     0.00s  user  발화 시작: 오늘 아침에 차 수리 맡기기로 했잖아요.
     2.40s  user  발화 끝
     2.58s  agent 발화 시작: 네, 그러셨군요. 어떤 차종이신가요?
     6.17s  user  발화 시작: 현대 소나타요. 일월 십이일 오전 아홉시 삼십분에 맡기기로 했어요.
     6.27s  agent 발화 끝
    11.59s  user  발화 끝
    12.03s  agent 발화 시작: 오전 아홉시 삼십분에 소나타를 맡기시는군요.
    15.21s  agent 발화 끝
    16.39s  user  발화 시작: 수리비는 대략 이만 오천원 정도 예상한다고 하셨던 것 같아요.
    19.19s  agent 발화 시작: 네.
    19.82s  agent 발화 끝
    20.18s  user  발화 끝
    20.52s  agent 발화 시작: 네, 이만 오천원 정도로 예상하신다고 말씀해주셨어요.
    23.93s  user  발화 시작: 아니요, 그건 됐어요. 혹시 마하나티 영화에서 사만다 역할이 누구였죠? 갑자기 궁금해졌어요.
    24.08s  agent 발화 끝
    30.10s  <ret> 발화 (turn8 첫 프레임)
    30.29s  agent 발화 시작: <ret> 마하나티 영화에서 사만다 역할을 맡은 배우는 마두라바니였습니다. 이천십팔년에 개봉한 인도 전기 영
    30.41s  user  발화 끝
    31.64s  ⚡SPAN 주입 [d'=1.54s / d_lead=8.39s]: Madhuravani played the role of Samantha in the 2018 Indian period biog
    38.66s  user  발화 시작: 아, 맞아요. 마두라바니였죠. 연기를 정말 잘 하시던데.
    38.68s  agent 발화 끝
    43.77s  agent 발화 시작: [happy] 네, 마두라바니 씨는 연기력이 뛰어나신 배우시죠.
    43.80s  user  발화 끝
    47.32s  agent 발화 끝
    47.51s  user  발화 시작: 요즘 계속 불안해서 잠을 잘 못 자고 있어요. 어떻게 하면 좋을까요?
    52.09s  user  발화 끝
    52.20s  agent 발화 시작: 불안하신 마음이 드시는군요. 규칙적인 수면 습관을 들이는 것이 도움이 될 수 있습니다.
    57.98s  agent 발화 끝
    58.23s  user  발화 시작: 규칙적인 수면 습관... 말은…
    61.27s  user  발화 끝
    62.99s  user  발화 시작: …쉽죠. 어떻게 해야 할까요?
    65.30s  user  발화 끝
    65.50s  agent 발화 시작: 잠자리에 드는 시간과 일어나는 시간을 일정하게 유지해 보세요.
    67.96s  user  발화 시작: 맞아요.
    68.74s  user  발화 끝
    69.76s  agent 발화 끝
    69.77s  user  발화 시작: 그건 해보려고 노력하고 있는데, 쉽지 않네요.
    72.65s  agent 발화 시작: [sigh] 힘드시겠어요. 잠들기 전에 따뜻한 물로 샤워를 하거나, 차를 마시는 것도 도움이 될 수 있습니다
    72.73s  user  발화 끝
    77.51s  user  발화 시작: 네.
    78.06s  user  발화 끝
    80.76s  agent 발화 끝
    81.17s  user  발화 시작: 차는 어떤 차를 마셔야 할까요?
    83.21s  agent 발화 시작: 캐모마일 차나 라벤더 차가 진정 효과가 있어서 좋습니다.
    83.25s  user  발화 끝
    86.36s  user  발화 시작: 그렇죠.
    87.18s  user  발화 끝
    87.56s  agent 발화 끝
    88.28s  user  발화 시작: 캐모마일 차… 한번 사봐야겠네요.
    90.56s  agent 발화 시작: 네, 한번 시도해 보세요. 도움이 되셨으면 좋겠습니다.
    90.64s  user  발화 끝
    93.84s  user  발화 시작: 오늘 날씨가 어때요?
    93.99s  agent 발화 끝
    94.56s  <ret> 발화 (turn26 첫 프레임)
    95.14s  agent 발화 시작: <ret> 서울은 현재 이십팔 점 이도이고, 습도는 육십오퍼센트, 바람은 시속 삼 점 일킬로미터로 불고 있습
    95.31s  user  발화 끝
    95.56s  ⚡SPAN 주입 [d'=1.01s / d_lead=10.02s]: (tool result) 28.2°C, humidity 65%, wind 3.1 km/h, partly cloudy.
   100.98s  user  발화 시작: 네.
   101.58s  user  발화 끝
   105.15s  agent 발화 끝
   105.59s  user  발화 시작: 꽤 덥네요.
   106.68s  user  발화 끝
   106.82s  agent 발화 시작: [curious] 네, 오늘 서울은 꽤 더울 것 같습니다.
   108.08s  user  발화 시작: 음.
   108.58s  user  발화 끝
   109.53s  agent 발화 끝
   110.63s  user  발화 시작: 혹시 서울에서 괜찮은 마사지샵 아세요?
   112.63s  <ret> 발화 (turn32 첫 프레임)
   113.22s  agent 발화 시작: <ret> 서울 신라호텔 스파는 다양한 트리트먼트와 시설을 갖춘 고급 스파입니다.
   113.41s  user  발화 끝
   114.33s  ⚡SPAN 주입 [d'=1.69s / d_lead=5.70s]: The Spa at Shilla Seoul is a luxury spa offering a range of treatments
   115.75s  user  발화 시작: 예.
   116.24s  user  발화 끝
   118.83s  user  발화 시작: 신라호텔 스파… 가격이 좀 비쌀 것 같은데요.
   118.92s  agent 발화 끝
   122.05s  user  발화 끝
   122.07s  agent 발화 시작: 네, 가격대는 조금 높은 편입니다. 좀 더 저렴한 곳을 찾으시겠어요?
   124.23s  user  발화 시작: 음.
   124.72s  user  발화 끝
   127.06s  user  발화 시작: 음… 조금 저렴한 곳도 괜찮아요.
   127.21s  agent 발화 끝
   128.92s  <ret> 발화 (turn38 첫 프레임)
   129.49s  agent 발화 시작: <ret> 타이 오아시스 스파 서울은 합리적인 가격으로 전통 태국 마사지를 제공하는 인기 있는 스파입니다.
   129.55s  user  발화 끝
   129.81s  ⚡SPAN 주입 [d'=0.89s / d_lead=6.25s]: Thai Oasis Spa Seoul is a popular spa offering traditional Thai massag
   135.75s  agent 발화 끝
   135.76s  user  발화 시작: 타이 오아시스 스파… 거기가 어디에 있어요?
   139.20s  agent 발화 시작: 강남역 근처에 있습니다.
   139.28s  user  발화 끝
   141.00s  agent 발화 끝
   141.48s  user  발화 시작: 강남역… 알겠어요.
   143.30s  agent 발화 시작: [happy] 네, 강남역 근처에 있습니다.
   143.42s  user  발화 끝
   145.61s  agent 발화 끝
   145.97s  user  발화 시작: 혹시 요즘 인기 있는 드라마가 뭐예요?
   148.24s  <ret> 발화 (turn44 첫 프레임)
   148.34s  agent 발화 시작: <ret> 현재 tvN과 넷플릭스에서 방영 중인 "눈물의 여왕"이 인기 있는 한국 드라마입니다.
   148.46s  user  발화 끝
   148.95s  ⚡SPAN 주입 [d'=0.71s / d_lead=5.42s]: "Queen of Tears" is a popular South Korean drama currently airing on t
   153.60s  user  발화 시작: "눈물의 여왕"… 한번 봐야겠네요.
   153.75s  agent 발화 끝
   156.09s  agent 발화 시작: 네, 많은 분들이 재미있게 보고 계시는 드라마입니다.
   156.09s  user  발화 끝
   157.67s  user  발화 시작: 네.
   158.26s  user  발화 끝
   159.40s  user  발화 시작: 오늘 저녁은 뭘 먹을까요?
   159.46s  agent 발화 끝
   161.39s  agent 발화 시작: 저녁 메뉴를 고민하시는군요. 혹시 특별히 드시고 싶은 음식이 있으세요?
   161.43s  user  발화 끝
   165.02s  user  발화 시작: 네.
   165.61s  user  발화 끝
   166.72s  user  발화 시작: 글쎄요… 딱히 생각나는 건 없네요.
   167.18s  agent 발화 끝
   169.50s  user  발화 끝
   169.88s  agent 발화 시작: [curious] 그럼 제가 추천해 드릴까요?
   171.82s  agent 발화 끝
   172.62s  user  발화 시작: 네, 추천해 주세요.
   173.91s  <ret> 발화 (turn54 첫 프레임)
   174.00s  user  발화 끝
   174.27s  agent 발화 시작: <ret> 비빔밥은 채소, 고기, 고추장과 함께 섞은 밥으로 구성된 인기 있는 한국 음식입니다.
   174.66s  ⚡SPAN 주입 [d'=0.74s / d_lead=6.49s]: Bibimbap is a popular Korean dish consisting of mixed rice with vegeta
   180.76s  agent 발화 끝
   181.16s  user  발화 시작: 비빔밥… 맛있겠네요.
   183.18s  agent 발화 시작: 네, 비빔밥은 맛있고 영양도 풍부합니다.
   183.23s  user  발화 끝
   186.23s  agent 발화 끝
   186.24s  user  발화 시작: 오늘 차 맡기는 거… 일월 십이일이었죠?
   188.96s  user  발화 끝
   188.99s  agent 발화 시작: 네, 일월 십이일 오전 아홉시 삼십분에 차를 맡기기로 하셨습니다.
   192.00s  🃏 CARD 주입 (2400f, 누적 59턴 요약, 114f): car model: 현대 소나타요; appointment time: 일월 십이일 오전 아홉시 삼십분; repair cost: 이만 오천원; massage loca
   193.22s  user  발화 시작: 아, 맞아요. 오전 아홉시 삼십분이었어요.
   193.39s  agent 발화 끝
   196.87s  user  발화 끝
   197.05s  agent 발화 시작: [happy] 네, 기억하고 계셨군요.
   199.12s  agent 발화 끝
   199.84s  user  발화 시작: 혹시 이번 주말에 가까운 곳으로 여행 갈 만한 곳이 있을까요?
   202.82s  <ret> 발화 (turn62 첫 프레임)
   203.19s  agent 발화 시작: <ret> 서울 근처의 남이섬은 아름다운 경치와 명소로 유명한 인기 관광지입니다.
   203.31s  user  발화 끝
   204.54s  ⚡SPAN 주입 [d'=1.72s / d_lead=5.14s]: Nami Island is a popular tourist destination near Seoul, known for its
   206.55s  user  발화 시작: 네.
   207.05s  user  발화 끝
   208.31s  user  발화 시작: 남이섬… 가보고 싶었는데.
   208.33s  agent 발화 끝
   210.25s  agent 발화 시작: 네, 남이섬은 데이트 코스로도 인기가 많습니다.
   210.39s  user  발화 끝
   213.55s  user  발화 시작: 이번 주말에 남이섬에 갈 수 있을까요?
   213.62s  agent 발화 끝
   215.81s  agent 발화 시작: [curious] 이번 주말은 칠월 십삼일, 십사일인데, 남이섬에 가실 수 있습니다.
   215.81s  user  발화 끝
   220.99s  agent 발화 끝
   221.52s  user  발화 시작: 좋네요. 그럼 남이섬 가는 방법 좀 알려주세요.
   225.50s  <ret> 발화 (turn69 첫 프레임)
   225.50s  agent 발화 시작: <ret> 서울에서 남이섬에 가려면 아이 티 엑스-청춘 열차를 타고 가평역으로 가서 페리를 타야 합니다.
   225.55s  user  발화 끝
   227.16s  ⚡SPAN 주입 [d'=1.66s / d_lead=6.11s]: To get to Nami Island from Seoul, you can take the ITX-Cheongchun trai
   231.61s  agent 발화 끝
   231.64s  user  발화 시작: 아이 티 엑스-청춘 열차… 가평역… 알겠습니다.
   235.88s  agent 발화 시작: 네, 가평역에서 페리를 타면 남이섬으로 갈 수 있습니다.
   235.94s  user  발화 끝
   240.04s  agent 발화 끝
   242.13s  user  발화 시작: 혹시 남이섬 근처에 맛집도 있나요?
   244.68s  <ret> 발화 (turn73 첫 프레임)
   244.75s  agent 발화 시작: <ret> 남이섬 근처 가평 지역에는 닭갈비 식당이 인기가 많습니다.
   244.76s  user  발화 끝
   245.75s  ⚡SPAN 주입 [d'=1.08s / d_lead=4.12s]: Dakgalbi restaurants are popular in the Gapyeong area near Nami Island
   246.60s  user  발화 시작: 네.
   247.24s  user  발화 끝
   248.87s  agent 발화 끝
   249.03s  user  발화 시작: 닭갈비… 맛있겠네요.
   251.31s  agent 발화 시작: 네, 닭갈비는 매콤달콤한 맛이 일품입니다.
   251.43s  user  발화 끝
   254.97s  user  발화 시작: 오늘 차 맡기는 비용이 얼마였죠?
   255.01s  agent 발화 끝
   256.95s  user  발화 끝
   256.97s  agent 발화 시작: 차 수리 비용은 이만 오천원이라고 말씀해주셨습니다.
   260.27s  user  발화 시작: 아, 맞아요. 이만 오천원이었어요.
   260.39s  agent 발화 끝
   263.09s  user  발화 끝
   263.11s  agent 발화 시작: [happy] 네, 정확히 기억하고 계시네요.
   265.37s  agent 발화 끝
   265.56s  user  발화 시작: 오늘 저녁 메뉴는 비빔밥으로 정했어요.
   268.09s  user  발화 끝
   268.29s  agent 발화 시작: 비빔밥을 선택하셨군요. 맛있게 드세요.
   271.52s  agent 발화 끝
   271.86s  user  발화 시작: 감사합니다.
   272.78s  agent 발화 시작: [happy] 천만에요.
   272.92s  user  발화 끝
   273.88s  agent 발화 끝
   273.96s  user  발화 시작: 네, 알겠습니다. 좋은 하루 보내세요.
   276.63s  user  발화 끝
   277.11s  agent 발화 시작: [happy] 예우님도 좋은 하루 보내세요.
   279.27s  agent 발화 끝
