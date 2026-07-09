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

# EXAMINER(FDB-v2) 단계: S1 I was just wondering, who actually | S2 Hey, did you remember to take the  | S3 Sorry about that. So, Van Halen ju | S4 That’s incredible! Jackson went to

     0.00s  user  발화 시작: I was just wondering, who actually played the guitar solo on
     6.64s  <ret> 발화 (turn1 첫 프레임)
     6.88s  agent 발화 시작: <ret> That’s a great question, and a very famous solo. Eddie
     7.05s  user  발화 끝
     8.40s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.08s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
    10.03s  user  발화 시작: Okay.
    10.57s  user  발화 끝
    15.09s  agent 발화 끝
    15.15s  user  발화 시작: Wow, really? I always thought it was someone else. That's am
    20.01s  user  발화 시작: Hey, did you remember to take the trash out?
    20.16s  user  발화 끝
    22.83s  user  발화 시작: Sorry about that. So, Van Halen just… agreed to do it?
    23.06s  user  발화 끝
    26.41s  <ret> 발화 (turn6 첫 프레임)
    26.80s  agent 발화 시작: <ret> It’s a fascinating story, actually. He was initially h
    26.99s  user  발화 끝
    28.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.18s]: [source: Rolling Stone] Van Halen initially refused to play on “Beat I
    31.91s  agent 발화 시작: Michael Jackson personally visited Eddie Van Halen and persu
    31.99s  agent 발화 끝
    37.24s  agent 발화 끝
    37.28s  user  발화 시작: That’s incredible! Jackson went to *him*? I had no idea.
    42.12s  agent 발화 시작: It really highlights Jackson’s dedication to getting exactly
    42.28s  user  발화 끝
    51.11s  agent 발화 끝
