# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was reading about government agencies, and it made me 
     7.91s  <ret> 발화 (turn1 첫 프레임)
     8.23s  agent 발화 시작: <ret> That’s a good question, thinking about the history of 
     8.34s  user  발화 끝
     8.95s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.69s]: The United States Department of Veterans Affairs was established on Ju
    16.34s  agent 발화 끝
    16.78s  user  발화 시작: Nineteen thirty? Really? I always thought it was much earlie
    23.97s  user  발화 끝
    24.39s  agent 발화 시작: It’s understandable to assume that, given the long history o
    31.39s  agent 발화 끝
    31.41s  user  발화 시작: But… wasn’t there *something* before that, some kind of fede
    40.32s  <ret> 발화 (turn5 첫 프레임)
    40.45s  user  발화 끝
    40.72s  agent 발화 시작: <ret> You’re right to question that, a system doesn’t appear
    42.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.89s]: Prior to 1930, the Veterans Bureau, established in 1921, handled veter
    49.66s  agent 발화 끝
