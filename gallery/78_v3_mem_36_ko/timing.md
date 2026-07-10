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


     0.00s  agent 발화 시작: 안녕하세요, 혜호님. 저는 모시라고 합니다. 재정 상담을 도와드리는 에이전트예요.
     2.89s  user  발화 시작: 그래.
     3.52s  user  발화 끝
     6.07s  agent 발화 끝
     6.58s  user  발화 시작: 음… 혹시 제가 예전에 차 알아보는 얘기 했던 거 기억나세요?
    10.31s  <ret> 발화 (turn3 첫 프레임)
    10.46s  agent 발화 시작: <ret> 네, 혜호님. 하이브리드 모델에 마일리지 삼만 마일 이하로 알아보셨던 것 기억합니다.
    10.70s  user  발화 끝
    11.99s  ⚡SPAN 주입 [d'=1.68s / d_lead=5.88s]: [2025-11-22] Past chat — Researching a used car: comparing hybrid mode
    16.34s  agent 발화 끝
    16.58s  user  발화 시작: 아, 맞다. 그 차, 혹시 부산에 있는 중고차 매장에서 볼 수 있는 거 있을까요?
    21.79s  <ret> 발화 (turn5 첫 프레임)
    22.17s  agent 발화 시작: <ret> 부산에서 하이브리드 차량을 찾으셨는데요, 기아 니로 이천이십이년식이 마일리지 이만팔천오백 킬로미터
    22.42s  user  발화 끝
    23.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=20.83s]: (tool result) Kia Niro (2022) - 28,500 miles - ₩22,500,000; Hyundai Io
    43.00s  agent 발화 끝
