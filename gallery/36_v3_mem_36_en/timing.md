# v3_mem_36_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "Chloe",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-10",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-12-18",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-10-25",
#       "category": "home",
#       "text": "User's home address is 619 Cedar Lane."
#     },
#     {
#       "date": "2025-10-10",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in March."
#     },
#     {
#       "date": "2025-07-29",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-06-17",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-11",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-08-23",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Um, I was wondering if you remembe | S2 Welll… I’m thinking of hiking, may | S3 Right! I think I need to upgrade a | S4 Good to know you remember that! Th

     0.00s  agent 발화 시작: Hi Chloe, I'm Klis.
     0.00s  <ret> 발화 (turn2 첫 프레임)
     0.02s  user  발화 시작: Um, I was wondering if you remembered anything about my trip
     0.02s  agent 발화 끝
     0.07s  agent 발화 시작: <ret> I do! You’re planning a trip to New Zealand in March, 
     0.07s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: [2025-10-10] User is planning a trip to New Zealand in March.
     0.07s  user  발화 끝
     0.13s  user  발화 시작: Mhm.
     0.13s  agent 발화 끝
     0.14s  user  발화 시작: That’s right! I’m trying to get a better idea of things to d
     0.14s  user  발화 끝
     0.20s  agent 발화 시작: New Zealand offers incredible scenery and activities. What k
     0.20s  user  발화 끝
     0.28s  user  발화 시작: Welll… I’m thinking of hiking, maybe some wildlife spotting.
     0.28s  agent 발화 끝
     0.28s  <ret> 발화 (turn11 첫 프레임)
     0.32s  agent 발화 시작: Hiking and wildlife spotting are fantastic choices! New Zeal
     0.32s  user  발화 끝
     0.37s  user  발화 시작: Yeah.
     0.37s  agent 발화 끝
     0.38s  agent 발화 시작: It really is. The Department of Conservation manages many in
     0.38s  user  발화 끝
     0.46s  user  발화 시작: That sounds great. Do you remember what I asked about last y
     0.46s  agent 발화 끝
     0.52s  agent 발화 시작: <ret> Yes, I recall you were setting up a home network and a
     0.52s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: [2026-02-11] Past chat — Setting up a home network: asked about mesh r
     0.52s  user  발화 끝
     0.61s  user  발화 시작: Right! I think I need to upgrade again. It’s still spotty up
     0.61s  agent 발화 끝
     0.64s  <ret> 발화 (turn16 첫 프레임)
     0.67s  agent 발화 시작: It can be frustrating when the signal isn't consistent. Perh
     0.67s  user  발화 끝
     0.75s  user  발화 시작: Yeah.
     0.75s  agent 발화 끝
     0.75s  user  발화 시작: Maybe. I also need to remember I'm gluten-free when I travel
     0.75s  user  발화 끝
     0.80s  agent 발화 시작: <ret> I have a note that you are gluten-free, which is impor
     0.80s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: [2026-01-10] User is gluten-free.
     0.80s  user  발화 끝
     0.89s  user  발화 시작: Mhm.
     0.89s  agent 발화 끝
     0.89s  user  발화 시작: Good to know you remember that! Thanks, Klis.
     0.89s  user  발화 끝
     0.93s  agent 발화 시작: You’re very welcome, Chloe. It's all part of helping you hav
     0.93s  user  발화 끝
     1.00s  agent 발화 끝
