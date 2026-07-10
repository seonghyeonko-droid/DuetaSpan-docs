# v3_pers_39_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_39",
#     "name": "Lucia",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-15",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-06-03",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-05-31",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-19",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Lucia, it’s wonderful to connect with you. I’m Aril, and I h
     8.15s  agent 발화 끝
     9.39s  user  발화 시작: Aril… that’s a lovely name. Honestly, I’m just feeling a bit
    15.20s  agent 발화 시작: It’s completely understandable to feel that way, Lucia. Drif
    15.28s  user  발화 끝
    18.89s  user  발화 시작: Wow.
    19.70s  user  발화 끝
    25.03s  user  발화 시작: Welll… I don’t even know where to start. It feels awkward ju
    25.16s  agent 발화 끝
    30.16s  user  발화 끝
    30.21s  agent 발화 시작: That awkwardness is very common, and perfectly valid. Perhap
    38.88s  agent 발화 끝
