# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 6월 15일에 그랜드뷰 로프트에서 보여주실 수 있나요?
     3.59s  <ret> 발화 (turn1 첫 프레임)
     3.75s  agent 발화 시작: <ret> 응, 그 부동산을 볼 시간을 찾아볼게. 6월 15일 오후 2시 30분에 보여주는 걸로 예약됐어.
     3.84s  user  발화 끝
     5.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.56s]: (tool result) A viewing at The Grandview Lofts is scheduled for June f
    10.84s  agent 발화 끝
    10.86s  user  발화 시작: 그건 좀 늦은 시간인데요. 음, 사실 6월 16일로 바꿔 주세요.
    15.17s  <ret> 발화 (turn3 첫 프레임)
    15.39s  user  발화 끝
    15.57s  agent 발화 시작: <ret> 문제없어, 다시 예약해 줄게. 6월 16일 아침 10시에 보여주는 걸로 바꿨어.
    17.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.84s]: (tool result) A viewing at The Grandview Lofts is scheduled for June s
    20.41s  user  발화 시작: 좋아요. 혹시 그 건물에 대해 알아야 할 다른 게 있을까요?
    20.89s  agent 발화 끝
    24.62s  user  발화 끝
    24.77s  agent 발화 시작: 그랜드뷰 로프트는 2018년에 완공됐고, 총 42호실이 있어.
    29.31s  agent 발화 끝
    30.34s  user  발화 시작: 42호실… 거기에 가족들이 많이 살고 있나요?
    33.20s  <ret> 발화 (turn7 첫 프레임)
    33.60s  agent 발화 시작: <ret> 거기에 사는 사람들의 구성에 대한 좋은 질문이야. 그랜드뷰 로프트 주민의 35%가 가족이야.
    33.71s  user  발화 끝
    35.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.92s]: (tool result) The Grandview Lofts has thirty-five percent family occup
    40.32s  agent 발화 끝
    40.37s  user  발화 시작: 알아두면 좋네요. 주차는요?
    42.61s  agent 발화 시작: 주차는 가능하지만, 공간이 제한적이야.
    42.67s  user  발화 끝
    45.84s  agent 발화 끝
    46.17s  user  발화 시작: 제한적이라는 게 어느 정도인가요? 대기자 명단이 있나요?
    50.51s  user  발화 끝
    50.88s  agent 발화 시작: 현재 주차 상황을 확인해 볼게—
    51.84s  user  발화 시작: 거기 건물 안에 헬스장도 있나요?
    52.49s  agent 발화 끝
    53.74s  <ret> 발화 (turn13 첫 프레임)
    53.82s  agent 발화 시작: <ret> 아, 그래, 요즘은 헬스장이 흔한 편의시설이지.
    54.05s  user  발화 끝
    55.18s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.32s]: (tool result) The Grandview Lofts includes a fitness center and a roof
    57.14s  agent 발화 끝
    57.23s  agent 발화 시작: 그랜드뷰 로프트에는 피트니스 센터와 옥상 테라스가 모두 갖춰져 있어.
    62.36s  user  발화 시작: 옥상 테라스는 멋질 것 같아요. [happy]
    62.37s  agent 발화 끝
    64.95s  user  발화 끝
    65.08s  agent 발화 시작: 특히 해질녘에 정말 아름다워.
    67.17s  user  발화 시작: 그 동네는 걸어 다닐 만한 곳인가요?
    67.20s  agent 발화 끝
    69.44s  <ret> 발화 (turn18 첫 프레임)
    69.84s  agent 발화 시작: <ret> 걸어 다니기 좋은 곳인지 확인해 볼 수 있어. 그 지역의 워크 스코어는 82점인데, 매우 걸어 다
    70.03s  user  발화 끝
    70.88s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.66s]: (tool result) The walk score for The Grandview Lofts is eighty-two.
    77.58s  agent 발화 끝
    78.04s  user  발화 시작: 82점이면 꽤 괜찮네요. 가장 가까운 식료품점은 어디인가요?
    82.36s  <ret> 발화 (turn20 첫 프레임)
    82.52s  agent 발화 시작: <ret> 가장 가까운 식료품점을 빠르게 찾아줄게. 프레시 푸드 마켓이 그랜드뷰 로프트에서 0.6마일 떨어져
    82.72s  user  발화 끝
    84.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.74s]: (tool result) Fresh Foods Market is 0.6 miles from The Grandview Lofts
    89.98s  agent 발화 끝
    90.15s  user  발화 시작: 알겠습니다, 좋아요. 대중교통은요?
    92.87s  agent 발화 시작: 몇몇 버스 노선이 그랜드뷰 로프트 근처 지역을 운행해.
    92.97s  user  발화 끝
    97.27s  agent 발화 끝
    97.51s  user  발화 시작: 22번 버스 시간표를 알려줄 수 있나요?
   100.18s  <ret> 발화 (turn24 첫 프레임)
   100.42s  agent 발화 시작: <ret> 22번 버스 시간표를 가져올게— 22번 버스는 오전 8시 15분, 8시 45분, 9시 15분에 도
   100.56s  user  발화 끝
   102.02s  ⚡SPAN 주입 [d'=1.84s / d_lead=6.16s]: (tool result) The number 22 bus arrives at 8:15 AM, 8:45 AM, and 9:15 
   109.04s  agent 발화 끝
   110.41s  user  발화 시작: 좋아요, 괜찮네요. 도와주셔서 정말 감사합니다!
   114.21s  user  발화 끝
   114.23s  agent 발화 시작: 천만에. 이 문제로 도와드릴 수 있어서 기뻐.
   117.64s  agent 발화 끝
