# v3_rags_31_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "Lena",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-13",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-04-19",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-02-23",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-01",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I'm wondering, what does organizational development aim to h
     3.77s  <ret> 발화 (turn1 첫 프레임)
     4.39s  agent 발화 시작: <ret> [curious] It aims to help companies effectively manage
     4.39s  user  발화 끝
     5.27s  ⚡SPAN 주입 [d'=1.50s / d_lead=13.56s]: Organizational development effectively manages conflict, improves comm
    17.95s  agent 발화 끝
