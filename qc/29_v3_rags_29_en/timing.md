# v3_rags_29_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "Elias",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "late 40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-06",
#       "category": "emergency",
#       "text": "User's emergency contact is Sofia."
#     },
#     {
#       "date": "2026-06-04",
#       "category": "anniversary",
#       "text": "User's anniversary is June 16."
#     },
#     {
#       "date": "2026-05-26",
#       "category": "sibling",
#       "text": "User has a younger sibling named Minjun."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "show",
#       "text": "User is currently watching a stand-up comedy special."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "medication",
#       "text": "User takes antihistamines in spring."
#     },
#     {
#       "date": "2026-01-16",
#       "category": "coffee",
#       "text": "User's usual coffee order is a flat white."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "trip",
#       "text": "User is planning a trip to Jordan in April."
#     },
#     {
#       "date": "2025-12-18",
#       "category": "gym",
#       "text": "User has a gym membership near the station."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-12",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2026-02-18",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     },
#     {
#       "date": "2026-01-02",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: What do you call…
     1.88s  user  발화 시작: …a cracker in England?
     1.88s  user  발화 끝
     3.76s  agent 발화 시작: Yeah.
     3.76s  user  발화 끝
     3.78s  <ret> 발화 (turn3 첫 프레임)
     4.23s  agent 발화 시작: <ret> Well, that's an interesting one—in England, what Ameri
     4.23s  agent 발화 끝
     4.62s  ⚡SPAN 주입 [d'=0.84s / d_lead=8.00s]: In British English, a cracker is generally known as a biscuit, though 
    12.23s  agent 발화 끝
