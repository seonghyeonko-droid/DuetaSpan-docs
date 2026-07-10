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

# EXAMINER(FDB-v2) 단계: S1 I was just wondering… when was the | S2 Did you take the recycling out? | S3 Sorry about that. Back to baseball | S4 Oh, James Paxton! I remember heari

     0.00s  user  발화 시작: I was just wondering… when was the last time the A’s got no-
     4.96s  <ret> 발화 (turn1 첫 프레임)
     5.28s  user  발화 끝
     5.35s  agent 발화 시작: <ret> The last time the A’s were no-hit was… in April 2018. 
     6.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.59s]: [source: Baseball-Reference.com] The last no-hitter against the Oaklan
    10.73s  user  발화 시작: Wow, 2018… that *is* a while. Hey, Mark, did you take the re
    10.94s  agent 발화 끝
    15.49s  user  발화 시작: Did you take the recycling out?
    15.64s  user  발화 끝
    17.21s  user  발화 시작: Sorry about that. Back to baseball, who pitched that no-hitt
    17.33s  user  발화 끝
    23.34s  <ret> 발화 (turn5 첫 프레임)
    23.55s  agent 발화 시작: <ret> The pitcher who threw the no-hitter against the A’s wa
    23.83s  user  발화 끝
    25.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: [source: MLB.com] James Paxton of the Seattle Mariners pitched a no-hi
    29.34s  agent 발화 끝
    30.82s  user  발화 시작: Oh, James Paxton! I remember hearing about that game. Thanks
    36.19s  user  발화 끝
