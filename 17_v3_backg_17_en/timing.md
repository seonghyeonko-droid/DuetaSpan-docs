# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "Avery",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-07",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-02-25",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-04",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-08-21",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 So, if a shipment is fob destinati | S2 That makes sense. What about insur | S3 What if I want to arrange the ship | S4 Did you remember to lock the back 

     0.00s  user  발화 시작: So, if a shipment is fob destination, who is responsible for
     4.33s  <ret> 발화 (turn1 첫 프레임)
     4.67s  user  발화 끝
     4.73s  agent 발화 시작: <ret> Well, that's a really good question. When shipping ter
     4.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.42s]: In fob destination, the seller retains ownership and responsibility fo
    11.46s  user  발화 시작: …but what if the goods are damaged in transit?
    12.14s  agent 발화 끝
    13.71s  user  발화 끝
    13.77s  agent 발화 시작: That’s a valid concern. Let's come back to that after we cov
    19.50s  agent 발화 끝
    19.69s  user  발화 시작: Okay, good idea.
    20.69s  <ret> 발화 (turn5 첫 프레임)
    20.69s  user  발화 끝
    20.84s  agent 발화 시작: <ret> The seller is responsible for everything until the goo
    20.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.16s]: Fob destination means the seller bears all responsibility for loss or 
    25.16s  user  발화 시작: Yeah, yeah.
    26.77s  user  발화 끝
    26.95s  agent 발화 시작: It’s about ensuring you receive what you expect, without une
    27.00s  agent 발화 끝
    30.91s  user  발화 시작: Mm-hmm.
    31.41s  user  발화 끝
    32.20s  user  발화 시작: That makes sense. What about insurance in that case?
    32.23s  agent 발화 끝
    34.49s  <ret> 발화 (turn10 첫 프레임)
    34.81s  agent 발화 시작: <ret> Insurance is usually factored into the seller’s price 
    34.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.91s]: Insurance costs are typically included in the seller's fob destination
    34.97s  user  발화 끝
    38.20s  user  발화 시작: Mm-hmm.
    38.83s  user  발화 끝
    41.60s  user  발화 시작: So, the buyer doesn’t pay for that separately?
    41.72s  agent 발화 끝
    44.07s  agent 발화 시작: No, the buyer doesn't pay for insurance separately under fob
    44.13s  user  발화 끝
    50.19s  agent 발화 끝
    51.23s  user  발화 시작: What if I want to arrange the shipping myself?
    53.73s  user  발화 끝
    54.17s  agent 발화 시작: That would change the terms. We could explore fob shipping p
    57.86s  user  발화 시작: Yeah, yeah.
    58.97s  user  발화 끝
    59.72s  user  발화 시작: Hmm, maybe later. One more question – what…
    59.72s  agent 발화 끝
    62.31s  user  발화 끝
    63.71s  user  발화 시작: …if it's an international shipment?
    65.39s  <ret> 발화 (turn19 첫 프레임)
    65.63s  agent 발화 시작: <ret> Even with international shipping, the seller is still 
    65.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.30s]: International fob destination shipments still place the freight cost a
    65.79s  user  발화 끝
    68.90s  user  발화 시작: Mm-hmm.
    69.39s  user  발화 끝
    71.93s  agent 발화 끝
    73.13s  user  발화 시작: Did you remember to lock the back door?
    75.02s  agent 발화 시작: It’s about creating a clear agreement and protecting both pa
    75.10s  user  발화 끝
    79.05s  user  발화 시작: Yes, it is. Thanks, Bari.
    79.18s  agent 발화 끝
    81.12s  user  발화 끝
