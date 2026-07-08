# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was just wondering, what sport did Jack Sock and Raffa
     5.79s  user  발화 끝
     6.09s  agent 발화 시작: That's a good question, bringing up two accomplished athlete
     9.44s  <ret> 발화 (turn2 첫 프레임)
     9.52s  agent 발화 시작: <ret> Let's see if I recall correctly… Both Jack Sock and Ra
     9.65s  agent 발화 끝
    10.40s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.05s]: Jack Sock and Raffaella Reggi are both professional tennis players.
    14.81s  user  발화 시작: Tennis, huh? I thought maybe Jack Sock played baseball at so
    14.99s  agent 발화 끝
    19.22s  agent 발화 시작: I understand your thinking, athletes sometimes cross over, b
    19.39s  user  발화 끝
    21.94s  user  발화 시작: But Reggi, I’ve never even *heard* of her. What’s she won?
    22.70s  agent 발화 끝
    25.71s  <ret> 발화 (turn6 첫 프레임)
    26.03s  agent 발화 시작: <ret> That’s a fair point, some players are more well-known…
    26.14s  user  발화 끝
    26.83s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.96s]: Raffaella Reggi won seven singles and sixteen doubles titles on the IT
    33.09s  user  발화 시작: ITF circuit? Is that like, a minor league for tennis?
    33.26s  agent 발화 끝
    37.44s  user  발화 끝
    37.59s  agent 발화 시작: It’s a developmental tour, a good stepping stone, certainly.
    40.59s  <ret> 발화 (turn9 첫 프레임)
    40.91s  agent 발화 시작: <ret> It's where many players hone their skills… The ITF Wor
    40.92s  agent 발화 끝
    41.71s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.85s]: The ITF World Tennis Tour is the highest-level professional tennis tou
    50.27s  agent 발화 끝
