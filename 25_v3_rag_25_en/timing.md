# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "Mia",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-04",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-04-12",
#       "category": "home",
#       "text": "User's home address is 468 Elm Street."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2025-09-22",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-26",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-09-12",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-08-25",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m trying to remember a tennis pl | S2 Oh. Hmm. Okay, so not her then. | S3 Who was the Italian tennis player  | S4 Oh! That’s right, Mara Santangelo!

     0.00s  user  발화 시작: I’m trying to remember a tennis player… Italian, I think.
     3.47s  user  발화 끝
     3.59s  agent 발화 시작: It’s wonderful you’re recalling happy memories! Sometimes a 
     5.23s  user  발화 시작: Mhm.
     5.77s  user  발화 끝
     7.85s  agent 발화 끝
     7.88s  user  발화 시작: Yes, well, was it Chris Evert who was Italian?
    10.56s  <ret> 발화 (turn4 첫 프레임)
    10.64s  agent 발화 시작: <ret> Chris Evert is actually American, and considered one o
    10.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.46s]: Chris Evert is an American former professional tennis player and one o
    10.70s  user  발화 끝
    16.11s  agent 발화 끝
    16.37s  user  발화 시작: Oh. Hmm. Okay, so not her then.
    19.18s  user  발화 끝
    19.22s  agent 발화 시작: It’s perfectly alright to adjust our thinking as we learn mo
    22.36s  user  발화 시작: Yeah.
    22.67s  user  발화 끝
    23.22s  user  발화 시작: Who was the Italian tennis player then? I’m drawing a blank.
    23.71s  agent 발화 끝
    26.46s  agent 발화 시작: Let me see if I can find that for you—
    26.59s  user  발화 끝
    27.56s  user  발화 시작: …Was Mara Santangelo ever highly ranked?
    28.26s  agent 발화 끝
    29.63s  <ret> 발화 (turn11 첫 프레임)
    29.95s  agent 발화 시작: <ret> Mara Santangelo is the Italian former professional ten
    29.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.76s]: Mara Santangelo is an Italian former professional tennis player who re
    30.10s  user  발화 끝
    35.79s  user  발화 시작: Mhm.
    36.28s  user  발화 끝
    38.53s  user  발화 시작: Oh! That’s right, Mara Santangelo! Thank you.
    38.71s  agent 발화 끝
    42.05s  user  발화 끝
    42.36s  agent 발화 시작: You’re very welcome! It's lovely when those memories resurfa
    46.52s  agent 발화 끝
