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
     2.88s  agent 발화 시작: 안녕하세요. 어떤 힘든 일이 있으신가요? 편하게 말씀해 주세요. 제가 곁에서 응원할게요.
     2.88s  user  발화 끝
     8.16s  user  발화 시작: 가족과의 관계가 좀 안 좋은 것 같아요.
     8.16s  agent 발화 끝
    11.52s  agent 발화 시작: 가족과의 관계 때문에 힘드시군요. 그런 문제는 정말 마음이 무거울 수 있어요.
    11.52s  user  발화 끝
    16.81s  user  발화 시작: 네, 엄마랑 자주 다투게 돼요.
    16.81s  agent 발화 끝
    19.21s  agent 발화 시작: 어머님과 자주 다투신다고요. 어떤 점이 가장 힘드신가요?
    19.21s  user  발화 끝
    22.57s  user  발화 시작: 네.
    22.57s  agent 발화 끝
    23.05s  user  발화 시작: 엄마는 항상 제 의견을 무시하는 것 같아요.
    23.05s  user  발화 끝
    26.33s  <ret> 발화 (turn8 첫 프레임)
    26.41s  agent 발화 시작: <ret> 부모님은 자녀의 관점을 이해하기 어려워하는 경우가 많아서, 자주 의견 충돌이 생기고 마음이 상할 
    26.41s  ⚡SPAN 주입 [d'=1.12s / d_lead=7.20s]: Parents often struggle to understand their children's perspectives, le
    26.41s  user  발화 끝
    33.61s  user  발화 시작: 네.
    33.61s  agent 발화 끝
    34.09s  user  발화 시작: 맞아요, 그런 것 같아요.
    34.09s  user  발화 끝
    36.01s  agent 발화 시작: 혹시 어떤 상황에서 주로 다투게 되나요? 구체적으로 말씀해 주시면 더 도움이 될 것 같아요.
    36.01s  user  발화 끝
    42.73s  user  발화 시작: 제가 하고 싶은 일이 있는데, 엄마는 반대하시고…
    42.73s  agent 발화 끝
    46.10s  agent 발화 시작: 하고 싶은 일이 있는데 어머님께서 반대하시는군요. 어떤 일인지 여쭤봐도 될까요?
    46.10s  user  발화 끝
    50.90s  user  발화 시작: 네.
    50.90s  agent 발화 끝
    51.38s  user  발화 시작: 음… 저는 음악을 하고 싶은데, 엄마는 공부를 더 하라고 하세요.
    51.38s  user  발화 끝
    56.18s  agent 발화 시작: 음악을 하고 싶으신데 어머님은 공부를 더 하시길 바라시는군요.
    56.18s  user  발화 끝
    60.02s  agent 발화 시작: 어머님께서 걱정하시는 마음도 이해가 되지만 —
    60.02s  agent 발화 끝
    62.90s  user  발화 시작: …근데 엄마는 제가 음악으로는 성공할 수 없을 거라고 하세요.
    62.90s  agent 발화 끝
    67.14s  <ret> 발화 (turn19 첫 프레임)
    67.22s  agent 발화 시작: <ret> 로욜라 시카고 대학교는 천구백육십삼년에 NCAA Division I 남자 농구 토너먼트에서 신시내
    67.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.12s]: Loyola University Chicago won the NCAA Division I Men's Basketball Tou
    67.22s  user  발화 끝
    76.35s  user  발화 시작: 아, 네. 농구 좋아해요.
    76.35s  agent 발화 끝
    78.27s  agent 발화 시작: 농구를 좋아하시는군요! 혹시 다른 스포츠도 즐겨 보시나요?
    78.27s  user  발화 끝
    81.63s  user  발화 시작: 네.
    81.63s  agent 발화 끝
    82.11s  user  발화 시작: 가끔 야구도 봐요.
    82.11s  user  발화 끝
    83.55s  agent 발화 시작: 야구도 즐겨 보시는군요. 가족과 함께 야구 보러 가기도 하시나요?
    83.55s  user  발화 끝
    87.87s  user  발화 시작: 네, 가끔 같이 가요.
    87.87s  agent 발화 끝
    89.79s  agent 발화 시작: 가족과 함께 야구를 보러 가시는군요. 함께 시간을 보내면서 관계가 조금 더 좋아지길 바라요.
    89.79s  user  발화 끝
    96.03s  agent 발화 끝
