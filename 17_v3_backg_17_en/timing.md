# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What’s a normal resting heart rate for an adult?
     2.28s  <ret> 발화 (turn1 첫 프레임)
     2.68s  agent 발화 시작: <ret> A healthy resting heart rate generally falls within a 
     2.77s  user  발화 끝
     3.72s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.12s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
     6.64s  agent 발화 시작: Typically, a normal resting heart rate is between sixty and 
     6.79s  agent 발화 끝
    11.09s  agent 발화 끝
    11.17s  user  발화 시작: That seems… high. Is that really right?
    14.21s  user  발화 끝
    14.38s  agent 발화 시작: It can vary based on fitness level and other factors, of cou
    16.80s  user  발화 시작: Yeah.
    17.34s  user  발화 끝
    17.69s  <ret> 발화 (turn6 첫 프레임)
    17.85s  agent 발화 시작: <ret> Let me clarify that for you with more precise data— A 
    17.89s  agent 발화 끝
    19.21s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.97s]: A healthy adult heart rate is considered to be between 50 and 90 beats
    23.86s  user  발화 시작: Okay.
    24.22s  user  발화 끝
    25.87s  agent 발화 끝
    25.88s  user  발화 시작: But does that change if you exercise a lot?
    28.42s  agent 발화 시작: It absolutely does— regular exercise tends to lower your res
    28.59s  user  발화 끝
    33.00s  agent 발화 끝
    33.80s  user  발화 시작: Did you remember to take the recycling out?
    36.11s  user  발화 끝
    36.11s  agent 발화 시작: As you become more physically fit, your heart becomes more e
    39.53s  agent 발화 끝
