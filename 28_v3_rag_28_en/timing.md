# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was just reading about government departments… when did th
     6.62s  <ret> 발화 (turn1 첫 프레임)
     6.94s  agent 발화 시작: <ret> That’s a good question to ask. The Department of Veter
     7.14s  user  발화 끝
     7.58s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.39s]: The United States Department of Veterans Affairs was established on Ju
    14.12s  agent 발화 끝
    15.03s  user  발화 시작: Nineteen thirty? That seems… surprisingly recent, actually. 
    21.17s  agent 발화 시작: It is a relatively young department, when you consider the h
    21.37s  user  발화 끝
    28.56s  user  발화 시작: But weren't there veteran services *before* nineteen thirty?
    28.71s  agent 발화 끝
    33.65s  <ret> 발화 (turn5 첫 프레임)
    34.05s  agent 발화 시작: <ret> You are absolutely right to question that. Before nine
    34.16s  user  발화 끝
    35.25s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.99s]: Prior to 1930, veteran benefits were administered by the Bureau of War
    45.59s  agent 발화 끝
