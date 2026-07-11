# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Casey",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-12",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-11-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-10-08",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2025-10-04",
#       "category": "home",
#       "text": "User's home address is 232 Elm Street."
#     },
#     {
#       "date": "2025-08-20",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-26",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Um, in the Mahabharata… | S2 …and Vrishsena…? | S3 And, uh, can you find me a good It | S4 What are Bella Italia’s hours?

     0.00s  user  발화 시작: Um, in the Mahabharata…
     0.00s  <ret> 발화 (turn3 첫 프레임)
     0.04s  user  발화 시작: …who was the father of Chitrasena…
     0.04s  user  발화 끝
     0.10s  user  발화 시작: …and Vrishsena…?
     0.10s  user  발화 끝
     0.12s  agent 발화 시작: <ret> Oh, that’s a lovely question! It was Karna who was the
     0.12s  ⚡SPAN 주입 [d'=0.21s / d_lead=0.21s]: Karna was the father of Chitrasena and Vrishsena, sons born to him and
     0.12s  user  발화 끝
     0.33s  user  발화 시작: Okay.
     0.33s  agent 발화 끝
     0.34s  agent 발화 시작: It’s interesting how lineage plays out in those epic stories
     0.34s  user  발화 끝
     0.37s  <ret> 발화 (turn7 첫 프레임)
     0.40s  <ret> 발화 (turn9 첫 프레임)
     0.50s  user  발화 시작: And, uh, can you find me a good Italian restaurant nearby?
     0.50s  agent 발화 끝
     0.61s  agent 발화 시작: <ret> I found three Italian restaurants close by: Bella Ital
     0.61s  ⚡SPAN 주입 [d'=0.14s / d_lead=0.14s]: (tool result) Restaurants found: Bella Italia (4.5 stars, 0.5 km), Pas
     0.61s  user  발화 끝
     0.75s  user  발화 시작: What are Bella Italia’s hours?
     0.75s  agent 발화 끝
     0.80s  agent 발화 시작: <ret> Bella Italia is open today from eleven thirty AM to te
     0.80s  ⚡SPAN 주입 [d'=0.20s / d_lead=0.20s]: (tool result) Bella Italia is open today from 11:30 AM to 10:00 PM.
     0.80s  user  발화 끝
     1.00s  agent 발화 끝
