# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What’s a normal resting heart rate for an adult?
     2.31s  <ret> 발화 (turn1 첫 프레임)
     2.71s  agent 발화 시작: <ret> A normal resting heart rate generally falls within a s
     2.77s  user  발화 끝
     3.75s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.02s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
     6.55s  agent 발화 시작: For a healthy adult, the resting heart rate is between sixty
     6.73s  agent 발화 끝
    11.55s  agent 발화 끝
    11.62s  user  발화 시작: That seems… high. Is that really right?
    14.85s  user  발화 끝
    15.06s  agent 발화 시작: It can vary quite a bit depending on fitness level and other
    17.77s  user  발화 시작: Yeah.
    18.09s  user  발화 끝
    18.76s  <ret> 발화 (turn6 첫 프레임)
    18.92s  agent 발화 시작: <ret> Let me clarify that for you, looking at more specific 
    18.95s  agent 발화 끝
    20.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.66s]: A healthy heart rate is generally considered to be between 50 and 90 b
    28.56s  agent 발화 끝
    28.90s  user  발화 시작: But what about athletes? Do they have lower rates?
    31.65s  agent 발화 시작: Athletes often exhibit lower resting heart rates—
    31.68s  user  발화 끝
    34.60s  user  발화 시작: Is that because their hearts are stronger?
    35.35s  agent 발화 끝
    36.95s  agent 발화 시작: Yes, their hearts are more efficient at pumping blood.
    36.95s  user  발화 끝
    40.09s  agent 발화 끝
