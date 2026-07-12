# v3_rags_31_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "Isla",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-12-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-11-09",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-10-07",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-08-13",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-12",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-18",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Where does Air Force One typically fly out of?
     2.64s  <ret> 발화 (turn1 첫 프레임)
     2.88s  agent 발화 시작: <ret> It’s interesting how places become symbolic, isn’t it?
     2.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.76s]: Joint Base Andrews is the home base for both Air Force One and the 89t
     2.88s  user  발화 끝
     8.64s  agent 발화 끝
