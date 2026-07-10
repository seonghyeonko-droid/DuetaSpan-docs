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


     0.00s  user  발화 시작: I was just wondering, what’s a normal heart rate?
     2.65s  <ret> 발화 (turn1 첫 프레임)
     3.05s  agent 발화 시작: <ret> A healthy person’s heart typically beats between sixty
     3.24s  user  발화 끝
     4.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.35s]: [source: Mayo Clinic] A normal resting heart rate for adults ranges fr
     6.24s  user  발화 시작: Yeah, yeah.
     7.52s  user  발화 끝
     9.40s  agent 발화 끝
    10.85s  user  발화 시작: Oh, so it can be lower than sixty? I thought that was bad.
    14.78s  agent 발화 시작: It absolutely can be lower, and often that’s a sign of good 
    14.82s  user  발화 끝
    19.96s  agent 발화 끝
    20.71s  user  발화 시작: Did you remember to take the recycling out?
    23.08s  <ret> 발화 (turn6 첫 프레임)
    23.20s  user  발화 끝
    23.24s  agent 발화 시작: <ret> Actually, a resting heart rate between fifty and ninet
    25.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.93s]: [source: American Heart Association] For most adults, a normal resting
    29.17s  agent 발화 끝
