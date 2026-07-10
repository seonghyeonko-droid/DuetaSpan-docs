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


     0.00s  agent 발화 시작: 세재 씨, 안녕하세요. 저는 아릴이라고 해요. 편안하게 사회생활과 인간 관계에 대해 함께 이야기 나눠볼 수 
     4.60s  user  발화 시작: 응.
     4.96s  user  발화 끝
    12.25s  agent 발화 끝
    13.73s  user  발화 시작: 아릴이요? 이름이 특이하네요. 혹시… 저처럼 혼자 사는 사람들을 주로 도와주시는 건가요?
    20.38s  agent 발화 시작: 혼자 지내시는 분들이 느끼는 외로움이나 관계에 대한 어려움, 충분히 이해하고 있어요. 그런 고민들을 나누는 
    20.49s  user  발화 끝
    25.27s  user  발화 시작: 음.
    25.77s  user  발화 끝
    31.18s  agent 발화 끝
    31.29s  agent 발화 시작: 혹시 지금 세재 씨께서 가장 신경 쓰이는 부분이 있다면 편하게 말씀해주실 수 있을까요? 어떤 점이 힘든지 이
    42.23s  agent 발화 끝
