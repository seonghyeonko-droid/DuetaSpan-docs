# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "우슬",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-06-18",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-04-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2025-10-13",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-09-02",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-28",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-09-22",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-15",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 안녕하세요, 저는 새로운 친구를…
     3.23s  user  발화 끝
     5.27s  user  발화 시작: …사귀는 게 좀 어려워요.
     6.89s  agent 발화 시작: 안녕하세요! 새로운 친구를 만드는 건 누구에게나 쉽지 않죠. 어떤 점이 가장 힘든가요?
     7.06s  user  발화 끝
    10.45s  user  발화 시작: 음.
    10.90s  user  발화 끝
    12.33s  user  발화 시작: 음… 사람들이랑 대화를 시작하는 게 잘 안 돼요. 뭘 물어봐야 할지 모르겠어요.
    12.54s  agent 발화 끝
    18.22s  <ret> 발화 (turn5 첫 프레임)
    18.62s  agent 발화 시작: <ret> 혹시 주변 사람들의 관심사를 파악하는 데 도움이 될 만한 팁을 드릴까요? 가벼운 대화는 관계를 시
    18.67s  user  발화 끝
    18.72s  ⚡SPAN 주입 [d'=0.50s / d_lead=5.13s]: Small talk is a social interaction in which people exchange superficia
    34.02s  agent 발화 끝
