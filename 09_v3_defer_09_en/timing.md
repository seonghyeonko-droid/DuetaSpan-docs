# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "Chloe",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-24",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "home",
#       "text": "User's home address is 530 Elm Street."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-10-20",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-08-12",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-07-04",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-24",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-27",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.35s  <ret> 발화 (turn1 첫 프레임)
     5.42s  user  발화 끝
     5.59s  agent 발화 시작: <ret> I’ve reserved three rooms for you at the Ocean View Ho
     7.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.09s]: (tool result) Reservation confirmed for 3 rooms at Ocean View Hotel in
    11.91s  user  발화 시작: …Is parking included with the reservation?
    12.68s  agent 발화 끝
    13.83s  <ret> 발화 (turn3 첫 프레임)
    13.98s  agent 발화 시작: <ret> Parking is available at the Ocean View Hotel for thirt
    14.22s  user  발화 끝
    15.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.23s]: (tool result) Ocean View Hotel, San Diego: parking available, $35 per 
    17.56s  user  발화 시작: Mm-hmm.
    18.05s  user  발화 끝
    19.21s  agent 발화 끝
    19.24s  user  발화 시작: Okay, that’s reasonable. Can you add a rental car to my rese
    22.91s  <ret> 발화 (turn6 첫 프레임)
    23.31s  agent 발화 시작: <ret> A compact car is available from Hertz for sixty-five d
    23.39s  user  발화 끝
    24.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.81s]: (tool result) Compact car available from Hertz, $65 per day.
    30.12s  agent 발화 끝
