# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "예완",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "60s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-18",
#       "category": "airline",
#       "text": "User usually flies with Lufthansa."
#     },
#     {
#       "date": "2026-06-05",
#       "category": "sibling",
#       "text": "User has a younger sibling named Daniel."
#     },
#     {
#       "date": "2026-05-31",
#       "category": "streaming",
#       "text": "User subscribes to Wavve and Melon."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-04-15",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     },
#     {
#       "date": "2026-03-29",
#       "category": "trip",
#       "text": "User is planning a trip to Morocco in September."
#     },
#     {
#       "date": "2026-03-16",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-01-10",
#       "category": "floor",
#       "text": "User lives on the 12th floor."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "employer",
#       "text": "User works at a design agency."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-22",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     },
#     {
#       "date": "2026-04-06",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     },
#     {
#       "date": "2026-02-14",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     },
#     {
#       "date": "2026-01-30",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 시카고에서 보스턴까지 대중교통으로 가는 방법 좀 알려줘. | S2 혹시 시카고 근처에 괜찮은 카페 있어? 기차 타기 전에 커피  | S3 보스턴 도착해서 바로 숙소에 가려면 어떻게 해야 할까? | S4 …혹시 시카고에서 내일 모레 열리는 컨퍼런스 티켓 예매해 줄 

     0.00s  user  발화 시작: 시카고에서 보스턴까지 대중교통으로 가는 방법 좀 알려줘.
     3.42s  <ret> 발화 (turn1 첫 프레임)
     3.69s  agent 발화 시작: <ret> 시카고에서 보스턴까지 대중교통으로 가는 데는 총 스물한시간 사십오분 정도 걸리고, 거리는 천이십삼
     3.93s  user  발화 끝
     4.76s  ⚡SPAN 주입 [d'=1.34s / d_lead=10.25s]: (tool result) {"total time": "21h 45m", "total distance": "1023 miles"
    13.88s  agent 발화 시작: 먼저 암트랙 기차를 타고, 그 다음에는 엠 비 티 에이 그린 라인 지하철, 마지막으로 그레이하운드 버스를 타
    13.94s  agent 발화 끝
    24.04s  agent 발화 끝
    25.58s  user  발화 시작: 꽤 오래 걸리네.
    26.89s  agent 발화 시작: [happy] 네, 꽤 긴 여정이네요. 그래도 기차로 풍경을 감상할 수 있고, 버스에서는 잠을 잘 수도 있겠
    26.96s  user  발화 끝
    35.84s  agent 발화 끝
    36.71s  user  발화 시작: 기차 시간 좀 더 자세히 알려줄 수 있어?
    38.95s  <ret> 발화 (turn6 첫 프레임)
    39.22s  agent 발화 시작: <ret> 이천이십육년 칠월 십일 오전 여덟시에 칠번 플랫폼에서 출발하는 삼백이십이번 암트랙 기차를 타면, 
    39.25s  user  발화 끝
    40.45s  ⚡SPAN 주입 [d'=1.51s / d_lead=16.47s]: {"departure_time": "2026-07-10T08:00:00", "arrival_time": "2026-07-11T
    55.68s  user  발화 시작: 백오십달러면 괜찮은 가격이네.
    55.69s  agent 발화 끝
    57.69s  agent 발화 시작: [happy] 네, 괜찮은 가격인 것 같아요. 미리 예매하면 더 저렴할 수도 있어요.
    57.89s  user  발화 끝
    64.36s  agent 발화 끝
    64.37s  user  발화 시작: 혹시 시카고 근처에 괜찮은 카페 있어? 기차 타기 전에 커피 한 잔 하고 싶어.
    66.40s  agent 발화 시작: 네.
    67.13s  agent 발화 끝
    68.58s  <ret> 발화 (turn11 첫 프레임)
    69.17s  agent 발화 시작: <ret> 시카고에는 인텔리젠시아 커피라는 유명한 카페가 있어요. 고품질 커피와 세련된 분위기로 알려져 있고
    69.19s  user  발화 끝
    70.09s  ⚡SPAN 주입 [d'=1.52s / d_lead=12.94s]: Intelligentsia Coffee is a popular coffee shop in Chicago, known for i
    82.12s  agent 발화 끝
    83.04s  user  발화 시작: 거기는 내가 가본 적 있어. 다른 곳은 없을까?
    86.08s  <ret> 발화 (turn13 첫 프레임)
    86.25s  agent 발화 시작: <ret> 사와다 커피라는 일본풍의 카페도 있어요. 독특하고 미니멀한 분위기를 자랑하며, 백십이 노스 그린 
    86.42s  user  발화 끝
    87.19s  ⚡SPAN 주입 [d'=1.11s / d_lead=10.34s]: Sawada Coffee is a Japanese-inspired coffee shop in Chicago, offering 
    96.19s  user  발화 시작: 사와다 커피, 이름이 독특하네.
    96.59s  agent 발화 끝
    98.12s  agent 발화 시작: [curious] 네, 독특한 이름이죠. 커피 맛도 훌륭하다고 해요.
    98.30s  user  발화 끝
    99.96s  user  발화 시작: 그치.
   100.50s  user  발화 끝
   103.17s  agent 발화 끝
   103.61s  user  발화 시작: 보스턴 도착해서 바로 숙소에 가려면 어떻게 해야 할까?
   106.76s  <ret> 발화 (turn18 첫 프레임)
   106.84s  agent 발화 시작: <ret> 보스턴 도착 후에는 엠 비 티 에이 그린 라인 지하철을 타고 사우스 스테이션으로 가면 돼요.
   107.08s  user  발화 끝
   108.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.23s]: {"mode": "subway", "departure_time": "2026-07-11T15:00:00", "arrival_t
   114.07s  agent 발화 끝
   114.12s  user  발화 시작: 사우스 스테이션에서 내 숙소까지 택시를 타면 얼마나 걸릴까?
   117.68s  <ret> 발화 (turn20 첫 프레임)
   118.05s  user  발화 끝
   118.12s  agent 발화 시작: <ret> 사우스 스테이션에서 리버티 호텔까지 택시를 타면 약 십분 정도 걸리고, 예상 비용은 십오달러입니다
   118.86s  ⚡SPAN 주입 [d'=1.18s / d_lead=8.58s]: (tool result) {"total time": "10m", "total distance": "2.5 miles", "mo
   126.70s  agent 발화 끝
   126.71s  user  발화 시작: 십오달러면 괜찮네.
   128.36s  user  발화 끝
   128.44s  agent 발화 시작: [happy] 네, 괜찮은 가격인 것 같아요.
   131.49s  agent 발화 끝
   131.71s  user  발화 시작: 근데… 보스턴에 가기 전에 잠깐 다른 일을 처리해야 할 것 같아. —
   135.57s  user  발화 시작: …혹시 시카고에서 내일 모레 열리는 컨퍼런스 티켓 예매해 줄 수 있어?
   135.64s  user  발화 끝
   139.38s  <ret> 발화 (turn25 첫 프레임)
   139.44s  agent 발화 시작: <ret> 네, 시카고에서 이천이십육년 칠월 십이일에 열리는 Tech Innovation Summit 티켓을
   139.60s  user  발화 끝
   140.80s  ⚡SPAN 주입 [d'=1.43s / d_lead=13.96s]: (tool result) {"event name": "Tech Innovation Summit", "date": "2026-0
   153.40s  agent 발화 끝
   154.10s  user  발화 시작: 고마워.
   154.86s  agent 발화 시작: [happy] 천만에요. 컨퍼런스 잘 다녀오세요.
   154.92s  user  발화 끝
   157.72s  user  발화 시작: 응.
   158.27s  user  발화 끝
   159.00s  agent 발화 시작: 보스턴 여행 계획을 다시 짜볼까요?
   159.17s  agent 발화 끝
   162.09s  agent 발화 끝
   162.45s  user  발화 시작: 응, 좋아.
   163.27s  user  발화 끝
   163.82s  agent 발화 시작: [curious] 보스턴에 도착해서 어떤 활동을 하고 싶으세요? 미술관, 박물관, 맛집 등 다양한 선택지가 
   174.88s  agent 발화 시작: 숙소 근처에 괜찮은 레스토랑도 찾아드릴 수 있어요.
   174.99s  agent 발화 끝
   179.32s  agent 발화 끝
