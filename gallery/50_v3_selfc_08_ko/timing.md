# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "연영",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-05-05",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-11-07",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-06-09",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-07",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-09-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-25",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 시카고에서 덴버까지 버스표 세 장, 오월 십일에 보여줘. | S2 그럼 플릭스버스로 예약해 줘. | S3 혹시 덴버에 도착해서 바로 근처에 괜찮은 호텔 있어? | S4 그 호텔 예약도 좀 해 줘. 오월 십일에서 십이일까지…

     0.00s  user  발화 시작: 시카고에서 덴버까지 버스표 세 장, 오월 십일에 보여줘.
     3.79s  <ret> 발화 (turn1 첫 프레임)
     4.02s  user  발화 끝
     4.10s  agent 발화 시작: <ret> 시카고에서 덴버까지 오월 십일에 출발하는 버스는 그레이하운드와 플릭스버스가 있습니다. 그레이하운드
     5.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.17s]: (tool result) 2 buses found: Greyhound, $185.00 (15h 30m); FlixBus, $1
    11.31s  user  발화 시작: 와.
    12.04s  user  발화 끝
    15.27s  agent 발화 끝
    15.56s  user  발화 시작: 플릭스버스가 더 싸네. 시간은 좀 더 걸리지만.
    18.75s  user  발화 끝
    18.91s  agent 발화 시작: 네, 플릭스버스가 조금 더 저렴하지만, 이동 시간이 삼십분 더 걸립니다.
    23.22s  agent 발화 끝
    24.50s  user  발화 시작: 그럼 플릭스버스로 예약해 줘.
    26.07s  <ret> 발화 (turn6 첫 프레임)
    26.38s  agent 발화 시작: <ret> 플릭스버스 예약이 완료되었습니다. 시카고에서 덴버까지 오월 십일, 세 분이시죠. 총 사백팔십육달러
    26.43s  user  발화 끝
    27.11s  ⚡SPAN 주입 [d'=1.04s / d_lead=10.76s]: (tool result) Booking confirmed: FlixBus, Chicago to Denver, May 10th,
    33.18s  user  발화 시작: 대박.
    33.81s  user  발화 끝
    37.05s  user  발화 시작: 확인번호 다시 한 번만 말해 줄래?
    37.13s  agent 발화 끝
    39.05s  agent 발화 시작: 확인번호는 BX78921입니다.
    39.16s  user  발화 끝
    42.09s  user  발화 시작: 혹시 덴버에 도착해서 바로 근처에 괜찮은 호텔 있어?
    42.10s  agent 발화 끝
    45.70s  <ret> 발화 (turn11 첫 프레임)
    46.09s  agent 발화 시작: <ret> 덴버 도착 근처에는 메이븐 호텔, 커티스 호텔, 하얏트 하우스 덴버/다운타운이 있습니다. 가격은 
    46.11s  user  발화 끝
    47.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.88s]: (tool result) The Maven Hotel at Dairy Block, 4.5 stars, $250/night; T
    55.90s  user  발화 시작: 메이븐 호텔이 제일 좋나 보네.
    55.97s  agent 발화 끝
    57.83s  agent 발화 시작: 네, 메이븐 호텔은 평점이 사 점 오점으로 가장 높습니다.
    57.93s  user  발화 끝
    62.23s  agent 발화 끝
    63.19s  user  발화 시작: 그 호텔 예약도 좀 해 줘. 오월 십일에서 십이일까지…
    67.11s  user  발화 끝
    68.54s  user  발화 시작: …이박 삼일로.
    69.97s  user  발화 끝
