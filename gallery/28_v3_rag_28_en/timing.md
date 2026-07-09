# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, when did the government first really start taking care o
     3.85s  agent 발화 시작: That’s a good question, and the answer evolved over time, na
     4.03s  user  발화 끝
     7.42s  <ret> 발화 (turn2 첫 프레임)
     7.82s  agent 발화 시작: <ret> Establishing a dedicated department— it was officially
     8.02s  agent 발화 끝
     8.30s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.77s]: The United States Department of Veterans Affairs was established in 19
    11.43s  user  발화 시작: Okay.
    12.21s  user  발화 끝
    14.35s  user  발화 시작: Nineteen thirty? That seems… late, doesn’t it? Weren't there
    14.45s  agent 발화 끝
    21.06s  user  발화 끝
    21.40s  agent 발화 시작: It does appear late when considering the needs of those who 
    25.44s  <ret> 발화 (turn6 첫 프레임)
    25.84s  agent 발화 시작: <ret> Earlier support efforts were certainly— before ninetee
    25.98s  agent 발화 끝
    26.56s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.17s]: Prior to 1930, the Veterans Bureau, created in 1921, administered vete
    33.21s  agent 발화 끝
    33.67s  user  발화 시작: But what kind of benefits were they getting *before* the bur
    38.46s  agent 발화 시작: A very pertinent question – it’s important to understand the
    38.58s  user  발화 끝
    41.71s  user  발화 시작: I just mean, were they just… forgotten?
    42.44s  agent 발화 끝
    43.98s  agent 발화 시작: Certainly not forgotten, though support was less formalized 
    44.10s  user  발화 끝
    47.09s  <ret> 발화 (turn11 첫 프레임)
    47.48s  agent 발화 시작: <ret> Initial provisions focused largely on— following the C
    47.60s  agent 발화 끝
    48.05s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.07s]: After the Civil War, veterans received pensions and medical care throu
    55.36s  agent 발화 끝
