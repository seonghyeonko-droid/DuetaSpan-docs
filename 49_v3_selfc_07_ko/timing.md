# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "은영",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-21",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-09",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-07-28",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     },
#     {
#       "date": "2025-06-07",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-13",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-09-14",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주 토요일에 부산 가는 기차표 예매 좀 해 줘. | S2 흐, 비 오면 어떡하지… | S3 혹시 부산역에 짐 보관할 곳 있어? | S4 거기 예약 좀 해줘. 내일 점심.

     0.00s  user  발화 시작: 이번 주 토요일에 부산 가는 기차표 예매 좀 해 줘.
     3.05s  user  발화 끝
     3.09s  <ret> 발화 (turn1 첫 프레임)
     3.33s  agent 발화 시작: <ret> 이천이십육년 칠월 십일일 서울에서 부산 가는 기차표가 삼만 사천 원부터 있습니다. 괜찮으세요?
     3.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.51s]: (tool result) Trains from Seoul to Busan are available on July 11, 202
    10.84s  agent 발화 끝
    11.27s  user  발화 시작: 음, 제일 빠른 거로 예매해 줘.
    13.00s  <ret> 발화 (turn3 첫 프레임)
    13.23s  agent 발화 시작: <ret> 가장 빠른 케이티엑스 백삼편, 여덟시 출발, 십이A 좌석으로 예매 완료되었습니다. 확인 번호는 칠
    13.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.15s]: (tool result) Fastest train to Busan booked: KTX #103, 08:00 departure
    13.25s  user  발화 끝
    23.39s  user  발화 시작: 혹시 부산역 근처에 괜찮은 호텔 있어?
    23.39s  agent 발화 끝
    25.91s  <ret> 발화 (turn5 첫 프레임)
    26.06s  agent 발화 시작: <ret> 부산역 근처 호텔은 밤에 팔만 원부터 시작하고, 호텔 모닝이 평점이 가장 좋습니다.
    26.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.62s]: (tool result) Hotels near Busan Station start at ₩80,000 per night, wi
    26.11s  user  발화 끝
    32.68s  agent 발화 끝
    32.83s  user  발화 시작: 호텔 모닝 예약해 줘. 내일 밤부터 하루만.
    35.59s  <ret> 발화 (turn7 첫 프레임)
    35.65s  agent 발화 시작: <ret> 호텔 모닝이 이천이십육년 칠월 십이일 하루 동안 예약되었습니다. 스탠다드룸이고, 총 팔만 오천 원
    35.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.85s]: (tool result) Hotel Morning booked for one night, July 12, 2026, stand
    35.69s  user  발화 끝
    46.50s  agent 발화 끝
    47.29s  user  발화 시작: 어, 고마워. —
    48.24s  user  발화 시작: … 혹시 부산 날씨는 어때?
    48.30s  user  발화 끝
    49.73s  <ret> 발화 (turn10 첫 프레임)
    49.84s  user  발화 끝
    49.89s  agent 발화 시작: <ret> 이천이십육년 칠월 십이일 부산 날씨는 섭씨 이십팔 점 오도이고, 습도는 육십팔%이며 비가 올 가능
    49.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.29s]: (tool result) The weather in Busan on July 12, 2026, will be 28.5°C, h
    58.18s  agent 발화 끝
    58.33s  user  발화 시작: 흐, 비 오면 어떡하지…
    59.71s  agent 발화 시작: 비가 오더라도 부산에는 즐길 거리가 많으니 너무 걱정하지 마세요.
    59.80s  user  발화 끝
    63.59s  user  발화 시작: 부산에서 꼭 가봐야 할 곳 추천해 줘.
    63.74s  agent 발화 끝
    65.64s  <ret> 발화 (turn14 첫 프레임)
    65.66s  user  발화 끝
    65.71s  agent 발화 시작: <ret> 부산에서는 감천문화마을, 해운대 해수욕장, 자갈치 시장이 인기 있는 관광 명소입니다.
    65.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.44s]: (tool result) Gamcheon Culture Village, Haeundae Beach, and Jagalchi F
    72.15s  agent 발화 끝
    72.47s  user  발화 시작: 음, 감천문화마을 좋아 보여.
    74.77s  user  발화 끝
    74.90s  agent 발화 시작: 감천문화마을은 사진 찍기 좋은 곳으로 유명해요.
    78.04s  agent 발화 끝
    78.75s  user  발화 시작: 그쪽으로 가는 버스 노선 좀 알려줘.
    80.45s  <ret> 발화 (turn18 첫 프레임)
    80.73s  user  발화 끝
    80.76s  agent 발화 시작: <ret> 부산역에서 감천문화마을까지 가는 버스는 백일번입니다.
    80.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.16s]: (tool result) Bus number 101 from Busan Station goes directly to Gamch
    84.87s  user  발화 시작: 백일번 버스 시간표 좀 보여줘.
    84.92s  agent 발화 끝
    86.26s  <ret> 발화 (turn20 첫 프레임)
    86.52s  user  발화 끝
    86.57s  agent 발화 시작: <ret> 백일번 버스는 여섯시부터 스물두시까지 이십분 간격으로 감천문화마을로 출발합니다.
    86.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.83s]: (tool result) 101 bus schedule to Gamcheon Culture Village: departures
    89.41s  user  발화 시작: 어.
    89.72s  user  발화 끝
    92.26s  agent 발화 시작: 도움이 되어서 기쁩니다.
    92.40s  agent 발화 끝
    93.92s  agent 발화 끝
    94.45s  user  발화 시작: 혹시 부산역에 짐 보관할 곳 있어?
    96.72s  user  발화 끝
    96.93s  <ret> 발화 (turn24 첫 프레임)
    97.00s  agent 발화 시작: <ret> 부산역 지하에 짐 보관 서비스가 있습니다. 스물네시간에 오천 원입니다. 부산역 공식 웹사이트에서 
    97.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.53s]: (tool result) Busan Station offers luggage storage services in the bas
   102.61s  user  발화 시작: 응.
   102.82s  user  발화 끝
   105.53s  agent 발화 끝
   106.04s  user  발화 시작: 오천 원이면 괜찮네.
   107.22s  agent 발화 시작: 가격이 합리적이어서 다행이네요.
   107.32s  user  발화 끝
   108.91s  user  발화 시작: 부산역 근처 맛집도 추천해 줘.
   109.34s  agent 발화 끝
   110.55s  <ret> 발화 (turn29 첫 프레임)
   110.94s  agent 발화 시작: <ret> 부산역 근처에서는 돼지국밥과 밀면이 인기 있는 현지 음식입니다.
   110.95s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.59s]: (tool result) "Dwaeji Gukbap" and "Milmyeon" are popular local dishes 
   110.98s  user  발화 끝
   115.53s  agent 발화 끝
   116.07s  user  발화 시작: 돼지국밥 먹어보고 싶다.
   117.55s  agent 발화 시작: 돼지국밥은 부산의 대표적인 음식 중 하나입니다.
   117.62s  user  발화 끝
   120.97s  agent 발화 끝
   121.03s  user  발화 시작: 돼지국밥 맛집 좀 알려줘.
   122.62s  <ret> 발화 (turn33 첫 프레임)
   122.77s  agent 발화 시작: <ret> 부산역 근처에는 "부산돼지국밥"이라는 평점이 높은 돼지국밥집이 있습니다.
   122.78s  ⚡SPAN 주입 [d'=1.76s / d_lead=5.27s]: (tool result) "Busan Pork Soup Rice" is a highly-rated pork soup rice 
   122.92s  user  발화 끝
   125.38s  user  발화 시작: 응.
   125.73s  user  발화 끝
   128.05s  agent 발화 끝
   128.18s  user  발화 시작: 거기 예약 좀 해줘. 내일 점심.
   130.26s  <ret> 발화 (turn36 첫 프레임)
   130.49s  user  발화 끝
   130.50s  agent 발화 시작: <ret> 이천이십육년 칠월 십이일 점심에 부산돼지국밥을 두 명으로 예약했습니다. 확인 번호는 구 팔 칠 육
   130.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.85s]: (tool result) Busan Pork Soup Rice booked for lunch on July 12, 2026, 
   139.35s  agent 발화 끝
   140.62s  user  발화 시작: 짐은 어디에 맡겨?
   142.04s  user  발화 끝
   142.46s  agent 발화 시작: 부산역 지하에 있는 짐 보관소에 맡기시면 됩니다.
   145.70s  agent 발화 끝
   146.68s  user  발화 시작: 혹시 여행자 보험도 들어야 할까?
   148.75s  user  발화 끝
   149.29s  agent 발화 시작: 여행자 보험은 예상치 못한 상황에 대비할 수 있어서 추천합니다.
   153.30s  user  발화 시작: 여행자 보험 알아봐 줘.
   153.41s  agent 발화 끝
   154.40s  <ret> 발화 (turn42 첫 프레임)
   154.68s  user  발화 끝
   154.80s  agent 발화 시작: <ret> 알리안츠 여행자 보험은 부산 여행에 대한 포괄적인 보장을 제공하며, 이만 원부터 시작합니다. 알리
   154.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.23s]: (tool result) Allianz Travel Insurance offers comprehensive coverage f
   163.95s  user  발화 시작: 알리안츠 보험 알아볼게.
   164.03s  agent 발화 끝
   165.61s  user  발화 끝
   165.63s  agent 발화 시작: 좋은 여행 되시길 바랍니다.
   167.38s  agent 발화 끝
