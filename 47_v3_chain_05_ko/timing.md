# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "현경",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-02-24",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-10-02",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-09-28",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2025-07-05",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-06-03",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 다음 주 토요일에 하와이 호놀룰루행 왕복 항공편 좀… | S2 혹시 호놀룰루 날씨는 어때? | S3 다이아몬드 헤드 가는 버스 시간표 좀 알려줘. | S4 그럼 칠월 육일에 출발하는 걸로 변경해 줘.

     0.00s  user  발화 시작: 다음 주 토요일에 하와이 호놀룰루행 왕복 항공편 좀…
     0.00s  <ret> 발화 (turn2 첫 프레임)
     0.00s  <ret> 발화 (turn5 첫 프레임)
     0.04s  user  발화 시작: …찾아줘. 칠월 오일에 출발해서 칠월 십이일에 돌아오는 걸로.
     0.04s  user  발화 끝
     0.08s  agent 발화 시작: <ret> 네, 덴버에서 호놀룰루 가는 왕복 항공편을 찾아봤는데, 유나이티드 항공이 천 이백 달러이고, 하와
     0.08s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: (tool result) {"flights": [{"airline": "United Airlines", "flight numb
     0.08s  user  발화 끝
     0.16s  agent 발화 시작: 둘 다 당일 도착하는 항공편이에요.
     0.16s  agent 발화 끝
     0.18s  <ret> 발화 (turn8 첫 프레임)
     0.18s  user  발화 시작: 유나이티드 항공으로 예약해 줘.
     0.18s  agent 발화 끝
     0.20s  agent 발화 시작: <ret> 네, 유나이티드 항공으로 예약 완료되었습니다. 확인 코드는 에이 비 씨 일 이 삼 엑스 와이 제트
     0.20s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: (tool result) {"confirmation id": "ABC123XYZ", "airline": "United Airl
     0.20s  user  발화 끝
     0.21s  <ret> 발화 (turn11 첫 프레임)
     0.30s  agent 발화 시작: 즐거운 여행 되세요.
     0.30s  agent 발화 끝
     0.32s  user  발화 시작: 혹시 호놀룰루 날씨는 어때?
     0.32s  agent 발화 끝
     0.33s  <ret> 발화 (turn19 첫 프레임)
     0.34s  agent 발화 시작: <ret> 호놀룰루는 현재 섭씨 이십팔 점 오도이고, 습도는 칠십퍼센트, 바람은 시속 십오 점 삼킬로미터입니
     0.34s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) {"temperature": 28.5, "humidity": 70, "wind speed": 15.3
     0.34s  user  발화 끝
     0.37s  <ret> 발화 (turn13 첫 프레임)
     0.40s  agent 발화 시작: 날씨는 맑습니다.
     0.40s  agent 발화 끝
     0.41s  user  발화 시작: 이번 주 토요일에 하이킹하기 좋은 곳 좀 알려줘.
     0.41s  agent 발화 끝
     0.45s  agent 발화 시작: <ret> 다이아몬드 헤드는 평점 사 점 오점이고, 마노아 폭포는 사 점 이점입니다.
     0.45s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) {"attractions": [{"name": "Diamond Head", "description":
     0.45s  user  발화 끝
     0.50s  user  발화 시작: 다이아몬드 헤드 가는 버스 시간표 좀 알려줘.
     0.50s  agent 발화 끝
     0.53s  agent 발화 시작: <ret> 다이아몬드 헤드로 가는 이십삼번 버스는 오전 일곱시에 출발해서 일곱시 삼십분에 도착하고, 오전 여
     0.53s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: (tool result) {"bus routes": [{"route number": "23", "departure time":
     0.53s  user  발화 끝
     0.60s  <ret> 발화 (turn23 첫 프레임)
     0.61s  agent 발화 시작: —
     0.61s  agent 발화 끝
     0.62s  user  발화 시작: …혹시 예약한 항공편 시간 변경할 수 있어?
     0.62s  agent 발화 끝
     0.65s  agent 발화 시작: 항공편 시간 변경은 가능하지만, 변경 수수료가 발생할 수 있습니다.
     0.65s  user  발화 끝
     0.69s  agent 발화 시작: 지금 바로 확인해 드릴까요?
     0.69s  agent 발화 끝
     0.71s  user  발화 시작: 네, 확인해 줘.
     0.71s  agent 발화 끝
     0.73s  agent 발화 시작: <ret> 확인 결과, 변경 수수료는 오십달러가 발생합니다.
     0.73s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: (tool result) {"flight details": {"airline": "United Airlines", "fligh
     0.73s  user  발화 끝
     0.75s  agent 발화 시작: 현재 예약된 항공편은 오전 여덟시에 출발하고, 돌아오는 항공편은 오후 두시입니다.
     0.75s  agent 발화 끝
     0.80s  user  발화 시작: 대박.
     0.80s  agent 발화 끝
     0.81s  user  발화 시작: 그럼 칠월 육일에 출발하는 걸로 변경해 줘.
     0.81s  user  발화 끝
     0.84s  agent 발화 시작: <ret> 네, 칠월 육일로 출발일을 변경했습니다. 새로운 확인 코드는 디 이 에프 사 오 육 유 브이 더블
     0.84s  ⚡SPAN 주입 [d'=0.11s / d_lead=0.11s]: (tool result) {"confirmation id": "DEF456UVW", "airline": "United Airl
     0.84s  user  발화 끝
     0.95s  agent 발화 시작: 변경 수수료 오십달러가 추가되었습니다.
     0.95s  agent 발화 끝
     0.97s  user  발화 시작: 알람을 칠월 육일 오전 여섯시에 맞춰 줘.
     0.97s  agent 발화 끝
     1.00s  user  발화 끝
