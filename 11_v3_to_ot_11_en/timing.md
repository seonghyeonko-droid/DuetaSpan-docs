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

# EXAMINER(FDB-v2) 단계: S1 Hey Ellana, do you follow baseball | S2 Well, I was trying to remember the | S3 Seriously, did you remember to tak | S4 Oh, sorry about that. So, 2018… th

     0.00s  user  발화 시작: Hey Ellana, do you follow baseball at all? I was just wonder
     3.92s  user  발화 끝
     4.11s  agent 발화 시작: I do enjoy keeping up with sports, yes. Is there a team or a
     9.43s  agent 발화 끝
     9.64s  user  발화 시작: Well, I was trying to remember the last time the Oakland A’s
    15.37s  <ret> 발화 (turn3 첫 프레임)
    15.48s  user  발화 끝
    15.60s  agent 발화 시작: <ret> That’s a surprisingly specific question! That happened
    16.33s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.05s]: [source: Baseball-Reference.com] The last time the Oakland Athletics w
    20.93s  agent 발화 끝
    21.13s  user  발화 시작: Seriously, did you remember to take the chicken out?
    24.04s  user  발화 시작: Oh, sorry about that. So, 2018… that feels like ages ago.
    24.18s  user  발화 끝
    29.38s  agent 발화 시작: It is quite a while! Focusing on the present is often more h
    29.54s  user  발화 끝
    36.05s  agent 발화 끝
