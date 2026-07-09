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
    10.02s  agent 발화 끝
    11.74s  user  발화 시작: [surprised] 아릴이요? 뭔가… 로봇 이름 같은데? 혹시 진짜 사람이에요?
    17.53s  agent 발화 시작: [laugh] 로봇 같다고 하시니 재미있네요. 저는 사람처럼 느껴지도록 만들어진 대화 도우미예요. 세재님의 
    17.66s  user  발화 끝
    25.29s  user  발화 시작: 응.
    25.73s  user  발화 끝
    33.81s  agent 발화 끝
    35.20s  user  발화 시작: 음… 사실 요즘 새로 친구를 사귀는 게 너무 어렵더라고요. 나이가 드니까 다들 자기 관계에만 집중하는 것 같
    43.06s  agent 발화 시작: 새로운 친구를 사귀는 게 어려우시군요. 그 마음 충분히 이해가 돼요. 혹시 어떤 모임이나 활동에 참여해 보셨
    43.12s  user  발화 끝
    59.35s  agent 발화 끝
