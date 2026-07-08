# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안녕하세요. 주니 카페의 가격대는 어떻게 되나요?
     2.46s  <ret> 발화 (turn1 첫 프레임)
     2.85s  agent 발화 시작: <ret> 네, 그 유명한 식당에 대한 정보를 빠르게 확인해 볼게요. 주니 카페는 가격대가 높은 편이고, 메
     3.00s  user  발화 끝
     4.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.68s]: (tool result) Zuni Cafe’s price range is listed as dollar signs three 
    12.22s  agent 발화 끝
    12.29s  user  발화 시작: 알겠습니다, 좋네요. 지금은 영업하고 있나요?
    14.95s  <ret> 발화 (turn3 첫 프레임)
    15.03s  agent 발화 시작: <ret> 네, 영업시간을 확인해 드릴 수 있습니다. 주니 카페는 지금 영업 중이고, 오늘 저녁 10시까지 
    15.19s  user  발화 끝
    16.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.13s]: (tool result) Zuni Cafe is currently open until ten PM.
    22.65s  user  발화 시작: 잘 됐네요. 저녁 7시 30분에 두 명 자리를 예약해 주시겠어요?
    22.72s  agent 발화 끝
    26.41s  <ret> 발화 (turn5 첫 프레임)
    26.49s  agent 발화 시작: <ret> 예약 가능 여부를 확인해 드리겠습니다. 네, 오늘 저녁 7시 30분에 두 명 자리가 있습니다.
    26.68s  user  발화 끝
    27.93s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.65s]: (tool result) A table for two at Zuni Cafe is available at seven thirt
    33.72s  agent 발화 끝
    33.96s  user  발화 시작: 정말 다행이네요! 주소는 다시 한번 알려주시겠어요?
    36.84s  <ret> 발화 (turn7 첫 프레임)
    37.15s  agent 발화 시작: <ret> 전에 잠깐 말씀드렸던 것 같은데, 다시 한번 확인해 드리겠습니다. 주니 카페는 샌프란시스코 마켓 
    37.33s  user  발화 끝
    37.34s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.75s]: (tool result) Zuni Cafe is located at 1658 Market Street, San Francisc
    45.59s  agent 발화 끝
    46.41s  user  발화 시작: 주차는 어디에 할 수 있나요?
    47.68s  <ret> 발화 (turn9 첫 프레임)
    48.00s  agent 발화 시작: <ret> 그 지역은 주차하기가 어려울 수 있으니, 잠시만요— 식당에서 쿼터 마일 이내에 주차장이 세 곳 있
    48.07s  user  발화 끝
    49.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.82s]: (tool result) There are three parking garages within a quarter mile of
    54.58s  agent 발화 끝
    55.39s  user  발화 시작: 가장 가까운 곳은 어디인가요?
    57.13s  <ret> 발화 (turn11 첫 프레임)
    57.28s  agent 발화 시작: <ret> 주니 카페에서 가장 가까운 주차장을 바로 찾아보겠습니다. 시빅 센터 주차장이 가장 가깝고, 주니 
    57.37s  user  발화 끝
    59.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.74s]: (tool result) The closest garage is the Civic Center Garage, point-one
    66.83s  agent 발화 끝
    67.43s  user  발화 시작: 요금은 얼마인가요?
    68.47s  <ret> 발화 (turn13 첫 프레임)
    68.70s  agent 발화 시작: <ret> 시빅 센터 주차장의 시간당 요금을 확인해 보겠습니다— 시빅 센터 주차장의 시간당 요금은 8달러입니
    68.80s  user  발화 끝
    70.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.16s]: (tool result) Civic Center Garage charges eight dollars per hour.
    75.96s  user  발화 시작: 꽤 비싸네요. 더 저렴한 곳이 있나요?
    75.98s  agent 발화 끝
    78.06s  <ret> 발화 (turn15 첫 프레임)
    78.28s  agent 발화 시작: <ret> 주변에 더 저렴한 주차장을 찾아볼 수 있습니다— 헤이스 밸리 주차장은 시간당 5달러에 주차할 수 
    78.49s  user  발화 끝
    80.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.22s]: (tool result) The Hayes Valley Garage charges five dollars per hour.
    85.23s  user  발화 시작: 그게 더 좋겠네요. 거기는 얼마나 떨어져 있나요?
    85.32s  agent 발화 끝
    87.81s  <ret> 발화 (turn17 첫 프레임)
    87.97s  agent 발화 시작: <ret> 헤이스 밸리 주차장까지의 거리를 확인해 드리겠습니다— 주니 카페에서 헤이스 밸리 주차장까지는 0.
    88.19s  user  발화 끝
    89.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.60s]: (tool result) Hayes Valley Garage is point-three miles from Zuni Cafe.
    95.56s  agent 발화 끝
    95.60s  user  발화 시작: 아, 그러고 보니, 주니 카페는 강아지 동반이 가능한가요?
    98.82s  <ret> 발화 (turn19 첫 프레임)
    99.21s  agent 발화 시작: <ret> 그 점을 고려하시는 게 좋겠네요— 안타깝게도 주니 카페는 식당 내부에 강아지를 허용하지 않습니다.
    99.39s  user  발화 끝
   100.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.36s]: (tool result) Zuni Cafe does not allow dogs inside.
   105.46s  agent 발화 끝
   106.27s  user  발화 시작: 아, 아쉽네요. 그럼 예약을 취소해주세요.
   108.69s  <ret> 발화 (turn21 첫 프레임)
   108.93s  agent 발화 시작: <ret> 예약을 바로 취소해 드리겠습니다. 예약이 취소되었고, 확인 메시지를 보내드렸습니다.
   109.18s  user  발화 끝
   110.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.83s]: (tool result) Your reservation for two at Zuni Cafe has been cancelled
   114.59s  user  발화 시작: 감사합니다. 비슷한 가격대의 강아지 동반이 가능한 식당을 찾아주시겠어요?
   114.76s  agent 발화 끝
   119.11s  <ret> 발화 (turn23 첫 프레임)
   119.19s  agent 발화 시작: <ret> 강아지 동반이 가능한 식당을 찾아보겠습니다— 포린 시네마는 강아지를 환영하며, 주니 카페와 비슷한
   119.32s  user  발화 끝
   121.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.56s]: (tool result) Foreign Cinema is dog-friendly and priced at dollar sign
   126.60s  agent 발화 끝
