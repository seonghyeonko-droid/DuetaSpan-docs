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
     6.04s  <ret> 발화 (turn1 첫 프레임)
     6.27s  agent 발화 시작: <ret> Certainly. I’ve reserved three rooms at the Ocean View
     6.44s  user  발화 끝
     8.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.35s]: (tool result) Your reservation for three rooms at Ocean View Hotel in 
    10.66s  user  발화 시작: Mm-hmm.
    11.39s  user  발화 끝
    12.62s  agent 발화 끝
    12.69s  user  발화 시작: What’s the cancellation policy?
    14.39s  <ret> 발화 (turn4 첫 프레임)
    14.53s  agent 발화 시작: <ret> The Ocean View Hotel permits free cancellation up to s
    14.67s  user  발화 끝
    16.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.37s]: (tool result) Ocean View Hotel allows free cancellation until seventy-
    19.86s  user  발화 시작: That sounds good. Are there any restaurants.
    19.90s  agent 발화 끝
    22.45s  user  발화 끝
    22.47s  agent 발화 시작: It’s a very reasonable policy, and I’m glad—
    24.60s  user  발화 시작: …near the hotel that you would recommend?
    25.24s  agent 발화 끝
    26.41s  <ret> 발화 (turn8 첫 프레임)
    26.72s  agent 발화 시작: <ret> Ah, yes. Finding a good spot to eat is key to enjoying
    26.95s  user  발화 끝
    28.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.74s]: (tool result) Three restaurants are near Ocean View Hotel: The Marine 
    30.34s  agent 발화 시작: The Marine Room, Bali Hai Restaurant, and Mitch’s Seafood ar
    30.46s  agent 발화 끝
    34.89s  user  발화 시작: What kind of food does The Marine Room serve?
    35.06s  agent 발화 끝
    36.97s  <ret> 발화 (turn11 첫 프레임)
    37.28s  agent 발화 시작: <ret> The Marine Room specializes in contemporary American c
    37.48s  user  발화 끝
    38.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.47s]: (tool result) The Marine Room serves contemporary American cuisine wit
    42.75s  agent 발화 끝
