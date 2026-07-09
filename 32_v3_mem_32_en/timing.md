# v3_mem_32_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "Manon",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-25",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2026-06-14",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-12",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-20",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Oh, that sounds… good. I was actua | S2 I’m going to Kyoto. In March. | S3 Yes, still working on it. I rememb | S4 Exactly. I— I mean, can you check 

     0.00s  agent 발화 시작: Hi Manon, I’m Thunalo. It’s lovely to connect with you. I’m 
     7.08s  user  발화 시작: Yeah.
     7.67s  user  발화 끝
     9.11s  user  발화 시작: Oh, that sounds… good. I was actually thinking about a trip 
     9.22s  agent 발화 끝
    14.39s  user  발화 끝
    14.40s  agent 발화 시작: A trip sounds wonderful! Do you have a destination in mind, 
    20.61s  agent 발화 끝
    21.95s  user  발화 시작: I’m going to Kyoto. In March.
    23.95s  <ret> 발화 (turn5 첫 프레임)
    24.34s  agent 발화 시작: <ret> That’s a beautiful place. You mentioned Kyoto in March
    24.34s  user  발화 끝
    25.07s  ⚡SPAN 주입 [d'=1.12s / d_lead=1.54s]: [2026-07-25] User is planning a trip to Kyoto in March.
    28.94s  user  발화 시작: Mm-hmm.
    29.52s  user  발화 끝
    30.55s  user  발화 시작: Yes, still working on it. I remember we talked about my dent
    30.88s  agent 발화 끝
    37.66s  <ret> 발화 (turn8 첫 프레임)
    37.69s  user  발화 끝
    37.74s  agent 발화 시작: <ret> Ah yes, I recall that. You’d like to reschedule your a
    38.16s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.63s]: [2026-07-12] Past chat — Booked a dentist appointment: asked for an ea
    45.36s  user  발화 시작: Exactly. I— I mean, can you check availability for me?
    45.57s  agent 발화 끝
    49.06s  user  발화 끝
