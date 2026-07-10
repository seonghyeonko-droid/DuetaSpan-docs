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
#       "text": "User's home address is 70 Maple Drive."
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
#       "text": "User has a Corgi named Mochi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-26",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-23",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 혜호님. 저는 리라입니다. 돈 관리와 예산 관련해서 도와드리는 상담사예요.
     3.38s  user  발화 시작: 그래.
     3.82s  user  발화 끝
     6.95s  agent 발화 끝
     7.16s  user  발화 시작: 혹시… 제가 전에 치과 예약했던 거 기억하세요?
    10.13s  <ret> 발화 (turn3 첫 프레임)
    10.28s  agent 발화 시작: <ret> 네, 기억합니다. 혜호님께서는 일찍 여는 시간대를 선호하시고, 한 선생님을 찾으셨었죠…
    10.53s  user  발화 끝
    11.81s  ⚡SPAN 주입 [d'=1.68s / d_lead=6.76s]: [2026-01-26] Past chat — Booked a dentist appointment: asked for an ea
    17.05s  agent 발화 끝
    17.52s  user  발화 시작: 맞아요. 근데 혹시 그때 예약했던 날짜가 언제였는지 기억 안 나요.
    20.91s  <ret> 발화 (turn5 첫 프레임)
    21.31s  agent 발화 시작: <ret> 예약하신 날짜는 이천육십육 년 일월 이십육일이었어요.
    21.36s  user  발화 끝
    22.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.26s]: [2026-01-26] Past chat — Booked a dentist appointment: asked for an ea
    25.57s  agent 발화 끝
