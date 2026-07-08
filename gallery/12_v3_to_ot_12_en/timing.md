# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was reading about capital punishment, and I’m curious— whe
     6.55s  <ret> 발화 (turn1 첫 프레임)
     6.79s  agent 발화 시작: <ret> That’s a weighty question, considering England’s long 
     6.94s  user  발화 끝
     8.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.83s]: The death penalty for all crimes was abolished in the United Kingdom i
    10.56s  agent 발화 시작: The death penalty was fully abolished in the United Kingdom 
    10.62s  agent 발화 끝
    15.00s  agent 발화 끝
    15.04s  user  발화 시작: Nineteen ninety-eight… that’s surprisingly recent, actually.
    21.49s  agent 발화 시작: It was indeed a process, evolving over decades—
    21.62s  user  발화 끝
    24.09s  user  발화 시작: Did they abolish it for certain crimes *before* then, like m
    24.77s  agent 발화 끝
    28.87s  <ret> 발화 (turn6 첫 프레임)
    29.14s  user  발화 끝
    29.26s  agent 발화 시작: <ret> Yes, the abolition happened in stages.
    30.23s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.77s]: Murder was removed from the list of capital crimes in 1965, with a per
    31.90s  agent 발화 시작: Murder was removed as a capital crime in nineteen sixty-five
    32.03s  agent 발화 끝
    37.09s  agent 발화 끝
    37.53s  user  발화 시작: So, for four years, there was a period where it *could* be r
    44.52s  agent 발화 시작: Precarious is a good word for it. The legal landscape was ce
    44.61s  user  발화 끝
    50.35s  agent 발화 끝
