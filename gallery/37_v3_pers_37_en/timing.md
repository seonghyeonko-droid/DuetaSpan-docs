# v3_pers_37_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "Stella",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-04-13",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-11-16",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-10-08",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Guten Tag, Stella. I am Orunara, and I’m here to offer suppo
     7.49s  user  발화 시작: But honestly, I’m just feeling overwhelmed with everything r
     7.49s  agent 발화 끝
    11.05s  agent 발화 시작: It’s completely understandable to feel overwhelmed, Stella. 
    11.05s  user  발화 끝
    17.47s  user  발화 시작: Well, my daughter, Lena, is starting kindergarten soon, and 
    17.47s  agent 발화 끝
    23.53s  agent 발화 시작: It's natural to worry when your little one takes such a big 
    23.53s  user  발화 끝
    33.52s  agent 발화 끝
