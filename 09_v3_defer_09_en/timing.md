# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "보아",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-13",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-06-22",
#       "category": "home",
#       "text": "User's home address is 530 Elm Street."
#     },
#     {
#       "date": "2026-05-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-17",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-05-13",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.50s  <ret> 발화 (turn1 첫 프레임)
     5.73s  agent 발화 시작: <ret> Excellent! I’ve reserved three rooms at the Ocean View
     5.88s  user  발화 끝
     7.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: (tool result) Confirmation: three rooms reserved at Ocean View Hotel, 
     9.63s  user  발화 시작: Mm-hmm.
    10.13s  user  발화 끝
    11.38s  agent 발화 끝
    11.48s  user  발화 시작: What’s the cancellation policy?
    13.14s  <ret> 발화 (turn4 첫 프레임)
    13.27s  agent 발화 시작: <ret> The Ocean View Hotel in San Diego allows free cancella
    13.41s  user  발화 끝
    15.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.86s]: (tool result) Ocean View Hotel, San Diego: free cancellation until sev
    19.41s  user  발화 시작: Is parking included with the reservation?
    20.14s  agent 발화 끝
    21.62s  <ret> 발화 (turn6 첫 프레임)
    21.99s  user  발화 끝
    21.99s  agent 발화 시작: <ret> Parking is available at the hotel for twenty-five doll
    23.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.73s]: (tool result) Parking available at Ocean View Hotel, San Diego, twenty
    26.70s  agent 발화 시작: I can add parking to your reservation for an additional twen
    26.71s  agent 발화 끝
    31.89s  agent 발화 끝
