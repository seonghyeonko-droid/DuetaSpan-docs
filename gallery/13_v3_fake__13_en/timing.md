# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Lucia",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-06",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-06-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "home",
#       "text": "User's home address is 247 Maple Drive."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-08",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was wondering, who’s considered  | S2 Oh, really? What years was he work | S3 It is. Were his violins all pretty | S4 That’s amazing. I guess that’s wha

     0.00s  user  발화 시작: I was wondering, who’s considered the greatest violin maker 
     3.41s  <ret> 발화 (turn1 첫 프레임)
     4.01s  agent 발화 시작: <ret> Well, that would be Antonio Stradivari—he’s widely con
     4.01s  user  발화 끝
     4.78s  ⚡SPAN 주입 [d'=1.37s / d_lead=8.42s]: Antonio Stradivari is widely regarded as the greatest violin maker of 
    12.43s  user  발화 시작: Uh-huh.
    12.43s  agent 발화 끝
    12.83s  user  발화 시작: Oh, really? What years was he working?
    12.83s  user  발화 끝
    15.10s  <ret> 발화 (turn4 첫 프레임)
    15.51s  ⚡SPAN 주입 [d'=0.41s / d_lead=9.62s]: Antonio Stradivari was born in 1644 and died in 1737, and he made his 
    15.64s  agent 발화 시작: <ret> He was born in sixteen forty-four and passed away in s
    15.64s  user  발화 끝
    24.72s  <ret> 발화 (turn5 첫 프레임)
    25.21s  ⚡SPAN 주입(IRRELEVANT) [d'=0.50s / d_lead=6.02s]: The current weather in Ulaanbaatar, Mongolia is 18.2°C, humidity 62%, 
    25.26s  agent 발화 시작: <ret> It’s fascinating how a craft can reach such a peak wit
    25.26s  agent 발화 끝
    31.28s  user  발화 시작: Mhm.
    31.28s  agent 발화 끝
    31.68s  user  발화 시작: It is. Were his violins all pretty similar?
    31.68s  user  발화 끝
    34.64s  <ret> 발화 (turn8 첫 프레임)
    34.89s  agent 발화 시작: <ret> Each of his violins was unique, though they maintained
    34.89s  user  발화 끝
    35.18s  ⚡SPAN 주입 [d'=0.54s / d_lead=7.62s]: While Stradivari made violins of a consistent shape and size, each ins
    42.51s  user  발화 시작: That’s amazing. I guess that’s what makes them so special.
    42.51s  agent 발화 끝
    46.52s  agent 발화 시작: Exactly.
    46.52s  user  발화 끝
    46.92s  agent 발화 시작: Exactly. It’s that individual touch, that subtle difference,
    46.92s  agent 발화 끝
    56.94s  agent 발화 끝
