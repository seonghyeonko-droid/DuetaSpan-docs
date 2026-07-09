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


     0.00s  agent 발화 시작: Hi Hugo, I’m Klen. I understand you’re planning a trip to Ne
     6.49s  agent 발화 끝
     6.97s  user  발화 시작: Yeah, it’s been a dream for a while. I’m starting to look at
    11.68s  <ret> 발화 (turn2 첫 프레임)
    12.08s  agent 발화 시작: <ret> It can be, certainly. To help narrow things down, do y
    12.21s  user  발화 끝
    13.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: [2026-07-11] User prefers an aisle seat when traveling.
    17.54s  agent 발화 시작: You do! You prefer an aisle seat when you travel. I can prio
    17.73s  agent 발화 끝
    21.23s  user  발화 시작: Mm-hmm.
    21.73s  user  발화 끝
    22.45s  agent 발화 시작: Now, looking at flights to Auckland in October— there are se
    22.67s  agent 발화 끝
    30.12s  user  발화 시작: …actually, before we get into prices, are there any airlines
    30.88s  agent 발화 끝
    35.69s  agent 발화 시작: That’s a great question. Air New Zealand consistently receiv
    35.77s  user  발화 끝
    42.00s  user  발화 시작: Okay, good to know. And are aisle seats usually available on
    42.22s  agent 발화 끝
    47.93s  user  발화 끝
