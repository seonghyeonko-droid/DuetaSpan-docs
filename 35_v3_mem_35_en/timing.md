# v3_mem_35_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "Bruno",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-12",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-05-29",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "home",
#       "text": "User's home address is 262 Maple Drive."
#     },
#     {
#       "date": "2025-10-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-09-06",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-07-16",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-18",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-04",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Bruno, I'm Nelira. It's lovely to meet you.
     3.30s  user  발화 시작: Uh-huh.
     3.30s  agent 발화 끝
     3.67s  user  발화 시작: Yes, that’s right. I’m planning a trip to Italy next month, 
     3.67s  user  발화 끝
    10.69s  <ret> 발화 (turn3 첫 프레임)
    11.01s  agent 발화 시작: <ret> Bruno. Considering your preference for Italian cuisine
    11.01s  user  발화 끝
    11.38s  ⚡SPAN 주입 [d'=0.69s / d_lead=4.77s]: [2025-06-04] User's favorite cuisine is Italian.
    15.78s  user  발화 시작: Great! I’d like something authentic, not too touristy, if po
    15.78s  agent 발화 끝
    19.36s  <ret> 발화 (turn5 첫 프레임)
    19.45s  agent 발화 시작: <ret> I found Trattoria Mario in Florence, Italy. It has a 4
    19.45s  user  발화 끝
    20.12s  ⚡SPAN 주입 [d'=0.95s / d_lead=6.61s]: (tool result) Restaurant: Trattoria Mario, Florence. Rating: 4.7 stars
    26.05s  agent 발화 끝
