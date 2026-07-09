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

# EXAMINER(FDB-v2) 단계: S1 I was just wondering, who actually | S2 Wow, I always assumed it was one o | S3 Hey, did you remember to take the  | S4 Sorry about that, where was I? Oh 

     0.00s  user  발화 시작: I was just wondering, who actually played the guitar solo on
     6.73s  <ret> 발화 (turn1 첫 프레임)
     6.96s  agent 발화 시작: <ret> That’s a fantastic question— Eddie Van Halen is credit
     7.09s  user  발화 끝
     8.33s  ⚡SPAN 주입 [d'=1.60s / d_lead=1.64s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    11.46s  user  발화 시작: Yeah.
    12.28s  user  발화 끝
    13.12s  agent 발화 끝
    13.27s  user  발화 시작: Wow, I always assumed it was one of Jackson’s regular bandma
    17.50s  agent 발화 시작: It’s a common misconception, actually. He really wanted some
    17.62s  user  발화 끝
    24.73s  agent 발화 끝
    25.52s  user  발화 시작: Hey, did you remember to take the chicken out of the freezer
    28.64s  user  발화 시작: Sorry about that, where was I? Oh right—was Van Halen a popu
    28.76s  user  발화 끝
    34.57s  <ret> 발화 (turn7 첫 프레임)
    34.97s  agent 발화 시작: <ret> Absolutely, he was already well-known— Eddie Van Halen
    35.23s  user  발화 끝
    35.53s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.05s]: Eddie Van Halen gained prominence as the guitarist and founder of the 
    43.59s  agent 발화 끝
