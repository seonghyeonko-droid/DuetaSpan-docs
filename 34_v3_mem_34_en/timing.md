# v3_mem_34_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "Lily",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-05",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-05-17",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-05-16",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-05-08",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     },
#     {
#       "date": "2025-10-19",
#       "category": "home",
#       "text": "User's home address is 276 Cedar Lane."
#     },
#     {
#       "date": "2025-09-13",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Lily, I'm Elolo. It's lovely to meet you.
     0.08s  user  발화 시작: Um, yes, hello. I need to get to a florist, actually.
     0.08s  agent 발화 끝
     0.11s  <ret> 발화 (turn2 첫 프레임)
     0.19s  agent 발화 시작: <ret> Before we map that out, I remember you mentioning Max,
     0.19s  ⚡SPAN 주입 [d'=0.31s / d_lead=0.31s]: [2025-09-13] User has a Golden Retriever named Max.
     0.19s  user  발화 끝
     0.50s  user  발화 시작: For a friend. And could you use my home address?
     0.50s  agent 발화 끝
     0.50s  <ret> 발화 (turn5 첫 프레임)
     0.51s  <ret> 발화 (turn4 첫 프레임)
     0.59s  agent 발화 시작: <ret> Your home address is 276 Cedar Lane. Let me find flori
     0.59s  ⚡SPAN 주입 [d'=0.15s / d_lead=0.15s]: [2025-09-13] User's home address is 276 Cedar Lane.
     0.59s  user  발화 끝
     0.74s  agent 발화 시작: <ret> Bloom & Blossom on Bleecker Street is one point two mi
     0.74s  ⚡SPAN 주입 [d'=0.26s / d_lead=0.26s]: (tool result) Destination: Bloom & Blossom, 145 Bleecker St, New York,
     0.74s  agent 발화 끝
     1.00s  agent 발화 끝
