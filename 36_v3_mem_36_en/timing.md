# v3_mem_36_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "Thomas",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-08-17",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-07-28",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in December."
#     },
#     {
#       "date": "2025-07-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-06-26",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-21",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Thomas, I'm Feli. It's lovely to meet you. How are things
     5.61s  agent 발화 끝
     6.71s  user  발화 시작: Um, well, I was just wondering if you remembered anything ab
    10.45s  <ret> 발화 (turn2 첫 프레임)
    10.69s  agent 발화 시작: <ret> Yes, I do. You’re planning a trip to Lisbon in Decembe
    10.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: [2025-07-28] User is planning a trip to Lisbon in December.
    10.87s  user  발화 끝
    16.28s  user  발화 시작: Right, Lisbon! I was thinking about places to stay there.
    16.34s  agent 발화 끝
    19.39s  <ret> 발화 (turn4 첫 프레임)
    19.70s  agent 발화 시작: <ret> Hotel Lisboa Plaza is available for 150 EUR a night, a
    19.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.60s]: (tool result) Hotel Lisboa Plaza is trading at 150 EUR per night, with
    19.84s  user  발화 끝
    22.64s  user  발화 시작: Exactly.
    23.47s  user  발화 끝
    27.28s  user  발화 시작: …Actually, before we get into hotels, do you remember what I
    27.30s  agent 발화 끝
    31.89s  <ret> 발화 (turn7 첫 프레임)
    32.13s  agent 발화 시작: <ret> Ah, yes!
    32.13s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.01s]: [2025-07-08] Past chat — Setting up a home network: asked about mesh r
    32.23s  user  발화 끝
    33.14s  agent 발화 끝
