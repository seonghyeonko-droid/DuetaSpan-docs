# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "가준",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-25",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-11-04",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-07",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-01-25",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 여기 좌표 백십삼 점 사 육, 이십삼 점 일 삼이 어디쯤이야? | S2 오, 그럼 택시가 훨씬 빠르겠네. | S3 와, 진짜 고마워! — | S4 가격도 괜찮고, 평점도 좋네.

     0.00s  user  발화 시작: 여기 좌표 백십삼 점 사 육, 이십삼 점 일 삼이 어디쯤이야? 주소 좀 알려줘.
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn4 첫 프레임)
     0.04s  <ret> 발화 (turn10 첫 프레임)
     0.04s  <ret> 발화 (turn17 첫 프레임)
     0.04s  agent 발화 시작: <ret> 좌표 백십삼 점 사 육, 이십삼 점 일 삼은 중국 광둥성 선전시 룽화구 메이롱다다오에 위치하고 있
     0.04s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) {"address": "广东省深圳市龙华区梅龙大道", "latitude": "23.1333", "lon
     0.04s  user  발화 끝
     0.09s  user  발화 시작: 응.
     0.09s  agent 발화 끝
     0.09s  user  발화 시작: 아, 그래? 그럼 거기서 제일 가까운 버스 정류장이 어디지?
     0.09s  user  발화 끝
     0.11s  <ret> 발화 (turn7 첫 프레임)
     0.12s  agent 발화 시작: <ret> 근처 버스 정류장은 메이롱다다오잔이고, 거리는 영 점 이킬로미터 정도 됩니다.
     0.12s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: (tool result) {"name": "梅龙大道站", "latitude": "23.1338", "longitude": "1
     0.12s  user  발화 끝
     0.15s  user  발화 시작: 응.
     0.15s  agent 발화 끝
     0.15s  user  발화 시작: 음… 그 버스 정류장에서 시내까지 가는 버스 노선 좀 알려줄 수 있어?
     0.15s  user  발화 끝
     0.19s  agent 발화 시작: <ret> 메이롱다다오잔에서 선전 시내까지 가는 버스 노선은 엠 삼 오 구, 엠 사 삼 육, 케이 삼 삼 육
     0.19s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) {"bus lines": M359, M436, K336, "estimated time": "45 mi
     0.19s  user  발화 끝
     0.25s  user  발화 시작: 음.
     0.25s  agent 발화 끝
     0.26s  user  발화 시작: 사십오분이면 좀 걸리겠네. 택시비는 대충 얼마 정도 나올까?
     0.26s  user  발화 끝
     0.28s  agent 발화 시작: <ret> 택시 요금은 대략 사십위안에서 오십위안 정도 예상되고, 소요 시간은 이십분 정도입니다.
     0.28s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: (tool result) {"estimated fare": "¥40-¥50", "estimated time": "20 minu
     0.28s  user  발화 끝
     0.31s  user  발화 시작: 아.
     0.31s  agent 발화 끝
     0.32s  user  발화 시작: 오, 그럼 택시가 훨씬 빠르겠네.
     0.32s  user  발화 끝
     0.33s  agent 발화 시작: 네, 시간이 좀 더 절약될 수 있겠어요.
     0.33s  user  발화 끝
     0.35s  <ret> 발화 (turn25 첫 프레임)
     0.35s  user  발화 시작: 응.
     0.35s  agent 발화 끝
     0.36s  agent 발화 시작: 새로운 곳에 정착하는 건 설레면서도 걱정될 수 있어요. 하지만 교통 정보 정도는 미리 알아두면 훨씬 안심이 
     0.36s  user  발화 끝
     0.41s  user  발화 시작: 맞아, 맞아. 근데 그 근처에 맛있는 식당 있으면 추천해 줄 수 있어?
     0.41s  agent 발화 끝
     0.41s  <ret> 발화 (turn22 첫 프레임)
     0.44s  agent 발화 시작: <ret> 그 근처에 평점 사 점 오점의 광둥 요리 전문점 취위엔찬당이 있습니다. 가격대는 조금 높은 편이에
     0.44s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) {"name": "翠园餐厅", "cuisine": "Cantonese", "rating": "4.5 
     0.44s  user  발화 끝
     0.49s  user  발화 시작: 진짜?
     0.49s  agent 발화 끝
     0.49s  user  발화 시작: 광둥 요리 좋아하는데, 괜찮겠다.
     0.49s  user  발화 끝
     0.50s  agent 발화 시작: 취향에 맞으실 것 같아요. 그 식당은 현지인들에게도 인기가 많다고 들었어요.
     0.50s  user  발화 끝
     0.53s  user  발화 시작: 혹시 그 식당 예약해 줄 수 있어? 이번 주 토요일 저녁 일곱시에.
     0.53s  agent 발화 끝
     0.57s  agent 발화 시작: <ret> 네, 翠园餐厅을 이번 주 토요일 저녁 일곱시에 예약했습니다. 확인 코드는 알 씨 사 구 이 팔 삼
     0.57s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) {"confirmation id": "RC492837"}
     0.57s  user  발화 끝
     0.57s  <ret> 발화 (turn35 첫 프레임)
     0.62s  <ret> 발화 (turn30 첫 프레임)
     0.62s  user  발화 시작: 와, 진짜 고마워! —
     0.62s  agent 발화 끝
     0.63s  user  발화 시작: …근데 혹시 그 식당까지 가는 길도 알려줄 수 있어? 버스 말고 지하철로.
     0.63s  user  발화 끝
     0.67s  agent 발화 시작: <ret> 룽화역에서 사호선을 타고 푸톈역까지 가신 다음, 오백미터 정도 걸어가시면 됩니다. 예상 소요 시간
     0.67s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) {"instructions": "Take Metro Line 4 from Longhua Station
     0.67s  user  발화 끝
     0.71s  user  발화 시작: 음.
     0.71s  agent 발화 끝
     0.72s  user  발화 시작: 삼십분이면 괜찮네.
     0.72s  user  발화 끝
     0.72s  agent 발화 시작: 네, 비교적 편리하게 이동하실 수 있을 거예요.
     0.72s  user  발화 끝
     0.74s  user  발화 시작: 아, 그리고 혹시 거기 근처에 괜찮은 호텔 있으면 추천해 줄 수 있어?
     0.74s  agent 발화 끝
     0.78s  agent 발화 시작: <ret> 그 근처에 선전 룽화구 비엔나 인터내셔널 호텔이 있는데, 일박에 사백위안이고 평점은 사 점 이점입
     0.78s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) {"name": "深圳龙华区维也纳国际酒店", "price": "¥400/night", "rating"
     0.78s  user  발화 끝
     0.82s  user  발화 시작: 음.
     0.82s  agent 발화 끝
     0.82s  user  발화 시작: 가격도 괜찮고, 평점도 좋네.
     0.82s  user  발화 끝
     0.84s  agent 발화 시작: 네, 만족하실 만한 선택이 될 것 같아요.
     0.84s  user  발화 끝
     0.86s  user  발화 시작: 그럼 그 호텔 예약도 좀 해 줄 수 있을까? 칠월 십이일부터 십사일까지.
     0.86s  agent 발화 끝
     0.89s  agent 발화 시작: <ret> 네, 深圳龙华区维也纳国际酒店을 칠월 십이일부터 십사일까지 예약했습니다. 확인 코드는 에이치 티 팔
     0.89s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) {"confirmation id": "HT839274"}
     0.89s  user  발화 끝
     0.94s  user  발화 시작: 어어.
     0.94s  agent 발화 끝
     0.94s  user  발화 시작: 정말 고마워, 해나. 덕분에 너무 편하게 준비할 수 있었어.
     0.94s  user  발화 끝
     0.97s  agent 발화 시작: 도움이 되어서 기쁩니다. 새로운 곳에서의 생활이 즐거워지도록 제가 더 도와드릴게요.
     0.97s  user  발화 끝
     1.00s  agent 발화 끝
