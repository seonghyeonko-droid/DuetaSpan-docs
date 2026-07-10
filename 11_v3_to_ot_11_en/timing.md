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

# EXAMINER(FDB-v2) 단계: S1 I was just wondering, when was the | S2 Seriously, it’s overflowing. | S3 Sorry about that. Back to baseball | S4 That’s a good point. Thanks, Ellan

     0.00s  user  발화 시작: I was just wondering, when was the last time the A's got no-
     5.76s  <ret> 발화 (turn1 첫 프레임)
     6.16s  agent 발화 시작: <ret> The last time the A's were no-hit was… in April 2018.
     6.30s  user  발화 끝
     7.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.72s]: [source: MLB.com] The last time the A's were no-hit was April 21, 2018
    10.88s  agent 발화 끝
    11.00s  user  발화 시작: Wow, 2018. That’s a long time. Hey, honey, did you take out 
    16.61s  user  발화 시작: Seriously, it’s overflowing.
    16.74s  user  발화 끝
    18.73s  user  발화 시작: Sorry about that. Back to baseball, have they been close sin
    18.87s  user  발화 끝
    22.89s  agent 발화 시작: They’ve had some close calls, but haven’t quite seen another
    22.89s  user  발화 끝
    33.27s  agent 발화 끝
    34.51s  user  발화 시작: That’s a good point. Thanks, Ellana.
    36.45s  user  발화 끝
