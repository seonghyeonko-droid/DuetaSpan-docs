# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "우율",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-07",
#       "category": "commute",
#       "text": "User carpools with a colleague."
#     },
#     {
#       "date": "2026-04-13",
#       "category": "bloodtype",
#       "text": "User's blood type is A-."
#     },
#     {
#       "date": "2026-03-29",
#       "category": "dish",
#       "text": "User's go-to comfort dish is cold buckwheat noodles."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Turkish."
#     },
#     {
#       "date": "2026-01-14",
#       "category": "coffee",
#       "text": "User's usual coffee order is a caramel latte."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-07",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2025-12-11",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 서울 날씨 어때? | S2 아, 그렇군요. 그럼… 이번 주말에… | S3 글쎄… 좀 조용한 카페 같은 곳? | S4 몽상가 드립… 위치 좀 알려줘.

     0.00s  user  발화 시작: 오늘 서울 날씨 어때?
     1.52s  <ret> 발화 (turn1 첫 프레임)
     1.83s  agent 발화 시작: <ret> 오늘 서울 날씨는 이십팔도이고, 습도는 칠십오퍼센트, 바람은 시속 사 점 이킬로미터입니다. 날씨가
     1.83s  user  발화 끝
     2.82s  ⚡SPAN 주입 [d'=1.31s / d_lead=6.39s]: The weather in Seoul today is 28.0°C, with humidity at 75% and a wind 
     8.22s  user  발화 시작: 응.
     8.22s  agent 발화 끝
     8.67s  user  발화 시작: 그럼 이번 주 토요일 날씨는?
     8.67s  user  발화 끝
    10.45s  <ret> 발화 (turn4 첫 프레임)
    10.91s  ⚡SPAN 주입 [d'=0.46s / d_lead=7.76s]: The weather forecast for Saturday, July 11, 2026, in Seoul is 31.0°C, 
    10.95s  agent 발화 시작: <ret> 이번 주 토요일, 칠월 십일일 서울 날씨는 삼십일도이고, 비가 올 확률은 육십퍼센트입니다. 주말에
    10.95s  user  발화 끝
    18.71s  user  발화 시작: 음.
    18.71s  agent 발화 끝
    19.17s  user  발화 시작: 음… 혹시 다음 주 화요일은 어때?
    19.17s  user  발화 끝
    21.65s  <ret> 발화 (turn7 첫 프레임)
    21.91s  agent 발화 시작: <ret> 다음 주 화요일, 칠월 십사일 서울 날씨는 이십육도이고, 구름이 부분적으로 많을 것으로 예상됩니다
    21.91s  user  발화 끝
    22.82s  ⚡SPAN 주입 [d'=1.17s / d_lead=5.93s]: The weather forecast for Tuesday, July 14, 2026, in Seoul is 26.0°C, w
    27.84s  user  발화 시작: 응.
    27.84s  agent 발화 끝
    28.30s  user  발화 시작: 아, 그렇군요. 그럼… 이번 주말에…
    28.30s  user  발화 끝
    30.58s  user  발화 시작: …갈 만한 곳 좀 추천해 줘.
    30.58s  user  발화 끝
    33.32s  agent 발화 시작: 어떤 종류의 장소를 좋아하세요?
    33.32s  user  발화 끝
    35.14s  agent 발화 시작: 죄송하지만, 어떤 종류의 장소를 선호하시는지 알려주시면 더 정확한 추천을 해 드릴 수 있습니다.
    35.14s  agent 발화 끝
    41.08s  user  발화 시작: 응.
    41.08s  agent 발화 끝
    41.53s  user  발화 시작: 글쎄… 좀 조용한 카페 같은 곳?
    41.53s  user  발화 끝
    44.16s  <ret> 발화 (turn15 첫 프레임)
    44.27s  agent 발화 시작: <ret> 서울 강남구 도산대로 사백이십에 있는 커피 스튜디오 앨리가 평점이 사 점 오에 가격대는 보통인 조
    44.27s  user  발화 끝
    45.04s  ⚡SPAN 주입 [d'=0.88s / d_lead=7.76s]: (tool result) {"restaurants": [{"name": "커피 스튜디오 앨리", "address": "서울 강
    52.03s  user  발화 시작: 잠깐만, 강남 말고 다른 데는 없어?
    52.03s  agent 발화 끝
    54.77s  agent 발화 시작: —다른 지역도 괜찮으시다면, 홍대에도 분위기 좋은 카페들이 많습니다.
    54.77s  user  발화 끝
    58.42s  user  발화 시작: 응응.
    58.42s  agent 발화 끝
    58.88s  agent 발화 시작: 홍대입구역 근처에 '몽상가 드립'이라는 카페가 있는데, 잔잔한 음악과 함께 커피를 즐기실 수 있습니다. 평점
    58.88s  user  발화 끝
    67.55s  user  발화 시작: 몽상가 드립… 위치 좀 알려줘.
    67.55s  agent 발화 끝
    69.50s  <ret> 발화 (turn21 첫 프레임)
    69.83s  agent 발화 시작: <ret> 몽상가 드립의 위치는 위도 삼십칠 점 오 오, 경도 백이십육 점 구 이입니다. 홍대입구역에서 도보
    69.83s  user  발화 끝
    69.97s  ⚡SPAN 주입 [d'=0.47s / d_lead=8.67s]: (tool result) {"latitude": 37.5575, "longitude": 126.9278}
    78.50s  user  발화 시작: 음.
    78.50s  agent 발화 끝
    78.96s  user  발화 시작: 좋아, 그럼 몽상가 드립까지 가는 길 찾아줘.
    78.96s  user  발화 끝
    82.00s  <ret> 발화 (turn24 첫 프레임)
    82.15s  agent 발화 시작: <ret> 지하철 이호선 홍대입구역 구번 출구에서 도보로 오분 정도 걸립니다. 총 거리는 이 점 일킬로미터이
    82.15s  user  발화 끝
    82.34s  ⚡SPAN 주입 [d'=0.34s / d_lead=7.76s]: (tool result) {"directions": "지하철 2호선 홍대입구역 9번 출구에서 도보로 5분", "distance
    89.91s  agent 발화 끝
