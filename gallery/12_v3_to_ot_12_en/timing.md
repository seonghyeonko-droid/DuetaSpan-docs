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

# EXAMINER(FDB-v2) 단계: S1 Hey Jal, do you know who played th | S2 …go on, Jal. I’m listening. | S3 Wow, that’s rough. He didn't get p | S4 That's true. Thanks, Jal. I feel a

     0.00s  user  발화 시작: Hey Jal, do you know who played the guitar solo on Michael J
     4.67s  <ret> 발화 (turn1 첫 프레임)
     4.90s  agent 발화 시작: <ret> The guitar solo on “Beat It” was played by… Eddie Van 
     5.09s  user  발화 끝
     6.18s  user  발화 시작: Okay.
     6.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.38s]: Eddie Van Halen played the guitar solo on Michael Jackson’s “Beat It”.
     6.80s  user  발화 끝
     8.21s  user  발화 시작: Oh, remind me to pick up milk later.
     8.28s  agent 발화 끝
    10.59s  user  발화 시작: …go on, Jal. I’m listening.
    10.61s  user  발화 끝
    12.36s  <ret> 발화 (turn5 첫 프레임)
    12.75s  agent 발화 시작: <ret> Eddie Van Halen performed that solo, though he didn’t 
    12.85s  user  발화 끝
    14.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.40s]: [Eddie Van Halen performed the iconic guitar solo on Michael Jackson's
    19.14s  agent 발화 끝
    20.17s  user  발화 시작: Wow, that’s rough. He didn't get paid for that?
    23.22s  user  발화 끝
    23.39s  agent 발화 시작: It’s unfortunately not uncommon for artists to face those ki
    31.40s  agent 발화 끝
    31.97s  user  발화 시작: That's true. Thanks, Jal. I feel a bit calmer knowing the st
    36.27s  user  발화 끝
    36.45s  agent 발화 시작: You’re very welcome. Sometimes just understanding the backgr
    42.01s  agent 발화 끝
