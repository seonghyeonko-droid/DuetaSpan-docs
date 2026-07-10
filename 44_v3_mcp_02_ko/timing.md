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

# EXAMINER(FDB-v2) 단계: S1 날씨 업데이트 좀 확인해 줄래? weather.example. | S2 그거, 혹시 환불 규정도 알아봐 줄 수 있어? | S3 해산물이 당기네. | S4 응, 시작해 줘.

     0.00s  user  발화 시작: 날씨 업데이트 좀 확인해 줄래? weather.example.com에서.
     3.05s  <ret> 발화 (turn1 첫 프레임)
     3.45s  agent 발화 시작: <ret> 지금 서울 날씨는 맑고, 기온은 이십오도예요.
     3.61s  user  발화 끝
     4.64s  user  발화 시작: 네.
     5.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.23s]: "(tool result) 현재 서울의 날씨는 맑고, 기온은 25도입니다."
     5.08s  user  발화 끝
     6.68s  agent 발화 끝
     6.96s  user  발화 시작: 음, 알았어. 그럼 내일 모레 부산 가는 기차표 예매해 줄 수 있어?
    11.45s  user  발화 끝
    11.74s  agent 발화 시작: 네, 부산행 기차표 예매 도와드릴게요. 혹시 날짜와 시간을 말씀해 주시겠어요?
    14.25s  user  발화 시작: 예.
    14.74s  user  발화 끝
    17.58s  agent 발화 끝
    17.68s  user  발화 시작: 칠월 십오일 오후 세시쯤으로 부탁해.
    20.37s  <ret> 발화 (turn7 첫 프레임)
    20.53s  agent 발화 시작: <ret> 칠월 십오일 오후 세시 부산행 KTX 일반실 이매가 예매되었고, 예매번호는 일 이 삼 사 오 육 
    20.63s  user  발화 끝
    22.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.67s]: "(tool result) 7월 15일 오후 3시 부산행 KTX 기차표, 일반실 2매 예매 완료되었습니다. 예매번호는 1234
    26.30s  user  발화 시작: 네.
    26.66s  user  발화 끝
    29.20s  agent 발화 끝
    29.74s  user  발화 시작: 그거, 혹시 환불 규정도 알아봐 줄 수 있어?
    32.09s  <ret> 발화 (turn10 첫 프레임)
    32.32s  user  발화 끝
    32.33s  agent 발화 시작: <ret> 출발 두시간 전까지 환불하시면 오십% 환불되고, 그 이후에는 환불이 어려워요.
    33.20s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.72s]: "(tool result) 해당 기차표는 출발 2시간 전까지 환불 시 50% 환불, 출발 후에는 환불이 불가합니다."
    35.63s  user  발화 시작: 정말요?
    36.45s  user  발화 끝
    37.05s  agent 발화 끝
    37.86s  user  발화 시작: 아, 그렇구나. 그럼 혹시 부산에 있는 맛집도 찾아줄 수 있을까?
    41.69s  user  발화 끝
    41.95s  agent 발화 시작: 네, 부산 맛집을 찾아드릴게요. 어떤 종류의 음식을 좋아하세요?
    44.79s  user  발화 시작: 네네.
    45.43s  user  발화 끝
    46.13s  user  발화 시작: 해산물이 당기네.
    46.24s  agent 발화 끝
    46.72s  <ret> 발화 (turn16 첫 프레임)
    47.11s  agent 발화 시작: <ret> 부산 해운대 시장에 '싱싱 해산물'이라는 곳이 평점 사 점 오점으로 인기가 많아요.
    47.32s  user  발화 끝
    48.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.28s]: "(tool result) 부산 해운대 시장에 '싱싱 해산물'이 평점 4.5점으로 가장 인기 있는 해산물 전문점입니다."
    49.22s  user  발화 시작: 와.
    49.70s  user  발화 끝
    52.39s  agent 발화 끝
    52.85s  user  발화 시작: 해운대 시장이 어디 있는지…
    54.93s  user  발화 끝
    56.22s  user  발화 시작: …길 안내해 줄 수 있어?
    57.79s  <ret> 발화 (turn20 첫 프레임)
    57.82s  user  발화 끝
    58.18s  agent 발화 시작: <ret> 지금 계신 곳에서 해운대 시장까지 차로 약 삼십분 걸리고, 내비게이션을 시작해 드릴까요?
    59.07s  ⚡SPAN 주입 [d'=1.28s / d_lead=6.58s]: "(tool result) 현재 위치에서 해운대 시장까지 차량으로 약 30분 소요됩니다. 내비게이션을 시작할까요?"
    61.52s  user  발화 시작: 네.
    62.02s  user  발화 끝
    64.76s  agent 발화 끝
    65.81s  user  발화 시작: 응, 시작해 줘.
    66.62s  <ret> 발화 (turn23 첫 프레임)
    66.94s  agent 발화 시작: <ret> 네, 내비게이션을 시작했습니다.
    67.13s  user  발화 끝
    68.14s  ⚡SPAN 주입 [d'=1.52s / d_lead=1.84s]: "(tool result) 내비게이션을 시작했습니다."
    68.61s  user  발화 시작: 고마워.
    68.78s  agent 발화 끝
    69.36s  agent 발화 시작: 천만에요. 즐거운 여행 되세요.
    69.43s  user  발화 끝
    71.95s  agent 발화 끝
