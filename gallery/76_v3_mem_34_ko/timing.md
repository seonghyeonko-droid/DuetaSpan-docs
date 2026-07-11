# v3_mem_34_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "은찬",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-05",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-05-17",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-05-16",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-05-08",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     },
#     {
#       "date": "2025-10-19",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     },
#     {
#       "date": "2025-09-13",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-02",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 은찬님! 저는 에이전트 에로로라고 해요. 오늘 하루는 어떠신가요?
     0.20s  user  발화 시작: 안녕하세요, 에로로 씨. 집에서 강남역까지 어떻게 가야 할까요?
     0.20s  agent 발화 끝
     0.31s  <ret> 발화 (turn2 첫 프레임)
     0.39s  agent 발화 시작: <ret> 은찬님 댁 주소는 대구 중구 동인동 팔 팔 일번지시네요. 강남역까지 가는 길을 찾아드릴게요. 강남
     0.39s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.59s]: [2025-12-02] User's home address is 대구 중구 동인동 88-1.
     0.39s  user  발화 끝
     0.98s  user  발화 시작: 진짜요?
     0.98s  agent 발화 끝
     1.00s  user  발화 끝
