# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "William",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-11",
#       "category": "coffee",
#       "text": "User's usual coffee order is black drip coffee."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "phone",
#       "text": "User uses an Xperia 1."
#     },
#     {
#       "date": "2026-04-26",
#       "category": "show",
#       "text": "User is currently watching a sci-fi series."
#     },
#     {
#       "date": "2026-04-14",
#       "category": "home",
#       "text": "User's home address is 251 Birch Road."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Greek."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "emergency",
#       "text": "User's emergency contact is Daniel."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-27",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     },
#     {
#       "date": "2026-03-01",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     },
#     {
#       "date": "2026-02-23",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey Giar, I was thinking about Sta | S2 Definitely. I'm actually planning  | S3 I'm still figuring it out. I might | S4 True, the chemistry was always the

     0.00s  user  발화 시작: Hey Giar, I was thinking about Star Wars. Do you remember wh
     5.49s  <ret> 발화 (turn1 첫 프레임)
     6.09s  agent 발화 시작: <ret> Let me think... I'm pretty sure it happens in the thir
     6.30s  user  발화 끝
     7.11s  ⚡SPAN 주입 [d'=1.62s / d_lead=3.89s]: Leia learns that Luke is her brother in Return of the Jedi.
    10.87s  user  발화 시작: Yeah.
    11.40s  user  발화 끝
    12.58s  agent 발화 끝
    12.74s  user  발화 시작: Right, I knew it was the third one. Was it a sudden reveal?
    16.12s  user  발화 끝
    16.13s  agent 발화 시작: [happy] Yeah, it's a really sweet moment. It adds so much em
    23.38s  user  발화 시작: Definitely. I'm actually planning a little themed trip to so
    23.50s  agent 발화 끝
    25.61s  agent 발화 시작: Mm-hmm.
    26.43s  agent 발화 끝
    27.81s  agent 발화 시작: That sounds like a blast! Just make sure you don't overpack.
    27.91s  user  발화 끝
    31.39s  user  발화 시작: Right.
    32.10s  user  발화 끝
    36.99s  agent 발화 끝
    37.01s  user  발화 시작: Good tip. I'll keep that in mind.
    39.03s  <ret> 발화 (turn10 첫 프레임)
    39.31s  user  발화 끝
    39.33s  agent 발화 시작: <ret> [curious] Do you already have a list of locations you 
    39.70s  ⚡SPAN 주입(IRRELEVANT) [d'=0.66s / d_lead=6.20s]: The current temperature in Reykjavik, Iceland is 42 degrees Fahrenheit
    42.53s  user  발화 시작: Okay.
    43.17s  user  발화 끝
    45.38s  user  발화 시작: I'm still figuring it out. I might visit some Tunisian sites
    45.53s  agent 발화 끝
    49.27s  user  발화 끝
    49.35s  agent 발화 시작: Tunisia is stunning. If you go, just remember to pace your i
    55.82s  user  발화 시작: ...Wait, did Leia know before the third movie?
    56.58s  agent 발화 끝
    58.60s  user  발화 끝
    58.73s  agent 발화 시작: [curious] No, she didn't. She only finds out in Return of th
    65.21s  user  발화 시작: True, the chemistry was always there.
    65.54s  agent 발화 끝
    67.25s  agent 발화 시작: Exactly. It makes the eventual reveal feel earned rather tha
    67.38s  user  발화 끝
    73.09s  agent 발화 끝
    73.86s  user  발화 시작: I agree. I'll let you know once I finalize my travel dates.
    77.19s  agent 발화 시작: [happy] I'd love that! I'm here whenever you need help balan
    77.37s  user  발화 끝
    81.40s  agent 발화 끝
