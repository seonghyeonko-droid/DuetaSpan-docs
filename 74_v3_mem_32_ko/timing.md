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


     0.00s  agent 발화 시작: 준찬 씨, 안녕하세요. 저는 투날로예요. 창의적인 고민이나 자신감 문제로 힘든 분들을 돕는 상담사랍니다.
     6.12s  user  발화 시작: 네.
     6.66s  user  발화 끝
     8.06s  agent 발화 끝
     8.38s  user  발화 시작: 아, 네. 투날로 씨 만나서 반가워요. 혹시 제가 키우는 고양이에 대해 기억하세요?
    14.18s  <ret> 발화 (turn3 첫 프레임)
    14.25s  agent 발화 시작: <ret> 네, 기억하고 있어요. 준찬 씨가 시암 고양이 벨라를 키우고 계시죠. 벨라가 정말 예쁜 아이였어요
    14.40s  user  발화 끝
    16.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.56s]: [2026-05-02] User has a Siamese cat named Bella.
    19.54s  user  발화 시작: 음.
    20.17s  user  발화 끝
    21.67s  agent 발화 시작: 혹시 벨라와 관련된 특별한 이야기가 있으신가요?
    21.80s  agent 발화 끝
    25.37s  agent 발화 끝
    26.62s  user  발화 시작: 벨라가 요즘 좀 우울해 보여서 걱정이에요. 혹시 고양이 행동 전문가를 추천해 주실 수 있을까요?
    32.56s  <ret> 발화 (turn7 첫 프레임)
    32.63s  agent 발화 시작: <ret> 전문가분들은 보통… …준찬 씨의 상황에 맞춰 맞춤형 상담을 제공하신다고 들었어요.
    32.79s  user  발화 끝
    34.08s  ⚡SPAN 주입 [d'=1.52s / d_lead=6.86s]: []
    39.49s  agent 발화 끝
    40.85s  user  발화 시작: 아, 감사합니다. 그런데 혹시 제가 예전에 어떤 헬스장을 알아봤었는지 기억하시나요?
    46.80s  <ret> 발화 (turn9 첫 프레임)
    47.03s  agent 발화 시작: <ret> 네, 기억나요. 준찬 씨께서 수영장이 있고 회사 근처에 있는 헬스장을 찾으셨었죠. 그때 어떤 점이
    47.10s  user  발화 끝
    48.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.07s]: [2026-05-24] Past chat — Comparing gym memberships: wants a pool; clos
    55.10s  agent 발화 끝
