# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "태빈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-10-29",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-10-12",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-09-20",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in May."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-08-04",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-06-16",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-11",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-11-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 요즘 좀 힘든 일이 있어서… | S2 엄마는 항상 제 의견을 무시하는 것 같아요. | S3 음… 저는 음악을 하고 싶은데, 엄마는 공부를 더 하라고 하세 | S4 가끔 야구도 봐요.

     0.00s  user  발화 시작: 안녕하세요. 요즘 좀 힘든 일이 있어서…
     0.03s  agent 발화 시작: 안녕하세요. 어떤 힘든 일이 있으신가요? 편하게 말씀해 주세요. 제가 곁에서 응원할게요.
     0.03s  user  발화 끝
     0.08s  user  발화 시작: 가족과의 관계가 좀 안 좋은 것 같아요.
     0.08s  agent 발화 끝
     0.12s  agent 발화 시작: 가족과의 관계 때문에 힘드시군요. 그런 문제는 정말 마음이 무거울 수 있어요.
     0.12s  user  발화 끝
     0.17s  user  발화 시작: 네, 엄마랑 자주 다투게 돼요.
     0.17s  agent 발화 끝
     0.20s  <ret> 발화 (turn8 첫 프레임)
     0.20s  agent 발화 시작: 어머님과 자주 다투신다고요. 어떤 점이 가장 힘드신가요?
     0.20s  user  발화 끝
     0.23s  user  발화 시작: 네.
     0.23s  agent 발화 끝
     0.24s  user  발화 시작: 엄마는 항상 제 의견을 무시하는 것 같아요.
     0.24s  user  발화 끝
     0.28s  agent 발화 시작: <ret> 부모님은 자녀의 관점을 이해하기 어려워하는 경우가 많아서, 자주 의견 충돌이 생기고 마음이 상할 
     0.28s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: Parents often struggle to understand their children's perspectives, le
     0.28s  user  발화 끝
     0.35s  user  발화 시작: 네.
     0.35s  agent 발화 끝
     0.36s  user  발화 시작: 맞아요, 그런 것 같아요.
     0.36s  user  발화 끝
     0.38s  agent 발화 시작: 혹시 어떤 상황에서 주로 다투게 되나요? 구체적으로 말씀해 주시면 더 도움이 될 것 같아요.
     0.38s  user  발화 끝
     0.45s  user  발화 시작: 제가 하고 싶은 일이 있는데, 엄마는 반대하시고…
     0.45s  agent 발화 끝
     0.48s  agent 발화 시작: 하고 싶은 일이 있는데 어머님께서 반대하시는군요. 어떤 일인지 여쭤봐도 될까요?
     0.48s  user  발화 끝
     0.53s  user  발화 시작: 네.
     0.53s  agent 발화 끝
     0.54s  user  발화 시작: 음… 저는 음악을 하고 싶은데, 엄마는 공부를 더 하라고 하세요.
     0.54s  user  발화 끝
     0.59s  agent 발화 시작: 음악을 하고 싶으신데 어머님은 공부를 더 하시길 바라시는군요.
     0.59s  user  발화 끝
     0.62s  <ret> 발화 (turn19 첫 프레임)
     0.63s  agent 발화 시작: 어머님께서 걱정하시는 마음도 이해가 되지만 —
     0.63s  agent 발화 끝
     0.66s  user  발화 시작: …근데 엄마는 제가 음악으로는 성공할 수 없을 거라고 하세요.
     0.66s  agent 발화 끝
     0.70s  agent 발화 시작: <ret> 로욜라 시카고 대학교는 천구백육십삼년에 NCAA Division I 남자 농구 토너먼트에서 신시내
     0.70s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: Loyola University Chicago won the NCAA Division I Men's Basketball Tou
     0.70s  user  발화 끝
     0.80s  user  발화 시작: 아, 네. 농구 좋아해요.
     0.80s  agent 발화 끝
     0.82s  agent 발화 시작: 농구를 좋아하시는군요! 혹시 다른 스포츠도 즐겨 보시나요?
     0.82s  user  발화 끝
     0.85s  user  발화 시작: 네.
     0.85s  agent 발화 끝
     0.86s  user  발화 시작: 가끔 야구도 봐요.
     0.86s  user  발화 끝
     0.87s  agent 발화 시작: 야구도 즐겨 보시는군요. 가족과 함께 야구 보러 가기도 하시나요?
     0.87s  user  발화 끝
     0.92s  user  발화 시작: 네, 가끔 같이 가요.
     0.92s  agent 발화 끝
     0.94s  agent 발화 시작: 가족과 함께 야구를 보러 가시는군요. 함께 시간을 보내면서 관계가 조금 더 좋아지길 바라요.
     0.94s  user  발화 끝
     1.00s  agent 발화 끝
