# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "도훈",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-17",
#       "category": "music",
#       "text": "User likes listening to K-ballads."
#     },
#     {
#       "date": "2026-04-07",
#       "category": "wake",
#       "text": "User usually wakes up around 6am."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "emergency",
#       "text": "User's emergency contact is Tobias."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "airline",
#       "text": "User usually flies with United."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "partner",
#       "text": "User's partner is named Daniel."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "coffee",
#       "text": "User's usual coffee order is black drip coffee."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "car",
#       "text": "User drives a 2019 Hyundai Tucson."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "dish",
#       "text": "User's go-to comfort dish is bibimbap."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-19",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     },
#     {
#       "date": "2025-12-11",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 나 타임스퀘어까지 가야 하는데, 혼자 탈 수 있는 풀 차량으로 | S2 생각보다 선선하네. 근처에 괜찮은 식당 있을까? | S3 …거기까지 가는 데 얼마나 걸리. | S4 오, 다행이다. 고마워!

     0.00s  user  발화 시작: 나 타임스퀘어까지 가야 하는데, 혼자 탈 수 있는 풀 차량으로 하나 불러줘.
     4.35s  agent 발화 시작: 그건 잠시만요, 확인해 볼게요.
     4.58s  user  발화 끝
     6.24s  agent 발화 끝
     6.36s  user  발화 시작: 아, 그리고 오늘 뉴욕 날씨는 어때?
     9.29s  <ret> 발화 (turn3 첫 프레임)
     9.39s  agent 발화 시작: <ret> [happy] 오늘은 구름이 조금 끼어 있고, 기온은 이십이도예요.
     9.55s  user  발화 끝
    10.19s  ⚡SPAN 주입 [d'=0.90s / d_lead=4.16s]: (tool result) New York, New York, 22 degrees Celsius, Partly Cloudy
    13.55s  agent 발화 끝
    14.31s  user  발화 시작: 생각보다 선선하네. 근처에 괜찮은 식당 있을까?
    17.62s  <ret> 발화 (turn5 첫 프레임)
    18.09s  agent 발화 시작: <ret> [curious] 가벼운 식사를 원하시면 조스 피자라는 저렴한 곳이 있고, 조금 더 제대로 드시려
    18.30s  user  발화 끝
    18.76s  ⚡SPAN 주입 [d'=1.14s / d_lead=9.04s]: (tool result) Joe's Pizza, Budget, 4.5 stars; The Roast Hall, Moderate
    20.96s  user  발화 시작: 응.
    21.32s  user  발화 끝
    27.00s  user  발화 시작: 그냥 피자가 낫겠다. 근데…
    27.13s  agent 발화 끝
    29.17s  user  발화 끝
    30.57s  user  발화 시작: …거기까지 가는 데 얼마나 걸리.
    32.23s  agent 발화 시작: 피자 좋죠! 타임스퀘어 쪽은 항상 북적여서—
    32.46s  user  발화 끝
    34.60s  user  발화 시작: 아, 근데 지금 바로 출발할 수 있는 차가 있는지부터 알려줘.
    35.23s  agent 발화 끝
    36.47s  agent 발화 시작: 맞아요.
    37.10s  agent 발화 끝
    38.30s  agent 발화 시작: [happy] 네, 당연하죠. 제가 바로 확인해 드릴게요.
    38.35s  user  발화 끝
    39.71s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) Times Square, New York, New York, Pool, RID2-005714, con
    40.60s  agent 발화 시작: <ret> 아, 아까 요청하신 차량 호출 결과가 나왔어요. 타임스퀘어행 풀 차량 예약이 완료되었습니다. 예약
    40.84s  agent 발화 끝
    47.07s  user  발화 시작: 그래.
    47.47s  user  발화 끝
    50.90s  agent 발화 끝
    51.04s  user  발화 시작: 오, 다행이다. 고마워!
    52.93s  agent 발화 시작: [happy] 별말씀을요. 새로운 시작을 앞두고 계신 만큼 오늘 하루가 정말 기분 좋게 흘러가면 좋겠어요.
    52.97s  user  발화 끝
    56.52s  user  발화 시작: 응.
    56.87s  user  발화 끝
    59.33s  user  발화 시작: 응, 덕분에 든든해.
    59.42s  agent 발화 끝
    60.98s  user  발화 끝
    61.39s  agent 발화 시작: 언제든 도움이 필요하시면 말씀해 주세요. 조심히 가세요!
    65.50s  agent 발화 끝
