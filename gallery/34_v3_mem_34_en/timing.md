# v3_mem_34_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "David",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-08",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-17",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-08-29",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-08-22",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-06-27",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-06-03",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-04",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-03-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-27",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Yes, actually. I need to get to my | S2 That sounds about right. | S3 Yes, I am. | S4 Nelson Street sounds perfect.

     0.00s  agent 발화 시작: Hi David, I'm Elun. It's lovely to meet you. I understand yo
     0.08s  <ret> 발화 (turn2 첫 프레임)
     0.10s  user  발화 시작: Yes, actually. I need to get to my sister's place.
     0.10s  agent 발화 끝
     0.16s  agent 발화 시작: <ret> I see in our past chats you mentioned wanting outdoor 
     0.16s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: [2026-03-22] Past chat — Planning a birthday dinner: party of six; loo
     0.16s  user  발화 끝
     0.19s  <ret> 발화 (turn9 첫 프레임)
     0.21s  <ret> 발화 (turn4 첫 프레임)
     0.24s  user  발화 시작: …actually, that’s not relevant. Her address is 14 Oak Avenue
     0.24s  agent 발화 끝
     0.29s  agent 발화 시작: <ret> The distance to Bristol is around 197.8 kilometers, an
     0.29s  ⚡SPAN 주입 [d'=0.12s / d_lead=0.12s]: (tool result) Distance: 197.8 km, Estimated time: 3 hours 12 minutes, 
     0.29s  user  발화 끝
     0.34s  <ret> 발화 (turn14 첫 프레임)
     0.41s  user  발화 시작: Exactly.
     0.41s  agent 발화 끝
     0.41s  user  발화 시작: That sounds about right.
     0.41s  user  발화 끝
     0.43s  agent 발화 시작: It's a fairly straightforward drive. Are you thinking of dri
     0.43s  user  발화 끝
     0.50s  user  발화 시작: Yes, I am.
     0.50s  agent 발화 끝
     0.51s  agent 발화 시작: <ret> There’s moderate congestion near Reading, which may ad
     0.51s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: (tool result) Traffic: Moderate congestion near Reading, delays of 15-
     0.51s  user  발화 끝
     0.59s  user  발화 시작: Mhm.
     0.59s  agent 발화 끝
     0.60s  agent 발화 시작: Just a heads-up to factor that in. Would you like me to look
     0.60s  user  발화 끝
     0.70s  user  발화 시작: Mm-hmm.
     0.70s  agent 발화 끝
     0.70s  user  발화 시작: That would be really helpful, thank you.
     0.70s  user  발화 끝
     0.74s  agent 발화 시작: <ret> There are a couple of options – Nelson Street is a 5-m
     0.74s  ⚡SPAN 주입 [d'=0.15s / d_lead=0.15s]: (tool result) Several car parks nearby: Nelson Street (5-minute walk, 
     0.74s  user  발화 끝
     0.88s  user  발화 시작: Nelson Street sounds perfect.
     0.88s  agent 발화 끝
     0.91s  agent 발화 시작: Wonderful. It seems like a convenient option. I hope you hav
     0.91s  user  발화 끝
     1.00s  agent 발화 끝
