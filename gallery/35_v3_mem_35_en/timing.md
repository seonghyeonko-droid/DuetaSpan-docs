# v3_mem_35_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "Maya",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-23",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     },
#     {
#       "date": "2026-04-22",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-11-14",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-08-27",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-07-22",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-06-23",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-07",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-12-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-11-22",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Yes, I am. I'm planning a trip to  | S2 Hmm, I haven’t. Tell me more. | S3 That sounds… really good. What abo | S4 Perfect! That sounds like exactly 

     0.00s  agent 발화 시작: Hi Maya, I'm Kami. It's lovely to connect with you today. I 
     5.74s  agent 발화 끝
     6.58s  user  발화 시작: Yes, I am. I'm planning a trip to Iceland in October, and I'
    13.10s  <ret> 발화 (turn2 첫 프레임)
    13.50s  agent 발화 시작: <ret> You mentioned in April that you're planning a trip to 
    13.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.23s]: [2026-04-23] User is planning a trip to Iceland in October.
    13.57s  user  발화 끝
    16.53s  user  발화 시작: Okay.
    17.07s  user  발화 끝
    20.52s  agent 발화 시작: I can definitely help brainstorm some ideas. What kind of ex
    20.73s  agent 발화 끝
    26.63s  agent 발화 끝
    26.67s  user  발화 시작: Well, I love nature, of course. And I'd really like to see t
    32.18s  agent 발화 시작: The Northern Lights in Iceland are breathtaking. Have you co
    32.32s  user  발화 끝
    40.15s  agent 발화 끝
    40.61s  user  발화 시작: Hmm, I haven’t. Tell me more.
    43.66s  user  발화 끝
    43.94s  agent 발화 시작: It has volcanoes, lava fields, charming fishing villages, an
    51.96s  agent 발화 끝
    52.37s  user  발화 시작: That sounds… really good. What about accommodations there?
    56.64s  <ret> 발화 (turn10 첫 프레임)
    56.88s  agent 발화 시작: <ret> Hotel Ranga is available from October 15th to 22nd for
    56.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.55s]: (tool result) Hotel Ranga is available from October 15 to October 22, 
    57.05s  user  발화 끝
    66.43s  agent 발화 끝
    67.56s  user  발화 시작: That price is reasonable. Is it near anything interesting?
    71.44s  agent 발화 시작: Hotel Ranga is close to the Ranga River, known for Northern 
    71.49s  user  발화 끝
    79.69s  agent 발화 끝
    80.06s  user  발화 시작: Perfect! That sounds like exactly what I'm looking for. I th
    85.66s  user  발화 끝
    85.69s  agent 발화 시작: Wonderful! I'm so glad I could help you find something that 
    92.54s  agent 발화 끝
