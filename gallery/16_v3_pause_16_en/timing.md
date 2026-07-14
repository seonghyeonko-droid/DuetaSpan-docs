# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "David",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "car",
#       "text": "User drives no car — uses car-sharing."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "dislike",
#       "text": "User can't stand licorice."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-01-06",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in December."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "bloodtype",
#       "text": "User's blood type is B-."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-25",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     },
#     {
#       "date": "2026-06-03",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot next Tuesday",
#         "prefers Dr. Han at Bright Smile Clinic"
#       ]
#     },
#     {
#       "date": "2026-03-26",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just wondering…… | S2 …that’s interesting. I’ve heard At | S3 …was a big deal too. | S4 That's good to know. Thanks, Fruna

     0.00s  user  발화 시작: I was just wondering……
     1.62s  user  발화 시작: …when did home video games really start to become popular?
     1.62s  user  발화 끝
     5.39s  <ret> 발화 (turn2 첫 프레임)
     5.66s  agent 발화 시작: <ret> [happy] Well, it sounds like you're curious about the 
     5.66s  user  발화 끝
     6.72s  ⚡SPAN 주입 [d'=1.33s / d_lead=14.96s]: The first home video game console, the Magnavox Odyssey, was released 
    20.61s  user  발화 시작: Wow.
    20.61s  agent 발화 끝
    21.02s  user  발화 시작: …that’s interesting. I’ve heard Atari…
    21.02s  user  발화 끝
    23.04s  user  발화 시작: …was a big deal too.
    23.04s  user  발화 끝
    24.57s  <ret> 발화 (turn6 첫 프레임)
    25.06s  agent 발화 시작: <ret> You’re right to mention Atari! They were founded in ni
    25.06s  user  발화 끝
    25.27s  ⚡SPAN 주입 [d'=0.70s / d_lead=15.36s]: Atari was founded in 1972 and rose to prominence with the release of P
    40.42s  user  발화 시작: That's good to know. Thanks, Frunas.
    40.42s  agent 발화 끝
    42.84s  user  발화 끝
