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


     0.00s  agent 발화 시작: Lucia, it’s so lovely to connect with you. I’m Aril, and I h
     7.60s  agent 발화 끝
     8.86s  user  발화 시작: Oh, Aril. That’s… a nice name. I’m just feeling a little los
    17.90s  user  발화 끝
    18.03s  agent 발화 시작: That’s completely understandable, Lucia. Moving is a big cha
    21.49s  user  발화 시작: Wow.
    22.32s  user  발화 끝
    27.35s  user  발화 시작: Welll… I keep thinking I should join groups, but I get so an
    27.39s  agent 발화 끝
    34.11s  agent 발화 시작: It’s perfectly okay to feel anxious about that. It’s brave o
    34.22s  user  발화 끝
    44.45s  agent 발화 끝
