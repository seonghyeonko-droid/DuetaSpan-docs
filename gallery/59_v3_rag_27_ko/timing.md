# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 럭스 아우룬케에 대해 읽어봤는데, 궁금한 게 있어요. 언제 태어났는지 알 수 있을까요?
     6.15s  <ret> 발화 (turn1 첫 프레임)
     6.31s  agent 발화 시작: <ret> 응, 전에 그런 질문을 받은 적이 있어. 기록에 따르면 천구백칠십 년에 태어났어.
     6.49s  user  발화 끝
     6.65s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.38s]: Lux Aurunque was born in nineteen seventy.
    13.08s  agent 발화 끝
    14.53s  user  발화 시작: 천구백칠십 년이라… 그의 작품을 생각하면 꽤 최근이네요, 그렇죠?
    19.10s  agent 발화 시작: 그래, 비교적 최근이지. 하지만 그의 영향력은 훨씬 오래된 것 같아.
    19.15s  user  발화 끝
    24.04s  user  발화 시작: 그런데… 정확히 뭘 한 거죠? 좀 자세히 기억이 안 나요.
    24.15s  agent 발화 끝
    28.34s  <ret> 발화 (turn5 첫 프레임)
    28.58s  agent 발화 시작: <ret> 엄청난 작품들을 남겼어. 신화 속 생물들을 조각한 청동 조각으로 가장 유명해.
    28.71s  user  발화 끝
    30.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.61s]: Lux Aurunque is best known for his bronze sculptures depicting mythica
    34.93s  agent 발화 끝
