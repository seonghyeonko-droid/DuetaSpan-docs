# v3_abs_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어떤 법이 기록이 없어서 덜 중요하게 여겨지는지 궁금하시군요.
     4.45s  agent 발화 시작: <ret> 음, 그건 정말 흥미로운 질문인데, 솔직히 명확한 답이 없네. 일반적인 법률 분류에 속하지 않는 
     4.45s  <ret> 발화 (turn1 첫 프레임)
     4.45s  user  발화 끝
     5.45s  ⚡SPAN 주입 [d'=1.00s / d_lead=8.90s]: (no information found)
    13.35s  user  발화 시작: 아, 그렇군요. 그럼, 영국에서 가장 오래된 대성당은 어디인가요?
    13.35s  agent 발화 끝
    17.80s  agent 발화 시작: <ret> 뭐, 그거 좋은 질문인데. 캔터베리 대성당은 597년에 캔터베리의 아우구스티누스에 의해 설립됐어.
    17.80s  <ret> 발화 (turn3 첫 프레임)
    17.80s  user  발화 끝
    18.80s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.34s]: Canterbury Cathedral was founded in 597 AD by Augustine of Canterbury.
    26.70s  user  발화 시작: 597년… 와. [laugh] 어떤 양식으로 지어졌나요?
    26.70s  agent 발화 끝
    30.04s  agent 발화 시작: 그건 좀 섞여있어. 수세기에 걸쳐 많은 양식이 더해졌고, 시대에 따라 진화했거든.
    30.04s  user  발화 끝
    36.16s  user  발화 시작: 그럼, 한 번에 다 지어진 게 아니었군요?
    36.16s  agent 발화 끝
    40.05s  agent 발화 시작: 당연히 그렇지. 대성당은 보통 한 사람의 손이나 한 시대의 작품이 아니야. 돌로 쓰여진 연속적인 이야기라고 
    40.05s  user  발화 끝
    50.07s  user  발화 시작: 그 말이 맞네요. 음… 마치 집에 계속 증축하는 것과 같은 건가요?
    50.07s  agent 발화 끝
    56.19s  agent 발화 시작: 맞아! 하지만 대성당의 증축은 보통 훨씬 더… 야심찬 편이지. 여러 세대에 걸쳐 쌓아 올린 유산이라고 할 수
    56.19s  user  발화 끝
    66.20s  user  발화 시작: 알겠습니다. 가고일즈에 대해 알려줄 수 있나요?
    66.20s  agent 발화 끝
    69.54s  agent 발화 시작: <ret> 아, 그 흥미로운 조각상들 말이지. 가고일즈는 원래 대성당 벽에서 물을 멀리 흘려보내기 위한 물받
    69.54s  <ret> 발화 (turn11 첫 프레임)
    69.54s  user  발화 끝
    70.54s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.23s]: Gargoyles were originally designed as waterspouts to convey water away
    79.00s  user  발화 시작: 그럼, 그냥… 장식이 아니었나요?
    79.00s  agent 발화 끝
    81.22s  agent 발화 시작: 처음에는 그렇지 않았어. 하지만 시간이 지나면서 장식적인 측면이 꽤 두드러졌잖아. 실용적인 목적이 먼저였지.
    81.22s  user  발화 끝
    88.45s  user  발화 시작: 멋지네요. 세계에서 가장 높은 대성당은 어디인가요?
    88.45s  agent 발화 끝
    91.79s  agent 발화 시작: <ret> 그건 측정 방법에 따라 달라져. 독일 울름 대성당의 첨탑은 161.53미터 높이야. 정말 대단한 
    91.79s  <ret> 발화 (turn15 첫 프레임)
    91.79s  user  발화 끝
    92.79s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.78s]: Ulm Minster in Germany has a spire that is 161.53 meters (530.2 ft) ta
   100.13s  user  발화 시작: 와, 500피트가 넘네요. 정말 높네요. 고마워요, 모시!
   100.13s  agent 발화 끝
   104.03s  agent 발화 시작: 천만에. 이 웅장한 고건물들에 대해 이야기하는 건 언제나 즐거워.
   104.03s  user  발화 끝
   109.04s  agent 발화 끝
