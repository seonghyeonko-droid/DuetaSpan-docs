# v3_mem_36_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "Ada",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-02",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-08-02",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-06-20",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2025-06-19",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-05",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-08-15",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-12",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Ada, I'm Oruen. It's lovely to connect with you today. Ho
     5.14s  agent 발화 끝
     6.25s  user  발화 시작: Um, a bit lost, to be honest. It's been a rough few months.
     9.34s  agent 발화 시작: It's perfectly alright to feel lost after a difficult time, 
     9.48s  user  발화 끝
    16.07s  user  발화 시작: Yeah, well… I was just remembering my trip to Switzerland.
    16.10s  agent 발화 끝
    19.21s  <ret> 발화 (turn4 첫 프레임)
    19.37s  agent 발화 시작: <ret> You're planning a trip to Switzerland this December, w
    19.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.66s]: [2025-06-20] User is planning a trip to Switzerland in December.
    19.58s  user  발화 끝
    23.28s  user  발화 시작: Mm-hmm.
    23.73s  user  발화 끝
    25.01s  agent 발화 시작: Perhaps focusing on that trip can give you something hopeful
    25.02s  agent 발화 끝
    28.65s  user  발화 시작: Right.
    29.09s  user  발화 끝
    32.21s  user  발화 시작: I was thinking about what to pack. It'll be cold, I guess?
    32.23s  agent 발화 끝
    35.65s  <ret> 발화 (turn9 첫 프레임)
    35.89s  agent 발화 시작: <ret> The weather in Switzerland is currently 5 degrees Cels
    35.89s  ⚡SPAN 주입 [d'=1.04s / d_lead=6.48s]: (tool result) Weather in Switzerland: 5.0°C, humidity 85%, wind 7.2 km
    35.90s  user  발화 끝
    42.25s  agent 발화 시작: It’s a good idea to pack warm layers for December. It’s alri
    42.37s  agent 발화 끝
    48.50s  agent 발화 끝
