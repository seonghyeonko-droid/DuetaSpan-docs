# v3_pers_38_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_38",
#     "name": "Adam",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-09",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-01-19",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "home",
#       "text": "User's home address is 886 Maple Drive."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-03",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-04-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-09-17",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Ben. That's… reassuring, actual | S2 Wow. Okay, that’s… a lot. | S3 Oh great. That sounds… fun. | S4 Okay, that's helpful.

     0.00s  agent 발화 시작: Hello Adam, it’s lovely to meet you.
     2.15s  user  발화 시작: Mhm.
     2.64s  user  발화 끝
     3.01s  user  발화 시작: Hi Ben. That's… reassuring, actually. I’m a bit overwhelmed,
     3.13s  agent 발화 끝
     7.89s  agent 발화 시작: It’s perfectly normal to feel overwhelmed when moving to a n
     8.01s  user  발화 끝
    12.63s  user  발화 시작: Yeah.
    13.26s  user  발화 끝
    15.67s  agent 발화 끝
    15.79s  user  발화 시작: Just… everything, I guess. Finding a good neighborhood feels
    20.87s  user  발화 끝
    21.07s  agent 발화 시작: Neighborhoods really set the tone for how you experience a c
    23.06s  user  발화 시작: Yeah.
    23.59s  user  발화 끝
    27.43s  agent 발화 끝
    27.43s  user  발화 시작: Somewhere not too hectic, but not completely isolated. Good 
    33.08s  user  발화 끝
    33.39s  agent 발화 시작: A balance is key, isn’t it? Somewhere with community, but st
    41.11s  user  발화 시작: I’ve heard of it. Is it expensive?
    41.27s  agent 발화 끝
    43.06s  agent 발화 시작: The Inner West can be a little pricey, with houses around $1
    43.32s  user  발화 끝
    53.21s  user  발화 시작: Wow. Okay, that’s… a lot.
    53.22s  agent 발화 끝
    56.68s  user  발화 끝
    56.69s  agent 발화 시작: It is a competitive market. Perhaps we could look at areas s
    62.33s  agent 발화 끝
    62.40s  user  발화 시작: Like where?
    63.55s  user  발화 끝
    63.60s  agent 발화 시작: Newtown, still in the Inner West, has a population around 10
    67.43s  user  발화 시작: Yeah.
    68.07s  user  발화 끝
    72.45s  agent 발화 시작: It's a vibrant area with a lot of character, known for its m
    72.60s  agent 발화 끝
    77.84s  user  발화 시작: Yeah.
    78.29s  user  발화 끝
    81.12s  agent 발화 끝
    81.70s  user  발화 시작: Sounds good, but I’m also worried about transport. I need to
    86.98s  user  발화 끝
    87.27s  agent 발화 시작: Transport links are crucial. The Inner West generally has ex
    92.82s  user  발화 시작: …What about parking, though? I still have my car.
    93.52s  agent 발화 끝
    96.05s  agent 발화 시작: Parking can be challenging in some Inner West areas, especia
    96.19s  user  발화 끝
   103.74s  agent 발화 끝
   103.98s  user  발화 시작: Oh great. That sounds… fun.
   106.76s  user  발화 끝
   106.98s  agent 발화 시작: It’s definitely something to consider. We could explore area
   110.58s  user  발화 시작: Right.
   111.08s  user  발화 끝
   114.32s  user  발화 시작: Maybe. What’s the deal with getting a driver’s license trans
   114.49s  agent 발화 끝
   118.98s  agent 발화 시작: You'll need to visit a Service NSW centre and present your c
   119.18s  user  발화 끝
   128.52s  agent 발화 끝
   129.75s  user  발화 시작: That doesn’t sound too bad, actually.
   131.83s  user  발화 끝
   131.86s  agent 발화 시작: It’s often the little things that feel manageable, isn’t it?
   137.17s  user  발화 시작: True. I'm also trying to figure out internet providers.
   137.27s  agent 발화 끝
   141.15s  user  발화 끝
   141.38s  agent 발화 시작: Telstra has plans starting around $65 a month for unlimited 
   149.59s  agent 발화 끝
   149.89s  user  발화 시작: Okay, that's helpful.
   151.50s  user  발화 끝
   151.60s  agent 발화 시작: There are many providers to choose from, each with different
   159.01s  agent 발화 끝
   159.06s  user  발화 시작: I guess so. It’s just… a lot to take in.
   162.81s  agent 발화 시작: It absolutely is, Adam. It's okay to feel overwhelmed. We ca
   162.90s  user  발화 끝
   169.57s  user  발화 시작: Thanks, Ben. I appreciate that.
   169.67s  agent 발화 끝
   171.74s  agent 발화 시작: Remember, settling in takes time. I'm here to help you navig
   171.79s  user  발화 끝
   180.01s  user  발화 시작: That actually sounds really good. Something to meet people.
   180.27s  agent 발화 끝
   183.15s  agent 발화 시작: Exactly. A sense of connection can make all the difference. 
   183.24s  user  발화 끝
   189.59s  agent 발화 끝
