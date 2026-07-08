# v3_backc_20_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 야, MLB 드래프트는 몇 라운드로 진행돼?
     4.96s  <ret> 발화 (turn1 첫 프레임)
     5.52s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.93s]: The Major League Baseball draft consists of twenty rounds.
     5.55s  agent 발화 시작: <ret> 그거 궁금해하는 사람 많아… 현재 MLB 드래프트는 20라운드야. 예전에는 훨씬 길어서 90년대에
     5.65s  user  발화 끝
     9.36s  user  발화 시작: 응.
    12.23s  user  발화 끝
    12.31s  agent 발화 시작: 팀들이 미래를 위해 전략적으로 준비하는 과정이지.
    12.31s  agent 발화 끝
    16.53s  user  발화 시작: 와, 20라운드는 진짜 많네. 보통 언제 진행돼?
    16.66s  agent 발화 끝
    21.83s  <ret> 발화 (turn5 첫 프레임)
    21.83s  ⚡SPAN 주입 [d'=0.00s / d_lead=0.27s]: The MLB draft is typically held in July, beginning on a Sunday and con
    22.36s  user  발화 끝
    22.43s  agent 발화 시작: <ret> 그거 꽤 정해진 일정대로 진행돼… 드래프트는 보통 7월에 일요일에 시작해서 다음 주 화요일에 끝나
    23.46s  user  발화 시작: 어떤 포지션이 초반에 가장 많이 뽑혀?
    23.57s  agent 발화 끝
    24.52s  <ret> 발화 (turn7 첫 프레임)
    24.92s  ⚡SPAN 주입 [d'=0.40s / d_lead=1.07s]: Pitchers and shortstops are frequently selected early in the MLB draft
    25.11s  agent 발화 시작: <ret> 항상 수요가 있는 기술들이 있어… 투수랑 유격수는 보통 먼저 뽑혀. 개발이 많이 필요한 중요한 포
    25.21s  user  발화 끝
    27.55s  agent 발화 끝
    27.59s  user  발화 시작: 아… [sigh] 그럴 만하네. 해외 선수들은 어때?
    35.11s  agent 발화 시작: 요즘 점점 중요해지고 있어.
    35.32s  user  발화 끝
    37.97s  agent 발화 끝
    38.94s  user  발화 시작: 해외 선수 영입에 제한이 있어?
    40.56s  <ret> 발화 (turn11 첫 프레임)
    40.96s  ⚡SPAN 주입 [d'=0.40s / d_lead=1.93s]: International players are subject to age and bonus pool restrictions w
    41.16s  agent 발화 시작: <ret> 규칙이 확실히 있어… 해외 선수들은 메이저 리그 베이스볼에서 정한 연령 제한과 보너스 풀 제한을 
    41.33s  user  발화 끝
    48.42s  user  발화 시작: 보너스 풀이 뭔데?
    48.58s  agent 발화 끝
    49.41s  <ret> 발화 (turn13 첫 프레임)
    50.01s  agent 발화 시작: <ret> 팀들이 돈을 어떻게 쓰는지 관리하는 방법이야… 각 팀은 신인 선수 영입에 쓸 수 있는 정해진 금액
    50.12s  user  발화 끝
    50.41s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.47s]: A bonus pool is an allocated amount of money each team can spend on si
    61.13s  agent 발화 끝
    62.92s  user  발화 시작: 그럼 팀들이 아무한테나 돈을 막 줄 수는 없는 거네?
    66.62s  user  발화 끝
    66.78s  agent 발화 시작: 그렇지 않아, 제한이 있어.
    68.18s  user  발화 시작: 알겠어, 알아두면 좋겠다. 올해 전체 1순위는 누구였어?
    68.25s  agent 발화 끝
    71.25s  <ret> 발화 (turn17 첫 프레임)
    71.85s  agent 발화 시작: <ret> 올해 1순위는… 잭슨 홀리데이, 유격수인데, 2022년 드래프트에서 볼티모어 오리올스에서 전체 1
    71.93s  user  발화 끝
    72.25s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.19s]: Jackson Holliday, a shortstop, was the first overall pick in the 2022 
    81.86s  user  발화 시작: 유격수, 그렇지? 중요하긴 하네.
    82.05s  agent 발화 끝
    84.20s  agent 발화 시작: 당연하지. 튼튼한 유격수가 내야를 꽉 잡는 거야.
    84.31s  user  발화 끝
    87.39s  agent 발화 끝
    87.49s  user  발화 시작: 드래프트된 선수들 중에 실제로 메이저 리그에 가는 선수는 얼마나 돼?
    92.21s  <ret> 발화 (turn21 첫 프레임)
    92.80s  agent 발화 시작: <ret> 길이 쉽지 않아… 드래프트된 선수들 중 약 30% 정도만 메이저 리그 레벨에 도달해. 그만큼 경쟁
    92.82s  user  발화 끝
    93.21s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.67s]: Approximately thirty percent of drafted players eventually play in Maj
    99.89s  agent 발화 끝
   100.77s  user  발화 시작: 와, 30% 밖에 안 돼? 진짜 힘든 길이네.
   104.10s  agent 발화 시작: 그렇지. 헌신과 약간의 운이 필요해.
   104.19s  user  발화 끝
   106.45s  agent 발화 끝
