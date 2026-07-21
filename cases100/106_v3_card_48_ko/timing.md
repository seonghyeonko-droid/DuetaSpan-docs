# v3_card_48_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_card_48",
#     "name": "지연",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-25",
#       "category": "music",
#       "text": "User likes listening to 90s hip-hop."
#     },
#     {
#       "date": "2026-06-16",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cappuccino with oat milk."
#     },
#     {
#       "date": "2026-06-09",
#       "category": "car",
#       "text": "User drives no car — uses car-sharing."
#     },
#     {
#       "date": "2026-06-05",
#       "category": "bloodtype",
#       "text": "User's blood type is O-."
#     },
#     {
#       "date": "2026-05-28",
#       "category": "partner",
#       "text": "User's partner is named Leo."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "schedule",
#       "text": "User has a four-day compressed week."
#     },
#     {
#       "date": "2026-02-25",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Georgian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-24",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     },
#     {
#       "date": "2026-05-09",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 아침에 차 수리 맡겼어요. 유월 이십일일 오전 아홉시 사 | S2 아, 맞아요. | S3 오늘 날씨가 정말 좋네요. | S4 오늘 저녁은 뭘 먹을까요? 고민되네요.

     0.00s  user  발화 시작: 오늘 아침에 차 수리 맡겼어요. 유월 이십일일 오전 아홉시 사십오분에 맡겼고, 견적은 십만 오천원이었어요.
     8.34s  user  발화 끝
     8.39s  agent 발화 시작: 네, 기억해 둘게요. 차 수리 맡기신 거 잘 알겠습니다. 혹시 다른 계획 있으신가요?
    14.64s  agent 발화 끝
    14.89s  user  발화 시작: 그냥 오늘 날씨가 너무 좋아서 어디든 가고 싶네요.
    17.88s  agent 발화 시작: 날씨가 좋으니 어디든 떠나고 싶은 마음은 당연하죠. 어디로 가고 싶으세요?
    18.03s  user  발화 끝
    22.68s  user  발화 시작: 음… 최근에 콜 오브 듀티 블랙 옵스 이가 언제 나왔는지 궁금해졌어요.
    23.03s  agent 발화 끝
    27.40s  <ret> 발화 (turn5 첫 프레임)
    27.88s  agent 발화 시작: <ret> 콜 오브 듀티 블랙 옵스 이는 이천십이년 십일월 십삼일에 출시되었어요. 마이크로소프트 윈도우, 플
    27.97s  user  발화 끝
    28.10s  ⚡SPAN 주입 [d'=0.71s / d_lead=10.30s]: Call of Duty: Black Ops II was released on November 13, 2012, for Micr
    38.13s  user  발화 시작: 아, 그렇군요. 오래됐네요.
    38.18s  agent 발화 끝
    40.06s  user  발화 끝
    40.23s  agent 발화 시작: [happy] 네, 꽤 오래되었죠. 게임 취향이 어떻게 되세요? 혹시 다른 게임도 즐겨 하세요?
    42.03s  user  발화 시작: 그렇죠.
    42.71s  user  발화 끝
    45.59s  user  발화 시작: 가끔씩 해요. 요즘은 그냥 부산에서 가까운 곳으로 드라이브나 갈까 생각 중이에요.
    45.60s  agent 발화 끝
    49.72s  agent 발화 시작: 네네.
    50.36s  agent 발화 끝
    51.23s  user  발화 끝
    51.52s  agent 발화 시작: 부산 근처 드라이브라면 좋은 선택이죠. 해운대나 광안리는 어떠세요?
    56.19s  agent 발화 끝
    57.12s  user  발화 시작: 해운대는 자주 가봐서… 이번에는 조금 다른 곳으로 가보고 싶어요.
    58.51s  agent 발화 시작: 예.
    59.14s  agent 발화 끝
    61.42s  agent 발화 시작: 조금 다른 곳이라… 그러면 기장 쪽은 어떠세요? 바다도 예쁘고 조용해서 드라이브하기 좋을 거예요.
    61.52s  user  발화 끝
    67.40s  user  발화 시작: 기장은 괜찮네요. 혹시 기장에서 맛집도 추천해 주실 수 있나요?
    67.53s  agent 발화 끝
    70.05s  agent 발화 시작: 네네.
    70.88s  agent 발화 끝
    71.89s  <ret> 발화 (turn17 첫 프레임)
    72.11s  agent 발화 시작: <ret> 기장에는 흥부도라는 맛집이 유명해요. 신선한 해산물과 전통적인 한국 음식을 맛볼 수 있습니다.
    72.12s  user  발화 끝
    72.95s  ⚡SPAN 주입 [d'=1.06s / d_lead=6.86s]: Heungbudo is a popular restaurant in Gijang, Busan, known for its fres
    78.97s  agent 발화 끝
    79.61s  user  발화 시작: 흥부도요? 한번 알아봐야겠네요.
    81.73s  user  발화 끝
    81.84s  agent 발화 시작: [curious] 흥부도는 현지인들에게도 인기가 많아요. 미리 예약하는 게 좋을 수도 있습니다.
    86.93s  user  발화 시작: 예약도 가능해요?
    87.02s  agent 발화 끝
    88.26s  user  발화 끝
    88.35s  agent 발화 시작: 네, 예약이 가능합니다. 전화로 예약하시면 됩니다.
    91.63s  agent 발화 끝
    92.03s  user  발화 시작: 알겠습니다. 혹시 부산에서 괜찮은 카페도 추천해 주실 수 있나요? 조용하고 분위기 좋은 곳으로요.
    94.93s  agent 발화 시작: 네.
    95.47s  agent 발화 끝
    97.77s  <ret> 발화 (turn24 첫 프레임)
    98.27s  agent 발화 시작: <ret> 부산에는 카페 아틀리에라는 곳이 있어요. 분위기가 좋고 디저트도 맛있다고 합니다.
    98.37s  user  발화 끝
    98.95s  ⚡SPAN 주입 [d'=1.18s / d_lead=5.65s]: Cafe Atelier is a popular cafe in Busan, known for its aesthetic inter
   102.38s  user  발화 시작: 음.
   102.83s  user  발화 끝
   103.79s  user  발화 시작: 카페 아틀리에요? 이름이 예쁘네요.
   103.92s  agent 발화 끝
   105.78s  agent 발화 시작: [happy] 네, 이름처럼 분위기도 예뻐요. 사진 찍기에도 좋은 곳이라고 하네요.
   106.05s  user  발화 끝
   110.31s  user  발화 시작: 음… 영화 보러 갈까 생각 중인데, 부산에서 상영 중인 영화가 뭐가 있나요?
   110.41s  agent 발화 끝
   114.48s  <ret> 발화 (turn29 첫 프레임)
   115.00s  agent 발화 시작: <ret> 현재 부산에서 상영 중인 영화는 '인사이드 아웃 이', '배드 보이즈: 라이드 오어 다이', 그리
   115.17s  user  발화 끝
   115.71s  ⚡SPAN 주입 [d'=1.23s / d_lead=7.00s]: Currently showing in Busan are "Inside Out 2", "Bad Boys: Ride or Die"
   118.50s  user  발화 시작: 네.
   119.03s  user  발화 끝
   121.86s  user  발화 시작: '인사이드 아웃 이'가 재미있어 보이네요.
   122.00s  agent 발화 끝
   124.36s  agent 발화 시작: [curious] 네, '인사이드 아웃 이'는 평점이 꽤 높아요. 가족 영화로도 좋을 것 같습니다.
   124.40s  user  발화 끝
   126.43s  user  발화 시작: 맞아요.
   127.20s  user  발화 끝
   129.68s  agent 발화 끝
   130.22s  user  발화 시작: 가족 영화로 딱이겠네요. 이번 주말에 봐야겠어요.
   133.47s  agent 발화 시작: 좋은 선택이에요. 이번 주말에 즐거운 시간 보내세요.
   133.60s  user  발화 끝
   137.59s  agent 발화 끝
   138.48s  user  발화 시작: 감사합니다. 아…
   139.76s  user  발화 끝
   141.51s  user  발화 시작: …그런데 차 수리 맡긴 게… 정확히 언제였죠?
   142.53s  agent 발화 시작: 예.
   142.98s  agent 발화 끝
   144.73s  agent 발화 시작: 유월 이십일일 오전 아홉시 사십오분에 차를 맡기셨습니다.
   144.88s  user  발화 끝
   148.29s  agent 발화 끝
   148.80s  user  발화 시작: 아, 맞네요. 잊고 있었어요.
   150.95s  agent 발화 시작: [happy] 네, 기억해 드렸으니 걱정 마세요. 혹시 다른 계획 있으신가요?
   151.06s  user  발화 끝
   153.87s  user  발화 시작: 네.
   154.45s  user  발화 끝
   155.94s  agent 발화 끝
   156.51s  user  발화 시작: 오늘은 그냥 집에서 쉬려고 해요. 날씨가 너무 좋아서 책이나 읽으면서 휴식을 취해야겠어요.
   162.62s  user  발화 끝
   162.83s  agent 발화 시작: 집에서 쉬면서 휴식을 취하는 것도 좋은 방법이죠. 편안한 하루 보내세요.
   165.01s  user  발화 시작: 음.
   165.51s  user  발화 끝
   166.57s  user  발화 시작: 감사합니다.
   167.14s  agent 발화 끝
   167.54s  agent 발화 시작: [happy] 천만에요.
   167.66s  user  발화 끝
   168.73s  agent 발화 끝
   168.75s  user  발화 시작: 네, 알겠습니다.
   170.03s  user  발화 끝
   170.25s  agent 발화 시작: 오늘 하루도 행복하게 보내세요.
   172.23s  agent 발화 끝
   172.90s  user  발화 시작: 차 수리 비용이 얼마였죠?
   174.82s  agent 발화 시작: 십만 오천원이었습니다.
   174.83s  user  발화 끝
   176.62s  agent 발화 끝
   176.69s  user  발화 시작: 아, 맞아요.
   177.70s  user  발화 끝
   177.74s  agent 발화 시작: [happy] 네, 기억해 드렸으니 안심하세요.
   180.09s  agent 발화 끝
   180.75s  user  발화 시작: 아니요, 괜찮아요.
   182.16s  agent 발화 시작: [sigh] 그럼 편안한 저녁 시간 보내세요.
   182.22s  user  발화 끝
   185.72s  agent 발화 끝
   185.86s  user  발화 시작: 감사합니다.
   186.68s  user  발화 끝
   186.76s  agent 발화 시작: 천만에요.
   187.71s  user  발화 시작: 부산에서 괜찮은 마사지샵 아세요? 피로가 좀 풀고 싶어서요.
   187.80s  agent 발화 끝
   189.78s  agent 발화 시작: 예.
   190.41s  agent 발화 끝
   191.05s  <ret> 발화 (turn60 첫 프레임)
   191.66s  agent 발화 시작: <ret> 부산에는 스파랜드 센텀시티라는 곳이 있어요. 다양한 마사지 트리트먼트와 휴식 시설을 제공합니다.
   191.87s  ⚡SPAN 주입 [d'=0.82s / d_lead=6.35s]: Spa Land Centum City is a large spa in Busan, offering a variety of ma
   191.87s  user  발화 끝
   192.00s  🃏 CARD 주입 (2400f, 누적 61턴 요약, 124f): car repair date: 유월 이십일일 오전 아홉시 사십오분; car repair cost: 십만 오천원; current location: 부산; movie
   198.01s  agent 발화 끝
   199.01s  user  발화 시작: 스파랜드 센텀시티요? 한번 가봐야겠네요.
   202.57s  user  발화 끝
   202.96s  agent 발화 시작: [happy] 네, 피로를 풀기에 아주 좋은 곳이라고 합니다. 미리 예약하는 게 좋을 수도 있습니다.
   208.56s  agent 발화 끝
   209.81s  user  발화 시작: 예약은 어떻게 해야 하나요?
   211.54s  agent 발화 시작: 전화나 온라인으로 예약할 수 있습니다.
   211.65s  user  발화 끝
   213.67s  user  발화 시작: 알겠습니다.
   213.84s  agent 발화 끝
   214.49s  user  발화 끝
   214.50s  agent 발화 시작: 혹시 다른 궁금한 점 있으신가요?
   216.67s  agent 발화 끝
   218.27s  user  발화 시작: 아니요, 괜찮아요.
   219.56s  user  발화 끝
   219.76s  agent 발화 시작: [happy] 그럼 즐거운 시간 보내세요.
   221.51s  agent 발화 끝
   222.30s  user  발화 시작: 감사합니다.
   223.13s  user  발화 끝
   223.21s  agent 발화 시작: 천만에요.
   224.03s  user  발화 시작: 최근에 부산에 새로 생긴 맛집이 있나요?
   224.22s  agent 발화 끝
   226.13s  <ret> 발화 (turn72 첫 프레임)
   226.44s  agent 발화 시작: <ret> 부산에는 고기노카츠라는 새로 생긴 맛집이 있습니다. 일본식 돈까스를 전문으로 합니다.
   226.66s  user  발화 끝
   227.27s  ⚡SPAN 주입 [d'=1.15s / d_lead=6.07s]: Gogi no Katsu is a newly opened restaurant in Busan, specializing in J
   230.84s  user  발화 시작: 네네.
   231.56s  user  발화 끝
   232.51s  agent 발화 끝
   232.69s  user  발화 시작: 고기노카츠요? 돈까스 좋아하는데 한번 가봐야겠네요.
   236.52s  user  발화 끝
   236.54s  agent 발화 시작: [happy] 네, 돈까스를 좋아하신다면 분명 만족하실 거예요.
   240.42s  agent 발화 끝
   240.59s  user  발화 시작: 알겠습니다.
   241.40s  user  발화 끝
   241.49s  agent 발화 시작: 혹시 다른 궁금한 점 있으신가요?
   243.66s  agent 발화 끝
   243.67s  user  발화 시작: 아니요, 괜찮아요.
   244.90s  agent 발화 시작: [happy] 그럼 즐거운 시간 보내세요.
   245.01s  user  발화 끝
   246.74s  agent 발화 끝
   246.85s  user  발화 시작: 감사합니다.
   247.62s  agent 발화 시작: 천만에요.
   247.67s  user  발화 끝
   248.62s  agent 발화 끝
   248.70s  user  발화 시작: 오늘 저녁 메뉴 추천해 주세요.
   250.69s  agent 발화 시작: 저녁 메뉴라면… 따뜻한 국물이 있는 칼국수가 어떠세요?
   250.91s  user  발화 끝
   254.30s  agent 발화 끝
   255.34s  user  발화 시작: 칼국수도 좋네요.
   256.88s  user  발화 끝
   256.89s  agent 발화 시작: [happy] 네, 칼국수는 언제 먹어도 맛있죠.
   259.33s  user  발화 시작: 감사합니다.
   259.48s  agent 발화 끝
   260.34s  user  발화 끝
   260.74s  agent 발화 시작: 천만에요.
   261.54s  user  발화 시작: 혹시 부산에서 데이트하기 좋은 곳 추천해 주실 수 있나요?
   261.56s  agent 발화 끝
   264.70s  <ret> 발화 (turn89 첫 프레임)
   265.12s  agent 발화 시작: <ret> 부산에는 태종대 공원이 있어요. 아름다운 해안 경관과 산책로가 있어서 데이트하기에 좋습니다.
   265.15s  user  발화 끝
   266.58s  ⚡SPAN 주입 [d'=1.88s / d_lead=6.39s]: Taejongdae Park is a scenic park in Busan, offering beautiful coastal 
   267.95s  user  발화 시작: 네.
   268.58s  user  발화 끝
   271.51s  agent 발화 끝
   271.67s  user  발화 시작: 태종대 공원이요? 한번 가봐야겠네요.
   274.05s  agent 발화 시작: [happy] 네, 멋진 데이트를 즐기실 수 있을 거예요.
   274.21s  user  발화 끝
   275.65s  user  발화 시작: 음.
   276.19s  user  발화 끝
   277.05s  agent 발화 끝
   277.06s  user  발화 시작: 감사합니다.
   278.10s  agent 발화 시작: 천만에요.
   278.16s  user  발화 끝
   279.01s  user  발화 시작: 오늘 날씨가 정말 좋네요.
   279.11s  agent 발화 끝
   280.68s  agent 발화 시작: [happy] 네, 정말 좋은 날씨죠. 이런 날씨에는 어디든 가고 싶어지네요.
   280.75s  user  발화 끝
   287.02s  agent 발화 끝
   287.41s  user  발화 시작: 그러게요.
   288.24s  user  발화 끝
   288.56s  agent 발화 시작: 혹시 다른 계획 있으신가요?
   290.31s  user  발화 시작: 아니요, 그냥 집에서 쉬려고 해요.
   290.36s  agent 발화 끝
   292.52s  agent 발화 시작: [happy] 그럼 편안한 휴식을 취하세요.
   292.71s  user  발화 끝
   294.41s  agent 발화 끝
   294.95s  user  발화 시작: 감사합니다.
   295.77s  user  발화 끝
   295.88s  agent 발화 시작: 천만에요.
   296.80s  user  발화 시작: 요즘 스트레스가 좀 쌓여서…
   296.89s  agent 발화 끝
   299.01s  user  발화 끝
   299.03s  agent 발화 시작: [sigh] 스트레스가 쌓이셨다니 안타깝네요. 혹시 스트레스 해소에 도움이 될 만한 것을 추천해 드릴까요?
   305.89s  agent 발화 끝
   306.36s  user  발화 시작: 네, 부탁드려요.
   307.51s  agent 발화 시작: 따뜻한 물에 몸을 담그거나, 좋아하는 음악을 듣는 것도 좋은 방법입니다.
   307.69s  user  발화 끝
   312.14s  agent 발화 끝
   313.49s  user  발화 시작: 좋은 방법이네요.
   314.83s  user  발화 끝
   315.17s  agent 발화 시작: [happy] 네, 자신에게 맞는 방법을 찾아 스트레스를 해소하는 것이 중요합니다.
   319.70s  user  발화 시작: 감사합니다.
   319.85s  agent 발화 끝
   320.71s  user  발화 끝
   320.85s  agent 발화 시작: 천만에요.
   321.86s  agent 발화 끝
   322.09s  user  발화 시작: 부산에서 괜찮은 꽃집 아세요?
   323.62s  <ret> 발화 (turn113 첫 프레임)
   324.13s  agent 발화 시작: <ret> 부산에는 플라워 삼십구이라는 꽃집이 유명해요. 아름다운 꽃다발과 꽃 장식을 판매합니다.
   324.20s  user  발화 끝
   324.30s  ⚡SPAN 주입 [d'=0.68s / d_lead=6.40s]: Flower 39 is a popular flower shop in Busan, known for its beautiful b
   330.48s  user  발화 시작: 플라워 삼십구요? 한번 가봐야겠네요.
   330.52s  agent 발화 끝
   333.43s  user  발화 끝
   333.44s  agent 발화 시작: [happy] 네, 마음에 드는 꽃을 찾으실 수 있을 거예요.
   336.44s  user  발화 시작: 감사합니다.
   336.77s  agent 발화 끝
   337.26s  user  발화 끝
   337.74s  agent 발화 시작: 천만에요.
   338.93s  agent 발화 끝
   338.99s  user  발화 시작: 오늘 하루가 정말 길게 느껴지네요.
   341.10s  agent 발화 시작: [sigh] 네, 힘든 하루였던 것 같네요.
   341.38s  user  발화 끝
   344.10s  agent 발화 끝
   344.82s  user  발화 시작: 그러게요.
   345.43s  agent 발화 시작: 혹시 내일 계획 있으신가요?
   345.63s  user  발화 끝
   347.14s  user  발화 시작: 아직 없어요.
   347.32s  agent 발화 끝
   348.29s  user  발화 끝
   348.35s  agent 발화 시작: [happy] 그럼 편안하게 휴식을 취하세요.
   350.38s  user  발화 시작: 감사합니다.
   350.43s  agent 발화 끝
   351.10s  user  발화 끝
   351.14s  agent 발화 시작: 천만에요.
   352.10s  user  발화 시작: 부산에서 외국인 친구에게 보여줄 만한 곳 추천해 주세요.
   352.24s  agent 발화 끝
   353.15s  agent 발화 시작: 네.
   353.79s  agent 발화 끝
   355.37s  <ret> 발화 (turn128 첫 프레임)
   355.60s  agent 발화 시작: <ret> 부산에는 감천문화마을이 있어요. 다채로운 색상의 집들과 예술 작품으로 유명합니다. 외국인 친구에게
   355.70s  user  발화 끝
   355.97s  ⚡SPAN 주입 [d'=0.60s / d_lead=8.25s]: Gamcheon Culture Village is a colorful village in Busan, known for its
   363.69s  user  발화 시작: 감천문화마을요? 한번 가봐야겠네요.
   363.85s  agent 발화 끝
   366.16s  agent 발화 시작: [happy] 네, 분명히 좋아할 거예요.
   366.42s  user  발화 끝
   368.11s  user  발화 시작: 감사합니다.
   368.14s  agent 발화 끝
   369.16s  agent 발화 시작: 천만에요.
   369.34s  user  발화 끝
   370.19s  user  발화 시작: 아, 그런데 차 수리 맡긴 날짜가 언제였죠?
   370.26s  agent 발화 끝
   373.20s  agent 발화 시작: 유월 이십일일이었습니다.
   373.29s  user  발화 끝
   374.95s  agent 발화 끝
   375.30s  user  발화 시작: 아, 맞네요.
   376.62s  agent 발화 시작: [happy] 네, 기억해 드렸으니 안심하세요.
   376.77s  user  발화 끝
   378.79s  agent 발화 끝
   379.68s  user  발화 시작: 감사합니다.
   380.51s  agent 발화 시작: 천만에요.
   380.63s  user  발화 끝
   381.45s  user  발화 시작: 오늘 저녁은 뭘 먹을까요? 고민되네요.
   381.56s  agent 발화 끝
   384.00s  🃏 CARD 주입 (4800f, 누적 140턴 요약, 124f): car repair date: 유월 이십일일 오전 아홉시 사십오분; car repair cost: 십만 오천원; user location: 부산; movie pr
   384.08s  agent 발화 시작: 저녁 메뉴 고민이시군요. 따뜻한 국물이 있는 김치찌개는 어떠세요?
   384.17s  user  발화 끝
   385.89s  user  발화 시작: 예.
   386.52s  user  발화 끝
   388.95s  agent 발화 끝
   390.31s  user  발화 시작: 김치찌개도 좋네요.
   391.97s  user  발화 끝
   392.28s  agent 발화 시작: [happy] 네, 김치찌개는 언제 먹어도 맛있죠.
   393.07s  user  발화 시작: 아.
   393.56s  user  발화 끝
   394.92s  agent 발화 끝
   395.01s  user  발화 시작: 감사합니다.
   395.86s  agent 발화 시작: 천만에요.
   396.06s  user  발화 끝
   396.76s  user  발화 시작: 부산에서 괜찮은 네일샵 아세요?
   396.87s  agent 발화 끝
   398.53s  <ret> 발화 (turn148 첫 프레임)
   398.81s  agent 발화 시작: <ret> 부산에는 N 네일이라는 네일샵이 유명해요. 트렌디한 디자인과 숙련된 기술을 자랑합니다.
   399.03s  user  발화 끝
   399.70s  ⚡SPAN 주입 [d'=1.17s / d_lead=6.35s]: N nail is a popular nail salon in Busan, known for its trendy designs 
   402.56s  user  발화 시작: 네.
   403.05s  user  발화 끝
   405.16s  agent 발화 끝
   405.19s  user  발화 시작: N 네일요? 한번 가봐야겠네요.
   407.12s  agent 발화 시작: [happy] 네, 마음에 드는 네일 디자인을 찾으실 수 있을 거예요.
   407.26s  user  발화 끝
   408.09s  user  발화 시작: 예.
   408.73s  user  발화 끝
   410.54s  agent 발화 끝
   411.01s  user  발화 시작: 감사합니다.
   411.82s  user  발화 끝
   412.09s  agent 발화 시작: 천만에요.
   413.24s  agent 발화 끝
   413.25s  user  발화 시작: 오늘 하루도 거의 다 끝나가네요.
   415.63s  agent 발화 시작: [happy] 네, 오늘 하루도 수고하셨습니다.
   415.65s  user  발화 끝
   417.38s  user  발화 시작: 감사합니다.
   417.85s  agent 발화 끝
   418.20s  user  발화 끝
   418.50s  agent 발화 시작: 천만에요.
   419.59s  agent 발화 끝
   419.87s  user  발화 시작: 부산에서 괜찮은 서점 아세요?
   421.50s  <ret> 발화 (turn160 첫 프레임)
   421.86s  user  발화 끝
   422.10s  agent 발화 시작: <ret> 부산에는 보수동 책골목이 있어요. 많은 서점들이 모여 있는 역사적인 거리입니다.
   422.27s  ⚡SPAN 주입 [d'=0.76s / d_lead=5.28s]: Bosu-dong Book Street is a historic street in Busan, lined with numero
   424.61s  user  발화 시작: 네.
   425.34s  user  발화 끝
   427.38s  agent 발화 끝
   428.70s  user  발화 시작: 보수동 책골목요? 한번 가봐야겠네요.
   431.52s  user  발화 끝
   431.57s  agent 발화 시작: [happy] 네, 책을 좋아하신다면 분명 즐거운 시간을 보내실 수 있을 거예요.
   434.40s  user  발화 시작: 네.
   435.09s  user  발화 끝
   435.88s  agent 발화 끝
   435.93s  user  발화 시작: 감사합니다.
   436.96s  agent 발화 시작: 천만에요.
   437.04s  user  발화 끝
   437.97s  agent 발화 끝
   438.69s  user  발화 시작: 아, 차 수리 비용이 얼마였죠?
   440.52s  agent 발화 시작: 십만 오천원이었습니다.
   440.67s  user  발화 끝
   442.40s  agent 발화 끝
   442.45s  user  발화 시작: 아, 맞아요.
   443.18s  agent 발화 시작: [happy] 네, 기억해 드렸으니 안심하세요.
   443.42s  user  발화 끝
   445.26s  agent 발화 끝
   446.78s  user  발화 시작: 감사합니다.
   447.68s  agent 발화 시작: 천만에요.
   447.80s  user  발화 끝
   448.69s  agent 발화 끝
   449.21s  user  발화 시작: 오늘 하루 정말 힘들었네요.
   451.05s  user  발화 끝
   451.06s  agent 발화 시작: [sigh] 네, 힘든 하루였던 것 같네요. 편안하게 쉬세요.
   453.81s  user  발화 시작: 그렇죠.
   454.53s  user  발화 끝
   456.11s  agent 발화 끝
   456.79s  user  발화 시작: 감사합니다.
   457.53s  agent 발화 시작: 천만에요.
   457.60s  user  발화 끝
   458.63s  agent 발화 끝
   458.88s  user  발화 시작: 부산에서 괜찮은 공연장 아세요?
   460.88s  <ret> 발화 (turn179 첫 프레임)
   460.91s  agent 발화 시작: <ret> 부산에는 부산문화센터가 있어요. 다양한 공연과 행사가 열리는 인기 있는 장소입니다.
   461.09s  user  발화 끝
   461.93s  ⚡SPAN 주입 [d'=1.05s / d_lead=6.39s]: Busan Cultural Center is a popular venue in Busan, hosting a variety o
   463.61s  user  발화 시작: 네.
   464.24s  user  발화 끝
   467.30s  agent 발화 끝
   467.47s  user  발화 시작: 부산문화센터요? 한번 가봐야겠네요.
   470.06s  agent 발화 시작: [happy] 네, 즐거운 공연을 관람하실 수 있을 거예요.
   470.20s  user  발화 끝
   470.89s  user  발화 시작: 네.
   471.52s  user  발화 끝
   472.82s  user  발화 시작: 감사합니다.
   472.84s  agent 발화 끝
   473.56s  agent 발화 시작: 천만에요.
   473.64s  user  발화 끝
   474.71s  agent 발화 끝
   475.04s  user  발화 시작: 오늘 하루 마무리 잘 하세요.
   476.94s  agent 발화 시작: [happy] 네, 고객님도 오늘 하루 마무리 잘 하세요.
   477.15s  user  발화 끝
   479.80s  agent 발화 끝
