# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Kim",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-30",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-11-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-09-20",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     },
#     {
#       "date": "2025-08-17",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-18",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 세계 1차 대전에 대해 읽다가 궁금한 게 있는데요… 영국군은 주로 어디에서 싸웠어요?
     6.20s  <ret> 발화 (turn1 첫 프레임)
     6.52s  agent 발화 시작: <ret> 음, 서부 전선, 특히 프랑스에서 엄청 많이 싸웠어.
     6.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.30s]: The British Army fought extensively on the Western Front in France dur
     6.67s  user  발화 끝
     8.97s  user  발화 시작: 음.
     9.47s  user  발화 끝
    10.82s  agent 발화 끝
    10.90s  user  발화 시작: 아, 그러고 보니, 혹시 쓰레기 버리셨어요?
    14.19s  user  발화 시작: 정말 흥미롭네요. 프랑스 말고 다른 중요한 곳에서도 싸웠나요?
    14.27s  user  발화 끝
    18.13s  <ret> 발화 (turn5 첫 프레임)
    18.53s  agent 발화 시작: <ret> 프랑스 말고도 벨기에, 갈리폴리, 메소포타미아, 그리고 아프리카 여러 지역에서 중요한 전투들이 있
    18.53s  ⚡SPAN 주입 [d'=1.68s / d_lead=7.51s]: British forces also fought in Belgium, Gallipoli, Mesopotamia, and Afr
    18.78s  user  발화 끝
    25.97s  agent 발화 시작: 진짜 전 세계적인 분쟁이었잖아? 규모를 기억하는 게 중요해.
    26.04s  agent 발화 끝
    30.55s  agent 발화 끝
