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


     0.00s  agent 발화 시작: 안녕하세요, 혜호님. 저는 리라입니다. 돈 관리와 예산에 관해 도와드리는 상담사예요.
     5.93s  agent 발화 끝
     6.65s  user  발화 시작: 음… 혹시 제가 예전에 치과 예약했던 거 기억하시려나?
    10.90s  user  발화 끝
    10.90s  <ret> 발화 (turn2 첫 프레임)
    11.05s  agent 발화 시작: <ret> 네, 혜호님. 일월 이십육일에 한 선생님으로 아침 시간대로 예약하셨던 거 기억합니다. 혹시 예약 
    12.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.11s]: [2026-01-26] Past chat — Booked a dentist appointment: asked for an ea
    16.06s  user  발화 시작: 응.
    16.60s  user  발화 끝
    19.16s  agent 발화 끝
    19.67s  user  발화 시작: 그게 아니라… 혹시 그때 예약했던 시간 알려줄 수 있어?
    22.88s  <ret> 발화 (turn5 첫 프레임)
    23.27s  agent 발화 시작: <ret> 예약 시간은 삼월 십오일 아홉 시입니다.
    23.37s  user  발화 끝
    23.38s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.49s]: [2026-03-15T09:00:00]
    25.76s  agent 발화 끝
