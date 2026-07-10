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

# EXAMINER(FDB-v2) 단계: S1 Hey, do you know when the A's were | S2 …time ago. Uhhh… my sister just te | S3 She says she's bringing pizza over | S4 Yeah, it is. Do you have any tips 

     0.00s  user  발화 시작: Hey, do you know when the A's were last no-hit? It feels lik
     4.13s  <ret> 발화 (turn1 첫 프레임)
     4.51s  agent 발화 시작: <ret> The last time the A's were no-hit was… April twenty-fi
     4.67s  user  발화 끝
     6.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.13s]: The last time the Oakland Athletics were no-hit was May 9, 2023, when 
    15.43s  user  발화 시작: Wow, really? That *was* a long…
    15.64s  agent 발화 끝
    19.28s  user  발화 끝
    20.32s  user  발화 시작: …time ago. Uhhh… my sister just texted.
    23.74s  user  발화 시작: She says she's bringing pizza over later.
    23.84s  user  발화 끝
    25.99s  user  발화 시작: Sorry, where were we? Right, the A’s.
    26.10s  user  발화 끝
    28.11s  <ret> 발화 (turn6 첫 프레임)
    28.34s  agent 발화 시작: <ret> We were discussing that game. It can be surprisingly u
    28.39s  user  발화 끝
    30.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.95s]: [April 21, 2018, the Los Angeles Angels pitched a combined no-hitter a
    30.54s  user  발화 시작: Right.
    30.99s  user  발화 끝
    35.28s  user  발화 시작: Yeah, it is. Do you have any tips for dealing with frustrati
    35.30s  agent 발화 끝
    39.16s  user  발화 끝
    39.21s  agent 발화 시작: Sometimes a simple breathing exercise can help center you. F
    44.58s  user  발화 시작: Okay.
    45.13s  user  발화 끝
    46.16s  agent 발화 시작: A regular sleep schedule also contributes to emotional resil
    46.25s  agent 발화 끝
    53.34s  agent 발화 끝
