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


     0.00s  agent 발화 시작: 세재 씨, 안녕하세요! 저는 아릴이라고 해요. 혹시 친구 관계나 사회생활에서 고민이 있으신가 해서 연락드렸어
     4.75s  user  발화 시작: Yeah.
     5.43s  user  발화 끝
    12.81s  agent 발화 끝
    14.12s  user  발화 시작: 아, 안녕하세요, 아릴 씨. 이름이 꽤 독특하네요. 혹시… 상담 같은 걸 해주는 분이세요? 제가 요즘 좀 외
    22.93s  agent 발화 시작: 네, 맞아요. 저는 사람들의 관계를 돕는 라이프 코치 아릴이에요. 외로움… 그건 정말 힘든 감정이죠. 혹시 
    23.01s  user  발화 끝
    29.47s  user  발화 시작: Mm-hmm.
    30.11s  user  발화 끝
    37.31s  agent 발화 끝
    38.67s  user  발화 시작: 사실은, 은퇴하고 나서 예전 직장 동료들과 연락이 끊겼어요. 예전에는 매일 보던 사람들이었는데, 갑자기 너무
    48.31s  agent 발화 시작: 은퇴 후의 변화는 정말 큰 것 같아요. 갑자기 일상에서 중요한 관계가 사라지면 당연히 허전하고 외로울 수 있
    48.35s  user  발화 끝
    63.49s  agent 발화 끝
