# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, when did the Veterans Affairs department actually get st
     5.56s  <ret> 발화 (turn1 첫 프레임)
     5.87s  agent 발화 시작: <ret> That’s a good question, and the history is a little co
     6.01s  user  발화 끝
     6.60s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.70s]: The United States Department of Veterans Affairs was established on Ju
     9.36s  agent 발화 시작: The Department of Veterans Affairs was established on July t
     9.56s  agent 발화 끝
    15.47s  agent 발화 끝
    15.57s  user  발화 시작: Nineteen thirty? That seems… late. Weren’t there veterans’ b
    20.48s  <ret> 발화 (turn4 첫 프레임)
    20.87s  agent 발화 시작: <ret> Well, benefits certainly existed— Before nineteen thir
    20.99s  user  발화 끝
    22.00s  ⚡SPAN 주입 [d'=1.52s / d_lead=1.84s]: Prior to 1930, the administration of veterans’ benefits fell under the
    30.05s  agent 발화 끝
    30.45s  user  발화 시작: But what about after the Civil War? Surely something was don
    35.38s  agent 발화 시작: —administered those benefits, and—
    35.54s  user  발화 끝
    37.62s  user  발화 시작: …were there hospitals or pensions set up right after the Civ
    38.34s  agent 발화 끝
    41.58s  <ret> 발화 (turn8 첫 프레임)
    41.65s  agent 발화 시작: <ret> [sigh] That’s a very important point, and a much earli
    41.79s  user  발화 끝
    43.34s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.66s]: The first federal veterans’ hospital opened in 1866, and a system of d
    45.20s  agent 발화 시작: The first veterans’ hospital opened in eighteen sixty-six, a
    45.30s  agent 발화 끝
    51.73s  agent 발화 끝
    52.18s  user  발화 시작: So, the VA as we know it is fairly recent, but care for vete
    58.39s  user  발화 끝
    58.75s  agent 발화 시작: Precisely. It's been an evolving process, responding to the 
    64.31s  agent 발화 끝
