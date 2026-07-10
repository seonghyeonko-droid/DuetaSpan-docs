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

# EXAMINER(FDB-v2) 단계: S1 Book three rooms at Ocean View Hot | S2 Hmm, are there any good seafood re | S3 …do any of them have outdoor seati | S4 Let’s check if Mitch's has availab

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.02s  <ret> 발화 (turn1 첫 프레임)
     5.18s  user  발화 끝
     5.26s  agent 발화 시작: <ret> I’ve reserved three rooms for you at the Ocean View Ho
     5.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.22s]: (tool result) Confirmation: Ocean View Hotel, San Diego. Three rooms r
    16.35s  user  발화 시작: That sounds perfect, thank you. What’s the weather usually l
    16.48s  agent 발화 끝
    20.91s  agent 발화 시작: San Diego in February is generally mild and pleasant. It's a
    20.98s  user  발화 끝
    28.89s  agent 발화 끝
    29.26s  user  발화 시작: Hmm, are there any good seafood restaurants near the hotel?
    32.49s  <ret> 발화 (turn5 첫 프레임)
    32.77s  user  발화 끝
    32.81s  agent 발화 시작: <ret> There are several excellent seafood restaurants nearby
    32.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.86s]: (tool result) Five seafood restaurants near Ocean View Hotel, San Dieg
    38.94s  user  발화 시작: …do any of them have outdoor seating?
    39.67s  agent 발화 끝
    40.88s  agent 발화 시작: Mitch’s Seafood and Brigantine Seafood Restaurant both have 
    41.01s  user  발화 끝
    44.97s  user  발화 시작: Yeah.
    45.42s  user  발화 끝
    48.02s  agent 발화 시작: I can make a reservation for you at either one if you’d like
    48.25s  agent 발화 끝
    55.73s  user  발화 시작: Let’s check if Mitch's has availability for, say, February t
    55.81s  agent 발화 끝
    59.93s  <ret> 발화 (turn11 첫 프레임)
    60.17s  agent 발화 시작: <ret> Excellent. I’ve booked a table for three at Mitch’s Se
    60.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.36s]: (tool result) Reservation confirmed at Mitch’s Seafood for February 12
    60.22s  user  발화 끝
    71.53s  agent 발화 끝
