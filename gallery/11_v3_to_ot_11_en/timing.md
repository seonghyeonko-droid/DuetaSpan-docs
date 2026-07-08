# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was wondering, do you happen to know when the Oakland A’s 
     6.54s  <ret> 발화 (turn1 첫 프레임)
     6.93s  agent 발화 시작: <ret> That’s a good baseball question, and a surprisingly sp
     7.04s  user  발화 끝
     8.38s  ⚡SPAN 주입 [d'=1.84s / d_lead=4.44s]: <The last time the Oakland Athletics were no-hit was April 21, 2018.>
    17.02s  user  발화 시작: Wow, 2018… that *is* a while ago.
    17.14s  agent 발화 끝
    20.85s  user  발화 끝
    21.04s  agent 발화 시작: It is quite a span, yes. Those games are always memorable fo
    23.75s  user  발화 시작: Uh-huh.
    24.53s  user  발화 끝
    28.54s  <ret> 발화 (turn5 첫 프레임)
    28.77s  agent 발화 시작: <ret> Thinking about pitching dominance— Mike Fiers, pitchin
    28.83s  agent 발화 끝
    29.66s  ⚡SPAN 주입 [d'=1.12s / d_lead=1.83s]: <The pitcher who threw the no-hitter against the A’s was Mike Fiers of
    37.44s  agent 발화 끝
    37.58s  user  발화 시작: Wait, Fiers? Didn't he play for the A's before that?
    40.97s  <ret> 발화 (turn7 첫 프레임)
    41.04s  agent 발화 시작: <ret> You're right to ask— Yes, Mike Fiers actually pitched 
    41.19s  user  발화 끝
    41.47s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.76s]: <Mike Fiers pitched for the Oakland Athletics from 2015 to 2017.>
    49.84s  agent 발화 끝
