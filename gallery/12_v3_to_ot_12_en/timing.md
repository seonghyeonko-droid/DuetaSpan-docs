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

# EXAMINER(FDB-v2) 단계: S1 I was just listening to Beat It, a | S2 Did you send it to accounting yet? | S3 Sorry about that, where were we? O | S4 That’s too bad. It would have been

     0.00s  user  발화 시작: I was just listening to Beat It, and that guitar solo is inc
     4.70s  <ret> 발화 (turn1 첫 프레임)
     4.93s  agent 발화 시작: <ret> Eddie Van Halen played the guitar solo on Michael Jack
     5.14s  user  발화 끝
     6.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.25s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
     7.34s  user  발화 시작: Okay.
     7.88s  user  발화 끝
    11.18s  agent 발화 끝
    11.40s  user  발화 시작: Wow, I didn't know that! He's amazing. Hey, Mark, did you fi
    16.73s  user  발화 시작: Did you send it to accounting yet?
    16.91s  user  발화 끝
    18.70s  user  발화 시작: Sorry about that, where were we? Oh right, Eddie Van Halen. 
    18.85s  user  발화 끝
    24.68s  <ret> 발화 (turn6 첫 프레임)
    25.07s  agent 발화 시작: <ret> Beyond “Beat It,” Eddie Van Halen didn’t collaborate o
    25.28s  user  발화 끝
    26.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.06s]: [source: Rolling Stone] Van Halen did not collaborate with Michael Jac
    33.13s  agent 발화 끝
    33.80s  user  발화 시작: That’s too bad. It would have been cool to hear more of them
    39.22s  user  발화 끝
