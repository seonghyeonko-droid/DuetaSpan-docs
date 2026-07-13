# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "Marie",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-05-09",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-04-12",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2026-03-23",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-01-24",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-10-26",
#       "category": "home",
#       "text": "User's home address is 334 Maple Drive."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-17",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I'm looking for coffee shops near Chicago, within three kilo
     4.44s  <ret> 발화 (turn1 첫 프레임)
     4.68s  agent 발화 시작: <ret> I found three coffee shops near Chicago. Intelligentsi
     4.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.95s]: (tool result) {"results": [{"name": "Intelligentsia Coffee", "vicinity
     4.68s  user  발화 끝
    12.63s  user  발화 시작: Exactly.
    12.63s  agent 발화 끝
    13.10s  agent 발화 시작: Starbucks is at 150 North Michigan Avenue, with a 4.0 rating
    13.10s  user  발화 끝
    23.39s  user  발화 시작: That's great! Can you reserve a table for two at Dark Matter
    23.39s  agent 발화 끝
    30.55s  <ret> 발화 (turn5 첫 프레임)
    30.87s  agent 발화 시작: <ret> I’ve reserved a table for two at Dark Matter Coffee th
    30.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.29s]: (tool result) {"confirmation id": "DM7294", "restaurant name": "Dark M
    30.87s  user  발화 끝
    41.16s  user  발화 시작: Perfect, thank you! What’s the weather forecast for Saturday
    41.16s  agent 발화 끝
    45.91s  <ret> 발화 (turn7 첫 프레임)
    46.31s  agent 발화 시작: <ret> Saturday in Chicago will be partly cloudy with a tempe
    46.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.69s]: (tool result) {"temperature": 26.5, "humidity": 68, "wind speed": 8.2,
    46.31s  user  발화 끝
    58.00s  agent 발화 끝
