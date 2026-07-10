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

# EXAMINER(FDB-v2) 단계: S1 I was just wondering… has that hap | S2 Wow, that was a while ago. Hey, Ma | S3 Seriously, it's overflowing! | S4 Sorry about that. So, who was pitc

     0.00s  user  발화 시작: I was just wondering… has that happened to the A’s recently?
     5.47s  <ret> 발화 (turn1 첫 프레임)
     5.84s  user  발화 끝
     5.86s  agent 발화 시작: <ret> It’s good to think about the history of the game. Let’
     7.31s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.98s]: [source: Baseball-Reference.com] The Oakland Athletics were last no-hi
     9.67s  agent 발화 시작: The last time the A’s were no-hit was April twenty-first, tw
     9.84s  agent 발화 끝
    15.09s  agent 발화 끝
    16.18s  user  발화 시작: Wow, that was a while ago. Hey, Mark, did you remember to ta
    20.03s  user  발화 시작: Seriously, it's overflowing!
    20.11s  user  발화 끝
    21.76s  user  발화 시작: Sorry about that. So, who was pitching for the A’s that day?
    21.88s  user  발화 끝
    25.47s  <ret> 발화 (turn6 첫 프레임)
    25.60s  user  발화 끝
    25.69s  agent 발화 시작: <ret> Frankie Montas was the Athletics’ starting pitcher on 
    26.99s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.14s]: [source: Baseball-Reference.com] On April 21, 2018, the Oakland Athlet
    30.66s  agent 발화 시작: It’s interesting to look back at those matchups, isn’t it?
    30.83s  agent 발화 끝
    33.19s  agent 발화 끝
