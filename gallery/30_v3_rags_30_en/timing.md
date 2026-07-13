# v3_rags_30_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "Mason",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-10",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-03-25",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2026-01-07",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-10-31",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-08-02",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-17",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-14",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Who earns the most money playing in the NBA?
     3.60s  <ret> 발화 (turn1 첫 프레임)
     3.79s  agent 발화 시작: <ret> Well, it looks like Stephen Curry is the highest-paid 
     3.79s  user  발화 끝
     4.16s  ⚡SPAN 주입 [d'=0.56s / d_lead=10.10s]: Stephen Curry is the highest-paid NBA player, earning $51.9 million in
    13.89s  agent 발화 끝
