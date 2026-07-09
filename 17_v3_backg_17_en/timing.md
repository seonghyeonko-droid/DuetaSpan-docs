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

# EXAMINER(FDB-v2) 단계: S1 What’s a normal resting heart rate | S2 That seems… high. Is there a lower | S3 Did you remember to take the chick | S4 So, below sixty could be okay too,

     0.00s  user  발화 시작: What’s a normal resting heart rate for an adult?
     3.02s  <ret> 발화 (turn1 첫 프레임)
     3.42s  agent 발화 시작: <ret> That’s a great question, and it varies— A healthy adul
     3.60s  user  발화 끝
     4.06s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.43s]: [source: Mayo Clinic] A normal resting heart rate for adults ranges fr
     7.43s  user  발화 시작: Yeah, yeah.
     8.62s  user  발화 끝
    11.39s  agent 발화 끝
    12.84s  user  발화 시작: That seems… high. Is there a lower range considered healthy?
    17.34s  <ret> 발화 (turn4 첫 프레임)
    17.58s  agent 발화 시작: <ret> Actually, yes— A resting heart rate between fifty and 
    17.70s  user  발화 끝
    17.84s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.67s]: [source: American Heart Association] For adults, a normal resting hear
    23.92s  agent 발화 끝
    24.71s  user  발화 시작: Did you remember to take the chicken out of the freezer?
    27.57s  user  발화 시작: So, below sixty could be okay too, then?
    27.72s  user  발화 끝
    30.52s  user  발화 끝
    30.59s  agent 발화 시작: Absolutely. A lower heart rate can indicate good cardiovascu
    37.40s  agent 발화 끝
