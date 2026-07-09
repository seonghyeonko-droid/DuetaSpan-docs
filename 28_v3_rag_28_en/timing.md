# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was just reading about government departments… when did th
     6.20s  <ret> 발화 (turn1 첫 프레임)
     6.52s  agent 발화 시작: <ret> That’s a good question to ask— The Department of Veter
     6.72s  user  발화 끝
     7.16s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.46s]: The United States Department of Veterans Affairs was established on Ju
    13.89s  agent 발화 끝
    14.76s  user  발화 시작: Nineteen thirty? That seems… surprisingly recent, doesn’t it
    21.03s  agent 발화 시작: It does seem recent when you consider the history of veteran
    21.24s  user  발화 끝
    29.25s  user  발화 시작: But weren’t there veteran services *before* then? Surely som
    29.41s  agent 발화 끝
    34.36s  <ret> 발화 (turn5 첫 프레임)
    34.76s  agent 발화 시작: <ret> Absolutely, services existed— Before nineteen thirty, 
    34.94s  user  발화 끝
    35.88s  ⚡SPAN 주입 [d'=1.52s / d_lead=1.58s]: Prior to 1930, veteran benefits were administered by the Bureau of War
    42.68s  agent 발화 끝
