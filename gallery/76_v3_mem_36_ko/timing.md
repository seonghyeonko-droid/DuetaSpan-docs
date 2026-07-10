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


     0.00s  agent 발화 시작: 혜호님, 안녕하세요. 저는 리라입니다. 돈 관리와 예산 짜는 걸 도와드리는 상담사예요.
     3.15s  user  발화 시작: 그래.
     3.65s  user  발화 끝
     6.35s  agent 발화 끝
     7.02s  user  발화 시작: 음… 혹시 제가 전에 치과 예약했던 거 기억하세요?
    11.45s  <ret> 발화 (turn3 첫 프레임)
    11.53s  agent 발화 시작: <ret> 네, 혜호님. 전에 한 선생님으로 아침 일찍 예약하셨던 걸 기억해요.
    11.74s  user  발화 끝
    13.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.97s]: [2026-01-26] Past chat — Booked a dentist appointment: asked for an ea
    17.50s  agent 발화 끝
    17.82s  user  발화 시작: 아, 맞다! 근데 그때 예약 시간이 정확히 몇 시였죠? 까먹었어요.
    22.79s  <ret> 발화 (turn5 첫 프레임)
    22.94s  agent 발화 시작: <ret> 한 선생님과 이월 십오일 아홉 시에 예약하셨어요.
    23.14s  user  발화 끝
    24.07s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.91s]: (tool result) Appointment time is 9:00 AM on February 15th.
    24.67s  user  발화 시작: 헐.
    25.27s  user  발화 끝
    25.85s  agent 발화 끝
    26.02s  user  발화 시작: 아, 고마워요! 그럼 혹시 지금 강아지 모치 사진 보여줄 수 있어요?
    30.74s  user  발화 끝
