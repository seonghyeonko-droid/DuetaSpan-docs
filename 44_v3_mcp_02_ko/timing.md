# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "유람",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-12-24",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-11-11",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-09-15",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in May."
#     },
#     {
#       "date": "2025-07-31",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-19",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-05-11",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 날씨 업데이트 좀 확인해 줄래? weather.examp | S2 음… 오후 세시쯤으로 부탁해. | S3 아, 잠깐만. 부산 도착해서 바로 호텔 예약도 좀 부탁할 수  | S4 오, 완벽해. 정말 고마워.

     0.00s  user  발화 시작: 음… 날씨 업데이트 좀 확인해 줄래? weather.example.com에서.
     4.30s  <ret> 발화 (turn1 첫 프레임)
     4.70s  agent 발화 시작: <ret> 네, 알겠습니다. 지금부터 weather.example.com의 날씨 업데이트를 주시하겠습니다.
     4.81s  user  발화 끝
     6.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.16s]: (tool result) Weather update available. Temperature: 25 degrees Celsiu
     8.86s  agent 발화 끝
     8.88s  agent 발화 시작: 날씨 업데이트가 완료되었습니다. 현재 기온은 섭씨 이십오도이고, 맑습니다.
    11.89s  user  발화 시작: 네.
    12.33s  user  발화 끝
    13.51s  agent 발화 끝
    14.93s  user  발화 시작: 고마워. 그런데 혹시 오늘 저녁에 비 올 가능성도 있나?
    18.71s  <ret> 발화 (turn5 첫 프레임)
    18.87s  agent 발화 시작: <ret> 저녁 예보에 따르면 비가 올 확률은 삼십%이고, 최저 기온은 섭씨 이십도입니다.
    18.95s  user  발화 끝
    20.47s  ⚡SPAN 주입 [d'=1.76s / d_lead=5.14s]: (tool result) Evening forecast: 30% chance of rain, low of 20 degrees 
    20.83s  user  발화 시작: 네.
    21.36s  user  발화 끝
    23.94s  user  발화 시작: 아, 그렇구나. 그럼 내일 모레 서울에서 부산 가는 기차표 예매해 줄 수 있어?
    24.01s  agent 발화 끝
    28.48s  user  발화 끝
    28.54s  agent 발화 시작: 네, 가능합니다. 내일 모레 서울에서 부산으로 가는 기차표 예매를 도와드리겠습니다. 몇 시쯤 출발하는 기차를
    31.50s  user  발화 시작: 예.
    31.99s  user  발화 끝
    35.44s  agent 발화 끝
    35.55s  user  발화 시작: 음… 오후 세시쯤으로 부탁해.
    38.14s  <ret> 발화 (turn11 첫 프레임)
    38.54s  agent 발화 시작: <ret> 오후 세시쯤 출발하는 기차표를 예매해 보겠습니다.
    38.60s  user  발화 끝
    39.58s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.24s]: (tool result) Train booked. Confirmation number: ABC123XYZ. Departure:
    41.77s  agent 발화 시작: 기차표 예매가 완료되었습니다. 확인 번호는 ABC123XYZ이고, 서울역에서 오후 세시 십오분에 출발합니다.
    41.78s  agent 발화 끝
    47.31s  user  발화 시작: 정말요?
    48.14s  user  발화 끝
    49.60s  agent 발화 끝
    49.61s  user  발화 시작: 와, 정말 고마워. 덕분에 편하게 여행 갈 수 있겠네.
    53.22s  user  발화 끝
    53.75s  agent 발화 시작: [happy] 도움이 되어 기쁩니다. 즐거운 여행 되세요.
    55.24s  user  발화 시작: 네네.
    55.79s  user  발화 끝
    56.05s  agent 발화 끝
    56.60s  user  발화 시작: 아, 잠깐만. 부산 도착해서 바로 호텔 예약도 좀 부탁할 수 있을까?
    61.60s  user  발화 끝
    61.94s  agent 발화 시작: 네, 부산 도착 후 바로 호텔 예약도 가능합니다. 어떤 호텔을 선호하시나요?
    63.61s  user  발화 시작: 네.
    64.15s  user  발화 끝
    66.39s  agent 발화 끝
    66.70s  user  발화 시작: 음… 해운대 근처에 있는 호텔로 부탁해. 오성급이면 좋겠어.
    70.96s  <ret> 발화 (turn21 첫 프레임)
    71.36s  agent 발화 시작: <ret> 호텔 예약이 완료되었습니다. 파라다이스 호텔 부산이고, 내일 모레 오후 여섯시에 체크인 가능합니다
    71.39s  user  발화 끝
    72.64s  ⚡SPAN 주입 [d'=1.68s / d_lead=8.53s]: (tool result) Hotel booked. Paradise Hotel Busan. Check-in: the day af
    73.88s  user  발화 시작: 오.
    74.51s  user  발화 끝
    79.89s  agent 발화 끝
    79.95s  user  발화 시작: 오, 완벽해. 정말 고마워.
    81.89s  user  발화 끝
    82.00s  agent 발화 시작: [curious] 천만에요.
    82.50s  user  발화 시작: 아, 아니. 괜찮아. 이 정도면 충분해.
    82.72s  agent 발화 끝
    86.07s  agent 발화 시작: 즐거운 여행 되세요.
    86.20s  user  발화 끝
    87.08s  agent 발화 끝
