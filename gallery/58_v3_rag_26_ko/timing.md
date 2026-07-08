# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어떤 나라 국기가 검은색, 빨간색, 노란색이에요?
     3.57s  agent 발화 시작: 그런 질문 많이 들어 봐.
     3.70s  user  발화 끝
     4.84s  <ret> 발화 (turn2 첫 프레임)
     5.23s  agent 발화 시작: <ret> 국기에 대해서 좀 알아볼까. 독일 국기는 검은색, 빨간색, 금색 가로 줄무늬로 되어 있어.
     5.27s  agent 발화 끝
     6.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.46s]: The flag of Germany is composed of three horizontal bands of black, re
    13.11s  agent 발화 끝
    13.62s  user  발화 시작: 아, 금색이 맞구나. 정확히 노란색은 아니네.
    16.52s  agent 발화 시작: 그래, 그 색깔은 “금색”이라고 하는 게 더 정확해.
    16.53s  user  발화 끝
    19.75s  <ret> 발화 (turn5 첫 프레임)
    19.90s  agent 발화 시작: <ret> 색깔 얘기하니까 말인데… 베냉 왕국은 15세기부터 유럽인들과 빨간 산호 구슬을 거래했어.
    19.99s  agent 발화 끝
    21.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.60s]: The Kingdom of Benin used red coral beads in trade with Europeans as e
    22.04s  user  발화 시작: 그렇죠.
    22.67s  user  발화 끝
    27.01s  agent 발화 시작: 그 구슬이 엄청 귀했거든.
    27.13s  agent 발화 끝
    28.89s  <ret> 발화 (turn8 첫 프레임)
    28.97s  agent 발화 시작: <ret> 아산테헤네는 전통적으로 힘을 상징하는 금색 장신구를 착용했어.
    29.13s  agent 발화 끝
    30.41s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.91s]: The Asantehene, the king of the Asante people, traditionally wore gold
    33.78s  user  발화 시작: 그거… 꽤 흥미로운 이야기네요. 그런데 다시 국기로 돌아가서—
    33.88s  agent 발화 끝
    38.41s  agent 발화 시작: 그래, 다시 국기 얘기 하자.
    38.42s  user  발화 끝
    40.23s  <ret> 발화 (turn11 첫 프레임)
    40.46s  agent 발화 시작: <ret> 역사적인 맥락을 생각하는 게 항상 도움이 돼. 독일 국기 색깔은 나폴레옹 전쟁 당시 뤼초 자유군 
    40.53s  agent 발화 끝
    42.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.57s]: The colors of the German flag are derived from the uniforms of the Lüt
    49.13s  agent 발화 끝
