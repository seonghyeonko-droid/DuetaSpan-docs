# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Marcus",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-23",
#       "category": "home",
#       "text": "User's home address is 240 Birch Road."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-11-09",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-10-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-09-14",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you know who wrote “My Love, My | S2 Wow, that *is* a lot of money! I t | S3 That sounds perfect! I really need | S4 Okay, that would be helpful. Searc

     0.00s  user  발화 시작: Do you know who wrote “My Love, My Life”? It’s from Mamma Mi
     4.56s  <ret> 발화 (turn1 첫 프레임)
     4.63s  user  발화 끝
     4.79s  agent 발화 시작: <ret> Björn Ulvaeus wrote “My Love, My Life”, originally a s
     4.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.77s]: Björn Ulvaeus wrote “My Love, My Life”, which was originally released 
    13.55s  agent 발화 끝
    13.55s  user  발화 시작: Hmm, interesting. What about the movie itself, Mamma Mia!? W
    19.15s  <ret> 발화 (turn3 첫 프레임)
    19.38s  agent 발화 시작: <ret> Phyllida Lloyd directed the 2008 film, starring Meryl 
    19.39s  user  발화 끝
    19.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.05s]: Phyllida Lloyd directed the 2008 film Mamma Mia!, starring Meryl Stree
    28.43s  agent 발화 끝
    28.58s  user  발화 시작: Oh, right, Phyllida Lloyd. I remember now. Um, what was the 
    34.34s  <ret> 발화 (turn5 첫 프레임)
    34.65s  agent 발화 시작: <ret> Mamma Mia! grossed over six hundred and nine point eig
    34.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.67s]: Mamma Mia! grossed over $609.8 million worldwide against a production 
    34.78s  user  발화 끝
    43.32s  agent 발화 끝
    44.10s  user  발화 시작: Wow, that *is* a lot of money! I think I’ll watch it again t
    48.06s  agent 발화 시작: That sounds like a wonderful idea. It’s always nice to revis
    48.22s  user  발화 끝
    53.53s  agent 발화 끝
    54.90s  user  발화 시작: Actually, before I do…
    56.55s  user  발화 끝
    57.56s  user  발화 시작: …could you tell me what the weather is like in Stockholm rig
    61.34s  <ret> 발화 (turn10 첫 프레임)
    61.42s  agent 발화 시작: <ret> It’s currently 18.2 degrees Celsius in Stockholm, with
    61.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.94s]: (tool result) 18.2°C, humidity 62%, wind 7.1 km/h, clear skies.
    61.63s  user  발화 끝
    65.33s  user  발화 시작: Oh.
    65.77s  user  발화 끝
    70.01s  user  발화 시작: That sounds perfect! I really need to settle in, I’ve been s
    70.37s  agent 발화 끝
    75.24s  user  발화 끝
    75.30s  agent 발화 시작: Moving is always a big adjustment. Take your time, and be ki
    77.25s  user  발화 시작: Yeah.
    77.70s  user  발화 끝
    80.71s  user  발화 시작: I am trying. It's just… finding a good apartment here has be
    80.77s  agent 발화 끝
    85.81s  agent 발화 시작: I understand. It can be overwhelming. Perhaps I can help wit
    85.99s  user  발화 끝
    91.14s  user  발화 시작: You can? How?
    91.23s  agent 발화 끝
    93.10s  <ret> 발화 (turn18 첫 프레임)
    93.17s  agent 발화 시작: <ret> I’m afraid I don’t have a direct apartment-finding ser
    93.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.71s]: (no information found)
    93.35s  user  발화 끝
    99.80s  user  발화 시작: Okay, that would be helpful. Search for rental agencies in S
    99.88s  agent 발화 끝
   104.63s  <ret> 발화 (turn20 첫 프레임)
   104.86s  agent 발화 시작: <ret> Domus is a leading rental agency in Stockholm, with a 
   104.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.69s]: (tool result) Domus is a leading provider of rental apartments in Stoc
   104.98s  user  발화 끝
   112.42s  <ret> 발화 (turn21 첫 프레임)
   112.50s  agent 발화 시작: <ret> I'm glad I could point you in the right direction.
   112.50s  ⚡SPAN 주입(IRRELEVANT) [d'=0.80s / d_lead=2.58s]: The current price of Bitcoin is $67,321.12, a decrease of 2.1% over th
   112.55s  agent 발화 끝
   114.35s  user  발화 시작: Yeah.
   114.80s  user  발화 끝
   115.07s  agent 발화 끝
   115.16s  user  발화 시작: That’s great, thank you so much!
   117.33s  user  발화 끝
   117.40s  agent 발화 시작: You’re very welcome. I hope you find the perfect place soon,
   122.30s  agent 발화 끝
