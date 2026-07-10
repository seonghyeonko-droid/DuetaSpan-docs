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

# EXAMINER(FDB-v2) 단계: S1 Hey, uh, do you know when the last | S2 Can you believe how… | S3 Anyway, who pitched it? | S4 True enough. I’m always exhausted.

     0.00s  user  발화 시작: Hey, uh, do you know when the last time was that the Oakland
     4.86s  <ret> 발화 (turn1 첫 프레임)
     5.24s  agent 발화 시작: <ret> The last time the A’s were no-hit was April twenty-fir
     5.38s  user  발화 끝
     6.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.39s]: The Oakland Athletics were last no-hit on April 21, 2018.
    13.44s  user  발화 시작: Wow, really? That long ago…
    13.64s  agent 발화 끝
    16.45s  user  발화 끝
    17.46s  user  발화 시작: Can you believe how…
    18.93s  user  발화 끝
    20.72s  user  발화 시작: …expensive groceries are these days?
    22.72s  user  발화 시작: Anyway, who pitched it?
    22.84s  user  발화 끝
    23.87s  <ret> 발화 (turn6 첫 프레임)
    24.10s  agent 발화 시작: <ret> James Shields, pitching for the White Sox, threw the n
    24.14s  user  발화 끝
    25.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.33s]: James Shields of the White Sox pitched a no-hitter against the Athleti
    29.43s  agent 발화 끝
    30.04s  user  발화 시작: Shields, huh? I remember him.
    32.86s  user  발화 끝
    32.88s  agent 발화 시작: He had a solid career. Getting enough quality rest is import
    40.90s  agent 발화 끝
    42.15s  user  발화 시작: True enough. I’m always exhausted.
    44.78s  user  발화 끝
    44.80s  agent 발화 시작: Well, perhaps we could explore some strategies to improve yo
    53.33s  agent 발화 끝
