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


     0.00s  agent 발화 시작: 하형 씨, 안녕하세요. 저는 클렌이라고 해요. 돈 관리와 예산 짜는 걸 도와드리는 전문가입니다.
     6.43s  agent 발화 끝
     7.14s  user  발화 시작: 아, 네. 클렌 씨. 뉴질랜드 여행 계획하고 있는데, 혹시 추천해 줄 만한 곳 있을까요?
    11.38s  agent 발화 시작: 뉴질랜드 여행을 계획하고 계시는군요. 혹시 특별히 선호하는 여행 스타일이 있으신가요?
    11.63s  user  발화 끝
    20.18s  agent 발화 끝
    20.28s  user  발화 시작: 음… 너무 빡빡한 일정은 싫고, 자연을 즐길 수 있는 곳이었으면 좋겠어요.
    25.28s  <ret> 발화 (turn4 첫 프레임)
    25.51s  agent 발화 시작: <ret> 이전 대화 내용을 살펴보니 하형 씨께서는 친환경적인 이동 수단에 관심이 많으신 것 같아요. 뉴질랜
    25.66s  user  발화 끝
    27.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.07s]: [2025-06-29] Past chat — Researching a used car: comparing hybrid mode
    33.01s  user  발화 시작: 캠핑카는 좀… 낯설 것 같기도 하고, 운전도 익숙하지 않아서…
    33.58s  agent 발화 끝
    36.98s  user  발화 끝
    37.11s  agent 발화 시작: 캠핑카는 조금 부담스러울 수도 있겠네요. 그럼 좀 더 편안하게 여행할 수 있는 다른 방법을 찾아볼까요?
    44.26s  user  발화 시작: 어.
    44.85s  user  발화 끝
    46.56s  agent 발화 끝
    46.64s  agent 발화 시작: 자연을 즐기면서 편안하게 여행하고 싶으시다면, 퀸스타운 근처의 와카티푸 호수 지역을 추천해 드려요. 아름다운
    55.03s  agent 발화 끝
