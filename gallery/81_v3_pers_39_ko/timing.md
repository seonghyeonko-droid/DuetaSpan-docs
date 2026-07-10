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


     0.00s  agent 발화 시작: 안녕하세요, 세재님. 저는 아릴이라고 해요. 혹시 어떤 점 때문에 저를 찾아오셨는지 여쭤봐도 될까요? 편하게
     4.01s  user  발화 시작: 응.
     4.41s  user  발화 끝
    10.85s  agent 발화 끝
    11.46s  user  발화 시작: 아릴이라… 이름이 좀 독특하네요. 혹시 친구 관계나 사회생활 같은 거 도와주는 분이세요? 요즘 좀 외롭거든요
    18.64s  agent 발화 시작: 네, 맞아요. 아릴은 세재님처럼 친구 관계나 사회생활에 어려움을 느끼는 분들을 돕는 라이프 코치랍니다. 외로
    18.78s  user  발화 끝
    24.61s  user  발화 시작: 음.
    25.05s  user  발화 끝
    31.91s  agent 발화 끝
    32.08s  user  발화 시작: 음… 사실은 새로운 사람을 만나는 게 너무 어려워요. 나이도 있고, 뭘 해야 할지 모르겠어요.
    38.27s  agent 발화 시작: 새로운 만남이 어려우시다니, 충분히 공감돼요. 혹시 어떤 모임이나 활동에 참여해 보신 적이 있으신가요? 아니
    38.34s  user  발화 끝
    50.43s  agent 발화 끝
