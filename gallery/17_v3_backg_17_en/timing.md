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

# EXAMINER(FDB-v2) 단계: S1 What is the average heart rate of  | S2 Oh, that's higher than I thought. | S3 Did you see the game last night? W | S4 Well, what’s considered a low hear

     0.00s  user  발화 시작: What is the average heart rate of a healthy person?
     2.24s  <ret> 발화 (turn1 첫 프레임)
     2.54s  user  발화 끝
     2.63s  agent 발화 시작: <ret> A healthy adult typically has a resting heart rate bet
     4.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.09s]: A normal resting heart rate for adults ranges from sixty to one hundre
     9.72s  agent 발화 끝
     9.80s  user  발화 시작: Oh, that's higher than I thought.
    11.41s  user  발화 끝
    11.52s  agent 발화 시작: It can be surprising! Heart rate varies a lot depending on f
    17.07s  agent 발화 끝
    17.75s  user  발화 시작: Did you see the game last night? What a finish!
    20.34s  user  발화 끝
    20.40s  agent 발화 시작: So, are you curious about what might affect *your* heart rat
    24.24s  user  발화 시작: Well, what’s considered a low heart rate then?
    24.32s  agent 발화 끝
    26.12s  <ret> 발화 (turn7 첫 프레임)
    26.27s  agent 발화 시작: <ret> Generally, a heart rate below sixty beats per minute i
    26.45s  user  발화 끝
    28.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.74s]: A heart rate below sixty beats per minute is generally considered low 
    34.01s  agent 발화 끝
