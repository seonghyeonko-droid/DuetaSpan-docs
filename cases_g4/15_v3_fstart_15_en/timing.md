# v3_fstart_15_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "Mason",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "male",
#     "age_range": "60s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "diet",
#       "text": "User is kosher."
#     },
#     {
#       "date": "2026-06-16",
#       "category": "plant",
#       "text": "User is growing basil on the windowsill at home."
#     },
#     {
#       "date": "2026-06-06",
#       "category": "dislike",
#       "text": "User can't stand durian."
#     },
#     {
#       "date": "2026-05-16",
#       "category": "schedule",
#       "text": "User has a 9-to-6 weekday schedule."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "anniversary",
#       "text": "User's anniversary is July 5."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "trip",
#       "text": "User is planning a trip to Hokkaido in December."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "car",
#       "text": "User drives a 2020 Kia Niro."
#     },
#     {
#       "date": "2025-12-14",
#       "category": "floor",
#       "text": "User lives on the 3rd floor."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-17",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     },
#     {
#       "date": "2026-03-16",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2025-12-14",
#       "title": "Sorting out a visa",
#       "bullets": [
#         "applying for a working-holiday visa to Australia",
#         "asked about the bank-balance requirement"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Could you find a— actually, never mind. Can you start a craw
     2.95s  agent 발화 시작: Yeah, totally.
     4.37s  agent 발화 끝
     6.49s  <ret> 발화 (turn2 첫 프레임)
     6.51s  agent 발화 시작: <ret> [happy] I've got that done for you. I crawled twenty p
     6.67s  user  발화 끝
     7.86s  ⚡SPAN 주입 [d'=1.37s / d_lead=8.90s]: (tool result) 20 page(s) from https://www.nytimes.com/: https://www.ny
    15.41s  agent 발화 끝
    16.32s  user  발화 시작: Thanks, Marien. I'm just trying to find some educational art
    21.46s  user  발화 끝
    21.91s  agent 발화 시작: That sounds lovely. Focusing on the process of discovery tog
    28.21s  agent 발화 끝
