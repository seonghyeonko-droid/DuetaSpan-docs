# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was just reading about Pompeii… uh, and it got me wonderin
     7.77s  <ret> 발화 (turn1 첫 프레임)
     8.01s  agent 발화 시작: <ret> That’s a very common question, actually. The last erup
     8.21s  user  발화 끝
     9.61s  ⚡SPAN 주입 [d'=1.84s / d_lead=2.94s]: Mount Vesuvius last erupted in March of 1944.
    16.35s  agent 발화 끝
    17.78s  user  발화 시작: Wow, not that long ago, really. Was that a big one, like—lik
    23.71s  user  발화 끝
    23.80s  agent 발화 시작: No, thankfully, it wasn’t nearly as catastrophic. The ninete
    32.65s  agent 발화 끝
    33.62s  user  발화 시작: But did it still affect people living nearby?
    36.45s  <ret> 발화 (turn5 첫 프레임)
    36.53s  agent 발화 시작: <ret> Yes, it did.
    36.57s  user  발화 끝
    37.09s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.51s]: The 1944 eruption caused damage to nearby towns and villages.
    37.88s  agent 발화 시작: The nineteen forty-four eruption did cause damage to towns a
    38.04s  agent 발화 끝
    44.26s  user  발화 시작: So, are scientists monitoring it closely then? I mean, is th
    44.27s  agent 발화 끝
    51.21s  user  발화 끝
    51.43s  agent 발화 시작: Absolutely. Vesuvius is under constant surveillance, and it 
    61.82s  agent 발화 끝
