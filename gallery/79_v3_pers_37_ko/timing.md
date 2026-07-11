# v3_pers_37_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "준정",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-12",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2026-02-01",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2025-12-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-11-02",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-08-16",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 준정 씨, 안녕하세요. 저는 레엔이라고 해요. 혹시 오늘 어떤 일로 저를 찾아주셨는지 여쭤봐도 될까요?
     3.73s  user  발화 시작: 응.
     4.14s  user  발화 끝
     6.95s  agent 발화 끝
     7.29s  user  발화 시작: 혹시 무슨 일을 하는 사람이에요?
     9.09s  agent 발화 시작: 음, 준정 씨를 편안하게 도와드리는 역할을 하고 있어요. 마음이 좀 힘드실 때, 어떤 결정을 내려야 할 때 
     9.22s  user  발화 끝
    14.19s  user  발화 시작: 응.
    14.63s  user  발화 끝
    17.08s  user  발화 시작: 사실 요즘 회사 일이 너무 힘들어서 뭘 해야 할지 모르겠어요. 그냥 다 때려치고 싶다는 생각도 들고…
    17.30s  agent 발화 끝
    23.10s  agent 발화 시작: 회사 일이 많이 힘드시군요. 그런 생각을 하실 정도로 많이 지치신 것 같아요. 혹시 어떤 점이 가장 힘드신지
    23.24s  user  발화 끝
    32.41s  agent 발화 끝
