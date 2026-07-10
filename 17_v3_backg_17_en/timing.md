# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "Remy",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-08",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-08-14",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-18",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-07-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What is the average heart rate of  | S2 Oh, that's a pretty wide range… | S3 Did you hear about the game last n | S4 What about children? Is it differe

     0.00s  user  발화 시작: What is the average heart rate of a healthy person?
     2.30s  <ret> 발화 (turn1 첫 프레임)
     2.70s  agent 발화 시작: <ret> A healthy person’s average heart rate usually falls be
     2.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.69s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
     2.73s  user  발화 끝
    10.39s  agent 발화 끝
    10.48s  user  발화 시작: Oh, that's a pretty wide range…
    12.10s  user  발화 끝
    12.38s  agent 발화 시작: It is, and many factors influence it — stress, fitness, even
    19.74s  agent 발화 끝
    20.50s  user  발화 시작: Did you hear about the game last night?
    22.22s  user  발화 시작: What about children? Is it different for them?
    22.25s  user  발화 끝
    24.14s  <ret> 발화 (turn6 첫 프레임)
    24.29s  agent 발화 시작: <ret> For children between six and fifteen, the average is b
    24.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.01s]: A normal heart rate for children ages 6 to 15 is between 70 and 100 be
    24.48s  user  발화 끝
    32.30s  agent 발화 끝
