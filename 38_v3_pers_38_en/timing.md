# v3_pers_38_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_38",
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
#       "date": "2026-06-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-05-21",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-10-01",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-09-01",
#       "category": "home",
#       "text": "User's home address is 229 Pine Court."
#     },
#     {
#       "date": "2025-08-21",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-11-17",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Bonjour, Paul. I’m Oran, and I’m here to offer a little supp
     8.31s  user  발화 시작: But what exactly *do* you do? I'm feeling quite stressed wit
     8.31s  agent 발화 끝
    13.06s  agent 발화 시작: I help people navigate stress, Paul, by offering techniques 
    13.06s  user  발화 끝
    22.17s  user  발화 시작: Welll… it’s everything, really. Deadlines, my boss, even jus
    22.17s  agent 발화 끝
    27.71s  agent 발화 시작: It sounds like you're carrying a lot, Paul. Perhaps we could
    27.71s  user  발화 끝
    36.42s  user  발화 시작: That actually sounds… good. I usually just try to ignore it 
    36.42s  agent 발화 끝
    42.76s  agent 발화 시작: Ignoring can feel like a temporary fix, but it often allows 
    42.76s  user  발화 끝
    52.65s  agent 발화 끝
