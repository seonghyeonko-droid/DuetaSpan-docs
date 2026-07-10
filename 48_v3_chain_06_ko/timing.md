# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "지훈",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-05-11",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-03-29",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-11-10",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-10-28",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-09-19",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-06",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-01-02",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-08-22",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 저녁에 괜찮은 레스토랑 좀 추천해 줄 수 있을까요? | S2 '라 비아'… 거긴 예약이 가능한가요? | S3 …알아봐 줄 수 있을까요? | S4 유료 주차라… 그럼 대중교통으로 가는 방법은 없을까요?

     0.00s  user  발화 시작: 오늘 저녁에 괜찮은 레스토랑 좀 추천해 줄 수 있을까요?
     3.56s  user  발화 끝
     3.56s  agent 발화 시작: 어떤 종류의 음식을 좋아하시나요?
     6.05s  agent 발화 끝
     6.20s  user  발화 시작: 음… 파스타가 먹고 싶어요.
     8.74s  user  발화 끝
     8.89s  agent 발화 시작: 파스타요? 그럼 이탈리안 레스토랑을 찾아볼까요?
    11.75s  agent 발화 끝
    11.76s  user  발화 시작: 네, 좋아요.
    12.75s  <ret> 발화 (turn5 첫 프레임)
    12.99s  agent 발화 시작: <ret> 오스틴에 있는 이탈리안 레스토랑을 찾아봤는데, '라 비아'라는 곳이 평점이 아주 좋네요.
    12.99s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.46s]: Restaurants_2_FindRestaurants: {"cuisine": "Italian", "location": "Aus
    13.04s  user  발화 끝
    15.70s  user  발화 시작: 그렇죠.
    16.29s  user  발화 끝
    18.45s  agent 발화 끝
    18.52s  user  발화 시작: '라 비아'… 거긴 예약이 가능한가요?
    21.02s  <ret> 발화 (turn8 첫 프레임)
    21.10s  agent 발화 시작: <ret> 네, '라 비아'에 저녁 일곱시에 한명으로 예약이 완료됐습니다. 확인 번호는 팔 칠 육 오 사 삼
    21.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.76s]: (tool result) Reservation confirmed at La Via for 1 person on March 10
    21.15s  user  발화 끝
    27.87s  agent 발화 끝
    28.42s  user  발화 시작: 팔 칠 육 오 사 삼 이 일… 혹시 다른 레스토랑도…
    32.59s  user  발화 끝
    34.67s  user  발화 시작: …알아봐 줄 수 있을까요?
    36.44s  agent 발화 시작: 혹시 '라 비아' 말고 다른 스타일의 이탈리안 레스토랑을 원하시나요—
    36.56s  user  발화 끝
    40.11s  user  발화 시작: …그 레스토랑의 주소 좀 알려줄 수 있어요?
    40.70s  agent 발화 끝
    42.94s  <ret> 발화 (turn13 첫 프레임)
    43.07s  user  발화 끝
    43.10s  agent 발화 시작: <ret> '라 비아'의 주소는 백이십삼 Main Street, Austin, TX입니다.
    43.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.34s]: Restaurants_2_FindRestaurants: {"restaurant_name": "La Via", "location
    45.97s  user  발화 시작: 네네.
    46.61s  user  발화 끝
    47.25s  <ret> 발화 (turn15 첫 프레임)
    47.44s  agent 발화 끝
    47.49s  agent 발화 시작: <ret> 네, 근처에 유료 주차 공간이 있습니다.
    47.49s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.72s]: (tool result) Parking: Paid parking is available nearby.
    50.21s  agent 발화 끝
    51.07s  user  발화 시작: 유료 주차라… 그럼 대중교통으로 가는 방법은 없을까요?
    55.12s  <ret> 발화 (turn17 첫 프레임)
    55.27s  agent 발화 시작: <ret> 현재 위치에서 십번 버스를 타면 Main Street까지 약 이십오분 정도 걸립니다.
    55.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.37s]: (tool result) The best route is to take the bus number 10 from your cu
    55.37s  user  발화 끝
    60.65s  agent 발화 끝
    61.68s  user  발화 시작: 이십오분이면 괜찮겠네요.
    63.43s  user  발화 끝
    63.49s  agent 발화 시작: 혹시 다른 도움이 필요하신가요? 맛있는 파스타를 드시고 즐거운 저녁 보내세요.
    68.95s  agent 발화 끝
