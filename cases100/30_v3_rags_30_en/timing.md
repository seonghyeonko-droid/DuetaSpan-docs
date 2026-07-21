# v3_rags_30_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "Jack",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "skill",
#       "text": "User is quite experienced with salsa dancing."
#     },
#     {
#       "date": "2026-06-10",
#       "category": "car",
#       "text": "User drives a 2017 Honda Civic."
#     },
#     {
#       "date": "2026-05-25",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 24°C."
#     },
#     {
#       "date": "2026-05-09",
#       "category": "medication",
#       "text": "User takes medication for migraines."
#     },
#     {
#       "date": "2026-04-30",
#       "category": "partner",
#       "text": "User's partner is named Marco."
#     },
#     {
#       "date": "2025-12-22",
#       "category": "gym",
#       "text": "User has a gym membership near the station."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-23",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     },
#     {
#       "date": "2026-05-01",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     },
#     {
#       "date": "2026-03-31",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     },
#     {
#       "date": "2026-02-17",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: When was the last time the Minnesota Vikings won a game at L
     2.86s  agent 발화 시작: Yeah, yeah.
     3.95s  agent 발화 끝
     4.08s  <ret> 발화 (turn2 첫 프레임)
     4.32s  agent 발화 시작: <ret> It was December twenty-third, two thousand and sevente
     4.50s  user  발화 끝
     4.62s  ⚡SPAN 주입 [d'=0.55s / d_lead=11.36s]: The Minnesota Vikings last defeated the Green Bay Packers at Lambeau F
    15.68s  agent 발화 끝
