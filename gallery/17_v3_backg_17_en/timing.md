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

# EXAMINER(FDB-v2) 단계: S1 What is the average heart rate of  | S2 Did you see the game last night? W | S3 Hmm, fifty sounds good. I'm not an | S4 Okay, that makes me feel better. T

     0.00s  user  발화 시작: What is the average heart rate of a healthy person?
     2.01s  <ret> 발화 (turn1 첫 프레임)
     2.40s  user  발화 끝
     2.41s  agent 발화 시작: <ret> A healthy adult generally has a resting heart rate bet
     4.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.93s]: A normal resting heart rate for adults ranges from 60 to 100 bpm.
    10.33s  agent 발화 끝
    10.50s  user  발화 시작: Oh, that's higher than I thought. Is there a lower acceptabl
    13.33s  <ret> 발화 (turn3 첫 프레임)
    13.46s  user  발화 끝
    13.57s  agent 발화 시작: <ret> It can actually be lower, around fifty beats per minut
    15.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.34s]: A healthy heart rate can be as low as 50 bpm in well-trained athletes.
    21.91s  agent 발화 끝
    22.59s  user  발화 시작: Did you see the game last night? What a finish!
    25.22s  user  발화 끝
    25.26s  user  발화 시작: Hmm, fifty sounds good. I'm not an athlete though.
    27.72s  <ret> 발화 (turn6 첫 프레임)
    28.03s  agent 발화 시작: <ret> For most people, sixty to eighty beats per minute is a
    28.27s  user  발화 끝
    29.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.56s]: For most adults, a resting heart rate of 60 to 80 bpm is considered no
    35.53s  user  발화 시작: Okay, that makes me feel better. Thanks, Eus.
    35.59s  agent 발화 끝
    38.06s  agent 발화 시작: You’re very welcome.
    38.12s  user  발화 끝
    39.39s  agent 발화 끝
