# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "Liam",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-03",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2025-11-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "home",
#       "text": "User's home address is 473 Elm Street."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-09",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Sioia, I was wondering about Fr | S2 Hmm, 2013… that feels like ages ag | S3 Ah, so Olaf’s adventure was first. | S4 Awesome! I think I'll watch it ton

     0.00s  user  발화 시작: Hi Sioia, I was wondering about Frozen 2.
     0.00s  <ret> 발화 (turn3 첫 프레임)
     0.00s  <ret> 발화 (turn6 첫 프레임)
     0.00s  <ret> 발화 (turn11 첫 프레임)
     0.02s  agent 발화 시작: Hello! It’s wonderful to hear from you. I’m happy to chat ab
     0.02s  user  발화 끝
     0.06s  user  발화 시작: When did Frozen 2 actually come out in theaters?
     0.06s  agent 발화 끝
     0.09s  agent 발화 시작: <ret> The release date in the United States was November 22,
     0.09s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: Frozen 2 was released in the United States on November 22, 2019.
     0.09s  user  발화 끝
     0.14s  user  발화 시작: Oh, that’s right! I remember now. What…
     0.14s  agent 발화 끝
     0.16s  user  발화 시작: …about Frozen’s first adventure?
     0.16s  user  발화 끝
     0.17s  agent 발화 시작: <ret> Frozen first came out in the United States on November
     0.17s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: Frozen was first released in the United States on November 27, 2013.
     0.17s  user  발화 끝
     0.22s  <ret> 발화 (turn15 첫 프레임)
     0.22s  user  발화 시작: Hmm, 2013… that feels like ages ago.
     0.22s  agent 발화 끝
     0.24s  agent 발화 시작: It does feel like a while ago, doesn't it? Time flies when y
     0.24s  user  발화 끝
     0.29s  user  발화 시작: Yeah.
     0.29s  agent 발화 끝
     0.29s  user  발화 시작: Did Olaf have his own short film or something?
     0.29s  user  발화 끝
     0.32s  agent 발화 시작: <ret> Yes, Olaf did star in his own short film, released on 
     0.32s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: Olaf's Frozen Adventure is a 21-minute animated short film released on
     0.32s  user  발화 끝
     0.36s  <ret> 발화 (turn27 첫 프레임)
     0.37s  user  발화 시작: November 22nd again? That’s a common date, huh?
     0.37s  agent 발화 끝
     0.39s  agent 발화 시작: It seems that November 22nd is a significant date for these 
     0.39s  user  발화 끝
     0.43s  user  발화 시작: …but was Olaf’s adventure *before* or after Frozen 2 came ou
     0.43s  agent 발화 끝
     0.46s  agent 발화 시작: <ret> Olaf’s Frozen Adventure came out on November 22, 2017,
     0.46s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: Olaf's Frozen Adventure was released on November 22, 2017, and Frozen 
     0.46s  user  발화 끝
     0.51s  user  발화 시작: Exactly.
     0.51s  agent 발화 끝
     0.51s  user  발화 시작: Ah, so Olaf’s adventure was first. Good to know.
     0.51s  user  발화 끝
     0.54s  agent 발화 시작: Exactly! It’s wonderful to keep the order straight when enjo
     0.54s  user  발화 끝
     0.57s  user  발화 시작: Yeah.
     0.57s  agent 발화 끝
     0.57s  <ret> 발화 (turn23 첫 프레임)
     0.57s  agent 발화 시작: It’s always good to have all the details aligned so you can 
     0.57s  user  발화 끝
     0.62s  user  발화 시작: Right.
     0.62s  agent 발화 끝
     0.62s  user  발화 시작: What’s the runtime of Olaf’s Frozen Adventure? Is it long?
     0.62s  user  발화 끝
     0.65s  agent 발화 시작: <ret> Olaf’s Frozen Adventure is about 21 minutes long—a per
     0.65s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: Olaf's Frozen Adventure has a runtime of approximately 21 minutes.
     0.65s  user  발화 끝
     0.70s  user  발화 시작: That doesn't sound too bad, actually.
     0.70s  agent 발화 끝
     0.71s  agent 발화 시작: It’s a delightful length, just right for a cozy viewing expe
     0.71s  user  발화 끝
     0.74s  user  발화 시작: Is it available on Disney Plus?
     0.74s  agent 발화 끝
     0.76s  agent 발화 시작: <ret> Yes, Olaf’s Frozen Adventure is available to stream on
     0.76s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: (tool result) Yes, Olaf's Frozen Adventure is available to stream on D
     0.76s  user  발화 끝
     0.80s  user  발화 시작: Awesome! I think I'll watch it tonight.
     0.80s  agent 발화 끝
     0.82s  agent 발화 시작: That sounds like a lovely plan! It’s always good to treat yo
     0.82s  user  발화 끝
     0.86s  user  발화 시작: Right.
     0.86s  agent 발화 끝
     0.86s  user  발화 시작: Do you have any tips for making a cozy viewing experience?
     0.86s  user  발화 끝
     0.89s  agent 발화 시작: Dim the lights, grab a warm blanket, and maybe a cup of hot 
     0.89s  user  발화 끝
     0.93s  user  발화 시작: That sounds perfect. Thanks, Sioia!
     0.93s  agent 발화 끝
     0.95s  agent 발화 시작: You’re very welcome! I’m glad I could help. Remember, taking
     0.95s  user  발화 끝
     1.00s  agent 발화 끝
