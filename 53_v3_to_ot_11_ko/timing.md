# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "현율",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-28",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-04-07",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in October."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-05",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-03-01",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-12-15",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 버지니아 울프가 쓴 책 좀 알려줄 수 있어? | S2 ‘자기만의 방’도 울프가 쓴 거네? | S3 잠깐만, 지금 몇 시지? | S4 (다시 돌아와서) 아, 맞다. 울프 말이야…

     0.00s  user  발화 시작: 혹시 버지니아 울프가 쓴 책 좀 알려줄 수 있어?
     4.45s  <ret> 발화 (turn1 첫 프레임)
     4.67s  agent 발화 시작: <ret> 버지니아 울프는 이십세기 가장 중요한 모더니스트 작가 중 한 사람으로 여겨지는 영국의 작가입니다.
     4.67s  user  발화 끝
     5.65s  ⚡SPAN 주입 [d'=1.20s / d_lead=6.75s]: Virginia Woolf was an English writer, considered one of the foremost m
    11.42s  user  발화 시작: 아, 그렇군요. ‘댈러웨이 부인’은 누가 썼지?
    11.42s  agent 발화 끝
    14.25s  <ret> 발화 (turn3 첫 프레임)
    14.54s  agent 발화 시작: <ret> ‘댈러웨이 부인’은 천구백이십오년에 출간되었고, ‘자기만의 방’은 천구백이십구년에 출간되었는데, 
    14.54s  user  발화 끝
    14.55s  ⚡SPAN 주입 [d'=0.30s / d_lead=6.75s]: Virginia Woolf wrote Mrs Dalloway, published in 1925, and A Room of On
    21.29s  user  발화 시작: 와.
    21.29s  agent 발화 끝
    21.81s  agent 발화 시작: 두 권 모두 그녀의 대표작으로 꼽혀요.
    21.81s  user  발화 끝
    24.92s  user  발화 시작: ‘자기만의 방’도 울프가 쓴 거네?
    24.92s  agent 발화 끝
    27.23s  <ret> 발화 (turn7 첫 프레임)
    27.52s  agent 발화 시작: <ret> 네, 맞아요. ‘자기만의 방’ 역시 천구백이십구년에 출간된 버지니아 울프의 작품입니다.
    27.52s  user  발화 끝
    28.62s  ⚡SPAN 주입 [d'=1.39s / d_lead=5.19s]: Virginia Woolf wrote Mrs Dalloway, published in 1925, and A Room of On
    32.71s  user  발화 시작: 응.
    32.71s  agent 발화 끝
    33.23s  user  발화 시작: 잠깐만, 지금 몇 시지?
    33.23s  user  발화 끝
    35.31s  user  발화 시작: (다시 돌아와서) 아, 맞다. 울프 말이야…
    35.31s  user  발화 끝
    38.42s  user  발화 끝
