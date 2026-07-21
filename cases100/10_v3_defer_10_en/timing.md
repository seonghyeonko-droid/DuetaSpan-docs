# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Jamie",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-13",
#       "category": "employer",
#       "text": "User works at a game studio."
#     },
#     {
#       "date": "2026-05-11",
#       "category": "streaming",
#       "text": "User subscribes to Netflix and Spotify."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "plant",
#       "text": "User is growing basil on the windowsill at home."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "trip",
#       "text": "User is planning a trip to Peru in February."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "commute",
#       "text": "User carpools with a colleague."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "work",
#       "text": "User works as a carpenter."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "savings",
#       "text": "User is saving for paying off student loans."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "bloodtype",
#       "text": "User's blood type is O-."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "airline",
#       "text": "User usually flies with Qatar Airways."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-16",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     },
#     {
#       "date": "2026-03-22",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2025-12-18",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I'm feeling overwhelmed with choic | S2 La Tavola sounds good. Can you res | S3 That's great! I'm also trying to d | S4 That’s encouraging. Maybe I will t

     0.00s  user  발화 시작: I'm feeling overwhelmed with choices about what to make for 
     3.73s  agent 발화 시작: It's completely normal to feel that way when facing so many 
     3.75s  user  발화 끝
     5.18s  user  발화 시작: Yeah.
     5.76s  user  발화 끝
     7.53s  agent 발화 끝
     7.61s  user  발화 시작: Could you find me some Italian restaurants nearby?
    10.36s  <ret> 발화 (turn4 첫 프레임)
    10.48s  user  발화 끝
    10.50s  agent 발화 시작: <ret> For a taste of Italy, La Tavola is 1.2 kilometers away
    11.45s  ⚡SPAN 주입 [d'=1.09s / d_lead=5.97s]: (tool result) Seoul (-37.566535, 126.978026): La Tavola (4.5 stars, 1.
    13.32s  user  발화 시작: Yeah.
    13.85s  user  발화 끝
    16.47s  agent 발화 끝
    16.59s  user  발화 시작: La Tavola sounds good. Can you reserve a table for two at 7:
    20.77s  <ret> 발화 (turn7 첫 프레임)
    21.31s  agent 발화 시작: <ret> Your reservation at La Tavola for two at 7:30 PM on Ju
    21.43s  ⚡SPAN 주입 [d'=0.66s / d_lead=9.78s]: (tool result) La Tavola, Seoul, 19:30, 2026-07-25, RES3-005012, confir
    21.45s  user  발화 끝
    31.09s  agent 발화 끝
    31.18s  user  발화 시작: That's great! I'm also trying to decide if I should start le
    35.61s  agent 발화 시작: Learning a new language is a wonderful goal—it opens up so m
    35.67s  user  발화 끝
    39.58s  user  발화 시작: …do you think it's harder than learning Korean, since I alre
    40.04s  agent 발화 끝
    43.90s  agent 발화 시작: That's a really insightful question! Knowing Japanese will a
    43.93s  user  발화 끝
    51.40s  agent 발화 끝
    51.42s  agent 발화 시작: The writing systems are different, but the underlying logic 
    56.83s  agent 발화 끝
    58.38s  user  발화 시작: That’s encouraging. Maybe I will then.
    61.03s  user  발화 끝
