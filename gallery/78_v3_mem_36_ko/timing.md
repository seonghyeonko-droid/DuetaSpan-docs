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


     0.00s  agent 발화 시작: 안녕하세요, 혜호님. 저는 리라입니다. 돈 관리와 예산 짜는 걸 도와드리는 상담사예요.
     2.86s  user  발화 시작: 그래.
     3.30s  user  발화 끝
     6.01s  agent 발화 끝
     6.18s  user  발화 시작: 음… 전에 치과 예약 잡아줬었죠? 그때 뭐라고 했었지?
     9.68s  <ret> 발화 (turn3 첫 프레임)
     9.83s  agent 발화 시작: <ret> 치과 예약하실 때 아침 일찍, 한 선생님께 진료받고 싶다고 말씀하셨어요.
    10.06s  user  발화 끝
    11.36s  ⚡SPAN 주입 [d'=1.68s / d_lead=5.04s]: [2026-01-26] Past chat — Booked a dentist appointment: asked for an ea
    14.87s  agent 발화 끝
    15.39s  user  발화 시작: 아, 맞다! 그때 그랬지. 모치 데리고 갈 수 있는지 알아봐 줄 수 있어?
    18.91s  <ret> 발화 (turn5 첫 프레임)
    19.30s  agent 발화 시작: <ret> 한 선생님께서는 미리 말씀만 해주시면 작은 반려동물은 데려가셔도 괜찮다고 하셨어요.
    19.37s  user  발화 끝
    20.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.12s]: (tool result) Dr. Han's office allows small, well-behaved pets with pr
    25.41s  agent 발화 끝
