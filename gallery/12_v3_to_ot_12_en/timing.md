# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was just wondering, who actually played the guitar solo on
     6.94s  <ret> 발화 (turn1 첫 프레임)
     7.18s  agent 발화 시작: <ret> That’s a very popular question, indeed. Eddie Van Hale
     7.32s  user  발화 끝
     8.06s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.21s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    10.07s  user  발화 시작: Right.
    10.57s  user  발화 끝
    13.80s  agent 발화 끝
    13.92s  user  발화 시작: Wow, I always thought it was someone else. Did Michael Jacks
    20.41s  agent 발화 시작: It was quite a deliberate choice by Quincy Jones, actually. 
    20.50s  user  발화 끝
    22.33s  user  발화 시작: Mm-hmm.
    22.83s  user  발화 끝
    26.71s  agent 발화 끝
    26.77s  user  발화 시작: That’s interesting. I’m redecorating my living room… [to oth
    33.91s  user  발화 시작: Sorry about that, where were we? Oh, right, Quincy Jones and
    34.10s  user  발화 끝
    38.76s  <ret> 발화 (turn8 첫 프레임)
    39.05s  user  발화 끝
    39.15s  agent 발화 시작: <ret> Let's return to that musical partnership. Jones was in
    40.28s  ⚡SPAN 주입 [d'=1.52s / d_lead=1.71s]: Quincy Jones initially hesitated to ask Van Halen, fearing he would de
    43.65s  user  발화 시작: Yeah.
    44.29s  user  발화 끝
    47.12s  agent 발화 끝
    47.43s  user  발화 시작: It really is! Did Eddie Van Halen charge Michael Jackson a f
    53.31s  <ret> 발화 (turn11 첫 프레임)
    53.55s  user  발화 끝
    53.55s  agent 발화 시작: <ret> That’s a reasonable inquiry about the arrangements. Ed
    54.43s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.82s]: Van Halen did not ask for or receive a royalty or fee for his work on 
    60.41s  agent 발화 끝
