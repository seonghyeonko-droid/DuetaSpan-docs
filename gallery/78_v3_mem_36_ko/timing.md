# v3_mem_36_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "혜호",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-06",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-10-11",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-07-02",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-22",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 혜호님. 저는 재정 상담사 리라입니다. 무엇을 도와드릴까요?
     2.44s  user  발화 시작: 그래.
     3.07s  user  발화 끝
     5.23s  agent 발화 끝
     5.41s  user  발화 시작: 저… 혹시 제가 예전에 차를 알아보는 얘기 했던 거 기억하세요?
     9.14s  <ret> 발화 (turn3 첫 프레임)
     9.29s  agent 발화 시작: <ret> 네, 혜호님. 하이브리드 모델을 찾으시고, 주행 거리는 삼만 마일 이하를 원하셨던 걸 기억합니다.
     9.52s  user  발화 끝
    10.82s  ⚡SPAN 주입 [d'=1.68s / d_lead=6.34s]: [2025-11-22] Past chat — Researching a used car: comparing hybrid mode
    15.64s  agent 발화 끝
    16.19s  user  발화 시작: 아, 맞다! 그때 얘기했었죠. 혹시 지금 시세는 좀 어떻게 되나요?
    20.63s  <ret> 발화 (turn5 첫 프레임)
    21.02s  agent 발화 시작: <ret> 현재 하이브리드 차량 시세는 토요타 프리우스가 이천팔백오십만 원이고, 현대 아이오닉은 이천육백팔십
    21.04s  user  발화 끝
    22.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.64s]: (tool result) Toyota Prius (PRIUS) is trading at 28,500,000 KRW, up 2.
    34.65s  agent 발화 끝
