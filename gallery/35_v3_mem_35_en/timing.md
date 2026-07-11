# v3_mem_35_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "Jamie",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-08",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-03-29",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-03-16",
#       "category": "home",
#       "text": "User's home address is 490 Pine Court."
#     },
#     {
#       "date": "2025-11-19",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-07-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-14",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-11-16",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Jamie, I'm Ura. It's lovely to meet you.
     2.80s  user  발화 시작: um, I’m trying to decide where to go for dinner tonight.
     2.87s  agent 발화 끝
     5.58s  <ret> 발화 (turn2 첫 프레임)
     5.99s  agent 발화 시작: <ret> You told me back on July twenty-sixth, two thousand an
     5.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.02s]: [2025-07-26] User's favorite cuisine is Mexican.
     6.03s  user  발화 끝
    12.00s  agent 발화 끝
    14.56s  user  발화 시작: Oh, right! That’s true. Do you have any recommendations in S
    19.15s  <ret> 발화 (turn4 첫 프레임)
    19.23s  agent 발화 시작: <ret> El Paso Mexican Restaurant on Oxford Street has a four
    19.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.76s]: (tool result) Name: El Paso Mexican Restaurant, Address: 32 Oxford Str
    19.37s  user  발화 끝
    25.02s  user  발화 시작: Mm-hmm.
    25.79s  user  발화 끝
    28.00s  agent 발화 끝
    28.28s  user  발화 시작: That sounds perfect, thanks!
    30.18s  agent 발화 시작: Wonderful! It’s great to revisit your preferences to make ch
    30.22s  user  발화 끝
    37.82s  agent 발화 끝
