# v3_mcp_03_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "Paul",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-19",
#       "category": "home",
#       "text": "User's home address is 745 Oak Avenue."
#     },
#     {
#       "date": "2026-04-15",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-04-09",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-06-28",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-02",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-09-26",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I want to view Riverbend Residences on August twelfth.
     3.00s  <ret> 발화 (turn1 첫 프레임)
     3.38s  agent 발화 시작: <ret> I’ve scheduled a visit for you at Riverbend Residences
     3.40s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.63s]: (tool result) Visit scheduled. Riverbend Residences, August 12, 2026, 
     3.51s  user  발화 끝
     7.34s  user  발화 시작: …Is there parking available there?
     8.01s  agent 발화 끝
     9.20s  <ret> 발화 (turn3 첫 프레임)
     9.28s  agent 발화 시작: <ret> Riverbend Residences does offer parking—both covered a
     9.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.37s]: (tool result) Riverbend Residences offers both covered and open-air pa
     9.36s  user  발화 끝
    16.65s  agent 발화 끝
