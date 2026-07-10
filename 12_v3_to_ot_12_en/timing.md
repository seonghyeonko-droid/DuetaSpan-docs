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

# EXAMINER(FDB-v2) 단계: S1 Do you know who played the guitar  | S2 Hey, did you take the recycling ou | S3 Sorry, where were we? Oh right, gu | S4 Definitely. It’s amazing how he bl

     0.00s  user  발화 시작: Do you know who played the guitar solo on Michael Jackson's 
     4.60s  <ret> 발화 (turn1 첫 프레임)
     4.83s  agent 발화 시작: <ret> That was Eddie Van Halen, actually. He brought a reall
     5.05s  user  발화 끝
     6.39s  user  발화 시작: Okay.
     6.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.07s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
     7.03s  user  발화 끝
     8.86s  user  발화 시작: Wow, I always forget it wasn't a session musician.
     8.90s  agent 발화 끝
    12.67s  agent 발화 시작: It’s easy to overlook individual contributions in a song lik
    12.70s  user  발화 끝
    17.59s  agent 발화 끝
    18.98s  user  발화 시작: Hey, did you take the recycling out?
    20.83s  user  발화 시작: Sorry, where were we? Oh right, guitarists.
    20.91s  user  발화 끝
    24.66s  user  발화 끝
    24.73s  agent 발화 시작: We were talking about Eddie Van Halen and his incredible sol
    30.27s  user  발화 시작: Definitely. It’s amazing how he blended rock with pop so sea
    30.37s  agent 발화 끝
    35.54s  user  발화 끝
    35.91s  agent 발화 시작: It was a really innovative collaboration, and a defining mom
    44.11s  agent 발화 끝
