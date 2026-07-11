# v3_abs_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "Jordan",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-31",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-09-02",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-08-12",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2025-08-04",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-26",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-02-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What does wool look like? | S2 What about…different colors? | S3 Black wool? Really? | S4 So merino is the good stuff?

     0.00s  user  발화 시작: What does wool look like?
     0.00s  <ret> 발화 (turn4 첫 프레임)
     0.02s  agent 발화 시작: Well, that's a surprisingly tricky question, isn't it? It se
     0.02s  user  발화 끝
     0.09s  user  발화 시작: Yeah.
     0.09s  agent 발화 끝
     0.09s  user  발화 시작: Hmm. What *is* it made of, then?
     0.09s  user  발화 끝
     0.12s  agent 발화 시작: <ret> Wool comes from the fleece of animals—sheep most commo
     0.12s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: Wool is the textile fiber obtained from sheep and other animals, inclu
     0.12s  user  발화 끝
     0.20s  user  발화 시작: Is it warm?
     0.20s  agent 발화 끝
     0.21s  agent 발화 시작: It's known for its warmth and softness. It’s a lovely materi
     0.21s  user  발화 끝
     0.27s  user  발화 시작: What about…different colors?
     0.27s  agent 발화 끝
     0.28s  agent 발화 시작: Wool can be dyed almost any color imaginable—
     0.28s  user  발화 끝
     0.31s  user  발화 시작: …but what’s the *natural* color?
     0.31s  agent 발화 끝
     0.33s  agent 발화 시작: Ah, a very good point! Naturally, sheep’s wool comes in shad
     0.33s  user  발화 끝
     0.35s  <ret> 발화 (turn19 첫 프레임)
     0.40s  user  발화 시작: Black wool? Really?
     0.40s  agent 발화 끝
     0.41s  agent 발화 시작: Indeed. Certain breeds produce quite dark fleece. It's a lov
     0.41s  user  발화 끝
     0.46s  user  발화 시작: Yeah.
     0.46s  agent 발화 끝
     0.46s  agent 발화 시작: It's fascinating how much variation there is, isn't it? The 
     0.46s  user  발화 끝
     0.58s  user  발화 시작: Is it itchy? I always thought wool was itchy.
     0.58s  agent 발화 끝
     0.61s  agent 발화 시작: It can be, for some people—that depends on the fineness of t
     0.61s  user  발화 끝
     0.72s  user  발화 시작: Yeah.
     0.72s  agent 발화 끝
     0.72s  user  발화 시작: So merino is the good stuff?
     0.72s  user  발화 끝
     0.75s  agent 발화 시작: <ret> Yes, merino is often considered the gold standard—it’s
     0.75s  ⚡SPAN 주입 [d'=0.12s / d_lead=0.12s]: Merino wool is known for its softness, fineness, and crimp, making it 
     0.75s  user  발화 끝
     0.87s  user  발화 시작: Yeah.
     0.87s  agent 발화 끝
     0.87s  user  발화 시작: That makes sense. Okay, last question…can you get sweaters m
     0.87s  user  발화 끝
     0.92s  agent 발화 시작: Wool is a very popular choice for sweaters, scarves, and all
     0.92s  user  발화 끝
     1.00s  agent 발화 끝
