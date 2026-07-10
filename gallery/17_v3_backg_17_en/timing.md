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

# EXAMINER(FDB-v2) 단계: S1 What is the average heart rate of  | S2 Oh, that’s a pretty wide range. | S3 Did you remember to take the recyc | S4 But what about athletes? Their hea

     0.00s  user  발화 시작: What is the average heart rate of a healthy person?
     2.20s  <ret> 발화 (turn1 첫 프레임)
     2.58s  user  발화 끝
     2.59s  agent 발화 시작: <ret> So, a typical resting heart rate falls between sixty a
     4.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.86s]: [A normal resting heart rate for adults ranges from 60 to 100 beats pe
     7.45s  agent 발화 끝
     7.53s  user  발화 시작: Oh, that’s a pretty wide range.
     9.14s  user  발화 끝
     9.30s  agent 발화 시작: It is rather broad, isn’t it? Factors like fitness level and
    14.58s  agent 발화 끝
    15.29s  user  발화 시작: Did you remember to take the recycling out?
    17.41s  user  발화 끝
    17.44s  user  발화 시작: But what about athletes? Their heart rate is lower, right?
    20.57s  <ret> 발화 (turn6 첫 프레임)
    20.72s  agent 발화 시작: <ret> For well-trained athletes, it can be as low as forty t
    20.91s  user  발화 끝
    22.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.55s]: [Well-trained athletes may have a resting heart rate as low as 40-60 b
    28.27s  agent 발화 끝
