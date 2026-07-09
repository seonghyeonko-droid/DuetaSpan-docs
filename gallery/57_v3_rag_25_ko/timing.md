# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 잭 소크 선수랑 라파엘라 레지 선수에 대해 읽어보다가 두 분이 프로로 활동하신 스포츠가 뭔지 궁금해요.
     6.86s  user  발화 끝
     6.90s  agent 발화 시작: 좋은 질문이세요—두 분을 함께 생각하니 흥미롭네요. 선수들이 종목을 넘나드는 건 정말 재미있는 일인 것 같아
    14.92s  user  발화 시작: 음, 사실 두 분이 종목을 넘나들었다고는 생각하지 않아요. 같은 스포츠인 것 같은데, 확실하게 말씀해 주실 
    15.02s  agent 발화 끝
    22.00s  <ret> 발화 (turn3 첫 프레임)
    22.09s  user  발화 끝
    22.32s  agent 발화 시작: <ret> 알아볼게요—잭 소크 선수와 라파엘라 레지 선수 두 분 모두 프로 테니스 선수이십니다.
    24.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.72s]: Jack Sock and Raffaella Reggi are both professional tennis players.
    28.62s  agent 발화 끝
    29.78s  user  발화 시작: 테니스군요? 알겠습니다. 두 분이 서로 경쟁한 적이 있는지, 아니면 다른 리그에 속해 있는지 궁금해요.
    36.72s  agent 발화 시작: 두 분이 서로 맞붙었을지 궁금하시군요—어떤 토너먼트에 참가했는지에 따라 달라질 것 같아요.
    36.86s  user  발화 끝
    43.21s  agent 발화 끝
    43.33s  user  발화 시작: 두 분 모두 프로인데, 그러면 같은 수준일 것 같지 않나요?
    46.41s  <ret> 발화 (turn7 첫 프레임)
    46.72s  agent 발화 시작: <ret> 확인해 보시는 게 맞아요—수준을 가늠하기는 쉽지 않죠—잭 소크 선수는 ATP 투어에서, 라파엘라 
    46.80s  user  발화 끝
    48.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.89s]: Jack Sock has competed in the Association of Tennis Professionals tour
    56.97s  user  발화 시작: 잠깐만요, 그러면 서로 다른 투어에 속해 있나요? 그러면 한 분이 다른 분보다 더 잘하는 걸까요?
    57.11s  agent 발화 끝
    63.08s  user  발화 끝
    63.24s  agent 발화 시작: 정말 날카로운 질문이세요—
    65.01s  <ret> 발화 (turn10 첫 프레임)
    65.36s  agent 발화 끝
    65.41s  agent 발화 시작: <ret> ATP와 WTA 모두 최상위 프로 테니스 단체로 여겨지고 있습니다.
    66.85s  ⚡SPAN 주입 [d'=1.84s / d_lead=5.28s]: The Association of Tennis Professionals and the Women's Tennis Associa
    70.69s  agent 발화 끝
    70.84s  user  발화 시작: 알겠습니다, 둘 다 프로인데… 그냥 분리되어 있는 거군요. 이해가 돼요. 그럼 그랜드 슬램 대회는 어땠나요?
    78.86s  user  발화 끝
