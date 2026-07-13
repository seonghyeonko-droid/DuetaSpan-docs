# v3_rags_30_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "Quinn",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-05-26",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2026-04-15",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-02-23",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-01-14",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-01-11",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Who wrote the song “London Bridge is falling down”?
     2.92s  <ret> 발화 (turn1 첫 프레임)
     3.05s  ⚡SPAN 주입 [d'=0.56s / d_lead=6.91s]: The authorship of the nursery rhyme "London Bridge Is Falling Down" is
     3.11s  agent 발화 시작: <ret> The author of “London Bridge is falling down” is actua
     3.11s  user  발화 끝
    10.02s  agent 발화 끝
