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

# EXAMINER(FDB-v2) 단계: S1 Hey, do you know the last time the | S2 Wow, really? That was… a while bac | S3 Sorry about that. So, 2018… that’s | S4 I guess so. It's just frustrating 

     0.00s  user  발화 시작: Hey, do you know the last time the Oakland A's were no-hit? 
     4.17s  <ret> 발화 (turn1 첫 프레임)
     4.56s  agent 발화 시작: <ret> That happened on April twenty-first, two thousand eigh
     4.72s  user  발화 끝
     6.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.77s]: The Oakland Athletics were last no-hit on April 21, 2018.
    11.18s  user  발화 시작: Wow, really? That was… a while back. Uh, honey, can you grab
    11.33s  agent 발화 끝
    17.25s  user  발화 시작: Sorry about that. So, 2018… that’s quite a stretch.
    17.43s  user  발화 끝
    21.09s  agent 발화 시작: It is a significant gap, yes. It’s understandable to feel li
    21.18s  user  발화 끝
    29.44s  agent 발화 끝
    29.57s  user  발화 시작: I guess so. It's just frustrating as a fan.
    32.35s  user  발화 끝
    32.39s  agent 발화 시작: Being a fan definitely has its ups and downs, doesn't it? So
    40.69s  agent 발화 끝
