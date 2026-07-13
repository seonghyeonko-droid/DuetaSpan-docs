# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Felix",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-16",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "home",
#       "text": "User's home address is 972 Maple Drive."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-07",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I was just humming a song, and I can’t remember who sang it.
     6.34s  <ret> 발화 (turn1 첫 프레임)
     6.59s  agent 발화 시작: <ret> That song, "Ain't Too Proud to Beg", was originally re
     6.59s  user  발화 끝
     6.85s  ⚡SPAN 주입 [d'=0.51s / d_lead=5.60s]: The Temptations released the song "Ain't Too Proud to Beg" in 1966, an
    12.18s  user  발화 시작: Yeah.
    12.18s  agent 발화 끝
    12.51s  user  발화 시작: The Temptations… hmm. I thought it might be someone else. Ar
    12.51s  user  발화 끝
    17.12s  agent 발화 시작: [curious] They are! The Temptations still tour, though the l
    17.12s  user  발화 끝
    22.06s  user  발화 시작: Yeah.
    22.06s  agent 발화 끝
    22.39s  user  발화 시작: Oh, that's good to hear. What kind of music do they play now
    22.39s  user  발화 끝
    26.68s  agent 발화 시작: Yeah.
    26.68s  user  발화 끝
    27.00s  agent 발화 시작: They mostly perform their classic hits, but also include som
    27.00s  agent 발화 끝
    31.94s  agent 발화 끝
