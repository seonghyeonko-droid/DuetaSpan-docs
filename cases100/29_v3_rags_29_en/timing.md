# v3_rags_29_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "Anna",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-09",
#       "category": "schedule",
#       "text": "User has a 9-to-6 weekday schedule."
#     },
#     {
#       "date": "2026-05-16",
#       "category": "sibling",
#       "text": "User has a younger sibling named Hana."
#     },
#     {
#       "date": "2026-04-22",
#       "category": "coffee",
#       "text": "User's usual coffee order is black drip coffee."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "emergency",
#       "text": "User's emergency contact is Noah."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "dislike",
#       "text": "User can't stand cilantro."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-19",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     },
#     {
#       "date": "2026-04-07",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     },
#     {
#       "date": "2026-02-04",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     },
#     {
#       "date": "2025-12-13",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Who founded the All India Harijan Sevak Sangh?
     2.22s  <ret> 발화 (turn1 첫 프레임)
     2.99s  agent 발화 시작: <ret> The All India Harijan Sevak Sangh was founded by Mahat
     3.13s  user  발화 끝
     3.27s  ⚡SPAN 주입 [d'=1.05s / d_lead=11.92s]: Mahatma Gandhi founded the All India Harijan Sevak Sangh in 1932 to wo
    14.91s  agent 발화 끝
