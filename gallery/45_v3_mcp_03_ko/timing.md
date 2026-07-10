# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "유준",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2025-11-17",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-08-27",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-07-25",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-07-09",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-07",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-12-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-08-20",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 날씨 어때요? | S2 이번 주말에 갈만한 곳 추천해 줄 수 있어요? | S3 버스 시간표 좀 보여줄 수 있어? | S4 혹시 북촌 한옥마을 근처에 맛집 있어?

     0.00s  user  발화 시작: 오늘 날씨 어때요?
     1.01s  <ret> 발화 (turn1 첫 프레임)
     1.32s  agent 발화 시작: <ret> 서울은 현재 기온이 섭씨 이십칠도이고, 습도는 육십오%, 바람은 시속 삼 점 이킬로미터로 불고 있
     1.48s  user  발화 끝
     3.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.74s]: 27.0°C, humidity 65%, wind 3.2 km/h
     9.06s  agent 발화 끝
    10.60s  user  발화 시작: 그럼 내일은 어때요?
    11.78s  <ret> 발화 (turn3 첫 프레임)
    11.86s  agent 발화 시작: <ret> 내일 서울의 기온은 섭씨 이십팔도로 예상되며, 습도는 육십%, 바람은 시속 사 점 일킬로미터로 불
    12.02s  user  발화 끝
    13.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.20s]: 28.0°C, humidity 60%, wind 4.1 km/h
    16.22s  user  발화 시작: 오.
    17.00s  user  발화 끝
    18.06s  agent 발화 끝
    18.54s  user  발화 시작: 이번 주말에 갈만한 곳 추천해 줄 수 있어요?
    21.15s  <ret> 발화 (turn6 첫 프레임)
    21.22s  agent 발화 시작: <ret> 서울에서 이번 주말에 가볼 만한 곳으로는 경복궁, 북촌 한옥마을, 그리고 N서울타워가 있습니다.
    21.45s  user  발화 끝
    23.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.85s]: Gyeongbokgung Palace (37.57698, 126.97837): Gyeongbokgung Palace, Bukc
    28.07s  agent 발화 끝
    28.14s  agent 발화 시작: 어딜 먼저 가고 싶으세요?
    29.75s  agent 발화 끝
    30.24s  user  발화 시작: 경복궁까지 가는 방법 좀 알려줘.
    32.68s  <ret> 발화 (turn9 첫 프레임)
    33.00s  agent 발화 시작: <ret> 현재 위치에서 경복궁까지는 백구번 버스를 타면 약 이십분 정도 걸립니다.
    33.06s  user  발화 끝
    34.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.53s]: (tool result) Take bus 109 from your current location to Gyeongbokgung
    37.53s  agent 발화 끝
    37.67s  user  발화 시작: 버스 시간표 좀 보여줄 수 있어?
    39.53s  <ret> 발화 (turn11 첫 프레임)
    39.77s  agent 발화 시작: <ret> 백구번 버스는 여덟시, 여덟시 이십분, 여덟시 사십분, 아홉시, 아홉시 이십분, 아홉시 사십분에 
    39.79s  user  발화 끝
    41.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.42s]: (tool result) 109: 08:00, 08:20, 08:40, 09:00, 09:20, 09:40...
    47.19s  agent 발화 끝
    47.32s  user  발화 시작: 그럼 제일 빠른 버스 예매해 줘.
    49.42s  <ret> 발화 (turn13 첫 프레임)
    49.57s  agent 발화 시작: <ret> 백구번 버스 여덟시 출발, 십이번 좌석으로 예약이 완료되었습니다. 확인 번호는 팔십칠f3a9입니다
    49.77s  user  발화 끝
    51.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.10s]: (tool result) Reservation confirmed: 109, 08:00, Seat 12, confirmation
    56.67s  agent 발화 끝
    57.31s  user  발화 시작: 혹시 북촌 한옥마을 근처에 맛집 있어?
    60.50s  user  발화 끝
