# v3_mem_35_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "Hugo",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-11",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-06-15",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-05-27",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "home",
#       "text": "User's home address is 517 Maple Drive."
#     },
#     {
#       "date": "2026-01-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Yeah, it is! I was hoping you coul | S2 Queenstown sounds great. Is it exp | S3 Actually, before we get into price | S4 Okay, good to know. What’s the wea

     0.00s  agent 발화 시작: Hi Hugo, I'm Klen. I understand you’re planning a trip to Ne
     5.79s  agent 발화 끝
     6.30s  user  발화 시작: Yeah, it is! I was hoping you could recommend a good city to
     9.46s  <ret> 발화 (turn2 첫 프레임)
     9.85s  agent 발화 시작: <ret> Considering your travel plans… October is a lovely tim
     9.96s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.74s]: [2026-05-27] User is planning a trip to New Zealand in October.
    10.04s  user  발화 끝
    17.68s  agent 발화 끝
    17.93s  user  발화 시작: Queenstown sounds great. Is it expensive to eat there?
    20.86s  <ret> 발화 (turn4 첫 프레임)
    21.16s  agent 발화 시작: <ret> Knowing your culinary preferences… Sushi restaurants i
    21.30s  user  발화 끝
    21.73s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.80s]: [2026-01-17] User's favorite cuisine is sushi.
    28.54s  user  발화 시작: Actually, before we get into prices, is it easy to get aroun
    29.28s  agent 발화 끝
    33.39s  agent 발화 시작: That’s a valid point. Queenstown has a good public bus syste
    33.54s  user  발화 끝
    38.67s  user  발화 시작: Mm-hmm.
    39.11s  user  발화 끝
    40.43s  agent 발화 시작: Plus, numerous tour companies offer convenient transportatio
    40.53s  agent 발화 끝
    42.89s  user  발화 시작: Mm-hmm.
    43.47s  user  발화 끝
    47.94s  agent 발화 끝
    48.24s  user  발화 시작: Okay, good to know. What’s the weather like in October?
    51.33s  user  발화 끝
