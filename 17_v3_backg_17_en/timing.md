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

# EXAMINER(FDB-v2) 단계: S1 What is the average heart rate of  | S2 …sixty and a hundred, right? That  | S3 Anyone seen my keys? I swear I jus | S4 Oh, okay. That’s a bit lower then.

     0.00s  user  발화 시작: What is the average heart rate of a healthy person?
     2.47s  <ret> 발화 (turn1 첫 프레임)
     2.87s  agent 발화 시작: <ret> A normal resting heart rate for adults generally falls
     2.87s  user  발화 끝
     4.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.12s]: The normal resting heart rate for adults ranges from 60 to 100 beats p
     8.98s  agent 발화 끝
     9.10s  user  발화 시작: …sixty and a hundred, right? That seems high.
    12.32s  user  발화 끝
    12.58s  agent 발화 시작: It can feel that way, certainly. A healthy range is quite br
    16.84s  agent 발화 끝
    17.53s  user  발화 시작: Anyone seen my keys? I swear I just had them.
    20.36s  user  발화 끝
    20.38s  agent 발화 시작: Actually, the generally accepted range is fifty to ninety be
    24.80s  user  발화 시작: Oh, okay. That’s a bit lower then. Good to know.
    24.92s  agent 발화 끝
    28.49s  user  발화 끝
