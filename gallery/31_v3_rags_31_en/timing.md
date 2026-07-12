# v3_rags_31_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "Thomas",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-26",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in October."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-29",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-02",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Do you know who sang “The End of the Rainbow”?
     2.95s  <ret> 발화 (turn1 첫 프레임)
     3.19s  agent 발화 시작: <ret> That was Earl Grant, actually—he released it in ninete
     3.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.33s]: Earl Grant released the song “The End of the Rainbow” in 1958, and it 
     3.19s  user  발화 끝
    10.52s  agent 발화 끝
