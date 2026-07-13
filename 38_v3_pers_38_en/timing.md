# v3_pers_38_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_38",
#     "name": "Sky",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-03",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-12-30",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-23",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-12-10",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Bonjour, Sky. I’m Mis, your wellness coach. I help people pl
    10.06s  user  발화 시작: Yeah.
    10.06s  agent 발화 끝
    10.48s  user  발화 시작: Oh, a wellness coach? That’s… interesting. I’m mostly stress
    10.48s  user  발화 끝
    16.35s  agent 발화 시작: Yeah.
    16.35s  user  발화 끝
    16.77s  agent 발화 시작: Travel stress is very common, Sky. Often, it’s not the trip 
    16.77s  agent 발화 끝
    26.42s  user  발화 시작: Okay.
    26.42s  agent 발화 끝
    26.83s  agent 발화 시작: We can break down the planning into smaller steps, focusing 
    26.83s  user  발화 끝
    36.90s  user  발화 시작: Yeah.
    36.90s  agent 발화 끝
    37.32s  user  발화 시작: Packing light is *always* my problem. I end up bringing ever
    37.32s  user  발화 끝
    43.19s  agent 발화 시작: Yeah.
    43.19s  user  발화 끝
    43.61s  agent 발화 시작: [laugh] I hear that a lot! “Just in case” is the enemy of a 
    43.61s  agent 발화 끝
    54.93s  user  발화 시작: A capsule wardrobe…sounds complicated. Tell me more.
    54.93s  agent 발화 끝
    57.86s  user  발화 끝
