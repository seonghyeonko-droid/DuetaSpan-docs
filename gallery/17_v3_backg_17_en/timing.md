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

# EXAMINER(FDB-v2) 단계: S1 What is the average heart rate of  | S2 Oh, that's a pretty wide range… uh | S3 Did you see the game last night? W | S4 So, below fifty might be a concern

     0.00s  user  발화 시작: What is the average heart rate of a healthy person?
     2.23s  <ret> 발화 (turn1 첫 프레임)
     2.62s  agent 발화 시작: <ret> A healthy person’s heart typically beats between sixty
     2.72s  user  발화 끝
     4.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.76s]: A normal resting heart rate for adults ranges from 60 to 100 bpm.
     9.30s  user  발화 시작: Oh, that's a pretty wide range… uhhh, is there a lower end t
     9.38s  agent 발화 끝
    13.09s  user  발화 끝
    13.27s  agent 발화 시작: Yes, there is. Lower heart rates can also be perfectly norma
    20.03s  agent 발화 끝
    20.63s  user  발화 시작: Did you see the game last night? What a finish!
    23.12s  <ret> 발화 (turn5 첫 프레임)
    23.27s  agent 발화 시작: <ret> As for a general average, many sources suggest between
    23.44s  user  발화 끝
    25.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: A healthy heart rate is generally considered to be between 50 and 90 b
    29.05s  agent 발화 끝
    30.86s  user  발화 시작: So, below fifty might be a concern?
    33.53s  agent 발화 시작: It could be, though it depends on your overall health and ac
    33.53s  user  발화 끝
    40.06s  agent 발화 끝
