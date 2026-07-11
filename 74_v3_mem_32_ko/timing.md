# v3_mem_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "서원",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-18",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in August."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2026-01-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-12-12",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-06-28",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-17",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 서원님! 저는 서원님의 소셜 라이프를 도와드릴 로스예요. 만나서 정말 반가워요.
     0.15s  user  발화 시작: 네.
     0.15s  agent 발화 끝
     0.17s  user  발화 시작: 안녕하세요, 로스 씨. 저번에 교토 여행 계획 얘기했었는데… 혹시 기억하시나요?
     0.17s  user  발화 끝
     0.23s  <ret> 발화 (turn3 첫 프레임)
     0.29s  <ret> 발화 (turn5 첫 프레임)
     0.31s  agent 발화 시작: <ret> 네, 서원님. 팔월에 교토 여행을 계획하고 계셨던 것, 잘 기억하고 있어요.
     0.31s  ⚡SPAN 주입 [d'=0.15s / d_lead=0.15s]: [2026-06-18] User is planning a trip to Kyoto in August.
     0.31s  user  발화 끝
     0.46s  user  발화 시작: 아, 다행이다. 그럼 혹시 교토에서 꼭 가봐야 할 곳 있을까요?
     0.46s  agent 발화 끝
     0.61s  agent 발화 시작: <ret> 교토에서는 기요미즈데라, 후시미 이나리 신사, 그리고 아라시야마 대나무 숲이 꼭 가볼 만한 곳으로
     0.61s  ⚡SPAN 주입 [d'=0.20s / d_lead=0.20s]: (tool result) Kiyomizu-dera Temple, Fushimi Inari Shrine, Arashiyama B
     0.61s  user  발화 끝
     0.80s  user  발화 시작: 네.
     0.80s  agent 발화 끝
     0.82s  agent 발화 시작: 서원님, 교토는 정말 아름다운 곳이에요. 여행 준비 잘 하셔서 즐거운 시간 보내시길 바랄게요.
     0.82s  user  발화 끝
     1.00s  agent 발화 끝
