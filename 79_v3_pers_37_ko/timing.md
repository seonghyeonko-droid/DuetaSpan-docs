# v3_pers_37_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "도안",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-09-18",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2025-07-30",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2025-07-21",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-06-06",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-11-06",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 도안님. 저는 여러분의 시간을 계획하고 휴식을 찾는 여정을 돕는 라이프 코치, 재예요.
     6.44s  agent 발화 끝
     6.45s  user  발화 시작: 어머, 재라고 하시니… 좀 색다른 이름이네요. 혹시 제가 뭘 도와드릴 수 있는 걸까요?
    12.42s  user  발화 끝
    12.59s  agent 발화 시작: 재라는 이름이 색다르다고 말씀해주셔서 기뻐요. 지금 가장 고민되는 부분이 있으신가요? 어떤 점이 힘드신지 편
    17.49s  user  발화 시작: 음.
    17.98s  user  발화 끝
    20.89s  agent 발화 끝
    21.54s  user  발화 시작: 사실 요즘 일이 너무 많아서, 잠깐이라도 제대로 쉬고 싶은 마음이 간절하거든요.
    27.05s  user  발화 끝
    27.27s  agent 발화 시작: 일이 많아 지치시는군요. 잠시라도 휴식을 취하고 싶다는 마음은 당연해요. 어떤 종류의 휴식이 가장 끌리세요?
    38.18s  user  발화 시작: 음… 그냥 조용히 바다 보면서 커피 마시는 정도면 좋겠어요. 서울 근교에 괜찮은 곳 있을까요?
    38.22s  agent 발화 끝
    44.99s  user  발화 끝
    45.00s  agent 발화 시작: 서울 근교에서 조용히 바다를 보며 커피를 즐길 수 있는 곳을 찾으시는군요. 잠시만요, 그런 곳이 있는지 알아
    53.85s  agent 발화 끝
