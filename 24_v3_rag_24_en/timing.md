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


     0.00s  user  발화 시작: I was wondering about the name du Plessis… it seems quite co
     4.19s  <ret> 발화 (turn1 첫 프레임)
     4.25s  user  발화 끝
     4.26s  agent 발화 시작: <ret> The name du Plessis originates from France, and specif
     5.39s  ⚡SPAN 주입 [d'=1.20s / d_lead=8.24s]: Du Plessis is a French surname, originating as a title denoting “of Pl
    10.38s  user  발화 시작: Mhm.
    11.01s  user  발화 끝
    12.45s  user  발화 시작: Oh, France! I always assumed it was… well, something else.
    12.50s  agent 발화 끝
    16.68s  <ret> 발화 (turn4 첫 프레임)
    17.07s  agent 발화 시작: <ret> It actually became particularly established in South A
    17.12s  user  발화 끝
    18.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.27s]: The name du Plessis originates from France, and specifically relates t
    26.34s  agent 발화 끝
    26.59s  user  발화 시작: Huguenots… that’s right, they fled religious persecution, di
    31.87s  user  발화 끝
    31.90s  agent 발화 시작: Yes, many did seek refuge elsewhere, and that movement certa
    40.94s  agent 발화 끝
