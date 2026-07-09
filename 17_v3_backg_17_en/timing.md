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

# EXAMINER(FDB-v2) 단계: S1 What’s a normal heart rate for som | S2 Oh— I always thought it was lower  | S3 Did you remember to take the chick | S4 Is there a range for athletes, the

     0.00s  user  발화 시작: What’s a normal heart rate for someone who’s, like, pretty h
     2.99s  <ret> 발화 (turn1 첫 프레임)
     3.39s  agent 발화 시작: <ret> That’s a good question to ask about your wellbeing. A 
     3.61s  user  발화 끝
     4.43s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.24s]: [source: Mayo Clinic] A normal resting heart rate for adults ranges fr
     7.94s  user  발화 시작: Yeah, yeah.
     9.37s  user  발화 끝
    12.39s  agent 발화 끝
    13.82s  user  발화 시작: Oh— I always thought it was lower than that.
    16.80s  agent 발화 시작: It’s easy to get numbers mixed up, and there’s a lot of vari
    16.92s  user  발화 끝
    20.92s  agent 발화 끝
    21.67s  user  발화 시작: Did you remember to take the chicken out of the freezer?
    24.38s  user  발화 시작: Is there a range for athletes, then? I run a lot.
    24.53s  user  발화 끝
    27.71s  <ret> 발화 (turn7 첫 프레임)
    27.87s  agent 발화 시작: <ret> Athletes often have a lower resting heart rate— For we
    27.89s  user  발화 끝
    29.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=2.55s]: [source: American Heart Association] Well-trained athletes may have a 
    35.84s  agent 발화 끝
