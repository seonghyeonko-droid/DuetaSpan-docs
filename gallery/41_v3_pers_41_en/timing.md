# v3_pers_41_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_41",
#     "name": "Emil",
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
#       "date": "2026-06-07",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-11-30",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2025-11-03",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-06-09",
#       "category": "home",
#       "text": "User's home address is 901 Oak Avenue."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-16",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-08-03",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hello Emil, it’s lovely to meet you. I’m Diomi, and I’m here
     3.42s  user  발화 시작: Okay.
     4.06s  user  발화 끝
     8.62s  agent 발화 끝
     9.01s  user  발화 시작: Um, Diomi? That’s… an unusual name. What exactly *do* you do
    15.51s  agent 발화 시작: It’s a name my creators chose, Emil, and it feels right for 
    15.64s  user  발화 끝
    19.56s  user  발화 시작: Mm-hmm.
    20.20s  user  발화 끝
    25.86s  agent 발화 끝
    26.80s  user  발화 시작: Welll… I’ve been feeling pretty overwhelmed lately. My job j
    32.83s  user  발화 끝
    32.90s  agent 발화 시작: That sense of a mismatch can be very draining. What aspects 
    38.01s  user  발화 시작: Yeah.
    38.64s  user  발화 끝
    40.41s  agent 발화 끝
    40.43s  user  발화 시작: It’s just… everything feels pointless, you know? Like I'm no
    46.21s  user  발화 끝
    46.31s  agent 발화 시작: It sounds as though a sense of purpose is important to you, 
    54.88s  agent 발화 끝
