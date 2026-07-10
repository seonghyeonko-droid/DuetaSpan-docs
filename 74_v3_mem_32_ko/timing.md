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


     0.00s  agent 발화 시작: 준찬 씨, 안녕하세요. 저는 투날로예요. 창의적인 어려움을 겪거나 자신감을 북돋우는 걸 돕는 상담가랍니다.
     6.22s  user  발화 시작: 네.
     6.77s  user  발화 끝
     8.20s  agent 발화 끝
     8.44s  user  발화 시작: 아, 네… 혹시 제가 전에 말씀드렸던, 고양이 이름이 뭐였죠? 까먹었어요.
    14.17s  <ret> 발화 (turn3 첫 프레임)
    14.24s  agent 발화 시작: <ret> 전에 말씀하신 고양이 이름은… 벨라였어요. 시암 고양이랍니다.
    14.27s  user  발화 끝
    16.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.70s]: [2026-05-02] User has a Siamese cat named Bella.
    18.16s  user  발화 시작: 음.
    18.66s  user  발화 끝
    19.63s  user  발화 시작: 벨라… 그렇죠, 맞아요. 요즘 벨라가 좀 힘이 없어 보여서 걱정이에요.
    19.93s  agent 발화 끝
    24.07s  agent 발화 시작: 벨라가 힘이 없다니 걱정이네요. 혹시 벨라가 특별히 좋아하는 간식이 있나요? 아니면 평소에 잘 먹는 음식이 
    24.17s  user  발화 끝
    32.65s  agent 발화 끝
    32.71s  user  발화 시작: 음… 벨라는 참치를 엄청 좋아해요.
    35.79s  agent 발화 시작: 참치를 좋아한다니 다행이네요. 벨라에게 참치를 조금 챙겨주시면 기분이 좋아질 수도 있을 것 같아요. 혹시 다
    35.95s  user  발화 끝
    44.64s  agent 발화 끝
