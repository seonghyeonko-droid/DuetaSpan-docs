# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "연진",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-24",
#       "category": "learning",
#       "text": "User is studying Japanese."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "music",
#       "text": "User likes listening to city pop."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "dish",
#       "text": "User's go-to comfort dish is beef tacos."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "schedule",
#       "text": "User has on-call weekends."
#     },
#     {
#       "date": "2026-02-13",
#       "category": "airline",
#       "text": "User usually flies with United."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "employer",
#       "text": "User works at a biotech lab."
#     },
#     {
#       "date": "2025-12-16",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in February."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-07",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     },
#     {
#       "date": "2026-04-27",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     },
#     {
#       "date": "2026-02-11",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot next Tuesday",
#         "prefers Dr. Han at Bright Smile Clinic"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 저녁에 친구랑 같이 좀 좋은 데 가서 저녁 먹고 싶은데, | S2 오, 괜찮다. 그럼 거기 예약 좀 해줘. 두 명이고, 저녁 일 | S3 트러플 크림 파스타… 맛있겠다. 그럼 혹시 내일 날씨는 어때? | S4 음… 가격 괜찮네. 그럼 거기 방 하나 예약 좀 해줘. 다음 

     0.00s  user  발화 시작: 오늘 저녁에 친구랑 같이 좀 좋은 데 가서 저녁 먹고 싶은데, 혹시 괜찮은 데 알아봐 줄 수 있어?
     5.56s  user  발화 끝
     5.86s  agent 발화 시작: 어떤 종류의 음식을 좋아하세요? 아니면 특별히 가고 싶은 동네가 있으신가요?
     9.33s  user  발화 시작: 응.
     9.73s  user  발화 끝
    11.17s  agent 발화 끝
    11.21s  user  발화 시작: 음… 그냥 분위기 좋은 이탈리안 레스토랑이면 좋겠어. 강남 쪽으로.
    14.18s  agent 발화 시작: 네네.
    14.96s  agent 발화 끝
    15.58s  <ret> 발화 (turn5 첫 프레임)
    15.68s  agent 발화 시작: <ret> 강남역 근처에 있는 벨라 파스타는 어떠세요? 평점이 사 점 육점이고, 지금 예약도 가능하다고 하네
    15.79s  user  발화 끝
    16.18s  ⚡SPAN 주입 [d'=0.60s / d_lead=7.18s]: (tool result) 강남역 99번길 22, Bella Pasta (4.6 stars), 예약 가능
    22.86s  agent 발화 끝
    23.11s  user  발화 시작: 오, 괜찮다. 그럼 거기 예약 좀 해줘. 두 명이고, 저녁 일곱시로.
    26.95s  <ret> 발화 (turn7 첫 프레임)
    27.41s  agent 발화 시작: <ret> 네, 벨라 파스타 강남점에 일곱시에 두 분으로 예약 완료되었습니다. 예약 번호는 알 이 에스 삼 
    27.49s  user  발화 끝
    28.28s  ⚡SPAN 주입 [d'=1.33s / d_lead=8.76s]: (tool result) Bella Pasta, 강남역 99번길 22, 19:00, 2026-07-25, RES3-005061
    36.17s  agent 발화 끝
    36.42s  user  발화 시작: 아, 고마워. 근데 혹시 벨라 파스타에서 제일 인기 있는 메뉴가 뭐야?
    40.43s  agent 발화 시작: 벨라 파스타의 가장 인기 있는 메뉴는 트러플 크림 파스타라고 하네요. 그리고 마르게리타 피자도 많이 찾으시는
    40.44s  user  발화 끝
    42.73s  user  발화 시작: 응.
    43.18s  user  발화 끝
    47.79s  agent 발화 끝
    48.21s  user  발화 시작: 트러플 크림 파스타… 맛있겠다. 그럼 혹시 내일 날씨는 어때?
    52.15s  <ret> 발화 (turn12 첫 프레임)
    52.22s  agent 발화 시작: <ret> 내일 강남 지역의 날씨는 섭씨 이십팔 점 삼도이고, 습도는 칠십이퍼센트, 바람은 시속 팔 점 이킬
    52.34s  user  발화 끝
    52.83s  ⚡SPAN 주입 [d'=0.68s / d_lead=8.43s]: (tool result) 28.3°C, humidity 72%, wind 8.2 km/h
    55.69s  user  발화 시작: 어.
    56.08s  user  발화 끝
    60.65s  agent 발화 끝
    60.89s  user  발화 시작: 덥겠네. 아, 그리고 다음 주 금요일에 부산 갈 건데, 부산역 근처에 괜찮은 호텔 좀 알아봐 줄 수 있어?
    67.21s  <ret> 발화 (turn15 첫 프레임)
    67.77s  agent 발화 시작: <ret> 부산역 근처 호텔 라피스는 어떠세요? 평점은 사 점 이점이고, 일박에 십이만 원 정도 합니다.
    67.90s  user  발화 끝
    68.30s  ⚡SPAN 주입 [d'=1.10s / d_lead=7.46s]: (tool result) 부산역 1번출구, Hotel Lapis (4.2 stars), ₩120,000/night
    75.23s  agent 발화 끝
    75.38s  user  발화 시작: 음… 가격 괜찮네. 그럼 거기 방 하나 예약 좀 해줘. 다음 주 금요일부터 토요일까지.
    80.33s  user  발화 끝
    80.34s  <ret> 발화 (turn17 첫 프레임)
    80.34s  agent 발화 시작: <ret> 네, 호텔 라피스 부산역점에 다음 주 금요일부터 토요일까지 방 예약을 완료했습니다. 예약 번호는 
    80.94s  ⚡SPAN 주입 [d'=0.60s / d_lead=10.75s]: (tool result) Hotel Lapis, Busan Station, 2026-07-31, 2026-08-01, RES4
    83.93s  user  발화 시작: 응.
    84.24s  user  발화 끝
    91.09s  user  발화 시작: 아, 정말 고마워. 덕분에 여행 준비가 훨씬 편해졌네.
    91.09s  agent 발화 끝
    94.82s  agent 발화 시작: 천만에요. 언제든 필요하시면 말씀해주세요. 즐거운 여행 되세요!
    94.83s  user  발화 끝
   100.42s  agent 발화 끝
