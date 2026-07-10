# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "Ada",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-20",
#       "category": "home",
#       "text": "User's home address is 209 Cedar Lane."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-08-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-07-23",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-30",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-08-25",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-10",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I was wondering about the origin of the surname du Plessis. 
     5.68s  <ret> 발화 (turn1 첫 프레임)
     5.75s  agent 발화 시작: <ret> The name du Plessis originates from France, meaning “o
     5.79s  user  발화 끝
     6.88s  ⚡SPAN 주입 [d'=1.20s / d_lead=8.34s]: Du Plessis is a French surname meaning “of the manor.”
    11.93s  user  발화 시작: Mhm.
    12.47s  user  발화 끝
    14.05s  user  발화 시작: Oh, that's interesting! Is it still common in France today?
    14.09s  agent 발화 끝
    18.08s  <ret> 발화 (turn4 첫 프레임)
    18.48s  agent 발화 시작: <ret> Yes, it is. Du Plessis is currently the eighty-seventh
    18.54s  user  발화 끝
    20.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.26s]: Du Plessis is the eighty-seventh most common surname in France.
    24.74s  agent 발화 끝
    25.07s  user  발화 시작: Welll… my grandmother was Afrikaans. Does it have a history 
    29.88s  <ret> 발화 (turn6 첫 프레임)
    30.26s  agent 발화 시작: <ret> It does, actually. The surname du Plessis is quite com
    30.40s  user  발화 끝
    31.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.77s]: The surname du Plessis is common among Afrikaans-speaking South Africa
    39.02s  agent 발화 끝
