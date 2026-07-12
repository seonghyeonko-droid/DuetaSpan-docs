# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Julia",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-19",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-06-17",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-11",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Hey, uh, do you know what category Hurricane Charley was whe
     6.25s  <ret> 발화 (turn1 첫 프레임)
     6.65s  agent 발화 시작: <ret> Well, it seems Hurricane Charley hit Orlando as a Cate
     6.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.61s]: Hurricane Charley made landfall in Florida on August 13, 2004, as a Ca
     6.65s  user  발화 끝
    15.26s  user  발화 시작: Did you remember to take the trash out?
    15.26s  agent 발화 끝
    18.39s  user  발화 시작: So, uh, category four… that’s pretty strong, right?
    18.39s  user  발화 끝
    21.52s  agent 발화 시작: It absolutely is. A Category 4 hurricane brings winds betwee
    21.52s  user  발화 끝
    27.78s  user  발화 시작: Oh.
    27.78s  agent 발화 끝
    28.17s  agent 발화 시작: It’s good to be prepared when facing such powerful weather e
    28.17s  user  발화 끝
    35.21s  agent 발화 끝
