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


     0.00s  user  발화 시작: I was wondering about the name du Plessis… it sounds French,
     4.06s  <ret> 발화 (turn1 첫 프레임)
     4.14s  agent 발화 시작: <ret> The name du Plessis does have French origins, meaning 
     4.21s  user  발화 끝
     5.26s  ⚡SPAN 주입 [d'=1.20s / d_lead=7.23s]: [source: etymonline.com] “Du Plessis is a French surname literally mea
     9.45s  user  발화 시작: Mhm.
    10.08s  user  발화 끝
    11.31s  user  발화 시작: Oh, interesting! So it’s about a church then… is it a common
    11.37s  agent 발화 끝
    17.18s  <ret> 발화 (turn4 첫 프레임)
    17.43s  user  발화 끝
    17.57s  agent 발화 시작: <ret> It appears du Plessis is fairly common in South Africa
    19.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.16s]: [source: forebears.io] “Du Plessis is the 257th most common surname in
    27.73s  agent 발화 끝
    27.99s  user  발화 시작: That’s… a lot of people. Well, uh, my partner’s family is fr
    33.87s  user  발화 끝
    33.95s  agent 발화 시작: Family history can certainly explain a surname’s distributio
    41.41s  agent 발화 끝
