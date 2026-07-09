# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 So, I was reading about government | S2 Nineteen thirty? That seems… relat | S3 But did that Bureau actually have  | S4 So Hoover's department was a step 

     0.00s  user  발화 시작: So, I was reading about government departments, and it got m
     7.92s  agent 발화 시작: That’s a very good question, tracing the history of support 
     8.06s  user  발화 끝
    12.57s  <ret> 발화 (turn2 첫 프레임)
    12.95s  agent 발화 시작: <ret> Let’s pinpoint that date for you— The Department of Ve
    13.19s  agent 발화 끝
    13.85s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.49s]: The United States Department of Veterans Affairs was established on Ju
    18.10s  user  발화 시작: Mm-hmm.
    18.91s  user  발화 끝
    21.55s  user  발화 시작: Nineteen thirty? That seems… relatively recent, doesn’t it? 
    21.66s  agent 발화 끝
    28.55s  user  발화 끝
    28.87s  agent 발화 시작: Certainly, benefits existed prior to the department’s formal
    34.31s  <ret> 발화 (turn6 첫 프레임)
    34.71s  agent 발화 시작: <ret> Actually, earlier forms of aid were quite extensive— B
    34.90s  agent 발화 끝
    36.15s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.12s]: Prior to 1930, the Veterans Bureau, created in 1921, administered bene
    42.01s  user  발화 시작: Yeah.
    42.69s  user  발화 끝
    44.45s  agent 발화 끝
    45.55s  user  발화 시작: But did that Bureau actually have the power to *create* new 
    52.44s  agent 발화 시작: That’s a subtle but crucial distinction—
    52.63s  user  발화 끝
    54.70s  <ret> 발화 (turn10 첫 프레임)
    54.93s  agent 발화 시작: <ret> The Veterans Bureau mostly put into action benefits ap
    55.16s  agent 발화 끝
    56.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.39s]: The Veterans Bureau primarily implemented benefits authorized by Congr
    61.32s  agent 발화 끝
    61.34s  user  발화 시작: So Hoover's department was a step up in terms of… agency, I 
    66.11s  user  발화 끝
    66.54s  agent 발화 시작: Precisely, the nineteen thirty restructuring consolidated an
    72.79s  agent 발화 끝
