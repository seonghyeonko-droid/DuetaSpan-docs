# v3_rags_29_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "Lukas",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "mid 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-15",
#       "category": "allergy",
#       "text": "User is allergic to gluten."
#     },
#     {
#       "date": "2026-06-14",
#       "category": "sibling",
#       "text": "User has a younger sibling named Elena."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "hobby",
#       "text": "User is into urban sketching."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "anniversary",
#       "text": "User's anniversary is April 9."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-01",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     },
#     {
#       "date": "2026-01-16",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-01-01",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: What is the energy called that comes directly from inside th
     1.41s  agent 발화 시작: Yeah, yeah.
     2.79s  agent 발화 끝
     3.11s  <ret> 발화 (turn2 첫 프레임)
     3.57s  agent 발화 시작: <ret> That energy you’re asking about is called geothermal h
     3.65s  user  발화 끝
     3.95s  ⚡SPAN 주입 [d'=0.84s / d_lead=6.86s]: Geothermal heat flux is the flow of heat from the Earth's interior to 
    10.43s  agent 발화 끝
