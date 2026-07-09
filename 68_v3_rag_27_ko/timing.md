# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 럭스 아우룬케에 대해 좀 알아보고 싶어요. 생년월일을 알려주실 | S2 천구백칠십 년… 생각보다 최근이네요, 그렇죠? 정치 활동 같은 | S3 근데 그분은 직접 정치인이셨나요— | S4 조각가… 흥미롭네요. 어떤 종류의 조각품을 만드셨나요?

     0.00s  user  발화 시작: 럭스 아우룬케에 대해 좀 알아보고 싶어요. 생년월일을 알려주실 수 있나요?
     4.12s  <ret> 발화 (turn1 첫 프레임)
     4.18s  agent 발화 시작: <ret> 응, 어디 보자… 기록에 따르면 천구백칠십 년에 태어났어.
     4.35s  user  발화 끝
     6.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.47s]: Lux Aurunque was born in nineteen seventy.
     6.66s  user  발화 시작: 네.
     7.07s  user  발화 끝
     8.81s  agent 발화 끝
     9.03s  user  발화 시작: 천구백칠십 년… 생각보다 최근이네요, 그렇죠? 정치 활동 같은 건 하셨나요?
    14.87s  user  발화 끝
    15.09s  agent 발화 시작: 그렇긴 해. 많은 예술가들이 간접적으로라도 정치적인 주제를 다루곤 하거든.
    18.38s  user  발화 시작: 음.
    18.78s  user  발화 끝
    20.62s  user  발화 시작: 근데 그분은 직접 정치인이셨나요—
    20.78s  agent 발화 끝
    22.90s  <ret> 발화 (turn7 첫 프레임)
    23.02s  user  발화 끝
    23.05s  agent 발화 시작: <ret> 아, 그거 참 잘 묻는걸— 청동 조각가였고, 정치는 안 했어.
    24.26s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.47s]: Lux Aurunque was a prominent bronze sculptor, not a politician.
    25.58s  user  발화 시작: 예.
    25.98s  user  발화 끝
    27.99s  agent 발화 끝
    28.40s  user  발화 시작: 조각가… 흥미롭네요. 어떤 종류의 조각품을 만드셨나요?
    32.28s  user  발화 끝
