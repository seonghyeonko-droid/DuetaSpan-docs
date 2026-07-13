# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Caleb",
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
#       "date": "2026-06-17",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-05",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-04",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey, what channel is nbcsn on Dish | S2 How much should I aim for? | S3 I do have some credit card debt. | S4 Yeah, maybe restaurants. What’s a 

     0.00s  user  발화 시작: Hey, what channel is nbcsn on Dish Network?
     3.20s  agent 발화 시작: Mhm.
     3.20s  user  발화 끝
     3.30s  <ret> 발화 (turn2 첫 프레임)
     3.60s  agent 발화 시작: <ret> Well, finding that for you, NBC Sports Network is chan
     3.60s  agent 발화 끝
     4.22s  ⚡SPAN 주입 [d'=0.92s / d_lead=10.01s]: NBC Sports Network is channel 159 on the Dish Network lineup as of Nov
    13.61s  user  발화 시작: Great, thanks!
    13.61s  agent 발화 끝
    14.41s  agent 발화 시작: You're very welcome!
    14.41s  user  발화 끝
    15.61s  user  발화 시작: Actually, yeah. What's the 50/30/20 rule?
    15.61s  agent 발화 끝
    17.85s  <ret> 발화 (turn6 첫 프레임)
    18.01s  agent 발화 시작: <ret> That's a smart question! The 50/30/20 rule helps balan
    18.01s  user  발화 끝
    18.44s  ⚡SPAN 주입 [d'=0.59s / d_lead=8.81s]: The 50/30/20 rule suggests allocating 50% of after-tax income to needs
    26.82s  user  발화 시작: Mm-hmm.
    26.82s  agent 발화 끝
    27.22s  agent 발화 시작: It's a good starting point for financial planning, don’t you
    27.22s  user  발화 끝
    31.62s  user  발화 시작: Yeah, totally.
    31.62s  agent 발화 끝
    32.42s  user  발화 시작: Sounds good. What counts as a “need”?
    32.42s  user  발화 끝
    34.91s  <ret> 발화 (turn11 첫 프레임)
    35.22s  agent 발화 시작: <ret> A “need” is anything essential, like housing, food, tr
    35.22s  user  발화 끝
    36.30s  ⚡SPAN 주입 [d'=1.38s / d_lead=6.80s]: Needs are essential expenses like housing, food, transportation, and h
    42.02s  user  발화 시작: Uh-huh.
    42.02s  agent 발화 끝
    42.42s  user  발화 시작: Okay, that makes sense. I'm trying to build an emergency fun
    42.42s  user  발화 끝
    46.83s  agent 발화 시작: Mm-hmm.
    46.83s  user  발화 끝
    47.23s  agent 발화 시작: That's fantastic! Building an emergency fund is a really sma
    47.23s  agent 발화 끝
    53.23s  user  발화 시작: Mhm.
    53.23s  agent 발화 끝
    53.63s  user  발화 시작: How much should I aim for?
    53.63s  user  발화 끝
    55.79s  <ret> 발화 (turn18 첫 프레임)
    56.03s  agent 발화 시작: <ret> Most experts suggest saving 3 to 6 months of essential
    56.03s  user  발화 끝
    56.24s  ⚡SPAN 주입 [d'=0.45s / d_lead=6.80s]: Financial experts generally recommend saving 3-6 months’ worth of esse
    62.84s  user  발화 시작: Yeah.
    62.84s  agent 발화 끝
    63.24s  user  발화 시작: Six months sounds like a lot…
    63.24s  user  발화 끝
    65.64s  agent 발화 시작: It can feel that way, but it provides a really strong safety
    65.64s  user  발화 끝
    75.24s  user  발화 시작: Yeah.
    75.24s  agent 발화 끝
    75.64s  user  발화 시작: Maybe. I just got a bonus at work.
    75.64s  user  발화 끝
    78.85s  agent 발화 시작: Oh, that's wonderful news! A bonus is a perfect opportunity 
    78.85s  user  발화 끝
    84.45s  user  발화 시작: Should I put it all towards my emergency fund?
    84.45s  agent 발화 끝
    87.99s  <ret> 발화 (turn27 첫 프레임)
    88.05s  agent 발화 시작: Yeah.
    88.05s  user  발화 끝
    88.39s  ⚡SPAN 주입 [d'=0.95s / d_lead=6.80s]: While building an emergency fund is important, diversifying investment
    88.45s  agent 발화 시작: <ret> While an emergency fund is great, diversifying and tac
    88.45s  agent 발화 끝
    95.25s  user  발화 시작: Yeah.
    95.25s  agent 발화 끝
    95.65s  user  발화 시작: I do have some credit card debt.
    95.65s  user  발화 끝
    98.46s  agent 발화 시작: Okay, tackling that debt is a great use of extra funds. High
    98.46s  user  발화 끝
   105.66s  user  발화 시작: Yeah.
   105.66s  agent 발화 끝
   106.06s  user  발화 시작: What's compound interest, actually? I keep hearing about it.
   106.06s  user  발화 끝
   109.45s  <ret> 발화 (turn33 첫 프레임)
   109.60s  ⚡SPAN 주입 [d'=0.70s / d_lead=7.20s]: Compound interest is interest earned on both the initial principal and
   109.66s  agent 발화 시작: <ret> Compound interest is interest on your principal *and* 
   109.66s  user  발화 끝
   116.87s  user  발화 시작: Mhm.
   116.87s  agent 발화 끝
   117.27s  user  발화 시작: So it’s like… interest on interest?
   117.27s  user  발화 끝
   119.67s  agent 발화 시작: Exactly! It’s a powerful tool for building wealth over time.
   119.67s  user  발화 끝
   123.67s  user  발화 시작: That sounds pretty good. I'm thinking of visiting Seoul next
   123.67s  agent 발화 끝
   128.07s  agent 발화 시작: Seoul is a fantastic city! I can help you find information a
   128.07s  user  발화 끝
   134.48s  user  발화 시작: Mm-hmm.
   134.48s  agent 발화 끝
   134.88s  user  발화 시작: Yeah, maybe restaurants. What’s a good area to find restaura
   134.88s  user  발화 끝
   139.28s  <ret> 발화 (turn41 첫 프레임)
   139.28s  agent 발화 시작: <ret> Myeongdong is a popular district in Seoul, known for i
   139.28s  user  발화 끝
   139.38s  ⚡SPAN 주입 [d'=0.91s / d_lead=11.61s]: Myeongdong is a popular district in Seoul known for its wide variety o
   150.89s  user  발화 시작: Okay, Myeongdong. And what about… parks?
   150.89s  agent 발화 끝
   153.15s  <ret> 발화 (turn43 첫 프레임)
   153.25s  ⚡SPAN 주입 [d'=1.08s / d_lead=7.60s]: Olympic Park in Seoul, originally built for the 1988 Summer Olympics, 
   153.29s  agent 발화 시작: <ret> Olympic Park is a large green space, built for the 198
   153.29s  user  발화 끝
   160.89s  user  발화 시작: Yeah, yeah.
   160.89s  agent 발화 끝
   161.69s  user  발화 시작: Sounds nice. How about the weather there in, say, October?
   161.69s  user  발화 끝
   165.68s  <ret> 발화 (turn46 첫 프레임)
   165.69s  agent 발화 시작: <ret> Checking the weather, in Seoul on October 27th, 2026, 
   165.69s  user  발화 끝
   166.43s  ⚡SPAN 주입 [d'=0.76s / d_lead=9.61s]: (tool result) Seoul: October 27, 2026 - High 18.3°C, Low 8.9°C, Condit
   175.30s  user  발화 시작: Not bad! Okay, that's all for now, thanks.
   175.30s  agent 발화 끝
   178.50s  agent 발화 시작: You’re very welcome! I’m glad I could help, and remember, sm
   178.50s  user  발화 끝
   185.31s  agent 발화 끝
