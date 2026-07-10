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

# EXAMINER(FDB-v2) 단계: S1 Hey, uh, who did the guitar solo o | S2 Hey, did you take the trash out? | S3 …Anyways, was Van Halen even asked | S4 That’s interesting! I didn't know 

     0.00s  user  발화 시작: Hey, uh, who did the guitar solo on Michael Jackson’s “Beat 
     4.99s  <ret> 발화 (turn1 첫 프레임)
     5.22s  agent 발화 시작: <ret> The guitar solo on Michael Jackson’s “Beat It” was pla
     5.42s  user  발화 끝
     6.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.85s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
     7.85s  user  발화 시작: Okay.
     8.67s  user  발화 끝
    11.93s  user  발화 시작: Wow, really? I thought it was someone else. My friend always
    12.07s  agent 발화 끝
    16.73s  user  발화 시작: Hey, did you take the trash out?
    16.84s  user  발화 끝
    18.48s  user  발화 시작: …Anyways, was Van Halen even asked to do it, or did Michael 
    18.57s  user  발화 끝
    22.93s  <ret> 발화 (turn6 첫 프레임)
    23.29s  agent 발화 시작: <ret> Eddie Van Halen was actually a bit unsure about joinin
    23.47s  user  발화 끝
    24.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.42s]: [source: Rolling Stone] Eddie Van Halen was initially hesitant to play
    32.70s  agent 발화 끝
    32.80s  user  발화 시작: That’s interesting! I didn't know he was hesitant. Thanks, J
    37.06s  user  발화 끝
    37.40s  agent 발화 시작: You’re very welcome. Sometimes stepping outside your comfort
    42.58s  agent 발화 끝
