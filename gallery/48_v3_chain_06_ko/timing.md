# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "재린",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-05-27",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-03-28",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2026-01-14",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-12-12",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-09-28",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2025-06-30",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-29",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-09-18",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 가죽 재킷 하나 주문하고 싶어요. 가격은 백구십구달러 구십구센 | S2 '인사이드 아웃 이' 열일곱시 타임으로 예매해 주세요. | S3 네, 더위는 좀 힘든 것 같아요. | S4 남이섬으로 가는 버스 시간표 좀 알려주세요.

     0.00s  user  발화 시작: 가죽 재킷 하나 주문하고 싶어요. 가격은 백구십구달러 구십구센트고…
     4.29s  user  발화 시작: …세금은 칠 점 오퍼센트로 해주세요.
     4.29s  user  발화 끝
     6.73s  <ret> 발화 (turn2 첫 프레임)
     6.97s  agent 발화 시작: <ret> 주문이 완료되었습니다. 주문 번호는 팔 칠 사 오 구 이 삼번이고, 총 금액은 이백십사 점 이 사
     6.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.12s]: (tool result) Order created successfully. Order ID: 8745923. Total: $2
     6.97s  user  발화 끝
    16.10s  user  발화 시작: 음, 확인해 주셔서 감사합니다.
    16.10s  agent 발화 끝
    18.24s  agent 발화 시작: 천만에요. 혹시 다른 도움이 필요하시면 언제든지 말씀해주세요. 편안한 하루 보내세요.
    18.24s  user  발화 끝
    23.61s  user  발화 시작: 이번 주 토요일에 영화 보러 가고 싶은데, 괜찮은 영화 있을까요?
    23.61s  agent 발화 끝
    28.81s  <ret> 발화 (turn6 첫 프레임)
    28.97s  agent 발화 시작: <ret> 이번 주 토요일에는 '인사이드 아웃 이'가 열네시, 열일곱시, 스무시에 상영하고, '배드 보이 라
    28.97s  ⚡SPAN 주입 [d'=1.28s / d_lead=11.80s]: (tool result) Showing 'Inside Out 2' at 14:00, 17:00, 20:00. 'Bad Boys
    28.97s  user  발화 끝
    40.78s  user  발화 시작: 음.
    40.78s  agent 발화 끝
    41.31s  agent 발화 시작: 어떤 장르를 선호하시나요? 아니면 특정 배우를 좋아하시는지요?
    41.31s  user  발화 끝
    45.07s  user  발화 시작: 맞아요.
    45.07s  agent 발화 끝
    45.60s  user  발화 시작: '인사이드 아웃 이' 열일곱시 타임으로 예매해 주세요.
    45.60s  user  발화 끝
    49.12s  <ret> 발화 (turn11 첫 프레임)
    49.36s  agent 발화 시작: <ret> '인사이드 아웃 이' 칠월 십일일 열일곱시 상영 티켓 두장이 에이5, 에이 육 좌석으로 확정되었습
    49.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.34s]: (tool result) Two tickets for 'Inside Out 2' at 17:00 on 2026-07-11 co
    49.36s  user  발화 끝
    61.70s  user  발화 시작: 고맙습니다. 혹시 내일 날씨 어때요?
    61.70s  agent 발화 끝
    64.06s  <ret> 발화 (turn13 첫 프레임)
    64.38s  agent 발화 시작: <ret> 내일은 이십팔 점 오도이고 습도는 육십팔퍼센트, 풍속은 시속 칠 점 이킬로미터입니다. 부분적으로 
    64.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.05s]: (tool result) Tomorrow will be 28.5°C, humidity 68%, wind 7.2 km/h. Pa
    64.38s  user  발화 끝
    72.43s  user  발화 시작: 네.
    72.43s  agent 발화 끝
    72.97s  user  발화 시작: 아, 그렇군요.
    72.97s  user  발화 끝
    74.04s  agent 발화 시작: 날씨에 민감하신 편이신가요? 따뜻한 날씨는 기분을 좋게 만들기도 하지만, 더위는 때때로 스트레스를 유발하기도
    74.04s  user  발화 끝
    81.55s  user  발화 시작: 네.
    81.55s  agent 발화 끝
    82.09s  user  발화 시작: 네, 더위는 좀 힘든 것 같아요.
    82.09s  user  발화 끝
    85.31s  agent 발화 시작: 더위를 피할 수 있는 방법을 찾아보는 것도 좋을 것 같아요. 시원한 음료를 마시거나, 그늘에서 휴식을 취하는
    85.31s  user  발화 끝
    96.57s  user  발화 시작: 좋은 생각이에요. 이번 주 금요일에 서울 근교로 드라이브 가고 싶은데, 괜찮은 곳 있을까요?
    96.57s  agent 발화 끝
   103.39s  <ret> 발화 (turn21 첫 프레임)
   103.55s  agent 발화 시작: <ret> 서울 근교에는 남이섬, 쁘띠프랑스, 아침고요수목원 등이 인기 있는 관광지입니다.
   103.55s  ⚡SPAN 주입 [d'=1.68s / d_lead=4.83s]: (tool result) Namisum Island, Petite France, Garden of Morning Calm ar
   103.55s  user  발화 끝
   108.38s  user  발화 시작: 네.
   108.38s  agent 발화 끝
   108.91s  user  발화 시작: 남이섬이 예쁘다고 들었어요.
   108.91s  user  발화 끝
   110.52s  agent 발화 시작: 남이섬은 아름다운 자연 경관으로 유명한 곳입니다. 특히 메타세쿼이아 길은 사진 찍기 좋은 장소로 인기가 많습
   110.52s  user  발화 끝
   118.57s  user  발화 시작: 남이섬으로 가는 버스 시간표 좀 알려주세요.
   118.57s  agent 발화 끝
   121.71s  <ret> 발화 (turn26 첫 프레임)
   121.79s  agent 발화 시작: <ret> 서울에서 남이섬으로 가는 버스는 매 삼십분 간격으로, 여덟시부터 출발합니다. 소요 시간은 약 한시
   121.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.51s]: (tool result) Buses depart from Seoul every 30 minutes, starting at 08
   121.79s  user  발화 끝
   129.30s  user  발화 시작: 네네.
   129.30s  agent 발화 끝
   129.84s  user  발화 시작: 아홉시 버스 예매해 주세요.
   129.84s  user  발화 끝
   131.74s  <ret> 발화 (turn29 첫 프레임)
   131.98s  agent 발화 시작: <ret> 아홉시 출발 남이섬행 버스 티켓이 확정되었습니다. 좌석은 십이번이고, 확인 번호는 사 오 육 칠 
   131.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.12s]: (tool result) Bus ticket to Namisum Island for 09:00 departure confirm
   131.98s  user  발화 끝
   141.10s  user  발화 시작: 아.
   141.10s  agent 발화 끝
   141.64s  user  발화 시작: 감사합니다.
   141.64s  user  발화 끝
   142.18s  agent 발화 시작: 천만에요. 남이섬에서 아름다운 시간을 보내시길 바랍니다. 자연 속에서 잠시나마 마음의 평화를 찾으시길 바랍니
   142.18s  user  발화 끝
   149.15s  agent 발화 끝
