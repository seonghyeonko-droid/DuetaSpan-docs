# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 6월 15일에 그랜드뷰 로프트에서 보여주시면 될까요?
     3.17s  <ret> 발화 (turn1 첫 프레임)
     3.33s  agent 발화 시작: <ret> 그래, 예약됐어. 6월 15일 오후 2시에 그랜드뷰 로프트 보여주는 걸로 예약됐어.
     3.42s  user  발화 끝
     4.85s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.89s]: (tool result) A viewing at The Grandview Lofts is scheduled for June f
     6.95s  user  발화 시작: 네.
     7.39s  user  발화 끝
     9.43s  agent 발화 끝
    11.69s  user  발화 시작: 혹시 비슷한 시기에 원베드룸으로 좀 더 작은 곳도 있나요?
    15.32s  <ret> 발화 (turn4 첫 프레임)
    15.66s  user  발화 끝
    15.72s  agent 발화 시작: <ret> 원베드룸 있는지 알아볼게. 6월 15일에 오전 10시랑 오후 3시에 원베드룸이 있어.
    17.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.57s]: (tool result) One-bedroom units are available at The Grandview Lofts o
    19.53s  user  발화 시작: 음.
    19.98s  user  발화 끝
    22.90s  agent 발화 끝
    23.38s  user  발화 시작: 오후 3시가 좋겠어요— 그걸로 바꿔줄 수 있을까요?
    26.62s  <ret> 발화 (turn7 첫 프레임)
    27.02s  agent 발화 시작: <ret> 응, 당연히 바꿔줄 수 있어. 6월 15일 오후 3시에 원베드룸으로 보여주는 걸로 예약 변경됐어.
    27.12s  user  발화 끝
    28.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.83s]: (tool result) Your viewing at The Grandview Lofts is now scheduled for
    33.73s  agent 발화 끝
    33.78s  user  발화 시작: 거기 원베드룸 월세는 얼마예요?
    35.80s  <ret> 발화 (turn9 첫 프레임)
    36.04s  agent 발화 시작: <ret> 월세 정보 찾아줄게. 그랜드뷰 로프트 원베드룸은 한 달에 천팔백오십 달러야.
    36.18s  user  발화 끝
    37.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.21s]: (tool result) The monthly rent for a one-bedroom at The Grandview Loft
    41.82s  agent 발화 끝
    42.12s  user  발화 시작: 좀 비싸네요— 비슷한 다른 곳은 없을까요—
    45.36s  user  발화 끝
    45.72s  agent 발화 시작: 비슷한 곳 찾아볼 수 있어—
    46.62s  user  발화 시작: …다운타운 지역에 주차는 가능하면 좋겠어요?
    47.24s  agent 발화 끝
    49.14s  <ret> 발화 (turn13 첫 프레임)
    49.30s  agent 발화 시작: <ret> 알았어, 다운타운에 주차 가능한 곳으로 찾아볼게. 파라마운트 레지던스와 시티 센터 아파트먼트가 네
    49.53s  user  발화 끝
    51.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.94s]: (tool result) The Paramount Residences and City Center Apartments both
    56.99s  agent 발화 끝
    57.27s  user  발화 시작: 파라마운트 레지던스에 대해 알려주세요.
    59.33s  <ret> 발화 (turn15 첫 프레임)
    59.73s  agent 발화 시작: <ret> 그래, 자세한 정보 찾아줄게. 파라마운트 레지던스 원베드룸은 천칠백 달러에서 이천 달러 사이야.
    59.91s  user  발화 끝
    61.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.42s]: (tool result) One-bedroom units at The Paramount Residences range from
    66.96s  agent 발화 끝
    67.20s  user  발화 시작: 천칠백 달러가 더 좋네요. 다음 주에 혹시 있는 곳이 있을까요?
    71.48s  <ret> 발화 (turn17 첫 프레임)
    71.64s  agent 발화 시작: <ret> 다음 주에 그 가격대로 있는지 알아볼게. 파라마운트 레지던스에 다음 화요일 오전 11시에 원베드룸
    71.88s  user  발화 끝
    73.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.93s]: (tool result) A one-bedroom unit is available at The Paramount Residen
    74.00s  user  발화 시작: 예.
    74.63s  user  발화 끝
    79.19s  agent 발화 끝
    79.32s  user  발화 시작: 그걸로 괜찮아요. 보여주는 거 예약해 줄 수 있을까요?
    82.36s  <ret> 발화 (turn20 첫 프레임)
    82.44s  agent 발화 시작: <ret> 그래, 당연히 예약해 줄게. 파라마운트 레지던스 다음 화요일 오전 11시에 보여주는 걸로 예약됐어
    82.69s  user  발화 끝
    84.20s  ⚡SPAN 주입 [d'=1.84s / d_lead=4.09s]: (tool result) A viewing at The Paramount Residences is scheduled for n
    84.98s  user  발화 시작: 음.
    85.34s  user  발화 끝
    90.04s  agent 발화 끝
    90.08s  user  발화 시작: 좋아요. 그리고 그랜드뷰 로프트랑 파라마운트 레지던스 가는 길도 알려줄 수 있을까요?
    95.65s  <ret> 발화 (turn23 첫 프레임)
    95.80s  agent 발화 시작: <ret> 길 안내해 줄 수 있어. 그랜드뷰 로프트는 메인 스트리트를 북쪽으로 3.2킬로미터 정도 가고, 엘
    96.01s  user  발화 끝
    97.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.59s]: (tool result) Directions to The Grandview Lofts: Head north on Main St
   105.61s  user  발화 시작: 음.
   106.02s  user  발화 끝
   111.30s  agent 발화 끝
   111.53s  user  발화 시작: 완벽해요, 정말 감사합니다.
   113.58s  <ret> 발화 (turn26 첫 프레임)
   113.90s  agent 발화 시작: <ret> 천만에. 집 보러 가는 거 잘 됐으면 좋겠다— 옛날 건물들은 가끔씩 독특한 매력이 있거든— 난 여
   114.11s  user  발화 끝
   115.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=15.07s]: (tool result) Directions to The Paramount Residences: Continue on Main
   128.98s  agent 발화 끝
