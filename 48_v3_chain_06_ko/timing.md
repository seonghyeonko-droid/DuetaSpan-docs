# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "예민",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-15",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     },
#     {
#       "date": "2025-11-27",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-11-25",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-14",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-25",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 런던에 있는 박물관 좀 찾아줘.
     2.07s  <ret> 발화 (turn1 첫 프레임)
     2.31s  agent 발화 시작: <ret> 런던에는 정말 멋진 박물관들이 많은데요, 특히 대영 박물관은 세계 예술품과 유물을 소장하고 있고,
     2.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.55s]: (tool result) The British Museum in London houses a vast collection of
     2.31s  user  발화 끝
    13.86s  user  발화 시작: … 혹시 대영 박물관에서 가장 유명한 건 뭐야?
    13.86s  agent 발화 끝
    17.56s  agent 발화 시작: 대영 박물관에서 가장 유명한 것은 로제타석이라고 할 수 있습니다.
    17.56s  user  발화 끝
    21.72s  user  발화 시작: 그치.
    21.72s  agent 발화 끝
    22.18s  agent 발화 시작: 네, 로제타석은 고대 이집트 문자를 해독하는 데 중요한 역할을 했죠. 공부하시는 데 도움이 되셨으면 좋겠어요
    22.18s  user  발화 끝
    29.12s  user  발화 시작: 그럼, 거기 가는 가장 빠른 길은 어떻게 찾아?
    29.12s  agent 발화 끝
    32.81s  user  발화 끝
