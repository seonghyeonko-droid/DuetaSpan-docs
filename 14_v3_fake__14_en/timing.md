# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Jack",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-27",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-18",
#       "category": "home",
#       "text": "User's home address is 913 Pine Court."
#     },
#     {
#       "date": "2025-10-09",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-06-20",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-14",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-06-06",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Who is the Fire Lord in Legend of  | S2 Did Gyatso have any siblings? | S3 That sounds…pleasant. | S4 Do you…do you think I can finish m

     0.00s  user  발화 시작: Who is the Fire Lord in Legend of Korra?
     2.70s  <ret> 발화 (turn1 첫 프레임)
     2.94s  agent 발화 시작: <ret> Well, that's a fascinating question! The Fire Lord in 
     2.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.64s]: Ozai was the Fire Lord before his son Zuko, ruling during the Hundred 
     2.96s  user  발화 끝
     9.65s  user  발화 시작: Yeah.
    10.09s  user  발화 끝
    14.43s  user  발화 시작: Oh, right. Zuko too, wasn't he?
    14.57s  agent 발화 끝
    17.06s  user  발화 끝
    17.43s  agent 발화 시작: Exactly! Zuko had a remarkable journey to becoming Fire Lord
    27.03s  agent 발화 끝
    27.06s  user  발화 시작: Um, yeah, I guess so. What about Aang's airbending teacher?
    31.84s  <ret> 발화 (turn6 첫 프레임)
    32.00s  agent 발화 시작: <ret> Aang’s airbending teacher was Monk Gyatso—a truly wise
    32.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.76s]: Monk Gyatso was Aang’s mentor and a highly skilled airbending master.
    32.19s  user  발화 끝
    36.43s  user  발화 시작: Yeah.
    36.92s  user  발화 끝
    40.61s  agent 발화 시작: He really guided Aang, helping him understand not just bendi
    40.76s  agent 발화 끝
    46.26s  agent 발화 끝
    47.21s  user  발화 시작: Did Gyatso have any siblings?
    48.80s  <ret> 발화 (turn10 첫 프레임)
    49.04s  agent 발화 시작: <ret> It's lovely you're asking about his family! Gyatso had
    49.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.59s]: Monk Gyatso had a younger sister named Kya, who was also an airbending
    49.18s  user  발화 끝
    55.66s  user  발화 시작: Mm-hmm.
    56.16s  user  발화 끝
    58.63s  agent 발화 끝
    58.84s  user  발화 시작: [sigh] It's hard to keep track of all these characters.
    61.78s  agent 발화 시작: It absolutely can be! There are so many wonderful characters
    61.94s  user  발화 끝
    70.54s  agent 발화 끝
    71.21s  user  발화 시작: What was the weather like in Republic City during the finale
    74.54s  <ret> 발화 (turn15 첫 프레임)
    74.62s  agent 발화 시작: <ret> The weather in Republic City during the finale was 26.
    74.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.43s]: (tool result) 26.0°C, humidity 68%, wind 7.2 km/h, clear skies
    74.77s  user  발화 끝
    85.03s  user  발화 시작: That sounds…pleasant.
    85.05s  agent 발화 끝
    86.88s  <ret> 발화 (turn17 첫 프레임)
    87.19s  agent 발화 시작: <ret> It does, doesn't it? A clear day can really lift your 
    87.20s  ⚡SPAN 주입(IRRELEVANT) [d'=1.36s / d_lead=6.67s]: The average price of a barrel of West Texas Intermediate crude oil is 
    87.30s  user  발화 끝
    89.29s  user  발화 시작: Uh-huh.
    89.83s  user  발화 끝
    93.87s  agent 발화 끝
    94.18s  user  발화 시작: What kind of tea did Iroh like?
    96.53s  <ret> 발화 (turn20 첫 프레임)
    96.69s  agent 발화 시작: <ret> Oh, that's a great question! Uncle Iroh truly cherishe
    96.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.86s]: Iroh greatly enjoyed jasmine tea, often remarking on its calming and p
    96.72s  user  발화 끝
   105.55s  agent 발화 끝
   105.62s  user  발화 시작: He seemed like a really good guy.
   107.60s  user  발화 끝
   107.64s  agent 발화 시작: He absolutely was! Iroh had a beautiful soul and offered wis
   116.72s  user  발화 시작: Do you…do you think I can finish my history paper?
   116.86s  agent 발화 끝
   120.24s  user  발화 끝
   120.40s  agent 발화 시작: Of course you can! You’ve already come so far, and you’re cl
   124.10s  user  발화 시작: Right.
   124.73s  user  발화 끝
   129.96s  agent 발화 끝
   130.88s  user  발화 시작: I guess so. Thanks, Freus.
   133.00s  agent 발화 시작: You're very welcome. Remember, taking things one step at a t
   133.09s  user  발화 끝
   139.21s  agent 발화 끝
