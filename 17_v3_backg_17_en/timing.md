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

# EXAMINER(FDB-v2) 단계: S1 What’s a normal resting heart rate | S2 Oh, okay… but I read somewhere it  | S3 Did you remember to take the chick | S4 So, is there like, a generally *id

     0.00s  user  발화 시작: What’s a normal resting heart rate? I’m just trying to get a
     4.61s  <ret> 발화 (turn1 첫 프레임)
     5.01s  agent 발화 시작: <ret> That’s a really good question— For most adults, a norm
     5.19s  user  발화 끝
     6.13s  ⚡SPAN 주입 [d'=1.52s / d_lead=1.55s]: [source: Mayo Clinic] A normal resting heart rate for adults ranges fr
    11.82s  agent 발화 끝
    12.04s  user  발화 시작: Oh, okay… but I read somewhere it should be lower than that?
    16.39s  <ret> 발화 (turn3 첫 프레임)
    16.55s  agent 발화 시작: <ret> Well-trained athletes often have a resting heart rate 
    16.62s  user  발화 끝
    18.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.81s]: [source: American Heart Association] For well-trained athletes, a norm
    21.36s  agent 발화 끝
    22.11s  user  발화 시작: Did you remember to take the chicken out of the freezer?
    24.86s  user  발화 시작: So, is there like, a generally *ideal* range then? I— I mean
    25.06s  user  발화 끝
    30.60s  <ret> 발화 (turn6 첫 프레임)
    30.76s  agent 발화 시작: <ret> Absolutely, there is— For most adults, a healthy heart
    30.83s  user  발화 끝
    31.40s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.08s]: [source: National Institutes of Health] A healthy heart rate typically
    37.61s  agent 발화 끝
