# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 6월 15일에 그랜드뷰 로프트에서 보여주실 수 있나요?
     3.57s  <ret> 발화 (turn1 첫 프레임)
     3.73s  agent 발화 시작: <ret> 응, 6월 15일 오후 두 시에 그랜드뷰 로프트 방문 예약을 했어.
     3.84s  user  발화 끝
     4.85s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.12s]: (tool result) A viewing at The Grandview Lofts is confirmed for June f
     8.63s  agent 발화 끝
     8.69s  user  발화 시작: 그 주소로 가는 길 안내를 보내 주실 수 있나요?
    12.18s  <ret> 발화 (turn3 첫 프레임)
    12.48s  user  발화 끝
    12.57s  agent 발화 시작: <ret> 당연히 가능하지. 그랜드뷰 로프트 가는 길은 엘름 길을 북쪽으로 가고, 오크 길에서 오른쪽으로 틀
    14.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.30s]: (tool result) Directions to The Grandview Lofts are: head north on Elm
    20.79s  user  발화 시작: 도움이 많이 되네요. 그곳까지 운전하는 데 얼마나 걸릴까요?
    21.23s  agent 발화 끝
    24.55s  <ret> 발화 (turn5 첫 프레임)
    24.95s  agent 발화 시작: <ret> 여행 시간을 알아볼게. 그랜드뷰 로프트까지 가는 데 대략 십오 분 정도 걸릴 거야.
    25.00s  user  발화 끝
    26.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.24s]: (tool result) The drive to The Grandview Lofts is estimated to take fi
    29.62s  agent 발화 끝
    30.66s  user  발화 시작: 알겠습니다, 좋네요. 그리고 그곳 주차 상황은 어떤가요?
    34.64s  agent 발화 시작: 주차 공간이 좀 부족할 수 있는데, 오크 애비뉴 길가에 주차할 수 있고, 근처에 유료 주차장도 있어.
    34.68s  user  발화 끝
    42.51s  agent 발화 끝
    42.59s  user  발화 시작: 혹시 나중에 무언가를 사려고 한다면 근처에 식료품점이 있나요?
    47.10s  agent 발화 시작: 응, 있어!
    47.17s  user  발화 끝
    48.62s  agent 발화 끝
    48.65s  <ret> 발화 (turn10 첫 프레임)
    48.72s  agent 발화 시작: <ret> 근처에 식료품점이 있는데— 프레시 푸드 마켓은 그랜드뷰 로프트에서 도보로 오 분 거리에 있어.
    49.85s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.10s]: (tool result) Fresh Foods Market is a five-minute walk from The Grandv
    55.44s  agent 발화 끝
    55.50s  user  발화 시작: 훌륭하네요. 저는 블리커 스트리트에 있는 곳도 보고 있는데요…
    59.77s  agent 발화 시작: 아, 다른 매물이네. 블리커 스트리트 어느 주소를 보고 있는 거야?
    59.85s  user  발화 끝
    64.31s  agent 발화 끝
    65.73s  user  발화 시작: 사십이 블리커 스트리트예요. 그곳도 방문 예약을 할 수 있을까요?
    70.00s  <ret> 발화 (turn14 첫 프레임)
    70.24s  agent 발화 시작: <ret> 물론이지, 그곳 방문 예약을 해 볼게. 6월 십팔일 오전 열 시에 사십이 블리커 스트리트 방문 예
    70.36s  user  발화 끝
    71.12s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.58s]: (tool result) A viewing at 42 Bleecker Street is confirmed for June ei
    78.00s  user  발화 시작: 완벽하네요. 그런데 사실… 블리커 스트리트는 6월 십칠일이 더 좋을 것 같아요.
    78.03s  agent 발화 끝
    84.35s  <ret> 발화 (turn16 첫 프레임)
    84.51s  agent 발화 시작: <ret> 그럼 바꿔 줄게— 사십이 블리커 스트리트 방문 예약을 6월 십칠일 오전 열 시로 변경했어.
    84.58s  user  발화 끝
    84.85s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.34s]: (tool result) The viewing at 42 Bleecker Street is now scheduled for J
    89.93s  user  발화 시작: 좋아요, 감사합니다. 블리커 스트리트 아파트의 면적은 얼마인가요?
    89.98s  agent 발화 끝
    94.08s  <ret> 발화 (turn18 첫 프레임)
    94.40s  agent 발화 시작: <ret> 자세한 정보를 찾아볼게. 사십이 블리커 스트리트 아파트는 칠백오십 평방피트이고, 침실 하나와 욕실
    94.56s  user  발화 끝
    96.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.85s]: (tool result) 42 Bleecker Street is 750 square feet with one bedroom a
   105.06s  agent 발화 끝
   105.47s  user  발화 시작: 좋은 소식이네요. 그럼 그랜드뷰 로프트는 면적이 얼마인가요?
   109.58s  <ret> 발화 (turn20 첫 프레임)
   109.81s  agent 발화 시작: <ret> 그 정보를 확인해 볼게. 그랜드뷰 로프트는 구백 평방피트이고, 침실 두 개와 욕실 두 개가 있어.
   110.01s  user  발화 끝
   110.94s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.54s]: (tool result) The Grandview Lofts are 900 square feet with two bedroom
   117.41s  agent 발화 끝
   117.54s  user  발화 시작: 음, 알겠습니다. 상당히 차이가 크네요. 많은 도움 주셔서 감사합니다.
   122.22s  agent 발화 시작: 천만에. 이 방문 예약을 도와드릴 수 있어서 기뻐.
   122.26s  user  발화 끝
   125.92s  agent 발화 끝
