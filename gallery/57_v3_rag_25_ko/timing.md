# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 잭 소크 선수랑 라파엘라 레지 선수 둘 다 무슨 스포츠를 했는지 궁금했어요.
     5.14s  user  발화 끝
     5.17s  agent 발화 시작: 좋은 질문이세요—선수들이 종목을 넘나드는 건 항상 흥미로운 일인 것 같아요.
     9.93s  <ret> 발화 (turn2 첫 프레임)
    10.24s  agent 발화 시작: <ret> 두 분이 함께 했던 스포츠 활동을 찾아볼까요… 두 분 다 프로 테니스 선수로 활동하셨어요.
    10.36s  agent 발화 끝
    11.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.50s]: Jack Sock and Raffaella Reggi are both professional tennis players.
    16.46s  user  발화 시작: 테니스군요? 잭 소크 선수는 주로 복식으로 유명한 줄 알았는데…
    16.54s  agent 발화 끝
    21.18s  user  발화 끝
    21.57s  agent 발화 시작: 그렇죠, 복식에서 꽤 이름을 날리셨어요.
    24.02s  <ret> 발화 (turn5 첫 프레임)
    24.33s  agent 발화 시작: <ret> 그 선수의 경력에 대해 좀 더 자세히 찾아보니… 잭 소크 선수는 2016년 올림픽 복식 테니스에서
    24.48s  agent 발화 끝
    26.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.49s]: Jack Sock won a gold medal in doubles tennis at the 2016 Summer Olympi
    32.81s  agent 발화 끝
    32.82s  user  발화 시작: 그런데 라파엘라 레지 선수는 그랜드 슬램 우승 경력이 있나요?
    37.12s  user  발화 끝
    37.15s  agent 발화 시작: 음, 말씀드리려고 하던 중에—
    38.74s  user  발화 시작: 죄송해요, 메이저 타이틀이 있는지 궁금해서요.
    39.35s  agent 발화 끝
    42.31s  agent 발화 시작: 물론이죠—메이저 타이틀은 성공을 가늠하는 좋은 기준이 될 수 있죠.
    42.34s  user  발화 끝
    46.73s  <ret> 발화 (turn10 첫 프레임)
    47.05s  agent 발화 시작: <ret> 라파엘라 레지 선수의 그랜드 슬램 기록을 빠르게 확인해 볼게요… 라파엘라 레지 선수는 1985년에
    47.08s  agent 발화 끝
    48.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.00s]: Raffaella Reggi won the French Open women’s doubles title in 1985.
    57.86s  agent 발화 끝
    58.03s  user  발화 시작: 1985년이라니! 와, 정말 오래됐네요. 싱글도 쳤었나요?
    62.96s  agent 발화 시작: 네, 싱글도 치셨어요—많은 선수들이 싱글로 시작해서 복식으로 넘어가는 경우가 많아요.
    63.03s  user  발화 끝
    68.56s  <ret> 발화 (turn13 첫 프레임)
    68.88s  agent 발화 시작: <ret> 그녀의 경력은 실제로 수십 년에 걸쳐 이어졌던 것 같아요… 그녀는 프로 테니스 선수로서 싱글과 복
    68.97s  agent 발화 끝
    70.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.14s]: Raffaella Reggi competed in both singles and doubles tennis throughout
    77.69s  agent 발화 끝
