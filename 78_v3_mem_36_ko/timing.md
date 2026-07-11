# v3_mem_36_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "예희",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-10",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-12-18",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-10-25",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2025-10-10",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     },
#     {
#       "date": "2025-07-29",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-06-17",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-11",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-08-23",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 어… 안녕하세요. | S2 음… 요즘 외식할 때 좀 불편하더라고요. | S3 그린 테이블… 가보고 싶네요. | S4 그냥 집에서 고양이랑 놀아요.

     0.00s  agent 발화 시작: 안녕하세요, 예희님! 저는 크리스예요. 여행 계획이나 휴식에 대해 도와드릴 수 있는 라이프 코치랍니다.
     0.00s  <ret> 발화 (turn5 첫 프레임)
     0.07s  user  발화 시작: 맞아.
     0.07s  agent 발화 끝
     0.08s  user  발화 시작: 어… 안녕하세요.
     0.08s  user  발화 끝
     0.09s  agent 발화 시작: 혹시 전에 저희가 나눈 이야기 중에 기억나는 게 있으세요?
     0.09s  user  발화 끝
     0.14s  user  발화 시작: 글루텐 프리 식단이요.
     0.14s  agent 발화 끝
     0.14s  <ret> 발화 (turn11 첫 프레임)
     0.15s  agent 발화 시작: <ret> 아, 네 맞아요. 예희님께서는 글루텐 프리 식단을 챙기시는군요. 혹시 최근에 식단 때문에 고민이 
     0.15s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: [2026-01-10] User is gluten-free.
     0.15s  user  발화 끝
     0.21s  <ret> 발화 (turn9 첫 프레임)
     0.23s  user  발화 시작: 음… 요즘 외식할 때 좀 불편하더라고요.
     0.23s  agent 발화 끝
     0.26s  agent 발화 시작: 외식이 불편하시군요. 혹시 최근에 특별히 가고 싶었던 식당이 있으세요?
     0.26s  user  발화 끝
     0.31s  user  발화 시작: 없는데… 전에 생일 파티 할 때 야외 좌석 있는 곳 찾았었죠.
     0.31s  agent 발화 끝
     0.37s  agent 발화 시작: <ret> 아, 네, 기억나요. 생일 파티를 위해 여섯 분이 앉을 수 있는 야외 좌석이 있는 곳을 찾으셨었죠
     0.37s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: [2025-08-23] Past chat — Planning a birthday dinner: party of six; loo
     0.37s  user  발화 끝
     0.46s  user  발화 시작: 응.
     0.46s  agent 발화 끝
     0.46s  agent 발화 시작: <ret> 네, 부산에서 글루텐 프리 메뉴를 제공하고 야외 좌석이 있는 식당 두 곳을 찾았어요. 그린 테이블
     0.46s  ⚡SPAN 주입 [d'=0.14s / d_lead=0.14s]: (tool result) {"restaurants": [{"name": "Green Table", "address": "해운대
     0.46s  user  발화 끝
     0.60s  user  발화 시작: 오.
     0.60s  agent 발화 끝
     0.61s  user  발화 시작: 그린 테이블… 가보고 싶네요.
     0.61s  user  발화 끝
     0.63s  agent 발화 시작: 그린 테이블에 가보고 싶으시군요. 혹시 그쪽으로 가는 길을 안내해 드릴까요?
     0.63s  user  발화 끝
     0.68s  user  발화 시작: 아니요, 괜찮아요. 그냥… 요즘 좀 지쳐서 쉬고 싶어요.
     0.68s  agent 발화 끝
     0.73s  agent 발화 시작: 지치셨군요. 충분히 쉬시는 게 중요해요. 혹시 요즘 스트레스 해소를 위해 특별히 하는 게 있으세요?
     0.73s  user  발화 끝
     0.75s  <ret> 발화 (turn19 첫 프레임)
     0.80s  user  발화 시작: 음.
     0.80s  agent 발화 끝
     0.81s  user  발화 시작: 그냥 집에서 고양이랑 놀아요.
     0.81s  user  발화 끝
     0.83s  agent 발화 시작: <ret> 아, 네. 벨라라는 이름의 시암 고양이와 함께 시간을 보내시는군요. 고양이는 정말 좋은 친구가 되
     0.83s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: [2025-06-17] User has a Siamese cat named Bella.
     0.83s  user  발화 끝
     0.91s  user  발화 시작: 그렇죠…
     0.91s  agent 발화 끝
     0.92s  agent 발화 시작: 혹시 벨라와 함께 집에서 편안하게 보낼 수 있는 방법을 찾아볼까요? 예를 들어, 새로운 장난감을 사준다거나…
     0.92s  user  발화 끝
     1.00s  agent 발화 끝
