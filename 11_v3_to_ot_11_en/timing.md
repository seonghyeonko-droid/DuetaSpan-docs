# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Toaira",
#     "location": {
#       "city": "Tokyo",
#       "country": "Japan",
#       "timezone": "Asia/Tokyo (JST, UTC+9)",
#       "currency": "JPY (¥)"
#     },
#     "nationality": "Japanese",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Japanese"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-24",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-07-09",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-05-28",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "work",
#       "text": "User works as a software engineer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-14",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-23",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just wondering, have the Oak | S2 Wow, not *that* long ago. I though | S3 Hey, did you remember to take the  | S4 Sorry about that. Back to baseball

     0.00s  user  발화 시작: I was just wondering, have the Oakland A’s ever been no-hit?
     5.04s  <ret> 발화 (turn1 첫 프레임)
     5.43s  agent 발화 시작: <ret> That’s a good question, and it has happened— The last 
     5.46s  user  발화 끝
     6.40s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.80s]: [source: MLB.com] The Oakland Athletics were last no-hit on April 21, 
    13.82s  agent 발화 끝
    13.94s  user  발화 시작: Wow, not *that* long ago. I thought it would be decades.
    17.32s  user  발화 끝
    17.68s  agent 발화 시작: It’s surprisingly recent, isn’t it? Sometimes it feels like 
    23.09s  agent 발화 끝
    23.24s  user  발화 시작: Hey, did you remember to take the chicken out of the freezer
    26.08s  user  발화 시작: Sorry about that. Back to baseball… was that a close game, o
    26.20s  user  발화 끝
    30.90s  <ret> 발화 (turn6 첫 프레임)
    31.13s  agent 발화 시작: <ret> It was quite a game— Mike Fiers won the game four to z
    31.23s  user  발화 끝
    32.02s  ⚡SPAN 주입 [d'=1.12s / d_lead=1.46s]: [source: ESPN] Mike Fiers pitched a no-hitter against the Oakland Athl
    37.85s  agent 발화 끝
