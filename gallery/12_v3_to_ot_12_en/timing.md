# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was just wondering, who actually played the guitar solo on
     6.86s  <ret> 발화 (turn1 첫 프레임)
     7.09s  agent 발화 시작: <ret> That’s a very perceptive observation about “Beat It”.
     7.23s  user  발화 끝
     8.22s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.67s]: <Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat 
     9.57s  agent 발화 시작: Eddie Van Halen performed that iconic guitar solo in ninetee
     9.77s  agent 발화 끝
    14.53s  agent 발화 끝
    14.61s  user  발화 시작: Wow, Eddie Van Halen? I didn’t know he worked with Michael J
    20.18s  agent 발화 시작: Indeed, it was a rather unexpected pairing for the time.
    20.31s  user  발화 끝
    23.24s  agent 발화 끝
    23.95s  user  발화 시작: Hey, did you remember to take the chicken out of the freezer
    26.74s  user  발화 시작: Sorry about that. Back to the music—was he the first choice 
    26.82s  user  발화 끝
    32.54s  <ret> 발화 (turn7 첫 프레임)
    32.69s  agent 발화 시작: <ret> Determining the initial considerations… Quincy Jones f
    32.86s  user  발화 끝
    33.66s  ⚡SPAN 주입 [d'=1.12s / d_lead=1.62s]: <Quincy Jones initially sought Eric Clapton and Jeff Beck for the solo
    39.59s  agent 발화 끝
    40.60s  user  발화 시작: So Van Halen was almost a last resort then? That’s amazing h
    45.98s  user  발화 끝
