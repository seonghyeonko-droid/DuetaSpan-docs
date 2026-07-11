# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "수준",
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
#       "date": "2026-04-13",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-01-19",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-10-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-10-08",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in December."
#     },
#     {
#       "date": "2025-07-27",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-22",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-12-20",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-12-03",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주 토요일에 친구 민수에게 삼천 원을 보내주고 싶어. 앱 | S2 배드 보이 라이드 오어 다이… 그거 괜찮겠다. | S3 오, 오후 다섯시 삼십분으로 예매해 줘. 두 명이서. | S4 라 타볼라… 거기가 평이 괜찮네.

     0.00s  user  발화 시작: 이번 주 토요일에 친구 민수에게 삼천 원을 보내주고 싶어. 앱 잔액에서.
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn8 첫 프레임)
     0.05s  agent 발화 시작: <ret> 민수 씨에게 삼천 원 보내기 완료됐어요. 거래 아이디는 팔 칠 육 오 사 삼 이 일입니다.
     0.05s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) Payment successful. Transaction ID: 87654321. Amount: $3
     0.05s  user  발화 끝
     0.12s  user  발화 시작: 음…
     0.12s  agent 발화 끝
     0.12s  agent 발화 시작: 혹시 다른 친구에게도 돈을 보내실까요?
     0.12s  user  발화 끝
     0.14s  user  발화 시작: 아니, 괜찮아. 대신, 이번 주말에 볼 영화가 있는지 찾아줘.
     0.14s  agent 발화 끝
     0.18s  agent 발화 시작: 이번 주말에 상영하는 영화를 알아볼게요. 어떤 장르를 좋아하세요?
     0.18s  user  발화 끝
     0.22s  user  발화 시작: 네.
     0.22s  agent 발화 끝
     0.22s  user  발화 시작: 음… 코미디나 액션 영화가 좋을 것 같아.
     0.22s  user  발화 끝
     0.25s  agent 발화 시작: <ret> 이번 주말에는 “배드 보이 라이드 오어 다이”와 “IF”라는 영화가 상영 중입니다. 액션 코미디,
     0.25s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: Searching for comedy and action movies playing this weekend. Source: I
     0.25s  user  발화 끝
     0.32s  user  발화 시작: 배드 보이 라이드 오어 다이… 그거 괜찮겠다.
     0.32s  agent 발화 끝
     0.33s  <ret> 발화 (turn17 첫 프레임)
     0.35s  agent 발화 시작: “배드 보이 라이드 오어 다이”에 대해 더 자세히 알아볼까요?
     0.35s  user  발화 끝
     0.39s  user  발화 시작: 그렇죠.
     0.39s  agent 발화 끝
     0.39s  user  발화 시작: 응, 상영 시간 좀 알려줘.
     0.39s  user  발화 끝
     0.40s  <ret> 발화 (turn15 첫 프레임)
     0.41s  agent 발화 시작: “배드 보이 라이드 오어 다이”의 상영 시간을 알아볼게요. 어느 지역의 상영 시간을 원하세요?
     0.41s  user  발화 끝
     0.47s  user  발화 시작: 강남역 근처로.
     0.47s  agent 발화 끝
     0.48s  agent 발화 시작: <ret> 강남역 근처에서 “배드 보이 라이드 오어 다이”는 오후 두시, 다섯시 삼십분, 아홉시에 상영합니다
     0.48s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: Showing times for "Bad Boys: Ride or Die" near Gangnam Station: 14:00,
     0.48s  user  발화 끝
     0.53s  user  발화 시작: 오, 오후 다섯시 삼십분으로 예매해 줘. 두 명이서.
     0.53s  agent 발화 끝
     0.57s  agent 발화 시작: <ret> “배드 보이 라이드 오어 다이” 오후 다섯시 삼십분 강남역 이인 예매 완료되었습니다. 확인 번호는
     0.57s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: (tool result) Booking confirmed. Movie: Bad Boys: Ride or Die. Time: 1
     0.57s  user  발화 끝
     0.64s  <ret> 발화 (turn21 첫 프레임)
     0.67s  user  발화 시작: 고마워.
     0.67s  agent 발화 끝
     0.67s  agent 발화 시작: 천만에요.
     0.67s  user  발화 끝
     0.68s  user  발화 시작: 아, 좋은 생각이야. 강남역 근처에 맛있는 이탈리아 식당을 찾아줘.
     0.68s  agent 발화 끝
     0.72s  agent 발화 시작: <ret> 강남역 근처에는 “라 타볼라”라는 이탈리아 식당이 있는데, 파스타와 피자가 맛있기로 유명합니다.
     0.72s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: Searching for Italian restaurants near Gangnam Station. Source: MangoP
     0.72s  user  발화 끝
     0.76s  user  발화 시작: 라 타볼라… 거기가 평이 괜찮네.
     0.76s  agent 발화 끝
     0.78s  agent 발화 시작: “라 타볼라”에 대한 더 자세한 정보가 필요하시면 알려주세요. 메뉴나 영업시간 같은 것들이요.
     0.78s  user  발화 끝
     0.84s  user  발화 시작: 아니, 괜찮아. 그냥… 요즘 아이들 때문에 좀 힘들어.
     0.84s  agent 발화 끝
     0.87s  agent 발화 시작: 아이들 때문에 힘드시군요. 육아는 정말 쉽지 않죠. 잠시 숨을 고르시는 시간도 꼭 가지셨으면 좋겠어요.
     0.87s  user  발화 끝
     0.93s  user  발화 시작: [sigh] 네…
     0.93s  agent 발화 끝
     0.94s  agent 발화 시작: 아이들이 성장하는 모습은 정말 예쁘지만, 그만큼 부모님께는 큰 에너지 소모가 따르는 일인 것 같아요.
     0.94s  user  발화 끝
     1.00s  agent 발화 끝
