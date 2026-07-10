# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "연준",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-20",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-12-24",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-09-22",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-08-10",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-15",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-10-25",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 내일 오후 네 시 다섯 분에 회의 알람 좀 설정해 줘. 알람  | S2 응, 여행 가려고. 이번 주 토요일에 부산 가는 기차표 예매  | S3 아, 알았어. 그럼, 이번 주 일요일에 영화 볼 만한 거 있어 | S4 할리스 커피로 찾아줘.

     0.00s  user  발화 시작: 내일 오후 네 시 다섯 분에 회의 알람 좀 설정해 줘. 알람 이름은 "회의 알림"으로 해 줘.
     5.46s  user  발화 끝
     5.53s  <ret> 발화 (turn1 첫 프레임)
     5.61s  agent 발화 시작: <ret> 네, 회의 알림이 오후 네 시 다섯 분으로 설정되었어요. 확인 코드는 구 이 비 칠 에프 삼입니다
     5.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.20s]: (tool result) Alarm set for 16:05 with label "회의 알림". Confirmation ID:
    11.49s  user  발화 시작: 헐.
    11.89s  user  발화 끝
    13.79s  user  발화 시작: 음, 그럼 지금 설정된 알람 목록을 보여줘.
    13.81s  agent 발화 끝
    16.50s  <ret> 발화 (turn4 첫 프레임)
    16.89s  agent 발화 시작: <ret> 현재 알람은 오전 일곱 시 '기상' 알람과 오후 네 시 다섯 분 '회의 알림' 이렇게 두 개가 있
    16.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: (tool result) Alarms: 07:00 - Wake up; 16:05 - 회의 알림.
    17.03s  user  발화 끝
    22.68s  agent 발화 끝
    22.81s  user  발화 시작: 좋아. 그럼 내일 모레 서울 날씨는 어때?
    24.65s  <ret> 발화 (turn6 첫 프레임)
    25.04s  agent 발화 시작: <ret> 내일 모레 서울 날씨는 이십팔 점 오도, 습도는 육십팔%, 바람은 시속 사 점 일킬로미터, 구름이
    25.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.53s]: (tool result) Seoul, July 12, 2026: 28.5°C, humidity 68%, wind 4.1 km/
    25.30s  user  발화 끝
    29.23s  user  발화 시작: 헐.
    29.63s  user  발화 끝
    33.57s  agent 발화 끝
    33.80s  user  발화 시작: 으음…
    34.43s  user  발화 끝
    34.52s  agent 발화 시작: 날씨가 너무 덥지는 않아서 다행이네요. 혹시 여행 계획 세우시는 건가요?
    37.55s  user  발화 시작: 어어.
    38.18s  user  발화 끝
    39.29s  agent 발화 끝
    39.38s  user  발화 시작: 응, 여행 가려고. 이번 주 토요일에 부산 가는 기차표 예매 좀 해줘.
    43.52s  <ret> 발화 (turn12 첫 프레임)
    43.68s  agent 발화 시작: <ret> 이번 주 토요일, 칠월 십이일 서울에서 부산 가는 기차는 KTX가 오전 여덟 시, 육만 오천 원이
    43.68s  ⚡SPAN 주입 [d'=1.44s / d_lead=9.55s]: (tool result) Trains from Seoul to Busan on July 12, 2026: 08:00 KTX (
    43.92s  user  발화 끝
    53.23s  agent 발화 끝
    53.63s  user  발화 시작: KTX로 예매해 줘.
    54.86s  <ret> 발화 (turn14 첫 프레임)
    55.09s  agent 발화 시작: <ret> KTX 오전 여덟 시, 부산행, 십이A 좌석, 육만 오천 원으로 예매되었어요. 확인 코드는 사 팔
    55.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.11s]: (tool result) KTX Seoul to Busan, July 12, 2026, seat 12A, ₩65,000. Co
    55.34s  user  발화 끝
    65.10s  user  발화 시작: 고마워. 혹시… 부산에 가면 맛집 좀 추천해 줄 수 있어?
    65.19s  agent 발화 끝
    69.93s  <ret> 발화 (turn16 첫 프레임)
    70.15s  agent 발화 시작: <ret> 부산에는 돼지국밥, 밀면, 해운대 암소갈비집이 유명해요. —
    70.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.30s]: (tool result) Busan restaurants: 돼지국밥 (Pork Soup with Rice), 밀면 (Wheat
    70.24s  user  발화 끝
    73.72s  user  발화 시작: …돼지국밥은 어디가 제일 맛있어?
    74.45s  agent 발화 끝
    75.80s  agent 발화 시작: 돼지국밥은 부산역 근처에 있는 '송정3대국밥'이 가장 유명하다고 해요.
    75.84s  user  발화 끝
    77.41s  user  발화 시작: 진짜?
    77.90s  user  발화 끝
    80.80s  agent 발화 끝
    81.42s  user  발화 시작: 아, 알았어. 그럼, 이번 주 일요일에 영화 볼 만한 거 있어?
    85.72s  <ret> 발화 (turn21 첫 프레임)
    86.03s  agent 발화 시작: <ret> 이번 주 일요일에는 '과거의 메아리'(액션), '침묵의 속삭임'(드라마), '우주의 여정'(SF)
    86.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.13s]: (tool result) Movies playing July 13, 2026: "Echoes of the Past" (Acti
    86.18s  user  발화 끝
    91.21s  user  발화 시작: 응.
    91.56s  user  발화 끝
    93.16s  agent 발화 끝
    93.20s  user  발화 시작: 음, '과거의 메아리'는 평점이 어때?
    96.35s  <ret> 발화 (turn24 첫 프레임)
    96.50s  agent 발화 시작: <ret> '과거의 메아리'는 현재 영화 평점 사이트에서 평균 팔 점 오점 만점에 팔 점 오점을 받고 있어요
    96.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.09s]: (tool result) "과거의 메아리"는 현재 영화 평점 사이트에서 평균 8.5/10점을 받고 있습니다. 다음 영화 (da
    96.57s  user  발화 끝
   103.52s  user  발화 시작: 오, 괜찮네. 혹시 내일 아침 일곱 시에 깨워줄 알람 하나 더 추가해 줄래?
   103.59s  agent 발화 끝
   108.14s  <ret> 발화 (turn26 첫 프레임)
   108.36s  agent 발화 시작: <ret> 네, 내일 아침 일곱 시에 '기상' 알람이 추가되었어요. 확인 코드는 일 에이 삼 비 오 씨입니다
   108.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: (tool result) Alarm set for 07:00 with label "기상". Confirmation ID: 1a
   108.47s  user  발화 끝
   114.15s  agent 발화 끝
   114.32s  user  발화 시작: 좋아. 그럼, 혹시… 내일 오후에 중요한 회의가 있는데, 회의 준비를 위해 조용한 카페를 찾아줄 수 있어?
   121.90s  <ret> 발화 (turn28 첫 프레임)
   121.97s  agent 발화 시작: <ret> 주변에 '커피베이', '할리스 커피', '스타벅스'가 조용한 카페로 검색되었어요.
   121.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.14s]: (tool result) Nearby quiet cafes: "커피베이", "할리스 커피", "스타벅스".
   122.06s  user  발화 끝
   127.11s  agent 발화 끝
   127.57s  user  발화 시작: 할리스 커피로 찾아줘.
   128.99s  <ret> 발화 (turn30 첫 프레임)
   129.14s  agent 발화 시작: <ret> '할리스 커피'까지 도보로 일 점 이킬로미터, 약 십오분 정도 걸려요.
   129.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.86s]: (tool result) Walking directions to 할리스 커피: 1.2 km, approximately 15 m
   129.22s  user  발화 끝
   132.07s  user  발화 시작: 그치.
   132.52s  user  발화 끝
   133.75s  user  발화 시작: 고마워. 그런데, 혹시 지난번에 내가 뭐라고 말했었지?
   134.00s  agent 발화 끝
   138.05s  user  발화 끝
   138.38s  agent 발화 시작: 지난번에 말씀하신 내용은 기억나지 않아요.
   140.82s  agent 발화 끝
   140.89s  user  발화 시작: 아… 그렇구나. 그럼, 오늘 날짜가 어떻게 되지?
   144.58s  <ret> 발화 (turn35 첫 프레임)
   144.65s  agent 발화 시작: <ret> 지금은 이천이십육년 칠월 십일 금요일 오후 네 시 삼십이분이에요.
   144.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.40s]: (tool result) It is Friday, July 10, 2026 at 4:32 PM in Asia/Seoul rig
   144.82s  user  발화 끝
   149.04s  agent 발화 끝
   149.07s  user  발화 시작: 알았어. 고마워.
   150.49s  user  발화 끝
   150.56s  agent 발화 시작: 천만에요. 힘든 변화 속에서도 스스로를 믿고 앞으로 나아가세요.
   155.29s  agent 발화 끝
