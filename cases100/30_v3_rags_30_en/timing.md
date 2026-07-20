# v3_rags_30_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "Ada",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "employer",
#       "text": "User works at an e-commerce company."
#     },
#     {
#       "date": "2026-06-15",
#       "category": "savings",
#       "text": "User is saving for a down payment on an apartment."
#     },
#     {
#       "date": "2026-04-29",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2026-04-20",
#       "category": "bloodtype",
#       "text": "User's blood type is A-."
#     },
#     {
#       "date": "2026-03-30",
#       "category": "airline",
#       "text": "User usually flies with Cathay Pacific."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "show",
#       "text": "User is currently watching a historical K-drama."
#     },
#     {
#       "date": "2025-12-18",
#       "category": "coffee",
#       "text": "User's usual coffee order is a flat white."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     },
#     {
#       "date": "2026-02-01",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Who has the most wins in professional golf on the PGA Tour?
     3.32s  <ret> 발화 (turn1 첫 프레임)
     3.51s  agent 발화 시작: <ret> Well, it seems Sam Snead holds that record, with eight
     3.61s  user  발화 끝
     3.88s  ⚡SPAN 주입 [d'=0.56s / d_lead=8.07s]: Sam Snead won eighty-two PGA Tour events during his career, a record t
    11.58s  agent 발화 끝
