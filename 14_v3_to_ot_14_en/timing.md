# v3_to_ot_14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was just reading about Mozart… did he really start perform
     4.34s  agent 발화 시작: It’s remarkable how early some musical talents emerge.
     4.49s  user  발화 끝
     8.17s  agent 발화 끝
     8.99s  user  발화 시작: I heard seventeen, but that seems… early to be a professiona
    14.94s  <ret> 발화 (turn3 첫 프레임)
    15.54s  agent 발화 시작: <ret> Let’s clarify that timeline. At seventeen years of age
    15.74s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.77s]: Wolfgang Amadeus Mozart became a court musician in Salzburg, Austria, 
    15.75s  user  발화 끝
    23.97s  agent 발화 끝
    23.99s  user  발화 시작: Wow. A court musician—so, like, employed by royalty?
    28.70s  user  발화 끝
    28.78s  agent 발화 시작: Essentially, yes. It was a prestigious position with regular
    34.32s  user  발화 시작: That’s incredible. What kind of music would he have been pla
    34.48s  agent 발화 끝
    37.61s  <ret> 발화 (turn7 첫 프레임)
    38.20s  agent 발화 시작: <ret> His repertoire was quite varied. Mozart composed over 
    38.26s  user  발화 끝
    38.61s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.24s]: Mozart composed over eight hundred works spanning nearly every genre o
    46.58s  user  발화 시작: Eight hundred! That’s a lot. Was he mostly composing operas?
    46.72s  agent 발화 끝
    50.92s  user  발화 끝
    50.98s  agent 발화 시작: Not necessarily. While operas are a significant part of his 
    58.72s  agent 발화 끝
    59.27s  user  발화 시작: Did you remember to take the trash out?
    61.48s  user  발화 끝
    61.64s  user  발화 시작: Sorry about that. Back to Mozart—was he famous during his li
    66.34s  agent 발화 시작: He achieved considerable fame, though his later years were m
    66.49s  user  발화 끝
    71.95s  agent 발화 끝
    72.09s  user  발화 시작: Financial difficulties, even while famous? That’s strange.
    75.92s  <ret> 발화 (turn14 첫 프레임)
    76.52s  agent 발화 시작: <ret> It was a complex situation. Despite periods of success
    76.58s  user  발화 끝
    76.92s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.26s]: Mozart struggled financially throughout much of his adult life despite
    83.70s  user  발화 시작: So, he wasn’t always wealthy and comfortable?
    84.21s  agent 발화 끝
    87.54s  user  발화 끝
    87.72s  agent 발화 시작: Not at all. Patronage was fickle, and he often relied on com
    93.90s  user  발화 시작: It sounds like being a musician back then was a lot less sec
    93.93s  agent 발화 끝
    98.43s  user  발화 끝
    98.59s  agent 발화 시작: It certainly lacked the stability we see now. Artists were m
   104.61s  agent 발화 끝
