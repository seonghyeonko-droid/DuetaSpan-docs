# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Rowan",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
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

# EXAMINER(FDB-v2) 단계: S1 Hey Jal, I was just wondering who  | S2 Wow, I had no idea! I always assum | S3 Did you remember to take the trash | S4 Sorry about that, where was Van Ha

     0.00s  user  발화 시작: Hey Jal, I was just wondering who actually played the guitar
     6.85s  <ret> 발화 (turn1 첫 프레임)
     7.08s  agent 발화 시작: <ret> That’s a fantastic question, and a really memorable so
     7.23s  user  발화 끝
     8.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.47s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
    11.30s  user  발화 시작: Okay.
    11.94s  user  발화 끝
    17.89s  agent 발화 끝
    18.02s  user  발화 시작: Wow, I had no idea! I always assumed it was someone more clo
    24.41s  user  발화 시작: Did you remember to take the trash out?
    24.60s  user  발화 끝
    26.57s  user  발화 시작: Sorry about that, where was Van Halen when he recorded it? W
    26.76s  user  발화 끝
    31.19s  <ret> 발화 (turn6 첫 프레임)
    31.58s  agent 발화 시작: <ret> He was gaining quite a bit of recognition— By 1982, Ed
    31.76s  user  발화 끝
    32.55s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.67s]: [source: Rolling Stone] By 1982, Eddie Van Halen and Van Halen had rel
    43.60s  agent 발화 끝
