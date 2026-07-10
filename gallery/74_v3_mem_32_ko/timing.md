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


     0.00s  agent 발화 시작: 준찬 씨, 안녕하세요. 저는 여러분의 창의적인 고민을 돕는 상담사, 투날로예요.
     4.73s  user  발화 시작: 네.
     5.27s  user  발화 끝
     6.25s  agent 발화 끝
     6.60s  user  발화 시작: 아, 안녕하세요. 투날로 씨. 혹시 제가 예전에 고양이에 대해 말씀드렸었죠?
    13.21s  <ret> 발화 (turn3 첫 프레임)
    13.28s  agent 발화 시작: <ret> 네, 맞아요. 두천 씨는 시암 고양이 벨라를 키우고 계시다고요.
    13.42s  user  발화 끝
    15.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.40s]: [2026-05-02] User has a Siamese cat named Bella.
    16.26s  user  발화 시작: 음.
    16.75s  user  발화 끝
    17.52s  agent 발화 시작: 벨라와 함께 지내시는 게 즐거우신가요? 혹시 벨라와 관련된 고민이 있으신가요?
    17.68s  agent 발화 끝
    22.98s  agent 발화 끝
    24.19s  user  발화 시작: 음… 벨라가 요즘 좀 시무룩해 보이는데, 혹시 제가 예전에 어떤 종류의 음식을 먹는지 말씀드렸었나요?
    31.75s  <ret> 발화 (turn7 첫 프레임)
    32.11s  user  발화 끝
    32.14s  agent 발화 시작: <ret> 두천 씨는 생선을 드시는 채식주의자시군요. 벨라가 시무룩한 건 식단과는 관련이 없을 것 같지만, 
    33.03s  ⚡SPAN 주입 [d'=1.28s / d_lead=10.02s]: [2025-08-28] User is pescatarian.
    42.16s  agent 발화 끝
    43.50s  user  발화 시작: 벨라는 참치를 좋아해요.
    45.54s  agent 발화 시작: 참치를 좋아하시는군요. 벨라를 위해 특별한 간식을 준비해 주시는 건 어떠세요?
    45.62s  user  발화 끝
    51.10s  agent 발화 끝
