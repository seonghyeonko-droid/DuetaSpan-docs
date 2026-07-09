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

# EXAMINER(FDB-v2) 단계: S1 Book three rooms at Ocean View Hot | S2 That sounds good. Are there any re | S3 …near the hotel that you would rec | S4 What kind of food does The Marine 

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     6.34s  <ret> 발화 (turn1 첫 프레임)
     6.57s  agent 발화 시작: <ret> Certainly. I’ve reserved three rooms at the Ocean View
     6.72s  user  발화 끝
     8.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.11s]: (tool result) Your reservation for three rooms at Ocean View Hotel in 
    10.78s  user  발화 시작: Mm-hmm.
    11.31s  user  발화 끝
    12.68s  agent 발화 끝
    12.75s  user  발화 시작: What’s the cancellation policy?
    14.74s  <ret> 발화 (turn4 첫 프레임)
    14.89s  agent 발화 시작: <ret> The Ocean View Hotel permits free cancellation up to s
    15.01s  user  발화 끝
    16.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.27s]: (tool result) Ocean View Hotel allows free cancellation until seventy-
    20.11s  user  발화 시작: That sounds good. Are there any restaurants.
    20.17s  agent 발화 끝
    22.70s  user  발화 끝
    22.85s  agent 발화 시작: It’s a very reasonable policy, and I’m glad—
    24.92s  user  발화 시작: …near the hotel that you would recommend?
    25.61s  agent 발화 끝
    26.58s  <ret> 발화 (turn8 첫 프레임)
    26.89s  agent 발화 시작: <ret> Ah, yes. Finding a good spot to eat is key to enjoying
    27.13s  user  발화 끝
    28.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.17s]: (tool result) Three restaurants are near Ocean View Hotel: The Marine 
    31.04s  agent 발화 시작: The Marine Room, Bali Hai Restaurant, and Mitch’s Seafood ar
    31.06s  agent 발화 끝
    35.98s  user  발화 시작: What kind of food does The Marine Room serve?
    36.17s  agent 발화 끝
    38.24s  <ret> 발화 (turn11 첫 프레임)
    38.53s  agent 발화 시작: <ret> The Marine Room specializes in contemporary American c
    38.70s  user  발화 끝
    40.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.60s]: (tool result) The Marine Room serves contemporary American cuisine wit
    44.13s  agent 발화 끝
