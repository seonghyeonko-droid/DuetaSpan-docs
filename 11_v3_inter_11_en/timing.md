# v3_inter_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What’s a bronze award in Girl Scouts?
     5.02s  <ret> 발화 (turn1 첫 프레임)
     5.61s  agent 발화 시작: <ret> That’s a great question. It’s recognized as the third 
     5.79s  user  발화 끝
     6.02s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.94s]: The Bronze Award is the third highest award a Girl Scout can earn.
    13.36s  agent 발화 끝
    13.68s  user  발화 시작: Oh, okay. What do they *do* to get it?
    17.25s  <ret> 발화 (turn3 첫 프레임)
    17.61s  user  발화 끝
    17.84s  agent 발화 시작: <ret> It involves a community service project.
    18.25s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.39s]: To earn the Bronze Award, Girl Scouts must complete a project that ben
    20.17s  agent 발화 시작: Scouts complete a project demonstrably benefiting their loca
    20.23s  agent 발화 끝
    24.52s  user  발화 시작: So, it’s like… a big project? Uh—
    24.89s  agent 발화 끝
    28.83s  agent 발화 시작: It requires considerable planning—
    29.01s  user  발화 끝
    35.35s  user  발화 시작: But how long does it usually take?
    36.06s  agent 발화 끝
    39.08s  <ret> 발화 (turn8 첫 프레임)
    39.67s  agent 발화 시작: <ret> That varies quite a bit. Projects generally require tw
    39.70s  user  발화 끝
    39.96s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.62s]: Girl Scout Bronze Award projects typically take between twenty and for
    47.14s  agent 발화 끝
    47.35s  user  발화 시작: Wow, that *is* a lot. [surprised]
    49.24s  user  발화 끝
