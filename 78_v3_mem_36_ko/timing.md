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


     0.00s  agent 발화 시작: 혜호 씨, 안녕하세요. 저는 리라입니다. 돈 관리와 예산 짜는 걸 도와드리는 상담사예요.
     2.78s  user  발화 시작: 그래.
     3.25s  user  발화 끝
     5.70s  user  발화 시작: 음… 혹시 제가 예전에 치과 예약했던 거 기억나세요?
     5.79s  agent 발화 끝
     9.58s  <ret> 발화 (turn3 첫 프레임)
     9.73s  agent 발화 시작: <ret> 네, 혜호 씨. 예전에 한 선생님께 아침 일찍 예약하셨던 거 기억나요. 혹시 예약 날짜를 다시 확
     9.86s  user  발화 끝
    11.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.92s]: [2026-01-26] Past chat — Booked a dentist appointment: asked for an ea
    17.62s  user  발화 시작: 아, 그러네요. 그때 제가 아침으로 해달라고 했었죠. 근데 제가 요즘 잠을 너무 늦게 자서… 혹시 좀 늦은 
    17.66s  agent 발화 끝
    26.19s  <ret> 발화 (turn5 첫 프레임)
    26.58s  agent 발화 시작: <ret> 네, 한 선생님께 열시로 예약 변경해 드렸어요. 같은 날짜로요.
    26.80s  user  발화 끝
    28.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.65s]: (tool result) Appointment rescheduled to 10:00 AM on the same day.
    30.23s  agent 발화 끝
