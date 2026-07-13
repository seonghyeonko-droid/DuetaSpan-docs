# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Taylor",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-30",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-07-23",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-21",
#       "category": "home",
#       "text": "User's home address is 575 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-03",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Barien, how are you today? | S2 So, it was a Civil War thing then? | S3 So, it was actually *challenged* a | S4 That's true. What's the weather…

     0.00s  user  발화 시작: Hi Barien, how are you today?
     2.22s  agent 발화 시작: I’m doing wonderfully, thank you for asking. It’s a lovely d
     2.22s  user  발화 끝
     9.24s  user  발화 시작: Maybe later. I was wondering… when did “In God We Trust” fir
     9.24s  agent 발화 끝
    14.76s  <ret> 발화 (turn3 첫 프레임)
    15.16s  agent 발화 시작: <ret> The United States first authorized the use of “In God 
    15.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=14.42s]: The United States first authorized the use of “In God We Trust” on coi
    15.16s  user  발화 끝
    29.58s  user  발화 시작: 1864? Wow, that’s… earlier than I expected. Was that during 
    29.58s  agent 발화 끝
    33.62s  <ret> 발화 (turn5 첫 프레임)
    34.02s  agent 발화 시작: <ret> Yes, Abraham Lincoln was president from March fourth, 
    34.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.61s]: Abraham Lincoln was president of the United States from March 4, 1861,
    34.02s  user  발화 끝
    43.63s  user  발화 시작: Right.
    43.63s  agent 발화 끝
    44.00s  user  발화 시작: So, it was a Civil War thing then? Like a patriotic response
    44.00s  user  발화 끝
    48.44s  agent 발화 시작: It seems to have been a response to the increasing seculariz
    48.44s  user  발화 끝
    58.80s  user  발화 시작: Hmm. I wonder if there was much debate about it back then?
    58.80s  agent 발화 끝
    62.83s  <ret> 발화 (turn10 첫 프레임)
    63.23s  agent 발화 시작: <ret> While the phrase appeared on coins in eighteen sixty-f
    63.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.66s]: Although the phrase "In God We Trust" appeared on coins in 1864, it wa
    63.23s  user  발화 끝
    69.89s  user  발화 시작: …but wasn’t that a really divisive issue even in the fifties
    69.89s  agent 발화 끝
    76.10s  <ret> 발화 (turn12 첫 프레임)
    76.18s  agent 발화 시작: <ret> The nineteen fifty-eight Supreme Court case *Blau v. F
    76.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.20s]: In 1958, the Supreme Court case *Blau v. Fortier* upheld the constitut
    76.18s  user  발화 끝
    88.38s  user  발화 시작: So, it was actually *challenged* all the way to the Supreme 
    88.38s  agent 발화 끝
    92.82s  agent 발화 시작: Yes, it was. It’s interesting how legal interpretations can 
    92.82s  user  발화 끝
   101.69s  user  발화 시작: What about other countries? Do they have similar mottos on t
   101.69s  agent 발화 끝
   106.05s  <ret> 발화 (turn16 첫 프레임)
   106.13s  agent 발화 시작: <ret> Many nations include mottos on their currency, such as
   106.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=14.42s]: (tool result) Many nations include national mottos on their currency, 
   106.13s  user  발화 끝
   120.55s  user  발화 시작: “Dieu et mon droit”? That sounds… very regal.
   120.55s  agent 발화 끝
   123.51s  agent 발화 시작: It does, doesn’t it? It reflects a long tradition of monarch
   123.51s  user  발화 끝
   131.64s  user  발화 시작: That's true. What's the weather…
   131.64s  agent 발화 끝
   133.49s  user  발화 시작: …like in London right now?
   133.49s  user  발화 끝
   135.10s  <ret> 발화 (turn21 첫 프레임)
   135.34s  agent 발화 시작: <ret> The weather in London is twenty-one point zero degrees
   135.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.68s]: (tool result) London: 21.0°C, humidity 68%, wind 8.2 km/h, condition: 
   135.34s  user  발화 끝
   149.02s  user  발화 시작: Sounds nice. Thanks, Barien.
   149.02s  agent 발화 끝
   150.50s  agent 발화 시작: You are very welcome. Remember to take a few moments for you
   150.50s  user  발화 끝
   160.86s  agent 발화 끝
