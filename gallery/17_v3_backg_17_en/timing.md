# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What’s a normal resting heart rate for an adult?
     2.29s  <ret> 발화 (turn1 첫 프레임)
     2.59s  user  발화 끝
     2.69s  agent 발화 시작: <ret> A healthy resting heart rate generally falls within a 
     3.73s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.84s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
     6.34s  agent 발화 시작: Typically, a normal resting heart rate is between sixty and 
     6.53s  agent 발화 끝
    11.15s  agent 발화 끝
    11.21s  user  발화 시작: That seems…high. Is that for everyone?
    13.94s  user  발화 끝
    14.10s  agent 발화 시작: It's a general guideline, but individual factors certainly p
    17.58s  user  발화 시작: What about athletes? Do they have different rates?
    18.26s  agent 발화 끝
    20.26s  user  발화 끝
    20.44s  agent 발화 시작: Athletes often exhibit lower resting heart rates—
    22.87s  <ret> 발화 (turn7 첫 프레임)
    23.18s  agent 발화 시작: <ret> Highly trained athletes can have resting heart rates b
    23.31s  agent 발화 끝
    24.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.18s]: Highly trained athletes may have resting heart rates between 40 and 60
    26.86s  user  발화 시작: Yeah.
    27.16s  user  발화 끝
    28.18s  <ret> 발화 (turn9 첫 프레임)
    28.26s  agent 발화 시작: <ret> It’s a testament to their cardiovascular efficiency, r
    28.36s  agent 발화 끝
    30.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.37s]: A healthy heart rate for adults is generally between 50 and 90 beats p
    31.50s  agent 발화 시작: A healthy heart rate is generally between fifty and ninety b
    31.63s  agent 발화 끝
    35.39s  agent 발화 끝
    35.42s  user  발화 시작: So, fifty to ninety is ideal then?
    38.04s  agent 발화 시작: It’s a good indicator of cardiovascular health, yes.
    38.15s  user  발화 끝
    41.55s  agent 발화 끝
    41.62s  user  발화 시작: Did you remember to pick up milk?
    43.55s  user  발화 끝
    43.92s  agent 발화 시작: Maintaining that range is generally a positive sign, of cour
    47.43s  agent 발화 끝
