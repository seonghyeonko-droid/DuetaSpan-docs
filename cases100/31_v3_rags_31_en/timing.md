# v3_rags_31_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "Casey",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-22",
#       "category": "commute",
#       "text": "User works from home."
#     },
#     {
#       "date": "2026-04-28",
#       "category": "savings",
#       "text": "User is saving for a new car."
#     },
#     {
#       "date": "2026-04-24",
#       "category": "wake",
#       "text": "User usually wakes up at 5:30am for a run."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "plant",
#       "text": "User is growing a monstera at home."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "music",
#       "text": "User likes listening to a lo-fi jazz playlist."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "car",
#       "text": "User drives a 2019 Hyundai Tucson."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "trip",
#       "text": "User is planning a trip to Patagonia in March."
#     },
#     {
#       "date": "2026-01-11",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "allergy",
#       "text": "User is allergic to eggs."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-07",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     },
#     {
#       "date": "2026-04-14",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2026-03-03",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Who helped the US Department of Defense create the internet?
     1.95s  agent 발화 시작: Right.
     2.71s  agent 발화 끝
     2.95s  <ret> 발화 (turn2 첫 프레임)
     3.53s  agent 발화 시작: <ret> Oh, that's a great question! Let me check… Actually, i
     3.56s  user  발화 끝
     4.50s  ⚡SPAN 주입 [d'=1.56s / d_lead=19.16s]: In the 1960s, the Department of Defense’s Advanced Research Projects A
    22.70s  agent 발화 끝
