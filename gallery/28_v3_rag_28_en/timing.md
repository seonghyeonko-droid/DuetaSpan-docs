# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was reading about government departments, and it made 
     7.99s  agent 발화 시작: That’s a very good question, tracing the origins of support 
     8.15s  user  발화 끝
    12.45s  <ret> 발화 (turn2 첫 프레임)
    12.84s  agent 발화 시작: <ret> Let me quickly check the historical records— The Depar
    13.08s  agent 발화 끝
    14.05s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.64s]: The United States Department of Veterans Affairs was established on Ju
    20.40s  agent 발화 끝
    20.46s  user  발화 시작: Nineteen thirty? That seems…relatively recent, doesn’t it? I
    27.39s  agent 발화 시작: You’re right to question that—earlier forms of veteran suppo
    27.41s  user  발화 끝
    33.77s  <ret> 발화 (turn5 첫 프레임)
    34.16s  agent 발화 시작: <ret> Looking into the predecessor agencies will clarify the
    34.34s  agent 발화 끝
    35.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.12s]: Prior to 1930, the Veterans Bureau, created in 1921, handled most vete
    44.22s  agent 발화 끝
    45.34s  user  발화 시작: But what about *before* the Veterans Bureau—were there absol
    52.94s  agent 발화 시작: An excellent point—there was indeed provision, though less c
    53.07s  user  발화 끝
    57.12s  <ret> 발화 (turn8 첫 프레임)
    57.35s  agent 발화 시작: <ret> I'm accessing information about the support offered af
    57.52s  agent 발화 끝
    59.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.30s]: Following World War I, the U.S. government established the Bureau of W
    66.67s  agent 발화 끝
