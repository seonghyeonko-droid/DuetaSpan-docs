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
#       "date": "2026-07-12",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-06-09",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-18",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-03-05",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just wondering, who actually | S2 Wow, Eddie Van Halen? I always ass | S3 Hey, did you take the trash out ye | S4 Sorry about that. So, was it a dif

     0.00s  user  발화 시작: I was just wondering, who actually played the guitar solo on
     7.23s  <ret> 발화 (turn1 첫 프레임)
     7.47s  agent 발화 시작: <ret> That’s a great question, and it’s a bit of a story! Ed
     7.60s  user  발화 끝
     9.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.47s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
    10.64s  user  발화 시작: Okay.
    11.27s  user  발화 끝
    15.67s  agent 발화 끝
    15.79s  user  발화 시작: Wow, Eddie Van Halen? I always assumed it was someone more c
    21.73s  user  발화 시작: Hey, did you take the trash out yet?
    21.91s  user  발화 끝
    23.77s  user  발화 시작: Sorry about that. So, was it a difficult collaboration getti
    23.99s  user  발화 끝
    28.13s  <ret> 발화 (turn6 첫 프레임)
    28.53s  agent 발화 시작: <ret> It certainly wasn’t a typical arrangement, and require
    28.72s  user  발화 끝
    29.97s  ⚡SPAN 주입 [d'=1.84s / d_lead=4.29s]: [source: Rolling Stone] Quincy Jones had to convince Van Halen to cont
    32.71s  agent 발화 시작: Quincy Jones persuaded Eddie Van Halen to play on the song, 
    32.83s  agent 발화 끝
    38.78s  agent 발화 끝
