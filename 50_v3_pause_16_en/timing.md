# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Charlie",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-06",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-04-30",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-12-27",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-12-12",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-10",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m trying to remember how many ep | S2 …And are there any… | S3 …good family movies out now? | S4 Oh, Spider-Man sounds fun! Can we 

     0.00s  user  발화 시작: I’m trying to remember how many episodes…
     2.74s  <ret> 발화 (turn1 첫 프레임)
     3.05s  agent 발화 시작: <ret> There are thirteen episodes in the original series’ fi
     3.05s  user  발화 끝
     4.05s  ⚡SPAN 주입 [d'=1.31s / d_lead=9.15s]: The fifth season of the original series contains thirteen episodes.
    12.20s  user  발화 시작: Thirteen, right.…
    12.20s  agent 발화 끝
    13.07s  user  발화 시작: …And are there any…
    13.07s  user  발화 끝
    14.81s  user  발화 시작: …good family movies out now?
    14.81s  user  발화 끝
    16.99s  agent 발화 시작: Mm-hmm.
    16.99s  user  발화 끝
    17.17s  <ret> 발화 (turn6 첫 프레임)
    17.43s  agent 발화 시작: <ret> [happy] ‘Elemental’ and ‘Spider-Man: Across the Spider
    17.43s  agent 발화 끝
    17.63s  ⚡SPAN 주입 [d'=0.46s / d_lead=8.71s]: (tool result) Showing: 'Elemental' (2023) - PG - 1h 49m. 'Spider-Man: 
    26.14s  user  발화 시작: Oh, Spider-Man sounds fun! Can we get tickets for that?
    26.14s  agent 발화 끝
    30.49s  <ret> 발화 (turn8 첫 프레임)
    30.50s  agent 발화 시작: <ret> I’ve booked four tickets for ‘Spider-Man: Across the S
    30.50s  user  발화 끝
    31.33s  ⚡SPAN 주입 [d'=0.85s / d_lead=12.63s]: (tool result) Confirmed: 4 tickets for 'Spider-Man: Across the Spider-
    43.13s  agent 발화 끝
