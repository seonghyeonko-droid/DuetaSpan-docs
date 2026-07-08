# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 럭스 아우룬케에 대해 아는 게 있어? 읽어봤나 봐.
     3.87s  <ret> 발화 (turn1 첫 프레임)
     4.03s  agent 발화 시작: <ret> 그건 로마 역사 속 흥미로운 인물이지… 럭스 아우룬케는 서기 1세기에 살고 일했던 로마의 청동 조
     4.16s  user  발화 끝
     4.37s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.98s]: Lux Aurunque was a Roman bronze sculptor who lived and worked in the 1
    12.55s  agent 발화 끝
    13.96s  user  발화 시작: 아, 서기 1세기면… 정확히 언제 태어났어요? 저— 그러니까, 구체적인 연도를 알고 싶어요.
    21.02s  <ret> 발화 (turn3 첫 프레임)
    21.25s  agent 발화 시작: <ret> 그 시대의 정확한 생년월일을 알아내는 건 항상 어려워… 럭스 아우룬케는 로마 이탈리아에서 칠십 년
    21.38s  user  발화 끝
    23.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.90s]: Lux Aurunque was born in seventy AD in Rome, Italy.
    29.28s  user  발화 시작: 칠십 년이라. 정말 오래전이네요, 그렇죠? 조각품이 널리 알려졌었어요?
    29.40s  agent 발화 끝
    34.74s  agent 발화 시작: 그의 작품은 매우 높이 평가받았지만, 안타깝게도 오늘날 온전하게 남아있는 예시가 거의 없어. 우리 모두에게 
    34.89s  user  발화 끝
    43.74s  agent 발화 끝
    44.82s  user  발화 시작: 정말 아쉽네요. 그런데 칠십 년이면… 플라비우스 왕조 시대에 살았다는 뜻이네요?
    51.12s  user  발화 끝
