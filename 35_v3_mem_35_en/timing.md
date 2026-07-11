# v3_mem_35_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "Robin",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-08",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-04-26",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "home",
#       "text": "User's home address is 211 Maple Drive."
#     },
#     {
#       "date": "2025-11-25",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-11-17",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-11",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Robin, I'm Tiax. It's lovely to connect with you today.
     1.42s  user  발화 시작: Uh-huh.
     2.05s  user  발화 끝
     3.67s  user  발화 시작: um, yeah, I am. I'm going to Switzerland in October.
     3.69s  agent 발화 끝
     7.33s  <ret> 발화 (turn3 첫 프레임)
     7.72s  agent 발화 시작: <ret> Switzerland in October sounds absolutely lovely. I see
     7.84s  user  발화 끝
     8.45s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.47s]: [2026-02-21] User is planning a trip to Switzerland in October.
    10.35s  user  발화 시작: Yeah.
    10.94s  user  발화 끝
    15.93s  agent 발화 시작: As a supportive advisor, I find planning a journey can somet
    15.97s  agent 발화 끝
    19.78s  user  발화 시작: Uh-huh.
    20.41s  user  발화 끝
    23.30s  user  발화 시작: I was hoping you could recommend a city to visit. I really l
    23.91s  agent 발화 끝
    28.27s  <ret> 발화 (turn8 첫 프레임)
    28.35s  user  발화 끝
    28.43s  agent 발화 시작: <ret> Knowing you enjoy birdwatching, I can certainly sugges
    28.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.93s]: [2025-11-17] User is into birdwatching.
    36.36s  agent 발화 끝
    36.63s  user  발화 시작: Oh, that’s great! What do you think?
    39.17s  user  발화 끝
