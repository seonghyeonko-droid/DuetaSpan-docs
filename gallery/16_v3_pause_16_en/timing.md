# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was reading this dystopian novel, and it got me thinki
     4.57s  agent 발화 시작: That's a common reaction to powerful literature, certainly.
     4.67s  user  발화 끝
     8.15s  user  발화 시작: …where did the term “big brother” actually come from? It jus
     8.17s  agent 발화 끝
    13.61s  <ret> 발화 (turn3 첫 프레임)
    13.76s  agent 발화 시작: <ret> That’s an interesting question regarding its origins… 
    13.79s  user  발화 끝
    15.53s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.20s]: The term "Big Brother" originates from George Orwell's dystopian novel
    22.89s  agent 발화 끝
    22.99s  user  발화 시작: Nineteen forty-nine… that's quite a while ago. Was Orwell co
    29.71s  user  발화 끝
    30.13s  agent 발화 시작: He was, though it’s a complex tapestry of influences.
    34.42s  user  발화 시작: Was it about Stalin, then? Everyone always says it’s about S
    34.48s  agent 발화 끝
    39.38s  <ret> 발화 (turn7 첫 프레임)
    39.53s  agent 발화 시작: <ret> The connection to Stalin is certainly a frequent obser
    39.65s  user  발화 끝
    40.58s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.98s]: Orwell stated the concept of “Big Brother” was inspired by his experie
    50.15s  agent 발화 끝
    50.21s  user  발화 시작: Surveillance during the war? That’s… surprising.
    54.10s  agent 발화 시작: It’s often overlooked, but profoundly shaped his vision.
    54.19s  user  발화 끝
    57.56s  user  발화 시작: But didn't the Soviet Union have extensive spying? I mean—
    57.61s  agent 발화 끝
    61.65s  user  발화 시작: …wasn’t that a huge part of the fear back then…
    61.68s  user  발화 끝
    64.88s  user  발화 끝
    65.30s  user  발화 시작: …the idea of constant monitoring?
    68.03s  user  발화 끝
    68.05s  agent 발화 시작: That fear was absolutely present, yes, and Orwell certainly 
    77.28s  user  발화 시작: So, it wasn't *just* about Stalin, it was about the potentia
    77.69s  agent 발화 끝
    84.46s  agent 발화 시작: Precisely. The novel is a warning against unchecked power, r
    84.55s  user  발화 끝
    90.26s  agent 발화 끝
    90.57s  user  발화 시작: It’s a pretty chilling idea, even now, to be constantly watc
    94.63s  agent 발화 시작: It remains remarkably relevant, doesn't it? The themes of su
    94.73s  user  발화 끝
   100.75s  agent 발화 끝
