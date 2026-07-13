# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Lukas",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-09",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-08-04",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-04",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-06-03",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-11",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-07-09",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you know who sang with Paula Ab | S2 …like in Reykjavik today? | S3 Eleven degrees? That does sound co | S4 Maybe. I’m thinking about planning

     0.00s  user  발화 시작: Do you know who sang with Paula Abdul on “Opposites Attract”
     3.89s  <ret> 발화 (turn1 첫 프레임)
     4.13s  agent 발화 시작: <ret> That was Marv Gunn, actually! He voiced the MC Skat Ka
     4.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.39s]: Marv Gunn provided the vocals for the animated MC Skat Kat character a
     4.13s  user  발화 끝
    13.52s  user  발화 시작: Oh, that’s cool! What’s the weather…
    13.52s  agent 발화 끝
    15.77s  user  발화 시작: …like in Reykjavik today?
    15.77s  user  발화 끝
    16.88s  <ret> 발화 (turn4 첫 프레임)
    17.28s  agent 발화 시작: <ret> It’s currently 11 degrees Celsius in Reykjavik, with m
    17.28s  ⚡SPAN 주입(IRRELEVANT) [d'=1.52s / d_lead=5.63s]: The stock of Tesla (TSLA) closed today at $177.42, down 1.35% from its
    17.28s  user  발화 끝
    22.91s  user  발화 시작: Oh.
    22.91s  agent 발화 끝
    23.29s  user  발화 시작: Eleven degrees? That does sound cold.
    23.29s  user  발화 끝
    25.54s  agent 발화 시작: It is a bit brisk, yes. Though, sometimes a little chill can
    25.54s  user  발화 끝
    33.80s  user  발화 시작: Maybe. I’m thinking about planning a trip, actually.
    33.80s  agent 발화 끝
    36.81s  agent 발화 시작: That's wonderful! Travel can be such a great way to broaden 
    36.81s  user  발화 끝
    45.07s  agent 발화 끝
