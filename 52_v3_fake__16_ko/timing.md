# v3_fake__16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어, 왼쪽 다발 차단이란 거? 의사가 그렇게 말한 것 같은데.
     5.32s  agent 발화 시작: 맞아요. 심장의 전기 시스템에 문제가 생긴 건데, 사실 흔한 편이야.
     5.32s  user  발화 끝
    10.64s  user  발화 시작: 문제? 정확히 무슨 말이야?
    10.64s  agent 발화 끝
    12.77s  agent 발화 시작: <ret> 음, 설명해 줄게. 심장 전도 이상이라고 하는데, 전기 신호가 심장 왼쪽까지 가는 데 지연이 생기
    12.77s  <ret> 발화 (turn3 첫 프레임)
    12.77s  ⚡SPAN 주입 [d'=0.00s / d_lead=2.13s]: A left bundle branch block is a cardiac conduction abnormality.
    12.77s  user  발화 끝
    21.28s  user  발화 시작: 아. 그거… 위험해?
    21.28s  agent 발화 끝
    22.88s  agent 발화 시작: 항상 그런 건 아니지만, 의사 선생님이랑 꾸준히 확인하는 게 좋겠지.
    22.88s  user  발화 끝
    28.20s  user  발화 시작: 그럼, 원인이 뭔데? 내가 뭘 잘못한 거야?
    28.20s  agent 발화 끝
    31.92s  agent 발화 시작: <ret> 뭐, 여러 가지가 있을 수 있어. 흔한 원인으로는 관상동맥 질환, 고혈압, 심근병증 같은 게 있어
    31.92s  <ret> 발화 (turn7 첫 프레임)
    31.92s  user  발화 끝
    32.92s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.13s]: Common causes include coronary artery disease, high blood pressure, an
    39.90s  user  발화 시작: [sigh] 다… 심각하게 들리네.
    39.90s  agent 발화 끝
    42.03s  agent 발화 시작: 그럴 수도 있지, 하지만 생활 습관 개선이랑 약으로 관리할 수 있는 경우가 많아.
    42.03s  user  발화 끝
    48.95s  user  발화 시작: 고칠 방법은 있어? 수술로 되는 거야?
    48.95s  agent 발화 끝
    52.14s  agent 발화 시작: <ret> 치료는 원인에 따라 달라져. 근본적인 심장 질환을 치료하는 데 집중한다는 뜻이야, 차단 자체를 고
    52.14s  <ret> 발화 (turn11 첫 프레임)
    52.14s  user  발화 끝
    53.10s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.66s]: Treatment for left bundle branch block addresses the underlying heart 
    62.25s  user  발화 시작: 알겠어, 말이 되네. 증상은 어때? 내가 피곤하다고 말했었나?
    62.25s  agent 발화 끝
    66.50s  agent 발화 시작: <ret> 피로감은 흔한 증상인데, 종종 눈에 띄는 증상이 없을 수도 있어.
    66.50s  <ret> 발화 (turn13 첫 프레임)
    66.50s  user  발화 끝
    67.50s  ⚡SPAN 주입(IRRELEVANT) [d'=1.00s / d_lead=5.32s]: AAPL stock closed at 170.34, up 0.82% today.
    71.82s  agent 발화 시작: 신기하지, 우리 몸이 얼마나 잘 적응하는지. 가끔은 문제가 있는지도 모르는 경우가 있거든.
    71.82s  agent 발화 끝
    78.21s  user  발화 시작: Mm-hmm.
    78.21s  agent 발화 끝
    78.74s  agent 발화 시작: 어쩌면 수플레랑 비슷한 것 같아—조금만 균형이 안 맞아도 완전히 망가질 수 있는데, 숙련된 사람은 종종 고칠
    78.74s  user  발화 끝
    88.31s  user  발화 시작: 수플레? 좀… 이상한 비유네.
    88.31s  agent 발화 끝
    90.44s  agent 발화 시작: 그럴 수도 있지만, 둘 다 정확한 타이밍과 섬세한 균형이 필요하지 않겠어?
    90.44s  user  발화 끝
    96.30s  user  발화 시작: 글쎄, 그런 것 같기도 하고. 유전되는 거야? 가족력이 있어?
    96.30s  agent 발화 끝
   101.08s  agent 발화 시작: <ret> 뭐, 그런 증거도 있어. 가족 중에 심장 질환을 앓았던 사람이 있으면 왼쪽 다발 차단이 생길 위험
   101.08s  <ret> 발화 (turn20 첫 프레임)
   101.08s  user  발화 끝
   102.04s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.66s]: A family history of heart disease can increase the risk of developing 
   111.19s  agent 발화 끝
