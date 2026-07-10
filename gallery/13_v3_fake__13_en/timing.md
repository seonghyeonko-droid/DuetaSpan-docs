# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Nina",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-06-10",
#       "category": "home",
#       "text": "User's home address is 588 Cedar Lane."
#     },
#     {
#       "date": "2026-03-29",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-09-16",
#       "category": "work",
#       "text": "User works as a nurse."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-30",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey Darix, do you know who plays J | S2 That’s cool. | S3 Oh, *High School Musical*! I loved | S4 …like in LA today?

     0.00s  user  발화 시작: Hey Darix, do you know who plays Joey Parker in *Another Cin
     5.21s  <ret> 발화 (turn1 첫 프레임)
     5.27s  user  발화 끝
     5.44s  agent 발화 시작: <ret> Oh, that's a fun movie! Drew Seeley is the actor who b
     5.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.33s]: Drew Seeley played the role of Joey Parker in the 2004 film *Another C
    10.77s  agent 발화 끝
    10.79s  user  발화 시작: That's right! I always liked that movie. Um, what about Sele
    15.69s  agent 발화 시작: Selena, as in Selena Gomez? She played the title role, Cinde
    15.79s  user  발화 끝
    18.44s  user  발화 시작: Mm-hmm.
    19.03s  user  발화 끝
    20.52s  user  발화 시작: Yes! That's her. Do you think she's still acting?
    20.83s  agent 발화 끝
    23.84s  <ret> 발화 (turn6 첫 프레임)
    24.15s  agent 발화 시작: <ret> [happy] Absolutely! Selena has had a really successful
    24.16s  ⚡SPAN 주입(IRRELEVANT) [d'=0.56s / d_lead=6.89s]: The current temperature in Ulaanbaatar, Mongolia is 18.3°C, with clear
    24.22s  user  발화 끝
    31.05s  agent 발화 끝
    31.06s  user  발화 시작: That’s cool.
    32.07s  user  발화 끝
    32.20s  agent 발화 시작: It really is! She's a very talented artist, and always seems
    34.84s  user  발화 시작: Yeah.
    35.47s  user  발화 끝
    38.14s  agent 발화 시작: I think it's wonderful when people pursue their passions, li
    38.31s  agent 발화 끝
    44.26s  agent 발화 끝
    46.27s  user  발화 시작: Totally. Hey, can you find me some movies with Drew Seeley?
    49.73s  <ret> 발화 (turn12 첫 프레임)
    49.83s  user  발화 끝
    49.97s  agent 발화 시작: <ret> Drew Seeley also starred in *High School Musical*, *Ca
    49.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.60s]: (tool result) Drew Seeley has appeared in films such as *High School M
    55.48s  user  발화 시작: Oh, *High School Musical*! I loved that one too.
    55.56s  agent 발화 끝
    58.98s  agent 발화 시작: *High School Musical* is a classic! It's so heartwarming and
    59.08s  user  발화 끝
    63.61s  agent 발화 끝
    64.72s  user  발화 시작: It really is. What's the weather…
    67.31s  user  발화 끝
    68.87s  user  발화 시작: …like in LA today?
    70.17s  <ret> 발화 (turn17 첫 프레임)
    70.49s  agent 발화 시작: <ret> It's currently 24.4 degrees Celsius in Los Angeles, wi
    70.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.23s]: (tool result) 24.4°C, humidity 62%, wind 7.7 km/h
    70.57s  user  발화 끝
    74.69s  user  발화 시작: Yeah.
    75.27s  user  발화 끝
    77.72s  agent 발화 끝
    77.89s  user  발화 시작: Nice! Thanks, Darix.
    79.74s  agent 발화 시작: You're very welcome! I'm glad I could help. Remember, you've
    79.82s  user  발화 끝
    84.09s  agent 발화 끝
