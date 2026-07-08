# v3_rag_30_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was reading about old boats… uh, and I wondered, when 
     7.67s  agent 발화 시작: That’s a fascinating question, tracing the origins of marine
     7.88s  user  발화 끝
    12.94s  agent 발화 끝
    14.53s  user  발화 시작: Yeah, it just seemed like it had to happen eventually, you k
    17.82s  <ret> 발화 (turn3 첫 프레임)
    18.42s  agent 발화 시작: <ret> Let me share that with you. The very first steam-power
    18.59s  user  발화 끝
    18.82s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.42s]: The first steam-powered paddle boat was invented in 1783 by Marquis de
    27.66s  user  발화 시작: Wow, seventeen eighty-three! That’s… earlier than I thought.
    27.70s  agent 발화 끝
    34.15s  user  발화 끝
    34.27s  agent 발화 시작: He was an inventor with a broad range of interests, actually
    37.65s  agent 발화 끝
    37.80s  user  발화 시작: Interesting. Was it a big boat? I mean, did it actually *do*
    42.09s  <ret> 발화 (turn7 첫 프레임)
    42.61s  user  발화 끝
    42.69s  agent 발화 시작: <ret> It was a relatively modest beginning. The *Pyramide* w
    43.09s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.48s]: Jouffroy’s boat, the *Pyramide*, was twelve meters long and successful
    51.79s  agent 발화 끝
    53.07s  user  발화 시작: Twelve meters… okay, not huge. So, the Saône river is in Fra
    59.67s  agent 발화 시작: It is, a major tributary of the Rhône.
    59.79s  user  발화 끝
    62.43s  agent 발화 끝
    62.62s  user  발화 시작: Right, right. Hmm. Did anyone else try building steam boats 
    67.44s  <ret> 발화 (turn11 첫 프레임)
    67.52s  ⚡SPAN 주입 [d'=0.08s / d_lead=1.52s]: William Symington built a steam boat for the Forth and Clyde Canal in 
    68.04s  agent 발화 시작: <ret> Others were experimenting, certainly. William Symingto
    68.19s  user  발화 끝
    76.39s  agent 발화 끝
    77.34s  user  발화 시작: Towing, huh? So, not for passengers yet? That’s… practical, 
    81.92s  agent 발화 시작: It was a crucial step in demonstrating the technology’s pote
    82.06s  user  발화 끝
    85.76s  agent 발화 끝
    85.79s  user  발화 시작: [sigh] It’s amazing how long it takes to get something like 
    89.23s  <ret> 발화 (turn15 첫 프레임)
    89.83s  agent 발화 시작: <ret> Early engineering faced many challenges. Robert Fulton
    89.91s  user  발화 끝
    90.19s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.15s]: Robert Fulton received a U.S. patent for a commercially successful ste
    99.29s  agent 발화 끝
    99.68s  user  발화 시작: Eighteen oh seven… so, Fulton was a bit later then. Did his 
   106.54s  agent 발화 시작: It was a more refined design, intended for passenger travel.
   106.77s  user  발화 끝
   110.34s  agent 발화 끝
   111.16s  user  발화 시작: That makes sense. So, did Jouffroy get any credit for being 
   117.60s  <ret> 발화 (turn19 첫 프레임)
   118.19s  agent 발화 시작: <ret> History is often complicated. Jouffroy pioneered the s
   118.20s  user  발화 끝
   118.56s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.01s]: Though Jouffroy pioneered the steam boat, Fulton’s *Clermont* is often
   127.74s  agent 발화 끝
