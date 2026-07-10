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


     0.00s  agent 발화 시작: 안녕하세요, 세재님. 저는 아릴이라고 해요. 편안하게 친구 관계나 사회생활에 대해 이야기 나눌 수 있도록 돕
     3.71s  user  발화 시작: 응.
     4.16s  user  발화 끝
     9.72s  user  발화 시작: 혹시 저랑 비슷한 고민을 많이 하는 사람들을 만나본 적 있으세요?
    10.10s  agent 발화 끝
    13.81s  agent 발화 시작: 비슷한 고민을 가진 분들을 많이 만나왔어요. 특히 세재님처럼 연령대가 있으신 분들은 오랜 관계 속에서 쌓인 
    14.03s  user  발화 끝
    19.39s  user  발화 시작: 음.
    20.03s  user  발화 끝
    26.15s  agent 발화 시작: 혹시 주변 사람들과의 소통 방식에 변화가 필요하다고 느끼시는 건가요? 관계 속에서 스스로의 감정을 표현하는 
    26.25s  agent 발화 끝
    35.70s  agent 발화 끝
