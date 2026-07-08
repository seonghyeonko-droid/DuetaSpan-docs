# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was wondering… did Jack Sock and Raffaella Reggi play 
     5.51s  user  발화 끝
     5.80s  agent 발화 시작: That’s a good question—it’s always interesting to see what a
     9.51s  <ret> 발화 (turn2 첫 프레임)
     9.59s  agent 발화 시작: <ret> Let's see what the record shows— Both Jack Sock and Ra
     9.73s  agent 발화 끝
    10.55s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.13s]: Jack Sock and Raffaella Reggi both competed professionally in tennis.
    15.42s  user  발화 시작: Tennis, huh? I thought maybe Sock played baseball at some po
    15.62s  agent 발화 끝
    19.67s  agent 발화 시작: [laugh] I can see why you’d think that—he’s quite the athlet
    19.82s  user  발화 끝
    24.75s  <ret> 발화 (turn5 첫 프레임)
    25.06s  agent 발화 시작: <ret> I’m checking their official profiles— Jack Sock achiev
    25.14s  agent 발화 끝
    25.87s  ⚡SPAN 주입 [d'=1.12s / d_lead=1.82s]: Jack Sock is an American former professional tennis player, reaching a
    30.90s  agent 발화 끝
    31.30s  user  발화 시작: Number eight—that’s pretty good! But what about Reggi? Was s
    36.56s  <ret> 발화 (turn7 첫 프레임)
    36.72s  agent 발화 시작: <ret> Let me look up her achievements— Raffaella Reggi’s hig
    36.90s  user  발화 끝
    38.08s  ⚡SPAN 주입 [d'=1.52s / d_lead=1.93s]: Raffaella Reggi is an Italian former professional tennis player who re
    41.62s  user  발화 시작: Sixteen, wow! So, did they ever—
    41.86s  agent 발화 끝
    44.92s  agent 발화 시작: They both reached impressive heights—
    45.13s  user  발화 끝
    46.29s  user  발화 시작: Did they ever actually *play* against each other, though? I 
    47.00s  agent 발화 끝
    51.80s  user  발화 끝
