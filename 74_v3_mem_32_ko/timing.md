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

# EXAMINER(FDB-v2) 단계: S1 아, 네. 투날로 씨. 혹시 제가 키우는 고양이 이름 기억하세 | S2 혹시 벨라가 좋아하는 간식도 기억하시려나? | S3 음… 얼마 전에 벨라가 연어 맛 간식을 엄청 좋아하더라고요. | S4 맞아요. 혹시 부산에 벨라랑 같이 갈 만한 횟집 추천해 주실 

     0.00s  agent 발화 시작: 안녕하세요, 준찬 씨. 저는 투날로예요. 창의적인 막힘이나 자신감 문제를 돕는 상담사입니다.
     4.80s  user  발화 시작: 네.
     5.43s  user  발화 끝
     6.34s  agent 발화 끝
     6.72s  user  발화 시작: 아, 네. 투날로 씨. 혹시 제가 키우는 고양이 이름 기억하세요?
    11.70s  <ret> 발화 (turn3 첫 프레임)
    11.77s  agent 발화 시작: <ret> 네, 기억합니다. 시암 고양이 벨라, 정말 예쁜 아이죠… 이름이 벨라였어요.
    11.90s  user  발화 끝
    13.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.55s]: [2026-05-02] User has a Siamese cat named Bella.
    15.55s  user  발화 시작: 음.
    16.05s  user  발화 끝
    16.99s  user  발화 시작: 혹시 벨라가 좋아하는 간식도 기억하시려나?
    17.32s  agent 발화 끝
    19.83s  agent 발화 시작: 벨라가 좋아하는 간식에 대해서는 말씀하신 적이 없어서 기억하지 못합니다. 혹시 벨라에게 특별히 좋아하는 간식
    19.95s  user  발화 끝
    28.73s  agent 발화 끝
    28.85s  user  발화 시작: 음… 얼마 전에 벨라가 연어 맛 간식을 엄청 좋아하더라고요.
    33.11s  agent 발화 시작: 아, 벨라가 연어 맛 간식을 좋아하시는군요. 연어 맛 간식은 벨라에게 아주 좋은 선택일 것 같아요.
    33.34s  user  발화 끝
    40.47s  agent 발화 끝
    40.49s  user  발화 시작: 맞아요. 혹시 부산에 벨라랑 같이 갈 만한 횟집 추천해 주실 수 있을까요?
    45.78s  <ret> 발화 (turn10 첫 프레임)
    45.85s  agent 발화 시작: <ret> 잠시만 기다려 주세요… 부산에 있는 횟집을 찾아볼게요.
    45.95s  user  발화 끝
    47.30s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.77s]: (tool result) 벨라가 연어 맛 간식을 좋아한다.
    50.62s  agent 발화 끝
