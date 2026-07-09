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


     0.00s  agent 발화 시작: 세재님, 안녕하세요. 저는 아릴이라고 해요. 편안하게 친구 관계나 사회생활에 대한 고민을 털어놓으실 수 있도
    11.78s  agent 발화 끝
    13.46s  user  발화 시작: 아, 코치님이라고 하니까 좀 어색하네요. 그냥 편하게 얘기해도 돼요?
    18.18s  agent 발화 시작: 그럼요, 세재님. 편하게 아릴이라고 불러주세요. 혹시 지금 특별히 이야기하고 싶으신 부분이 있으신가요?
    18.32s  user  발화 끝
    22.65s  user  발화 시작: 응.
    22.95s  user  발화 끝
    27.63s  agent 발화 끝
    29.00s  user  발화 시작: 음… 사실 요즘 새로운 친구를 사귀는 게 너무 어렵더라고요. 예전만큼 쉽게 친해지는 것 같지도 않고.
    36.37s  agent 발화 시작: 새로운 친구를 사귀는 게 어려우시군요. 쉰대 이후에는 자연스럽게 만나는 기회가 줄어들기도 하고, 예전처럼 쉽
    36.46s  user  발화 끝
    55.75s  agent 발화 끝
