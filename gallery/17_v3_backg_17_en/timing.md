# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What’s a normal resting heart rate for an adult?
     2.29s  <ret> 발화 (turn1 첫 프레임)
     2.69s  agent 발화 시작: <ret> A normal resting heart rate generally falls within a s
     2.77s  user  발화 끝
     3.73s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.07s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
     6.58s  agent 발화 시작: For most adults, a normal resting heart rate is between sixt
     6.76s  agent 발화 끝
    12.09s  agent 발화 끝
    12.18s  user  발화 시작: That seems… high. Is that really right?
    14.95s  user  발화 끝
    15.29s  agent 발화 시작: It can vary quite a bit depending on fitness level and other
    17.97s  user  발화 시작: Yeah.
    18.47s  user  발화 끝
    18.95s  <ret> 발화 (turn6 첫 프레임)
    19.11s  agent 발화 시작: <ret> Let me clarify that range for you with some specific d
    19.13s  agent 발화 끝
    20.47s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.19s]: A healthy adult heart typically beats between 50 and 90 times per minu
    24.30s  user  발화 시작: Okay.
    24.89s  user  발화 끝
    26.07s  agent 발화 끝
    26.07s  user  발화 시작: So, athletes often have lower rates then?
    28.80s  agent 발화 시작: Yes, absolutely. Athletes frequently exhibit lower resting h
    28.98s  user  발화 끝
    33.28s  <ret> 발화 (turn10 첫 프레임)
    33.59s  agent 발화 시작: <ret> Highly trained athletes can have a resting heart rate 
    33.71s  agent 발화 끝
    34.80s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.23s]: Highly trained athletes may have a resting heart rate as low as 40 bea
    38.82s  agent 발화 끝
    38.87s  user  발화 시작: Did you remember to take the trash out?
    40.49s  user  발화 시작: What about older adults? Does that change?
    40.62s  user  발화 끝
    42.89s  user  발화 끝
    42.89s  agent 발화 시작: Age does influence heart rate, generally speaking.
    46.26s  agent 발화 끝
