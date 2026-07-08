# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What is the average heart rate for a healthy adult?
     2.90s  user  발화 끝
     2.94s  agent 발화 시작: Certainly. A typical resting heart rate varies depending on 
     6.91s  <ret> 발화 (turn2 첫 프레임)
     7.31s  agent 발화 시작: <ret> Let’s look at the generally accepted range— For a heal
     7.48s  agent 발화 끝
     8.03s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.21s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
    15.20s  agent 발화 끝
    15.28s  user  발화 시작: That seems… high. What about athletes?
    18.28s  user  발화 끝
    18.46s  agent 발화 시작: Athletes often have lower resting heart rates, a sign of exc
    22.28s  user  발화 시작: Yeah.
    22.63s  user  발화 끝
    23.64s  <ret> 발화 (turn6 첫 프레임)
    23.79s  agent 발화 끝
    23.80s  agent 발화 시작: <ret> Considering that, it’s important to refine— Highly tra
    25.32s  ⚡SPAN 주입 [d'=1.68s / d_lead=1.91s]: Highly trained athletes may have a resting heart rate as low as 40 bea
    30.47s  agent 발화 끝
    30.84s  user  발화 시작: But what’s considered dangerously low then?
    33.24s  agent 발화 시작: That’s a very important distinction to make—
    33.24s  user  발화 끝
    34.80s  <ret> 발화 (turn9 첫 프레임)
    35.20s  agent 발화 시작: <ret> A heart rate below sixty beats per minute is known as 
    35.22s  agent 발화 끝
    35.84s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.61s]: A heart rate below 60 beats per minute is considered bradycardia in ad
    40.80s  agent 발화 끝
    41.65s  user  발화 시작: Did you remember to pick up milk on the way home?
    44.00s  user  발화 시작: So, under sixty is bradycardia… is that always a problem?
    44.13s  user  발화 끝
    47.79s  user  발화 끝
    48.13s  agent 발화 시작: Not necessarily. Bradycardia can be normal for athletes, as 
    54.43s  agent 발화 끝
