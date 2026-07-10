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

# EXAMINER(FDB-v2) 단계: S1 주니 카페 가격대는 어떻게 돼요? | S2 길가 주차요? 주차하기 힘들 수도 있겠네요. | S3 아, 선착순이군요. 그럼 주니 카페까지 가는 가장 빠른 길은  | S4 포린 시네마요? 어떤 음식점인가요?

     0.00s  user  발화 시작: 주니 카페 가격대는 어떻게 돼요?
     1.52s  <ret> 발화 (turn1 첫 프레임)
     1.83s  agent 발화 시작: <ret> 주니 카페의 가격대는 달러 기호 두 개로, 중간 정도의 가격대입니다.
     2.07s  user  발화 끝
     3.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.86s]: (tool result) $$
     3.57s  user  발화 시작: 네네.
     4.21s  user  발화 끝
     6.69s  agent 발화 끝
     7.05s  user  발화 시작: 오, 그렇군요. 그럼 영업시간은요?
     9.11s  <ret> 발화 (turn4 첫 프레임)
     9.30s  user  발화 끝
     9.42s  agent 발화 시작: <ret> 주니 카페는 아침 일곱시 삼십분부터 밤 열시까지 영업합니다.
    11.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.95s]: (tool result) 7:30 AM–10 PM
    14.37s  user  발화 시작: 아침 일찍 여는군요. 주니 카페는 어떤 종류의 음식점이에요?
    14.37s  agent 발화 끝
    18.21s  <ret> 발화 (turn6 첫 프레임)
    18.44s  agent 발화 시작: <ret> 주니 카페는 뉴 아메리칸 스타일의 음식점을 선보이고 있습니다.
    18.67s  user  발화 끝
    19.57s  ⚡SPAN 주입 [d'=1.36s / d_lead=4.49s]: (tool result) New American
    20.09s  user  발화 시작: 그렇죠.
    20.63s  user  발화 끝
    22.93s  agent 발화 끝
    23.72s  user  발화 시작: 뉴 아메리칸이요? 그게 뭔데요?
    25.79s  agent 발화 시작: 뉴 아메리칸은 전통적인 미국 요리에 현대적인 요리 기법과 재료를 더한 스타일입니다.
    25.93s  user  발화 끝
    28.67s  user  발화 시작: 네.
    29.25s  user  발화 끝
    31.81s  agent 발화 끝
    32.63s  user  발화 시작: 아하, 그렇군요. 주니 카페 근처에 주차장이 있나요?
    35.88s  <ret> 발화 (turn12 첫 프레임)
    36.04s  agent 발화 시작: <ret> 네, 주니 카페 근처에는 길가 주차장이 있습니다.
    36.19s  user  발화 끝
    36.84s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.42s]: (tool result) Yes, street parking
    37.34s  user  발화 시작: 네네.
    38.03s  user  발화 끝
    39.46s  agent 발화 끝
    39.77s  user  발화 시작: 길가 주차요? 주차하기 힘들 수도 있겠네요.
    42.81s  user  발화 끝
    42.96s  agent 발화 시작: 길가 주차는 경쟁이 있을 수 있지만, 조금만 둘러보면 자리를 찾을 수 있을 겁니다.
    48.65s  agent 발화 끝
    49.31s  user  발화 시작: 주니 카페에서 가장 인기 있는 메뉴는 뭔가요?
    52.21s  <ret> 발화 (turn17 첫 프레임)
    52.28s  agent 발화 시작: <ret> 주니 카페에서 가장 인기 있는 메뉴는 로스트 치킨입니다.
    52.55s  user  발화 끝
    54.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.06s]: (tool result) Roast chicken
    56.29s  user  발화 시작: 로스트 치킨이요? 맛있겠네요.
    56.35s  agent 발화 끝
    58.42s  user  발화 끝
    58.53s  agent 발화 시작: 로스트 치킨은 주니 카페의 대표 메뉴 중 하나이며, 많은 고객들이 찾습니다.
    64.14s  agent 발화 끝
    64.29s  user  발화 시작: 혹시 주니 카페 예약이 가능한가요?
    66.34s  <ret> 발화 (turn21 첫 프레임)
    66.73s  agent 발화 시작: <ret> 주니 카페는 예약이 불가능합니다.
    66.79s  user  발화 끝
    67.06s  ⚡SPAN 주입 [d'=0.72s / d_lead=2.44s]: (tool result) No reservations
    69.10s  user  발화 시작: 아, 선착순이군요. 그럼 주니 카페까지 가는 가장 빠른 길은 어떻게 되나요? 지금 제 위치에서요.
    69.17s  agent 발화 끝
    74.88s  <ret> 발화 (turn23 첫 프레임)
    75.11s  agent 발화 시작: <ret> 주니 카페까지 가는 가장 빠른 길은 마켓 스트리트에서 북쪽으로 이십번가를 향해 가세요. 이십일번가
    75.40s  user  발화 끝
    76.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=15.63s]: (tool result) Driving directions: 1. Head north on Market St toward 20
    90.73s  agent 발화 끝
    91.38s  user  발화 시작: 이십일번가에서 우회전… —
    93.43s  user  발화 시작: 잠깐만요, 그 길은 공사 중인데 다른 길은 없을까요?
    93.54s  user  발화 끝
    96.73s  <ret> 발화 (turn26 첫 프레임)
    96.81s  agent 발화 시작: <ret> 아, 공사 중이라면, 십구번가를 이용하는 것이 더 나을 수 있습니다.
    96.94s  user  발화 끝
    98.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.86s]: (tool result) Driving directions: 1. Head north on Market St toward 20
   101.58s  agent 발화 시작: 마켓 스트리트에서 북쪽으로 이십번가를 향해 가세요. 십구번가에서 좌회전하고, 노스 포인트 스트리트에서 좌회전
   101.67s  agent 발화 끝
   113.13s  agent 발화 끝
   113.17s  user  발화 시작: 아, 십구번가로 가야 하는군요. 그럼 주니 카페에서 가장 가까운 지하철역은 어디인가요?
   117.98s  <ret> 발화 (turn29 첫 프레임)
   118.28s  agent 발화 시작: <ret> 주니 카페에서 가장 가까운 지하철역은 시빅 센터/UN 플라자 역입니다.
   118.58s  user  발화 끝
   119.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.56s]: (tool result) Civic Center/UN Plaza Station
   123.75s  user  발화 시작: 시빅 센터 역이군요. 주니 카페 주변에 다른 맛집도 있나요?
   123.84s  agent 발화 끝
   127.88s  <ret> 발화 (turn31 첫 프레임)
   128.12s  agent 발화 시작: <ret> 주니 카페 주변에는 포린 시네마라는 맛집도 있습니다.
   128.24s  user  발화 끝
   129.08s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.83s]: (tool result) Foreign Cinema
   130.11s  user  발화 시작: 네.
   130.51s  user  발화 끝
   131.96s  agent 발화 끝
   132.26s  user  발화 시작: 포린 시네마요? 어떤 음식점인가요?
   134.59s  agent 발화 시작: 포린 시네마는 지중해 스타일의 음식점을 선보이고 있으며, 영화를 감상하며 식사를 즐길 수 있습니다.
   134.65s  user  발화 끝
   138.08s  user  발화 시작: 그렇죠.
   138.57s  user  발화 끝
   141.58s  agent 발화 끝
   141.62s  user  발화 시작: 영화를 보면서 식사를 한다고요? 재밌겠네요.
   144.67s  user  발화 끝
   144.85s  agent 발화 시작: 네, 독특한 분위기에서 식사를 즐길 수 있는 곳입니다.
   148.69s  agent 발화 끝
   148.71s  user  발화 시작: 주니 카페랑 포린 시네마 중에 어디가 더 좋을까요?
   152.03s  agent 발화 시작: 주니 카페는 로스트 치킨으로 유명하고, 포린 시네마는 독특한 분위기가 특징입니다. 취향에 따라 선택하시면 좋
   152.18s  user  발화 끝
   161.52s  agent 발화 끝
   161.80s  user  발화 시작: 알겠습니다. 그럼 주니 카페까지 택시를 부르면 얼마나 걸릴까요?
   164.91s  <ret> 발화 (turn41 첫 프레임)
   165.23s  agent 발화 시작: <ret> 예상 택시 요금은 십오달러에서 이십달러 사이이며, 예상 이동 시간은 십분에서 십오분 정도입니다.
   165.36s  user  발화 끝
   166.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.64s]: (tool result) Estimated taxi fare: $15–$20, Estimated travel time: 10–
   172.87s  agent 발화 끝
