# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Nora",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "mid 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-21",
#       "category": "dislike",
#       "text": "User can't stand cilantro."
#     },
#     {
#       "date": "2026-05-18",
#       "category": "coffee",
#       "text": "User's usual coffee order is a flat white."
#     },
#     {
#       "date": "2026-04-25",
#       "category": "car",
#       "text": "User drives a 2021 Tesla Model 3."
#     },
#     {
#       "date": "2026-04-08",
#       "category": "wake",
#       "text": "User usually wakes up at 5:30am for a run."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "trip",
#       "text": "User is planning a trip to the Scottish Highlands in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-21",
#       "title": "Selling a used bike",
#       "bullets": [
#         "a 3-year-old road bike",
#         "asking around 400k won"
#       ]
#     },
#     {
#       "date": "2026-03-07",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: What is the location name at one hundred thirteen point two 
     5.80s  user  발화 시작: …twenty three point one two nine one?
     5.80s  user  발화 끝
     8.63s  <ret> 발화 (turn2 첫 프레임)
     8.70s  agent 발화 시작: <ret> Give me a moment while I check that location for you.
     8.70s  user  발화 끝
     9.50s  ⚡SPAN 주입 [d'=0.86s / d_lead=4.56s]: (no information found)
    13.26s  user  발화 시작: Okay, thank you. I’ve been feeling so overwhelmed lately.
    13.26s  agent 발화 끝
    16.73s  <ret> 발화 (turn4 첫 프레임)
    16.99s  agent 발화 시작: <ret> Burnout, as defined by the World Health Organization, 
    16.99s  user  발화 끝
    18.23s  ⚡SPAN 주입 [d'=1.50s / d_lead=12.43s]: The World Health Organization defines burnout as a syndrome conceptual
    28.50s  ⚡지연 SPAN 주입(선제발표 직전): The coordinates 113.2645, 23.1291 correspond to Guangzhou, Guangdong P
    29.42s  agent 발화 시작: <ret> I just located that coordinate. Those coordinates pinp
    29.42s  agent 발화 끝
    39.37s  agent 발화 끝
