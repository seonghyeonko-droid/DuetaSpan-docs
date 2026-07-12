# v3_chain_06_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "Bruno",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-23",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-12-05",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-07-03",
#       "category": "home",
#       "text": "User's home address is 457 Birch Road."
#     },
#     {
#       "date": "2025-05-30",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-05",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I’m feeling a bit stressed about work lately. Any good drama
     4.83s  <ret> 발화 (turn1 첫 프레임)
     4.91s  agent 발화 시작: <ret> At Landmark Chez Artiste in Denver, Colorado, “All of 
     4.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.41s]: (tool result) Showing drama movies at Landmark Chez Artiste Theatre in
     4.91s  user  발화 끝
    13.31s  user  발화 시작: Right.
    13.31s  agent 발화 끝
    13.66s  agent 발화 시작: It sounds like you could use a distraction. Perhaps a movie 
    13.66s  user  발화 끝
    19.97s  user  발화 시작: Actually, let’s get tickets for “All of Us Strangers” at sev
    19.97s  agent 발화 끝
    23.75s  <ret> 발화 (turn5 첫 프레임)
    23.83s  agent 발화 시작: <ret> Wonderful. I’ve secured two tickets for “All of Us Str
    23.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.76s]: (tool result) Confirmed: 2 tickets for “All of Us Strangers” at Landma
    23.83s  user  발화 끝
    32.59s  agent 발화 시작: That should be a lovely evening. I’m glad I could help take 
    32.59s  agent 발화 끝
    38.19s  agent 발화 끝
