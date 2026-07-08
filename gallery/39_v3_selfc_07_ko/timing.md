# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 6월 15일에 그랜드뷰 로프트에서 보여주시면 될까요?
     3.40s  <ret> 발화 (turn1 첫 프레임)
     3.56s  agent 발화 시작: <ret> 예약 됐어. 6월 15일 오후 2시에 그랜드뷰 로프트 방문이 확정됐어.
     3.70s  user  발화 끝
     5.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.63s]: (tool result) A viewing at The Grandview Lofts is scheduled for June f
     9.34s  agent 발화 끝
     9.40s  user  발화 시작: 건물에 주차 공간이 있나요?
    11.23s  <ret> 발화 (turn3 첫 프레임)
    11.38s  user  발화 끝
    11.63s  agent 발화 시작: <ret> 미리 물어보는 게 좋지. 그랜드뷰 로프트에는 인접한 차고에서 주차를 검증해 줘.
    13.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.86s]: (tool result) The Grandview Lofts offers validated parking in the adja
    17.22s  user  발화 시작: 애완동물 제한 사항은 어떤가요?
    17.69s  agent 발화 끝
    19.46s  <ret> 발화 (turn5 첫 프레임)
    19.86s  agent 발화 시작: <ret> 많은 건물에 그런 게 있으니 확인하는 게 현명해. 그랜드뷰 로프트에는 25파운드 미만의 고양이와 
    19.89s  user  발화 끝
    21.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.52s]: (tool result) The Grandview Lofts allows cats and small dogs under twe
    28.90s  agent 발화 끝
    29.78s  user  발화 시작: 알아두니 좋네요. 제 테리어가 약 30파운드 정도 되거든요.
    33.51s  <ret> 발화 (turn7 첫 프레임)
    33.75s  agent 발화 시작: <ret> 그럼 검색 조건을 좀 더 좁혀야 할 것 같아… 안타깝게도 그랜드뷰 로프트에는 30파운드짜리 개를 
    33.80s  user  발화 끝
    35.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.54s]: (tool result) No properties match your criteria within The Grandview L
    41.58s  agent 발화 끝
    41.66s  user  발화 시작: 근처에 비슷한 평면도를 가진 다른 건물이 있나요?
    45.24s  agent 발화 시작: —하지만 살펴볼 수 있는 다른 옵션도 있어.
    45.36s  user  발화 끝
    48.29s  agent 발화 끝
    48.60s  user  발화 시작: 특히 침실 2개와 발코니가 있으면 좋겠어요.
    51.98s  user  발화 끝
    52.13s  <ret> 발화 (turn11 첫 프레임)
    52.20s  agent 발화 시작: <ret> 알았어, 근처 건물로 검색 범위를 넓혀 볼게. 아스토리아와 벨베데어에는 침실 2개와 발코니가 있는
    53.57s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.06s]: (tool result) The Astoria and The Belvedere both have two-bedroom unit
    59.76s  user  발화 시작: 아스토리아에 대해 더 자세히 알려주세요.
    59.80s  agent 발화 끝
    61.86s  <ret> 발화 (turn13 첫 프레임)
    62.10s  agent 발화 시작: <ret> 그 건물에 대한 자세한 정보를 알려 줄 수 있어. 아스토리아는 2018년에 지어졌고 입주자를 위한
    62.35s  user  발화 끝
    62.98s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.64s]: (tool result) The Astoria was built in 2018 and has a rooftop terrace.
    70.86s  agent 발화 끝
    71.20s  user  발화 시작: 아스토리아에도 주차 공간이 있나요?
    73.34s  <ret> 발화 (turn15 첫 프레임)
    73.50s  agent 발화 시작: <ret> 주차는 세입자에게 중요한 고려 사항이지. 아스토리아의 발레 파킹은 한 달에 200달러야.
    73.74s  user  발화 끝
    73.84s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.58s]: (tool result) The Astoria offers valet parking for a monthly fee of tw
    79.80s  agent 발화 끝
    80.06s  user  발화 시작: 좀 비싸네요. 벨베데어는 어떻고요?
    82.40s  <ret> 발화 (turn17 첫 프레임)
    82.72s  agent 발화 시작: <ret> 벨베데어의 주차 옵션을 비교해 보자. 벨베데어의 셀프 주차는 한 달에 150달러야.
    82.97s  user  발화 끝
    84.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.14s]: (tool result) The Belvedere has self-parking available for one hundred
    88.41s  agent 발화 끝
    88.69s  user  발화 시작: 그게 더 나은 것 같아요. 다음 화요일에 거기 방문 예약을 할 수 있을까요?
    93.01s  <ret> 발화 (turn19 첫 프레임)
    93.25s  agent 발화 시작: <ret> 다음 화요일 방문 가능 여부를 확인해 볼게. 다음 화요일 오전 11시에 벨베데어 방문이 확정됐어.
    93.50s  user  발화 끝
    94.85s  ⚡SPAN 주입 [d'=1.84s / d_lead=4.59s]: (tool result) A viewing at The Belvedere is scheduled for next Tuesday
   100.32s  user  발화 시작: 좋아요. 방문 전날 알림을 보내주세요.
   100.38s  agent 발화 끝
   103.27s  <ret> 발화 (turn21 첫 프레임)
   103.43s  agent 발화 시작: <ret> 그래, 지금 바로 설정해 줄게. 다음 월요일 오후 6시에 벨베데어 방문 알림을 설정했어.
   103.54s  user  발화 끝
   105.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.17s]: (tool result) A reminder for your Belvedere viewing is set for next Mo
   110.89s  agent 발화 끝
