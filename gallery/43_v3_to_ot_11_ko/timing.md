# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 누가 이번 시즌 프리미어 리그 골든 부트를 탔어?
     2.29s  <ret> 발화 (turn1 첫 프레임)
     2.89s  agent 발화 시작: <ret> 네, 그런 질문을 많이 하시더라고요. 해리 케인이 골든 부트를 받았는데, 총 스물한 골을 넣었어요
     2.91s  user  발화 끝
     3.29s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.39s]: Harry Kane won the Premier League Golden Boot for the 2023-2024 season
     8.82s  agent 발화 끝
     8.88s  user  발화 시작: 스물한 골, 대박. 아직 토트넘에서 뛰고 있어?
    11.90s  agent 발화 시작: 아니요, 작년 8월에 바이에른 뮌헨으로 이적했어요.
    12.12s  user  발화 끝
    15.14s  agent 발화 끝
    16.55s  user  발화 시작: 아, 그렇지, 거의 까먹었네. 음, 지난 시즌에는 누가 받았는데?
    20.13s  <ret> 발화 (turn5 첫 프레임)
    20.73s  agent 발화 시작: <ret> 잠깐만 확인해 볼게요. 엘링 홀란드가 지난 시즌에 골든 부트를 받았는데, 총 서른여섯 골을 넣었어
    20.84s  user  발화 끝
    21.13s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.55s]: Erling Haaland won the Premier League Golden Boot for the 2022-2023 se
    27.82s  agent 발화 끝
    29.25s  user  발화 시작: 서른여섯! 진짜 대단하다. [happy]
    31.18s  agent 발화 시작: 정말 훌륭한 시즌이었어요.
    31.28s  user  발화 끝
    32.84s  agent 발화 끝
    33.22s  user  발화 시작: 재활용은 내놨어?
    34.70s  user  발화 시작: 미안, 어디까지 얘기했지? 아, 그래, 골든 부트.
    34.73s  user  발화 끝
    38.07s  user  발화 끝
    38.12s  agent 발화 시작: 프리미어 리그 최고 득점자에 대해 이야기하고 있었어요.
    40.30s  <ret> 발화 (turn11 첫 프레임)
    40.90s  agent 발화 시작: <ret> 득점자를 생각하다 보니… 앨런 시어러가 선수 생활 동안 골든 부트를 세 번이나 받았어요.
    40.94s  agent 발화 끝
    41.30s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.25s]: Alan Shearer holds the record for most Premier League Golden Boots won
    46.69s  user  발화 시작: 세 번이나 받았으면 기록이겠네. 한 시즌 최다 골 기록은 있어?
    46.74s  agent 발화 끝
    50.29s  <ret> 발화 (turn13 첫 프레임)
    50.89s  agent 발화 시작: <ret> 네, 그런 기록이 있어요. 모하메드 살라가 2017-2018 시즌에 서른두 골을 넣었어요.
    51.03s  user  발화 끝
    51.29s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.60s]: Mohamed Salah holds the record for most goals in a single Premier Leag
    56.54s  agent 발화 끝
    57.44s  user  발화 시작: 와, 진짜 대단하다. 멋진 선수네. 정보 고마워.
    61.70s  user  발화 끝
