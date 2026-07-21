# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Riley",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-07",
#       "category": "floor",
#       "text": "User lives on the 15th floor."
#     },
#     {
#       "date": "2026-05-05",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cappuccino with oat milk."
#     },
#     {
#       "date": "2026-03-22",
#       "category": "medication",
#       "text": "User takes an inhaler for asthma."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "dislike",
#       "text": "User can't stand liver."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "skill",
#       "text": "User is getting fairly good at birdwatching."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "employer",
#       "text": "User works at a media company."
#     },
#     {
#       "date": "2025-12-27",
#       "category": "diet",
#       "text": "User is halal."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-06",
#       "title": "Studying for the TOEIC",
#       "bullets": [
#         "target score is 850",
#         "exam is in about six weeks"
#       ]
#     },
#     {
#       "date": "2025-12-29",
#       "title": "Training for a 10K",
#       "bullets": [
#         "current pace is around 6 minutes per km",
#         "race is in November"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 When do you have the unity candle  | S2 …about other unity ceremonies? | S3 What colors of ribbons are typical | S4 Do you think it’s okay to mix trad

     0.00s  user  발화 시작: When do you have the unity candle ceremony?
     1.99s  <ret> 발화 (turn1 첫 프레임)
     2.59s  agent 발화 시작: <ret> It typically occurs immediately following the exchange
     2.68s  user  발화 끝
     3.61s  ⚡SPAN 주입 [d'=1.62s / d_lead=6.63s]: A unity candle ceremony typically occurs immediately following the cou
     9.22s  agent 발화 끝
     9.36s  user  발화 시작: And what does it symbolize, exactly?
    11.10s  <ret> 발화 (turn3 첫 프레임)
    11.64s  agent 발화 시작: <ret> It symbolizes the joining of two individuals’ lives, h
    11.74s  user  발화 끝
    11.76s  ⚡SPAN 주입 [d'=0.66s / d_lead=6.90s]: The unity candle ceremony symbolizes the joining of two individuals’ l
    16.34s  user  발화 시작: Uh-huh.
    16.82s  user  발화 끝
    18.50s  user  발화 시작: Are there different variations?
    18.54s  agent 발화 끝
    19.61s  <ret> 발화 (turn6 첫 프레임)
    20.15s  agent 발화 시작: <ret> Some couples involve family members lighting individua
    20.30s  user  발화 끝
    20.36s  ⚡SPAN 주입 [d'=0.75s / d_lead=6.02s]: Variations of the unity candle ceremony include family members lightin
    22.95s  user  발화 시작: Mm-hmm.
    23.39s  user  발화 끝
    26.16s  agent 발화 끝
    26.38s  user  발화 시작: That sounds nice. What…
    28.79s  user  발화 끝
    30.22s  user  발화 시작: …about other unity ceremonies?
    32.23s  <ret> 발화 (turn10 첫 프레임)
    32.48s  agent 발화 시작: <ret> There's sand blending, handfasting, even tree planting
    32.56s  user  발화 끝
    33.02s  ⚡SPAN 주입 [d'=0.79s / d_lead=4.11s]: Alternative unity ceremonies include sand blending, handfasting, wine 
    36.47s  <ret> 발화 (turn11 첫 프레임)
    36.59s  agent 발화 끝
    36.66s  agent 발화 시작: <ret> Alternative ceremonies include sand blending, handfast
    37.59s  ⚡SPAN 주입(IRRELEVANT) [d'=1.13s / d_lead=6.78s]: The average high temperature in Reykjavik, Iceland, on July 10th is 13
    43.43s  agent 발화 끝
    43.45s  agent 발화 시작: It's really about finding what resonates with you both.
    47.29s  user  발화 시작: I think we’d like something a little less… traditional.
    47.42s  agent 발화 끝
    48.44s  <ret> 발화 (turn15 첫 프레임)
    49.29s  agent 발화 시작: Mm-hmm.
    49.96s  agent 발화 끝
    50.06s  ⚡SPAN 주입 [d'=1.63s / d_lead=6.21s]: Handfasting, an ancient Celtic tradition, involves tying the couple’s 
    50.11s  agent 발화 시작: <ret> Handfasting, an ancient Celtic tradition, involves tyi
    50.16s  user  발화 끝
    53.90s  user  발화 시작: Right.
    54.48s  user  발화 끝
    56.31s  user  발화 시작: Tell me more about handfasting.
    56.32s  agent 발화 끝
    58.26s  <ret> 발화 (turn18 첫 프레임)
    58.33s  user  발화 끝
    58.34s  agent 발화 시작: <ret> It’s an old Celtic tradition, a beautiful way to symbo
    59.82s  ⚡SPAN 주입 [d'=1.57s / d_lead=5.66s]: Historically, handfasting was a trial marriage in Celtic tradition, no
    63.99s  agent 발화 시작: Historically, it was a trial marriage, now largely a symboli
    64.00s  agent 발화 끝
    69.75s  agent 발화 끝
    69.89s  user  발화 시작: What colors of ribbons are typical?
    71.42s  <ret> 발화 (turn21 첫 프레임)
    72.29s  user  발화 끝
    72.42s  ⚡SPAN 주입 [d'=1.00s / d_lead=8.71s]: Ribbon colors in handfasting hold symbolic meaning; red often represen
    72.48s  agent 발화 시작: <ret> Ribbon colors hold symbolic meaning; red represents pa
    81.09s  user  발화 시작: That’s interesting. Can you find some examples of handfastin
    81.19s  agent 발화 끝
    84.49s  <ret> 발화 (turn23 첫 프레임)
    85.56s  user  발화 끝
    85.59s  agent 발화 시작: <ret> I found three videos on YouTube: “Ancient Celtic Handf
    86.17s  ⚡SPAN 주입 [d'=1.69s / d_lead=10.06s]: (tool result) Found 3 videos related to “handfasting ceremony” on YouT
    95.65s  agent 발화 끝
    96.27s  user  발화 시작: The “Modern Handfasting Ceremony” sounds good.
   100.10s  agent 발화 시작: [curious] Wonderful! It might give you some good ideas.
   100.22s  user  발화 끝
   104.07s  agent 발화 끝
   104.15s  user  발화 시작: Do you think it’s okay to mix traditions? Like, unity candle
   106.27s  agent 발화 시작: Uh-huh.
   106.90s  agent 발화 끝
   109.04s  <ret> 발화 (turn28 첫 프레임)
   109.28s  user  발화 끝
   109.48s  agent 발화 시작: <ret> It’s increasingly common to combine elements from diff
   109.69s  ⚡SPAN 주입 [d'=0.65s / d_lead=6.57s]: Combining elements from different wedding traditions is increasingly c
   112.47s  user  발화 시작: Okay.
   113.05s  user  발화 끝
   115.99s  user  발화 시작: That's reassuring. I was worried it would be… wrong.
   116.05s  agent 발화 끝
   119.68s  agent 발화 시작: [sigh] It's understandable to feel that way, but there’s no 
   119.74s  user  발화 끝
   125.89s  user  발화 시작: Mm-hmm.
   126.33s  user  발화 끝
   127.69s  agent 발화 끝
   127.75s  user  발화 시작: Thank you, Fios. That really helps.
   129.86s  user  발화 끝
   130.02s  agent 발화 시작: You’re very welcome. I’m glad I could offer some peace of mi
   134.64s  agent 발화 끝
