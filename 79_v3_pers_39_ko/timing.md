# v3_pers_39_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_39",
#     "name": "세재",
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
#       "date": "2026-06-15",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-06-03",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-05-31",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-19",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 세재 님, 안녕하세요. 저는 아릴이라고 해요. 편안하게 친구 관계나 사회생활에 대해 이야기 나눌 수 있도록 
     2.88s  user  발화 시작: 응.
     7.74s  agent 발화 끝
     9.60s  user  발화 끝
     9.72s  user  발화 시작: 아릴이시군요. 서울에 사는데, 혹시 저처럼 비슷한 또래 친구들을 사귀는 데 어려움을 느끼는 분들도 많아요?
    19.08s  user  발화 끝
    19.26s  agent 발화 시작: 비슷한 나이대에 새로운 친구를 만드는 게 쉽지 않다고 느끼시는 분들이 꽤 많으세요. 특히 한국에서는 직장이나
    19.37s  user  발화 시작: 음.
    19.71s  agent 발화 끝
    19.81s  user  발화 시작: 그래서… 어떻게 해야 할까요? 저는 사람들 만나는 게 좀 어색해서, 막상 모임에 가도 잘 못 어울리는 것 같
    26.88s  user  발화 끝
    29.31s  user  발화 끝
    29.37s  agent 발화 시작: 사람들 만나는 게 어색하다니, 충분히 공감돼요. 혹시 어떤 상황에서 가장 어색함을 느끼시는지 조금 더 자세히
    38.18s  agent 발화 끝
