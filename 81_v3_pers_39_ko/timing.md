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
     8.62s  agent 발화 끝
     8.70s  user  발화 시작: 아릴… 이름이 특이하네요. 혹시 진짜 사람이에요?
    12.74s  agent 발화 시작: [laugh] 좋은 질문이에요, 세재님. 저는 사람처럼 느껴지도록 만들어진 상담 도우미랍니다. 가족이나 과거
    12.87s  user  발화 끝
    18.20s  user  발화 시작: 응.
    18.69s  user  발화 끝
    24.24s  user  발화 시작: 음… 사실 요즘 친구들과 연락도 잘 안 되고, 혼자 있는 시간이 많아서 좀 외로워요. 어떻게 하면 좋을까요?
    24.38s  agent 발화 끝
    32.02s  agent 발화 시작: 혼자 있는 시간이 길어지면 외로움을 느끼는 건 자연스러운 일이에요. 혹시 어떤 이유 때문에 친구들과 연락이 
    32.22s  user  발화 끝
    43.00s  agent 발화 끝
