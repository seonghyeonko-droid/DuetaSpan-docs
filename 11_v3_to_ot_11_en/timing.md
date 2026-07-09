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

# EXAMINER(FDB-v2) 단계: S1 Hey Ellana, do you follow baseball | S2 Wow, that’s recent. I thought it h | S3 Can you believe how much this coff | S4 Maybe you’re right! But tell me, w

     0.00s  user  발화 시작: Hey Ellana, do you follow baseball at all? I was wondering…
     3.70s  user  발화 끝
     3.95s  agent 발화 시작: I enjoy a bit of baseball, yes. What’s on your mind?
     7.24s  agent 발화 끝
     7.56s  user  발화 시작: Well, it’s kind of a random question, but I was trying to se
    15.52s  <ret> 발화 (turn3 첫 프레임)
    15.67s  user  발화 끝
    15.75s  agent 발화 시작: <ret> That’s a surprisingly specific question! The Oakland A
    16.56s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.18s]: [source: Wikipedia] The last time the Oakland Athletics were no-hit wa
    23.16s  agent 발화 끝
    23.25s  user  발화 시작: Wow, that’s recent. I thought it had been longer.
    25.62s  user  발화 시작: Can you believe how much this coffee costs these days?
    25.79s  user  발화 끝
    28.47s  user  발화 시작: Sorry about that, where were we? Oh right, the A’s.
    28.67s  user  발화 끝
    31.55s  agent 발화 시작: It's easy to get sidetracked. Perhaps a consistent sleep sch
    31.80s  user  발화 끝
    37.80s  agent 발화 끝
    38.13s  user  발화 시작: Maybe you’re right! But tell me, who pitched that no-hitter 
    41.96s  user  발화 끝
