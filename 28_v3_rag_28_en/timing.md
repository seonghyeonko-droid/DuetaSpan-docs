# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was just reading about the VA… when did that even get star
     3.69s  <ret> 발화 (turn1 첫 프레임)
     4.01s  agent 발화 시작: <ret> That’s a good question, thinking about its history… Th
     4.30s  user  발화 끝
     4.73s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.37s]: The United States Department of Veterans Affairs was established on Ju
    12.45s  agent 발화 끝
    12.45s  user  발화 시작: Nineteen thirty? That seems… surprisingly recent, doesn’t it
    19.04s  agent 발화 시작: It is a relatively modern department, considering the nation
    19.21s  user  발화 끝
    27.32s  agent 발화 끝
    27.56s  user  발화 시작: But surely there was *something* before that? Some kind of h
    31.40s  <ret> 발화 (turn5 첫 프레임)
    31.80s  agent 발화 시작: <ret> You’re right to question that—there certainly was some
    31.90s  user  발화 끝
    33.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.77s]: Prior to 1930, the Veterans Bureau, created in 1921, provided benefits
    43.25s  agent 발화 끝
