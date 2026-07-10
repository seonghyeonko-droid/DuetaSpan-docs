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


     0.00s  agent 발화 시작: 혜호님, 안녕하세요. 저는 리라입니다. 돈 관리와 예산 관련해서 도와드리는 상담사예요.
     3.65s  user  발화 시작: 그래.
     4.29s  user  발화 끝
     7.42s  agent 발화 끝
     7.42s  user  발화 시작: 음… 혹시 제가 예전에 치과 예약했던 거 기억나세요?
    11.13s  <ret> 발화 (turn3 첫 프레임)
    11.28s  agent 발화 시작: <ret> 네, 기억나요. 일찍 진료받고 한 선생님을 선호하셨죠. 혹시 또 예약이 필요하신가요?
    11.44s  user  발화 끝
    13.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.90s]: [2026-01-26] Past chat — Booked a dentist appointment: asked for an ea
    18.18s  user  발화 시작: 아, 네. 그때보다 좀 더 빨리 예약하고 싶은데… 가능할까요?
    18.19s  agent 발화 끝
    22.19s  <ret> 발화 (turn5 첫 프레임)
    22.34s  agent 발화 시작: <ret> 화요일 오전 여덟시, 수요일 오전 일곱시 삼십분에 예약 가능합니다. 혹시 괜찮으신 시간이 있으세요
    22.49s  user  발화 끝
    24.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.23s]: (tool result) Available slots with Dr. Han: Tuesday at 8:00 AM, Wednes
    29.57s  agent 발화 끝
