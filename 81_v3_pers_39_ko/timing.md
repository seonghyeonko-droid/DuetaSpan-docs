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
     9.36s  agent 발화 끝
     9.44s  user  발화 시작: 혹시 제가 어떤 걸 도와드릴 수 있을까요?
    12.28s  agent 발화 시작: 세재님, 어떤 부분이 좀 힘드신가요? 혹시 최근에 친구 관계에서 어려움을 느끼셨거나, 새로운 사람을 만나는 
    12.39s  user  발화 끝
    16.89s  user  발화 시작: 응.
    17.34s  user  발화 끝
    22.00s  user  발화 시작: 음… 사실 요즘 새로운 사람을 사귀는 게 너무 어렵더라구요. 나이도 먹고, 뭘 해야 할지 모르겠어요.
    22.16s  agent 발화 끝
    29.96s  agent 발화 시작: 새로운 만남이 어렵게 느껴지시는군요. 세재님, 혹시 예전에는 어떤 방식으로 친구를 사귀셨는지 여쭤봐도 될까요
    30.10s  user  발화 끝
    42.39s  agent 발화 끝
