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


     0.00s  agent 발화 시작: 준찬 씨, 안녕하세요. 저는 투날로예요. 편안하게 이야기 나눠봐요.
     3.90s  user  발화 시작: 아.
     4.53s  user  발화 끝
     5.19s  agent 발화 끝
     5.97s  user  발화 시작: 안녕하세요, 투날로 씨. 요즘 좀 답답한 기분이 들어서요.
     9.62s  agent 발화 시작: 답답한 기분이 드신다니, 마음이 좀 힘드시겠네요. 혹시 어떤 점이 가장 답답하게 느껴지시는지 조금 더 말씀해
     9.76s  user  발화 끝
    17.63s  agent 발화 끝
    17.69s  user  발화 시작: 음… 제가 요즘 빈티지 신디사이저 수집에 빠졌는데, 계속해서 새로운 모델을 찾고 싶은데, 예산이 부족해서 고
    24.96s  <ret> 발화 (turn5 첫 프레임)
    25.20s  agent 발화 시작: <ret> 빈티지 신디사이저 수집에 관심이 많으시군요… 이천이십육년 삼월 삼일에 말씀해주셨던 취미시죠?
    25.38s  user  발화 끝
    26.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.76s]: [2026-03-03] User is into vintage synth collecting.
    27.67s  user  발화 시작: 그렇죠.
    28.44s  user  발화 끝
    31.92s  agent 발화 시작: 혹시 특별히 염두에 두고 계신 모델이 있으신가요? 아니면 어떤 스타일의 신디사이저를 선호하시는지 알려주시면,
    31.96s  agent 발화 끝
    43.38s  agent 발화 끝
    43.78s  user  발화 시작: 사실 롤랜드 Juno-백육을 정말 갖고 싶은데, 상태 좋은 건 가격이 너무 비싸네요.
    49.33s  user  발화 끝
