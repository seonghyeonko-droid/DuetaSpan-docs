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

# EXAMINER(FDB-v2) 단계: S1 주니 카페 가격대는 어떻게 돼요? | S2 시간당 십달러면, 두시간 주차하면 이십달러네요. | S3 아, 오늘 저녁은 안 되는군요. 그럼 내일 저녁은 어때요? | S4 정말 감사합니다.

     0.00s  user  발화 시작: 주니 카페 가격대는 어떻게 돼요?
     1.66s  <ret> 발화 (turn1 첫 프레임)
     1.97s  agent 발화 시작: <ret> 주니 카페의 가격대는 삼십달러에서 육십달러 사이입니다.
     2.08s  user  발화 끝
     3.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.55s]: (tool result) price_range: "$30 - $60"
     5.52s  agent 발화 끝
     5.96s  user  발화 시작: 아, 그렇군요. 거기 주차는 가능한가요?
     8.64s  <ret> 발화 (turn3 첫 프레임)
     8.69s  user  발화 끝
     8.95s  agent 발화 시작: <ret> 주차 가능 여부도 알아봐 드릴게요.
     9.60s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.12s]: (tool result) parking: "Valet parking available"
    10.93s  agent 발화 시작: 주니 카페에는 발레 파킹이 가능합니다.
    11.08s  agent 발화 끝
    13.50s  user  발화 시작: 발레 파킹이요? 비용은 얼마예요?
    13.70s  agent 발화 끝
    15.37s  <ret> 발화 (turn6 첫 프레임)
    15.38s  user  발화 끝
    15.45s  agent 발화 시작: <ret> 발레 파킹 비용을 확인해 보겠습니다.
    17.27s  agent 발화 시작: 발레 파킹은 시간당 십달러입니다.
    17.29s  ⚡SPAN 주입 [d'=1.92s / d_lead=1.93s]: (tool result) valet_parking_cost: "$10 per hour"
    17.37s  agent 발화 끝
    19.77s  user  발화 시작: 시간당 십달러면, 두시간 주차하면 이십달러네요.
    19.85s  agent 발화 끝
    23.36s  agent 발화 시작: 맞습니다. 두시간 주차하시면 이십달러가 되겠네요.
    23.52s  user  발화 끝
    24.52s  user  발화 시작: 그렇군요.
    25.35s  user  발화 끝
    26.50s  <ret> 발화 (turn11 첫 프레임)
    26.65s  agent 발화 시작: <ret> 주니 카페는 예약도 가능한가요? 예약하려면 어떻게 해야 할까요?
    26.92s  agent 발화 끝
    27.46s  ⚡SPAN 주입 [d'=0.96s / d_lead=4.02s]: (tool result) reservations: "Reservations accepted via phone or online
    30.53s  agent 발화 시작: 전화나 온라인으로 예약하실 수 있습니다.
    30.67s  agent 발화 끝
    33.12s  agent 발화 끝
    33.47s  user  발화 시작: 전화번호가 어떻게 돼요?
    34.84s  <ret> 발화 (turn14 첫 프레임)
    34.91s  agent 발화 시작: <ret> 주니 카페의 전화번호는 사 일 오 칠 칠 오 팔 오 공 칠입니다.
    34.94s  user  발화 끝
    36.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.61s]: (tool result) phone_number: "415-775-8507"
    38.49s  agent 발화 시작: 전화번호는 사 일 오 칠 칠 오 팔 오 공 칠입니다.
    38.52s  agent 발화 끝
    42.01s  agent 발화 끝
    42.42s  user  발화 시작: 혹시 지금 전화해서 예약하려고 하는데, 자리가 있을까요?
    45.88s  <ret> 발화 (turn17 첫 프레임)
    45.95s  agent 발화 시작: <ret> 잠시만 기다려 주세요.
    46.02s  user  발화 끝
    46.91s  ⚡SPAN 주입 [d'=1.04s / d_lead=1.52s]: (tool result) availability: "Currently fully booked for tonight"
    47.28s  agent 발화 시작: 오늘 저녁은 예약이 다 찼습니다. —
    47.46s  agent 발화 끝
    49.01s  user  발화 시작: 아, 오늘 저녁은 안 되는군요. 그럼 내일 저녁은 어때요?
    49.68s  agent 발화 끝
    52.44s  <ret> 발화 (turn20 첫 프레임)
    52.62s  user  발화 끝
    52.67s  agent 발화 시작: <ret> 내일 저녁 예약 가능 여부를 확인해 보겠습니다.
    54.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.38s]: (tool result) availability: "Limited availability for tomorrow evening
    55.93s  agent 발화 시작: 내일 저녁은 자리가 몇 개 남았습니다.
    56.05s  agent 발화 끝
    56.77s  user  발화 시작: 그렇죠.
    57.27s  user  발화 끝
    58.29s  user  발화 시작: 몇 시에 자리가 있나요?
    58.52s  agent 발화 끝
    59.55s  <ret> 발화 (turn24 첫 프레임)
    59.71s  agent 발화 시작: <ret> 가능한 시간대를 알려드릴게요.
    59.71s  user  발화 끝
    60.75s  ⚡SPAN 주입 [d'=1.20s / d_lead=1.66s]: (tool result) available_times: "7:00 PM, 8:30 PM"
    61.26s  agent 발화 시작: 일곱시와 여덟시 삼십분에 자리가 있습니다.
    61.36s  agent 발화 끝
    63.56s  agent 발화 끝
    64.52s  user  발화 시작: 일곱시로 예약해 주세요. 두명입니다.
    67.90s  <ret> 발화 (turn27 첫 프레임)
    68.05s  agent 발화 시작: <ret> 네, 일곱시에 두명으로 예약 진행해 드릴게요.
    68.22s  user  발화 끝
    69.26s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.58s]: (tool result) reservation_confirmation: "Reservation confirmed for 2 p
    70.63s  agent 발화 끝
    70.71s  agent 발화 시작: 내일 일곱시에 두명으로 예약이 확정되었습니다.
    73.67s  user  발화 시작: 정말 감사합니다.
    73.86s  agent 발화 끝
    74.96s  user  발화 끝
    75.36s  agent 발화 시작: 천만에요. 혹시 주니 카페 주변에 다른 맛집도 추천해 드릴까요?
    77.48s  user  발화 시작: 네.
    77.79s  user  발화 끝
    80.03s  agent 발화 끝
    80.31s  user  발화 시작: 주변에 좋은 이탈리안 레스토랑이 있을까요?
    82.52s  <ret> 발화 (turn33 첫 프레임)
    82.91s  agent 발화 시작: <ret> 주변 이탈리안 레스토랑을 찾아볼게요.
    83.17s  user  발화 끝
    83.48s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.54s]: (tool result) nearby_italian_restaurants: "Sotto Mare, Tony's Pizza Na
    85.33s  agent 발화 시작: 소토 마레와 토니의 피자 나폴레타나가 주변에 있습니다.
    85.45s  agent 발화 끝
    86.50s  user  발화 시작: 네네.
    86.95s  user  발화 끝
    88.42s  user  발화 시작: 토니의 피자 나폴레타나가 맛있다고 들었는데, 거기는 예약이 필요한가요?
    88.48s  agent 발화 끝
    92.90s  <ret> 발화 (turn37 첫 프레임)
    92.97s  agent 발화 시작: <ret> 토니의 피자 나폴레타나의 예약 가능 여부를 확인해 보겠습니다.
    93.10s  user  발화 끝
    94.50s  ⚡SPAN 주입 [d'=1.60s / d_lead=4.02s]: (tool result) reservations_tonys: "Reservations highly recommended"
    96.92s  agent 발화 시작: 토니의 피자 나폴레타나는 예약하시는 게 좋습니다.
    96.99s  agent 발화 끝
   100.16s  agent 발화 끝
