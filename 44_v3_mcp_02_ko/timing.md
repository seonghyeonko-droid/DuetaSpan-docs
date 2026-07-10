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

# EXAMINER(FDB-v2) 단계: S1 오늘 날씨 어때요? | S2 흐음… | S3 레이크사이드 부산 호텔로 예약해 주세요. | S4 열시 삼십분 버스로 예약해 주세요.

     0.00s  user  발화 시작: 오늘 날씨 어때요?
     0.81s  <ret> 발화 (turn1 첫 프레임)
     1.20s  agent 발화 시작: <ret> 현재 기온은 섭씨 이십삼 점 영도이고, 습도는 칠십사%, 바람은 시속 오 점 오킬로미터입니다. 쾌
     1.37s  user  발화 끝
     2.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.69s]: 23.0°C, humidity 74%, wind 5.5 km/h
    10.81s  user  발화 시작: 그럼 서울 날씨는요?
    10.89s  agent 발화 끝
    11.98s  <ret> 발화 (turn3 첫 프레임)
    12.38s  agent 발화 시작: <ret> 서울 날씨를 알려드릴게요. 서울의 현재 기온은 섭씨 이십오 점 영도이고, 습도는 육십팔%, 바람은
    12.46s  user  발화 끝
    12.48s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.60s]: 25.0°C, humidity 68%, wind 3.2 km/h
    19.56s  user  발화 시작: 네.
    20.19s  user  발화 끝
    23.60s  agent 발화 끝
    23.80s  user  발화 시작: 흐음…
    24.25s  user  발화 끝
    24.30s  agent 발화 시작: 혹시 다른 지역의 날씨도 확인해 드릴까요?
    25.19s  user  발화 시작: 네.
    25.59s  user  발화 끝
    26.61s  agent 발화 끝
    27.50s  user  발화 시작: 아니요, 됐어요. 이번 주말에 부산 갈 건데, 부산 호텔 예약 좀 도와주세요.
    32.13s  user  발화 끝
    32.18s  <ret> 발화 (turn9 첫 프레임)
    32.34s  agent 발화 시작: <ret> 이번 주말 부산 호텔 예약을 도와드리겠습니다. 부산 호텔 검색 결과, 레이크사이드 부산 호텔은 별
    33.78s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.73s]: (tool result) Hotel Lakeside Busan, 4.5 stars, from ₩150,000 per night
    52.39s  agent 발화 끝
    52.70s  user  발화 시작: 레이크사이드 부산 호텔로 예약해 주세요.
    55.24s  <ret> 발화 (turn11 첫 프레임)
    55.32s  agent 발화 시작: <ret> 레이크사이드 부산 호텔로 예약을 진행하겠습니다. 레이크사이드 부산 호텔 예약이 완료되었습니다. 이
    55.43s  user  발화 끝
    57.16s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.09s]: (tool result) Reservation confirmed, Hotel Lakeside Busan, 2 guests, c
    62.59s  user  발화 시작: 와.
    62.99s  user  발화 끝
    70.17s  agent 발화 끝
    70.27s  user  발화 시작: 감사합니다. 혹시 부산역에서 호텔까지 가는 버스 시간표도 알아봐 주실 수 있나요?
    75.27s  <ret> 발화 (turn14 첫 프레임)
    75.50s  agent 발화 시작: <ret> 백일번 버스는 열시, 열시 삼십분, 열한시, 열한시 삼십분에 출발하고, 백이십삼번 버스는 열시 십
    75.81s  user  발화 끝
    77.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=16.66s]: (tool result) Bus 101, departs 10:00, 10:30, 11:00, 11:30; Bus 123, de
    92.15s  agent 발화 끝
    93.43s  user  발화 시작: 열시 삼십분 버스로 예약해 주세요.
    95.89s  agent 발화 시작: 죄송하지만, 버스 티켓은 직접 구매하셔야 합니다. 예약 기능은 제공되지 않습니다. 대신, 버스 시간표를 다시
    95.92s  user  발화 끝
   101.72s  user  발화 시작: 네네.
   102.54s  user  발화 끝
   104.47s  agent 발화 끝
   105.14s  user  발화 시작: 아니요, 괜찮아요. 그럼 그만 할게요.
   108.00s  agent 발화 시작: 네, 알겠습니다. 즐거운 여행 되세요.
   108.10s  user  발화 끝
   111.05s  agent 발화 끝
