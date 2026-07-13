# v3_fstart_15_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "David",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-09",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-11-20",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-06-24",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-06-01",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-12",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I need a route from my home to Central High School… uh, actu
     5.67s  agent 발화 시작: What can I help you with instead?
     5.67s  user  발화 끝
     8.00s  user  발화 시작: Yeah.
     8.00s  agent 발화 끝
     8.33s  user  발화 시작: Show me the fastest route to the nearest coffee shop.
     8.33s  user  발화 끝
    11.44s  <ret> 발화 (turn5 첫 프레임)
    11.67s  agent 발화 시작: Yeah.
    11.67s  user  발화 끝
    11.94s  ⚡SPAN 주입 [d'=0.64s / d_lead=8.67s]: (tool result) {"distance": 1.2, "duration": 4, "route": "Head north on
    12.00s  agent 발화 시작: <ret> The fastest route is about one point two miles, taking
    12.00s  agent 발화 끝
    20.67s  user  발화 시작: Hmm, is there a Starbucks nearby?
    20.67s  agent 발화 끝
    22.62s  <ret> 발화 (turn7 첫 프레임)
    22.67s  agent 발화 시작: <ret> There's a Starbucks at one two three Main Street, poin
    22.67s  user  발화 끝
    23.28s  ⚡SPAN 주입 [d'=1.50s / d_lead=7.00s]: (tool result) {"name": "Starbucks", "address": "123 Main Street", "dis
    29.67s  user  발화 시작: Mm-hmm.
    29.67s  agent 발화 끝
    30.00s  agent 발화 시작: Wonderful. I’m glad I could help you find a convenient coffe
    30.00s  user  발화 끝
    37.34s  agent 발화 끝
