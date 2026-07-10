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

# EXAMINER(FDB-v2) 단계: S1 Hey, uh, who did the guitar solo o | S2 Oh, seriously? That’s cool. | S3 Wow, I didn’t know that! Did he wr | S4 That’s amazing. I'll have to liste

     0.00s  user  발화 시작: Hey, uh, who did the guitar solo on Michael Jackson’s “Beat 
     4.95s  <ret> 발화 (turn1 첫 프레임)
     5.18s  agent 발화 시작: <ret> Eddie Van Halen performed the guitar solo on “Beat It”
     5.33s  user  발화 끝
     6.88s  user  발화 시작: Okay.
     6.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.48s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s song "B
     7.69s  user  발화 끝
     9.56s  user  발화 시작: Oh, seriously? That’s cool.
     9.65s  agent 발화 끝
    11.98s  user  발화 시작: Wow, I didn’t know that! Did he write it too, or just play i
    12.09s  user  발화 끝
    15.80s  <ret> 발화 (turn5 첫 프레임)
    16.18s  agent 발화 시작: <ret> Eddie Van Halen both wrote and performed that solo. It
    16.28s  user  발화 끝
    17.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.30s]: Eddie Van Halen wrote and performed the guitar solo for "Beat It".
    22.48s  agent 발화 끝
    23.31s  user  발화 시작: That’s amazing. I'll have to listen to it again now, knowing
    27.47s  user  발화 끝
