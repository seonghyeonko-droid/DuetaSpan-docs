# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "우국",
#     "location": {
#       "city": "Busan",
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
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-12-17",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-10-29",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2025-10-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-08-24",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-03",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-18",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-06-06",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 누라 씨. 인도 철도에 역이 얼마나 있나요? | S2 좋아요. 추천 부탁드려요. | S3 사 점 오점이면 꽤 괜찮네요. | S4 …숙소도 추천해 줄 수 있을까요?

     0.00s  user  발화 시작: 안녕하세요, 누라 씨. 인도 철도에 역이 얼마나 있나요?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn7 첫 프레임)
     0.00s  <ret> 발화 (turn9 첫 프레임)
     0.03s  agent 발화 시작: <ret> 인도 철도망에는 대략 칠천삼백사십구개의 역이 연결되어 있습니다. 여행 계획에 도움이 될까요?
     0.03s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: The Indian railway network connects about 7,349 stations.
     0.03s  user  발화 끝
     0.07s  user  발화 시작: 네.
     0.07s  agent 발화 끝
     0.07s  user  발화 시작: 와, 정말 많네요.
     0.07s  user  발화 끝
     0.08s  <ret> 발화 (turn17 첫 프레임)
     0.08s  agent 발화 시작: 네, 규모가 꽤 크죠. 인도 여행을 생각하고 계신가요?
     0.08s  user  발화 끝
     0.11s  user  발화 시작: 네.
     0.11s  agent 발화 끝
     0.11s  user  발화 시작: 음… 아직 잘 모르겠어요. 혹시 서울에서 가장 가까운 바닷가 알려줄 수 있을까요?
     0.11s  user  발화 끝
     0.15s  agent 발화 시작: <ret> 서울에서 가장 가까운 바닷가는 자동차로 약 칠십사 점 칠킬로미터 떨어져 있고, 한시간 이십이분 정
     0.15s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) {"distance": "74.7 km", "duration": "1h 22m", "route": "
     0.15s  user  발화 끝
     0.22s  user  발화 시작: 한시간 이십이분이면 괜찮네요.
     0.22s  agent 발화 끝
     0.23s  agent 발화 시작: <ret> 네, 당일치기 여행도 충분히 가능하겠어요.
     0.23s  ⚡SPAN 주입(IRRELEVANT) [d'=0.02s / d_lead=0.02s]: The average price of a barrel of Brent crude oil on July 9, 2026, was 
     0.23s  user  발화 끝
     0.25s  agent 발화 시작: 혹시 여행 스타일을 조금 더 자세히 말씀해 주실 수 있을까요?
     0.25s  agent 발화 끝
     0.27s  <ret> 발화 (turn26 첫 프레임)
     0.29s  user  발화 시작: 저는 조용하고 한적한 곳을 좋아해요.
     0.29s  agent 발화 끝
     0.30s  agent 발화 시작: 조용하고 한적한 곳을 선호하시는군요. 그럼 좀 더 여유로운 여행지를 추천해 드릴게요.
     0.30s  user  발화 끝
     0.34s  user  발화 시작: 좋아요. 추천 부탁드려요.
     0.34s  agent 발화 끝
     0.35s  agent 발화 시작: 음… 그럼 강원도에 있는 작은 어촌마을을 추천해 드릴게요.
     0.35s  user  발화 끝
     0.38s  user  발화 시작: 예.
     0.38s  agent 발화 끝
     0.38s  <ret> 발화 (turn21 첫 프레임)
     0.38s  user  발화 시작: 강원도요? 어떤 곳인데요?
     0.38s  user  발화 끝
     0.40s  agent 발화 시작: <ret> 강릉의 주문진항은 잔잔한 바다와 신선한 해산물로 유명한 아담한 어촌마을입니다. 주문진항 공식 웹사
     0.40s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) Jumunjin Port in Gangneung, Gangwon-do is a charming fis
     0.40s  user  발화 끝
     0.46s  user  발화 시작: 주문진항… 이름이 예쁘네요.
     0.46s  agent 발화 끝
     0.47s  agent 발화 시작: 네, 이름처럼 아름다운 곳이에요. 바다를 바라보며 여유로운 시간을 보내실 수 있을 거예요.
     0.47s  user  발화 끝
     0.47s  <ret> 발화 (turn32 첫 프레임)
     0.51s  user  발화 시작: 혹시 그곳에서 맛있는 해산물 식당도 추천해 줄 수 있을까요?
     0.51s  agent 발화 끝
     0.54s  agent 발화 시작: <ret> 주문진항 근처에는 해산물 천국이라는 식당이 있습니다. 평점은 사 점 오점이고, 가격은 이만 원에서
     0.54s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) {"name": "Seafood Paradise", "rating": 4.5, "price": "₩2
     0.54s  user  발화 끝
     0.60s  user  발화 시작: 진짜요?
     0.60s  agent 발화 끝
     0.60s  user  발화 시작: 사 점 오점이면 꽤 괜찮네요.
     0.60s  user  발화 끝
     0.62s  agent 발화 시작: 네, 현지인들에게도 인기가 많은 곳이에요. 신선한 해산물을 맛볼 수 있습니다.
     0.62s  user  발화 끝
     0.65s  user  발화 시작: 이번 주 토요일에 갈 수 있을까요?
     0.65s  agent 발화 끝
     0.67s  agent 발화 시작: <ret> 지금은 이천이십육년 칠월 십일 금요일 오전 열시 삼십삼분입니다. 이번 주 토요일은 칠월 십일일입니
     0.67s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) It is Friday, July 10, 2026 at 10:33 AM in Asia/Seoul ri
     0.67s  user  발화 끝
     0.72s  user  발화 시작: 아, 맞네요. 칠월 십일일이군요.
     0.72s  agent 발화 끝
     0.73s  agent 발화 시작: 네, 토요일에 주문진항으로 여행을 떠나시는 건 어떠세요?
     0.73s  user  발화 끝
     0.76s  user  발화 시작: 그렇죠.
     0.76s  agent 발화 끝
     0.76s  user  발화 시작: 좋아요. 혹시 그 근처에…
     0.76s  user  발화 끝
     0.78s  user  발화 시작: …숙소도 추천해 줄 수 있을까요?
     0.78s  user  발화 끝
     0.79s  agent 발화 시작: <ret> 주문진항 근처에는 오션뷰 호텔이 있습니다. 평점은 사 점 이점이고, 일박에 십오만 원입니다. 바다
     0.79s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) {"name": "Ocean View Hotel", "rating": 4.2, "price": "₩1
     0.79s  user  발화 끝
     0.85s  user  발화 시작: 그렇죠.
     0.85s  agent 발화 끝
     0.86s  user  발화 시작: 십오만 원이면 괜찮은 가격이네요.
     0.86s  user  발화 끝
     0.87s  agent 발화 시작: 네, 바다를 바라보며 편안하게 휴식을 취할 수 있을 거예요.
     0.87s  user  발화 끝
     0.90s  user  발화 시작: 혹시 그 호텔 예약도 도와줄 수 있을까요?
     0.90s  agent 발화 끝
     0.93s  agent 발화 시작: 호텔 예약을 도와드릴 수는 있지만, 직접 결제는 고객님께서 진행하셔야 합니다. 괜찮으시겠어요?
     0.93s  user  발화 끝
     0.97s  user  발화 시작: 네, 괜찮아요. 예약해 주세요.
     0.97s  agent 발화 끝
     0.98s  agent 발화 시작: 오션뷰 호텔 일박 예약 진행해 드리겠습니다.
     0.98s  user  발화 끝
     1.00s  agent 발화 끝
