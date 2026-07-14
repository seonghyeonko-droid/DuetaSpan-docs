# v3_rags_31_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "Sam",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "early 40s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-09",
#       "category": "show",
#       "text": "User is currently watching a sci-fi series."
#     },
#     {
#       "date": "2026-04-28",
#       "category": "bloodtype",
#       "text": "User's blood type is A+."
#     },
#     {
#       "date": "2026-04-09",
#       "category": "streaming",
#       "text": "User subscribes to a shared Netflix family plan."
#     },
#     {
#       "date": "2026-04-07",
#       "category": "schedule",
#       "text": "User has a fully remote setup."
#     },
#     {
#       "date": "2026-03-16",
#       "category": "wake",
#       "text": "User usually wakes up around 7:30am."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "anniversary",
#       "text": "User's anniversary is May 10."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "home",
#       "text": "User's home address is 873 Maple Drive."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-02",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     },
#     {
#       "date": "2026-03-31",
#       "title": "Sorting out a visa",
#       "bullets": [
#         "applying for a working-holiday visa to Australia",
#         "asked about the bank-balance requirement"
#       ]
#     },
#     {
#       "date": "2026-01-20",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot next Tuesday",
#         "prefers Dr. Han at Bright Smile Clinic"
#       ]
#     },
#     {
#       "date": "2025-12-07",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: When did the very first episode of The Flash television seri
     4.16s  <ret> 발화 (turn2 첫 프레임)
     4.38s  agent 발화 시작: Uh-huh.
     4.38s  user  발화 끝
     4.75s  agent 발화 시작: <ret> [happy] Well, the very first episode of The Flash, cal
     4.75s  agent 발화 끝
     5.42s  ⚡SPAN 주입 [d'=1.31s / d_lead=9.13s]: The first episode of The Flash television series, titled “Pilot”, prem
    13.87s  agent 발화 끝
