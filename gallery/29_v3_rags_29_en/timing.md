# v3_rags_29_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "Andrea",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-11",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-07-06",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-17",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-17",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: When did the twelfth episode of Riverdale first air?
     3.28s  <ret> 발화 (turn1 첫 프레임)
     3.60s  agent 발화 시작: <ret> It seems that episode aired on May fourth, two thousan
     3.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.19s]: The twelfth episode of Riverdale, titled “The Dark Circle”, originally
     3.60s  user  발화 끝
    14.79s  agent 발화 끝
