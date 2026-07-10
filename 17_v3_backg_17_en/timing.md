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

# EXAMINER(FDB-v2) 단계: S1 I was just wondering, what’s a nor | S2 Oh, that’s a pretty wide range. Is | S3 Did you remember to take the chick | S4 Wow, okay. So, below sixty could b

     0.00s  user  발화 시작: I was just wondering, what’s a normal heart rate?
     2.22s  <ret> 발화 (turn1 첫 프레임)
     2.61s  agent 발화 시작: <ret> Generally, a healthy heart beats between sixty and one
     2.77s  user  발화 끝
     4.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.86s]: [source: Mayo Clinic] A normal resting heart rate for adults ranges fr
     7.47s  agent 발화 끝
     7.81s  user  발화 시작: Oh, that’s a pretty wide range. Is there an *ideal* number w
    11.99s  <ret> 발화 (turn3 첫 프레임)
    12.23s  agent 발화 시작: <ret> Actually, for many adults, an ideal resting heart rate
    12.34s  user  발화 끝
    13.83s  ⚡SPAN 주입 [d'=1.84s / d_lead=5.65s]: [source: American Heart Association] For most adults, a normal resting
    17.88s  agent 발화 끝
    18.71s  user  발화 시작: Did you remember to take the chicken out of the freezer?
    21.70s  user  발화 시작: Wow, okay. So, below sixty could be a concern?
    21.86s  user  발화 끝
    25.72s  user  발화 끝
