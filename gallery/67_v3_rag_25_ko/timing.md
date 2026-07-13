# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "윤훈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-09",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-03-31",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-10-07",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2025-09-28",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-07-22",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-30",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-18",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 안녕하세요. 여기 이사 온 지 얼마 안 됐는데, 혹시 이 근처에 괜찮은 식당 아세요?
     5.82s  agent 발화 시작: 안녕하세요. 새로운 곳에 정착하시는군요. 어떤 종류의 음식을 좋아하시나요?
     5.82s  user  발화 끝
     9.14s  user  발화 시작: 음… 사실 뭘 먹을지 아직 못 정했어요. 그냥 맛있는 곳이면 돼요.
     9.14s  agent 발화 끝
    13.31s  <ret> 발화 (turn3 첫 프레임)
    13.71s  agent 발화 시작: <ret> 구글 지도에서 평점이 사 점 오점에 리뷰가 이백개가 넘는, 르 비스트로 뒤 방이라는 벨기에 식당이
    13.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.89s]: The Belgian restaurant, Le Bistro du Vin, has an average rating of 4.5
    13.71s  user  발화 끝
    21.60s  user  발화 시작: 그렇죠.
    21.60s  agent 발화 끝
    22.01s  user  발화 시작: 벨기에 음식은 잘 모르겠는데… 혹시 다른 곳도 추천해 주실 수 있나요? 좀 더 익숙한 게 좋을 것 같아요.
    22.01s  user  발화 끝
    29.49s  user  발화 끝
