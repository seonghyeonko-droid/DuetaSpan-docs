# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "서람",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-12",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-09-13",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-06-30",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in October."
#     },
#     {
#       "date": "2025-05-31",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-24",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 케리골드 아이리쉬 크림 리큐어, 그거 어떤 회사가 만드는 | S2 풀을 먹고 자란 소라… 그래서 맛이 다른 건가 보네요. 그럼  | S3 그 오르누아 회사, 버터 말고 다른 제품도 많이 만드나요? | S4 근데 그 오르누아 회사, 한국에도 진출해 있나요?

     0.00s  user  발화 시작: 혹시 케리골드 아이리쉬 크림 리큐어, 그거 어떤 회사가 만드는지 아세요?
     4.74s  <ret> 발화 (turn1 첫 프레임)
     4.90s  agent 발화 시작: <ret> 케리골드는 아일랜드 유제품 브랜드인데, 아일랜드 낙농업자 협동조합인 오르누아에서 만들고 있어요.
     4.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.90s]: Kerrygold is an Irish dairy products brand owned by Ornua, a cooperati
     4.90s  user  발화 끝
     9.80s  user  발화 시작: 오르누아요? 그 회사는 주로 뭘 파는 회사예요?
     9.80s  agent 발화 끝
    13.15s  <ret> 발화 (turn3 첫 프레임)
    13.23s  agent 발화 시작: <ret> 오르누아는 매년 약 이억 이천만 킬로그램의 유제품을 생산해서 백삼십개국 이상에 수출하고 있대요.
    13.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.88s]: Ornua produces approximately 220 million kilograms of dairy products a
    13.23s  user  발화 끝
    19.11s  user  발화 시작: 정말요?
    19.11s  agent 발화 끝
    19.60s  user  발화 시작: 꽤 많이 수출하네요. 그…
    19.60s  user  발화 끝
    21.55s  user  발화 시작: …유제품 종류가 구체적으로 뭐가 있나요?
    21.55s  user  발화 끝
    23.92s  <ret> 발화 (turn7 첫 프레임)
    24.00s  agent 발화 시작: <ret> 오르누아의 제품 포트폴리오에는 버터, 치즈, 분유, 그리고 식품 제조 및 외식 산업용 원료가 포함
    24.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.35s]: Ornua’s product portfolio includes butter, cheese, milk powders, and i
    24.00s  user  발화 끝
    31.35s  user  발화 시작: 버터랑 치즈는 당연하고, 분유도 파는군요. 혹시 케리골드 버터가 유명한 이유가 있나요?
    31.35s  agent 발화 끝
    36.34s  <ret> 발화 (turn9 첫 프레임)
    36.74s  agent 발화 시작: <ret> 케리골드 버터는 아일랜드 소들이 풀을 먹고 자라면서 베타카로틴 함량이 높아져서 풍부하고 크리미한 
    36.74s  ⚡SPAN 주입 [d'=1.44s / d_lead=6.86s]: (tool result) Kerrygold butter is renowned for its rich, creamy flavor
    36.74s  user  발화 끝
    43.60s  user  발화 시작: 네.
    43.60s  agent 발화 끝
    44.09s  user  발화 시작: 풀을 먹고 자란 소라… 그래서 맛이 다른 건가 보네요. 그럼 그 소들은 어디에서 키워요?
    44.09s  user  발화 끝
    50.55s  <ret> 발화 (turn12 첫 프레임)
    50.95s  agent 발화 시작: <ret> 케리골드 버터의 우유는 아일랜드의 푸른 초원에서 위치한 아일랜드 낙농장에서 나온다고 해요.
    50.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.39s]: The milk for Kerrygold butter comes from Irish dairy farms located acr
    50.95s  user  발화 끝
    56.34s  user  발화 시작: 아일랜드 전역이군요. 혹시 그 버터, 가격은 어느 정도 해요?
    56.34s  agent 발화 끝
    60.59s  <ret> 발화 (turn14 첫 프레임)
    60.75s  agent 발화 시작: <ret> 미국 슈퍼마켓에서 백십삼그램짜리 케리골드 순수 아이리쉬 버터는 보통 오 점 구 구달러에서 육 점 
    60.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.82s]: (tool result) A 4-ounce package of Kerrygold Pure Irish Butter typical
    60.75s  user  발화 끝
    69.56s  user  발화 시작: 진짜요?
    69.56s  agent 발화 끝
    70.05s  user  발화 시작: 육달러 정도면 생각보다 비싸네요. 다른 버터보다 훨씬 비싼가요?
    70.05s  user  발화 끝
    73.73s  <ret> 발화 (turn17 첫 프레임)
    73.97s  agent 발화 시작: <ret> 케리골드 버터는 독특한 생산 과정과 수입품이라는 점 때문에 일반 미국 버터 브랜드보다 보통 이십~
    73.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.33s]: (tool result) Kerrygold butter is generally 20-30% more expensive than
    73.97s  user  발화 끝
    82.30s  user  발화 시작: 이십~삼십퍼센트나 더 비싸다니, 확실히 고급 버터인가 보네요.
    82.30s  agent 발화 끝
    85.73s  agent 발화 시작: 맞아요, 품질 면에서는 꽤 인정받는 버터라고 하네요.
    85.73s  user  발화 끝
    89.16s  user  발화 시작: 네.
    89.16s  agent 발화 끝
    89.65s  user  발화 시작: 그 오르누아 회사, 버터 말고 다른 제품도 많이 만드나요?
    89.65s  user  발화 끝
    93.74s  <ret> 발화 (turn22 첫 프레임)
    94.06s  agent 발화 시작: <ret> 오르누아는 더블리너 치즈, 필그림스 초이스 치즈, 그리고 밴든 베일 치즈 등 다른 브랜드도 소유하
    94.06s  ⚡SPAN 주입 [d'=1.52s / d_lead=7.35s]: Ornua also owns the brands Dubliner cheese, Pilgrims Choice cheese, an
    94.06s  user  발화 끝
   101.41s  user  발화 시작: 예.
   101.41s  agent 발화 끝
   101.90s  user  발화 시작: 치즈도 많이 만드는군요. 그럼 그 회사 매출은 어느 정도 돼요?
   101.90s  user  발화 끝
   106.71s  <ret> 발화 (turn25 첫 프레임)
   106.79s  agent 발화 시작: <ret> 이천이십이년에 오르누아는 이십억 육천만 유로의 매출을 기록했는데, 전년도보다 상당히 증가한 수치예
   106.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.39s]: (tool result) In 2022, Ornua reported a turnover of €2.06 billion, a s
   106.79s  user  발화 끝
   112.18s  user  발화 시작: 네.
   112.18s  agent 발화 끝
   112.67s  user  발화 시작: 이십억 유로면 엄청나네요!
   112.67s  user  발화 끝
   114.14s  agent 발화 시작: 네, 꽤 큰 규모의 회사인 것 같아요.
   114.14s  user  발화 끝
   117.57s  user  발화 시작: 그 회사는 아일랜드 경제에 얼마나 영향을 미치나요?
   117.57s  agent 발화 끝
   120.84s  <ret> 발화 (turn30 첫 프레임)
   121.00s  agent 발화 시작: <ret> 오르누아는 매년 아일랜드 경제에 삼십억 유로 이상을 기여하고, 직접 및 간접적으로 약 일만 팔천 
   121.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.82s]: (tool result) Ornua contributes over €3 billion annually to the Irish 
   121.00s  user  발화 끝
   129.82s  user  발화 시작: 음.
   129.82s  agent 발화 끝
   130.31s  user  발화 시작: 일만 팔천 개의 일자리라니, 정말 큰 역할을 하는 회사군요.
   130.31s  user  발화 끝
   134.72s  agent 발화 시작: 네, 아일랜드 경제에 중요한 역할을 하는 회사라고 할 수 있겠네요.
   134.72s  user  발화 끝
   139.62s  user  발화 시작: 예.
   139.62s  agent 발화 끝
   140.11s  user  발화 시작: 근데 그 오르누아 회사, 한국에도 진출해 있나요?
   140.11s  user  발화 끝
   143.38s  <ret> 발화 (turn36 첫 프레임)
   143.54s  agent 발화 시작: <ret> 케리골드 제품은 한국에서도 판매되고 있지만, 오르누아는 한국에 직접적인 자회사나 제조 시설을 가지
   143.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.35s]: (tool result) While Kerrygold products are available in South Korea, O
   143.54s  user  발화 끝
   150.88s  user  발화 시작: 직접 자회사는 없군요. 그럼 수입해서 파는 건가요? —
   150.88s  agent 발화 끝
   154.80s  user  발화 시작: … 혹시 그 케리골드 버터, 유기농인가요?
   154.80s  user  발화 끝
   157.34s  <ret> 발화 (turn39 첫 프레임)
   157.74s  agent 발화 시작: <ret> 유기농 인증 여부에 대해 말씀드리려고 했는데요 — 케리골드 버터는 유기농 인증은 받지 않았지만, 
   157.74s  user  발화 끝
   159.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.43s]: Kerrygold butter is not certified organic, but the cows are grass-fed 
   170.48s  user  발화 시작: 유기농은 아니지만 풀을 먹고 자란 소라니, 괜찮네요.
   170.48s  agent 발화 끝
   173.91s  agent 발화 시작: 네, 풀을 먹고 자란 소에서 나오는 우유는 맛과 영양 면에서 더 좋다고 알려져 있어요.
   173.91s  user  발화 끝
   180.77s  agent 발화 끝
