# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "보서",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-25",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-06-12",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in August."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-28",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-04-12",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-01-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 서울 날씨 어때? | S2 음. | S3 내일 모레 부산 가는 기차표 좀 찾아줘. | S4 케이 티 엑스로 예매해 줘.

     0.00s  user  발화 시작: 오늘 서울 날씨 어때?
     1.88s  <ret> 발화 (turn1 첫 프레임)
     2.04s  agent 발화 시작: <ret> 오늘 서울 날씨는 섭씨 이십육도이고, 습도는 육십팔퍼센트, 바람은 시속 삼 점 일킬로미터입니다.
     2.04s  user  발화 끝
     2.52s  ⚡SPAN 주입 [d'=0.64s / d_lead=6.11s]: The weather in Seoul today is 26.0°C, with humidity at 68% and a wind 
     8.14s  user  발화 시작: 그렇군요.
     8.14s  agent 발화 끝
     8.65s  user  발화 시작: 음.
     8.65s  user  발화 끝
     9.16s  agent 발화 시작: 혹시 다른 도시 날씨도 궁금하신가요?
     9.16s  user  발화 끝
    11.70s  user  발화 시작: 내일 모레 부산 가는 기차표 좀 찾아줘.
    11.70s  agent 발화 끝
    14.93s  <ret> 발화 (turn6 첫 프레임)
    15.27s  agent 발화 시작: <ret> 이천이십육년 칠월 십이일 서울에서 부산 가는 기차는 케이 티 엑스 백십이호가 오전 여덟시에 출발해
    15.27s  user  발화 끝
    16.20s  ⚡SPAN 주입 [d'=1.27s / d_lead=17.30s]: (tool result) Trains from Seoul to Busan on July 12, 2026: KTX 112 (08
    32.57s  user  발화 시작: 케이 티 엑스로 예매해 줘.
    32.57s  agent 발화 끝
    35.08s  <ret> 발화 (turn8 첫 프레임)
    35.11s  agent 발화 시작: <ret> 케이 티 엑스 백십이 이천이십육년 칠월 십이일, 에이 이 좌석으로 예약 완료되었고, 확인번호는 칠
    35.11s  user  발화 끝
    35.38s  ⚡SPAN 주입 [d'=0.30s / d_lead=9.67s]: (tool result) KTX 112 from Seoul to Busan on July 12, 2026, reserved: 
    44.78s  agent 발화 끝
