# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "David",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-05",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just listening to Mamma Mia  | S2 Do you know if he wrote any other  | S3 Wow, so it was a real collaboratio | S4 It is. I’m trying to find some goo

     0.00s  user  발화 시작: I was just listening to Mamma Mia and I’m wondering, who wro
     7.00s  user  발화 끝
     7.03s  <ret> 발화 (turn1 첫 프레임)
     7.27s  agent 발화 시작: <ret> That’s a lovely song to ask about. It really captures 
     9.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.72s]: [source: Wikipedia] “My Love, My Life” was written by Björn Ulvaeus.
    11.98s  agent 발화 시작: Björn Ulvaeus wrote “My Love, My Life” for the musical *Mamm
    11.99s  agent 발화 끝
    16.51s  agent 발화 끝
    16.96s  user  발화 시작: Oh, Björn Ulvaeus! I knew he was involved with ABBA, but I d
    24.14s  user  발화 끝
    24.25s  agent 발화 시작: It’s common for songwriters to explore different creative av
    30.50s  user  발화 시작: Do you know if he wrote any other songs for Mamma Mia?
    30.60s  agent 발화 끝
    33.32s  <ret> 발화 (turn6 첫 프레임)
    33.71s  agent 발화 시작: <ret> Björn Ulvaeus, along with Benny Andersson, wrote all t
    33.87s  user  발화 끝
    35.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.09s]: [source: Mamma Mia! official website] Björn Ulvaeus and Benny Andersso
    38.80s  agent 발화 끝
    38.94s  user  발화 시작: Wow, so it was a real collaboration between the two of them.
    42.77s  <ret> 발화 (turn8 첫 프레임)
    43.09s  agent 발화 시작: <ret> A strong partnership can lead to wonderful results, an
    43.24s  user  발화 끝
    43.27s  ⚡SPAN 주입(IRRELEVANT) [d'=0.50s / d_lead=5.05s]: (tool result) AAPL: 170.34 USD +0.45 (0.26%)
    48.14s  agent 발화 끝
    48.23s  user  발화 시작: It sounds like settling into a new city can be a lot like co
    56.09s  agent 발화 시작: [happy] That’s a really insightful comparison. Finding your 
    56.25s  user  발화 끝
    58.63s  user  발화 시작: Yeah.
    59.12s  user  발화 끝
    62.16s  agent 발화 끝
    62.16s  user  발화 시작: It is. I’m trying to find some good live music venues, actua
    67.62s  user  발화 끝
    67.67s  agent 발화 시작: I can definitely help with that. To give you the best sugges
    74.15s  agent 발화 끝
