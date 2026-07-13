# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Julian",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-07",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2026-06-05",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-08-29",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-07-14",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-14",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-09-21",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was reading about coffee, and it | S2 It really is. What about England?… | S3 A penny university, that’s a great | S4 …I’ll try that. Thank you, Junaen.

     0.00s  user  발화 시작: I was reading about coffee, and it made me wonder… where wer
    10.05s  <ret> 발화 (turn1 첫 프레임)
    10.26s  ⚡SPAN 주입 [d'=1.33s / d_lead=7.02s]: The first European coffee house opened in Venice in 1645, established 
    10.32s  agent 발화 시작: <ret> The first European coffee house opened in Venice, Ital
    10.32s  user  발화 끝
    17.34s  user  발화 시작: Oh, Venice! That makes sense, with its trading history. Do y
    17.34s  agent 발화 끝
    24.37s  agent 발화 시작: Venice was a major trading hub, so it naturally became a pla
    24.37s  user  발화 끝
    34.69s  user  발화 시작: It really is. What about England?…
    34.69s  agent 발화 끝
    37.17s  user  발화 시작: …When did coffee houses become popular there?
    37.17s  user  발화 끝
    39.96s  <ret> 발화 (turn6 첫 프레임)
    40.06s  agent 발화 시작: <ret> Well, coffee houses opened in England in the mid-seven
    40.06s  user  발화 끝
    40.41s  ⚡SPAN 주입 [d'=0.70s / d_lead=10.32s]: Coffee houses opened in England in the mid-17th century, becoming part
    50.38s  user  발화 시작: Mm-hmm.
    50.38s  agent 발화 끝
    50.80s  agent 발화 시작: They were called "penny universities" because the price of a
    50.80s  user  발화 끝
    61.53s  user  발화 시작: Yeah, yeah.
    61.53s  agent 발화 끝
    62.36s  user  발화 시작: A penny university, that’s a great name! I’m feeling a littl
    62.36s  user  발화 끝
    71.44s  agent 발화 시작: When feeling overwhelmed, try a simple breathing exercise. C
    71.44s  user  발화 끝
    83.42s  user  발화 시작: That sounds really helpful…
    83.42s  agent 발화 끝
    85.07s  user  발화 시작: …I’ll try that. Thank you, Junaen.
    85.07s  user  발화 끝
    87.55s  agent 발화 시작: You’re very welcome. Remember, even a few moments of mindful
    87.55s  user  발화 끝
    98.70s  agent 발화 끝
