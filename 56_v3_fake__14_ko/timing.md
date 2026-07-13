# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "노찬",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-27",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-11-11",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-10-06",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-21",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-29",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-01",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 세상에서 제일 빠른 오토바이가 뭔지 궁금해. | S2 오, 생각보다 비싸네. 비슷한 가격대의 다른 오토바이는 없을까 | S3 음… 좀 더 편안하게 탈 수 있는 투어링 모델로 찾아줘. | S4 오, 괜찮아 보이네. 한번 사진 좀 보여줄래?

     0.00s  user  발화 시작: 세상에서 제일 빠른 오토바이가 뭔지 궁금해.
     2.66s  <ret> 발화 (turn1 첫 프레임)
     2.82s  agent 발화 시작: <ret> 세상에서 제일 빠른 오토바이는 가와사키 닌자 H2R인데, 최고 속도가 시속 사백킬로미터라고 해요.
     2.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.64s]: The Kawasaki Ninja H2R is the fastest production motorcycle with a top
     2.82s  user  발화 끝
     8.45s  user  발화 시작: 음, 그 오토바이 가격이 얼마 정도 해?
     8.45s  agent 발화 끝
    11.58s  <ret> 발화 (turn3 첫 프레임)
    11.74s  agent 발화 시작: <ret> 이천이십사년식 가와사키 닌자 H2R의 미국 내 제조사 권장 소매 가격은 오만 오천 달러예요.
    11.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.11s]: (tool result) The 2024 Kawasaki Ninja H2R has a manufacturer's suggest
    11.74s  user  발화 끝
    17.85s  user  발화 시작: 와.
    17.85s  agent 발화 끝
    18.32s  user  발화 시작: 오, 생각보다 비싸네. 비슷한 가격대의 다른 오토바이는 없을까?
    18.32s  user  발화 끝
    22.08s  agent 발화 시작: 비슷한 가격대의 오토바이를 찾아볼까요? 어떤 스타일을 선호하시는지 알려주시면 더 정확하게 찾아드릴 수 있어요
    22.08s  user  발화 끝
    28.18s  user  발화 시작: 응.
    28.18s  agent 발화 끝
    28.65s  user  발화 시작: 음… 좀 더 편안하게 탈 수 있는 투어링 모델로 찾아줘.
    28.65s  user  발화 끝
    32.95s  <ret> 발화 (turn9 첫 프레임)
    33.35s  agent 발화 시작: <ret> 이만 팔천 달러에서 삼만 달러 사이 가격대의 비 엠 더블유 K 천육백 지 티 엘이 편안한 투어링 
    33.35s  ⚡SPAN 주입 [d'=1.12s / d_lead=9.86s]: (tool result) The BMW K 1600 GTL is a luxury touring motorcycle with a
    33.35s  user  발화 끝
    43.21s  user  발화 시작: 오, 괜찮아 보이네. 한번 사진 좀 보여줄래?
    43.21s  agent 발화 끝
    46.50s  agent 발화 시작: 네, 잠시만 기다려 주세요. 비 엠 더블유 K 천육백 지 티 엘 사진을 보여드릴게요.
    46.50s  user  발화 끝
    53.08s  agent 발화 끝
