# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Taylor",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-16",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-12-27",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-10-10",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in March."
#     },
#     {
#       "date": "2025-09-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was wondering, how much did it c | S2 Maybe later. Was that the final co | S3 That’s… a risk. | S4 So, almost half the production cos

     0.00s  user  발화 시작: I was wondering, how much did it cost to make “Solo: A Star 
     4.29s  <ret> 발화 (turn1 첫 프레임)
     4.50s  agent 발화 시작: <ret> The production of “Solo: A Star Wars Story” cost aroun
     4.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.13s]: “Solo: A Star Wars Story” had a production budget of approximately $27
     4.72s  user  발화 끝
    15.63s  agent 발화 끝
    16.92s  user  발화 시작: Wow, that’s a lot of money.
    18.67s  <ret> 발화 (turn3 첫 프레임)
    18.91s  user  발화 끝
    18.91s  agent 발화 시작: <ret> It is a significant investment, yes. Film production c
    18.91s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=6.86s]: The average high temperature in Reykjavik, Iceland in July is 13.1°C, 
    25.61s  agent 발화 시작: I also assist with budgeting if you’d like to discuss managi
    25.77s  agent 발화 끝
    28.09s  user  발화 시작: Right.
    28.72s  user  발화 끝
    29.02s  user  발화 시작: Maybe later. Was that the final cost, or were there overruns
    29.73s  agent 발화 끝
    33.79s  <ret> 발화 (turn7 첫 프레임)
    33.87s  agent 발화 시작: <ret> There were reports of substantial reshoots, adding at 
    33.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.30s]: Reports indicate that “Solo” underwent extensive reshoots which added 
    33.88s  user  발화 끝
    36.44s  user  발화 시작: Oh.
    36.93s  user  발화 끝
    42.11s  user  발화 시작: So, over $300 million total then?
    42.17s  agent 발화 끝
    45.48s  user  발화 끝
    45.70s  agent 발화 시작: That is correct. The total cost rose above $300 million, fac
    49.05s  user  발화 시작: Uh-huh.
    49.64s  user  발화 끝
    53.08s  user  발화 시작: That’s… a risk.
    53.12s  agent 발화 끝
    54.56s  agent 발화 시작: It is a considerable financial commitment, and studios weigh
    54.70s  user  발화 끝
    61.28s  agent 발화 끝
    61.94s  user  발화 시작: What about marketing costs?
    63.56s  <ret> 발화 (turn15 첫 프레임)
    63.95s  agent 발화 시작: <ret> Marketing and distribution added around $180 million t
    63.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.53s]: Marketing and distribution costs for “Solo: A Star Wars Story” were es
    64.02s  user  발화 끝
    70.47s  agent 발화 끝
    71.05s  user  발화 시작: So, almost half the production cost again?
    74.07s  agent 발화 시작: It’s a significant amount, yes. Marketing is essential to re
    74.20s  user  발화 끝
    78.55s  user  발화 시작: Yeah, yeah.
    79.79s  user  발화 끝
    80.65s  agent 발화 끝
    80.82s  user  발화 시작: That’s incredible.
    82.22s  agent 발화 시작: It demonstrates the scale of investment involved in these la
    82.25s  user  발화 끝
    88.15s  agent 발화 끝
