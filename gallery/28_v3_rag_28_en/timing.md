# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was reading about government agencies, and I’m curious
     7.11s  <ret> 발화 (turn1 첫 프레임)
     7.42s  agent 발화 시작: <ret> That’s an interesting question, tracing the history of
     7.60s  user  발화 끝
     8.15s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.84s]: The Department of Veterans Affairs was established on July 21, 1930, u
    17.67s  agent 발화 끝
    17.99s  user  발화 시작: Nineteen thirty? That seems… relatively recent, doesn’t it? 
    26.24s  user  발화 끝
    26.59s  agent 발화 시작: It does feel recent, considering the long history of soldier
    33.65s  user  발화 시작: But what did they *do* before nineteen thirty? I— I mean, ho
    33.72s  agent 발화 끝
    39.85s  <ret> 발화 (turn5 첫 프레임)
    40.24s  agent 발화 시작: <ret> Before the department’s formal creation, support was— 
    40.46s  user  발화 끝
    41.45s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.16s]: Prior to 1930, the Veterans Bureau, created in 1921, handled most vete
    50.95s  user  발화 시작: So, the Veterans Bureau *wasn’t* the same thing as the Depar
    51.08s  agent 발화 끝
    56.56s  agent 발화 시작: No, it wasn’t—
    56.59s  user  발화 끝
    57.47s  <ret> 발화 (turn8 첫 프레임)
    57.86s  agent 발화 시작: <ret> The Veterans Bureau was a predecessor agency, later ex
    58.08s  agent 발화 끝
    59.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.00s]: The Veterans Bureau was a predecessor agency, later expanded and reorg
    64.86s  agent 발화 끝
