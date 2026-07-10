# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Andrea",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-02",
#       "category": "home",
#       "text": "User's home address is 670 Oak Avenue."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in August."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-07-09",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-11",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-09-06",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-05",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Mark report five as complete. | S2 And can you find me restaurants ne | S3 Book a table for two at La Scala f | S4 That sounds lovely. Thank you, Nio

     0.00s  user  발화 시작: Mark report five as complete.
     1.28s  <ret> 발화 (turn1 첫 프레임)
     1.52s  agent 발화 시작: <ret> Okay, I’ve created order 789456 to mark report five as
     1.52s  ⚡SPAN 주입 [d'=1.52s / d_lead=6.11s]: (tool result) Order 789456 created for report completion.
     1.75s  user  발화 끝
     7.63s  agent 발화 끝
     7.87s  user  발화 시작: And can you find me restaurants nearby, uhhh, actually, near
    12.00s  <ret> 발화 (turn3 첫 프레임)
    12.16s  agent 발화 시작: <ret> I found five restaurants near the Opera House, includi
    12.16s  ⚡SPAN 주입 [d'=1.92s / d_lead=5.70s]: (tool result) Found five restaurants near the Opera House: La Scala (I
    12.32s  user  발화 끝
    13.90s  user  발화 시작: Okay.
    14.54s  user  발화 끝
    17.86s  agent 발화 끝
    18.30s  user  발화 시작: Book a table for two at La Scala for tomorrow at 7 PM.
    22.12s  <ret> 발화 (turn6 첫 프레임)
    22.35s  agent 발화 시작: <ret> Excellent. Your reservation at La Scala is confirmed f
    22.35s  user  발화 끝
    22.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.95s]: (tool result) Reservation confirmed at La Scala for two people tomorro
    33.30s  agent 발화 끝
    33.35s  user  발화 시작: That sounds lovely. Thank you, Nioen.
    35.34s  agent 발화 시작: You’re very welcome. I'm glad I could help with your evening
    35.52s  user  발화 끝
    39.23s  agent 발화 끝
