# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Rennora",
#     "location": {
#       "city": "Tokyo",
#       "country": "Japan",
#       "timezone": "Asia/Tokyo (JST, UTC+9)",
#       "currency": "JPY (¥)"
#     },
#     "nationality": "Japanese",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Japanese"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-29",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-29",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-12",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-05-31",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 그랜드뷰 로프트에 육월 십오일에 방문 예약을 잡아줘. | S2 음… 그 로프트, 반려동물 동반 가능한가? | S3 [happy] 좋아. 그럼 혹시 근처에 괜찮은 카페도 있을까? | S4 고마워, 텔러.

     0.00s  user  발화 시작: 그랜드뷰 로프트에 육월 십오일에 방문 예약을 잡아줘.
     3.54s  <ret> 발화 (turn1 첫 프레임)
     3.78s  agent 발화 시작: <ret> 네, 그랜드뷰 로프트 방문 예약을 도와드릴게요. 육월 십오일 오후 두시에 그랜드뷰 로프트 방문 예
     3.98s  user  발화 끝
     5.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.15s]: (tool result) June 15th at 2:00 PM, The Grandview Lofts.
    11.66s  agent 발화 끝
    12.98s  user  발화 시작: 근데… 십오일은 좀… 아니, 십육일로 바꿔줘.
    16.42s  <ret> 발화 (turn3 첫 프레임)
    16.73s  agent 발화 시작: <ret> 날짜 변경은 언제든지 가능합니다. 육월 십육일 오후 두시에 그랜드뷰 로프트 방문 예약을 변경했습니
    16.86s  user  발화 끝
    17.70s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.38s]: (tool result) June 16th at 2:00 PM, The Grandview Lofts.
    21.84s  user  발화 시작: 어.
    22.15s  user  발화 끝
    24.30s  agent 발화 시작: 혹시 그랜드뷰 로프트에 대해 더 궁금한 점이 있으신가요?
    24.47s  agent 발화 끝
    26.40s  user  발화 시작: 응응.
    26.84s  user  발화 끝
    28.17s  user  발화 시작: 음… 그 로프트, 반려동물 동반 가능한가?
    28.31s  agent 발화 끝
    32.04s  <ret> 발화 (turn8 첫 프레임)
    32.27s  agent 발화 시작: <ret> 반려동물 정책에 대해 알아봐 드릴게요. 그랜드뷰 로프트는 반려동물 동반이 가능하며, 한 번에 이백
    32.48s  user  발화 끝
    33.00s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.06s]: [source: Grandview Lofts Website] Pets are welcome with a one-time fee
    41.43s  user  발화 시작: 아, 그래? 그럼 주차는?
    41.45s  agent 발화 끝
    43.04s  agent 발화 시작: 그랜드뷰 로프트는 입주민에게 무료 주차 공간을 제공합니다.
    43.13s  user  발화 끝
    47.29s  user  발화 시작: [happy] 좋아. 그럼 혹시 근처에 괜찮은 카페도 있을까?
    47.43s  agent 발화 끝
    50.79s  <ret> 발화 (turn12 첫 프레임)
    50.85s  agent 발화 시작: <ret> 근처 카페를 찾아드릴게요. 그랜드뷰 로프트에서 영 점 삼마일 거리에 별점 사 점 오점의 ‘The 
    50.95s  user  발화 끝
    51.29s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.37s]: (tool result) “The Daily Grind” - 0.3 miles, 4.5 stars. “Brew & Bites”
    63.60s  agent 발화 끝
    63.64s  user  발화 시작: ‘The Daily Grind’로 길 안내해줘.
    65.83s  <ret> 발화 (turn14 첫 프레임)
    65.95s  user  발화 끝
    66.14s  agent 발화 시작: <ret> ‘The Daily Grind’로 가는 길을 안내해 드리겠습니다. ‘The Daily Grind’
    67.03s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.99s]: (tool result) Starting navigation to The Daily Grind. ETA: 8 minutes.
    70.53s  user  발화 시작: 음.
    70.97s  user  발화 끝
    76.34s  user  발화 시작: 고마워, 텔러.
    76.39s  agent 발화 끝
    77.35s  user  발화 끝
    77.36s  agent 발화 시작: 언제든지 도와드릴 준비가 되어 있습니다. 편안한 방문 되세요.
    81.80s  agent 발화 끝
