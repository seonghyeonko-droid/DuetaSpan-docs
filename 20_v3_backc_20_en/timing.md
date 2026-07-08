# v3_backc_20_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Who is the brown wizard in the Hobbit?
     2.95s  agent 발화 시작: <ret> That’s a good question. Radagast the Brown is a wizard
     2.95s  <ret> 발화 (turn1 첫 프레임)
     2.95s  user  발화 끝
     3.95s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.47s]: Radagast the Brown is a wizard in J.R.R. Tolkien’s Middle-earth, appea
    15.49s  user  발화 시작: Yeah.
    15.49s  agent 발화 끝
    15.85s  agent 발화 시작: He prefers the company of animals—birds especially—to that o
    15.85s  user  발화 끝
    20.28s  user  발화 시작: Mm-hmm.
    20.28s  agent 발화 끝
    20.65s  agent 발화 시작: Quite a solitary fellow, really. He’s not much for councils 
    20.65s  user  발화 끝
    28.39s  user  발화 시작: What does he *do* exactly?
    28.39s  agent 발화 끝
    30.23s  agent 발화 시작: <ret> He’s a guardian, of sorts. Radagast is primarily conce
    30.23s  <ret> 발화 (turn7 첫 프레임)
    30.23s  user  발화 끝
    31.11s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.84s]: Radagast the Brown is primarily concerned with the care of beasts and 
    40.56s  user  발화 시작: So he's like a… a forest ranger?
    40.56s  agent 발화 끝
    43.14s  agent 발화 시작: [laugh] A rather whimsical one, perhaps. It’s not an entirel
    43.14s  user  발화 끝
    50.14s  user  발화 시작: Is he powerful?
    50.14s  agent 발화 끝
    51.25s  agent 발화 시작: He possesses power, certainly, but it manifests differently 
    51.25s  user  발화 끝
    59.36s  agent 발화 끝
