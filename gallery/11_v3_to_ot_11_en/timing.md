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

# EXAMINER(FDB-v2) 단계: S1 Hey, uh, when was the last time th | S2 Can you believe the price of gas t | S3 Anyway, um, what about the Yankees | S4 Huh. So it’s been more recent for 

     0.00s  user  발화 시작: Hey, uh, when was the last time the A's were no-hit? I think
     4.99s  <ret> 발화 (turn1 첫 프레임)
     5.38s  agent 발화 시작: <ret> The last time the Oakland A’s were no-hit was… on Apri
     5.46s  user  발화 끝
     6.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.63s]: "[source: Baseball-Reference.com] The last time the Oakland Athletics 
    11.81s  user  발화 시작: Wow, that *was* a long time ago. I remember that game being 
    12.01s  agent 발화 끝
    16.30s  user  발화 시작: Can you believe the price of gas these days?
    16.49s  user  발화 끝
    18.63s  user  발화 시작: Anyway, um, what about the Yankees? When were *they* last no
    18.71s  user  발화 끝
    22.69s  <ret> 발화 (turn5 첫 프레임)
    22.79s  user  발화 끝
    22.91s  agent 발화 시작: <ret> The New York Yankees were last no-hit on May 5th, 2022
    24.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.55s]: "(tool result) The New York Yankees were last no-hit on May 5, 2022, b
    32.03s  user  발화 시작: Huh. So it’s been more recent for them. Good to know.
    32.47s  agent 발화 끝
    34.80s  user  발화 끝
