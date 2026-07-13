# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Emma",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-18",
#       "category": "home",
#       "text": "User's home address is 762 Pine Court."
#     },
#     {
#       "date": "2025-11-05",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-09-06",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-07-29",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕 디올… | S2 오, 그거 흥미롭네. 올랜도가 엄청 크다고 들었는데. | S3 쓰레기 버린 거 기억해 뒀어? | S4 미안. 탐파 호텔 좀 찾아 줘.

     0.00s  user  발화 시작: 안녕 디올…
     1.15s  user  발화 시작: 플로리다 휴가 계획 중인데, 제일 큰 도시들이 어디야?
     1.15s  user  발화 끝
     5.41s  <ret> 발화 (turn2 첫 프레임)
     5.73s  agent 발화 시작: <ret> 음, 여행 계획하시는 거 좋네요. 플로리다에서 가장 큰 세 도시는 구십사만 구천육백십일명의 인구를
     5.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.60s]: Florida's three largest cities are Jacksonville, Miami, and Tampa, wit
     5.73s  user  발화 끝
    18.33s  user  발화 시작: 오, 그거 흥미롭네. 올랜도가 엄청 크다고 들었는데.
    18.33s  agent 발화 끝
    22.34s  agent 발화 시작: 헷갈리기 쉬워요! 올랜도-키시미-샌포드는 큰 광역 도시권을 가지고 있지만, 인구 기준으로 세 개의 가장 큰 
    22.34s  user  발화 끝
    32.65s  user  발화 시작: 쓰레기 버린 거 기억해 뒀어?
    32.65s  agent 발화 끝
    35.51s  user  발화 시작: 미안. 탐파 호텔 좀 찾아 줘.
    35.51s  user  발화 끝
    38.55s  <ret> 발화 (turn7 첫 프레임)
    38.95s  agent 발화 시작: <ret> 네, 플로리다 탐파에는 현재 백이십삼개의 호텔이 있으며, 숙박 요금은 칠십구달러부터 시작해요. 탬
    38.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.45s]: (tool result) Tampa, FL: 123 hotels available. Prices from $79/night. 
    38.95s  user  발화 끝
    50.40s  agent 발화 끝
