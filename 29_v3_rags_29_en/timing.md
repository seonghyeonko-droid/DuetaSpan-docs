# v3_rags_29_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "Paul",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-16",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in October."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "home",
#       "text": "User's home address is 342 Pine Court."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-09-11",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-07-22",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-05-27",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-08-09",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: In the Outlander books, who does Claire eventually marry?
     3.70s  <ret> 발화 (turn1 첫 프레임)
     4.02s  agent 발화 시작: <ret> Well, Claire Fraser finds her lasting happiness with J
     4.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.38s]: Claire Fraser ultimately marries Jamie Fraser throughout the Outlander
     4.02s  user  발화 끝
    13.40s  agent 발화 끝
