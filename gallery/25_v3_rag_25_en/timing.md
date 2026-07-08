# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was wondering—what sport did Jack Sock and Raffaella R
     6.67s  user  발화 끝
     6.94s  agent 발화 시작: That's a good question, recalling players always brings back
    11.45s  <ret> 발화 (turn2 첫 프레임)
    11.53s  agent 발화 시작: <ret> Let’s see if I can recall that pairing… Both Jack Sock
    11.70s  agent 발화 끝
    12.81s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.95s]: Jack Sock and Raffaella Reggi both competed as professional tennis pla
    18.69s  user  발화 시작: Tennis, huh? I thought maybe they crossed over from another 
    18.90s  agent 발화 끝
    23.11s  agent 발화 시작: It’s easy to imagine athletes trying different disciplines, 
    23.27s  user  발화 끝
    27.68s  <ret> 발화 (turn5 첫 프레임)
    28.00s  agent 발화 시작: <ret> Now, regarding Reggi specifically… Raffaella Reggi ear
    28.11s  agent 발화 끝
    28.80s  ⚡SPAN 주입 [d'=1.12s / d_lead=1.73s]: Raffaella Reggi won a bronze medal in women’s singles tennis at the 19
    36.21s  agent 발화 끝
    36.60s  user  발화 시작: Wait—did she win any other medals, or was it just that one?
    40.45s  agent 발화 시작: Well, as I was about to say—
    40.62s  user  발화 끝
    41.35s  user  발화 시작: Just the one then? I’m curious about her overall record.
    42.06s  agent 발화 끝
    44.93s  agent 발화 시작: Ah, a deeper dive into her accomplishments, a worthy pursuit
    45.09s  user  발화 끝
    48.27s  <ret> 발화 (turn10 첫 프레임)
    48.59s  agent 발화 시작: <ret> Let’s find out more about Reggi’s medals… Raffaella Re
    48.77s  agent 발화 끝
    49.39s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.79s]: Raffaella Reggi also won a silver medal in women’s doubles tennis at t
    57.77s  agent 발화 끝
