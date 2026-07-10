# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "가민",
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
#       "date": "2026-05-20",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-04-29",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2026-04-24",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-07-29",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-07",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-11-03",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 런던 히스로 공항에서 샤를 드 골 공항까지 비즈니스석 두 장, | S2 혹시 호텔도 같이 예약해 줄 수 있어요? | S3 사월 일일은 비행기 타고 가니까, 사월 이일 체크인으로 바꿔  | S4 알랭 뒤카스 예약도 부탁해요. 사월 이일 저녁 여덟시에.

     0.00s  user  발화 시작: 런던 히스로 공항에서 샤를 드 골 공항까지 비즈니스석 두 장, 사월 일일에 부탁해요.
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn3 첫 프레임)
     0.00s  <ret> 발화 (turn5 첫 프레임)
     0.05s  agent 발화 시작: <ret> 런던 히스로 공항에서 샤를 드 골 공항까지 비즈니스석 두 장은, 이천이십육년 사월 일일 출발 기준
     0.05s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: (tool result) Flights from London Heathrow to Charles de Gaulle airpor
     0.05s  user  발화 끝
     0.09s  <ret> 발화 (turn11 첫 프레임)
     0.14s  user  발화 시작: 이천삼백사십오달러는 좀 비싸네요. 다른 항공사는 없어요?
     0.14s  agent 발화 끝
     0.17s  agent 발화 시작: <ret> 에어 프랑스 외에, 브리티시 에어웨이즈는 이천오백육십달러, KLM은 이천칠백팔십달러부터 있습니다.
     0.17s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) British Airways also offers business class flights from 
     0.17s  user  발화 끝
     0.20s  user  발화 시작: 브리티시 에어웨이즈로 예약해 주세요.
     0.20s  agent 발화 끝
     0.22s  agent 발화 시작: <ret> 브리티시 에어웨이즈로 예약 완료되었습니다. 예약 번호는 비 에이 칠 팔 구 이 삼 사입니다.
     0.22s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) Booking confirmed for two business class tickets on Brit
     0.22s  user  발화 끝
     0.23s  <ret> 발화 (turn9 첫 프레임)
     0.28s  user  발화 시작: 혹시 호텔도 같이 예약해 줄 수 있어요?
     0.28s  agent 발화 끝
     0.30s  agent 발화 시작: 어떤 지역의 호텔을 찾으시나요? 샤를 드 골 공항 근처나 파리 시내 중에서 선택하실 수 있어요.
     0.30s  user  발화 끝
     0.37s  user  발화 시작: 파리 시내에 있는 오성급 호텔로 부탁해요.
     0.37s  agent 발화 끝
     0.39s  agent 발화 시작: <ret> 파리 시내의 오성급 호텔 중에는 호텔 플라자 아테네와 르 브리스톨 파리가 유명합니다. 객실 요금은
     0.39s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) The Hotel Plaza Athénée and Le Bristol Paris are highly-
     0.39s  user  발화 끝
     0.46s  user  발화 시작: 호텔 플라자 아테네로 예약해 주세요. 이박 삼일로요.
     0.46s  agent 발화 끝
     0.49s  agent 발화 시작: <ret> 호텔 플라자 아테네, 사월 일일부터 삼일까지 이박 삼일 예약 완료되었습니다. 예약 번호는 피 에이
     0.49s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: (tool result) Booking confirmed at Hotel Plaza Athénée for two nights,
     0.49s  user  발화 끝
     0.52s  <ret> 발화 (turn20 첫 프레임)
     0.54s  <ret> 발화 (turn17 첫 프레임)
     0.57s  user  발화 시작: 음.
     0.57s  agent 발화 끝
     0.57s  user  발화 시작: 사월 일일은 비행기 타고 가니까, 사월 이일 체크인으로 바꿔 줄 수 있어요?
     0.57s  user  발화 끝
     0.62s  agent 발화 시작: 네, 체크인 날짜를 사월 이일로 변경해 드릴게요.
     0.62s  user  발화 끝
     0.65s  user  발화 시작: —
     0.65s  agent 발화 끝
     0.65s  user  발화 시작: …근데 혹시 호텔 근처에 괜찮은 레스토랑도 추천해 줄 수 있어요?
     0.65s  user  발화 끝
     0.70s  agent 발화 시작: <ret> 호텔 플라자 아테네 근처에는 미슐랭 삼스타 레스토랑인 알랭 뒤카스가 있습니다.
     0.70s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) Alain Ducasse au Plaza Athénée, a three-Michelin-starred
     0.70s  user  발화 끝
     0.74s  agent 발화 시작: 알랭 뒤카스는 호텔 플라자 아테네 안에 있고, 현대 프랑스 요리를 맛볼 수 있습니다. 라베뉴도 근처에 인기 
     0.74s  agent 발화 끝
     0.81s  user  발화 시작: 알랭 뒤카스 예약도 부탁해요. 사월 이일 저녁 여덟시에.
     0.81s  agent 발화 끝
     0.84s  agent 발화 시작: <ret> 알랭 뒤카스, 사월 이일 저녁 여덟시 예약 완료되었습니다. 예약 번호는 에이 디 구 팔 칠 육 오
     0.84s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) Reservation confirmed at Alain Ducasse au Plaza Athénée 
     0.84s  user  발화 끝
     0.91s  user  발화 시작: 그치.
     0.91s  agent 발화 끝
     0.92s  user  발화 시작: 정말 감사합니다. 덕분에 여행 계획이 잘 세워지는 것 같아요.
     0.92s  user  발화 끝
     0.96s  agent 발화 시작: 도움이 되었다니 기쁘네요. 여행 잘 다녀오세요.
     0.96s  user  발화 끝
     0.98s  user  발화 시작: 네, 알겠습니다.
     0.98s  agent 발화 끝
     0.99s  agent 발화 시작: 즐거운 여행 되세요.
     0.99s  user  발화 끝
     1.00s  agent 발화 끝
