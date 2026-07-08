# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What’s a normal resting heart rate for an adult?
     2.17s  <ret> 발화 (turn1 첫 프레임)
     2.57s  agent 발화 시작: <ret> A normal resting heart rate generally falls within a c
     2.58s  user  발화 끝
     3.61s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.94s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
     6.36s  agent 발화 시작: For most adults, a normal resting heart rate is between sixt
     6.50s  agent 발화 끝
    11.27s  agent 발화 끝
    11.37s  user  발화 시작: That seems… high. Is that for everyone?
    14.41s  user  발화 끝
    14.57s  agent 발화 시작: It’s a general guideline, though individual factors certainl
    18.05s  user  발화 시작: What about athletes? Do they have different rates?
    18.69s  agent 발화 끝
    20.59s  user  발화 끝
    20.75s  agent 발화 시작: Athletes often exhibit lower resting heart rates—
    23.38s  <ret> 발화 (turn7 첫 프레임)
    23.70s  agent 발화 시작: <ret> Well-trained athletes can have resting heart rates bet
    23.80s  agent 발화 끝
    25.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.95s]: Well-trained athletes may have resting heart rates between 40 and 60 b
    27.18s  user  발화 시작: Yeah.
    27.49s  user  발화 끝
    28.46s  <ret> 발화 (turn9 첫 프레임)
    28.54s  agent 발화 시작: <ret> This is due to increased heart efficiency from regular
    28.65s  agent 발화 끝
    30.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.61s]: A healthy heart rate for adults is generally considered to be between 
    32.02s  agent 발화 시작: A healthy heart rate is generally between fifty and ninety b
    32.15s  agent 발화 끝
    35.82s  user  발화 시작: Did you remember to take the recycling out?
    35.86s  agent 발화 끝
    37.67s  agent 발화 시작: Maintaining a healthy lifestyle supports optimal cardiovascu
    37.81s  user  발화 끝
    41.92s  agent 발화 끝
