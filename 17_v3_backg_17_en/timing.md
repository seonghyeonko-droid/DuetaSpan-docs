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

# EXAMINER(FDB-v2) 단계: S1 What is the average heart rate of  | S2 …and then the dog just started bar | S3 So, fifty to ninety is a good gene | S4 That’s reassuring. Thanks, Eus.

     0.00s  user  발화 시작: What is the average heart rate of a healthy person?
     2.10s  <ret> 발화 (turn1 첫 프레임)
     2.49s  user  발화 끝
     2.50s  agent 발화 시작: <ret> A healthy person’s heart typically beats between sixty
     4.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.86s]: A normal resting heart rate for adults ranges from 60 to 100 bpm.
     9.36s  agent 발화 끝
     9.54s  user  발화 시작: That seems… high. Is there a lower range for athletes?
    12.88s  <ret> 발화 (turn3 첫 프레임)
    13.12s  agent 발화 시작: <ret> Actually, for athletes, a resting heart rate can go as
    13.19s  user  발화 끝
    14.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.41s]: Well-trained athletes may have a resting heart rate as low as 40 bpm.
    20.53s  agent 발화 끝
    21.19s  user  발화 시작: …and then the dog just started barking at the mailman!
    23.96s  user  발화 끝
    24.00s  user  발화 시작: So, fifty to ninety is a good general range then?
    26.54s  <ret> 발화 (turn6 첫 프레임)
    26.85s  agent 발화 시작: <ret> Yes, fifty to ninety beats per minute is a very health
    27.05s  user  발화 끝
    28.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.42s]: A normal resting heart rate generally falls between 60 and 100 bpm, th
    34.18s  user  발화 시작: That’s reassuring. Thanks, Eus.
    34.27s  agent 발화 끝
    36.02s  agent 발화 시작: You’re very welcome. I’m glad I could put your mind at ease.
    36.16s  user  발화 끝
    39.53s  agent 발화 끝
