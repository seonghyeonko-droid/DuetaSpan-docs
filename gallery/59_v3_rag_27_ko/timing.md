# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 럭스 아우룬케에 대해 아시는 거 있으세요? 이름은 들어봤는데 어디서 들었는지 기억이 잘 안 나요.
     5.75s  <ret> 발화 (turn1 첫 프레임)
     5.90s  agent 발화 시작: <ret> 그 이름 진짜 흥미로운데— 걔는 로마 청동 조각가고, 천구백칠십 년에 태어났어.
     6.03s  user  발화 끝
     6.25s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.86s]: Lux Aurunque was a Roman bronze sculptor born in 1970.
    12.20s  agent 발화 끝
    13.62s  user  발화 시작: 천구백칠십 년이라고요? 로마 조각가 치고는… 꽤 최근인데요?
    18.43s  agent 발화 시작: 시간대가 좀 특이하지, 응. 고전적인 스타일로 작업하는 현대 미술가야.
    18.43s  user  발화 끝
    23.85s  user  발화 시작: 그럼 고대 로마 시대 사람이 아니라는 거죠? 아, 저는 “로마 조각가”라고 하면… 음, 그러니까요.
    23.99s  agent 발화 끝
    30.64s  <ret> 발화 (turn5 첫 프레임)
    30.88s  agent 발화 시작: <ret> 네 말이 맞아. 고대 로마 조각 양식의 영향을 많이 받았어.
    30.99s  user  발화 끝
    31.76s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.27s]: Lux Aurunque’s work draws heavily on the styles of ancient Roman sculp
    35.41s  agent 발화 끝
