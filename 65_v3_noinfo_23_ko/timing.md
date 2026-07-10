# v3_noinfo_23_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "태연",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-23",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-06-17",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-25",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-06-15",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-10",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-02",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 작년 크리스마스 이브에 도쿄 날씨가 어땠어? | S2 응, 길 안내 시작해 줘. | S3 그럼 다른 스시집으로 예약해 봐. | S4 혹시, 그 스시잔마이 주변에 괜찮은 카페 있어?

     0.00s  user  발화 시작: 작년 크리스마스 이브에 도쿄 날씨가 어땠어?
     2.61s  <ret> 발화 (turn1 첫 프레임)
     2.95s  user  발화 끝
     3.00s  agent 발화 시작: <ret> 작년 크리스마스 이브 도쿄의 기온은 십이도, 습도는 팔십오 퍼센트, 바람은 시속 삼 점 이킬로미터
     4.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.18s]: (tool result) 12.0°C, humidity 85%, wind 3.2 km/h
     6.00s  user  발화 시작: 응.
     6.35s  user  발화 끝
    12.19s  agent 발화 끝
    13.52s  user  발화 시작: 그럼 이번 주 금요일 도쿄 날씨는 어때?
    15.36s  <ret> 발화 (turn4 첫 프레임)
    15.59s  agent 발화 시작: <ret> 이번 주 금요일 도쿄의 기온은 십팔도, 습도는 육십팔 퍼센트, 바람은 시속 사 점 칠킬로미터로 예
    15.78s  user  발화 끝
    17.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.27s]: (tool result) 18.0°C, humidity 68%, wind 4.7 km/h
    26.86s  agent 발화 끝
    27.24s  user  발화 시작: 이번 주말에 도쿄 근처에 갈 만한 곳 좀 추천해 줄래?
    30.16s  <ret> 발화 (turn6 첫 프레임)
    30.47s  agent 발화 시작: <ret> 도쿄 근처에는 신주쿠 교엔 국립정원, 도쿄 국립박물관, 센소지, 우에노 공원, 황거 동쪽 정원 등
    30.48s  user  발화 끝
    32.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.37s]: (tool result) Tokyo (35.68950, 139.69171): Shinjuku Gyoen National Gar
    41.83s  agent 발화 끝
    43.12s  user  발화 시작: 센소지까지 가는 가장 빠른 길 알려줘.
    45.35s  <ret> 발화 (turn8 첫 프레임)
    45.58s  agent 발화 시작: <ret> 센소지까지는 현재 위치에서 일 점 사킬로미터, 예상 소요 시간은 이십 분입니다. 지금 바로 길 안
    45.80s  user  발화 끝
    47.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.74s]: (tool result) 출발지: 현재 위치, 목적지: 센소지, 1.4 km, 예상 소요 시간: 20분
    53.32s  agent 발화 끝
    53.38s  user  발화 시작: 응, 길 안내 시작해 줘.
    57.23s  user  발화 끝
    57.23s  <ret> 발화 (turn10 첫 프레임)
    57.46s  agent 발화 시작: <ret> 센소지까지 자동차로 이동합니다. 첫 번째 길을 따라 좌회전하세요. 안전 운전하시고요.
    59.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.11s]: (tool result) 센소지까지 자동차로 이동합니다. 첫 번째 길을 따라 좌회전하세요.
    63.57s  agent 발화 끝
    65.41s  user  발화 시작: 잠깐만, 운전은 싫어. 대중교통으로 알려줘.
    68.34s  <ret> 발화 (turn12 첫 프레임)
    68.73s  agent 발화 시작: <ret> 센소지까지 대중교통으로 이동합니다. 가장 가까운 지하철역까지 걸어가세요. 지하철 노선은…
    68.88s  user  발화 끝
    69.78s  ⚡SPAN 주입 [d'=1.44s / d_lead=6.95s]: (tool result) 센소지까지 대중교통으로 이동합니다. 가장 가까운 지하철역까지 걸어가세요.
    71.73s  user  발화 시작: 음.
    72.12s  user  발화 끝
    75.68s  agent 발화 끝
    75.80s  agent 발화 시작: 지하철 노선은 긴자선과 아사쿠사선을 이용하시면 됩니다. 환승 없이 한 번에 갈 수 있어요.
    82.53s  user  발화 시작: 센소지 주변에 맛있는 스시집 있어?
    82.76s  agent 발화 끝
    84.40s  <ret> 발화 (turn16 첫 프레임)
    84.63s  agent 발화 시작: <ret> 센소지 주변에는 스시 다이, 다이코쿠야 텐푸라 등 맛집들이 있습니다. 스시 다이는 평점 사 점 이
    84.79s  user  발화 끝
    84.90s  ⚡SPAN 주입 [d'=0.50s / d_lead=8.21s]: (tool result) 센소지 주변: Sushi Dai (4.2/5, 120 reviews), Daikokuya Tempur
    92.77s  user  발화 시작: 스시 다이 예약해 줘. 이번 주 토요일 저녁 일곱시에 두 명.
    92.84s  agent 발화 끝
    96.20s  <ret> 발화 (turn18 첫 프레임)
    96.35s  agent 발화 시작: <ret> 죄송합니다. 스시 다이는 예약이 불가능합니다. 다른 스시집을 알아볼까요?
    96.42s  user  발화 끝
    98.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.91s]: (tool result) 예약 불가. 스시 다이는 예약이 불가능합니다.
   101.27s  agent 발화 끝
   101.43s  user  발화 시작: 그럼 다른 스시집으로 예약해 봐.
   103.31s  user  발화 끝
   103.32s  agent 발화 시작: 어떤 종류의 스시집을 선호하시나요? 가격대나 분위기를 말씀해 주시면 더 좋은 곳을 찾아드릴 수 있습니다.
   108.25s  user  발화 시작: 아.
   108.88s  user  발화 끝
   110.27s  agent 발화 끝
   111.08s  user  발화 시작: 그냥 평범한 스시집으로 해 줘.
   112.55s  <ret> 발화 (turn23 첫 프레임)
   112.94s  agent 발화 시작: <ret> 스시 잔마이는 평점 사 점, 리뷰는 삼백팔십 개이고, 예약이 가능합니다. 예약해 드릴까요?
   112.97s  user  발화 끝
   114.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.76s]: (tool result) Sushi Zanmai (4.0/5, 380 reviews), 예약 가능.
   119.70s  agent 발화 끝
   119.79s  user  발화 시작: 응, 예약해 줘.
   120.98s  user  발화 끝
   121.00s  <ret> 발화 (turn25 첫 프레임)
   121.07s  agent 발화 시작: <ret> 스시 잔마이, 이천육십육 년 칠월 십이일 저녁 일곱 시, 두 명으로 예약이 완료되었습니다. 예약 
   123.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.90s]: (tool result) 예약 완료. Sushi Zanmai, 2026-07-12 19:00, 2명, 예약 번호: 5A9B2
   123.88s  user  발화 시작: 그래.
   124.38s  user  발화 끝
   129.73s  user  발화 시작: 고마워.
   129.97s  agent 발화 끝
   130.22s  user  발화 끝
   130.40s  agent 발화 시작: 천만에요. 즐거운 여행 되세요.
   133.31s  agent 발화 끝
   133.57s  user  발화 시작: 혹시, 그 스시잔마이 주변에 괜찮은 카페 있어?
   137.22s  <ret> 발화 (turn30 첫 프레임)
   137.45s  agent 발화 시작: <ret> 스시잔마이 주변에는 카페 드 람브르, 스타벅스 커피 등이 있습니다. 카페 드 람브르는 평점 사 점
   137.59s  user  발화 끝
   139.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.83s]: (tool result) 스시잔마이 주변: Cafe de L'Ambre (4.5/5, 200 reviews), Starbuck
   142.10s  user  발화 시작: 응.
   142.46s  user  발화 끝
   147.28s  agent 발화 끝
   147.32s  user  발화 시작: 카페 드 람브르 가려고 하는데, 거기까지 가는 길 알려줘.
   150.33s  <ret> 발화 (turn33 첫 프레임)
   150.47s  agent 발화 시작: <ret> 카페 드 람브르까지 도보로 이동합니다. 오른쪽 길로 직진하세요. 커피 한 잔 하시면서 여유로운 시
   150.51s  user  발화 끝
   152.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.79s]: (tool result) 카페 드 람브르까지 도보로 이동합니다. 오른쪽 길로 직진하세요.
   154.91s  user  발화 시작: 음.
   155.27s  user  발화 끝
   157.88s  user  발화 시작: 좋아, 잘 알았어.
   158.26s  agent 발화 끝
   159.27s  agent 발화 시작: 즐거운 시간 보내세요.
   159.49s  user  발화 끝
   160.65s  agent 발화 끝
