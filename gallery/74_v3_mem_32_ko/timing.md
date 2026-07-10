# v3_mem_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "준찬",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-02",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-08-28",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-07-23",
#       "category": "work",
#       "text": "User works as a nurse."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-24",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-06-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 준찬님. 저는 툰알로예요. 창의적인 막힘이나 자신감 문제로 고민하시는 분들을 돕는 상담사입니다.
     6.95s  user  발화 시작: 네.
     8.42s  user  발화 끝
     9.09s  agent 발화 끝
     9.45s  user  발화 시작: 안녕하세요. 혹시 제가 예전에 키우는 고양이에 대해 말씀드렸었죠?
    14.44s  <ret> 발화 (turn3 첫 프레임)
    14.51s  agent 발화 시작: <ret> 네, 준찬님. 두 분에 대한 이야기가 기억나요. 시암고양이 벨라를 키우시죠.
    14.64s  user  발화 끝
    16.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.84s]: [2026-05-02] User has a Siamese cat named Bella.
    18.55s  user  발화 시작: 음.
    19.04s  user  발화 끝
    20.21s  agent 발화 시작: 벨라와 함께 지내시는 게 어떤가요? 요즘 벨라가 좋아하는 건 뭐예요?
    20.35s  agent 발화 끝
    25.67s  agent 발화 끝
    26.94s  user  발화 시작: 벨라가 요즘 새로운 장난감에 푹 빠졌어요. 그런데 제가 얼마 전에 이사할 집을 알아봤는데, 혹시 기억하시나요
    33.83s  <ret> 발화 (turn7 첫 프레임)
    34.17s  user  발화 끝
    34.22s  agent 발화 시작: <ret> 아, 네. 준찬님. 직장 근처에 수영장이 있는 헬스 멤버십에 대해 이야기하셨죠. 이사할 집은 어떤
    35.11s  ⚡SPAN 주입 [d'=1.28s / d_lead=10.99s]: [2026-05-24] Past chat — Comparing gym memberships: wants a pool; clos
    45.21s  agent 발화 끝
    46.56s  user  발화 시작: 네, 벨라가 편하게 지낼 수 있는 곳으로 알아보고 있어요.
    50.06s  user  발화 끝
