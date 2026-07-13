# v3_pers_37_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "라정",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-25",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-12-30",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-14",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-05-19",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-20",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 라정님. 저는 아레리이아예요. 돈과 예산 관리를 도와드리는 웰니스 코치입니다. 혹시 요즘 재정적
     8.00s  user  발화 시작: 어… 아레리이아요? 이름이 좀 특이하시네요. 돈 관리를 도와주신다고요? 제가 뭘 어떻게 해야 할지 도통 모르
     8.00s  agent 발화 끝
    15.50s  agent 발화 시작: 이름이 독특하다고 말씀해주셔서 감사합니다. 라정님, 무엇부터 시작해야 할지 모르는 건 흔한 일이에요. 지금 
    15.50s  user  발화 끝
    26.50s  user  발화 시작: 그래.
    26.50s  agent 발화 끝
    27.00s  agent 발화 시작: 빚은 아니고요, 사실 돈이 들어오고 나가는 게 너무 불규칙해서 뭘 어떻게 관리해야 할지 감이 안 잡혀요. [
    27.00s  user  발화 끝
    38.50s  user  발화 시작: 아, 맞다. 저 이번 주 토요일에 친구 생일 파티가 있는데, 선물 고르는 것도 맘에 안 들어요. 너무 비싼 
    38.50s  agent 발화 끝
    51.50s  agent 발화 시작: 네.
    51.50s  user  발화 끝
    52.00s  agent 발화 시작: 친구분 생일 선물 때문에 고민이시군요. 선물은 마음을 전하는 중요한 방법이지만, 너무 부담스러워할 필요는 없
    52.00s  agent 발화 끝
    61.49s  user  발화 시작: 음… 한 오만 원 정도면 괜찮을까요? 너무 적은가?
    61.49s  agent 발화 끝
    65.49s  agent 발화 시작: 오만 원이면 충분히 좋은 선물을 고를 수 있을 거예요. 중요한 건 친구분의 취향에 맞는 것을 고르는 거죠. 
    65.49s  user  발화 끝
    76.99s  agent 발화 끝
