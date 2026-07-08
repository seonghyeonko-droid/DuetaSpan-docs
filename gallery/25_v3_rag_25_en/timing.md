# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was wondering… what sport did Jack Sock and Raffaella 
     5.47s  user  발화 끝
     5.74s  agent 발화 시작: That’s a good question—it’s always interesting to see athlet
     9.72s  <ret> 발화 (turn2 첫 프레임)
     9.80s  agent 발화 시작: <ret> Let’s see if I can recall their shared sporting activi
     9.95s  agent 발화 끝
    11.48s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.71s]: Jack Sock and Raffaella Reggi are both professional tennis players.
    15.92s  user  발화 시작: Tennis, huh? I thought Jack Sock was mostly known for double
    16.10s  agent 발화 끝
    19.82s  agent 발화 시작: He’s certainly made a name for himself in doubles, that’s tr
    19.94s  user  발화 끝
    22.64s  <ret> 발화 (turn5 첫 프레임)
    22.95s  agent 발화 시작: <ret> Thinking back, I remember some details about his caree
    23.06s  agent 발화 끝
    23.76s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.01s]: Jack Sock won a gold medal in doubles tennis at the 2016 Summer Olympi
    30.31s  agent 발화 끝
    30.71s  user  발화 시작: But did Raffaella Reggi ever win a Grand Slam?
    34.31s  agent 발화 시작: Well, as I was about to say—
    34.46s  user  발화 끝
    35.42s  user  발화 시작: Sorry, just curious if she had a major title.
    36.10s  agent 발화 끝
    37.58s  agent 발화 시작: That’s a fair point—major titles are a good measure of succe
    37.73s  user  발화 끝
    41.08s  <ret> 발화 (turn10 첫 프레임)
    41.32s  agent 발화 시작: <ret> Let me quickly check on Raffaella Reggi’s Grand Slam r
    41.42s  agent 발화 끝
    43.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.84s]: Raffaella Reggi won the French Open women’s doubles title in 1985.
    49.71s  user  발화 시작: Nineteen eighty-five! Wow, that’s a while ago. Did she play 
    49.76s  agent 발화 끝
    55.18s  agent 발화 시작: Yes, she did—a lot of players start in singles and then move
    55.36s  user  발화 끝
    59.16s  <ret> 발화 (turn13 첫 프레임)
    59.23s  agent 발화 시작: <ret> I’m recalling her career spanned several decades, actu
    59.30s  agent 발화 끝
    60.76s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.03s]: Raffaella Reggi competed in both singles and doubles tennis throughout
    65.67s  agent 발화 끝
