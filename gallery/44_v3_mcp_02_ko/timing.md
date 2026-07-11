# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "연별",
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
#       "date": "2026-06-09",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in May."
#     },
#     {
#       "date": "2026-04-30",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-04-28",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-08-20",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2025-06-03",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-16",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-05-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-07",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 어, 안녕하세요. 오늘 진리에서 우후사까지 자전거로 가면 얼마 | S2 음… 액션 영화요. | S3 그럼 다섯시 표 예매해 줘. | S4 그냥 일반 검진이요.

     0.00s  user  발화 시작: 어, 안녕하세요. 오늘 진리에서 우후사까지 자전거로 가면 얼마나 걸릴까요?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn3 첫 프레임)
     0.05s  agent 발화 시작: <ret> 우후사에서 진리까지 자전거로는 약 삼 점 이킬로미터, 십사분 정도 걸릴 거예요. 길은 이 링크에서
     0.05s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: (tool result) {"distance": 3.2, "duration": 14, "route": "https://maps
     0.05s  user  발화 끝
     0.08s  <ret> 발화 (turn12 첫 프레임)
     0.13s  user  발화 시작: 십사분 정도면 괜찮네. 근데 지금 날씨는 어때?
     0.13s  agent 발화 끝
     0.17s  agent 발화 시작: <ret> 현재 청두의 기온은 이십팔도이고, 습도는 육십오퍼센트, 바람은 시속 칠 점 이킬로미터입니다.
     0.17s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) {"temperature": 28.0, "humidity": 65, "wind": 7.2}
     0.17s  user  발화 끝
     0.21s  <ret> 발화 (turn9 첫 프레임)
     0.23s  user  발화 시작: 응.
     0.23s  agent 발화 끝
     0.24s  user  발화 시작: 으음… 그럼 이번 주 토요일에 영화 보러 갈까요? 혹시 괜찮은 영화 있나요?
     0.24s  user  발화 끝
     0.30s  agent 발화 시작: 이번 주 토요일에 영화를 보시는군요! 어떤 장르를 좋아하세요?
     0.30s  user  발화 끝
     0.31s  <ret> 발화 (turn15 첫 프레임)
     0.34s  user  발화 시작: 응.
     0.34s  agent 발화 끝
     0.35s  user  발화 시작: 음… 액션 영화요.
     0.35s  user  발화 끝
     0.37s  agent 발화 시작: <ret> 이번 주 토요일에 상영하는 액션 영화는 '미션 임파서블: 데드 레코닝 파트 원', '오펜하이머',
     0.37s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: (tool result) Mission: Impossible - Dead Reckoning Part One, Oppenheim
     0.37s  user  발화 끝
     0.45s  user  발화 시작: 어어.
     0.45s  agent 발화 끝
     0.45s  user  발화 시작: '미션 임파서블' 시간 좀 알려주세요.
     0.45s  user  발화 끝
     0.48s  agent 발화 시작: <ret> '미션 임파서블'은 토요일에 오후 두시, 다섯시, 여덟시에 상영합니다.
     0.48s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) 14:00, 17:00, 20:00
     0.48s  user  발화 끝
     0.52s  user  발화 시작: 응.
     0.52s  agent 발화 끝
     0.53s  user  발화 시작: 그럼 다섯시 표 예매해 줘.
     0.53s  user  발화 끝
     0.55s  agent 발화 시작: <ret> 네, '미션 임파서블' 토요일 다섯시 표 예매 완료되었습니다. 확인 번호는 에이 엑스 칠 팔 구 
     0.55s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: (tool result) {"confirmation id": "AX789YZ"}
     0.55s  user  발화 끝
     0.56s  <ret> 발화 (turn23 첫 프레임)
     0.62s  <ret> 발화 (turn20 첫 프레임)
     0.65s  user  발화 시작: 고마워요! 아, 그리고 다음 주 화요일에 병원 예약 좀 해 줄 수 있을까요?
     0.65s  agent 발화 끝
     0.72s  agent 발화 시작: 다음 주 화요일에 병원 예약을 도와드릴게요. 어떤 진료를 받으시려고요?
     0.72s  user  발화 끝
     0.76s  user  발화 시작: 응.
     0.76s  agent 발화 끝
     0.77s  user  발화 시작: 그냥 일반 검진이요.
     0.77s  user  발화 끝
     0.78s  agent 발화 시작: <ret> 다음 주 화요일에 일반 검진이 가능한 병원은 서울대학교병원과 강남의료센터가 있습니다. 어느 병원을
     0.78s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) Seoul General Hospital, Kangnam Medical Center
     0.78s  user  발화 끝
     0.85s  user  발화 시작: 음.
     0.85s  agent 발화 끝
     0.86s  user  발화 시작: 서울대학교병원으로 예약해 줘.
     0.86s  user  발화 끝
     0.88s  agent 발화 시작: <ret> 네, 서울대학교병원 다음 주 화요일 일반 검진 예약 완료되었습니다. 확인 번호는 비 에이치 삼 사
     0.88s  ⚡SPAN 주입 [d'=0.12s / d_lead=0.12s]: (tool result) {"confirmation id": "BH345CD"}
     0.88s  user  발화 끝
     1.00s  agent 발화 끝
