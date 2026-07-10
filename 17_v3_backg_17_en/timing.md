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


     0.00s  user  발화 시작: I was just wondering, what's a normal heart rate?
     2.63s  <ret> 발화 (turn1 첫 프레임)
     3.00s  user  발화 끝
     3.03s  agent 발화 시작: <ret> A normal heart rate is something many people ask about
     4.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: [source: Mayo Clinic] A normal resting heart rate for adults ranges fr
     8.65s  agent 발화 시작: The typical resting heart rate for most adults is… between 6
     8.82s  agent 발화 끝
    14.76s  agent 발화 끝
    14.80s  user  발화 시작: Did you remember to take the chicken out of the freezer?
    17.17s  user  발화 시작: Oh, okay, that’s good to know. Is there a range for what's c
    17.25s  user  발화 끝
    22.68s  <ret> 발화 (turn5 첫 프레임)
    22.84s  agent 발화 시작: <ret> When we talk about healthy, there's a slightly narrowe
    22.96s  user  발화 끝
    24.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.86s]: [source: American Heart Association] For most adults, a healthy heart 
    27.52s  agent 발화 시작: A healthy heart rate, generally speaking, falls… between 50 
    27.70s  agent 발화 끝
    32.80s  agent 발화 끝
