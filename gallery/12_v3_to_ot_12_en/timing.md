# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was reading about capital punishment, and I’m curious— whe
     6.19s  <ret> 발화 (turn1 첫 프레임)
     6.79s  agent 발화 시작: <ret> That’s a weighty question, considering England’s long 
     6.94s  user  발화 끝
     8.75s  ⚡SPAN 주입 [d'=2.56s / d_lead=3.83s]: The death penalty for all crimes was abolished in the United Kingdom i
    10.54s  agent 발화 시작: The death penalty was fully abolished in the United Kingdom 
    10.62s  agent 발화 끝
    14.76s  user  발화 시작: Nineteen ninety-eight… that’s surprisingly recent, actually.
    14.99s  agent 발화 끝
    21.34s  user  발화 끝
    21.38s  agent 발화 시작: It was indeed a process, evolving over decades—
    23.87s  user  발화 시작: Did they abolish it for certain crimes *before* then, like m
    24.65s  agent 발화 끝
    28.22s  <ret> 발화 (turn6 첫 프레임)
    28.81s  agent 발화 시작: <ret> Yes, the abolition happened in stages.
    28.92s  user  발화 끝
    29.90s  ⚡SPAN 주입 [d'=1.68s / d_lead=2.77s]: Murder was removed from the list of capital crimes in 1965, with a per
    31.58s  agent 발화 끝
    31.71s  agent 발화 시작: Murder was removed as a capital crime in nineteen sixty-five
    36.90s  agent 발화 끝
    37.44s  user  발화 시작: So, for four years, there was a period where it *could* be r
    44.41s  agent 발화 시작: Precarious is a good word for it. The legal landscape was ce
    44.53s  user  발화 끝
    50.25s  agent 발화 끝
