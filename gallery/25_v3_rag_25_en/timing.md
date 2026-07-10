# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "Charlotte",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-29",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-22",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-12-05",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-06",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I'm trying to get settled here, an | S2 That's good to know. How far is Gr | S3 410 miles! That’s… | S4 Okay, good to know it's not right 

     0.00s  user  발화 시작: I'm trying to get settled here, and I'm wondering about loca
     3.81s  agent 발화 시작: Settling in takes time, and knowing how to get around is a b
     4.02s  user  발화 끝
     5.26s  user  발화 시작: Yeah.
     5.62s  user  발화 끝
     8.20s  agent 발화 끝
     8.30s  user  발화 시작: Yeah, exactly. Are there…
    10.19s  user  발화 끝
    11.67s  user  발화 시작: …buses to nearby towns?
    13.20s  <ret> 발화 (turn5 첫 프레임)
    13.28s  agent 발화 시작: <ret> Buses run from Stainby to Grantham, Sleaford, and Linc
    13.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.62s]: (tool result) Buses run from Stainby to Grantham, Sleaford, and Lincol
    13.42s  user  발화 끝
    15.38s  user  발화 시작: Yeah.
    15.68s  user  발화 끝
    19.90s  agent 발화 끝
    20.01s  user  발화 시작: That's good to know. How far is Grantham, exactly?
    22.74s  <ret> 발화 (turn8 첫 프레임)
    23.06s  agent 발화 시작: <ret> It's about 7.6 miles to Grantham, taking around 15 min
    23.06s  ⚡SPAN 주입 [d'=1.84s / d_lead=4.68s]: (tool result) The distance between Stainby and Grantham is approximate
    23.07s  user  발화 끝
    25.46s  user  발화 시작: Wow.
    26.01s  user  발화 끝
    27.59s  agent 발화 시작: It’s helpful to have a sense of those distances when you’re 
    27.74s  agent 발화 끝
    31.76s  agent 발화 끝
    31.85s  user  발화 시작: It is. I was reading something about the A1… is that the lon
    37.61s  <ret> 발화 (turn12 첫 프레임)
    37.93s  agent 발화 시작: <ret> Yes, the A1 is the longest numbered road in the UK, st
    37.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.05s]: The A1 is the longest numbered road in the United Kingdom, stretching 
    37.96s  user  발화 끝
    44.97s  user  발화 시작: 410 miles! That’s…
    44.98s  agent 발화 끝
    46.81s  user  발화 끝
    47.75s  user  발화 시작: …is it a busy road, though, around Stainby?
    50.34s  user  발화 끝
    50.42s  agent 발화 시작: It’s often quite busy—
    51.73s  agent 발화 시작: —particularly during peak hours, but Stainby itself is set b
    51.89s  agent 발화 끝
    55.52s  user  발화 시작: Okay, good to know it's not right on top of everything. What
    56.22s  agent 발화 끝
    58.98s  <ret> 발화 (turn18 첫 프레임)
    59.06s  agent 발화 시작: <ret> In Stainby itself, there’s The Crown & Anchor pub, but
    59.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.47s]: (tool result) There is one pub, The Crown & Anchor, in Stainby, and a 
    59.23s  user  발화 끝
    61.30s  user  발화 시작: Uh-huh.
    61.75s  user  발화 끝
    64.19s  user  발화 시작: The Crown & Anchor, got it. Is Grantham easy to get to from 
    64.53s  agent 발화 끝
    68.39s  agent 발화 시작: It’s a straightforward trip, and knowing your options is alw
    68.53s  user  발화 끝
    73.02s  agent 발화 끝
