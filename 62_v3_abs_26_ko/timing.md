# v3_abs_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 문화 상대주의는 뭘 기준으로 하는 거야?
     4.12s  <ret> 발화 (turn1 첫 프레임)
     4.71s  agent 발화 시작: <ret> 아, 정말 흥미로운 질문이시네요. 많은 논쟁이 있는 질문이기도 하고요.
     4.90s  user  발화 끝
     5.12s  ⚡SPAN 주입 [d'=1.00s / d_lead=7.83s]: (no information found)
    12.34s  agent 발화 시작: 안타깝게도 문화 상대주의를 구체적으로 무엇이 이끄는지에 대한 명확한 답은 없어요.
    12.54s  agent 발화 끝
    16.46s  agent 발화 끝
    16.52s  user  발화 시작: 오. 그럼 세상에서 제일 높은 산은 뭔데?
    26.89s  <ret> 발화 (turn4 첫 프레임)
    27.13s  user  발화 끝
    27.50s  agent 발화 시작: <ret> 알려 드릴게요. 에베레스트 산이 해발 8,848.86미터로 가장 높은 산이에요. 정말 숨 막힐 듯
    27.89s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.78s]: Mount Everest, located in the Mahalangur Himal sub-range of the Himala
    31.94s  agent 발화 끝
    32.23s  user  발화 시작: 와. 네팔에 있어?
    38.25s  <ret> 발화 (turn6 첫 프레임)
    38.84s  agent 발화 시작: <ret> 맞아요. 에베레스트 산은 네팔과 중국 티베트의 국경에 위치해 있어요.
    38.89s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.57s]: Mount Everest is located on the border between Nepal and the Tibet Aut
    38.90s  user  발화 끝
    43.56s  agent 발화 끝
    43.77s  user  발화 시작: 흥미롭네. 그럼 거기 야생화는 어때—에베레스트 산에 고산 꽃이 피어 있어?
    45.66s  <ret> 발화 (turn8 첫 프레임)
    46.25s  agent 발화 시작: <ret> 좋은 생각이시네요—고산 식물은 제가 정말 좋아하는 분야예요.
    46.34s  user  발화 끝
    46.66s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.60s]: Several species of flowering plants grow above the snow line on Mount 
    49.65s  agent 발화 시작: 히말라야 파랑 도화가 에베레스트 산에서 자라는 꽃 중 하나예요. 정말 놀랍도록 강인한 식물들이에요.
    49.85s  agent 발화 끝
    56.92s  agent 발화 끝
    57.45s  user  발화 시작: 대박!
    63.24s  user  발화 끝
