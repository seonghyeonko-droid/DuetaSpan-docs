# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Jamie",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-03",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2026-05-10",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "home",
#       "text": "User's home address is 361 Oak Avenue."
#     },
#     {
#       "date": "2025-05-29",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-10-18",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-05-28",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Hey, who did Permian High play in *Friday Night Lights*? I a
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.12s  agent 발화 시작: <ret> Permian High actually faced the Dallas Carter Cowboys 
     0.12s  ⚡SPAN 주입 [d'=0.25s / d_lead=0.25s]: Permian High School played against the Dallas Carter Cowboys in the 19
     0.12s  user  발화 끝
     0.37s  user  발화 시작: Dallas Carter, huh? That sounds…intense. What's the weather 
     0.37s  agent 발화 끝
     0.41s  <ret> 발화 (turn3 첫 프레임)
     0.49s  agent 발화 시작: <ret> It’s 29.4°C in Dallas right now, with 68% humidity and
     0.49s  ⚡SPAN 주입 [d'=0.20s / d_lead=0.20s]: (tool result) Current conditions in Dallas, Texas are 29.4°C, humidity
     0.49s  user  발화 끝
     0.69s  user  발화 시작: Uh-huh.
     0.69s  agent 발화 끝
     0.70s  user  발화 시작: Wow, hot! I’m thinking of visiting my sister, she lives near
     0.70s  user  발화 끝
     0.81s  agent 발화 시작: That’s wonderful! Connecting with loved ones is so important
     0.81s  user  발화 끝
     1.00s  agent 발화 끝
