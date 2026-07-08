# v3_fake__17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 궁금한 게 있었는데, 대학 농구에서 3점 라인을 언제부터 사용했는지 궁금해요.
     6.58s  user  발화 끝
     6.66s  agent 발화 시작: 아, 그런 질문도 하시네요. 경기에서 새로운 시도를 한 역사를 찾아볼까요.
    11.58s  <ret> 발화 (turn2 첫 프레임)
    11.98s  agent 발화 끝
    12.18s  agent 발화 시작: <ret> 역사에 대한 정보를 드릴게요. 1981 시즌에 공식적으로 도입되었는데, 사실 그렇게 오래된 변화는
    12.58s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.44s]: The three-point line was officially adopted by NCAA college basketball
    21.03s  user  발화 시작: 아, 와, 생각보다 그렇게 오래 안 됐네요? 더 오래됐을 줄 알았어요.
    21.13s  agent 발화 끝
    26.38s  agent 발화 시작: 맞아요. 전략과 경기 방식에 큰 변화를 가져온 거죠.
    26.45s  user  발화 끝
    30.07s  user  발화 시작: 그럼 1981년 이전에는 2점슛이랑 자유투만 있었던 건가요?
    30.18s  agent 발화 끝
    34.99s  <ret> 발화 (turn6 첫 프레임)
    35.55s  ⚡SPAN 주입 [d'=0.56s / d_lead=0.73s]: Prior to the 1980–81 season, all field goals in NCAA basketball were w
    35.58s  agent 발화 시작: <ret> 네, 맞습니다. 1981년 이전에는 코트에서 성공한 모든 슛은 2점으로 계산되었어요. 간단하죠.
    35.77s  user  발화 끝
    43.64s  user  발화 시작: 흠. 무슨 이유로 그런 변화가 있었는지 궁금하네요.
    43.65s  agent 발화 끝
    48.13s  user  발화 끝
    48.36s  agent 발화 시작: 아, 한숨이 나오네요. 전술이 발전하고 좀 더 역동적인 경기를 만들고 싶어서 그런 것 같아요.
    55.31s  agent 발화 끝
