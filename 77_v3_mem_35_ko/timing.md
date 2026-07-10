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


     0.00s  agent 발화 시작: 안녕하세요, 하형님. 저는 클렌이라고 합니다. 돈 관리와 예산 관련해서 도와드리는 에이전트예요.
     7.14s  agent 발화 끝
     7.49s  user  발화 시작: 아, 네. 뉴질랜드 여행 계획 세우고 있는데, 혹시 추천해 줄 만한 곳 있을까요?
    13.70s  <ret> 발화 (turn2 첫 프레임)
    13.85s  agent 발화 시작: <ret> 십월에 가신다고 하셨으니, 지금부터 준비하시면 좋을 것 같아요.
    14.02s  user  발화 끝
    15.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.72s]: [2025-12-04] User is planning a trip to New Zealand in October.
    16.14s  user  발화 시작: 맞아.
    16.77s  user  발화 끝
    18.50s  agent 발화 시작: 뉴질랜드는 아름다운 자연 경관으로 유명한 곳이 많아요. 하형님께서는 어떤 스타일의 여행을 선호하시나요? 액티
    18.57s  agent 발화 끝
    32.42s  user  발화 시작: … 혹시 퀸스타운 말고는 다른 도시도 괜찮을까요? 너무 붐빌 것 같아서요.
    33.21s  agent 발화 끝
    38.04s  agent 발화 시작: 퀸스타운 외에도 좋은 도시들이 많죠. 남섬의 크라이스트처치나 넬슨도 아름다운 곳이에요. 북섬에는 오클랜드나 
    38.08s  user  발화 끝
    43.25s  user  발화 시작: 음.
    43.66s  user  발화 끝
    53.67s  agent 발화 끝
    53.96s  user  발화 시작: 음… 너무 큰 도시는 싫고, 조용하고 자연을 즐길 수 있는 곳이면 좋겠어요.
    59.64s  agent 발화 시작: 조용하고 자연을 즐길 수 있는 곳이라면, 남섬의 밀포드 사운드나 퀸스타운 근처의 와카티푸 호수 주변도 좋을 
    59.74s  user  발화 끝
    76.29s  agent 발화 끝
