# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Ruby",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-24",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-04-12",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "home",
#       "text": "User's home address is 633 Elm Street."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-07-09",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in December."
#     },
#     {
#       "date": "2025-07-06",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-24",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-12-26",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-12-11",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What are the details for the Starb | S2 Oh, uh, actually… | S3 …it's four seven eight four four a | S4 Is it walking distance from the ci

     0.00s  user  발화 시작: What are the details for the Starbucks with id four a seven 
     7.25s  <ret> 발화 (turn1 첫 프레임)
     7.48s  agent 발화 시작: <ret> That Starbucks is at one twenty-three Main Street in A
     7.49s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.56s]: (tool result) Starbucks - 123 Main St, Anytown, USA — open until 8 PM.
     7.74s  user  발화 끝
    13.04s  agent 발화 끝
    13.31s  user  발화 시작: Oh, uh, actually…
    15.06s  user  발화 끝
    16.67s  user  발화 시작: …it's four seven eight four four a two e nine nine three nin
    21.21s  <ret> 발화 (turn4 첫 프레임)
    21.37s  agent 발화 시작: <ret> My apologies. The Starbucks at four seventy-eight Oak 
    21.37s  ⚡SPAN 주입 [d'=1.92s / d_lead=6.02s]: (tool result) Starbucks - 456 Oak Ave, Anytown, USA — open until 9 PM.
    21.54s  user  발화 끝
    25.48s  user  발화 시작: Mm-hmm.
    25.98s  user  발화 끝
    27.38s  agent 발화 시작: It’s a lovely spot, if you’re looking for a quiet place to s
    27.40s  agent 발화 끝
    31.59s  agent 발화 끝
    31.74s  user  발화 시작: Is it walking distance from the city hall?
    34.06s  <ret> 발화 (turn8 첫 프레임)
    34.14s  agent 발화 시작: <ret> It looks like it’s about zero point six miles from Cit
    34.14s  ⚡SPAN 주입 [d'=1.60s / d_lead=6.44s]: (tool result) Distance: 0.6 miles, Estimated time: 12 minutes walking.
    34.23s  user  발화 끝
    40.41s  agent 발화 시작: I hope that helps you plan your day.
    40.58s  agent 발화 끝
    42.67s  agent 발화 끝
