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

# EXAMINER(FDB-v2) 단계: S1 시카고에서 덴버까지 버스표 세 장, 오월 십일에 보여줘. | S2 아침 여덟시 출발이면 너무 일러.… | S3 그럼 두시 출발하는 걸로 해줘. | S4 메이븐 호텔이 제일 저렴하네. 거기가 어디쯤에 있는지 알려줄 

     0.00s  user  발화 시작: 시카고에서 덴버까지 버스표 세 장, 오월 십일에 보여줘.
     4.58s  <ret> 발화 (turn1 첫 프레임)
     4.76s  user  발화 끝
     4.89s  agent 발화 시작: <ret> 시카고에서 덴버까지 오월 십일 버스표는 그레이하운드 백팔십오달러에 스무시간 삼십분, 플릭스버스 백
     6.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.76s]: (tool result) Chicago, IL to Denver, CO, May 10, 2026, 3 passengers: G
    10.40s  user  발화 시작: 와.
    11.08s  user  발화 끝
    13.65s  agent 발화 끝
    13.86s  user  발화 시작: 플릭스버스가 더 싸네. 그거 좀 더 자세히 알려줄래?
    17.67s  <ret> 발화 (turn4 첫 프레임)
    18.06s  agent 발화 시작: <ret> 플릭스버스는 오월 십일 아침 여덟시에 출발해서 다음 날 오전 여섯시에 도착하고, 세 분 요금은 백
    18.07s  user  발화 끝
    19.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.24s]: (tool result) FlixBus, Chicago to Denver, May 10, 2026, 3 passengers: 
    26.30s  agent 발화 끝
    27.64s  user  발화 시작: 아침 여덟시 출발이면 너무 일러.…
    30.19s  user  발화 끝
    32.10s  user  발화 시작: …좀 더 늦게 출발하는 거 있어?
    33.28s  <ret> 발화 (turn7 첫 프레임)
    33.67s  agent 발화 시작: <ret> 플릭스버스 중 오후 열두시 이후 출발하는 건 오후 두시에 출발해서 다음 날 오전 열시에 도착하고,
    33.85s  user  발화 끝
    35.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.20s]: (tool result) FlixBus, Chicago to Denver, May 10, 2026, 3 passengers: 
    38.89s  user  발화 시작: 대박.
    39.53s  user  발화 끝
    41.88s  agent 발화 끝
    41.95s  user  발화 시작: 그럼 두시 출발하는 걸로 해줘.
    43.82s  <ret> 발화 (turn10 첫 프레임)
    43.98s  user  발화 끝
    44.21s  agent 발화 시작: <ret> 플릭스버스, 시카고에서 덴버 가는 오월 십일 오후 두시 출발, 세 분 예약 완료되었습니다. 확인 
    45.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.29s]: (tool result) FlixBus, Chicago to Denver, May 10, 2026, 3 passengers, 
    54.51s  agent 발화 끝
    55.56s  user  발화 시작: 혹시 덴버 근처에 괜찮은 호텔도 알아봐 줄 수 있어?
    58.81s  <ret> 발화 (turn12 첫 프레임)
    58.95s  agent 발화 시작: <ret> 덴버에는 메이븐 호텔이 일박에 이백오십달러, 브라운 팰리스 호텔 삼백달러, 하얏트 리젠시 덴버가 
    59.22s  user  발화 끝
    60.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.11s]: (tool result) Denver, CO: The Maven Hotel at Dairy Block, $250/night; 
    66.98s  user  발화 시작: 메이븐 호텔이 제일 저렴하네. 거기가 어디쯤에 있는지 알려줄 수 있어?
    67.06s  agent 발화 끝
    71.47s  user  발화 끝
