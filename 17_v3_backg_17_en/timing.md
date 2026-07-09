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
#       "date": "2026-06-21",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-06-19",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-10",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-03-26",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What’s a normal resting heart rate | S2 Oh, wow, that’s a pretty wide rang | S3 Did you remember to take the chick | S4 So, if mine is consistently around

     0.00s  user  발화 시작: What’s a normal resting heart rate for an adult?
     2.31s  <ret> 발화 (turn1 첫 프레임)
     2.71s  agent 발화 시작: <ret> That’s a good question to ask— A healthy adult’s resti
     2.86s  user  발화 끝
     3.83s  ⚡SPAN 주입 [d'=1.52s / d_lead=1.82s]: A normal resting heart rate for adults ranges from 60 to 100 bpm.
     9.39s  agent 발화 끝
     9.61s  user  발화 시작: Oh, wow, that’s a pretty wide range. Is there an *ideal* num
    14.17s  agent 발화 시작: It really depends on the person—
    14.23s  user  발화 끝
    15.67s  <ret> 발화 (turn4 첫 프레임)
    15.91s  agent 발화 시작: <ret> A typical, healthy heart rate falls between fifty and 
    16.06s  agent 발화 끝
    17.03s  ⚡SPAN 주입 [d'=1.36s / d_lead=4.34s]: For healthy adults, a typical heart rate is between 50 and 90 bpm.
    20.17s  user  발화 시작: Did you remember to take the chicken out of the freezer?
    20.25s  agent 발화 끝
    23.36s  user  발화 시작: So, if mine is consistently around 75, that’s probably fine 
    23.55s  user  발화 끝
    28.54s  user  발화 끝
