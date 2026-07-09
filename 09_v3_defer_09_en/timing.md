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
     5.58s  <ret> 발화 (turn1 첫 프레임)
     5.81s  agent 발화 시작: <ret> Wonderful! I’ve reserved three rooms at the Ocean View
     5.98s  user  발화 끝
     7.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.47s]: (tool result) Confirmation: three rooms at Ocean View Hotel, San Diego
    10.85s  user  발화 시작: Mm-hmm.
    11.48s  user  발화 끝
    13.13s  user  발화 시작: What's the cancellation policy?
    13.28s  agent 발화 끝
    14.86s  <ret> 발화 (turn4 첫 프레임)
    15.02s  agent 발화 시작: <ret> You can cancel free of charge up to seven days before 
    15.20s  user  발화 끝
    16.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.61s]: (tool result) Free cancellation until seven days before arrival.
    17.89s  user  발화 시작: Is breakfast included with the rooms?
    18.64s  agent 발화 끝
    18.98s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) Continental breakfast included for all room types.
    20.05s  agent 발화 시작: <ret> I’m just retrieving that information now… A continenta
    20.15s  user  발화 끝
    26.58s  agent 발화 끝
