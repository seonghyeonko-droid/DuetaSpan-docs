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

# EXAMINER(FDB-v2) 단계: S1 날씨 업데이트를 weather.example.com에서 계속  | S2 두 장. | S3 근데 혹시 그 재즈 페스티벌 가는 길에 들를 만한 맛집 없을까 | S4 …가는 길 안내해 줄 수 있어?

     0.00s  user  발화 시작: 날씨 업데이트를 weather.example.com에서 계속 확인해 줘.
     5.35s  <ret> 발화 (turn1 첫 프레임)
     5.75s  agent 발화 시작: <ret> 날씨 업데이트가 감지되었습니다. 현재 맑고 기온은 섭씨 이십오도입니다.
     5.93s  user  발화 끝
     7.18s  user  발화 시작: 네.
     7.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.83s]: (tool result) Weather update detected: Sunny, 25°C.
     7.63s  user  발화 끝
     9.58s  agent 발화 끝
     9.89s  user  발화 시작: 음, 좋아. 그럼 내일 오전 아홉시에 회의 알림 좀 설정해 줄래?
    12.78s  <ret> 발화 (turn4 첫 프레임)
    13.18s  agent 발화 시작: <ret> 네, 내일 오전 아홉시에 회의 알림을 설정해 드리겠습니다.
    13.22s  user  발화 끝
    14.14s  ⚡SPAN 주입 [d'=1.36s / d_lead=4.95s]: (tool result) Reminder set for tomorrow at 09:00: 회의.
    16.49s  user  발화 시작: 네.
    18.13s  agent 발화 끝
    18.26s  user  발화 시작: 아, 그리고 혹시 이번 주 토요일에 서울에서 열리는 재즈 페스티벌 티켓 예매해 줄 수 있을까?
    22.84s  user  발화 끝
    24.60s  user  발화 끝
    24.79s  agent 발화 시작: 서울에서 열리는 재즈 페스티벌 티켓 예매를 도와드리겠습니다. 몇 장을 예매하시겠습니까?
    24.93s  user  발화 시작: 예.
    25.29s  agent 발화 끝
    25.92s  user  발화 시작: 두 장.
    27.75s  <ret> 발화 (turn10 첫 프레임)
    27.86s  user  발화 끝
    27.99s  agent 발화 시작: <ret> 재즈 페스티벌 티켓 이장이 예매되었습니다. 확인 번호는 AX789입니다.
    28.87s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.58s]: (tool result) Booking confirmed: Jazz Festival, Seoul, this Saturday, 
    31.08s  user  발화 시작: 정말요?
    31.27s  user  발화 끝
    31.47s  user  발화 끝
    32.57s  agent 발화 끝
    33.21s  user  발화 시작: 오, 잘 됐네.
    40.07s  user  발화 끝
    40.28s  agent 발화 시작: 네, 다행입니다. 즐거운 시간 보내시길 바랍니다.
    46.20s  user  발화 시작: 네네.
    46.55s  user  발화 끝
    48.91s  user  발화 시작: 근데 혹시 그 재즈 페스티벌 가는 길에 들를 만한 맛집 없을까?
    49.00s  agent 발화 끝
    50.00s  <ret> 발화 (turn16 첫 프레임)
    50.40s  agent 발화 시작: <ret> 재즈 페스티벌 근처에 ‘고궁 명동’이라는 한국 음식점이 있습니다. 평점은 사 점 오점이고, 걸어서
    50.57s  user  발화 끝
    52.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.00s]: (tool result) Recommended: 'Gogung Myeongdong', Korean, 4.5 stars, 10 
    52.38s  user  발화 시작: 와.
    55.40s  agent 발화 끝
    55.86s  user  발화 시작: 고궁 명동… 괜찮아 보이네. 그럼 거기까지…
    58.17s  user  발화 끝
    62.53s  user  발화 끝
    64.01s  user  발화 시작: …가는 길 안내해 줄 수 있어?
    64.47s  <ret> 발화 (turn20 첫 프레임)
    64.64s  user  발화 끝
    64.86s  agent 발화 시작: <ret> ‘고궁 명동’으로 가는 길 안내를 시작합니다. 예상 소요 시간은 십오분입니다.
    65.59s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.38s]: (tool result) Navigation started to Gogung Myeongdong. Estimated time:
    66.49s  user  발화 시작: 네.
    68.24s  agent 발화 끝
    69.17s  user  발화 시작: 좋아, 고마워.
    70.55s  agent 발화 시작: 천만에요. 즐거운 페스티벌 되세요.
    70.64s  user  발화 끝
    70.89s  user  발화 끝
    72.86s  agent 발화 끝
