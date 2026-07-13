# v3_rags_29_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "Noa",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-03",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "home",
#       "text": "User's home address is 806 Oak Avenue."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2025-12-05",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-11",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Who plays chuck the…
     1.92s  user  발화 시작: …evil sandwich making guy?
     1.92s  user  발화 끝
     3.58s  <ret> 발화 (turn2 첫 프레임)
     3.84s  agent 발화 시작: <ret> [happy] Oh, that's a fun question! Frederick “Fred” St
     3.84s  user  발화 끝
     4.38s  ⚡SPAN 주입 [d'=0.80s / d_lead=10.57s]: Frederick "Fred" Stoller is an American actor, comedian, and voice act
    14.42s  agent 발화 끝
