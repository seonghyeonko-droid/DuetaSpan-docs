# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "은형",
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
#       "date": "2026-04-26",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-03-22",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2025-09-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-24",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2025-06-24",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-06-21",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-10",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-11-03",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-06-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주 토요일에 서울에서… | S2 …부산 가는 기차표 있나? | S3 KTX로 예약해 줘. | S4 고마워.

     0.00s  user  발화 시작: 이번 주 토요일에 서울에서…
     2.26s  user  발화 끝
     3.31s  user  발화 시작: …부산 가는 기차표 있나?
     4.85s  <ret> 발화 (turn2 첫 프레임)
     5.06s  user  발화 끝
     5.09s  agent 발화 시작: <ret> 이번 주 토요일 서울에서 부산 가는 기차는 두 편 있어요. 오후 두시 반 KTX는 두시간 십오분,
     5.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.56s]: (tool result) Trains found: 14:30 KTX, 2 hours 15 minutes, ₩59800; 16:
     9.07s  user  발화 시작: 맞아.
     9.70s  user  발화 끝
    17.66s  agent 발화 끝
    19.04s  user  발화 시작: KTX로 예약해 줘.
    20.73s  <ret> 발화 (turn5 첫 프레임)
    20.88s  user  발화 끝
    20.89s  agent 발화 시작: <ret> KTX 오후 두시 반으로 예약 완료됐어요. 좌석은 십오 에이이고, 금액은 오만 구천팔백원입니다. 
    20.89s  ⚡SPAN 주입 [d'=1.28s / d_lead=10.34s]: (tool result) Booking confirmed: Seoul to Busan, KTX, 14:30, seat 15A,
    31.12s  user  발화 시작: 고마워.
    31.23s  agent 발화 끝
    31.94s  user  발화 끝
    32.02s  agent 발화 시작: 제가 도와드릴 수 있어서 기뻐요. 혹시 다른 필요한 건 없으세요?
    36.38s  agent 발화 끝
