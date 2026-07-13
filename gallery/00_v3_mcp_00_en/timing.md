# v3_mcp_00_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "William",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-22",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-04-14",
#       "category": "home",
#       "text": "User's home address is 828 Birch Road."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-11-17",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-01",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-12",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-11-27",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-07-10",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I need to pay CoffeeShop three dollars and ninety-nine cents
     5.30s  <ret> 발화 (turn1 첫 프레임)
     5.51s  agent 발화 시작: <ret> That’s done! Three dollars and ninety-nine cents to Co
     5.51s  user  발화 끝
     6.06s  ⚡SPAN 주입 [d'=0.76s / d_lead=6.70s]: (tool result) Payment successful. Transaction ID: 92817465. Remaining 
    12.21s  user  발화 시작: Oh, great. Do you think I should text my sister about it?
    12.21s  agent 발화 끝
    16.94s  agent 발화 시작: That sounds like a lovely idea. Sharing little wins can real
    16.94s  user  발화 끝
    23.24s  agent 발화 끝
