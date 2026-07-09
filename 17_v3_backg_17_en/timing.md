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

# EXAMINER(FDB-v2) 단계: S1 I was just wondering, what’s a nor | S2 Oh, that's a pretty wide range. Is | S3 Did you remember to take the chick | S4 Hmm, okay. And does that change if

     0.00s  user  발화 시작: I was just wondering, what’s a normal heart rate?
     2.16s  <ret> 발화 (turn1 첫 프레임)
     2.56s  agent 발화 시작: <ret> That’s a good question to ask— A normal resting heart 
     2.72s  user  발화 끝
     3.68s  ⚡SPAN 주입 [d'=1.52s / d_lead=1.62s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
     8.49s  agent 발화 끝
     8.67s  user  발화 시작: Oh, that's a pretty wide range. Is there an ideal number wit
    13.00s  <ret> 발화 (turn3 첫 프레임)
    13.16s  agent 발화 시작: <ret> Actually, a lower rate within that range— For healthy 
    13.34s  user  발화 끝
    13.96s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.06s]: For healthy adults, a typical heart rate ranges from 50 to 90 beats pe
    19.65s  agent 발화 끝
    20.53s  user  발화 시작: Did you remember to take the chicken out of the freezer?
    23.41s  user  발화 시작: Hmm, okay. And does that change if you’re an athlete?
    23.58s  user  발화 끝
    27.01s  user  발화 끝
