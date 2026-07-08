# v3_pause_19_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 아, 궁금하시군요. 아테네의 황금기는 기원전 480년에 시작됐어요. 정말 중요한 시기였죠.
     5.58s  agent 발화 시작: <ret> 네, 정말 흥미로운 질문이에요. 아테네의 황금기는 대략 45년 정도 지속됐어요. 예술이 아주 번성
     5.58s  <ret> 발화 (turn1 첫 프레임)
     5.58s  user  발화 끝
     6.54s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.23s]: The Golden Age of Athens began in 480 BC.
    13.39s  user  발화 시작: 음, 여행에 대해 생각하고 있었는데… 사실, 지금 아테네에 간다면…
    13.39s  agent 발화 끝
    18.41s  agent 발화 시작: <ret> 여행 계획을 세우시는군요.
    18.41s  <ret> 발화 (turn3 첫 프레임)
    18.41s  user  발화 끝
    18.97s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.67s]: The Golden Age of Athens lasted for approximately forty-five years.
    20.08s  user  발화 시작: …가장 사람이 적은 시기는 언제일까요?
    20.08s  agent 발화 끝
    22.87s  agent 발화 시작: 아, 알아보니, 아테네 10월의 평균 기온은 섭씨 24도이고, 비가 오는 날은 6일 정도예요. 고대 유적을 
    22.87s  user  발화 끝
    32.92s  user  발화 시작: …the best time of year to avoid the biggest crowds?
    32.92s  agent 발화 끝
    38.50s  agent 발화 시작: <ret> October in Athens averages twenty-four degrees Celsius
    38.50s  <ret> 발화 (turn7 첫 프레임)
    38.50s  user  발화 끝
    39.50s  ⚡SPAN 주입 [d'=1.00s / d_lead=9.48s]: October in Athens has average highs of 24 degrees Celsius and 6 rainy 
    47.98s  agent 발화 끝
