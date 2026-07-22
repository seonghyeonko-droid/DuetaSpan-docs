# v3_chain_06_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "Jack",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "late 40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "coffee",
#       "text": "User's usual coffee order is a caramel latte."
#     },
#     {
#       "date": "2026-04-26",
#       "category": "streaming",
#       "text": "User subscribes to Apple Music and Coupang Play."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "home",
#       "text": "User's home address is 899 Cedar Lane."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-02-16",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in July."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "music",
#       "text": "User likes listening to a lo-fi jazz playlist."
#     },
#     {
#       "date": "2026-01-23",
#       "category": "wake",
#       "text": "User usually wakes up around 7:30am."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-03",
#       "title": "Training for a 10K",
#       "bullets": [
#         "current pace is around 6 minutes per km",
#         "race is in November"
#       ]
#     },
#     {
#       "date": "2026-04-23",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     },
#     {
#       "date": "2026-04-20",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2026-04-05",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Zellal, I'm taking my daughter  | S2 Let's do the Lamb BBQ. Can you boo | S3 Perfect. Actually, what's the weat | S4 Wait, is it going to rain?

     0.00s  user  발화 시작: Hi Zellal, I'm taking my daughter on a bike ride. How long i
     2.04s  agent 발화 시작: Okay.
     2.85s  agent 발화 끝
     6.07s  <ret> 발화 (turn2 첫 프레임)
     6.32s  agent 발화 시작: <ret> That sounds like a lovely way to bond. The bike ride i
     6.48s  user  발화 끝
     7.40s  ⚡SPAN 주입 [d'=1.32s / d_lead=2.69s]: (tool result) Distance: 1.2 kilometers. Estimated time: 6 minutes.
     9.41s  user  발화 시작: Mhm.
     9.87s  user  발화 끝
    14.06s  agent 발화 끝
    15.40s  user  발화 시작: Great. Since we'll be there, can you find some highly-rated 
    19.42s  <ret> 발화 (turn5 첫 프레임)
    19.95s  agent 발화 시작: <ret> I found two great spots: Muslim Quarter Lamb BBQ with 
    19.98s  user  발화 끝
    20.21s  ⚡SPAN 주입 [d'=0.79s / d_lead=8.53s]: (tool result) Top rated: Muslim Quarter Lamb BBQ (4.8 stars), Silk Roa
    26.39s  user  발화 시작: Yeah.
    26.80s  user  발화 끝
    28.48s  agent 발화 끝
    28.51s  user  발화 시작: Let's do the Lamb BBQ. Can you book a table for two at six p
    32.08s  <ret> 발화 (turn8 첫 프레임)
    32.38s  agent 발화 시작: <ret> I'll handle that for you. All set! Your table for two 
    32.54s  user  발화 끝
    33.65s  ⚡SPAN 주입 [d'=1.57s / d_lead=1.79s]: (tool result) Reservation confirmed for Muslim Quarter Lamb BBQ at 18:
    39.78s  user  발화 시작: Perfect. Actually, what's the weather like there for this ev
    39.88s  agent 발화 끝
    42.82s  <ret> 발화 (turn10 첫 프레임)
    43.21s  agent 발화 시작: <ret> It's looking sunny for today, July tenth, with a high 
    43.29s  user  발화 끝
    43.77s  ⚡SPAN 주입 [d'=0.95s / d_lead=6.11s]: (tool result) Friday, July 10: Sunny, high 31 degrees Celsius, low 22 
    49.32s  user  발화 시작: Wait, is it going to rain?
    49.32s  agent 발화 끝
    50.97s  agent 발화 시작: [happy] Not at all! The forecast is clear, so it's a perfect
    51.07s  user  발화 끝
    56.76s  agent 발화 끝
