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

# EXAMINER(FDB-v2) 단계: S1 I was just listening to Beat It, a | S2 Hey, did you take the trash out ye | S3 Sorry about that. So, Van Halen ju | S4 That’s so cool! [happy] I didn’t k

     0.00s  user  발화 시작: I was just listening to Beat It, and I was wondering who pla
     4.72s  <ret> 발화 (turn1 첫 프레임)
     4.96s  agent 발화 시작: <ret> That’s a really iconic sound. Eddie Van Halen played t
     5.09s  user  발화 끝
     6.56s  ⚡SPAN 주입 [d'=1.84s / d_lead=1.92s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
     7.46s  user  발화 시작: Okay.
     8.00s  user  발화 끝
    11.49s  agent 발화 끝
    11.61s  user  발화 시작: Wow, really? I always assumed it was someone in Jackson’s ba
    16.14s  user  발화 시작: Hey, did you take the trash out yet?
    16.33s  user  발화 끝
    18.30s  user  발화 시작: Sorry about that. So, Van Halen just… guest starred on that 
    18.49s  user  발화 끝
    23.60s  agent 발화 시작: It was a fairly unusual collaboration at the time, yes. He b
    23.77s  user  발화 끝
    29.72s  agent 발화 끝
    30.40s  user  발화 시작: That’s so cool! [happy] I didn’t know he did stuff like that
    34.84s  user  발화 끝
