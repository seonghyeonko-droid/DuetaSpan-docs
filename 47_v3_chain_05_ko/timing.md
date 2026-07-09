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

# EXAMINER(FDB-v2) 단계: S1 주니 카페 가격대는 어떻게 돼요? | S2 피오렐라… 평점이 꽤 높네요. 거기 메뉴 좀 알려주시겠어요? | S3 혹시 주차는 어떻게 해야 할까요? | S4 감사합니다. 혹시 피오렐라 근처에 괜찮은 와인바도 있을까요?

     0.00s  user  발화 시작: 주니 카페 가격대는 어떻게 돼요?
     1.58s  <ret> 발화 (turn1 첫 프레임)
     1.89s  agent 발화 시작: <ret> 주니 카페의 가격대는 보통 1인당 삼십에서 사십 달러 정도예요.
     1.98s  user  발화 끝
     3.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.16s]: (tool result) Zuni Cafe's price range is $$ (30-40 dollars).
     5.99s  agent 발화 시작: 주니 카페는 1인당 삼십에서 사십 달러 정도의 가격대입니다.
     6.05s  agent 발화 끝
     9.83s  agent 발화 끝
    10.06s  user  발화 시작: 오, 생각보다 비싸네요. 그럼 근처에 좀 더 저렴한 곳 없을까요?
    14.18s  user  발화 끝
    14.68s  agent 발화 시작: 물론이죠. 어떤 종류의 음식을 선호하시나요?
    17.80s  user  발화 시작: 파스타가 먹고 싶은데요.
    17.92s  agent 발화 끝
    19.09s  <ret> 발화 (turn6 첫 프레임)
    19.24s  agent 발화 시작: <ret> 파스타를 좋아하시는군요. 근처에 괜찮은 파스타집을 찾아볼까요?
    19.27s  user  발화 끝
    21.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.35s]: (tool result) Fiorella, a pasta restaurant, is 0.8 miles from Zuni Caf
    23.39s  agent 발화 시작: 피오렐라라는 파스타집이 있어요. 주니 카페에서 도보로 약 십 분 거리에 있고 평점도 4.2점이에요.
    23.59s  agent 발화 끝
    25.96s  user  발화 시작: 네.
    26.46s  user  발화 끝
    30.23s  user  발화 시작: 피오렐라… 평점이 꽤 높네요. 거기 메뉴 좀 알려주시겠어요?
    30.25s  agent 발화 끝
    34.90s  <ret> 발화 (turn10 첫 프레임)
    35.22s  agent 발화 시작: <ret> 피오렐라의 메뉴를 알려드릴게요. 스파게티 알레 봉골레는 28달러, 카초 에 페페는 24달러, 라자
    35.23s  user  발화 끝
    35.40s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.79s]: (tool result) Fiorella's menu includes Spaghetti alle Vongole for $28,
    40.16s  user  발화 시작: 정말요?
    40.83s  user  발화 끝
    42.42s  user  발화 시작: 스파게티 알레 봉골레가 맛있겠네요. 피오렐라 예약 좀 해주세요. 오늘 저녁 일곱 시로요.
    43.57s  agent 발화 끝
    48.11s  user  발화 끝
    48.51s  agent 발화 시작: 네, 피오렐라에 오늘 저녁 일곱 시로 예약을 진행해 드릴게요. 혹시 몇 분이세요?
    51.59s  user  발화 시작: 네.
    51.99s  user  발화 끝
    53.83s  agent 발화 끝
    54.33s  user  발화 시작: 두 명이요.
    55.11s  <ret> 발화 (turn16 첫 프레임)
    55.15s  user  발화 끝
    55.18s  agent 발화 시작: <ret> 예약이 완료되었습니다. 피오렐라에 오늘 저녁 일곱 시에 두 분 예약이 확정되었고, 확인 번호는 R
    55.91s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.16s]: (tool result) Reservation confirmed at Fiorella for 2 people at 7:00 P
    63.24s  user  발화 시작: 혹시 주차는 어떻게 해야 할까요?
    63.29s  agent 발화 끝
    64.84s  <ret> 발화 (turn18 첫 프레임)
    65.08s  user  발화 끝
    65.15s  agent 발화 시작: <ret> 피오렐라 근처 주차는…
    65.34s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.57s]: (tool result) Paid parking is available at 2200 Fillmore St, 0.2 miles
    66.54s  agent 발화 시작: 주차 정보를 알려드릴게요. 피오렐라에서 0.2마일 떨어진 필모어 거리에 유료 주차장이 있고, 시간당 8달러입
    66.72s  agent 발화 끝
    75.80s  agent 발화 끝
    75.94s  user  발화 시작: 아, 그렇군요. 그럼 피오렐라까지 가는 길은 어떻게 되나요?
    79.19s  <ret> 발화 (turn21 첫 프레임)
    79.58s  agent 발화 시작: <ret> 주니 카페에서 피오렐라까지 가는 길을 안내해 드릴게요. 마켓 스트리트를 서쪽으로 가다가 필모어 스
    79.64s  user  발화 끝
    80.71s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.52s]: (tool result) Directions from Zuni Cafe to Fiorella: Head west on Mark
    82.78s  user  발화 시작: 그렇군요.
    83.41s  user  발화 끝
    88.48s  agent 발화 시작: 길 찾기 앱에 바로 경로를 전송해 드릴까요?
    88.62s  agent 발화 끝
    91.16s  user  발화 시작: 네, 그렇게 해주세요.
    91.63s  agent 발화 끝
    92.16s  user  발화 끝
    92.24s  <ret> 발화 (turn25 첫 프레임)
    92.32s  agent 발화 시작: <ret> 경로가 지도 앱으로 전송되었습니다. 이제 지도 앱에서 바로 길 안내를 받으실 수 있습니다.
    94.16s  ⚡SPAN 주입 [d'=1.92s / d_lead=2.00s]: (tool result) Directions sent to your default maps application.
    98.58s  user  발화 시작: 감사합니다. 혹시 피오렐라 근처에 괜찮은 와인바도 있을까요?
    98.81s  agent 발화 끝
   102.23s  <ret> 발화 (turn27 첫 프레임)
   102.63s  agent 발화 시작: <ret> 와인바를 찾으시는군요. 피오렐라 근처에 괜찮은 와인바가 몇 군데 있어요.
   102.88s  user  발화 끝
   104.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.49s]: (tool result) Vintage Wine Bar is 0.5 miles from Fiorella, with a 4.5-
   106.95s  agent 발화 시작: 빈티지 와인바가 괜찮을 것 같아요. 피오렐라에서 0.5마일 거리에 있고, 평점은 4.5점이며 금요일에는 라이
   107.11s  agent 발화 끝
   110.53s  user  발화 시작: 정말요?
   111.17s  user  발화 끝
   115.62s  agent 발화 끝
   115.92s  user  발화 시작: 금요일에 라이브 음악이 있다니 좋네요. 그럼 혹시 내일 모레 주말 날씨는 어때요?
   121.30s  <ret> 발화 (turn31 첫 프레임)
   121.61s  agent 발화 시작: <ret> 내일 모레 날씨를 알려드릴게요. 맑고 최고 기온은 섭씨 22도, 최저 기온은 섭씨 14도입니다.
   121.70s  user  발화 끝
   121.80s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.87s]: (tool result) The weather forecast for two days from now is sunny with
   127.68s  agent 발화 끝
   128.21s  user  발화 시작: 날씨도 좋네요. 완벽한 주말 계획이네요.
   131.34s  agent 발화 시작: [happy] 즐거운 주말 보내시길 바랍니다. 혹시 더 필요한 건 없으세요?
   131.44s  user  발화 끝
   135.59s  agent 발화 끝
