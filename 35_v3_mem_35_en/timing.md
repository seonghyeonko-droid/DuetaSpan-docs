# v3_mem_35_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "Charlotte",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-18",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "home",
#       "text": "User's home address is 583 Cedar Lane."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-17",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-06-28",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-04",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Charlotte, I'm Moshi. It's lovely to meet you. I'm a coun
     7.01s  user  발화 시작: Um, well, I'm planning a trip to Kyoto in December, and I'm 
     7.01s  agent 발화 끝
    13.25s  <ret> 발화 (turn2 첫 프레임)
    13.65s  agent 발화 시작: <ret> I see you’re planning a trip to Kyoto in December, whi
    13.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.80s]: [2026-04-18] User is planning a trip to Kyoto in December.
    13.65s  user  발화 끝
    18.45s  user  발화 시작: Mm-hmm.
    18.45s  agent 발화 끝
    18.82s  agent 발화 시작: To help me narrow down some options, do you have any prefere
    18.82s  user  발화 끝
    25.09s  user  발화 시작: I'd prefer a traditional Ryokan, if possible. Something a bi
    25.09s  agent 발화 끝
    28.99s  <ret> 발화 (turn6 첫 프레임)
    29.15s  agent 발화 시작: <ret> Tawaraya is a highly-rated Ryokan in Kyoto, costing 80
    29.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.96s]: (tool result) {"hotel name": "Tawaraya", "address": "Anekoji Agaru, Fu
    29.15s  user  발화 끝
    39.12s  user  발화 시작: That sounds… perfect, actually.
    39.12s  agent 발화 끝
    40.59s  agent 발화 시작: I’m so glad to hear you think so! It’s known for its excepti
    40.59s  user  발화 끝
    46.86s  agent 발화 끝
