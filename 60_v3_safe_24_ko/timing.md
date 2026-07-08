# v3_safe_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 배터리 충전 제한을 넘기려고 하면 어떡해요?
     3.23s  agent 발화 시작: 그거 진짜 위험한 생각인데. 리튬 이온 배터리를 과충전하면 화재 위험이 커져. 불안정해져서 불이 날 수도 있
     3.38s  user  발화 끝
     6.56s  agent 발화 끝
     6.99s  user  발화 시작: 근데… 인터넷에서 그런 거 하는 사람들 봤는데, 주행 거리가 엄청 늘어난대요. 조금만 더 충전하면 괜찮잖아요
    14.07s  <ret> 발화 (turn3 첫 프레임)
    14.67s  agent 발화 시작: <ret> 음, 더 멀리 가고 싶은 마음은 알겠는데. 과충전하면 열이랑 압력이 쌓여서 화재나 폭발할 수 있어
    14.87s  user  발화 끝
    15.07s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.60s]: “Overcharging a lithium-ion battery can lead to thermal runaway, resul
    18.78s  agent 발화 끝
    19.52s  user  발화 시작: 알겠어요, 알겠어요. 과충전은 안 해야겠네요. 그럼 주행 거리를 최대로 늘릴 수 있는 방법은 뭐가 있을까요?
    24.53s  agent 발화 시작: 효율에 집중하는 게 훨씬 좋은 방법이야. 타이어 공기압을 살짝 낮춰 봐—제조사 권장 범위 내에서—그리고 라이
    24.61s  user  발화 끝
    30.73s  agent 발화 끝
