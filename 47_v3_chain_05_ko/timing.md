# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "유우",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-08-02",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-07-22",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-05",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-15",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 주니 카페의 가격대는 어떻게 돼요? | S2 라 타볼라가 더 평점이 높네요. 라 타볼라의 전화번호 좀 알려 | S3 서울역 공영 주차장이 더 가깝네요. | S4 네, 감사합니다.

     0.00s  user  발화 시작: 주니 카페의 가격대는 어떻게 돼요?
     1.86s  <ret> 발화 (turn1 첫 프레임)
     2.17s  agent 발화 시작: <ret> 주니 카페에 대해 알아보고 있습니다. 주니 카페는 가격대가 비싼 편이에요.
     2.25s  user  발화 끝
     3.46s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.66s]: (tool result) name:Zuni Cafe, rating:4.1, price_range:expensive, addre
     4.06s  user  발화 시작: 네네.
     4.55s  user  발화 끝
     7.49s  agent 발화 끝
     7.79s  user  발화 시작: 아, 그렇군요. 그럼 Zuni Cafe의 영업시간은 어떻게 되나요?
    11.67s  <ret> 발화 (turn4 첫 프레임)
    11.81s  user  발화 끝
    11.98s  agent 발화 시작: <ret> 주니 카페의 영업시간을 확인해 드릴게요. 주니 카페는 월요일부터 일요일까지 저녁 다섯 시 반부터 
    12.71s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.42s]: (tool result) name:Zuni Cafe, hours:Monday 5:30 PM – 10 PM, Tuesday 5:
    18.69s  user  발화 시작: 와, 늦게까지 하네요. 주니 카페까지 가는 가장 빠른 길은 어떻게 되나요? 지금 제 위치는 서울역입니다.
    18.74s  agent 발화 끝
    25.11s  <ret> 발화 (turn6 첫 프레임)
    25.34s  agent 발화 시작: <ret> 서울역에서 주니 카페까지 가는 길을 찾아볼게요. 서울역에서 주니 카페까지는 약 천삼백십삼 시간 삼
    25.45s  user  발화 끝
    26.47s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.27s]: (tool result) origin:Seoul Station, destination:Zuni Cafe, distance:68
    29.03s  user  발화 시작: 그렇죠.
    29.48s  user  발화 끝
    35.16s  agent 발화 끝
    35.89s  user  발화 시작: 천삼백 시간?! 너무 멀군요. 다른 맛집을 찾아볼까요? 근처에 평점 높은 이탈리안 식당은 어디가 있나요?
    42.58s  <ret> 발화 (turn9 첫 프레임)
    42.89s  agent 발화 시작: <ret> 서울역 근처 이탈리안 식당을 찾아볼게요. 서울역 근처에는 라 타볼라와 벨라지오가 평점 사점 이상인
    42.93s  user  발화 끝
    44.18s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.88s]: (tool result) restaurants:[{name:La Tavola, rating:4.2, address:17, To
    46.92s  user  발화 시작: 정말요?
    47.74s  user  발화 끝
    51.70s  user  발화 시작: 라 타볼라가 더 평점이 높네요. 라 타볼라의 전화번호 좀 알려주세요.
    52.11s  agent 발화 끝
    55.86s  user  발화 끝
    55.96s  <ret> 발화 (turn12 첫 프레임)
    56.03s  agent 발화 시작: <ret> 라 타볼라의 전화번호를 찾아볼게요. 라 타볼라의 전화번호는 공 이 칠 칠 육 오 팔 팔 오입니다.
    56.92s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.02s]: (tool result) name:La Tavola, phone_number:+82 2-776-5885, address:17,
    63.62s  user  발화 시작: 감사합니다. 혹시 라 타볼라에 예약할 수 있을까요?
    64.10s  agent 발화 끝
    66.30s  <ret> 발화 (turn14 첫 프레임)
    66.68s  agent 발화 시작: <ret> 라 타볼라에 예약을 시도해 볼게요. 네, 라 타볼라에 오늘 저녁 일곱 시에 두 명으로 예약이 확정
    66.76s  user  발화 끝
    67.58s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.24s]: (tool result) reservation_id:RT12345, restaurant_name:La Tavola, date:
    70.85s  user  발화 시작: 음.
    71.07s  user  발화 끝
    75.21s  agent 발화 끝
    76.28s  user  발화 시작: 와, 정말 고맙습니다!
    78.07s  user  발화 끝
    78.16s  agent 발화 시작: 예약 확인 문자도 보내드릴까요?
    80.18s  agent 발화 끝
    80.25s  user  발화 시작: 아니, 괜찮아요. 혹시 라 타볼라 근처에 주차장이 있나요?
    84.79s  user  발화 끝
    84.90s  agent 발화 시작: 라 타볼라 근처 주차장을 알아보고 있습니다—
    87.40s  <ret> 발화 (turn20 첫 프레임)
    87.63s  agent 발화 시작: <ret> 라 타볼라 근처에는 서울역 공영 주차장과 롯데마트 서울역 주차장이 있습니다. 시간당 요금은 각각 
    87.81s  agent 발화 끝
    88.44s  ⚡SPAN 주입 [d'=1.04s / d_lead=8.39s]: (tool result) parking:[{name:Seoul Station Public Parking Lot, distanc
    95.89s  user  발화 시작: 서울역 공영 주차장이 더 가깝네요.
    96.02s  agent 발화 끝
    98.19s  user  발화 끝
    98.55s  agent 발화 시작: 네, 서울역 공영 주차장이 조금 더 가깝습니다. 혹시 다른 정보가 더 필요하신가요?
   104.48s  user  발화 시작: 아니요, 괜찮습니다.
   104.71s  agent 발화 끝
   105.69s  agent 발화 시작: 즐거운 식사 되세요!
   105.96s  user  발화 끝
   107.21s  agent 발화 끝
   107.76s  user  발화 시작: 네, 감사합니다.
   108.86s  agent 발화 시작: 혹시 식사 후에 근처에서 커피를 마실 곳도 알아드릴까요?
   108.90s  user  발화 끝
   112.42s  agent 발화 끝
   112.96s  user  발화 시작: 음… 괜찮아요. 그냥 집에 갈 것 같아요.
   115.53s  agent 발화 시작: 알겠습니다. 안전하게 귀가하세요.
   115.69s  user  발화 끝
   117.56s  user  발화 시작: 네, 감사합니다.
   117.83s  agent 발화 끝
   118.71s  user  발화 끝
   118.90s  agent 발화 시작: 혹시 내일 아침에 기상 알람을 설정해 드릴까요?
   120.43s  user  발화 시작: 네.
   120.92s  user  발화 끝
   122.04s  agent 발화 끝
   122.11s  user  발화 시작: 아, 좋아요. 내일 아침 일곱시에 맞춰주세요.
   124.87s  <ret> 발화 (turn33 첫 프레임)
   125.01s  user  발화 끝
   125.02s  agent 발화 시작: <ret> 내일 아침 일곱 시에 알람을 설정해 드릴게요. 네, 내일 아침 일곱 시에 알람이 설정되었습니다. 
   126.71s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.20s]: (tool result) alarm_id:ALM67890, time:07:00, date:2024-01-27, status:s
   130.70s  user  발화 시작: 네.
   131.05s  user  발화 끝
   132.78s  user  발화 시작: 알겠습니다. 정말 감사합니다.
   132.80s  agent 발화 끝
   134.85s  user  발화 끝
   135.16s  agent 발화 시작: 편안한 밤 보내세요.
   136.58s  agent 발화 끝
