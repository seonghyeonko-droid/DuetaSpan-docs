# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "Riley",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-14",
#       "category": "coffee",
#       "text": "User's usual coffee order is an iced americano."
#     },
#     {
#       "date": "2026-06-10",
#       "category": "dish",
#       "text": "User's go-to comfort dish is pad thai."
#     },
#     {
#       "date": "2026-05-23",
#       "category": "schedule",
#       "text": "User has a hybrid 3-days-in-office week."
#     },
#     {
#       "date": "2026-04-02",
#       "category": "home",
#       "text": "User's home address is 343 Pine Court."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "airline",
#       "text": "User usually flies with ANA."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "gym",
#       "text": "User has a gym membership near the station."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-13",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     },
#     {
#       "date": "2026-03-15",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was reading about old music publ | S2 That's interesting. I wonder if it | S3 True. I actually want to visit New | S4 Perfect for a walk. I'll start pla

     0.00s  user  발화 시작: I was reading about old music publishing and came across the
     6.73s  <ret> 발화 (turn1 첫 프레임)
     6.74s  agent 발화 시작: <ret> It was centered on West twenty-eighth Street in New Yo
     6.86s  user  발화 끝
     8.19s  ⚡SPAN 주입 [d'=1.46s / d_lead=4.77s]: Tin Pan Alley was centered on West 28th Street in New York City.
     9.07s  user  발화 시작: Yeah, totally.
    10.60s  user  발화 끝
    11.51s  agent 발화 끝
    12.63s  user  발화 시작: That's interesting. I wonder if it's still a musical hub tod
    16.56s  user  발화 끝
    16.60s  agent 발화 시작: [curious] It's a lovely thought. Things change so slowly, ye
    22.39s  agent 발화 끝
    22.40s  user  발화 시작: True. I actually want to visit New York soon. What's the wea
    28.00s  <ret> 발화 (turn6 첫 프레임)
    28.34s  agent 발화 시작: <ret> Right now, it is seventy-two degrees Fahrenheit and pa
    28.51s  user  발화 끝
    29.47s  ⚡SPAN 주입 [d'=1.47s / d_lead=6.02s]: (tool result) The current weather in New York City is 72 degrees Fahre
    34.36s  agent 발화 끝
    35.39s  user  발화 시작: Perfect for a walk. I'll start planning my trip.
    38.35s  user  발화 끝
    38.56s  agent 발화 시작: [happy] Take your time with it. There is a special kind of j
    43.70s  agent 발화 끝
