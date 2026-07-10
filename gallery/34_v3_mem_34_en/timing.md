# v3_mem_34_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "Ava",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-19",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-04-15",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-03-22",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-25",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "home",
#       "text": "User's home address is 30 Oak Avenue."
#     },
#     {
#       "date": "2025-06-16",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
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

# EXAMINER(FDB-v2) 단계: S1 Uh, hi Hia. I need to get to the a | S2 That sounds good. Book it for tomo | S3 Yes, exactly! I need a restaurant  | S4 Perfect. Thanks so much, Hia.

     0.00s  agent 발화 시작: Bonjour Ava, I’m Hia.
     1.98s  agent 발화 끝
     2.01s  user  발화 시작: Uh, hi Hia. I need to get to the airport tomorrow.
     5.52s  user  발화 끝
     5.54s  <ret> 발화 (turn2 첫 프레임)
     5.62s  agent 발화 시작: <ret> Your home address is 30 Oak Avenue, is that correct?
     6.74s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.46s]: [2025-08-06] User's home address is 30 Oak Avenue.
     9.08s  agent 발화 끝
    11.56s  user  발화 시작: Yes, that’s right. Can you find me a ride?
    13.89s  <ret> 발화 (turn4 첫 프레임)
    14.29s  agent 발화 시작: <ret> A ride to the airport is estimated at twenty-eight eur
    14.47s  user  발화 끝
    15.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.49s]: (tool result) Estimated fare: 28.50 EUR, estimated time: 35 minutes.
    17.39s  user  발화 시작: Uh-huh.
    17.89s  user  발화 끝
    20.73s  agent 발화 시작: Does that sound like a reasonable option for you, Ava?
    20.78s  agent 발화 끝
    24.34s  agent 발화 끝
    24.55s  user  발화 시작: That sounds good. Book it for tomorrow at seven AM.
    28.16s  <ret> 발화 (turn8 첫 프레임)
    28.24s  agent 발화 시작: <ret> Your ride is booked for seven AM tomorrow, confirmatio
    28.39s  user  발화 끝
    30.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.30s]: (tool result) Ride booked, confirmation ID: RH78293.
    32.66s  user  발화 시작: Yeah, yeah.
    33.90s  user  발화 끝
    34.55s  agent 발화 끝
    34.92s  user  발화 시작: Great! I'm also planning a birthday dinner…
    37.59s  <ret> 발화 (turn11 첫 프레임)
    37.90s  agent 발화 시작: <ret> I see we discussed a party of six with a preference fo
    37.97s  user  발화 끝
    39.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.39s]: [2026-02-09] Past chat — Planning a birthday dinner: party of six; loo
    40.29s  user  발화 시작: Mm-hmm.
    40.79s  user  발화 끝
    42.29s  agent 발화 끝
    42.34s  user  발화 시작: Yes, exactly! I need a restaurant that fits that.
    44.93s  <ret> 발화 (turn14 첫 프레임)
    45.25s  agent 발화 시작: <ret> Le Jardin is at twelve Rue de la Paix, La Terrasse at 
    45.39s  user  발화 끝
    46.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.54s]: (tool result) Le Jardin: 12 Rue de la Paix, Paris (48.8584, 2.2945); L
    51.60s  user  발화 시작: Hmm, Le Jardin sounds nice. How far is that from me?
    51.78s  agent 발화 끝
    55.36s  <ret> 발화 (turn16 첫 프레임)
    55.44s  agent 발화 시작: <ret> Le Jardin is six point eight kilometers away, about tw
    55.68s  user  발화 끝
    56.56s  ⚡SPAN 주입 [d'=1.20s / d_lead=5.46s]: (tool result) 6.8 km, 22 minutes by car.
    57.73s  user  발화 시작: Mhm.
    58.23s  user  발화 끝
    60.75s  user  발화 시작: Perfect. Thanks so much, Hia.
    60.90s  agent 발화 끝
    62.61s  agent 발화 시작: You’re very welcome, Ava. I’m glad I could help with your ar
    62.69s  user  발화 끝
    70.53s  agent 발화 끝
