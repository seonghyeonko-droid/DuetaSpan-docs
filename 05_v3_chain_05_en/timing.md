# v3_chain_05_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "Emil",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-15",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-10-25",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2025-10-18",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2025-06-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-24",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-02-02",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-10-02",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What's the biking route from Pekin | S2 Uh, and what’s the weather like th | S3 That sounds…nice. Can you find me  | S4 …Italian?

     0.00s  user  발화 시작: What's the biking route from Peking University to the Summer
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.08s  agent 발화 시작: <ret> The biking route is eleven point two kilometers, takin
     0.08s  ⚡SPAN 주입 [d'=0.18s / d_lead=0.18s]: (tool result) {"distance": 11.2, "duration": 45.3, "route": "https://m
     0.08s  user  발화 끝
     0.26s  <ret> 발화 (turn4 첫 프레임)
     0.26s  user  발화 시작: Yeah.
     0.26s  agent 발화 끝
     0.27s  user  발화 시작: Uh, and what’s the weather like there right now?
     0.27s  user  발화 끝
     0.33s  <ret> 발화 (turn9 첫 프레임)
     0.34s  agent 발화 시작: <ret> It’s currently thirty-two point five degrees Celsius a
     0.34s  ⚡SPAN 주입 [d'=0.21s / d_lead=0.21s]: (tool result) {"temperature": 32.5, "humidity": 68, "wind": 7.2, "cond
     0.34s  user  발화 끝
     0.55s  user  발화 시작: Yeah.
     0.55s  agent 발화 끝
     0.56s  user  발화 시작: That sounds…nice. Can you find me some restaurants near the 
     0.56s  user  발화 끝
     0.65s  agent 발화 시작: Finding restaurants is something I can definitely help with—
     0.65s  user  발화 끝
     0.72s  user  발화 시작: …Italian?
     0.72s  agent 발화 끝
     0.73s  agent 발화 시작: <ret> There's Pizza Saporita, rated four point five stars wi
     0.73s  ⚡SPAN 주입 [d'=0.27s / d_lead=0.27s]: (tool result) [{"name": "Pizza Saporita", "rating": 4.5, "price": "¥15
     0.73s  user  발화 끝
     1.00s  agent 발화 끝
