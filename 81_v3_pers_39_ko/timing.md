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


     0.00s  agent 발화 시작: 세재님, 안녕하세요. 저는 아릴이라고 해요. 편안하게 친구 관계나 사회생활에 대해 이야기 나눌 수 있는 라이
     3.62s  user  발화 시작: 응.
     4.07s  user  발화 끝
     9.68s  agent 발화 끝
    11.18s  user  발화 시작: 아, 코치님이라고 하니까 좀 어색하네요. 그냥 아릴이라고 불러도 될까요? 혹시… 진짜 사람 맞아요?
    18.96s  agent 발화 시작: 물론이죠, 세재님. 아릴이라고 불러주시면 더 편하겠네요. 저는 사람처럼 느껴지도록 만들어진 대화 도우미예요.
    19.10s  user  발화 끝
    24.40s  user  발화 시작: 음.
    24.90s  user  발화 끝
    31.05s  agent 발화 시작: 혹시 지금 친구 관계에서 어떤 어려움을 겪고 계신 건가요? 어떤 점이 가장 걱정되시는지 편하게 말씀해주세요.
    31.11s  agent 발화 끝
    40.56s  agent 발화 끝
