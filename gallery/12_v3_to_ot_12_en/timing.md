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

# EXAMINER(FDB-v2) 단계: S1 I was just listening to Beat It, a | S2 Wow, Eddie Van Halen? I didn't rea | S3 Hey, did you take out the trash ye | S4 Sorry about that. Back to the musi

     0.00s  user  발화 시작: I was just listening to Beat It, and that guitar solo is inc
     5.46s  <ret> 발화 (turn1 첫 프레임)
     5.69s  agent 발화 시작: <ret> That iconic guitar solo on “Beat It” was played by… Ed
     5.83s  user  발화 끝
     7.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.59s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
     8.21s  user  발화 시작: Okay.
     8.84s  user  발화 끝
    12.12s  user  발화 시작: Wow, Eddie Van Halen? I didn't realize he played on a Michae
    12.27s  agent 발화 끝
    18.36s  user  발화 시작: Hey, did you take out the trash yet?
    18.46s  user  발화 끝
    26.28s  user  발화 시작: Sorry about that. Back to the music—was that a one-time coll
    26.33s  user  발화 끝
    37.77s  agent 발화 시작: That was largely a one-time collaboration, though it was a v
    37.86s  user  발화 끝
    45.27s  agent 발화 끝
