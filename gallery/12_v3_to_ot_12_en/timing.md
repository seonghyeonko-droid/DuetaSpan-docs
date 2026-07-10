# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Rowan",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-11",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-01-09",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-09-07",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2025-07-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just listening to Beat It, a | S2 Wow, Eddie Van Halen? That’s amazi | S3 Did you get the milk? | S4 Sorry about that. Back to the musi

     0.00s  user  발화 시작: I was just listening to Beat It, and that guitar solo is inc
     5.13s  <ret> 발화 (turn1 첫 프레임)
     5.36s  agent 발화 시작: <ret> That fantastic guitar solo on “Beat It” was played by…
     5.46s  user  발화 끝
     7.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.12s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
     8.51s  user  발화 시작: Okay.
     9.14s  user  발화 끝
    13.38s  user  발화 시작: Wow, Eddie Van Halen? That’s amazing. He’s so talented. Hey,
    13.47s  agent 발화 끝
    20.02s  user  발화 시작: Did you get the milk?
    20.09s  user  발화 끝
    21.19s  user  발화 시작: Sorry about that. Back to the music—was that a one-time coll
    21.30s  user  발화 끝
    28.67s  <ret> 발화 (turn6 첫 프레임)
    29.06s  agent 발화 시작: <ret> That collaboration was a single, unique event—Eddie Va
    29.20s  user  발화 끝
    30.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.58s]: [source: Rolling Stone] Eddie Van Halen and Michael Jackson never coll
    41.63s  agent 발화 끝
