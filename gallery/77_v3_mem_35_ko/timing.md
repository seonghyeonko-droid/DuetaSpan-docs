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


     0.00s  agent 발화 시작: 하형님, 안녕하세요. 저는 클렌이라고 합니다. 돈 관리와 예산 계획을 도와드리는 전문가예요.
     7.55s  user  발화 시작: 아, 안녕하세요. 뉴질랜드 여행 계획 세우고 있는데, 혹시 좋은 숙소 추천해 줄 수 있을까요?
     7.74s  agent 발화 끝
    14.24s  <ret> 발화 (turn2 첫 프레임)
    14.39s  agent 발화 시작: <ret> 메모를 확인해 보니, 십월에 뉴질랜드 여행을 생각하고 계셨네요.
    14.45s  user  발화 끝
    14.74s  ⚡SPAN 주입 [d'=0.50s / d_lead=5.18s]: User is planning a trip to New Zealand in October.
    16.94s  user  발화 시작: 맞아.
    17.57s  user  발화 끝
    19.38s  agent 발화 시작: 혹시 어떤 스타일의 숙소를 선호하시나요? 호텔, 에어비앤비, 아니면 좀 더 특별한 곳을 찾으시나요?
    19.58s  agent 발화 끝
    21.63s  user  발화 시작: 음.
    22.27s  user  발화 끝
    26.23s  agent 발화 끝
    26.65s  user  발화 시작: …에어비앤비 쪽이 좀 더 좋을 것 같아요. 현지 분위기를 느끼고 싶어서요.
    31.69s  <ret> 발화 (turn7 첫 프레임)
    31.78s  user  발화 끝
    31.92s  agent 발화 시작: <ret> 그럼 뉴질랜드 퀸스타운 지역의 에어비앤비 몇 곳을 찾아볼까요? 퀸스타운에서 에어비앤비 세 곳을 찾
    33.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=23.80s]: (tool result) 3 listings found: 'Lakeview Cottage' (4.8 stars, $150/ni
    55.73s  agent 발화 끝
