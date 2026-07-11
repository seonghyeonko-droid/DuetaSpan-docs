# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Rosa",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-27",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-16",
#       "category": "home",
#       "text": "User's home address is 986 Cedar Lane."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-10-03",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-06-24",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-09-29",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi, I’m new to the city and feelin | S2 And the other side was… the Commun | S3 Wow, that *is* a long time. | S4 Oh, that’s okay. I can probably se

     0.00s  user  발화 시작: Hi, I’m new to the city and feeling a little lost.
     3.05s  user  발화 끝
     3.22s  agent 발화 시작: Welcome! It’s perfectly normal to feel that way when settlin
     5.54s  user  발화 시작: Right.
     5.99s  user  발화 끝
     7.63s  user  발화 시작: That’s good to hear. Um, I was reading about Chinese history
     7.79s  agent 발화 끝
    12.46s  <ret> 발화 (turn4 첫 프레임)
    12.68s  agent 발화 시작: <ret> That’s a common point of confusion, actually—the Chine
    12.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.00s]: The Chinese Civil War was fought between the Kuomintang-led Republic o
    12.82s  user  발화 끝
    21.40s  user  발화 시작: So, the Republic of China… was one of the sides?
    21.67s  agent 발화 끝
    24.99s  <ret> 발화 (turn6 첫 프레임)
    25.30s  agent 발화 시작: <ret> Yes, the Republic of China, under the Kuomintang, held
    25.31s  ⚡SPAN 주입 [d'=1.76s / d_lead=7.84s]: The Republic of China, under the Kuomintang, held power in mainland Ch
    25.43s  user  발화 끝
    29.24s  user  발화 시작: Wow.
    30.06s  user  발화 끝
    33.02s  user  발화 시작: And the other side was… the Communists?
    33.13s  agent 발화 끝
    35.35s  <ret> 발화 (turn9 첫 프레임)
    35.74s  agent 발화 시작: <ret> Exactly—the Communist Party of China, led by Mao Zedon
    35.74s  user  발화 끝
    35.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.01s]: The Communist Party of China, led by Mao Zedong, sought to overthrow t
    45.75s  agent 발화 끝
    46.04s  user  발화 시작: I see. Was it a really long war?
    48.79s  <ret> 발화 (turn11 첫 프레임)
    48.85s  agent 발화 시작: <ret> It was a rather lengthy conflict, actually, occurring 
    48.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.18s]: The Chinese Civil War occurred intermittently from 1927 to 1949, with 
    49.00s  user  발화 끝
    53.49s  user  발화 시작: Mm-hmm.
    53.95s  user  발화 끝
    58.00s  user  발화 시작: Wow, that *is* a long time.
    58.03s  agent 발화 끝
    60.61s  agent 발화 시작: It certainly was. It’s a significant period in Chinese histo
    60.72s  user  발화 끝
    67.94s  agent 발화 끝
    68.68s  user  발화 시작: You're right. I think I’ll look up some museums.
    71.10s  <ret> 발화 (turn16 첫 프레임)
    71.25s  agent 발화 시작: <ret> That’s a wonderful idea! I can help you find some muse
    71.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.87s]: (no information found)
    71.27s  user  발화 끝
    75.92s  agent 발화 시작: I'm sorry, I can't find attractions at the moment. My travel
    76.11s  agent 발화 끝
    81.30s  user  발화 시작: Oh, that’s okay. I can probably search for them myself.
    81.39s  agent 발화 끝
    83.88s  user  발화 끝
    83.90s  agent 발화 시작: I can always assist with other things as you settle in—anyth
    92.66s  user  발화 시작: That sounds great, thanks. I might need help with restaurant
    92.71s  agent 발화 끝
    96.36s  user  발화 끝
    96.62s  agent 발화 시작: I’m happy to help whenever you need it. Perhaps we can discu
   104.87s  agent 발화 끝
