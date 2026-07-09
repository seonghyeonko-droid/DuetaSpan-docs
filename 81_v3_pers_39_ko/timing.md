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


     0.00s  agent 발화 시작: 세재 씨, 안녕하세요! 저는 아릴이라고 해요. 편안하게 사회생활, 특히 친구 관계나 인간관계에 대해 함께 이
     4.61s  user  발화 시작: 네.
     5.06s  user  발화 끝
    12.24s  agent 발화 끝
    13.71s  user  발화 시작: 아, 네. 아릴 씨군요. 솔직히 요즘 주변에 마음 터놓고 이야기할 친구가 딱히 없어서요. 좀 외롭기도 하고…
    21.32s  agent 발화 시작: 음, 혼자 힘들어하지 마세요. 세재 씨. 그런 감정은 충분히 들 수 있어요. 혹시 어떤 상황 때문에 친구 관
    21.41s  user  발화 끝
    26.18s  user  발화 시작: 음.
    26.67s  user  발화 끝
    32.03s  agent 발화 끝
    33.41s  user  발화 시작: 사실은 은퇴하고 나서 예전 직장 동료 말고는 만날 사람이 없더라고요. 취미도 없고, 뭘 해야 할지 잘 모르겠
    42.26s  user  발화 끝
