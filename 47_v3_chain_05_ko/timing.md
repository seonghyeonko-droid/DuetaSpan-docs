# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "유우",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-08-02",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-07-22",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-05",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-15",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 주니 카페의 가격대는 어떻게 돼요? | S2 와, 꽤 걸리네요. 혹시 다른 식당도 추천해 줄 수 있나요?  | S3 평점이 어떻게 되는데요? | S4 그럼 지금 당장 일곱시에 예약을 해 줄 수 있어요?

     0.00s  user  발화 시작: 주니 카페의 가격대는 어떻게 돼요?
     1.55s  <ret> 발화 (turn1 첫 프레임)
     1.86s  agent 발화 시작: <ret> 주니 카페의 가격대는 세 달러 기호 세 개, 그러니까 상당히 높은 편이에요.
     1.93s  user  발화 끝
     2.05s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.11s]: (tool result) Zuni Cafe; address: 1658 Market St, San Francisco, CA 94
     6.30s  agent 발화 끝
     6.72s  user  발화 시작: 아, 그렇군요. 그곳은 주차하기 쉬운가요?
     9.63s  user  발화 끝
     9.86s  <ret> 발화 (turn3 첫 프레임)
     9.93s  agent 발화 시작: <ret> 주차에 대해서도 알아봐 드릴게요. 주니 카페 주변에는 길가 주차가 제한적이고, 유료 주차장들이 근
    10.90s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.16s]: (tool result) Zuni Cafe; parking: Limited street parking available, pa
    13.80s  user  발화 시작: 그렇죠.
    14.38s  user  발화 끝
    19.99s  user  발화 시작: 음, 그럼 대중교통으로 가는 게 더 나을까요?
    20.17s  agent 발화 끝
    23.31s  user  발화 끝
    23.32s  agent 발화 시작: 대중교통이 더 편리할 수도 있겠네요. 어떤 노선을 알아보시겠어요?
    25.09s  user  발화 시작: 네.
    25.49s  user  발화 끝
    27.19s  user  발화 시작: 엠바카데로 역에서 가는 방법이 있을까요?
    27.29s  agent 발화 끝
    29.47s  <ret> 발화 (turn9 첫 프레임)
    29.71s  agent 발화 시작: <ret> 엠바카데로 역에서 가는 방법은 여러 가지가 있어요. 엠바카데로 역에서 십사번 버스를 타고 미션 방
    29.73s  user  발화 끝
    30.83s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.74s]: (tool result) directions: From Embarcadero Station to Zuni Cafe; trans
    34.37s  user  발화 시작: 그렇군요.
    35.01s  user  발화 끝
    42.27s  user  발화 시작: 와, 꽤 걸리네요. 혹시 다른 식당도 추천해 줄 수 있나요? 비슷한 분위기의.
    42.65s  agent 발화 끝
    47.13s  user  발화 끝
    47.33s  agent 발화 시작: 비슷한 분위기의 다른 식당을 추천해 드릴게요. 어떤 종류의 음식을 좋아하세요?
    49.63s  user  발화 시작: 네네.
    50.09s  user  발화 끝
    53.35s  agent 발화 끝
    53.87s  user  발화 시작: 음… 이탈리아 음식이 좋을 것 같아요.
    56.55s  <ret> 발화 (turn15 첫 프레임)
    56.70s  agent 발화 시작: <ret> 이탈리아 음식을 좋아하시는군요. 플루어 앤드 워터, 토니즈 피자 나폴레타나, 소토 마레가 근처에 
    56.82s  user  발화 끝
    57.83s  ⚡SPAN 주입 [d'=1.28s / d_lead=1.57s]: (tool result) Nearby Italian Restaurants: 1. Flour + Water (Price: $$$
    69.20s  user  발화 시작: 토니즈 피자가 맛있을까요?
    69.27s  agent 발화 끝
    71.13s  user  발화 끝
    71.38s  agent 발화 시작: 토니즈 피자는 나폴리 피자로 유명해요. 평점도 꽤 높아요.
    75.85s  user  발화 시작: 평점이 어떻게 되는데요?
    76.01s  agent 발화 끝
    77.12s  <ret> 발화 (turn19 첫 프레임)
    77.44s  agent 발화 시작: <ret> 토니즈 피자의 평점은 사 점 육점이고, 이천오백개가 넘는 리뷰를 받았어요. 나폴리 피자 전문점이고
    77.46s  user  발화 끝
    77.62s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.74s]: (tool result) Tony's Pizza Napoletana; rating: 4.6 stars (based on 2,5
    86.67s  user  발화 시작: 이천오백개가 넘다니, 정말 인기 많네요.
    86.72s  agent 발화 끝
    89.63s  user  발화 끝
    89.81s  agent 발화 시작: 네, 정말 인기가 많은 곳이에요. 예약은 필수일 거예요.
    93.83s  user  발화 시작: 예약은 어떻게 해야 하나요?
    94.07s  agent 발화 끝
    95.38s  <ret> 발화 (turn23 첫 프레임)
    95.77s  agent 발화 시작: <ret> 예약을 도와드릴게요. 십월 이십칠일에 오후 일곱시 또는 여덟시 삼십분에 예약 가능해요. 전화번호는
    95.88s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.05s]: (tool result) Tony's Pizza Napoletana; reservation_availability: Avail
    95.91s  user  발화 끝
   108.33s  agent 발화 끝
   108.87s  user  발화 시작: 그럼 지금 당장 일곱시에 예약을 해 줄 수 있어요?
   111.79s  agent 발화 시작: 네, 지금 바로 일곱시에 예약을 해 드릴 수 있어요.—
   111.82s  user  발화 끝
   114.24s  user  발화 시작: 부탁드려요!
   114.79s  <ret> 발화 (turn27 첫 프레임)
   114.94s  agent 발화 끝
   115.02s  agent 발화 시작: <ret> 토니즈 피자 나폴레타나에 십월 이십칠일 오후 일곱시에 두명으로 예약이 완료되었어요. 확인 번호는 
   115.06s  user  발화 끝
   115.83s  ⚡SPAN 주입 [d'=1.04s / d_lead=10.84s]: (tool result) Reservation confirmed: Tony's Pizza Napoletana, October 
   125.86s  agent 발화 끝
   126.74s  user  발화 시작: 와, 정말 고마워요!
   128.35s  user  발화 끝
   128.52s  agent 발화 시작: 천만에요. 즐거운 식사 되세요. 혹시 다른 도움이 필요하시면 언제든지 말씀해 주세요.
   133.94s  agent 발화 끝
