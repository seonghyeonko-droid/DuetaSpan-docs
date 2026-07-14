# v3_abs_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "Emil",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-28",
#       "category": "savings",
#       "text": "User is saving for a down payment on an apartment."
#     },
#     {
#       "date": "2026-06-09",
#       "category": "employer",
#       "text": "User works at a research institute."
#     },
#     {
#       "date": "2026-05-27",
#       "category": "gym",
#       "text": "User has a gym membership near the office."
#     },
#     {
#       "date": "2026-05-26",
#       "category": "plant",
#       "text": "User is growing a fiddle-leaf fig at home."
#     },
#     {
#       "date": "2026-05-05",
#       "category": "learning",
#       "text": "User is training for a half-marathon."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "hobby",
#       "text": "User is into pottery."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-12-22",
#       "category": "home",
#       "text": "User's home address is 955 Alder Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-30",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     },
#     {
#       "date": "2026-05-25",
#       "title": "Training for a 10K",
#       "bullets": [
#         "current pace is around 6 minutes per km",
#         "race is in November"
#       ]
#     },
#     {
#       "date": "2026-03-23",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     },
#     {
#       "date": "2026-03-07",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What is the most common Slavic lan | S2 That sounds like a lot. I'm trying | S3 …do any of them have relatively si | S4 Okay, that makes sense. Thanks, Je

     0.00s  user  발화 시작: What is the most common Slavic language?
     2.56s  agent 발화 시작: Well, that's a tricky one—it seems there isn't a definitive 
     2.56s  user  발화 끝
     9.51s  user  발화 시작: Wow.
     9.51s  agent 발화 끝
     9.87s  user  발화 시작: Oh. Hmm. What about Polish, then? Is that widely used?
     9.87s  user  발화 끝
    13.53s  agent 발화 시작: Yeah, totally.
    13.53s  user  발화 끝
    14.05s  <ret> 발화 (turn5 첫 프레임)
    14.20s  ⚡SPAN 주입 [d'=0.97s / d_lead=9.51s]: Polish is a West Slavic language spoken primarily in Poland, with appr
    14.26s  agent 발화 시작: <ret> Polish is a West Slavic language, primarily spoken in 
    14.26s  agent 발화 끝
    23.77s  user  발화 시작: Yeah.
    23.77s  agent 발화 끝
    24.13s  user  발화 시작: That sounds like a lot. I'm trying to learn a new language, 
    24.13s  user  발화 끝
    30.35s  agent 발화 시작: That's wonderful! Slavic languages are beautiful and rewardi
    30.35s  user  발화 끝
    36.56s  user  발화 시작: …do any of them have relatively simple grammar, compared to 
    36.56s  agent 발화 끝
    40.58s  agent 발화 시작: Yeah, totally.
    40.58s  user  발화 끝
    41.32s  agent 발화 시작: Bulgarian and Macedonian are often considered to have simple
    41.32s  agent 발화 끝
    49.36s  user  발화 시작: Oh, interesting. Are those languages very different from Pol
    49.36s  agent 발화 끝
    53.02s  agent 발화 시작: Mm-hmm.
    53.02s  user  발화 끝
    53.27s  <ret> 발화 (turn14 첫 프레임)
    53.37s  ⚡SPAN 주입 [d'=1.29s / d_lead=9.51s]: Bulgarian and Macedonian belong to the South Slavic branch, while Poli
    53.38s  agent 발화 시작: <ret> Bulgarian and Macedonian are quite different from Poli
    53.38s  agent 발화 끝
    62.89s  user  발화 시작: Okay, that makes sense. Thanks, Jes.
    62.89s  agent 발화 끝
    65.08s  user  발화 끝
