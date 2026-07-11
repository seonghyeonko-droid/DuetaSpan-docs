# v3_abs_22_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "서안",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-14",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-11-17",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-10-20",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-07-04",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     },
#     {
#       "date": "2025-06-25",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     },
#     {
#       "date": "2025-06-13",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-15",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-30",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 세아르 씨, 최고법원에 법안을 제출할 수 있는 사람은 삼주 후 | S2 [happy] 아, 인사이드 아웃 이는 이미 봤어요! 재밌더라 | S3 네, 맞아요. 이번 주 토요일에 영화 보러 갈 건데, 혹시 근 | S4 레드 로브스터, 괜찮겠네요. 예약은 어떻게 해야 할까요?

     0.00s  user  발화 시작: 세아르 씨, 최고법원에 법안을 제출할 수 있는 사람은 삼주 후면 누구일까요?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.09s  agent 발화 시작: <ret> 죄송해요, 그 정보는 찾을 수가 없네요. 제가 아는 선에서는 정확히 말씀드리기 어려워요.
     0.09s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: (no information found)
     0.09s  user  발화 끝
     0.13s  <ret> 발화 (turn4 첫 프레임)
     0.19s  user  발화 시작: 네.
     0.19s  agent 발화 끝
     0.20s  user  발화 시작: 아, 그렇군요. 그럼 혹시 요즘 가장 인기 있는 영화가 뭐예요?
     0.20s  user  발화 끝
     0.29s  agent 발화 시작: <ret> 요즘 가장 인기 있는 영화는 '인사이드 아웃 이', '배드 보이즈: 라이드 오어 다이', 그리고 
     0.29s  ⚡SPAN 주입 [d'=0.13s / d_lead=0.13s]: (tool result) Top movies now: 'Inside Out 2', 'Bad Boys: Ride or Die',
     0.29s  user  발화 끝
     0.42s  user  발화 시작: 음.
     0.42s  agent 발화 끝
     0.43s  user  발화 시작: [happy] 아, 인사이드 아웃 이는 이미 봤어요! 재밌더라고요.
     0.43s  user  발화 끝
     0.50s  agent 발화 시작: 정말요? 잘 보셨다니 저도 기쁘네요. 감정 표현이 정말 섬세한 영화죠.
     0.50s  user  발화 끝
     0.55s  <ret> 발화 (turn11 첫 프레임)
     0.58s  user  발화 시작: 네, 맞아요. 이번 주 토요일에 영화 보러 갈 건데, 혹시 근처에 맛있는 식당도 추천해 줄 수 있을까요?
     0.58s  agent 발화 끝
     0.64s  <ret> 발화 (turn9 첫 프레임)
     0.72s  agent 발화 시작: <ret> 근처에는 올리브 가든, 치즈케이크 팩토리, 레드 로브스터가 있어요. 식사하기 좋을 거예요.
     0.72s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: (tool result) Restaurants near you: 'Olive Garden', 'The Cheesecake Fa
     0.72s  user  발화 끝
     0.82s  user  발화 시작: 레드 로브스터, 괜찮겠네요. 예약은 어떻게 해야 할까요?
     0.82s  agent 발화 끝
     0.87s  agent 발화 시작: <ret> 레드 로브스터에 토요일 일곱시에 두명으로 예약 완료됐습니다. 확인 번호는 알 엘 칠 팔 구 공이에
     0.87s  ⚡SPAN 주입 [d'=0.13s / d_lead=0.13s]: (tool result) Reservation confirmed for 2 people at Red Lobster on Sat
     0.87s  user  발화 끝
     1.00s  agent 발화 끝
