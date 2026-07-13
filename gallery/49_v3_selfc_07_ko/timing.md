# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "주경",
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
#       "date": "2025-12-30",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-11-30",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     },
#     {
#       "date": "2025-11-18",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2025-09-16",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-08-07",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-06-23",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-04",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 서울 날씨 어때? | S2 아, 그럼 혹시 강남역 근처에 맛집 좀 찾아줄 수 있어? | S3 아, 근데 혹시 그 근처에 주차 공간도 있는지 알아봐 줄래?. | S4 르 비즈가 괜찮겠네. 예약 가능한 시간 좀 알려줘.

     0.00s  user  발화 시작: 오늘 서울 날씨 어때?
     1.72s  <ret> 발화 (turn1 첫 프레임)
     1.96s  agent 발화 시작: <ret> 지금 서울 날씨는 이십팔도이고, 습도는 칠십팔퍼센트, 바람은 시속 사 점 일킬로미터입니다. 오늘 
     1.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.83s]: (tool result) The current weather in Seoul is 28.0°C, with humidity at
     1.96s  user  발화 끝
     9.79s  user  발화 시작: 그럼 이번 주 토요일 날씨는?
     9.79s  agent 발화 끝
    12.00s  <ret> 발화 (turn3 첫 프레임)
    12.24s  agent 발화 시작: <ret> 이번 주 토요일, 칠월 십일일 서울 날씨는 최고 삼십일도, 최저 이십사도로 예보되었고, 비 올 확
    12.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.83s]: (tool result) The weather forecast for Seoul on Saturday, July 11, 202
    12.24s  user  발화 끝
    20.08s  user  발화 시작: 아, 그럼 혹시 강남역 근처에 맛집 좀 찾아줄 수 있어?
    20.08s  agent 발화 끝
    24.81s  <ret> 발화 (turn5 첫 프레임)
    24.97s  agent 발화 시작: <ret> 강남역 근처에 이백삼십칠개의 식당이 있는데, 스테이크와 샐러드 바가 유명한 "빕스 강남점"과 아메
    24.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.30s]: (tool result) There are 237 restaurants near Gangnam Station, includin
    24.97s  user  발화 끝
    34.28s  user  발화 시작: 빕스 강남점 예약 좀 해줘. 이번 주 토요일 저녁 일곱시에.
    34.28s  agent 발화 끝
    39.09s  <ret> 발화 (turn7 첫 프레임)
    39.17s  agent 발화 시작: <ret> 빕스 강남점에 이번 주 토요일 저녁 일곱시로 예약이 완료되었습니다. 확인 코드는 지 칠 알 이 구
    39.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.32s]: (tool result) Reservation confirmed for VIPS Gangnam Branch on Saturda
    39.17s  user  발화 끝
    47.50s  user  발화 시작: 아, 근데 혹시 그 근처에 주차 공간도 있는지 알아봐 줄래?.
    47.50s  agent 발화 끝
    52.40s  agent 발화 시작: 빕스 강남점 근처 주차 공간에 대해 알아보고 있는데, 주차 가능 여부는 —
    52.40s  user  발화 끝
    58.27s  user  발화 시작: … 잠깐만, 혹시 강남역 말고 다른 곳도 괜찮아. 좀 조용한 곳으로.
    58.27s  agent 발화 끝
    63.34s  <ret> 발화 (turn11 첫 프레임)
    63.66s  agent 발화 시작: <ret> 조용한 곳을 찾으신다면, 좀 더 여유로운 분위기의 식당을 추천해 드릴까요? 강남역 근처 조용한 식
    63.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=15.18s]: (tool result) "Le Beez" near Gangnam Station is a quiet French bistro,
    63.66s  user  발화 끝
    78.84s  user  발화 시작: 그래.
    78.84s  agent 발화 끝
    79.33s  user  발화 시작: 르 비즈가 괜찮겠네. 예약 가능한 시간 좀 알려줘.
    79.33s  user  발화 끝
    83.25s  agent 발화 시작: 네.
    83.25s  user  발화 끝
    83.66s  <ret> 발화 (turn15 첫 프레임)
    83.74s  agent 발화 시작: <ret> 르 비즈는 이번 주 토요일 저녁 일곱시에는 예약이 마감되었지만, 여섯시 삼십분이나 여덟시에 예약 
    83.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.86s]: (tool result) Le Beez is fully booked on Saturday, July 11, 2026, at 7
    83.74s  agent 발화 끝
    90.59s  user  발화 시작: 그럼 여섯시 삼십분으로 예약해줘.
    90.59s  agent 발화 끝
    92.39s  <ret> 발화 (turn17 첫 프레임)
    92.55s  agent 발화 시작: <ret> 르 비즈에 이번 주 토요일 저녁 여섯시 삼십분
    92.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.92s]: (tool result) Reservation confirmed for Le Beez on Saturday, July 11, 
    92.55s  user  발화 끝
    96.47s  agent 발화 끝
