# v3_inter_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 저는 스포츠 논쟁을 해결하려고 하는데, 테스트 크리켓에서 처음으로 해트트릭을 한 볼러는 누구였나요?
     6.06s  <ret> 발화 (turn1 첫 프레임)
     6.66s  agent 발화 시작: <ret> 음, 그거 진짜 흥미로운 크리켓 역사인데. 프레드 스포포스가 호주를 대표해서 출전해서, 일천팔백칠
     6.86s  user  발화 끝
     7.06s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.37s]: Fred Spofforth, playing for Australia, achieved the first hattrick in 
    17.28s  agent 발화 끝
    17.85s  user  발화 시작: 일천팔백칠십구년이라니, 대단하네요. 잉글랜드와의 경기였나요?
    22.18s  <ret> 발화 (turn3 첫 프레임)
    22.78s  agent 발화 시작: <ret> 응, 잉글랜드와의 경기였지.
    23.04s  user  발화 끝
    23.18s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.40s]: Spofforth’s hattrick was taken against England in the third Test match
    25.18s  agent 발화 끝
    25.56s  agent 발화 시작: 스포포스의 해트트릭은 시드니 크리켓 경기장에서 열린 세 번째 테스트 경기에서 잉글랜드 상대로 나왔어.
    32.32s  agent 발화 끝
    33.48s  user  발화 시작: 정말 놀랍네요—그는 호주 선수였군요? 저— 그러니까, 그가 유일한 사람이었나요—
    39.55s  <ret> 발화 (turn6 첫 프레임)
    40.15s  agent 발화 시작: <ret> 뭐, 그거 좋은 질문이야— 스포포스는 그 잉글랜드와의 시리즈에서 해트트릭을 두 번이나 했고, 그 
    40.20s  user  발화 끝
    40.55s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.04s]: Spofforth took two hattricks in that same series against England, a fe
    51.69s  agent 발화 끝
    51.82s  user  발화 시작: 두 번이나요? 믿을 수 없네요! 정말 대단한 볼러였군요.
    56.54s  user  발화 끝
