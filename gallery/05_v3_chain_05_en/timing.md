# v3_chain_05_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "Manon",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-06",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-16",
#       "category": "home",
#       "text": "User's home address is 473 Cedar Lane."
#     },
#     {
#       "date": "2025-06-05",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-06-02",
#       "category": "work",
#       "text": "User works as a software engineer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-01",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-09-28",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-09-25",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I want to find a house in Miami Fl | S2 Hmm, that’s not too bad. What abou | S3 Perfect! Let’s go back to the hous | S4 Wonderful! I think I’d like to sch

     0.00s  user  발화 시작: I want to find a house in Miami Florida with at least a thre
     4.77s  <ret> 발화 (turn1 첫 프레임)
     5.01s  agent 발화 시작: <ret> I found twelve houses in Miami Florida, averaging two 
     5.01s  ⚡SPAN 주입 [d'=1.52s / d_lead=7.92s]: (tool result) 12 results found. Average price: $250/night. Check-in: t
     5.14s  user  발화 끝
    12.94s  agent 발화 끝
    13.40s  user  발화 시작: That sounds good. Can you show me the cheapest one?
    16.01s  <ret> 발화 (turn3 첫 프레임)
    16.23s  agent 발화 시작: <ret> The most affordable is "Sunset View Villa", a three-st
    16.25s  ⚡SPAN 주입 [d'=0.50s / d_lead=8.81s]: The cheapest option is "Sunset View Villa", 3 stars, $180/night, 1 bed
    16.45s  user  발화 끝
    25.04s  agent 발화 끝
    25.07s  user  발화 시작: Is it near South Beach?
    26.54s  <ret> 발화 (turn5 첫 프레임)
    26.70s  agent 발화 시작: <ret> It’s six point two miles from South Beach, about a fif
    26.70s  ⚡SPAN 주입 [d'=1.20s / d_lead=5.09s]: (tool result) 6.2 miles, approximately 15 minutes by car.
    26.81s  user  발화 끝
    31.69s  user  발화 시작: Hmm, that’s not too bad. What about houses with a pool?
    31.78s  agent 발화 끝
    34.98s  <ret> 발화 (turn7 첫 프레임)
    35.21s  agent 발화 시작: <ret> I found eight houses with a pool, averaging three hund
    35.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.10s]: (tool result) 8 results found with a pool. Average price: $320/night.
    35.39s  user  발화 끝
    38.94s  user  발화 시작: Yeah.
    39.44s  user  발화 끝
    40.23s  agent 발화 시작: These options generally offer more space and privacy, which 
    40.31s  agent 발화 끝
    46.10s  user  발화 시작: …Actually, what's the weather like in Miami right now?
    46.86s  agent 발화 끝
    48.71s  <ret> 발화 (turn11 첫 프레임)
    49.10s  agent 발화 시작: <ret> Currently in Miami, it’s thirty point one degrees Cels
    49.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.82s]: (tool result) 30.1°C, humidity 78%, wind 8.2 km/h. Sunny.
    49.24s  user  발화 끝
    58.93s  agent 발화 끝
    59.21s  user  발화 시작: Perfect! Let’s go back to the houses with pools. Can you tel
    64.46s  <ret> 발화 (turn13 첫 프레임)
    64.62s  agent 발화 시작: <ret> "Ocean Breeze Estate" has a four point eight-star rati
    64.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.41s]: "Ocean Breeze Estate" has 4.8 stars, $400/night, 2 bedrooms, pool, kit
    64.72s  user  발화 끝
    73.82s  user  발화 시작: That sounds lovely. Could you show me some pictures of it?
    74.03s  agent 발화 끝
    76.94s  <ret> 발화 (turn15 첫 프레임)
    77.05s  user  발화 끝
    77.09s  agent 발화 시작: <ret> I found a gallery with pictures of "Ocean Breeze Estat
    77.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.04s]: (tool result) Ocean Breeze Estate, Miami Florida: A luxurious villa wi
    86.10s  user  발화 시작: Wonderful! I think I’d like to schedule a visit to see it.
    86.14s  agent 발화 끝
    89.09s  <ret> 발화 (turn17 첫 프레임)
    89.48s  user  발화 끝
    89.50s  agent 발화 시작: <ret> I’ve scheduled a visit for you to "Ocean Breeze Estate
    89.50s  ⚡SPAN 주입 [d'=1.76s / d_lead=9.69s]: (tool result) Visit scheduled for July 12, 2026, at 10:00 AM. Confirma
    92.87s  user  발화 시작: Right.
    93.64s  user  발화 끝
    99.04s  user  발화 시작: Great, thank you so much for your help.
    99.18s  agent 발화 끝
   101.16s  user  발화 끝
   101.32s  agent 발화 시작: You’re very welcome. Finding a space that feels right is so 
   112.12s  agent 발화 끝
