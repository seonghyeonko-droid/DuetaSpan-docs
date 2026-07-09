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
#       "date": "2026-08-02",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-01-14",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-06",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 세재 님, 안녕하세요. 저는 아릴이라고 해요. 편안하게 친구 관계나 사회생활에 대해 이야기 나눌 수 있도록 
     4.35s  user  발화 시작: 응.
     4.75s  user  발화 끝
    11.60s  agent 발화 끝
    13.09s  user  발화 시작: 아, 코치님이라고 하니까 좀 어색하네요. 그냥 아릴이라고 불러도 돼요? 서울에서 혼자 지내시는 분들, 다들 
    22.15s  agent 발화 시작: 물론이죠, 세재 님. 편하게 아릴이라고 불러주세요. 서울에서 혼자 지내시는 분들이 외로움을 느끼는 건 자연스
    22.27s  user  발화 끝
    28.32s  user  발화 시작: 음.
    28.82s  user  발화 끝
    35.70s  agent 발화 끝
    35.82s  agent 발화 시작: 혼자 있는 시간은 자기 성찰의 기회가 될 수도 있지만, 때로는 외로움이 크게 느껴질 수 있죠. 혹시 어떤 상
    48.52s  agent 발화 끝
