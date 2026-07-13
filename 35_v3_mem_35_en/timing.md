# v3_mem_35_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "Amelia",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-15",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2026-05-30",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-03-22",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-12-24",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-29",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Amelia, I'm Thura! It's lovely to meet you.
     3.56s  user  발화 시작: Um, well, I’m planning a trip and could use some ideas.
     3.56s  agent 발화 끝
     7.52s  <ret> 발화 (turn2 첫 프레임)
     7.92s  agent 발화 시작: <ret> I see you’re planning a trip to Vietnam in May – that 
     7.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.54s]: [2026-06-15] User is planning a trip to Vietnam in May.
     7.92s  user  발화 끝
    13.46s  user  발화 시작: Okay.
    13.46s  agent 발화 끝
    13.78s  <ret> 발화 (turn4 첫 프레임)
    13.86s  agent 발화 시작: <ret> Cat Tien National Park is a protected area, known for 
    13.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.48s]: Cat Tien National Park is a protected area in Vietnam, known for its b
    13.86s  user  발화 끝
    25.35s  user  발화 시작: Oh.
    25.35s  agent 발화 끝
    25.74s  user  발화 시작: That sounds… really interesting. What's the weather like the
    25.74s  user  발화 끝
    29.86s  <ret> 발화 (turn7 첫 프레임)
    30.10s  agent 발화 시작: <ret> For Cat Tien National Park, Vietnam on May 28th, 2026,
    30.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.30s]: (tool result) Cat Tien National Park, Vietnam: May 28, 2026, 30.2°C, h
    30.10s  user  발화 끝
    40.39s  agent 발화 끝
