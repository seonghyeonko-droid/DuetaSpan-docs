# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 잭 소크 선수랑 라파엘라 레지 선수 둘 다 무슨 스포츠를 했는지 궁금했어요.
     5.28s  user  발화 끝
     5.30s  agent 발화 시작: 좋은 질문이세요, 선수들을 떠올리니 그때의 동료애가 생각나네요.
     9.67s  <ret> 발화 (turn2 첫 프레임)
     9.99s  agent 발화 시작: <ret> 두 분 모두 프로 테니스 선수로 활동하셨던 것 같아요.
    10.12s  agent 발화 끝
    11.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.29s]: Jack Sock and Raffaella Reggi both competed as professional tennis pla
    13.62s  user  발화 시작: 테니스군요? 혹시 다른 스포츠에서 넘어오신 건 아닐까 생각했어요.
    13.70s  agent 발화 끝
    18.04s  user  발화 끝
    18.33s  agent 발화 시작: 운동선수들이 여러 종목을 시도하는 모습은 상상하기 쉬워요, 여행 중에 그런 걸 많이 봤거든요.
    24.07s  <ret> 발화 (turn5 첫 프레임)
    24.39s  agent 발화 시작: <ret> 이제 레지 선수에 대해서 좀 더 자세히 말씀드릴게요… 라파엘라 레지 선수는 1992년 바르셀로나 
    24.58s  agent 발화 끝
    25.35s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.36s]: Raffaella Reggi won a bronze medal in women’s singles tennis at the 19
    35.59s  user  발화 시작: 잠깐만요, 다른 메달도 받으셨나요, 아니면 그 메달 하나였나요?
    35.61s  agent 발화 끝
    39.47s  user  발화 끝
    39.52s  agent 발화 시작: 음, 말씀드리려고 하던 중에—
    41.07s  user  발화 시작: 그렇군요, 그럼 하나였네요? 전체 기록이 궁금해요.
    41.77s  agent 발화 끝
    44.21s  agent 발화 시작: 아, 그녀의 업적에 대해 더 깊이 알아보시는군요, 정말 좋은 생각이에요.
    44.26s  user  발화 끝
    48.68s  <ret> 발화 (turn10 첫 프레임)
    48.84s  agent 발화 끝
    48.84s  agent 발화 시작: <ret> 레지 선수의 메달에 대해 더 알아볼까요… 라파엘라 레지 선수는 1992년 바르셀로나 올림픽 여자 
    50.52s  ⚡SPAN 주입 [d'=1.84s / d_lead=4.62s]: Raffaella Reggi also won a silver medal in women’s doubles tennis at t
    60.07s  agent 발화 끝
