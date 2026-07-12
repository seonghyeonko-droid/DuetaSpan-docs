# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Riley",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-09-26",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-08-21",
#       "category": "work",
#       "text": "User works as a chef."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-14",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-20",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey, who was the quarterback for t | S2 Yeah, I guess so. Hey, quick quest | S3 Sorry, what were you saying about  | S4 Hmm, Ulele sounds interesting. Can

     0.00s  user  발화 시작: Hey, who was the quarterback for the Buccaneers when they wo
     4.65s  <ret> 발화 (turn1 첫 프레임)
     4.89s  agent 발화 시작: <ret> That would be Brad Johnson, actually. He led the Tampa
     4.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.43s]: Brad Johnson quarterbacked the Tampa Bay Buccaneers to a 48–21 victory
     4.89s  user  발화 끝
    14.32s  user  발화 시작: Oh, okay. Um, what about Tom Brady? How many Super Bowls did
    14.32s  agent 발화 끝
    19.85s  <ret> 발화 (turn3 첫 프레임)
    20.25s  agent 발화 시작: <ret> Tom Brady won one Super Bowl with the Buccaneers, a 31
    20.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.73s]: Tom Brady won one Super Bowl with the Tampa Bay Buccaneers, leading th
    20.25s  user  발화 끝
    28.98s  user  발화 시작: Yeah, totally.
    28.98s  agent 발화 끝
    29.68s  agent 발화 시작: It’s wonderful how a strong quarterback can truly elevate a 
    29.68s  user  발화 끝
    34.92s  user  발화 시작: Mm-hmm.
    34.92s  agent 발화 끝
    35.26s  user  발화 시작: Yeah, I guess so. Hey, quick question—what’s the weather lik
    35.26s  user  발화 끝
    39.83s  <ret> 발화 (turn8 첫 프레임)
    40.15s  agent 발화 시작: <ret> Currently in Tampa, it’s 31.1°C, with humidity at 78% 
    40.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.03s]: (tool result) Temperature: 31.1°C, Humidity: 78%, Wind: 8.2 km/h, Cond
    40.15s  user  발화 끝
    48.18s  user  발화 시작: Oh, that sounds nice…
    48.18s  agent 발화 끝
    49.58s  user  발화 시작: Sorry, what were you saying about the humidity?
    49.58s  user  발화 끝
    52.37s  agent 발화 시작: I was just sharing the current conditions in Tampa—the humid
    52.37s  user  발화 끝
    60.75s  user  발화 시작: Oh, right. Can you find me some good restaurants nearby?
    60.75s  agent 발화 끝
    63.84s  <ret> 발화 (turn13 첫 프레임)
    64.24s  agent 발화 시작: <ret> I found a few options for you: Columbia Restaurant, Be
    64.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.28s]: (tool result) Columbia Restaurant, Bern's Steak House, Ulele, Rooster 
    64.24s  user  발화 끝
    70.53s  user  발화 시작: Hmm, Ulele sounds interesting. Can you tell me more about th
    70.53s  agent 발화 끝
    74.32s  <ret> 발화 (turn15 첫 프레임)
    74.72s  agent 발화 시작: <ret> Ulele is located on the Tampa Riverwalk, offering a me
    74.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.38s]: Ulele is a restaurant located on the Tampa Riverwalk, offering a menu 
    74.72s  user  발화 끝
    83.10s  agent 발화 끝
