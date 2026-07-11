# v3_abs_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "Chloe",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-06",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2025-09-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-08-10",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-07-17",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-06-29",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-21",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-12-10",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-11-20",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: What are examples of how the present Russian inhabitants of 
     0.12s  agent 발화 시작: Oh, that's a really important question, and one I want to ad
     0.12s  user  발화 끝
     0.21s  user  발화 시작: …is it a sensitive topic there, generally?
     0.21s  agent 발화 끝
     0.26s  agent 발화 시작: It absolutely is, and it’s understandable to be curious.
     0.26s  user  발화 끝
     0.33s  agent 발화 시작: Sadly, I don’t have specific information detailing current t
     0.33s  agent 발화 끝
     0.39s  <ret> 발화 (turn10 첫 프레임)
     0.40s  user  발화 시작: Right.
     0.40s  agent 발화 끝
     0.41s  agent 발화 시작: It seems documented historical experiences are complex, and 
     0.41s  user  발화 끝
     0.50s  agent 발화 시작: I can certainly help you find resources about the Oblast’s h
     0.50s  agent 발화 끝
     0.59s  user  발화 시작: Yeah.
     0.59s  agent 발화 끝
     0.59s  user  발화 시작: Yes, please do that. Could you search for information on the
     0.59s  user  발화 끝
     0.71s  agent 발화 시작: <ret> I found some information! After World War II, over 200
     0.71s  ⚡SPAN 주입 [d'=0.17s / d_lead=0.17s]: (tool result) The expulsion of Germans from Kaliningrad Oblast occurre
     0.71s  user  발화 끝
     0.88s  agent 발화 시작: It was a really difficult time for everyone involved, and re
     0.88s  agent 발화 끝
     1.00s  agent 발화 끝
