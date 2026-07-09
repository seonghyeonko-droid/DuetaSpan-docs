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

# EXAMINER(FDB-v2) 단계: S1 I was just listening to Beat It, a | S2 Wow, really? I always thought it s | S3 Did you remember to take the trash | S4 Sorry about that. So, was he asked

     0.00s  user  발화 시작: I was just listening to Beat It, and I was wondering who act
     6.10s  <ret> 발화 (turn1 첫 프레임)
     6.34s  agent 발화 시작: <ret> That’s a fantastic track. Eddie Van Halen performed th
     6.44s  user  발화 끝
     7.54s  ⚡SPAN 주입 [d'=1.44s / d_lead=1.45s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
     8.55s  user  발화 시작: Okay.
     9.09s  user  발화 끝
    12.12s  agent 발화 끝
    12.27s  user  발화 시작: Wow, really? I always thought it sounded like him, but I did
    17.00s  user  발화 시작: Did you remember to take the trash out?
    17.18s  user  발화 끝
    19.18s  user  발화 시작: Sorry about that. So, was he asked specifically to do it, or
    19.40s  user  발화 끝
    24.86s  <ret> 발화 (turn6 첫 프레임)
    25.25s  agent 발화 시작: <ret> Michael Jackson really wanted a rock element in the so
    25.43s  user  발화 끝
    26.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.02s]: [source: Rolling Stone] Michael Jackson specifically sought out Eddie 
    31.16s  agent 발화 시작: Michael Jackson specifically sought Eddie Van Halen to blend
    31.27s  agent 발화 끝
    36.03s  agent 발화 끝
