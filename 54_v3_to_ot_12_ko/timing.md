# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "연린",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-01-22",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-11-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-11-13",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in May."
#     },
#     {
#       "date": "2025-09-20",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-07-07",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-11",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-06-07",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 음… 제1차 세계 대전 때 영국군이 어디서 싸웠는지 궁금하네요.
     4.36s  <ret> 발화 (turn1 첫 프레임)
     4.67s  agent 발화 시작: <ret> 제1차 세계 대전 당시 영국군은 주로 프랑스에서 전투를 벌였다고 해요.
     4.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.35s]: France was a primary theatre of conflict during World War I, seeing ex
     4.81s  user  발화 끝
     7.36s  user  발화 시작: 음.
     7.85s  user  발화 끝
     9.01s  agent 발화 끝
    10.05s  user  발화 시작: 어머, 잠깐만요, 지금 엄마한테 전화가 오네…
    13.28s  user  발화 끝
    15.32s  user  발화 시작: 아, 죄송해요. 다시 질문해도 될까요?
    18.56s  user  발화 끝
    18.65s  <ret> 발화 (turn5 첫 프레임)
    18.73s  agent 발화 시작: <ret> 아까 말씀하신 대로, 제1차 세계 대전에서 영국군은 주로 프랑스에서 싸웠답니다. 혹시 더 자세한 
    18.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.90s]: France was a primary theatre of conflict during World War I, seeing ex
    25.63s  agent 발화 끝
