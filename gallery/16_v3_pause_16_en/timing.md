# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Avery",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-17",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "home",
#       "text": "User's home address is 228 Oak Avenue."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-21",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was wondering… what’s the fastes | S2 Let's say… under sixty thousand do | S3 …about something a little more pra | S4 Maybe. I need to find a good Korea

     0.00s  user  발화 시작: I was wondering… what’s the fastest car?
     2.75s  <ret> 발화 (turn1 첫 프레임)
     3.02s  agent 발화 시작: <ret> Well, that’s a fun question! The Koenigsegg Agera RS i
     3.02s  user  발화 끝
     4.08s  ⚡SPAN 주입 [d'=1.33s / d_lead=12.94s]: The Koenigsegg Agera RS is the world’s fastest production car, with a 
    15.96s  user  발화 시작: Yeah.
    15.96s  agent 발화 끝
    16.39s  user  발화 시작: Two hundred seventy-seven… wow. What…
    16.39s  user  발화 끝
    18.55s  user  발화 시작: …about a more affordable fast car?
    18.55s  user  발화 끝
    21.14s  agent 발화 시작: Yeah.
    21.14s  user  발화 끝
    21.57s  agent 발화 시작: [curious] That’s a good point. Fast doesn’t always mean astr
    21.57s  agent 발화 끝
    28.90s  user  발화 시작: Let's say… under sixty thousand dollars?
    28.90s  agent 발화 끝
    31.05s  <ret> 발화 (turn8 첫 프레임)
    31.49s  agent 발화 시작: <ret> Many people consider the 2024 Chevrolet Corvette Sting
    31.49s  user  발화 끝
    31.74s  ⚡SPAN 주입 [d'=0.70s / d_lead=17.69s]: (tool result) The 2024 Chevrolet Corvette Stingray is often cited as o
    49.18s  user  발화 시작: Slightly… hmm. Are there any electric cars that are quick?
    49.18s  agent 발화 끝
    53.49s  agent 발화 시작: Right.
    53.49s  user  발화 끝
    53.88s  <ret> 발화 (turn11 첫 프레임)
    53.92s  agent 발화 시작: <ret> The Tesla Model S Plaid is currently the quickest prod
    53.92s  agent 발화 끝
    53.98s  ⚡SPAN 주입 [d'=1.06s / d_lead=15.53s]: (tool result) The Tesla Model S Plaid is currently the quickest produc
    69.45s  user  발화 시작: Yeah.
    69.45s  agent 발화 끝
    69.88s  user  발화 시작: That’s… incredible. What…
    69.88s  user  발화 끝
    71.18s  user  발화 시작: …about something a little more practical? I need space.
    71.18s  user  발화 끝
    74.80s  <ret> 발화 (turn15 첫 프레임)
    75.00s  ⚡SPAN 주입 [d'=0.74s / d_lead=15.53s]: (tool result) The Porsche Cayenne Turbo GT is the fastest SUV currentl
    75.06s  agent 발화 시작: <ret> The Porsche Cayenne Turbo GT is currently the fastest 
    75.06s  user  발화 끝
    90.59s  user  발화 시작: Mm-hmm.
    90.59s  agent 발화 끝
    91.02s  user  발화 시작: Porsche… those are nice. What’s the weather like in Seoul ri
    91.02s  user  발화 끝
    96.19s  <ret> 발화 (turn19 첫 프레임)
    96.20s  agent 발화 시작: Mhm.
    96.20s  user  발화 끝
    96.49s  ⚡SPAN 주입 [d'=0.30s / d_lead=11.65s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    96.63s  agent 발화 시작: <ret> It’s twenty-three point zero degrees Celsius in Seoul,
    96.63s  agent 발화 끝
   108.28s  user  발화 시작: Sounds nice. I’m thinking of visiting next week…
   108.28s  agent 발화 끝
   111.73s  agent 발화 시작: That sounds lovely! Seoul is a wonderful city. Are you plann
   111.73s  user  발화 끝
   117.77s  user  발화 시작: Maybe. I need to find a good Korean restaurant there.
   117.77s  agent 발화 끝
   121.87s  <ret> 발화 (turn23 첫 프레임)
   122.02s  ⚡SPAN 주입 [d'=0.61s / d_lead=9.49s]: (tool result) Gaon is a Michelin three-star Korean restaurant in Seoul
   122.08s  agent 발화 시작: <ret> Gaon is a Michelin three-star restaurant in Seoul, and
   122.08s  user  발화 끝
   131.57s  user  발화 시작: Yeah.
   131.57s  agent 발화 끝
   132.00s  user  발화 시작: Gaon… sounds fancy. How much does a meal there cost?
   132.00s  user  발화 끝
   136.17s  <ret> 발화 (turn26 첫 프레임)
   136.32s  agent 발화 시작: <ret> Tasting menus at Gaon range from three hundred thousan
   136.32s  user  발화 끝
   136.90s  ⚡SPAN 주입 [d'=0.73s / d_lead=10.35s]: (tool result) Gaon offers tasting menus ranging from ₩300,000 to ₩500,
   146.67s  user  발화 시작: Wow, that's… quite a bit. I think I’ll look for something a 
   146.67s  agent 발화 끝
   153.14s  agent 발화 시작: Yeah, yeah.
   153.14s  user  발화 끝
   154.00s  agent 발화 시작: That’s perfectly sensible. There are countless wonderful, mo
   154.00s  agent 발화 끝
   162.20s  agent 발화 끝
