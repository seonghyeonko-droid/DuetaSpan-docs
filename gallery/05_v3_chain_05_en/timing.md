# v3_chain_05_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "Aiden",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-25",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2025-10-24",
#       "category": "home",
#       "text": "User's home address is 756 Oak Avenue."
#     },
#     {
#       "date": "2025-09-02",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     },
#     {
#       "date": "2025-08-31",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-16",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-10-05",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-05-28",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m new to Seoul, and I’d really… | S2 …like to see a movie tonight. | S3 Oh, that sounds good! Can you chec | S4 Great! Could you book me one ticke

     0.00s  user  발화 시작: I’m new to Seoul, and I’d really…
     2.07s  user  발화 끝
     3.61s  user  발화 시작: …like to see a movie tonight.
     4.95s  <ret> 발화 (turn2 첫 프레임)
     5.18s  agent 발화 시작: <ret> Seoul has several theaters, and CGV Yongsan I'Park Mal
     5.19s  ⚡SPAN 주입 [d'=1.52s / d_lead=9.83s]: Seoul has several movie theaters, including the CGV Yongsan I'Park Mal
     5.36s  user  발화 끝
    15.02s  agent 발화 끝
    15.07s  user  발화 시작: Oh, that sounds good! Can you check if there are any seats a
    19.65s  <ret> 발화 (turn4 첫 프레임)
    19.88s  agent 발화 시작: <ret> There are twenty-three seats available for "Inside Out
    19.89s  ⚡SPAN 주입 [d'=0.50s / d_lead=7.37s]: (tool result) There are 23 seats available for “Inside Out 2” at CGV Y
    19.98s  user  발화 끝
    27.25s  agent 발화 끝
    27.44s  user  발화 시작: Great! Could you book me one ticket, please?
    30.24s  <ret> 발화 (turn6 첫 프레임)
    30.40s  agent 발화 시작: <ret> Wonderful! Your ticket is confirmed for 7:30, confirma
    30.40s  ⚡SPAN 주입 [d'=1.52s / d_lead=8.11s]: (tool result) Your ticket for "Inside Out 2" at CGV Yongsan I'Park Mal
    30.58s  user  발화 끝
    38.51s  agent 발화 끝
