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
#       "text": "User's home address is 517 Maple Drive."
#     },
#     {
#       "date": "2025-08-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-07-08",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     }
#   ],
#   "conversation_summaries": [
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


     0.00s  agent 발화 시작: 하형 씨, 안녕하세요. 저는 클렌이라고 합니다. 돈 관리와 예산 관련해서 도와드리는 역할을 하고 있어요.
     7.87s  user  발화 시작: 안녕하세요. 뉴질랜드 여행 계획 중인데, 혹시 추천해 줄 만한 곳 있을까요?
     8.01s  agent 발화 끝
    14.12s  user  발화 끝
    14.27s  agent 발화 시작: 뉴질랜드 여행을 계획하고 계시는군요. 혹시 특별히 선호하시는 여행 스타일이 있으신가요? 액티비티를 좋아하시는
    22.66s  user  발화 시작: 어.
    23.02s  user  발화 끝
    25.29s  agent 발화 시작: 여행 스타일을 파악하면 더욱 적합한 곳을 추천해 드릴 수 있을 것 같아요. 예를 들어, 하형 씨께서 특별히 
    25.50s  agent 발화 끝
    39.20s  agent 발화 끝
    39.28s  user  발화 시작: …사실, 저는 전에 여행할 때 좌석 때문에 좀 불편했던 적이 있어서, 이번에는 편안한 좌석을 고르고 싶어요.
    47.11s  user  발화 끝
    47.26s  <ret> 발화 (turn6 첫 프레임)
    47.33s  agent 발화 시작: <ret> 좌석 때문에 불편하셨다니 안타깝네요. 좌석 선호도에 대해 말씀해 주셔서 감사합니다. 혹시 어떤 좌
    48.94s  ⚡SPAN 주입 [d'=1.68s / d_lead=13.78s]: [2026-06-07] User prefers an aisle seat when traveling.
    61.09s  agent 발화 시작: 통로 쪽 좌석을 선호하시는군요. 뉴질랜드행 항공편을 알아볼 때 통로 쪽 좌석으로 지정해 드리겠습니다.
    61.11s  agent 발화 끝
    69.29s  agent 발화 끝
