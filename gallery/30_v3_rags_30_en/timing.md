# v3_rags_30_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "Rowan",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-12-15",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-12-01",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-09",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-07-16",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-07-07",
#       "category": "home",
#       "text": "User's home address is 376 Maple Drive."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-16",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Could you tell me who the governor of the Reserve Bank of In
     3.66s  <ret> 발화 (turn1 첫 프레임)
     3.90s  agent 발화 시작: <ret> The Reserve Bank of India’s governor was Urjit Patel, 
     3.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.85s]: Urjit Patel served as the 24th governor of the Reserve Bank of India f
     4.07s  user  발화 끝
    10.75s  agent 발화 끝
