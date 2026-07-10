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

# EXAMINER(FDB-v2) 단계: S1 Book three rooms at Ocean View Hot | S2 …Does that fee include taxes? | S3 Okay. And can you send me directio | S4 Perfect.

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.49s  <ret> 발화 (turn1 첫 프레임)
     5.65s  agent 발화 시작: <ret> Wonderful. I’ve reserved three rooms at the Ocean View
     5.84s  user  발화 끝
     7.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.43s]: (tool result) Reservation confirmed: Ocean View Hotel, San Diego. Thre
    11.65s  user  발화 시작: Right.
    12.05s  user  발화 끝
    16.08s  agent 발화 끝
    16.11s  user  발화 시작: What’s the cancellation policy?
    17.76s  <ret> 발화 (turn4 첫 프레임)
    17.91s  agent 발화 시작: <ret> You can cancel up to forty-eight hours before arrival,
    18.09s  user  발화 끝
    19.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.24s]: (tool result) Cancellations accepted up to 48 hours prior to arrival. 
    22.38s  user  발화 시작: …Does that fee include taxes?
    23.15s  agent 발화 끝
    24.60s  agent 발화 시작: The fifty-dollar fee is exclusive of any applicable taxes.
    24.64s  user  발화 끝
    28.21s  agent 발화 끝
    28.21s  user  발화 시작: Okay. And can you send me directions to the hotel?
    31.06s  <ret> 발화 (turn8 첫 프레임)
    31.37s  agent 발화 시작: <ret> I’m sending directions to the Ocean View Hotel now. He
    31.59s  user  발화 끝
    33.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.32s]: (tool result) Directions to Ocean View Hotel, San Diego: Head north on
    36.69s  agent 발화 끝
    37.14s  user  발화 시작: Great, thanks. Is there parking available at the hotel?
    39.66s  <ret> 발화 (turn10 첫 프레임)
    40.05s  agent 발화 시작: <ret> Yes, valet parking is thirty-five dollars a night, but
    40.24s  user  발화 끝
    40.78s  ⚡SPAN 주입 [d'=1.12s / d_lead=5.09s]: (tool result) Valet parking is $35 per night. Self-parking is complime
    41.58s  user  발화 시작: Yeah.
    42.02s  user  발화 끝
    45.14s  agent 발화 끝
    46.22s  user  발화 시작: Perfect.
    46.99s  user  발화 끝
    47.04s  agent 발화 시작: Excellent.
    47.76s  agent 발화 끝
