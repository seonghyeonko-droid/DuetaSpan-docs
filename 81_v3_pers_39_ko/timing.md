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


     0.00s  agent 발화 시작: 세재님, 안녕하세요. 저는 아릴이라고 해요. 편안하게 친구 관계나 사회생활에 대해 이야기 나눌 수 있는 라이
     7.93s  agent 발화 끝
     9.66s  user  발화 시작: 아릴이요? 이름이 특이하네요. 혹시… 저랑 비슷한 고민을 많이 하는 사람들을 도와주는 건가요?
    16.20s  agent 발화 시작: 네, 세재님. 많은 분들이 관계에서 어려움을 느끼시더라고요. 특히 나이가 드실수록 더 조심스러워지는 경향이 
    16.33s  user  발화 끝
    20.82s  user  발화 시작: 응.
    21.18s  user  발화 끝
    25.97s  agent 발화 끝
    27.35s  user  발화 시작: 음… 요즘 새로 친구를 사귀기가 너무 어려워요. 예전처럼 쉽게 마음을 열기도 힘들고, 뭘 해야 할지도 모르겠
    35.47s  agent 발화 시작: 새로운 친구를 사귀는 게 쉽지 않다고 느끼시는군요. 세재님, 혹시 어떤 상황에서 친구를 사귀고 싶으신지 조금
    35.55s  user  발화 끝
    43.40s  agent 발화 끝
