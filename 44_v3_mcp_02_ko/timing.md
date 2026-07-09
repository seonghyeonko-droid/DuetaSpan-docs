# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "Ethan",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-28",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-06-05",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in May."
#     },
#     {
#       "date": "2026-01-11",
#       "category": "work",
#       "text": "User works as a graphic designer."
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
#       "date": "2026-01-22",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 날씨 업데이트 좀 봐줄 수 있어? weather.example | S2 응, 부탁해. '오펜하이머' 예매해줘. CGV 강남점에서, 저 | S3 아, 맞아. 길 안내 좀 해줘. 지금 내 위치 기준으로. | S4 음… 저녁 먹을 만한 곳도 추천해줄 수 있어? 영화관 근처에서

     0.00s  user  발화 시작: 날씨 업데이트 좀 봐줄 수 있어? weather.example.com에서.
     3.21s  <ret> 발화 (turn1 첫 프레임)
     3.60s  agent 발화 시작: <ret> 알겠습니다. 서울 날씨는 맑고, 기온은 이십오도, 습도는 육십%입니다.
     3.71s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.57s]: (tool result) status: 200; content: "현재 서울의 날씨는 맑고, 기온은 25도입니다. 습도는 60
     3.79s  user  발화 끝
     8.14s  agent 발화 끝
     9.50s  user  발화 시작: 오, 좋네.
    10.69s  agent 발화 시작: 날씨가 좋으니 기분도 상쾌하시겠어요. 혹시 오늘 특별한 계획 있으신가요?
    10.92s  user  발화 끝
    12.72s  user  발화 시작: 아.
    13.22s  user  발화 끝
    15.14s  user  발화 시작: 저녁에 친구랑 영화 보러 가기로 했어.
    15.40s  agent 발화 끝
    18.27s  agent 발화 시작: 즐거운 시간 보내시겠네요. 혹시 영화 예매를 도와드릴까요?
    18.38s  user  발화 끝
    20.18s  user  발화 시작: 네네.
    20.91s  user  발화 끝
    22.35s  user  발화 시작: 응, 부탁해. '오펜하이머' 예매해줘. CGV 강남점에서, 저녁 일곱시.
    22.39s  agent 발화 끝
    27.85s  <ret> 발화 (turn9 첫 프레임)
    28.00s  agent 발화 시작: <ret> 네, '오펜하이머' CGV 강남점 저녁 일곱시 이석 예매 완료되었습니다. 총 금액은 삼만원입니다.
    28.22s  user  발화 끝
    29.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.69s]: (tool result) reservation_id: 789456123; movie: 오펜하이머; theater: CGV 강남
    32.11s  user  발화 시작: 진짜요?
    32.79s  user  발화 끝
    37.51s  user  발화 시작: 고마워.
    37.69s  agent 발화 끝
    38.14s  user  발화 끝
    38.31s  agent 발화 시작: 천만에요. 혹시 영화관까지 가는 길 안내가 필요하신가요?
    40.29s  user  발화 시작: 네.
    40.74s  user  발화 끝
    42.56s  agent 발화 끝
    42.75s  user  발화 시작: 아, 맞아. 길 안내 좀 해줘. 지금 내 위치 기준으로.
    45.84s  <ret> 발화 (turn15 첫 프레임)
    46.23s  agent 발화 시작: <ret> CGV 강남까지 거리는 삼 점 이km이고, 예상 소요 시간은 십오분입니다. 남쪽으로 일 점 오km
    46.31s  user  발화 끝
    47.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.06s]: (tool result) distance: 3.2km; estimated_time: 15분; route: "현재 위치에서 남쪽
    56.29s  agent 발화 끝
    57.06s  user  발화 시작: 알았어.
    57.85s  agent 발화 시작: 안전하게 영화관까지 가시길 바랍니다. 혹시 다른 도움이 필요하시면 언제든지 말씀해주세요.
    57.88s  user  발화 끝
    61.90s  user  발화 시작: 그렇죠.
    62.52s  user  발화 끝
    63.81s  user  발화 시작: 음… 저녁 먹을 만한 곳도 추천해줄 수 있어? 영화관 근처에서.
    63.97s  agent 발화 끝
    68.00s  <ret> 발화 (turn20 첫 프레임)
    68.39s  agent 발화 시작: <ret> CGV 강남 근처 한식 맛집으로는 '강남 맛집'(평점 사 점 오, 이만원), '서울 식당'(평점 
    68.53s  user  발화 끝
    70.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.27s]: (tool result) restaurants: ["강남 맛집", "서울 식당", "한식 뷔페"]; ratings: [4.5,
    72.91s  user  발화 시작: 와.
    73.36s  user  발화 끝
    79.55s  user  발화 시작: ‘강남 맛집’으로 예약해줘. 저녁 여섯시에 두명.
    79.66s  agent 발화 끝
    82.51s  <ret> 발화 (turn23 첫 프레임)
    82.90s  agent 발화 시작: <ret> 네, '강남 맛집' 저녁 여섯시 두명 예약 완료되었습니다. 예약 번호는 구 팔 칠 육 오 사 삼 
    82.97s  user  발화 끝
    84.19s  ⚡SPAN 주입 [d'=1.68s / d_lead=9.23s]: (tool result) reservation_id: 987654321; restaurant: 강남 맛집; time: 18:0
    92.13s  agent 발화 끝
