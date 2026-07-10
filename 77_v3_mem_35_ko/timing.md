# v3_mem_35_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "하형",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-07",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-29",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     },
#     {
#       "date": "2025-09-26",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2025-08-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-07-08",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-01",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-29",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 하형님, 안녕하세요. 저는 클렌이라고 합니다. 오늘 여행 계획에 대해 도와드리려고 해요.
     7.28s  user  발화 시작: 아, 네. 뉴질랜드 여행 준비하고 있는데, 혹시 추천하는 곳 있어요?
     7.41s  agent 발화 끝
    12.39s  <ret> 발화 (turn2 첫 프레임)
    12.55s  agent 발화 시작: <ret> 그럼, 하형님께 딱 맞는 곳을 찾아볼게요.
    12.60s  user  발화 끝
    14.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.61s]: [2025-12-04] User is planning a trip to New Zealand in October.
    15.09s  user  발화 시작: 어.
    15.82s  user  발화 끝
    15.96s  agent 발화 시작: 뉴질랜드 북섬의 로토루아는 온천과 마오리 문화 체험으로 유명한 곳이에요. 특히 폴리네시안 스파는 꼭 방문해 
    16.16s  agent 발화 끝
    26.06s  user  발화 시작: … 혹시 로토루아 말고 다른 곳도 괜찮을까요? 좀 더 자연 경관이 좋은 곳으로요.
    26.86s  agent 발화 끝
    32.26s  <ret> 발화 (turn6 첫 프레임)
    32.49s  agent 발화 시작: <ret> 그럼 남섬의 퀸스타운은 어떠세요? 아름다운 와카티푸 호수와 주변 산들이 정말 멋있거든요.
    32.60s  user  발화 끝
    34.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.46s]: [2025-08-26] User's favorite cuisine is Thai.
    39.84s  agent 발화 시작: 혹시 특별히 선호하는 음식 종류가 있으신가요? 퀸스타운에는 태국 음식점도 꽤 많이 있답니다.
    39.95s  agent 발화 끝
    46.92s  user  발화 시작: 태국 음식 좋아해요! 퀸스타운에 맛있는 태국 음식점 있으면 알려주세요.
    47.02s  agent 발화 끝
    52.85s  user  발화 끝
