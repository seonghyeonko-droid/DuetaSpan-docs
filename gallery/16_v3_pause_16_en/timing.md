# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Casey",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-20",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-12-22",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-10-09",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-06-17",
#       "category": "home",
#       "text": "User's home address is 795 Elm Street."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-14",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-06-06",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-05-27",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just wondering… who sang Ede | S2 …what’s the weather… | S3 …like in Seoul right now? | S4 That sounds pretty nice actually.

     0.00s  user  발화 시작: I was just wondering… who sang Edelweiss in.
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.11s  agent 발화 시작: <ret> It was Theodore Bikel who beautifully performed “Edelw
     0.11s  ⚡SPAN 주입 [d'=0.21s / d_lead=0.21s]: Theodore Bikel performed the song "Edelweiss" in the 1965 film *The So
     0.11s  user  발화 끝
     0.12s  <ret> 발화 (turn5 첫 프레임)
     0.32s  user  발화 시작: Oh, okay! That’s good to know. Um…
     0.32s  agent 발화 끝
     0.41s  user  발화 시작: …what’s the weather…
     0.41s  user  발화 끝
     0.45s  user  발화 시작: …like in Seoul right now?
     0.45s  user  발화 끝
     0.52s  agent 발화 시작: <ret> Right now in Seoul, it’s 23.0°C with 74% humidity and 
     0.52s  ⚡SPAN 주입 [d'=0.21s / d_lead=0.21s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
     0.52s  user  발화 끝
     0.73s  user  발화 시작: Yeah.
     0.73s  agent 발화 끝
     0.75s  user  발화 시작: That sounds pretty nice actually.
     0.75s  user  발화 끝
     0.81s  agent 발화 시작: It does, doesn’t it? A comfortable temperature can really bo
     0.81s  user  발화 끝
     1.00s  agent 발화 끝
