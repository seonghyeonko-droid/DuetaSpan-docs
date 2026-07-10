# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "보율",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-30",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in August."
#     },
#     {
#       "date": "2026-03-29",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2025-09-23",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-09-08",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-08-24",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-01",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-12-07",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-10-02",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 상하이에서 로스앤젤레스까지 차로 얼마나 걸릴까요? | S2 제일 빠른 항공편을 찾아줄 수 있나요? | S3 칠월 십칠일 항공편 가격은요? | S4 백오십만 원 항공편을 예약해 주세요.

     0.00s  user  발화 시작: 상하이에서 로스앤젤레스까지 차로 얼마나 걸릴까요?
     3.27s  <ret> 발화 (turn1 첫 프레임)
     3.51s  agent 발화 시작: <ret> 상하이에서 로스앤젤레스까지 차로 가려면 대략 일만 사천사백삼십킬로미터 정도이고, 운전 시간은 약 
     3.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.48s]: (tool result) The driving distance from Shanghai to Los Angeles is app
     3.70s  user  발화 끝
    10.33s  user  발화 시작: 진짜요?
    11.05s  user  발화 끝
    13.94s  agent 발화 시작: 장거리 운전은 정말 힘든 일이죠. 충분한 휴식과 계획이 중요합니다.
    13.99s  agent 발화 끝
    19.08s  agent 발화 끝
    19.73s  user  발화 시작: 그럼 비행기로는 얼마나 걸릴까요?
    22.10s  <ret> 발화 (turn5 첫 프레임)
    22.17s  agent 발화 시작: <ret> 상하이에서 로스앤젤레스까지 직항이 없다면, 환승 시간을 포함해서 보통 열두시간에서 열여섯시간 정도
    22.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.78s]: (tool result) A one-way flight from Shanghai to Los Angeles typically 
    22.27s  user  발화 끝
    29.96s  agent 발화 끝
    30.84s  user  발화 시작: 제일 빠른 항공편을 찾아줄 수 있나요?
    33.19s  <ret> 발화 (turn7 첫 프레임)
    33.26s  agent 발화 시작: <ret> 가장 빠른 항공편은 이천이십육년 칠월 십칠일 오전 열시에 출발해서 도쿄 경유로 같은 날 오전 여덟
    33.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.03s]: (tool result) The fastest one-way flight from Shanghai to Los Angeles 
    33.52s  user  발화 끝
    42.29s  agent 발화 끝
    42.56s  user  발화 시작: 그 항공편의 가격은 얼마인가요?
    44.89s  <ret> 발화 (turn9 첫 프레임)
    44.95s  user  발화 끝
    45.13s  agent 발화 시작: <ret> 가장 저렴한 항공편은 이천이십육년 칠월 이십일에 출발하며, 가격은 백이십오만 원 정도입니다.
    45.13s  ⚡SPAN 주입 [d'=0.50s / d_lead=7.14s]: (tool result) The cheapest one-way flight from Shanghai to Los Angeles
    52.26s  agent 발화 끝
    52.69s  user  발화 시작: 칠월 십칠일 항공편 가격은요?
    55.12s  <ret> 발화 (turn11 첫 프레임)
    55.20s  agent 발화 시작: <ret> 죄송합니다. 칠월 십칠일 항공편의 가격 정보는 찾을 수 없습니다.
    55.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.44s]: (no information found)
    55.27s  user  발화 끝
    59.54s  user  발화 시작: 알겠습니다. 그럼 칠월 십칠일에 출발하는 다른 항공편을 보여주세요.
    59.64s  agent 발화 끝
    63.77s  <ret> 발화 (turn13 첫 프레임)
    64.17s  agent 발화 시작: <ret> 이천이십육년 칠월 십칠일에는 상하이에서 로스앤젤레스로 가는 여러 항공편이 있으며, 가격은 백오십만
    64.17s  ⚡SPAN 주입 [d'=1.92s / d_lead=9.50s]: (tool result) Several flights depart from Shanghai to Los Angeles on J
    64.35s  user  발화 끝
    69.03s  user  발화 시작: 네.
    69.66s  user  발화 끝
    73.63s  user  발화 시작: 백오십만 원 항공편을 예약해 주세요.
    73.67s  agent 발화 끝
    75.80s  <ret> 발화 (turn16 첫 프레임)
    76.13s  user  발화 끝
    76.20s  agent 발화 시작: <ret> 예약이 완료되었습니다. 확인 번호는 엑스 제이 사 칠 구 이입니다. 칠월 십칠일 오전 열시에 상하
    76.20s  ⚡SPAN 주입 [d'=1.28s / d_lead=14.34s]: (tool result) Flight booked. Confirmation number is XJ4792. Departure:
    87.00s  user  발화 시작: 진짜요?
    87.82s  user  발화 끝
    90.36s  user  발화 시작: 감사합니다.
    90.53s  agent 발화 끝
    91.03s  agent 발화 시작: 도움이 되었다니 다행입니다. 즐거운 여행 되세요.
    91.18s  user  발화 끝
    94.27s  agent 발화 끝
