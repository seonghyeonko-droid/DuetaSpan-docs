# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Noa",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "mid 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "music",
#       "text": "User likes listening to 90s hip-hop."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "wake",
#       "text": "User usually wakes up at 5:30am for a run."
#     },
#     {
#       "date": "2026-04-19",
#       "category": "sibling",
#       "text": "User has a younger sibling named Kenji."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "anniversary",
#       "text": "User's anniversary is March 9."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "schedule",
#       "text": "User has flexible hours."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "partner",
#       "text": "User's partner is named Haruto."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "airline",
#       "text": "User usually flies with Singapore Airlines."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "gym",
#       "text": "User has a gym membership near home."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "skill",
#       "text": "User is getting fairly good at salsa dancing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-13",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     },
#     {
#       "date": "2026-02-02",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     },
#     {
#       "date": "2025-12-04",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey Giar… | S2 No, just curious. I'm thinking of  | S3 That's good to know. I was also wo | S4 …Actually, would flying into Flore

     0.00s  user  발화 시작: Hey Giar…
     1.00s  user  발화 끝
     2.18s  user  발화 시작: …what day of the week was August thirteenth, two thousand si
     5.86s  <ret> 발화 (turn2 첫 프레임)
     6.46s  ⚡SPAN 주입 [d'=0.60s / d_lead=4.66s]: August 13, 2016 was a Saturday.
     6.49s  user  발화 끝
     6.52s  agent 발화 시작: <ret> August thirteenth, two thousand sixteen was a Saturday
    11.19s  agent 발화 끝
    11.76s  user  발화 시작: No, just curious. I'm thinking of a trip to Italy next year 
    12.79s  agent 발화 시작: Yeah.
    13.37s  agent 발화 끝
    14.98s  user  발화 끝
    15.43s  agent 발화 시작: Italy sounds lovely! A well-paced trip is key. Have you thou
    21.26s  agent 발화 끝
    23.29s  user  발화 시작: Maybe sometime in September.
    24.08s  <ret> 발화 (turn7 첫 프레임)
    24.93s  agent 발화 시작: <ret> In Rome, the average temperature in September is twent
    25.04s  user  발화 끝
    25.23s  ⚡SPAN 주입 [d'=1.15s / d_lead=3.97s]: The average temperature in Rome, Italy in September is 22 degrees Cels
    27.00s  user  발화 시작: Mm-hmm.
    27.35s  user  발화 끝
    28.89s  agent 발화 끝
    29.63s  user  발화 시작: That's good to know. I was also wondering about flights.
    32.04s  <ret> 발화 (turn10 첫 프레임)
    32.58s  agent 발화 시작: <ret> One-way flights from New York to Rome on September fif
    32.62s  user  발화 끝
    32.64s  ⚡SPAN 주입 [d'=0.60s / d_lead=6.95s]: (tool result) One-way flights from New York to Rome on September fifte
    39.53s  agent 발화 끝
    39.69s  user  발화 시작: That’s a bit pricey. Maybe I should look at round trip?
    41.87s  <ret> 발화 (turn12 첫 프레임)
    42.69s  user  발화 끝
    43.00s  ⚡SPAN 주입 [d'=1.13s / d_lead=6.57s]: (tool result) Roundtrip flights from New York to Rome, departing Septe
    43.06s  agent 발화 시작: <ret> Roundtrip flights, departing September fifteenth and r
    48.86s  user  발화 시작: …Actually, would flying into Florence be cheaper?
    49.64s  agent 발화 끝
    51.30s  <ret> 발화 (turn14 첫 프레임)
    51.77s  user  발화 끝
    51.82s  agent 발화 시작: <ret> That's a smart idea! Florence is often a little less e
    52.52s  ⚡SPAN 주입 [d'=1.22s / d_lead=5.28s]: (tool result) Roundtrip flights from New York to Florence, departing S
    57.09s  <ret> 발화 (turn15 첫 프레임)
    57.09s  agent 발화 끝
    57.14s  agent 발화 시작: <ret> Roundtrip flights to Florence, departing September fif
    58.59s  ⚡SPAN 주입(IRRELEVANT) [d'=1.50s / d_lead=8.62s]: The current exchange rate between the Euro and the US Dollar is 0.92.
    65.67s  agent 발화 시작: It looks like Florence is a bit more affordable! Are you lea
    65.76s  agent 발화 끝
    69.55s  agent 발화 끝
