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

# EXAMINER(FDB-v2) 단계: S1 Do you know when the A's were last | S2 …my friend just texted about dinne | S3 Hey, are we still on for Italian t | S4 Is he still playing?

     0.00s  user  발화 시작: Do you know when the A's were last no-hit? I'm curious.
     2.80s  <ret> 발화 (turn1 첫 프레임)
     3.19s  agent 발화 시작: <ret> The last time the A's were no-hit was April twenty-fir
     3.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.25s]: The Oakland Athletics were last no-hit on April 21, 2018, by Mike Fier
     3.33s  user  발화 끝
    11.28s  user  발화 시작: Wow, that was a while ago. Uhhh…
    11.45s  agent 발화 끝
    14.66s  user  발화 끝
    15.70s  user  발화 시작: …my friend just texted about dinner plans…
    18.42s  user  발화 끝
    20.15s  user  발화 시작: Hey, are we still on for Italian tonight?
    22.25s  user  발화 시작: …right, sorry. So, who pitched it?
    22.35s  user  발화 끝
    24.53s  <ret> 발화 (turn6 첫 프레임)
    24.75s  agent 발화 시작: <ret> That no-hitter was pitched by Mike Fiers, playing for 
    24.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.62s]: Mike Fiers of the Detroit Tigers pitched the no-hitter against the Oak
    24.83s  user  발화 끝
    28.26s  user  발화 시작: Okay.
    28.90s  user  발화 끝
    29.38s  agent 발화 끝
    29.44s  agent 발화 시작: It's a reminder that even in baseball, unexpected things can
    30.79s  user  발화 시작: Right.
    31.38s  user  발화 끝
    33.84s  agent 발화 끝
    34.12s  user  발화 시작: Is he still playing?
    35.23s  <ret> 발화 (turn11 첫 프레임)
    35.31s  agent 발화 시작: <ret> Mike Fiers retired after playing for the Philadelphia 
    35.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.86s]: Mike Fiers last played in Major League Baseball for the Philadelphia P
    35.36s  user  발화 끝
    42.16s  agent 발화 끝
