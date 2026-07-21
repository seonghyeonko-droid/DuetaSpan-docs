# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "Victor",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-19",
#       "category": "anniversary",
#       "text": "User's anniversary is February 15."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "savings",
#       "text": "User is saving for a wedding."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "plant",
#       "text": "User is growing basil on the windowsill at home."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "streaming",
#       "text": "User subscribes to Disney+ and YouTube Premium."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "partner",
#       "text": "User's partner is named Noah."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "car",
#       "text": "User drives a 2018 Mazda CX-5."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "schedule",
#       "text": "User has on-call weekends."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-03",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     },
#     {
#       "date": "2026-01-20",
#       "title": "Sorting out a visa",
#       "bullets": [
#         "applying for a working-holiday visa to Australia",
#         "asked about the bank-balance requirement"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey Bro, I’m reading about Enron a | S2 Did you see the traffic on the bri | S3 Wow. So, Merrill Lynch knowingly h | S4 That’s… really messed up. I think 

     0.00s  user  발화 시작: Hey Bro, I’m reading about Enron and it’s just… a lot. What 
     5.68s  <ret> 발화 (turn1 첫 프레임)
     5.98s  ⚡SPAN 주입 [d'=0.30s / d_lead=9.64s]: Several financial institutions, including Merrill Lynch, Credit Suisse
     6.26s  agent 발화 시작: <ret> [happy] That's a tough story, but you're right to ask.
     6.40s  user  발화 끝
    15.73s  user  발화 시작: Did you see the traffic on the bridge this morning? Awful.
    15.90s  agent 발화 끝
    18.80s  user  발화 시작: Wow. So, Merrill Lynch knowingly helped them cook the books?
    18.92s  user  발화 끝
    22.87s  <ret> 발화 (turn4 첫 프레임)
    22.96s  user  발화 끝
    23.06s  agent 발화 시작: <ret> It looks like Merrill Lynch did, actually—they paid tw
    23.65s  ⚡SPAN 주입 [d'=0.77s / d_lead=11.08s]: In 2002, Merrill Lynch paid $2.6 million in penalties to settle charge
    33.58s  user  발화 시작: That’s… really messed up. I think I need a break from this.
    34.14s  agent 발화 끝
    37.38s  user  발화 끝
    37.70s  agent 발화 시작: [happy] Absolutely, take a break! Sometimes stepping away is
    44.78s  agent 발화 끝
