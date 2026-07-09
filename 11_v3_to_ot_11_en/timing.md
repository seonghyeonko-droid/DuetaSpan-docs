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

# EXAMINER(FDB-v2) 단계: S1 I was just wondering, has the Oakl | S2 Wow, that *was* a while ago. I tho | S3 Hey, did you take the recycling ou | S4 Sorry about that. So, do they usua

     0.00s  user  발화 시작: I was just wondering, has the Oakland A’s team been no-hit r
     5.36s  <ret> 발화 (turn1 첫 프레임)
     5.74s  agent 발화 시작: <ret> That’s a good question, and it’s not something fans wa
     5.74s  user  발화 끝
     7.20s  ⚡SPAN 주입 [d'=1.84s / d_lead=4.00s]: [source: Wikipedia] The last time the Oakland Athletics were no-hit wa
    12.41s  agent 발화 끝
    12.58s  user  발화 시작: Wow, that *was* a while ago. I thought it had been more rece
    17.03s  user  발화 끝
    17.41s  agent 발화 시작: It’s easy to lose track of time when you’re following a team
    21.44s  agent 발화 끝
    21.45s  user  발화 시작: Hey, did you take the recycling out?
    23.39s  user  발화 시작: Sorry about that. So, do they usually go long stretches with
    23.52s  user  발화 끝
    29.17s  agent 발화 시작: It’s not a frequent occurrence, but it’s also not incredibly
    29.28s  user  발화 끝
    35.06s  agent 발화 끝
