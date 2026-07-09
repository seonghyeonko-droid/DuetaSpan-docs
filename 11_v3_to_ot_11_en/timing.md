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

# EXAMINER(FDB-v2) 단계: S1 I was just wondering… uh, when was | S2 Wow, that was… a while ago. I— I m | S3 Hey, did you take my blue sweater? | S4 Sorry about that, anyway… so, who 

     0.00s  user  발화 시작: I was just wondering… uh, when was the last time the Oakland
     4.46s  <ret> 발화 (turn1 첫 프레임)
     4.84s  agent 발화 시작: <ret> That’s a good question, and I can certainly look that 
     4.86s  user  발화 끝
     6.30s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.97s]: The last time the Oakland Athletics were no-hit was April 21, 2018.
    12.17s  agent 발화 끝
    12.31s  user  발화 시작: Wow, that was… a while ago. I— I mean, it feels like they ge
    18.93s  user  발화 끝
    19.33s  agent 발화 시작: It certainly can feel that way when your team is struggling,
    25.73s  agent 발화 끝
    25.86s  user  발화 시작: Hey, did you take my blue sweater?
    27.68s  user  발화 시작: Sorry about that, anyway… so, who pitched that no-hitter aga
    27.80s  user  발화 끝
    31.31s  <ret> 발화 (turn6 첫 프레임)
    31.54s  agent 발화 시작: <ret> Let’s find out who had that dominant performance again
    31.70s  user  발화 끝
    33.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.99s]: Lucas Giolito of the Chicago White Sox pitched the no-hitter against t
    42.07s  agent 발화 끝
