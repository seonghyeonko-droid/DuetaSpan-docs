# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "가린",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-04-09",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in August."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-02-23",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-30",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-02-19",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 에펠탑이 얼마나 높은 곳에 있는지 궁금해요. | S2 맞아요. 저는 주말에 남산타워 근처 카페에 가려고 하는데, 혹 | S3 아니요, 괜찮아요. 직접 갈게요. 그런데… | S4 꽤 덥겠네요.

     0.00s  user  발화 시작: 에펠탑이 얼마나 높은 곳에 있는지 궁금해요.
     2.86s  <ret> 발화 (turn1 첫 프레임)
     2.97s  agent 발화 시작: <ret> 에펠탑은 안테나를 포함해서 삼백삼십미터, 약 천 팔십삼피트 높이에 위치하고 있어요. 파리 프랑스에
     2.97s  user  발화 끝
     3.63s  ⚡SPAN 주입 [d'=0.77s / d_lead=6.44s]: (tool result) The Eiffel Tower is 330 meters (1,083 ft) tall, includin
     9.42s  user  발화 시작: 네네.
     9.42s  agent 발화 끝
     9.91s  user  발화 시작: 와, 엄청 높네요!
     9.91s  user  발화 끝
    11.40s  agent 발화 시작: 그렇죠? 파리의 랜드마크잖아요. 혹시 다른 곳의 높이도 궁금하신가요?
    11.40s  user  발화 끝
    15.36s  user  발화 시작: 음… 그럼 서울 남산타워 높이는 어때요?
    15.36s  agent 발화 끝
    18.20s  <ret> 발화 (turn6 첫 프레임)
    18.34s  agent 발화 시작: <ret> 서울 남산타워는 이백삼십육 점 칠미터, 약 칠백칠십칠피트 높이로 서울에 자리 잡고 있습니다.
    18.34s  user  발화 끝
    18.59s  ⚡SPAN 주입 [d'=0.39s / d_lead=5.95s]: (tool result) N Seoul Tower is 236.7 meters (777 ft) tall and is locat
    24.28s  user  발화 시작: 음.
    24.28s  agent 발화 끝
    24.78s  agent 발화 시작: 남산타워는 서울 시내를 한눈에 볼 수 있어서 정말 멋진 곳이죠. 날씨가 좋은 날 가면 더 예뻐요.
    24.78s  user  발화 끝
    32.71s  user  발화 시작: 맞아요. 저는 주말에 남산타워 근처 카페에 가려고 하는데, 혹시 괜찮은 곳 있을까요?
    32.71s  agent 발화 끝
    38.47s  <ret> 발화 (turn10 첫 프레임)
    38.66s  agent 발화 시작: <ret> 남산타워 근처 카페는 카페 몽마르트랑 테라스 카페가 괜찮아요. 카페 몽마르트는 별점 사 점 이점,
    38.66s  user  발화 끝
    39.39s  ⚡SPAN 주입 [d'=0.92s / d_lead=8.92s]: (tool result) Restaurants found: Cafe Montmartre (4.2 stars, 120 revie
    47.58s  user  발화 시작: 네.
    47.58s  agent 발화 끝
    48.07s  user  발화 시작: 카페 몽마르트가 더 좋겠네요.
    48.07s  user  발화 끝
    50.06s  agent 발화 시작: 좋은 선택이에요. 전망도 좋고 커피도 맛있다고 하더라고요. 혹시 예약해 드릴까요?
    50.06s  user  발화 끝
    55.01s  user  발화 시작: 음.
    55.01s  agent 발화 끝
    55.51s  user  발화 시작: 아니요, 괜찮아요. 직접 갈게요. 그런데…
    55.51s  user  발화 끝
    57.98s  user  발화 시작: …혹시 내일 날씨는 어때요?
    57.98s  user  발화 끝
    59.76s  <ret> 발화 (turn17 첫 프레임)
    59.97s  agent 발화 시작: <ret> 내일 서울 날씨는 이십팔도, 습도 육십오퍼센트, 바람은 시속 삼 점 이킬로미터, 구름이 조금 낄 
    59.97s  user  발화 끝
    60.50s  ⚡SPAN 주입 [d'=0.74s / d_lead=7.43s]: (tool result) Tomorrow's weather in Seoul: 28.0°C, humidity 65%, wind 
    67.40s  user  발화 시작: 음.
    67.40s  agent 발화 끝
    67.90s  user  발화 시작: 꽤 덥겠네요.
    67.90s  user  발화 끝
    68.89s  agent 발화 시작: 네, 조금 더울 수 있으니 시원한 옷차림을 하시는 게 좋겠어요. 혹시 모자나 선글라스도 챙기시는 게 좋을 것
    68.89s  user  발화 끝
    77.81s  user  발화 시작: 아, 그러네요. 알려주셔서 감사합니다.
    77.81s  agent 발화 끝
    79.79s  agent 발화 시작: 천만에요. 편안한 주말 보내세요!
    79.79s  user  발화 끝
    81.77s  agent 발화 끝
