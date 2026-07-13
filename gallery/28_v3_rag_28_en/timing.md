# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Riley",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-17",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in March."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-12-16",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-05-31",
#       "category": "home",
#       "text": "User's home address is 562 Cedar Lane."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-27",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I was wondering, where does all the sand on beaches actually
     5.04s  agent 발화 시작: Yeah.
     5.04s  user  발화 끝
     5.42s  agent 발화 시작: Beaches are fascinating places, and their origins are quite 
     5.42s  agent 발화 끝
     9.30s  user  발화 시작: Mm-hmm.
     9.30s  agent 발화 끝
     9.69s  user  발화 시작: Varied how? Is it all just rocks getting ground down?
     9.69s  user  발화 끝
    13.56s  agent 발화 시작: Yeah.
    13.56s  user  발화 끝
    13.87s  <ret> 발화 (turn6 첫 프레임)
    13.95s  agent 발화 시작: <ret> Beach sand is actually created by the weathering and e
    13.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.07s]: Beach sand is created by the weathering and erosion of rocks, shells, 
    13.95s  agent 발화 끝
    24.02s  user  발화 시작: Mm-hmm.
    24.02s  agent 발화 끝
    24.41s  agent 발화 시작: It's a bit like nature’s delivery service, bringing all thos
    24.41s  user  발화 끝
    29.45s  user  발화 시작: So, coral plays a part? I didn’t realize that. What kind of 
    29.45s  agent 발화 끝
    34.79s  <ret> 발화 (turn10 첫 프레임)
    34.87s  agent 발화 시작: <ret> Specifically, coralline algae—a type of red algae—depo
    34.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.91s]: Coralline algae, a type of red algae, deposits calcium carbonate which
    34.87s  user  발화 끝
    43.78s  agent 발화 시작: It’s a beautiful process, really, creating these wonderful s
    43.78s  agent 발화 끝
    48.82s  agent 발화 끝
