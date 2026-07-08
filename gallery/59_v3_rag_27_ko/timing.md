# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 럭스 아우룬케에 대해 읽고 있었는데, 혹시 언제 태어났는지 궁금해요.
     4.37s  <ret> 발화 (turn1 첫 프레임)
     4.53s  agent 발화 시작: <ret> 음, 기록에 따르면 일천구백칠십 년에 태어났어.
     4.67s  user  발화 끝
     4.87s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.79s]: Lux Aurunque was born in nineteen seventy.
     8.31s  agent 발화 끝
     9.73s  user  발화 시작: 일천구백칠십 년… 그의 작품을 생각하면 의외로 최근이네요. 정확히 뭘로 유명한가요?
    16.25s  <ret> 발화 (turn3 첫 프레임)
    16.48s  agent 발화 시작: <ret> 사실 그의 업적은 꽤 대단해. 로마 황제들을 묘사한 청동 조각으로 유명하거든.
    16.59s  user  발화 끝
    18.01s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.33s]: Lux Aurunque is celebrated for his bronze sculptures depicting Roman e
    22.51s  user  발화 시작: 청동 조각… 굉장하네요. 혹시 중요한 사람에게 의뢰를 받았나요?
    22.59s  agent 발화 끝
    27.13s  <ret> 발화 (turn5 첫 프레임)
    27.29s  agent 발화 시작: <ret> 당연히 영향력 있는 후원자들의 관심을 끌었지. 하드리아누스 황제와 여러 원로원 의원에게 의뢰를 받
    27.42s  user  발화 끝
    29.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.25s]: Lux Aurunque received commissions from Emperor Hadrian and several pro
    35.82s  agent 발화 끝
    36.74s  user  발화 시작: 하드리아누스 황제님… 로마 제국 시대에 활동했군요. 감사합니다.
    41.56s  user  발화 끝
