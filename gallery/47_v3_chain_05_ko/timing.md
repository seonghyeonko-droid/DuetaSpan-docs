# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "유우",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-03-27",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-06-16",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     },
#     {
#       "date": "2025-06-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-07",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-01-05",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Zuni Cafe 가격대는 어떻게 돼요? | S2 아, 잠깐만요— | S3 I-이백팔십 N으로 가요. 내비게이션 시작해 주세요. | S4 Zeitgeist까지 가는 길은 어떻게 되나요?

     0.00s  user  발화 시작: Zuni Cafe 가격대는 어떻게 돼요?
     1.76s  <ret> 발화 (turn1 첫 프레임)
     1.99s  user  발화 끝
     2.07s  agent 발화 시작: <ret> Zuni Cafe의 가격대는… 상당히 높은 편이에요. 달러로 세 개 정도의 표시가 되어 있네요.
     3.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.03s]: (tool result) "$$$"
     4.19s  user  발화 시작: 네네.
     4.88s  user  발화 끝
     8.10s  agent 발화 끝
     8.12s  user  발화 시작: 아, 비싸군요. 그럼 비슷한 분위기인데 좀 더 저렴한 곳은 없을까요?
    12.60s  <ret> 발화 (turn4 첫 프레임)
    12.91s  agent 발화 시작: <ret> 비슷한 분위기에 좀 더 저렴한 곳으로는 Foreign Cinema, Park Tavern, 그리고
    13.03s  user  발화 끝
    14.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.27s]: (tool result) "Foreign Cinema ($$) - Mediterranean, Californian, Moroc
    22.18s  agent 발화 끝
    23.00s  user  발화 시작: Foreign Cinema가 제일 끌리는데요, 거기는 예약이 가능한가요?
    26.43s  <ret> 발화 (turn6 첫 프레임)
    26.65s  user  발화 끝
    26.66s  agent 발화 시작: <ret> Foreign Cinema는 오늘 저녁 일곱시, 일곱시 십오분, 일곱시 삼십분에 예약이 가능합니다
    28.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.40s]: (tool result) "Available at 19:00, 19:15, 19:30"
    29.04s  user  발화 시작: 네.
    29.72s  user  발화 끝
    33.06s  agent 발화 끝
    33.43s  user  발화 시작: 그럼 일곱시 십오분으로 예약해 주세요.
    35.95s  <ret> 발화 (turn9 첫 프레임)
    36.20s  user  발화 끝
    36.27s  agent 발화 시작: <ret> Foreign Cinema에 오늘 저녁 일곱시 십오분에 두 명으로 예약이 완료되었습니다. 확인 번
    37.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.02s]: (tool result) "Reservation confirmed for 2 people at 19:15 today. Conf
    41.41s  user  발화 시작: 정말요?
    42.05s  user  발화 끝
    44.15s  user  발화 시작: 팔 이 칠 사 구번이요, 알겠습니다.
    44.29s  agent 발화 끝
    47.24s  user  발화 끝
    47.30s  agent 발화 시작: 예약 확인 문자 메시지를 보내드릴까요? 전화번호를 알려주시면 됩니다.
    49.97s  user  발화 시작: 네.
    50.42s  user  발화 끝
    51.97s  agent 발화 끝
    53.34s  user  발화 시작: 아, 잠깐만요—
    54.67s  user  발화 끝
    54.71s  user  발화 시작: …혹시 Foreign Cinema 근처에 주차는 어떻게 해야 하나요?
    57.51s  <ret> 발화 (turn16 첫 프레임)
    57.83s  agent 발화 시작: <ret> Foreign Cinema 주변에는 미터 주차장이 있고, 이천오백이십사 Mission St에 공영
    57.85s  user  발화 끝
    59.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.90s]: (tool result) "Metered street parking available. Public garage at 2524
    66.29s  user  발화 시작: 공영 주차장이 더 편하겠네요.
    66.73s  agent 발화 끝
    68.36s  user  발화 끝
    68.90s  agent 발화 시작: 네, 공영 주차장이 좀 더 편리할 수 있겠어요. 주차 공간 확보에 대한 걱정을 덜 수 있겠죠.
    74.97s  agent 발화 끝
    75.51s  user  발화 시작: Foreign Cinema까지 가는 가장 빠른 길은 어떻게 되나요? 지금 출발하면 얼마나 걸릴까요?
    80.88s  <ret> 발화 (turn20 첫 프레임)
    81.25s  user  발화 끝
    81.27s  agent 발화 시작: <ret> 지금 출발하시면 십팔분 정도 걸리고, 육 점 이마일 거리입니다. I-이백팔십 N을 이용하는 경로로
    82.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.56s]: (tool result) "Estimated travel time: 18 minutes. Distance: 6.2 miles.
    88.83s  agent 발화 끝
    89.27s  user  발화 시작: I-이백팔십 N으로 가요. 내비게이션 시작해 주세요.
    93.09s  <ret> 발화 (turn22 첫 프레임)
    93.30s  user  발화 끝
    93.33s  agent 발화 시작: <ret> Foreign Cinema로 가는 내비게이션을 시작했습니다. 안전 운전하세요.
    95.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.00s]: (tool result) "Navigation started to Foreign Cinema."
    98.33s  agent 발화 끝
    98.64s  user  발화 시작: 감사합니다.
    99.45s  user  발화 끝
    99.95s  agent 발화 시작: 천만에요. 즐거운 저녁 식사 되세요.
   103.33s  agent 발화 끝
   103.48s  user  발화 시작: 식사 후에 근처에 좋은 바가 있을까요?
   106.29s  <ret> 발화 (turn26 첫 프레임)
   106.39s  user  발화 끝
   106.44s  agent 발화 시작: <ret> 식사 후에 방문하기 좋은 바로는 El Rio, The Chapel, 그리고 Zeitgeist가 있
   108.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.78s]: (tool result) "El Rio ($) - Dive bar, Latin music…", "The Chapel ($$) 
   110.48s  user  발화 시작: 네.
   110.88s  user  발화 끝
   114.04s  user  발화 시작: Zeitgeist가 분위기가 좋아 보이네요.
   114.22s  agent 발화 끝
   116.62s  user  발화 끝
   116.75s  agent 발화 시작: Zeitgeist는 맥주 정원으로 유명하고, 활기찬 분위기를 자랑합니다.
   119.06s  user  발화 시작: 그렇죠.
   119.70s  user  발화 끝
   121.47s  user  발화 시작: Zeitgeist까지 가는 길은 어떻게 되나요?
   121.61s  agent 발화 끝
   124.28s  <ret> 발화 (turn32 첫 프레임)
   124.50s  agent 발화 시작: <ret> Zeitgeist까지는 칠분 정도 걸리고, 일 점 오마일 거리입니다. Mission St를 이용하
   124.51s  user  발화 끝
   126.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.77s]: (tool result) "Estimated travel time: 7 minutes. Distance: 1.5 miles. 
   131.25s  user  발화 시작: 알겠습니다.
   131.27s  agent 발화 끝
   132.21s  user  발화 끝
   132.44s  agent 발화 시작: 혹시 Zeitgeist의 영업시간을 알아드릴까요?
   135.50s  agent 발화 끝
   135.51s  user  발화 시작: 네, 알려주세요.
   136.33s  <ret> 발화 (turn36 첫 프레임)
   136.72s  agent 발화 시작: <ret> Zeitgeist는 새벽 두시까지 영업합니다. 늦은 시간까지 즐기실 수 있겠네요.
   136.79s  user  발화 끝
   137.85s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.46s]: (tool result) "Open until 2:00 AM"
   142.18s  agent 발화 끝
   142.75s  user  발화 시작: 늦게까지 하네요. 정말 좋네요.
   145.01s  user  발화 끝
   145.24s  agent 발화 시작: 네, 늦게까지 운영해서 여유롭게 시간을 보내실 수 있을 거예요.
   149.64s  agent 발화 끝
