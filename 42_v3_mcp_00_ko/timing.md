# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "보형",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-09-17",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-08-04",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-26",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-01",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-08-08",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 파리 에펠탑의 좌표를 알려줄 수 있을까요? | S2 아니요, 그곳으로 가는 길을 알려주세요. | S3 그럼, 가장 가까운 식당을 추천해 주세요. | S4 혹시 그 식당까지 가는 가장 빠른 길은 어떻게 되나요?

     0.00s  user  발화 시작: 파리 에펠탑의 좌표를 알려줄 수 있을까요?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn4 첫 프레임)
     0.00s  <ret> 발화 (turn8 첫 프레임)
     0.02s  agent 발화 시작: <ret> 에펠탑의 좌표는 위도 사십팔 점 팔 오 팔 사, 경도 이 점 이 구 사 오입니다. 혹시 다른 장소
     0.02s  user  발화 끝
     0.03s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: Seoul: <name> (230 m), <name> (310 m), <name> (350 m), <name> (400 m),
     0.04s  <ret> 발화 (turn12 첫 프레임)
     0.06s  <ret> 발화 (turn10 첫 프레임)
     0.06s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: 48.8584, 2.2945
     0.06s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: 37.5659, 126.9756
     0.08s  user  발화 시작: 어머.
     0.08s  agent 발화 끝
     0.08s  user  발화 시작: 그럼, 서울 남산타워의 좌표도 알려주세요.
     0.08s  user  발화 끝
     0.09s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: 07:00, 07:20, 07:40, 08:00, 08:20, 08:40, 09:00, 09:20...
     0.10s  agent 발화 시작: <ret> 남산타워의 좌표는 위도 삼십칠 점 오 육 오 구, 경도 백이십육 점 구 칠 오 육입니다. 두 곳의
     0.10s  user  발화 끝
     0.10s  <ret> 발화 (turn6 첫 프레임)
     0.10s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: Take bus 109 from <station> to <station>, walk 150m. Estimated time: 1
     0.15s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: 28.0°C, humidity 65%, wind 3.2 km/h
     0.16s  user  발화 시작: 네, 확인했어요. 그런데 지금 서울 날씨는 어떤가요?
     0.16s  agent 발화 끝
     0.18s  agent 발화 시작: <ret> 현재 서울의 기온은 이십팔 점 영도이고, 습도는 육십오%, 풍속은 시속 삼 점 이킬로미터입니다. 
     0.18s  user  발화 끝
     0.21s  <ret> 발화 (turn21 첫 프레임)
     0.23s  user  발화 시작: 서울에서 가장 가까운 카페를 찾아줄 수 있을까요?
     0.23s  agent 발화 끝
     0.25s  agent 발화 시작: <ret> 서울에서 가장 가까운 카페는 이백삼십미터 거리의 <name>입니다. 다른 카페도 찾아드릴까요?
     0.25s  user  발화 끝
     0.26s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: 4.5 stars, "Excellent pizza and pasta!" - <user>; "Great atmosphere an
     0.26s  <ret> 발화 (turn17 첫 프레임)
     0.28s  user  발화 시작: 아니요, 그곳으로 가는 길을 알려주세요.
     0.28s  agent 발화 끝
     0.29s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: 14:00, 16:30, 19:00, 21:30
     0.30s  agent 발화 시작: <ret> 현재 위치에서 백구번 버스를 타고 <station> 정류장에서 내려서 백오십미터를 걸어가시면 됩니
     0.30s  user  발화 끝
     0.31s  <ret> 발화 (turn19 첫 프레임)
     0.34s  user  발화 시작: 버스 시간표를 보여줄 수 있을까요?
     0.34s  agent 발화 끝
     0.35s  <ret> 발화 (turn15 첫 프레임)
     0.36s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: <name> (300 m): Korean cuisine; <name> (400 m): Italian cuisine; <name
     0.36s  agent 발화 시작: <ret> 백구번 버스는 일곱시, 일곱시 이십분, 일곱시 사십분, 여덟시, 여덟시 이십분, 여덟시 사십분, 
     0.36s  user  발화 끝
     0.40s  <ret> 발화 (turn25 첫 프레임)
     0.41s  user  발화 시작: 네.
     0.41s  agent 발화 끝
     0.41s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: <name> (500 m): <Movie 1>, <Movie 2>; <name> (700 m): <Movie 3>, <Movi
     0.41s  user  발화 시작: 혹시 지금 근처에 영화관도 있나요?
     0.41s  user  발화 끝
     0.43s  agent 발화 시작: <ret> 서울에서 오백미터 거리의 <name> 영화관에서는 <Movie 일>, <Movie 이>를 상영하고
     0.43s  user  발화 끝
     0.44s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: Reservation confirmed for 2 guests at 19:00, confirmation ID: 789234
     0.49s  user  발화 시작: <Movie 일>의 상영 시간을 알려주세요.
     0.49s  agent 발화 끝
     0.50s  agent 발화 시작: <ret> <Movie 일>은 오후 두시, 네시 삼십분, 일곱시, 아홉시 삼십분에 상영합니다.
     0.50s  user  발화 끝
     0.53s  user  발화 시작: 그럼, 가장 가까운 식당을 추천해 주세요.
     0.53s  agent 발화 끝
     0.55s  <ret> 발화 (turn27 첫 프레임)
     0.55s  agent 발화 시작: <ret> 서울에서 삼백미터 거리의 <name>은 한국 음식점이고, 사백미터 거리의 <name>은 이탈리아 
     0.55s  user  발화 끝
     0.60s  user  발화 시작: 이탈리아 음식점의 리뷰를 보여주세요.
     0.60s  agent 발화 끝
     0.61s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: Walk 200m to <station>, take subway line 2 to <station>, walk 100m. Es
     0.61s  agent 발화 시작: <ret> <name> 이탈리아 음식점은 별점 사 점 오점이고, 리뷰에는 “훌륭한 피자와 파스타!” 그리고 
     0.61s  user  발화 끝
     0.66s  user  발화 시작: 그 식당으로 예약해 줄 수 있을까요?
     0.66s  agent 발화 끝
     0.67s  <ret> 발화 (turn31 첫 프레임)
     0.68s  agent 발화 시작: 예약을 도와드리겠습니다. 몇 시에 몇 명으로 예약하시겠어요?
     0.68s  user  발화 끝
     0.70s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: Gyeongbokgung Palace, Changdeokgung Palace, Insadong, Bukchon Hanok Vi
     0.70s  user  발화 시작: 오늘 저녁 일곱시에 두 명으로 예약해주세요.
     0.70s  agent 발화 끝
     0.72s  agent 발화 시작: <ret> 일곱시에 두명으로 <name> 이탈리아 음식점 예약이 완료되었습니다. 확인 번호는 칠 팔 구 이 
     0.72s  user  발화 끝
     0.76s  user  발화 시작: 혹시 그 식당까지 가는 가장 빠른 길은 어떻게 되나요?
     0.76s  agent 발화 끝
     0.79s  agent 발화 시작: <ret> 현재 위치에서 이백미터를 걸어서 <station> 역으로 이동한 다음, 이호선으로 환승해서 <st
     0.79s  user  발화 끝
     0.85s  user  발화 시작: 지금 제 휴대폰에 길 안내를 보내줄 수 있나요?
     0.85s  agent 발화 끝
     0.87s  agent 발화 시작: —
     0.87s  user  발화 끝
     0.88s  user  발화 시작: … 혹시 서울에 있는 다른 재미있는 관광지도 추천해 줄 수 있어요?
     0.88s  agent 발화 끝
     0.91s  agent 발화 시작: <ret> 서울에는 경복궁, 창덕궁, 인사동 등 다양한 관광 명소가 있습니다.
     0.91s  user  발화 끝
     0.94s  agent 발화 시작: 경복궁, 창덕궁, 인사동, 북촌 한옥마을, 남산타워 등이 유명합니다. [curious] 어디를 가장 먼저 가
     0.94s  agent 발화 끝
     0.98s  user  발화 시작: 예.
     0.98s  agent 발화 끝
     0.98s  user  발화 시작: 북촌 한옥마을에 대해 더 자세히 알려주세요.
     0.98s  user  발화 끝
     1.00s  user  발화 끝
