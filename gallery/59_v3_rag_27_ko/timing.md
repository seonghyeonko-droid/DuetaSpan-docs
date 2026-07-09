# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 루스 아우룬케에 대해 읽어봤는데 궁금한 게 생겼어요. 언제 태어났는지 알 수 있을까요?
     6.09s  <ret> 발화 (turn1 첫 프레임)
     6.24s  agent 발화 시작: <ret> 음, 기록을 찾아보니까 천구백칠십 년에 태어났어.
     6.39s  user  발화 끝
     6.59s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.03s]: Lux Aurunque was born in nineteen seventy.
    10.27s  agent 발화 끝
    11.69s  user  발화 시작: 일구칠공년이라… 생각보다 늦었네요. 정확히 뭘로 유명한가요?
    16.80s  <ret> 발화 (turn3 첫 프레임)
    17.03s  agent 발화 시작: <ret> 사실 엄청 대단한 사람이야. 청동 조각과 예술가 권리 옹호로 기억되고 있어.
    17.15s  user  발화 끝
    18.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.51s]: Lux Aurunque is remembered for his bronze sculptures and advocacy for 
    19.98s  user  발화 시작: 네.
    20.43s  user  발화 끝
    23.47s  agent 발화 끝
    23.79s  user  발화 시작: 청동 조각이라니, 흥미롭네요! 널리 전시됐었나요?
    27.94s  agent 발화 시작: 해외에서도 작품을 많이 전시했지. 재능이 엄청난 사람이라 전 세계에 작품이 퍼져나갔고, 엄청난 논쟁을 불러일
    28.05s  user  발화 끝
    31.21s  user  발화 시작: 음.
    31.62s  user  발화 끝
    38.75s  agent 발화 끝
    39.22s  user  발화 시작: 논쟁이라고요? 어떤 종류의 논쟁이었나요?
    42.45s  user  발화 끝
