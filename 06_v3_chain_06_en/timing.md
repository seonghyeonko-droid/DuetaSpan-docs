# v3_chain_06_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "Iris",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-07",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-04-22",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-01-20",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-18",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I'm looking for a Thai restaurant  | S2 Something quiet, maybe.… | S3 …And does it take reservations? | S4 Perfect! Can you check if they hav

     0.00s  user  발화 시작: I'm looking for a Thai restaurant in Austin.
     2.96s  agent 발화 시작: Mm-hmm.
     2.96s  user  발화 끝
     3.09s  <ret> 발화 (turn2 첫 프레임)
     3.33s  agent 발화 시작: <ret> [happy] Of course! Austin has quite a few great Thai p
     3.33s  agent 발화 끝
     4.16s  ⚡SPAN 주입 [d'=1.07s / d_lead=8.89s]: There are many Thai restaurants in Austin, Texas, ranging in price and
    12.23s  user  발화 시작: Hmm, what's Titaya's like?
    12.23s  agent 발화 끝
    13.18s  <ret> 발화 (turn4 첫 프레임)
    13.71s  agent 발화 시작: <ret> Titaya's Thai Cuisine is a casual spot known for reall
    13.71s  user  발화 끝
    13.72s  ⚡SPAN 주입 [d'=0.54s / d_lead=10.75s]: Titaya's Thai Cuisine is a popular, casual restaurant in Austin known 
    24.46s  user  발화 시작: Yeah, yeah.
    24.46s  agent 발화 끝
    25.20s  agent 발화 시작: [curious] It definitely gets rave reviews! Are you looking f
    25.20s  user  발화 끝
    33.72s  user  발화 시작: Something quiet, maybe.…
    33.72s  agent 발화 끝
    34.83s  user  발화 시작: …And does it take reservations?
    34.83s  user  발화 끝
    36.68s  agent 발화 시작: Yeah, yeah.
    36.68s  user  발화 끝
    37.12s  <ret> 발화 (turn10 첫 프레임)
    37.42s  agent 발화 시작: <ret> It’s first-come, first-served at Titaya's, and they’re
    37.42s  agent 발화 끝
    37.63s  ⚡SPAN 주입 [d'=0.51s / d_lead=6.30s]: Titaya's Thai Cuisine does not accept reservations; it operates on a f
    43.72s  user  발화 시작: Okay, that's good to know. Can you find me a quiet Italian p
    43.72s  agent 발화 끝
    48.48s  <ret> 발화 (turn12 첫 프레임)
    48.91s  agent 발화 시작: <ret> [sigh] Certainly. Trattoria Lisina is a romantic Itali
    48.91s  user  발화 끝
    49.00s  ⚡SPAN 주입 [d'=0.52s / d_lead=10.75s]: Trattoria Lisina is a highly-rated Italian restaurant in Austin, known
    59.66s  user  발화 시작: Okay.
    59.66s  agent 발화 끝
    60.03s  user  발화 시작: Perfect! Can you check if they have a table for two availabl
    60.03s  user  발화 끝
    65.73s  <ret> 발화 (turn15 첫 프레임)
    65.96s  agent 발화 시작: <ret> [happy] Great news! I've reserved a table for two at T
    65.96s  user  발화 끝
    66.68s  ⚡SPAN 주입 [d'=0.95s / d_lead=10.38s]: (tool result) Reservation confirmed at Trattoria Lisina for 2 people o
    76.33s  agent 발화 끝
