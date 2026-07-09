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

# EXAMINER(FDB-v2) 단계: S1 날씨 업데이트 좀 봐줄래? weather.example.com | S2 좋아. 혹시 부산에서 괜찮은 호텔 좀 찾아줄 수 있어? 해운대 | S3 오, 괜찮네. 그럼 파라다이스 호텔 부산으로 예약해 줘. 토요 | S4 김해공항에서 출발해.

     0.00s  user  발화 시작: 날씨 업데이트 좀 봐줄래? weather.example.com에서.
     2.88s  <ret> 발화 (turn1 첫 프레임)
     3.26s  agent 발화 시작: <ret> 알겠습니다. 현재 서울 온도는 섭씨 28도이고, 구름이 조금 낀 날씨입니다.
     3.38s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.59s]: (tool result) The current temperature at Seoul is 28 degrees Celsius w
     3.42s  user  발화 끝
     5.46s  user  발화 시작: 네.
     5.81s  user  발화 끝
     9.00s  user  발화 시작: 음, 고마워. 이번 주말에 부산 갈 건데, 부산 날씨는 어때?
     9.19s  agent 발화 끝
    13.43s  <ret> 발화 (turn4 첫 프레임)
    13.54s  user  발화 끝
    13.82s  agent 발화 시작: <ret> 이번 주말 부산 날씨도 확인해 드릴까요?
    14.47s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.59s]: (tool result) The forecast for Busan this weekend is sunny with highs 
    16.37s  agent 발화 시작: 이번 주말 부산은 맑고, 최고 기온은 섭씨 30도입니다.
    16.41s  agent 발화 끝
    18.81s  user  발화 시작: 네.
    19.44s  user  발화 끝
    20.01s  user  발화 시작: 좋아. 혹시 부산에서 괜찮은 호텔 좀 찾아줄 수 있어? 해운대 근처로.
    20.21s  agent 발화 끝
    25.23s  agent 발화 시작: 해운대 근처 호텔을 찾아보겠습니다. 어떤 가격대를 생각하고 계세요?
    25.46s  user  발화 끝
    27.15s  user  발화 시작: 예.
    27.65s  user  발화 끝
    29.90s  agent 발화 끝
    31.92s  user  발화 시작: 음… 하루에 20만원 정도면 좋겠어.
    34.16s  <ret> 발화 (turn11 첫 프레임)
    34.51s  user  발화 끝
    34.56s  agent 발화 시작: <ret> 20만원 정도의 해운대 근처 호텔을 검색해 드릴게요.
    36.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.35s]: (tool result) The Paradise Hotel Busan is available this weekend for 1
    38.82s  agent 발화 시작: 이번 주말 파라다이스 호텔 부산이 1박에 18만원에 예약 가능합니다.
    38.91s  agent 발화 끝
    42.16s  user  발화 시작: 정말요?
    42.98s  user  발화 끝
    43.73s  agent 발화 끝
    44.48s  user  발화 시작: 오, 괜찮네. 그럼 파라다이스 호텔 부산으로 예약해 줘. 토요일 밤부터 일요일 밤까지.
    48.80s  <ret> 발화 (turn15 첫 프레임)
    49.19s  agent 발화 시작: <ret> 파라다이스 호텔 부산을 토요일 밤부터 일요일 밤까지 예약해 드리겠습니다.
    49.43s  user  발화 끝
    50.32s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.40s]: (tool result) Your reservation at Paradise Hotel Busan is confirmed fo
    53.56s  agent 발화 시작: 파라다이스 호텔 부산 예약이 확정되었습니다. 예약 번호는 BH729입니다.
    53.59s  agent 발화 끝
    56.01s  user  발화 시작: 그렇죠.
    56.64s  user  발화 끝
    59.12s  agent 발화 끝
    59.34s  user  발화 시작: 혹시 호텔까지 가는 버스 시간표도 알아봐 줄 수 있어?
    62.57s  user  발화 끝
    62.61s  agent 발화 시작: 네, 호텔까지 가는 버스 시간표를 알아봐 드리겠습니다. 어디에서 출발하시나요?
    64.81s  user  발화 시작: 네.
    65.26s  user  발화 끝
    68.36s  agent 발화 끝
    68.47s  user  발화 시작: 김해공항에서 출발해.
    70.30s  <ret> 발화 (turn22 첫 프레임)
    70.37s  agent 발화 시작: <ret> 김해공항에서 파라다이스 호텔 부산까지 가는 버스 시간표를 검색해 드릴게요.
    70.40s  user  발화 끝
    72.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: (tool result) Buses depart from Gimhae Airport to Paradise Hotel Busan
    75.81s  agent 발화 시작: 김해공항에서 파라다이스 호텔 부산까지 버스는 아침 9시부터 저녁 9시까지 30분 간격으로 운행합니다.
    76.02s  agent 발화 끝
    79.65s  user  발화 시작: 네.
    80.19s  user  발화 끝
    83.31s  user  발화 시작: 알았어. 정말 고마워. 덕분에 여행 준비가 훨씬 수월해졌네.
    83.50s  agent 발화 끝
    87.38s  agent 발화 시작: 여행 준비에 도움이 되었다니 기쁩니다. 즐거운 여행 되세요.
    87.52s  user  발화 끝
    91.08s  agent 발화 끝
