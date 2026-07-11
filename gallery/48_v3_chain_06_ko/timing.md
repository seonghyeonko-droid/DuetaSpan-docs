# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "유재",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-12",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-11-25",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-07-30",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-17",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-14",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 지금 제 위치 근처에 맛집 좀 찾아줘. 반경은 삼킬로미터 이내 | S2 이탈리아 식당 중에 제일 평점 좋은 곳은 어디야? | S3 … 혹시 거기 파스타 맛있는 거 있어? | S4 그럼 거기까지 가는 길 좀 알려줘. 자전거로.

     0.00s  user  발화 시작: 지금 제 위치 근처에 맛집 좀 찾아줘. 반경은 삼킬로미터 이내로.
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.09s  agent 발화 시작: <ret> 네, 현재 위치 주변에 맛집 열두 곳을 찾았습니다. 거리는 영 점 이에서 이 점 팔킬로미터 사이이
     0.09s  ⚡SPAN 주입 [d'=0.19s / d_lead=0.19s]: (tool result) Restaurants found: 12. Distance range: 0.2 - 2.8 km. Cui
     0.09s  user  발화 끝
     0.12s  <ret> 발화 (turn4 첫 프레임)
     0.28s  user  발화 시작: 응.
     0.28s  agent 발화 끝
     0.29s  user  발화 시작: 이탈리아 식당 중에 제일 평점 좋은 곳은 어디야?
     0.29s  user  발화 끝
     0.36s  agent 발화 시작: <ret> 주변 이탈리아 식당 중에서는 “루이지의 트라토리아”가 평점이 가장 높습니다. 별점은 사 점 육점이
     0.36s  ⚡SPAN 주입 [d'=0.18s / d_lead=0.18s]: The highest-rated Italian restaurant nearby is "Luigi's Trattoria", wi
     0.36s  user  발화 끝
     0.54s  user  발화 시작: … 혹시 거기 파스타 맛있는 거 있어?
     0.54s  agent 발화 끝
     0.60s  agent 발화 시작: 네, 루이지의 트라토리아는 특히 해산물 파스타가 맛있다고 많이 알려져 있습니다.
     0.60s  user  발화 끝
     0.67s  <ret> 발화 (turn8 첫 프레임)
     0.69s  user  발화 시작: 그럼 거기까지 가는 길 좀 알려줘. 자전거로.
     0.69s  agent 발화 끝
     0.75s  agent 발화 시작: <ret> 자전거로 가시는 길은 마켓 스트리트를 북쪽으로 영 점 오킬로미터 가신 후 십번가를 좌회전해서 일킬
     0.75s  ⚡SPAN 주입 [d'=0.25s / d_lead=0.25s]: (tool result) Directions: Head north on Market St for 0.5 km, turn lef
     0.75s  user  발화 끝
     1.00s  agent 발화 끝
