# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 6월 15일에 그랜드뷰 로프트에서 보여주시면 될까요?
     3.81s  <ret> 발화 (turn1 첫 프레임)
     3.97s  agent 발화 시작: <ret> 응, 예약됐어. 6월 15일 오후 2시에 보여주는 걸로 해 놨어.
     4.12s  user  발화 끝
     5.09s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.11s]: (tool result) A viewing at The Grandview Lofts is scheduled for June f
     8.41s  agent 발화 끝
     8.50s  user  발화 시작: 그랜드뷰 로프트 가는 길을 알려 주실 수 있나요?
    11.55s  <ret> 발화 (turn3 첫 프레임)
    11.88s  user  발화 끝
    11.95s  agent 발화 시작: <ret> 네, 알려 드릴 수 있어. 북쪽으로 메인 스트리트를 가고, 엘름 애비뉴에서 왼쪽으로 꺾으면 돼.
    13.23s  ⚡SPAN 주입 [d'=1.68s / d_lead=2.80s]: (tool result) Directions to The Grandview Lofts are: Head north on Mai
    17.05s  user  발화 시작: 그렇게 간단한가 보네요. 주차는 가능한가요?
    17.55s  agent 발화 끝
    20.01s  user  발화 끝
    20.29s  agent 발화 시작: 그쪽은 주차하기 좀 어려운데, 그랜드뷰 로프트에는 주차장이 있어.
    25.20s  agent 발화 끝
    26.23s  user  발화 시작: …그리고 주차장이 덮여 있는 건가요, 아니면 그냥 밖으로 되어 있나요?
    30.95s  user  발화 끝
    30.95s  agent 발화 시작: 좋은 질문인데—
    31.75s  user  발화 시작: 덮여 있는 건가요, 아니면 그냥 밖으로 되어 있나요?
    32.23s  agent 발화 끝
    34.73s  agent 발화 시작: 그랜드뷰 로프트 주차장은 덮여 있는 주차장이야.
    34.84s  user  발화 끝
    37.69s  agent 발화 끝
    37.69s  user  발화 시작: 좋네요. 지금 여기서 가는 가장 빠른 길은 뭔가요?
    40.53s  <ret> 발화 (turn11 첫 프레임)
    40.85s  agent 발화 시작: <ret> 지금 교통 상황을 확인해 볼게. 가장 빠른 길은 오크 스트리트를 이용하는 거고, 약 12분 정도 
    41.02s  user  발화 끝
    42.29s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.20s]: (tool result) The fastest route to The Grandview Lofts is via Oak Stre
    48.17s  agent 발화 끝
    48.57s  user  발화 시작: 알겠습니다, 12분. 10분 후에 출발하라고 알림을 설정해 주시겠어요?
    52.79s  <ret> 발화 (turn13 첫 프레임)
    53.03s  agent 발화 시작: <ret> 응, 알림을 설정해 줄게. 10분 후에 출발하라고 알림을 설정했어.
    53.24s  user  발화 끝
    54.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.04s]: (tool result) A reminder to leave for The Grandview Lofts is set for t
    58.23s  agent 발화 끝
    58.59s  user  발화 시작: 좋아요. 그랜드뷰 로프트에서 침실 두 개짜리 집의 가격은 얼마인가요?
    63.52s  <ret> 발화 (turn15 첫 프레임)
    63.68s  agent 발화 시작: <ret> 가격 정보를 찾아볼게. 월세는 2,500달러야.
    63.91s  user  발화 끝
    65.12s  ⚡SPAN 주입 [d'=1.60s / d_lead=4.26s]: (tool result) A two-bedroom at The Grandview Lofts is listed for two t
    67.94s  agent 발화 끝
    68.22s  user  발화 시작: 생각보다 조금 비싸네요. 2,000달러 정도의 비슷한 매물이 있나요?
    71.81s  <ret> 발화 (turn17 첫 프레임)
    72.20s  agent 발화 시작: <ret> 그 가격대로 찾아볼 수 있어. 윌로우 크릭 아파트먼트에 침실 두 개짜리가 1,950달러야.
    72.48s  user  발화 끝
    73.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.83s]: (tool result) Willow Creek Apartments has a two-bedroom available for 
    79.19s  agent 발화 끝
    79.50s  user  발화 시작: 윌로우 크릭… 음, 들어본 것 같아요. 주소가 어떻게 되나요?
    83.08s  <ret> 발화 (turn19 첫 프레임)
    83.24s  agent 발화 시작: <ret> 윌로우 크릭 아파트먼트 주소를 찾아볼게. 주소는 메이플 드라이브 42번지야.
    83.48s  user  발화 끝
    85.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.16s]: (tool result) Willow Creek Apartments is located at 42 Maple Drive.
    89.34s  user  발화 시작: 알겠습니다, 메이플 드라이브 42번지. 내일 오후에 거기 보여주는 걸로 예약해 주시겠어요?
    89.40s  agent 발화 끝
    95.14s  <ret> 발화 (turn21 첫 프레임)
    95.22s  agent 발화 시작: <ret> 그래, 예약을 해 줄게. 내일 오후 3시에 보여주는 걸로 예약했어.
    95.41s  user  발화 끝
    96.98s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.89s]: (tool result) A viewing at Willow Creek Apartments is scheduled for to
   100.07s  agent 발화 끝
   100.78s  user  발화 시작: 정말 감사합니다. 많은 도움을 주셨어요.
   103.41s  agent 발화 시작: 천만에. 오늘 도와드릴 수 있어서 기뻐.
   103.60s  user  발화 끝
   106.65s  agent 발화 끝
