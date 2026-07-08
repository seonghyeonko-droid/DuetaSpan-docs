# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 걔가 웨이크 포레스트에서 뛸 때 듀크 풋볼 코치가 누구였는지 기억하려고 해—월리스 웨이드 스타디움이었나?
     6.53s  user  발화 끝
     6.59s  agent 발화 시작: 네, 듀크는 웨이크 포레스트의 월리스 웨이드 스타디움에서 여러 번 경기를 치렀는데, 역사적인 경기장이죠.
    14.07s  agent 발화 시작: <ret> 음, 그 시기의 코치를 찾아볼까요… 데이비드 커틀리프가 월리스 웨이드 스타디움에서 열린 경기에서 
    14.07s  <ret> 발화 (turn2 첫 프레임)
    14.24s  agent 발화 끝
    16.87s  ⚡SPAN 주입 [d'=2.80s / d_lead=4.12s]: David Cutcliffe was the head coach of the Duke Blue Devils football te
    22.31s  agent 발화 끝
    23.02s  user  발화 시작: 흠, 커틀리프… 다른 사람이었던 것 같아. 상이라도 받은 적 있어?
    27.70s  user  발화 끝
    27.78s  agent 발화 시작: 물론 많은 코치들이 그들의 노력에 대해 인정을 받죠.
    31.58s  agent 발화 시작: <ret> 수상 기록을 살펴볼까요… 데이비드 커틀리프는 2013년과 2014년 ACC 올해의 코치상을 수상했
    31.59s  <ret> 발화 (turn5 첫 프레임)
    31.72s  agent 발화 끝
    34.19s  user  발화 시작: 어어.
    35.01s  user  발화 끝
    35.91s  ⚡SPAN 주입 [d'=4.32s / d_lead=5.34s]: David Cutcliffe won the ACC Coach of the Year award in 2013 and 2014.
    39.54s  user  발화 시작: 좋아, 말이 되네. 근데 *전국* 올해의 코치상도 받았어?
    39.97s  agent 발화 끝
    44.38s  agent 발화 시작: 전국적인 인정은 컨퍼런스 상과는 확실히 다르죠.
    44.40s  user  발화 끝
    47.77s  agent 발화 시작: <ret> 전국 올해의 코치상 수상 여부를 확인해 볼까요… 데이비드 커틀리프는 2013년에 폴 위크스 재단으
    47.77s  <ret> 발화 (turn9 첫 프레임)
    48.18s  agent 발화 끝
    50.89s  ⚡SPAN 주입 [d'=3.12s / d_lead=5.70s]: David Cutcliffe was named the National Coach of the Year by the Paul W
    57.46s  agent 발화 끝
    57.59s  user  발화 시작: 딱 하나뿐이네? 코치 경력이 그렇게 오래됐는데… 너무 적은 것 같아.
    61.98s  agent 발화 시작: 아쉽게도 오래 활동했다고 해서 반드시 많은 전국적인 상을 받는 것은 아니에요.
    62.22s  user  발화 끝
    67.95s  agent 발화 끝
    68.03s  agent 발화 시작: <ret> 다른 상에 대한 자세한 내용도 알려드릴까요… 그는 2013년에 홈 디포 전국 올해의 코치로도 선정
    68.03s  <ret> 발화 (turn12 첫 프레임)
    72.67s  ⚡SPAN 주입 [d'=4.64s / d_lead=5.76s]: David Cutcliffe was honored as the Home Depot National Coach of the Ye
    76.09s  agent 발화 끝
    77.18s  user  발화 시작: 2013년에 큰 상을 다 받았어? 좀 집중됐네.
    80.97s  user  발화 끝
    80.99s  agent 발화 시작: 가끔 코치는 특히 뛰어난 한 해를 보내기도 하죠.
    84.32s  agent 발화 끝
    84.33s  agent 발화 시작: <ret> 듀크에서의 그의 전체 기록을 확인해 드릴까요… 데이비드 커틀리프의 듀크 기록은 79승 93패였습니
    84.34s  <ret> 발화 (turn15 첫 프레임)
    87.46s  ⚡SPAN 주입 [d'=3.12s / d_lead=7.05s]: During his tenure, David Cutcliffe achieved a 79–93 win-loss record wi
    92.02s  agent 발화 끝
    93.32s  user  발화 시작: 79승 93패… 아주 훌륭한 기록은 아니네, 그렇지?
    97.70s  agent 발화 시작: 프로그램을 구축하는 데는 시간과 인내심이 필요하다는 것을 잘 알고 있습니다.
    97.86s  user  발화 끝
   102.71s  user  발화 시작: 그렇겠지. 그래도, 알아줘서 고마워.
   103.16s  agent 발화 끝
   105.81s  user  발화 끝
