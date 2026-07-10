# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Rowan",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-03",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-07-12",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-08",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-24",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you know when the Oakland A's w | S2 Can you believe how long ago that  | S3 So, who pitched the no-hitter agai | S4 Perfect, thanks so much! I really 

     0.00s  user  발화 시작: Do you know when the Oakland A's were last no-hit? I’m tryin
     4.37s  <ret> 발화 (turn1 첫 프레임)
     4.68s  user  발화 끝
     4.76s  agent 발화 시작: <ret> The last time the A's were no-hit was April twenty-fir
     6.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.02s]: The Oakland Athletics were last no-hit on April 21, 2018.
    12.58s  user  발화 시작: Wow, that long ago! Uhhh, I thought it was more recent.
    12.78s  agent 발화 끝
    16.80s  user  발화 시작: Can you believe how long ago that was?
    16.97s  user  발화 끝
    18.91s  user  발화 시작: So, who pitched the no-hitter against them?
    19.05s  user  발화 끝
    21.18s  <ret> 발화 (turn5 첫 프레임)
    21.41s  agent 발화 시작: <ret> James Paxton of the Seattle Mariners pitched that game
    21.68s  user  발화 끝
    23.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.27s]: James Paxton pitched a no-hitter against the Oakland Athletics on Apri
    30.69s  agent 발화 끝
    32.24s  user  발화 시작: Perfect, thanks so much! I really appreciate it.
    34.78s  user  발화 끝
