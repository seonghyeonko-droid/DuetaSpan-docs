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

# EXAMINER(FDB-v2) 단계: S1 주니 카페의 가격대는 어떻게 돼요? | S2 지금 바로 내비게이션 시작해 줄 수 있어요? | S3 예약을 도와줄 수 있어요? 오늘 저녁 일곱시에 두 명으로 예약 | S4 주니 카페의 분위기는 어떤가요?

     0.00s  user  발화 시작: 주니 카페의 가격대는 어떻게 돼요?
     1.85s  <ret> 발화 (turn1 첫 프레임)
     2.15s  agent 발화 시작: <ret> 알겠습니다. 주니 카페의 가격대는 달러 표시 두 개입니다.
     2.26s  user  발화 끝
     2.31s  ⚡SPAN 주입 [d'=0.46s / d_lead=0.46s]: (tool result) $$
     3.79s  user  발화 시작: 맞아요.
     4.33s  user  발화 끝
     5.85s  agent 발화 끝
     6.07s  user  발화 시작: 달러 표시 두 개가 어느 정도 가격대예요?
     8.51s  user  발화 끝
     9.08s  agent 발화 시작: 보통 일인당 삼십달러에서 육십달러 정도의 식사 비용을 예상하시면 됩니다.
    14.22s  user  발화 시작: 주니 카페는 지금 영업하고 있어요?
    14.26s  agent 발화 끝
    15.90s  <ret> 발화 (turn6 첫 프레임)
    16.29s  agent 발화 시작: <ret> 지금 영업 중이고, 오늘 밤 열시에 문을 닫습니다.
    16.34s  user  발화 끝
    17.42s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.47s]: (tool result) Open now. Closes 10:00 PM.
    17.83s  user  발화 시작: 정말요?
    18.55s  user  발화 끝
    19.76s  agent 발화 끝
    20.51s  user  발화 시작: 주니 카페까지 가는 가장 빠른 길은 어떻게 돼요?
    22.85s  <ret> 발화 (turn9 첫 프레임)
    23.08s  agent 발화 시작: <ret> 차로 약 육분, 일 점 육마일 정도 거리입니다.
    23.09s  user  발화 끝
    24.21s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.70s]: (tool result) 1.6 miles, approximately 6 minutes by car.
    24.84s  user  발화 시작: 네.
    25.24s  user  발화 끝
    26.78s  agent 발화 끝
    27.49s  user  발화 시작: 지금 바로 내비게이션 시작해 줄 수 있어요?
    29.84s  <ret> 발화 (turn12 첫 프레임)
    30.12s  user  발화 끝
    30.15s  agent 발화 시작: <ret> 주니 카페로 가는 내비게이션을 시작했습니다.
    31.44s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.59s]: (tool result) Navigation started to Zuni Cafe.
    32.74s  agent 발화 끝
    33.26s  user  발화 시작: 주니 카페 근처에 주차는 어디가 편리해요?
    36.16s  user  발화 끝
    36.20s  <ret> 발화 (turn14 첫 프레임)
    36.27s  agent 발화 시작: <ret> 천육백오십팔 Market Street에 공영 주차장이 있습니다.
    37.16s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.70s]: (tool result) Public parking available at 1658 Market St.
    39.97s  agent 발화 끝
    40.49s  user  발화 시작: 그 주차장까지 가는 길도 알려줄 수 있어요?
    42.44s  <ret> 발화 (turn16 첫 프레임)
    42.83s  agent 발화 시작: <ret> 차로 약 사분, 영 점 팔마일 정도 거리입니다.
    42.89s  user  발화 끝
    44.12s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.19s]: (tool result) 0.8 miles, approximately 4 minutes by car.
    45.77s  user  발화 시작: 주니 카페에는 예약이 가능한가요?
    46.02s  agent 발화 끝
    47.85s  user  발화 끝
    47.89s  <ret> 발화 (turn18 첫 프레임)
    47.96s  agent 발화 시작: <ret> 예약하시는 것이 좋습니다.
    48.93s  ⚡SPAN 주입 [d'=1.04s / d_lead=1.70s]: (tool result) Reservations recommended.
    49.19s  user  발화 시작: 예약을 도와줄 수 있어요? 오늘 저녁 일곱시에 두 명으로 예약하고 싶어요.
    49.66s  agent 발화 끝
    53.30s  <ret> 발화 (turn20 첫 프레임)
    53.54s  agent 발화 시작: <ret> 오늘 저녁 일곱시에 두 명으로 주니 카페 예약을 확정했습니다. 확인 번호는 ZX1234입니다.
    53.54s  user  발화 끝
    54.34s  ⚡SPAN 주입 [d'=1.04s / d_lead=7.55s]: (tool result) Reservation confirmed for 2 people at Zuni Cafe at 7:00 
    60.83s  user  발화 시작: 혹시 주니 카페의 대표 메뉴가 뭐예요?
    61.08s  agent 발화 끝
    62.97s  agent 발화 시작: 주니 카페는 로스트 치킨으로 아주 유명합니다.
    63.09s  user  발화 끝
    66.34s  agent 발화 끝
    66.88s  user  발화 시작: 로스트 치킨 외에 다른 추천 메뉴도 있을까요?
    69.41s  agent 발화 시작: 굴 요리도 많은 분들이 좋아하시고, 특히 겨울철에 인기가 많습니다—
    69.45s  user  발화 끝
    72.86s  user  발화 시작: 굴 요리가 겨울에만 있는 거예요?
    73.52s  agent 발화 끝
    75.44s  user  발화 끝
    75.46s  agent 발화 시작: 네, 신선도를 위해 겨울에만 제공되는 경우가 많습니다.
    77.61s  user  발화 시작: 네.
    77.96s  user  발화 끝
    78.93s  agent 발화 시작: 주니 카페는 신선한 재료를 사용하는 것으로도 알려져 있습니다.
    79.02s  agent 발화 끝
    80.78s  user  발화 시작: 네.
    81.23s  user  발화 끝
    82.68s  agent 발화 끝
    83.04s  user  발화 시작: 주니 카페의 분위기는 어떤가요?
    84.81s  <ret> 발화 (turn31 첫 프레임)
    85.12s  user  발화 끝
    85.12s  agent 발화 시작: <ret> 활기차고 고급스러운 분위기의 클래식한 레스토랑입니다.
    86.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.75s]: (tool result) Lively, upscale, and classic.
    86.87s  user  발화 시작: 그렇죠.
    87.37s  user  발화 끝
    88.87s  agent 발화 끝
    89.01s  user  발화 시작: 주니 카페에 반려동물을 데려갈 수 있나요?
    91.67s  <ret> 발화 (turn34 첫 프레임)
    91.90s  agent 발화 시작: <ret> 주니 카페는 반려동물 동반이 가능한지는 확인해봐야 합니다.
    91.91s  user  발화 끝
    93.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.02s]: (tool result) Pets are not allowed.
    95.73s  agent 발화 시작: 죄송합니다. 주니 카페는 반려동물 동반이 허용되지 않습니다.
    95.92s  agent 발화 끝
    99.40s  user  발화 시작: 그럼, 반려동물 동반 가능한 근처 레스토랑을 추천해 줄 수 있어요?
    99.43s  agent 발화 끝
   103.52s  <ret> 발화 (turn37 첫 프레임)
   103.75s  user  발화 끝
   103.92s  agent 발화 시작: <ret> 파크 챌렛이 영 점 구마일 거리에 있고 반려동물 동반이 가능합니다.
   104.72s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.45s]: (tool result) Park Chalet is 0.9 miles away and pet-friendly.
   108.24s  user  발화 시작: 파크 챌렛까지 가는 길은 어떻게 돼요?
   108.36s  agent 발화 끝
   110.00s  <ret> 발화 (turn39 첫 프레임)
   110.15s  agent 발화 시작: <ret> 차로 약 칠분, 일 점 이마일 정도 거리입니다.
   110.17s  user  발화 끝
   110.96s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.23s]: (tool result) 1.2 miles, approximately 7 minutes by car.
   113.38s  agent 발화 끝
