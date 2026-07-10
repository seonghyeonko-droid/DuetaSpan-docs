# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "윤율",
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
#       "date": "2026-06-05",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-05-29",
#       "category": "home",
#       "text": "User's home address is 585 Elm Street."
#     },
#     {
#       "date": "2026-05-01",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-05",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-24",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 그랜드뷰 로프트에 육월 십오일에 방문 예약 좀 잡아줘. | S2 음… 세시로 해줘. | S3 벨라 노테… 아, 그게 아니라, 좀 더 캐주얼한 곳으로… 피자 | S4 고마워. 덕분에 편하게 준비할 수 있겠어.

     0.00s  user  발화 시작: 그랜드뷰 로프트에 육월 십오일에 방문 예약 좀 잡아줘.
     3.33s  user  발화 끝
     3.36s  <ret> 발화 (turn1 첫 프레임)
     3.59s  agent 발화 시작: <ret> 그랜드뷰 로프트 육월 십오일 오후 두시에 예약 가능합니다. 괜찮으세요?
     5.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.51s]: (tool result) June 15th at 2:00 PM is available.
     9.11s  agent 발화 끝
     9.61s  user  발화 시작: 응, 맞아. 근데 혹시… 십육일은 어때?
    11.85s  <ret> 발화 (turn3 첫 프레임)
    12.17s  agent 발화 시작: <ret> 육월 십육일에는 오전 열시와 오후 세시에 예약이 가능합니다.
    12.19s  user  발화 끝
    13.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.12s]: (tool result) June 16th at 10:00 AM and 3:00 PM are available.
    14.78s  user  발화 시작: 어.
    15.14s  user  발화 끝
    16.29s  agent 발화 끝
    16.68s  user  발화 시작: 음… 세시로 해줘.
    17.87s  <ret> 발화 (turn6 첫 프레임)
    18.02s  agent 발화 시작: <ret> 그랜드뷰 로프트 육월 십육일 오후 세시로 예약 완료되었습니다. 확인 번호는 칠 팔 구 이 일번입니
    18.10s  user  발화 끝
    19.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.67s]: (tool result) Booking confirmed. Confirmation number is 78921.
    23.77s  user  발화 시작: 어.
    24.18s  user  발화 끝
    26.68s  agent 발화 끝
    27.07s  user  발화 시작: 혹시 그 근처에 맛있는 이탈리안 레스토랑 있으면 추천해 줄 수 있어?
    31.14s  user  발화 끝
    31.22s  <ret> 발화 (turn9 첫 프레임)
    31.29s  agent 발화 시작: <ret> 그랜드뷰 로프트 근처에 벨라 노테라는 이탈리안 레스토랑이 있습니다. 별점은 사 점 오점이고, 거리
    33.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.86s]: (tool result) Bella Notte - Italian, 4.5 stars, 0.3 miles away.
    39.96s  user  발화 시작: 벨라 노테… 아, 그게 아니라, 좀 더 캐주얼한 곳으로… 피자 같은 거 파는 데.
    40.15s  agent 발화 끝
    44.65s  <ret> 발화 (turn11 첫 프레임)
    44.80s  agent 발화 시작: <ret> 벨라 노테 말고 토니 피자도 있습니다. 별점은 사 점 이점이고, 거리는 영 점 오마일입니다. 피자
    44.96s  user  발화 끝
    46.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.18s]: (tool result) Tony's Pizzeria - Pizza, 4.2 stars, 0.5 miles away.
    53.98s  agent 발화 끝
    54.30s  user  발화 시작: 토니 피자, 좋아 보여. 거기는 몇 시까지 해?
    57.22s  <ret> 발화 (turn13 첫 프레임)
    57.45s  agent 발화 시작: <ret> 토니 피자리아는 밤 열시까지 영업합니다.
    57.53s  user  발화 끝
    58.26s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.86s]: (tool result) Tony's Pizzeria is open until 10:00 PM.
    58.56s  user  발화 시작: 음.
    59.00s  user  발화 끝
    60.09s  user  발화 시작: 고마워. 덕분에 편하게 준비할 수 있겠어.
    60.31s  agent 발화 끝
    62.67s  user  발화 끝
    62.84s  agent 발화 시작: 도움이 되었다니 기쁩니다. 집 보러 가시기 전에 편안하게 휴식하세요.
    67.42s  agent 발화 끝
