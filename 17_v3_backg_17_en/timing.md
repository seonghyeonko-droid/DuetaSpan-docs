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

# EXAMINER(FDB-v2) 단계: S1 What’s a normal heart rate? I’m a  | S2 Oh, okay. But what about when you' | S3 Did you remember to take the trash | S4 Wow, that’s low! So anything below

     0.00s  user  발화 시작: What’s a normal heart rate? I’m a little worried mine feels 
     4.19s  <ret> 발화 (turn1 첫 프레임)
     4.59s  agent 발화 시작: <ret> That’s a good question to ask— A normal resting heart 
     4.71s  user  발화 끝
     5.71s  ⚡SPAN 주입 [d'=1.52s / d_lead=1.58s]: [source: Mayo Clinic] A normal resting heart rate for adults ranges fr
     7.45s  user  발화 시작: Yeah, yeah.
     8.84s  user  발화 끝
    10.38s  agent 발화 끝
    11.79s  user  발화 시작: Oh, okay. But what about when you're, like, really fit?
    15.58s  <ret> 발화 (turn4 첫 프레임)
    15.73s  agent 발화 시작: <ret> Fitness can definitely lower your resting heart rate.
    15.87s  user  발화 끝
    16.79s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.90s]: [source: American Heart Association] Well-trained athletes may have a 
    18.47s  agent 발화 시작: Athletes can sometimes have a resting heart rate as low as f
    18.64s  agent 발화 끝
    22.49s  user  발화 시작: Did you remember to take the trash out?
    22.58s  agent 발화 끝
    24.70s  user  발화 시작: Wow, that’s low! So anything below sixty is okay if you exer
    24.80s  user  발화 끝
    30.86s  user  발화 끝
