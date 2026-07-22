# v3_card_47_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_card_47",
#     "name": "준찬",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-13",
#       "category": "employer",
#       "text": "User works at a consulting firm."
#     },
#     {
#       "date": "2026-05-31",
#       "category": "gym",
#       "text": "User has a gym membership near the station."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "streaming",
#       "text": "User subscribes to a shared Netflix family plan."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "partner",
#       "text": "User's partner is named Sofia."
#     },
#     {
#       "date": "2026-01-19",
#       "category": "child",
#       "text": "User has a child named Ava, age 3."
#     },
#     {
#       "date": "2026-01-09",
#       "category": "dish",
#       "text": "User's go-to comfort dish is butter chicken."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "airline",
#       "text": "User usually flies with Lufthansa."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-14",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     },
#     {
#       "date": "2026-03-22",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     },
#     {
#       "date": "2026-03-03",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 히라, 저 사월 구일에 주문한 거 찾으러 가기로 했어요. | S2 아, 맞다. 아까 예약금 얼마라고 했었죠? | S3 아, 저 다음 달에 제주도 여행 가려고 하는데 항공권 좀 알아 | S4 열일곱시 영화로 예매하고 싶어요.

     0.00s  user  발화 시작: 히라, 저 사월 구일에 주문한 거 찾으러 가기로 했어요.
     2.38s  agent 발화 시작: 네.
     2.73s  agent 발화 끝
     3.61s  agent 발화 시작: [happy] 아, 맞다! 주문하신 거 찾으러 가시는군요.
     3.83s  user  발화 끝
     6.85s  user  발화 시작: 오후 열두시에 가기로 했고, 예약금으로 십팔만원 미리 보냈거든요.
     7.03s  agent 발화 끝
    11.57s  user  발화 끝
    12.03s  agent 발화 시작: 네, 기억해 둘게요.
    13.46s  user  발화 시작: 근데 문득 궁금한 게 있는데, 이천십팔년 엔 비 에이 정규 시즌은 언제 시작했었죠?
    13.50s  agent 발화 끝
    17.50s  agent 발화 시작: 네.
    17.91s  agent 발화 끝
    18.96s  agent 발화 시작: <ret> 확인해 보니 이천십칠년 시월 십칠일에 시작되었습니다.
    18.97s  <ret> 발화 (turn7 첫 프레임)
    19.07s  user  발화 끝
    20.87s  ⚡SPAN 주입 [d'=1.90s / d_lead=3.84s]: The 2017-18 NBA regular season began on October 17, 2017.
    22.80s  agent 발화 끝
    23.07s  user  발화 시작: 아, 생각보다 빨랐네요. 그때 농구 정말 많이 봤는데.
    25.47s  agent 발화 시작: 네.
    25.93s  agent 발화 끝
    27.29s  agent 발화 시작: [laugh] 그러셨군요! 요즘도 스포츠 경기 챙겨 보시는 편인가요?
    27.37s  user  발화 끝
    29.12s  user  발화 시작: 네네.
    29.84s  user  발화 끝
    32.61s  agent 발화 끝
    32.92s  user  발화 시작: 요즘은 시간이 없어서 하이라이트만 봐요. 아, 근데 제가 아까 몇 시에 간다고 했었죠?
    35.78s  agent 발화 시작: 네네.
    36.41s  agent 발화 끝
    37.92s  user  발화 끝
    38.32s  agent 발화 시작: 오후 열두시라고 말씀하셨어요.
    40.22s  user  발화 시작: 맞아요. 고마워요. 아, 이번 주말에 서울에서 전시회 같은 거 볼만한 거 있을까요?
    40.63s  agent 발화 끝
    45.24s  <ret> 발화 (turn16 첫 프레임)
    45.61s  agent 발화 시작: <ret> 요즘 인기 있는 전시가 꽤 있어요. 국립현대미술관에서 하는 이건희 컬렉션 특별전이 좋은 평가를 받
    45.68s  user  발화 끝
    46.39s  ⚡SPAN 주입 [d'=1.14s / d_lead=3.41s]: (tool result) Lee Kun-Hee Collection Special Exhibition at National Mu
    56.41s  agent 발화 끝
    56.96s  user  발화 시작: 국립현대미술관이면 가깝네요. 거기 가보고 싶어요.
    60.88s  agent 발화 시작: [happy] 좋은 선택이에요! 전시 보고 근처에서 맛있는 것도 드시면 좋겠네요.
    60.98s  user  발화 끝
    65.73s  agent 발화 끝
    65.75s  user  발화 시작: 그러게요. 근처에 괜찮은 파스타 집 있을까요?
    68.97s  <ret> 발화 (turn20 첫 프레임)
    69.47s  agent 발화 시작: <ret> 오스테리아 오르조라는 곳이 있어요. 제철 이탈리아 파스타 전문점인데 평점도 사 점 오점으로 높고 
    69.59s  user  발화 끝
    69.75s  ⚡SPAN 주입 [d'=0.78s / d_lead=8.48s]: (tool result) Osteria Orzo, specializing in seasonal Italian pasta, ra
    74.15s  user  발화 시작: 음.
    74.59s  user  발화 끝
    77.86s  agent 발화 시작: [happy] 네, 거기 파스타가 정말 맛있기로 유명하더라고요. 예약하고 가시는 걸 추천드려요.
    77.95s  agent 발화 끝
    83.14s  agent 발화 끝
    83.52s  user  발화 시작: 아, 맞다. 아까 예약금 얼마라고 했었죠?
    85.97s  agent 발화 시작: 십팔만원이라고 하셨어요.
    86.05s  user  발화 끝
    87.37s  user  발화 시작: 맞아요. 금액이 좀 커서 다시 확인하고 싶었어요.
    87.71s  agent 발화 끝
    90.42s  agent 발화 시작: 충분히 그러실 수 있죠. 꼼꼼하게 챙기시는 모습이 보기 좋습니다.
    90.61s  user  발화 끝
    94.76s  agent 발화 끝
    96.14s  user  발화 시작: 히라 씨는 루틴 짜는 거 도와주신다고 했잖아요. 제가 요즘 아침에 자꾸 늦게 일어나는데 팁 좀 주실래요?
    99.20s  agent 발화 시작: 네네.
    99.83s  agent 발화 끝
   102.09s  agent 발화 시작: [happy] 그럼요! 우선 잠들기 전 스마트폰 사용을 줄이는 것부터 시작해 보는 건 어떨까요?
   102.26s  user  발화 끝
   107.39s  user  발화 시작: 그게 제일 어렵더라고요. 유튜브 보다 보면 시간이 금방 가요.
   107.46s  agent 발화 끝
   111.00s  agent 발화 시작: [laugh] 다들 그러시죠. 그럼 딱 십분만 알람을 맞춰두고 끄는 습관을 들여보세요.
   111.10s  user  발화 끝
   117.71s  agent 발화 끝
   118.41s  user  발화 시작: 오, 그건 해볼 수 있을 것 같아요. 내일 아침 일곱시에 알람 좀 맞춰줄래요?
   122.60s  <ret> 발화 (turn33 첫 프레임)
   123.07s  agent 발화 시작: <ret> 네, 내일 아침 일곱시로 알람 설정 완료했습니다.
   123.13s  user  발화 끝
   123.99s  ⚡SPAN 주입 [d'=1.39s / d_lead=3.51s]: (tool result) Alarm set for 07:00.
   126.45s  user  발화 시작: 고마워요. 아, 그런데 제가 사월 구일에 간다고 했었나, 아니면 다른 날이었나?
   126.59s  agent 발화 끝
   130.43s  agent 발화 시작: 네네.
   130.97s  agent 발화 끝
   132.15s  user  발화 끝
   132.34s  agent 발화 시작: 사월 구일에 가신다고 말씀하셨어요.
   134.97s  agent 발화 끝
   135.10s  user  발화 시작: 아, 맞다! 헷갈렸네요. 근데 요즘 서울 날씨가 너무 변덕스럽지 않나요?
   140.26s  <ret> 발화 (turn38 첫 프레임)
   140.78s  agent 발화 시작: <ret> 오늘 날씨가 어떤지 한번 볼게요. 지금 서울은 이십사도이고 구름이 조금 낀 날씨예요. 습도는 육십
   140.98s  user  발화 끝
   141.67s  ⚡SPAN 주입 [d'=1.41s / d_lead=2.59s]: (tool result) Seoul weather: 24 degrees Celsius, partly cloudy, humidi
   148.56s  agent 발화 끝
   148.75s  user  발화 시작: 생각보다 선선하네요. 산책하기 딱 좋은 날씨 같아요.
   152.46s  agent 발화 시작: [happy] 맞아요. 가볍게 걷기 정말 좋은 기온이네요.
   152.58s  user  발화 끝
   154.36s  user  발화 시작: 음.
   154.72s  user  발화 끝
   155.61s  user  발화 시작: 아, 저 다음 달에 제주도 여행 가려고 하는데 항공권 좀 알아봐 주실 수 있나요?
   155.69s  agent 발화 끝
   157.48s  agent 발화 시작: 네네.
   158.02s  agent 발화 끝
   160.70s  agent 발화 시작: 네, 물론이죠! 출발하시는 날짜랑 돌아오시는 날짜 알려주시겠어요?
   160.76s  user  발화 끝
   164.94s  user  발화 시작: 팔월 십오일에 출발해서 십칠일에 돌아오는 일정으로 찾아주세요.
   165.05s  agent 발화 끝
   168.68s  <ret> 발화 (turn46 첫 프레임)
   169.26s  agent 발화 시작: <ret> 검색해 보니 대한항공은 이십오만원이고, 아시아나 항공은 이십삼만원입니다.
   169.38s  user  발화 끝
   169.58s  ⚡SPAN 주입 [d'=0.91s / d_lead=5.33s]: (tool result) Korean Air: 250,000원, Asiana Airlines: 230,000원.
   172.55s  user  발화 시작: 네.
   173.05s  user  발화 끝
   174.46s  user  발화 시작: 아시아나가 조금 더 저렴하네요. 근데 제주도 가면 꼭 가봐야 할 곳 추천해 주세요.
   174.59s  agent 발화 끝
   179.63s  <ret> 발화 (turn49 첫 프레임)
   179.99s  agent 발화 시작: <ret> 제주도에는 정말 멋진 곳이 많죠. 성산 일출봉을 추천드려요. 유네스코 세계자연유산으로 지정된 곳인
   180.11s  user  발화 끝
   181.05s  ⚡SPAN 주입 [d'=1.42s / d_lead=3.11s]: (tool result) Seongsan Ilchulbong Peak, a UNESCO World Heritage site k
   190.56s  agent 발화 끝
   190.56s  user  발화 시작: 성산 일출봉 좋죠. 예전에 한 번 가봤는데 또 가고 싶어요.
   192.00s  🃏 CARD 주입 (2400f, 누적 51턴 요약, 128f): order date: 사월 구일; order deposit: 십팔만원; pickup time: 오후 열두시; alarm time: 내일 아침 일곱시; travel
   195.05s  user  발화 끝
   195.21s  agent 발화 시작: [happy] 다시 가셔도 분명 또 다른 감동이 있을 거예요. 이번에는 다른 코스도 짜보시는 건 어떨까요?
   200.46s  user  발화 시작: 음, 그러게요. 아, 근데 제가 아까 주문 건 찾으러 가는 거, 몇 시라고 했었죠?
   200.49s  agent 발화 끝
   204.05s  agent 발화 시작: 예.
   204.50s  agent 발화 끝
   205.50s  agent 발화 시작: 오후 열두시라고 하셨어요.
   205.51s  user  발화 끝
   207.48s  agent 발화 끝
   208.93s  user  발화 시작: 아, 맞아요. 계속 까먹네요. 히라 씨가 잘 기억해 줘서 다행이에요.
   213.61s  agent 발화 시작: [laugh] 제가 있잖아요!
   213.65s  user  발화 끝
   215.96s  agent 발화 끝
   216.80s  user  발화 시작: 고마워요. 아, 그런데 요즘 볼만한 영화 뭐 있을까요?
   220.56s  <ret> 발화 (turn58 첫 프레임)
   221.13s  agent 발화 시작: <ret> 공상과학 영화인 더 그레이트 저니가 별점 사 점 팔점으로 아주 인기가 많고, 로맨스 영화인 서울 
   221.28s  user  발화 끝
   222.49s  ⚡SPAN 주입 [d'=1.93s / d_lead=8.71s]: (tool result) "The Great Journey" - Sci-Fi, 4.8 stars; "Seoul Night" -
   223.84s  user  발화 시작: 음.
   224.47s  user  발화 끝
   229.70s  user  발화 시작: 더 그레이트 저니 궁금하네요. 그거 상영 시간표 좀 알려주실래요?
   229.84s  agent 발화 끝
   231.07s  agent 발화 시작: 음.
   231.66s  agent 발화 끝
   233.34s  <ret> 발화 (turn62 첫 프레임)
   233.93s  agent 발화 시작: <ret> 씨지브이 강남점에서 열네시, 열일곱시, 스무시에 상영합니다.
   234.05s  user  발화 끝
   234.64s  ⚡SPAN 주입 [d'=1.30s / d_lead=4.35s]: (tool result) CGV Gangnam: 14:00, 17:00, 20:00.
   236.56s  user  발화 시작: 네.
   237.01s  user  발화 끝
   238.24s  user  발화 시작: 열일곱시 영화로 예매하고 싶어요.
   238.28s  agent 발화 끝
   240.70s  <ret> 발화 (turn65 첫 프레임)
   240.77s  agent 발화 시작: <ret> 씨지브이 강남점 열일곱시 영화 예매 완료되었습니다.
   240.88s  user  발화 끝
   241.36s  ⚡SPAN 주입 [d'=0.67s / d_lead=3.84s]: (tool result) Ticket booked for 17:00 at CGV Gangnam.
   243.27s  user  발화 시작: 네.
   243.72s  user  발화 끝
   244.62s  agent 발화 끝
   245.07s  user  발화 시작: 와, 정말 빠르네요. 감사합니다.
   247.70s  agent 발화 시작: [happy] 도움이 되어서 기뻐요! 영화 재미있게 보고 오세요.
   247.84s  user  발화 끝
   249.53s  user  발화 시작: 네.
   250.16s  user  발화 끝
   251.06s  agent 발화 끝
   252.83s  user  발화 시작: 네, 그럴게요. 아, 근데 제가 이번 주에 피부과 예약했었는지 기억이 안 나요.
   257.82s  user  발화 끝
   258.03s  agent 발화 시작: 제가 확인해 드릴 수 있는 권한이 없어서, 예약하신 병원에 직접 확인해 보시는 게 좋을 것 같아요.
   264.15s  agent 발화 끝
   264.17s  user  발화 시작: 아, 맞다. 제가 직접 예약했었죠. 확인해 볼게요.
   267.87s  user  발화 끝
   268.08s  agent 발화 시작: 네, 확인해 보시고 혹시 알람 설정 필요하시면 말씀해 주세요.
   272.39s  user  발화 시작: 그럴게요. 그런데 히라 씨, 제가 아까 예약금 얼마라고 했었죠?
   272.56s  agent 발화 끝
   276.44s  agent 발화 시작: 십팔만원이라고 하셨어요.
   276.55s  user  발화 끝
   278.25s  agent 발화 끝
   279.37s  user  발화 시작: 아, 맞아요. 이제 진짜 안 잊어버릴게요.
   282.53s  agent 발화 시작: [laugh] 괜찮습니다. 제가 기억하고 있으니까 너무 걱정 마세요.
   282.60s  user  발화 끝
   285.57s  user  발화 시작: 음.
   285.88s  user  발화 끝
   287.44s  agent 발화 끝
   287.89s  user  발화 시작: 고마워요. 이제 슬슬 정리하고 나가봐야겠어요.
   291.34s  agent 발화 시작: [happy] 네, 오늘 하루 즐겁게 보내시고 다음에 또 봬요!
   291.40s  user  발화 끝
   292.18s  user  발화 시작: 맞아요.
   292.81s  user  발화 끝
   294.29s  agent 발화 끝
   294.61s  user  발화 시작: 네, 안녕히 계세요.
   296.21s  user  발화 끝
   296.40s  agent 발화 시작: 안녕히 가세요!
   297.54s  agent 발화 끝
