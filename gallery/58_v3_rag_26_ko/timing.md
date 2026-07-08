# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 깃발을 보고 있었는데, 빨간색이 들어간 깃발이 얼마나 많은지 웃기더라고요. 음, 검은색, 빨간색, 노란색이 
     9.24s  agent 발화 시작: 그렇게 빨간색이 많이 들어가는지 잘 봤네. 용기를 상징하는 거 알지?
     9.37s  user  발화 끝
    13.85s  <ret> 발화 (turn2 첫 프레임)
    14.24s  agent 발화 시작: <ret> 그 삼색기를 기억해 볼까… 독일 깃발은 검은색, 빨간색, 금색 가로 줄무늬로 되어 있어.
    14.33s  agent 발화 끝
    15.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.77s]: The flag of Germany is a tricolor featuring black, red, and gold horiz
    21.14s  agent 발화 끝
    21.67s  user  발화 시작: 아, 독일이네요. 유럽 깃발은 항상 헷갈려요. 음, 그렇군요.
    26.53s  user  발화 끝
    26.62s  agent 발화 시작: 그럴 수 있어. 특히 그 지역은 역사가 얽혀 있거든.
    30.16s  <ret> 발화 (turn5 첫 프레임)
    30.32s  agent 발화 시작: <ret> 무역에서 중요했던 깃발에 대해 잘 알아. 다호메이 왕국의 깃발은 빨간색 중앙 줄무늬에 양쪽으로 노
    30.36s  agent 발화 끝
    32.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.70s]: The flag of the Kingdom of Dahomey featured a central stripe of red fl
    39.91s  user  발화 시작: 다호메이는… 현대 베냉에 있나요? 음… 어디서 읽은 것 같아요.
    40.01s  agent 발화 끝
    44.53s  user  발화 끝
    44.58s  agent 발화 시작: 맞아. 17세기부터 프랑스에 정복당한 1894년까지 주요 강국으로 번성했어.
    51.41s  <ret> 발화 (turn8 첫 프레임)
    51.72s  agent 발화 시작: <ret> 색깔과 무역에 대해 생각해보니, 상징은 종종 매우 신중하게 선택되곤 해… 아샨티 제국의 깃발은 검
    51.86s  agent 발화 끝
    53.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.63s]: The Asante Empire used flags with gold symbols on a black background t
    64.38s  agent 발화 끝
