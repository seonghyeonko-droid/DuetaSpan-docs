# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "유우",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-03-27",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-06-16",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     },
#     {
#       "date": "2025-06-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-07",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-01-05",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 주니 카페 가격대는 어떻게 돼요? | S2 Foreign Cinema는 어떤 곳이에요? | S3 주니 카페와 Foreign Cinema 중에 어디가 더 분위기 | S4 십오분이요? 생각보다 가까우네요.

     0.00s  user  발화 시작: 주니 카페 가격대는 어떻게 돼요?
     1.44s  <ret> 발화 (turn1 첫 프레임)
     1.75s  agent 발화 시작: <ret> 주니 카페의 가격대는 이단계입니다.
     1.84s  user  발화 끝
     2.72s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.35s]: <maps_place_details: {"place_id": "ChIJ-W-G9f4Yj4ARz-u3S-j10rA", "name
     4.10s  agent 발화 끝
     4.51s  user  발화 시작: 이단계가 정확히 얼마를 의미하나요?
     6.97s  <ret> 발화 (turn3 첫 프레임)
     7.10s  user  발화 끝
     7.28s  agent 발화 시작: <ret> 가격 이단계는 보통 수준을 의미합니다.
     8.17s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.77s]: <maps_place_details: {"place_id": "ChIJ-W-G9f4Yj4ARz-u3S-j10rA", "name
     9.09s  user  발화 시작: 네.
     9.40s  user  발화 끝
     9.88s  user  발화 시작: 주니 카페는 지금 얼마나 붐비나요?
    10.05s  agent 발화 끝
    11.68s  <ret> 발화 (turn6 첫 프레임)
    11.86s  user  발화 끝
    11.91s  agent 발화 시작: <ret> 지금 주니 카페는 보통 정도의 혼잡도를 보이고 있습니다.
    13.04s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.84s]: (tool result) 현재 주니 카페는 보통 정도로 붐비고 있습니다.
    13.44s  user  발화 시작: 네.
    13.89s  user  발화 끝
    15.74s  user  발화 시작: 음… 혹시 근처에 비슷한 가격대의 다른 맛집도 있을까요?
    15.75s  agent 발화 끝
    19.85s  <ret> 발화 (turn9 첫 프레임)
    20.16s  agent 발화 시작: <ret> 근처에는 Foreign Cinema, Nopa, Beretta가 있습니다.
    20.36s  user  발화 끝
    21.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.51s]: (tool result) 근처에 Foreign Cinema, Nopa, Beretta가 있습니다.
    22.31s  user  발화 시작: 네.
    22.80s  user  발화 끝
    23.67s  agent 발화 끝
    24.35s  user  발화 시작: Foreign Cinema는 어떤 곳이에요?
    26.32s  <ret> 발화 (turn12 첫 프레임)
    26.39s  agent 발화 시작: <ret> Foreign Cinema는 미국식과 멕시코식 요리를 제공하며 평점은 사 점 사점입니다.
    26.42s  user  발화 끝
    27.36s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.62s]: (tool result) Foreign Cinema는 미국식, 멕시코식 레스토랑이며 평점은 4.4점입니다.
    28.64s  user  발화 시작: 음.
    29.18s  user  발화 끝
    31.02s  agent 발화 끝
    31.19s  user  발화 시작: 사 점 사점이면 꽤 좋은 편이네요. —
    33.62s  user  발화 시작: 영화를 상영하는 곳인가요?
    33.70s  user  발화 끝
    35.35s  agent 발화 시작: 네, Foreign Cinema는 식사 중 영화를 감상할 수 있는 곳입니다.
    35.51s  user  발화 끝
    37.76s  user  발화 시작: 네.
    38.21s  user  발화 끝
    38.76s  <ret> 발화 (turn18 첫 프레임)
    39.15s  agent 발화 시작: <ret> 영화 상영 시간은 매일 저녁 일곱시와 아홉시입니다.
    39.18s  agent 발화 끝
    40.28s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.74s]: (tool result) Foreign Cinema는 오늘 저녁 7시, 9시에 영화를 상영합니다.
    42.81s  agent 발화 시작: 오늘 저녁 일곱시와 아홉시에 영화 상영이 있습니다.
    42.90s  agent 발화 끝
    46.14s  user  발화 시작: 주니 카페와 Foreign Cinema 중에 어디가 더 분위기가 좋을까요?
    46.18s  agent 발화 끝
    49.38s  agent 발화 시작: 분위기는 개인적인 취향에 따라 다르지만, Foreign Cinema는 좀 더 로맨틱한 분위기입니다.
    49.47s  user  발화 끝
    54.51s  user  발화 시작: 그럼 Foreign Cinema로 예약해 주세요. 내일 저녁 여덟시에 두 명으로 예약하고 싶어요.
    54.61s  agent 발화 끝
    59.28s  <ret> 발화 (turn23 첫 프레임)
    59.51s  user  발화 끝
    59.65s  agent 발화 시작: <ret> Foreign Cinema 내일 저녁 여덟시 두명 예약이 완료되었고, 예약 번호는 FC789입니다
    61.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.01s]: (tool result) Foreign Cinema 내일 저녁 8시 2명 예약이 완료되었습니다. 예약 번호는 FC789입니다.
    65.40s  user  발화 시작: 예약 번호를 다시 한번 알려주시겠어요?
    65.67s  agent 발화 끝
    67.77s  agent 발화 시작: 예약 번호는 FC789입니다.
    67.89s  user  발화 끝
    70.30s  agent 발화 끝
    70.85s  user  발화 시작: 알겠습니다. 주니 카페에서 Foreign Cinema까지 걸어서 얼마나 걸릴까요?
    74.66s  <ret> 발화 (turn27 첫 프레임)
    74.97s  agent 발화 시작: <ret> 주니 카페에서 Foreign Cinema까지 걸어서 약 십오분 정도 소요됩니다.
    75.20s  user  발화 끝
    76.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.81s]: (tool result) 주니 카페에서 Foreign Cinema까지 도보로 약 15분 거리입니다.
    76.90s  user  발화 시작: 정말요?
    77.71s  user  발화 끝
    79.78s  agent 발화 끝
    79.85s  user  발화 시작: 십오분이요? 생각보다 가까우네요.
    82.29s  user  발화 끝
    82.29s  agent 발화 시작: 네, 도보로 이동하기에 괜찮은 거리입니다.
    85.25s  agent 발화 끝
    85.63s  user  발화 시작: Foreign Cinema의 주소는 어떻게 되나요?
    87.54s  <ret> 발화 (turn32 첫 프레임)
    87.89s  user  발화 끝
    87.92s  agent 발화 시작: <ret> Foreign Cinema 주소는 이천오백삼십사 Mission St, San Francisco, 
    89.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.95s]: (tool result) Foreign Cinema 주소는 2534 Mission St, San Francisco, CA 94
    94.73s  user  발화 시작: 감사합니다.
    94.87s  agent 발화 끝
    95.49s  agent 발화 시작: 즐거운 저녁 식사 되세요.
    95.55s  user  발화 끝
    97.24s  agent 발화 끝
