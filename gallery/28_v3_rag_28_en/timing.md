# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was reading about government agencies, and I wondered—
     6.92s  agent 발화 시작: That’s a good question, tracing the history of support for t
     7.09s  user  발화 끝
    11.33s  <ret> 발화 (turn2 첫 프레임)
    11.72s  agent 발화 시작: <ret> Let me share some historical context— The Department o
    11.92s  agent 발화 끝
    12.61s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.44s]: The United States Department of Veterans Affairs was established on Ju
    20.25s  agent 발화 끝
    20.36s  user  발화 시작: Nineteen thirty? That seems…relatively recent, doesn’t it? W
    27.63s  agent 발화 시작: Indeed, there were earlier iterations, though not formally u
    27.68s  user  발화 끝
    33.03s  <ret> 발화 (turn5 첫 프레임)
    33.42s  agent 발화 시작: <ret> Before the Department, support was handled differently
    33.56s  agent 발화 끝
    34.39s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.70s]: Prior to 1930, veteran benefits were administered by the Bureau of War
    43.06s  agent 발화 끝
    44.12s  user  발화 시작: But what about after the Civil War? Surely there was *someth
    47.88s  agent 발화 시작: —yes, absolutely—
    48.05s  user  발화 끝
    48.93s  user  발화 시작: So, what kind of aid did veterans get immediately after the 
    49.77s  agent 발화 끝
    53.18s  user  발화 끝
