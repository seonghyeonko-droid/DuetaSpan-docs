# v3_hesit_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 포 Pompeii에 대해 읽다가 문득 궁금해졌어요— 베수비오 화산이 마지막으로 폭발한 게 언제였는지요?
     6.82s  user  발화 끝
     7.00s  agent 발화 시작: 좋은 질문이세요, 그 지역의 역사를 생각하시다니.
     9.79s  <ret> 발화 (turn2 첫 프레임)
    10.03s  agent 발화 시작: <ret> 잠시 기록을 확인해 볼게요— 베수비오 화산의 마지막 폭발은 천구백사십사년 삼월에 일어났습니다.
    10.05s  agent 발화 끝
    11.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.16s]: Mount Vesuvius last erupted in March of nineteen forty-four.
    17.12s  agent 발화 끝
    18.32s  user  발화 시작: 천구백사십사년이라고요? 와, 생각보다 비교적 최근이네요, 그렇죠?
    23.26s  user  발화 끝
    23.69s  agent 발화 시작: [laugh] 네, 다른 화산들에 비해서는 그렇습니다— 하지만 지금은 꽤 오랫동안 조용했어요.
    30.68s  <ret> 발화 (turn5 첫 프레임)
    31.00s  agent 발화 시작: <ret> 그 폭발에 대한 자세한 내용을 찾아볼 수 있습니다— 천구백사십사년의 폭발은 마을에 피해를 입혔고,
    31.06s  agent 발화 끝
    31.64s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.99s]: The nineteen forty-four eruption caused damage to nearby towns and US 
    40.69s  agent 발화 끝
    40.72s  user  발화 시작: 미국 비행기요? 그건—
    42.12s  user  발화 시작: 잠깐만요, 그 폭발이 이탈리아 연합군 상륙 작전에 실제로 영향을 미쳤나요?
    42.33s  user  발화 끝
    47.27s  agent 발화 시작: 전쟁 노력과 관련해서 아주 통찰력 있는 연결을 하셨네요.
    47.39s  user  발화 끝
    51.31s  <ret> 발화 (turn9 첫 프레임)
    51.58s  agent 발화 끝
    51.71s  agent 발화 시작: <ret> 네, 역사 기록을 살펴보니— 천구백사십사년의 폭발은 연합군 공군 기지를 방해했고, 일부 작전이 지
    52.99s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.60s]: The 1944 eruption disrupted Allied airfields and delayed some operatio
    61.07s  agent 발화 끝
