# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "Casey",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "home",
#       "text": "User's home address is 188 Cedar Lane."
#     },
#     {
#       "date": "2026-04-23",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-04-22",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-08-14",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-07-05",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-06-23",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-21",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-13",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I’m trying to settle in here, and I love music. Who was born
     6.10s  <ret> 발화 (turn1 첫 프레임)
     6.26s  agent 발화 시작: <ret> Well, it appears John Tardy was born a little later; T
     6.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.54s]: John Tardy was born on September 26, 1973, while Tom Barman was born o
     6.26s  user  발화 끝
    16.80s  user  발화 시작: Uh, nineteen seventy? That doesn’t sound right. Are you sure
    16.80s  agent 발화 끝
    20.92s  <ret> 발화 (turn3 첫 프레임)
    21.08s  agent 발화 시작: <ret> You’re right to question me! My apologies. Tom Barman 
    21.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.23s]: Tom Barman was born on October 12, 1970, in Antwerp, Belgium, and is k
    21.08s  user  발화 끝
    29.31s  user  발화 시작: Okay, good. So, what's the weather like today?
    29.31s  agent 발화 끝
    31.63s  <ret> 발화 (turn5 첫 프레임)
    31.95s  agent 발화 시작: <ret> Right now, it’s twenty-two degrees Celsius, with sixty
    31.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.55s]: (tool result) Current conditions: 22.0°C, humidity 65%, wind 3.1 km/h.
    31.95s  user  발화 끝
    41.50s  agent 발화 끝
