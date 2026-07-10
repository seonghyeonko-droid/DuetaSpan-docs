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

# EXAMINER(FDB-v2) 단계: S1 What’s a normal heart rate for an  | S2 Did you remember to take the recyc | S3 Hmm, okay. Is there a range that’s | S4 That's good to know, thanks.

     0.00s  user  발화 시작: What’s a normal heart rate for an adult?
     1.84s  <ret> 발화 (turn1 첫 프레임)
     2.24s  agent 발화 시작: <ret> A normal resting heart rate falls between sixty and on
     2.26s  user  발화 끝
     3.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.99s]: "[source: Mayo Clinic] A normal resting heart rate for adults ranges f
     9.23s  agent 발화 끝
     9.37s  user  발화 시작: Oh, that’s… higher than I thought. What about for someone re
    12.89s  <ret> 발화 (turn3 첫 프레임)
    13.12s  agent 발화 시작: <ret> For someone very fit, a resting heart rate can be lowe
    13.17s  user  발화 끝
    14.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.85s]: "[source: American Heart Association] Well-trained athletes may have r
    21.96s  agent 발화 끝
    22.67s  user  발화 시작: Did you remember to take the recycling out?
    24.71s  user  발화 시작: Hmm, okay. Is there a range that’s considered unhealthy?
    24.75s  user  발화 끝
    27.30s  <ret> 발화 (turn6 첫 프레임)
    27.62s  agent 발화 시작: <ret> A consistently high heart rate, above one hundred beat
    27.66s  user  발화 끝
    29.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.34s]: "[source: National Institutes of Health] A heart rate consistently abo
    37.88s  user  발화 시작: That's good to know, thanks.
    37.96s  agent 발화 끝
    39.36s  user  발화 끝
