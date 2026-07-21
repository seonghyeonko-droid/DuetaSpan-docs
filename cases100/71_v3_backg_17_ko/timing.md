# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "보호",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "hobby",
#       "text": "User is into pottery."
#     },
#     {
#       "date": "2026-04-13",
#       "category": "floor",
#       "text": "User lives on the 7th floor."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cold brew."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "phone",
#       "text": "User uses an iPhone SE."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "wake",
#       "text": "User usually wakes up around 6am."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "medication",
#       "text": "User takes medication for migraines."
#     },
#     {
#       "date": "2026-01-06",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 19°C."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-05",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     },
#     {
#       "date": "2026-01-26",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     },
#     {
#       "date": "2025-12-21",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 프랑스 상원 의원 수는 몇 명이에요?
     1.61s  <ret> 발화 (turn1 첫 프레임)
     2.21s  agent 발화 시작: <ret> 프랑스 상원의원 수는 총 삼백사십팔명입니다. [happy] 참고로, 상원은 하원과 함께 프랑스 의
     2.28s  user  발화 끝
     2.78s  ⚡SPAN 주입 [d'=1.17s / d_lead=6.67s]: The French Senate has 348 members.
     8.86s  user  발화 시작: 아, 오늘따라 지하철이 왜 이렇게 막히는 거야.
     8.88s  agent 발화 끝
    11.39s  user  발화 끝
    11.77s  agent 발화 시작: 혹시 다른 궁금한 점이 있으신가요?
    13.93s  agent 발화 끝
    14.68s  user  발화 시작: 음, 그럼 하원 의원 수는요?
    16.70s  user  발화 끝
