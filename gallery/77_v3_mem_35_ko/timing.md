# v3_mem_35_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "준훈",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-03-30",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2025-11-24",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-11-22",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-09-08",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-06-07",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-30",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-28",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 텔리스님. 요즘 스트레스가 너무 많아서 맛있는 거 | S2 가격도 괜찮고, 위치도 좋은 것 같아요. 혹시 예약도 가능한가 | S3 와, 정말 감사합니다! 텔리스님 덕분에 저녁 약속이 생겼네요. | S4 네, 부탁드려요. 다음에 병원 예약할 때 꼭 알려주세요.

     0.00s  agent 발화 시작: 안녕하세요, 준훈님! 저는 여러분의 웰빙 코치 텔리스예요. 오늘 하루는 어떠셨나요?
     6.61s  user  발화 시작: 안녕하세요, 텔리스님. 요즘 스트레스가 너무 많아서 맛있는 거 먹으러 가고 싶어요.
     6.77s  agent 발화 끝
    12.63s  user  발화 끝
    12.67s  <ret> 발화 (turn2 첫 프레임)
    12.82s  agent 발화 시작: <ret> 스트레스 해소에는 맛있는 음식이 최고죠! 혹시 평소에 즐겨 드시는 음식이 있으세요?
    12.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.23s]: [2025-11-24] User's favorite cuisine is Thai.
    19.83s  agent 발화 시작: 준훈님께서 가장 좋아하시는 음식은 태국 음식이라고 말씀해주셨던 기억이 나요. 태국 음식 전문점을 추천해 드릴
    20.05s  agent 발화 끝
    28.08s  agent 발화 끝
    28.59s  user  발화 시작: 네, 좋아요! 태국 음식 정말 좋아해요.
    31.76s  <ret> 발화 (turn5 첫 프레임)
    31.96s  user  발화 끝
    31.99s  agent 발화 시작: <ret> 해운대에 있는 '시암 스퀘어'라는 곳은 어떠세요? 평점도 사 점 육점이고, 가격대는 일만 오천원에
    32.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.55s]: (tool result) Restaurant: "Siam Square", Rating: 4.6 stars, Price: ₩15
    36.71s  user  발화 시작: 진짜요?
    37.67s  user  발화 끝
    41.54s  agent 발화 끝
    41.70s  user  발화 시작: 가격도 괜찮고, 위치도 좋은 것 같아요. 혹시 예약도 가능한가요?
    46.68s  <ret> 발화 (turn8 첫 프레임)
    46.84s  agent 발화 시작: <ret> 네, 칠월 십일일 저녁 일곱시에 두명으로 예약이 완료되었습니다. 확인 번호는 팔 칠 엑스 구 이예
    46.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.05s]: (tool result) Reservation confirmed for 2 people at Siam Square, Busan
    47.02s  user  발화 끝
    53.88s  agent 발화 끝
    55.29s  user  발화 시작: 와, 정말 감사합니다! 텔리스님 덕분에 저녁 약속이 생겼네요.
    60.13s  agent 발화 시작: 도움이 되어서 정말 기뻐요! 맛있는 식사 하시고 스트레스도 푸시길 바랍니다.
    60.15s  user  발화 끝
    65.83s  agent 발화 끝
    65.92s  user  발화 시작: 아, 맞다! 혹시 제가 페니실린 알레르기가 있었죠?
    69.49s  <ret> 발화 (turn12 첫 프레임)
    69.53s  user  발화 끝
    69.64s  agent 발화 시작: <ret> 네, 맞아요. 페니실린 알레르기가 있다고 기록해 두셨네요. 혹시 병원 예약 시 이 알레르기 정보를
    69.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.46s]: [2026-03-30] User is allergic to penicillin.
    72.64s  user  발화 시작: 네.
    73.46s  user  발화 끝
    79.10s  agent 발화 끝
    81.15s  user  발화 시작: 네, 부탁드려요. 다음에 병원 예약할 때 꼭 알려주세요.
    85.46s  user  발화 끝
    85.73s  agent 발화 시작: 다음에 병원 예약을 도와드릴 때 페니실린 알레르기 정보를 꼭 말씀드리도록 하겠습니다.
    91.84s  agent 발화 끝
