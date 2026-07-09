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


     0.00s  agent 발화 시작: 세재님, 안녕하세요! 저는 아릴이라고 해요. 사회생활과 인간관계에서 편안함을 느끼실 수 있도록 돕는 라이프 
    14.01s  agent 발화 끝
    15.71s  user  발화 시작: 아릴 코치님이시군요. 음… 솔직히 말하면, 새로운 사람을 만나는 게 너무 어려워요. 나이가 드니까 더 그런 
    23.45s  agent 발화 시작: 새로운 만남이 어려우시군요. 세재님, 혹시 어떤 부분이 가장 망설여지시는지 조금 더 자세히 말씀해주실 수 있
    23.54s  user  발화 끝
    29.98s  user  발화 시작: Yeah.
    30.75s  user  발화 끝
    37.17s  agent 발화 끝
    38.52s  user  발화 시작: 주로 모임 같은 데서, 아는 사람이 없는 곳에 가면 뭘 해야 할지 모르겠어요. 괜히 분위기만 어색하게 만들까
    46.83s  agent 발화 시작: 아, 모임에서 낯선 사람들과 어울리는 게 힘드신 거군요. 괜찮아요, 많은 분들이 비슷한 어려움을 느끼신답니다
    46.91s  user  발화 끝
    60.24s  agent 발화 끝
