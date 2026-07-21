# v3_rags_30_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "Taylor",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "mid 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-25",
#       "category": "hobby",
#       "text": "User is into trail running."
#     },
#     {
#       "date": "2026-05-16",
#       "category": "trip",
#       "text": "User is planning a trip to Portugal in January."
#     },
#     {
#       "date": "2026-03-22",
#       "category": "savings",
#       "text": "User is saving for a trip to Europe next year."
#     },
#     {
#       "date": "2026-02-23",
#       "category": "skill",
#       "text": "User is getting fairly good at urban sketching."
#     },
#     {
#       "date": "2025-12-05",
#       "category": "music",
#       "text": "User likes listening to indie folk."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-25",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     },
#     {
#       "date": "2026-05-24",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     },
#     {
#       "date": "2026-03-28",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     },
#     {
#       "date": "2026-01-08",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Who sang the songs in the movie Selena?
     2.16s  <ret> 발화 (turn1 첫 프레임)
     2.35s  agent 발화 시작: <ret> That's a good question about the music! Selena herself
     2.49s  user  발화 끝
     2.97s  ⚡SPAN 주입 [d'=0.81s / d_lead=2.64s]: Selena Quintanilla-Pérez sang many of the songs in the 1997 film *Sele
     9.90s  agent 발화 끝
