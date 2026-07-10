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

# EXAMINER(FDB-v2) 단계: S1 오늘 서울 날씨 어때요? | S2 이번 주말에 근처 호텔 좀 알아봐 줄 수 있을까요? | S3 아, 고마워요. 그런데 혹시… | S4 명동교자 위치 좀 알려줘.

     0.00s  user  발화 시작: 오늘 서울 날씨 어때요?
     0.96s  <ret> 발화 (turn1 첫 프레임)
     1.35s  agent 발화 시작: <ret> 현재 서울은 기온이 이십삼 점 영도이고, 습도는 칠십사%, 바람은 시속 오 점 오킬로미터로 불고 
     1.51s  user  발화 끝
     2.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.69s]: 23.0°C, humidity 74%, wind 5.5 km/h
     4.28s  user  발화 시작: 네.
     4.77s  user  발화 끝
     8.63s  user  발화 시작: 흐음… 그럼 내일은 어때요?
     9.04s  agent 발화 끝
     9.74s  <ret> 발화 (turn4 첫 프레임)
    10.14s  agent 발화 시작: <ret> 내일 서울의 예상 기온은 이십오 점 영도, 습도는 칠십%, 바람은 시속 육 점 영킬로미터입니다.
    10.23s  user  발화 끝
    11.10s  ⚡SPAN 주입 [d'=1.36s / d_lead=6.07s]: 25.0°C, humidity 70%, wind 6.0 km/h
    14.21s  user  발화 시작: 네.
    14.71s  user  발화 끝
    16.21s  agent 발화 끝
    16.26s  agent 발화 시작: 날씨 변화에 대비하시고, 건강 유의하세요.
    19.21s  agent 발화 끝
    19.37s  user  발화 시작: 이번 주말에 근처 호텔 좀 알아봐 줄 수 있을까요?
    22.60s  user  발화 끝
    22.69s  <ret> 발화 (turn8 첫 프레임)
    22.92s  agent 발화 시작: <ret> 서울 근처 호텔 중 신라호텔은 삼십오만 원, 롯데호텔 서울은 이십팔만 원입니다. 다른 호텔도 찾아
    23.81s  ⚡SPAN 주입 [d'=1.12s / d_lead=6.72s]: Hotel Shilla (37.56668, 126.97829): ₩350000, Lotte Hotel Seoul (37.566
    25.21s  user  발화 시작: 네.
    25.66s  user  발화 끝
    29.64s  agent 발화 끝
    30.25s  user  발화 시작: 롯데호텔 서울 예약해 줘.
    31.91s  <ret> 발화 (turn11 첫 프레임)
    32.15s  agent 발화 시작: <ret> 롯데호텔 서울, 이천이십육년 칠월 십이일 체크인, 칠월 십삼일 체크아웃, 총 이십팔만 원입니다. 
    32.18s  user  발화 끝
    33.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.27s]: Lotte Hotel Seoul, check-in Saturday, July 12, 2026, check-out Sunday,
    35.58s  user  발화 시작: 그렇죠.
    36.08s  user  발화 끝
    43.42s  agent 발화 끝
    45.60s  user  발화 시작: 아, 고마워요. 그런데 혹시…
    47.53s  user  발화 끝
    47.59s  agent 발화 시작: 예약이 완료되었습니다.
    49.06s  agent 발화 끝
    49.40s  user  발화 시작: 그… 이번 주말에 갈만한 근처 맛집도 찾아줄 수 있어?
    53.10s  <ret> 발화 (turn16 첫 프레임)
    53.33s  user  발화 끝
    53.50s  agent 발화 시작: <ret> 서울 근처 맛집으로 명동교자는 한식, 개성만두궁은 만두 전문점입니다. 더 자세히 알아볼까요?
    54.78s  ⚡SPAN 주입 [d'=1.68s / d_lead=7.23s]: Myeongdong Kyoja (37.56668, 126.97829): <Korean Cuisine>, Gaeseong Man
    60.73s  agent 발화 끝
    61.86s  user  발화 시작: 명동교자 위치 좀 알려줘.
    63.84s  <ret> 발화 (turn18 첫 프레임)
    64.16s  agent 발화 시작: <ret> 명동교자는 서울 중구 명동 이가 이십번지에 위치하며, 위도는 삼십칠 점 오 육 육 육 팔, 경도는
    64.26s  user  발화 끝
    65.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.18s]: Myeongdong Kyoja (37.56668, 126.97829), 20 Myeongdong 2(i)-ga, Jung-gu
    73.34s  agent 발화 끝
    73.88s  user  발화 시작: 음…좋은 정보 고마워.
    75.86s  user  발화 끝
