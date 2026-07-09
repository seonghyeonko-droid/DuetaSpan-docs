# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 Set up a viewing for me at The Gra | S2 Perfect. What about pet policies? | S3 A rooftop terrace sounds nice. Wha | S4 Okay, good to know. What’s the nei

     0.00s  user  발화 시작: Set up a viewing for me at The Grandview Lofts on June fifte
     3.40s  <ret> 발화 (turn1 첫 프레임)
     3.51s  user  발화 끝
     3.63s  agent 발화 시작: <ret> Certainly, let’s see about arranging a visit. I’ve sch
     4.44s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.70s]: (tool result) A viewing at The Grandview Lofts is scheduled for June f
     8.88s  user  발화 시작: Yeah.
     9.51s  user  발화 끝
    12.49s  agent 발화 끝
    12.85s  user  발화 시작: That’s good. Can you send me directions?
    14.72s  <ret> 발화 (turn4 첫 프레임)
    14.88s  agent 발화 시작: <ret> Absolutely, I can provide directions for you. Directio
    14.88s  user  발화 끝
    15.92s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.79s]: (tool result) Directions to The Grandview Lofts are: Head north on Elm
    20.13s  user  발화 시작: Yeah, yeah.
    21.55s  user  발화 끝
    24.85s  agent 발화 끝
    25.04s  user  발화 시작: Is there parking available?
    26.34s  <ret> 발화 (turn7 첫 프레임)
    26.57s  agent 발화 시작: <ret> Let me check the parking situation there. The Grandvie
    26.60s  user  발화 끝
    28.18s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.22s]: (tool result) The Grandview Lofts offers free on-site parking for visi
    33.94s  agent 발화 끝
    34.16s  user  발화 시작: Perfect. What about pet policies?
    36.62s  <ret> 발화 (turn9 첫 프레임)
    36.77s  agent 발화 시작: <ret> I can look up the pet policy for that building. They a
    37.03s  user  발화 끝
    38.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.35s]: (tool result) The Grandview Lofts allows cats and small dogs with a on
    44.13s  agent 발화 끝
    44.69s  user  발화 시작: Two hundred dollars… uh, actually, make that June sixteenth—
    48.48s  <ret> 발화 (turn11 첫 프레임)
    48.84s  user  발화 끝
    48.87s  agent 발화 시작: <ret> Just adjusting the date for your viewing— I’ve resched
    50.16s  ⚡SPAN 주입 [d'=1.68s / d_lead=2.86s]: (tool result) A viewing at The Grandview Lofts is now scheduled for Ju
    55.66s  user  발화 시작: Is there a gym in the building?
    55.82s  agent 발화 끝
    57.23s  <ret> 발화 (turn13 첫 프레임)
    57.63s  agent 발화 시작: <ret> Oh, regarding amenities— The building has a fitness ce
    57.73s  user  발화 끝
    58.03s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.35s]: (tool result) The Grandview Lofts includes a fitness center, a rooftop
    64.81s  agent 발화 끝
    65.81s  user  발화 시작: A rooftop terrace sounds nice. What’s the rent like?
    68.67s  <ret> 발화 (turn15 첫 프레임)
    68.91s  agent 발화 시작: <ret> Let’s see about the rental costs there. Rent ranges fr
    69.05s  user  발화 끝
    69.79s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.80s]: (tool result) Rental rates at The Grandview Lofts range from fifteen h
    71.25s  user  발화 시작: Uh-huh.
    72.03s  user  발화 끝
    76.51s  agent 발화 끝
    76.83s  user  발화 시작: That’s a pretty wide range. What does the higher end get you
    80.62s  agent 발화 시작: Typically, the higher rent covers larger units and premium v
    80.67s  user  발화 끝
    82.00s  user  발화 시작: Uh-huh.
    82.69s  user  발화 끝
    84.82s  user  발화 시작: Are utilities included in that price?
    84.97s  agent 발화 끝
    87.10s  <ret> 발화 (turn21 첫 프레임)
    87.24s  agent 발화 시작: <ret> I can quickly check the utility inclusions. Water and 
    87.36s  user  발화 끝
    88.86s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.02s]: (tool result) Water and garbage are included, but electricity and inte
    91.76s  user  발화 시작: Yeah.
    92.39s  user  발화 끝
    94.56s  agent 발화 끝
    94.75s  user  발화 시작: Okay, good to know. What’s the neighborhood like?
    97.80s  user  발화 끝
    97.87s  agent 발화 시작: It's a vibrant area, known for its cafes and art galleries.
   102.12s  agent 발화 끝
   102.81s  user  발화 시작: Are there any grocery stores nearby?
   104.92s  <ret> 발화 (turn26 첫 프레임)
   105.07s  agent 발화 시작: <ret> I can check for grocery stores in the vicinity. A Fres
   105.22s  user  발화 끝
   105.42s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.19s]: (tool result) There’s a Fresh Foods Market five blocks east of The Gra
   109.57s  user  발화 시작: Uh-huh.
   110.35s  user  발화 끝
   112.01s  user  발화 시작: That sounds convenient. Thanks for all your help.
   112.16s  agent 발화 끝
   114.74s  user  발화 끝
