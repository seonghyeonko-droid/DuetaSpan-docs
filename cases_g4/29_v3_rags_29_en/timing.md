# v3_rags_29_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "Mason",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-27",
#       "category": "bloodtype",
#       "text": "User's blood type is AB-."
#     },
#     {
#       "date": "2026-05-02",
#       "category": "streaming",
#       "text": "User subscribes to Disney+ and YouTube Premium."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "home",
#       "text": "User's home address is 718 Rosewood Drive."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "hobby",
#       "text": "User is into trail running."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "coffee",
#       "text": "User's usual coffee order is a caramel latte."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "partner",
#       "text": "User's partner is named Ava."
#     },
#     {
#       "date": "2025-12-20",
#       "category": "trip",
#       "text": "User is planning a trip to Namibia in April."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-22",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     },
#     {
#       "date": "2026-01-12",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     },
#     {
#       "date": "2025-12-09",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: What are those blue boxes…
     1.84s  user  발화 끝
     3.01s  user  발화 시작: …you see at the post office?
     4.17s  <ret> 발화 (turn2 첫 프레임)
     4.43s  agent 발화 시작: <ret> Those are mail collection boxes.
     4.61s  user  발화 끝
     5.22s  ⚡SPAN 주입 [d'=1.05s / d_lead=2.68s]: The blue boxes at the post office are mail collection boxes.
     7.12s  agent 발화 끝
