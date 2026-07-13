# v3_mcp_01_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "윤경",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2026-01-20",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-26",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-16",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 도쿄에서 로스앤젤레스까지 운전해서 가는 데 얼마나 걸릴까요? | S2 그럼 로스앤젤레스행 제일 싼 편도 항공편을 찾아줘. 다음 주  | S3 아니, 아직 예약은 말고, 그 항공편의 상세 정보를 보여줘. | S4 그럼, 이번 주 금요일에 서울역에서 부산역까지 가는 케이 티 

     0.00s  user  발화 시작: 도쿄에서 로스앤젤레스까지 운전해서 가는 데 얼마나 걸릴까요?
     3.19s  <ret> 발화 (turn1 첫 프레임)
     3.35s  agent 발화 시작: <ret> 도쿄에서 로스앤젤레스까지 운전하는 거리는 약 천삼백사십팔 킬로미터이고, 예상 운전 시간은 백이십오
     3.35s  user  발화 끝
     4.02s  ⚡SPAN 주입 [d'=0.83s / d_lead=6.69s]: The driving distance between Tokyo and Los Angeles is 8,337 miles (13,
    10.04s  user  발화 시작: 그렇죠.
    10.04s  agent 발화 끝
    10.52s  user  발화 시작: 백이십오 시간요? 그건 말도 안 되잖아요! 비행기를 타는 게 훨씬 낫겠네요.
    10.52s  user  발화 끝
    15.78s  agent 발화 시작: [laugh] 맞아요, 운전은 너무 오래 걸리죠. 비행기를 타시는 게 훨씬 빠르고 편하실 거예요.
    15.78s  user  발화 끝
    22.00s  user  발화 시작: 그렇죠.
    22.00s  agent 발화 끝
    22.48s  user  발화 시작: 그럼 로스앤젤레스행 제일 싼 편도 항공편을 찾아줘. 다음 주 토요일 출발.
    22.48s  user  발화 끝
    27.74s  agent 발화 시작: 네.
    27.74s  user  발화 끝
    27.78s  <ret> 발화 (turn8 첫 프레임)
    28.21s  agent 발화 시작: <ret> 다음 주 토요일 로스앤젤레스행 유나이티드 항공편이 백오십 달러에 오전 열 시에 출발해서 오후 두 
    28.21s  agent 발화 끝
    29.28s  ⚡SPAN 주입 [d'=1.50s / d_lead=8.61s]: (tool result) {"flight number": "UA123", "airline": "United Airlines",
    36.82s  user  발화 시작: 예.
    36.82s  agent 발화 끝
    37.30s  user  발화 시작: 음, 가격이 괜찮네요.
    37.30s  user  발화 끝
    38.74s  agent 발화 시작: 네, 가격이 괜찮으시다면 예약해 드릴까요?
    38.74s  user  발화 끝
    41.13s  user  발화 시작: 아니, 아직 예약은 말고, 그 항공편의 상세 정보를 보여줘.
    41.13s  agent 발화 끝
    45.18s  <ret> 발화 (turn13 첫 프레임)
    45.43s  agent 발화 시작: <ret> 해당 항공편은 칠월 십팔일 나리타 국제공항에서 오전 열 시에 출발하여 같은 날 로스앤젤레스 국제공
    45.43s  user  발화 끝
    46.68s  ⚡SPAN 주입 [d'=1.50s / d_lead=12.91s]: Flight UA123 departs from Narita International Airport (NRT) at 10:00 
    58.34s  user  발화 시작: 오, 보잉 칠 팔 칠 구이군요. 좋은 비행기죠.
    58.34s  agent 발화 끝
    62.17s  agent 발화 시작: 네, 승객들에게 편안한 비행 경험을 제공하는 현대적인 항공기입니다.
    62.17s  user  발화 끝
    65.99s  user  발화 시작: 그럼, 이번 주 금요일에 서울역에서 부산역까지 가는 케이 티 엑스 표를 예매해 줘.
    65.99s  agent 발화 끝
    71.70s  <ret> 발화 (turn17 첫 프레임)
    72.21s  agent 발화 시작: <ret> 이번 주 금요일 서울역에서 부산역까지 가는 케이 티 엑스 열차는 오후 세 시에 출발해서 오후 여섯
    72.21s  user  발화 끝
    72.65s  ⚡SPAN 주입 [d'=0.94s / d_lead=11.96s]: (tool result) {"train number": "KTX101", "departure time": "15:00", "a
    84.17s  user  발화 시작: 좋아, 그걸로 예매해 줘.
    84.17s  agent 발화 끝
    86.08s  agent 발화 시작: 네, 케이 티 엑스 일 공 일 열차, 서울역 출발, 부산역 도착, 금요일 오후 세 시 출발, 가격 오만구천팔
    86.08s  user  발화 끝
   106.16s  agent 발화 끝
