# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Max",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-19",
#       "category": "commute",
#       "text": "User drives about 40 minutes each way."
#     },
#     {
#       "date": "2026-05-21",
#       "category": "streaming",
#       "text": "User subscribes to Wavve and Melon."
#     },
#     {
#       "date": "2026-04-22",
#       "category": "savings",
#       "text": "User is saving for a down payment on an apartment."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "sibling",
#       "text": "User has a younger sibling named Tobias."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cold brew."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "bloodtype",
#       "text": "User's blood type is A-."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "partner",
#       "text": "User's partner is named Hana."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 20°C."
#     },
#     {
#       "date": "2026-01-16",
#       "category": "learning",
#       "text": "User is learning Spanish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-12",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     },
#     {
#       "date": "2026-04-29",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Can you check train tickets from Dallas, Texas to Houston, T
     7.68s  <ret> 발화 (turn1 첫 프레임)
     8.06s  agent 발화 시작: <ret> [happy] Certainly! There’s a train leaving Dallas at e
     8.16s  user  발화 끝
     8.44s  ⚡SPAN 주입 [d'=0.76s / d_lead=10.71s]: (tool result) 08:00, Dallas, TX to Houston, TX, 4 adults, $148.00, TRA
    11.62s  user  발화 시작: Yeah.
    12.06s  user  발화 끝
    18.76s  user  발화 시작: Eight AM… uh, actually, make that seven thirty AM if possibl
    18.77s  agent 발화 끝
    23.05s  <ret> 발화 (turn4 첫 프레임)
    23.57s  user  발화 끝
    23.59s  agent 발화 시작: <ret> [happy] No problem at all. There’s a train at seven th
    24.33s  ⚡SPAN 주입 [d'=1.28s / d_lead=11.92s]: (tool result) 07:30, Dallas, TX to Houston, TX, 4 adults, $162.00, TRA
    35.50s  agent 발화 끝
