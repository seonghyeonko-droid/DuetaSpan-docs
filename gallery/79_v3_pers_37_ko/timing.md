# v3_pers_37_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "연경",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-18",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-11-01",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-10-02",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     },
#     {
#       "date": "2025-09-08",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-07-12",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-09",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-10-06",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-20",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 연경님, 안녕하세요. 저는 드로이아라고 해요. 관계와 가족에 대해 함께 고민하고, 부드럽게 안내해 드리는 역
     6.94s  user  발화 시작: 네네.
     7.58s  user  발화 끝
     8.85s  agent 발화 끝
     9.52s  user  발화 시작: 혹시 제가 어떤 걸 도와드릴 수 있을까요?
    11.99s  agent 발화 시작: 드로이아라는 이름이 마음에 드신다니 기뻐요. 혹시 지금 마음이 조금 힘든 일이 있으신가요? 아니면 어떤 점이
    12.16s  user  발화 끝
    20.10s  agent 발화 끝
    20.45s  user  발화 시작: 음… 사실은 부모님과의 관계가 좀 어렵게 느껴져서요. 자주 다투게 되거든요.
    25.23s  agent 발화 시작: 부모님과의 관계 때문에 힘드시다니, 마음이 아프네요. 어떤 점이 가장 어렵게 느껴지시는지 조금 더 자세히 말
    25.31s  user  발화 끝
    33.99s  agent 발화 끝
