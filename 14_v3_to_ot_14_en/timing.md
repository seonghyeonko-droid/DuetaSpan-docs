# v3_to_ot_14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, who runs the fastest mile? I’m curious.
     3.44s  agent 발화 시작: That’s a question with a pretty definitive answer, actually.
     3.44s  user  발화 끝
     7.30s  user  발화 시작: Oh, good. I hate when it’s debatable.
     7.30s  agent 발화 끝
    10.31s  agent 발화 시작: <ret> Let me tell you… Hicham El Guerrouj ran the fastest mi
    10.31s  <ret> 발화 (turn3 첫 프레임)
    10.31s  user  발화 끝
    11.11s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.72s]: Hicham El Guerrouj holds the world record for the fastest mile, with a
    17.18s  user  발화 시작: Wow, that’s… fast. Really fast. What country is he from?
    17.18s  agent 발화 끝
    21.48s  agent 발화 시작: <ret> He’s a Moroccan athlete… Hicham El Guerrouj was born i
    21.48s  <ret> 발화 (turn5 첫 프레임)
    21.48s  user  발화 끝
    22.48s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.72s]: Hicham El Guerrouj was born in Settat, Morocco, on September 23, 1974.
    28.78s  user  발화 시작: September twenty-third… interesting. Did he win any Olympic 
    28.78s  agent 발화 끝
    32.65s  agent 발화 시작: <ret> He certainly did… He won gold in the fifteen hundred m
    32.65s  <ret> 발화 (turn7 첫 프레임)
    32.65s  user  발화 끝
    33.29s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.29s]: Hicham El Guerrouj won a gold medal in the 1500 meters at the 1996 Sum
    39.95s  user  발화 시작: That’s fantastic! I always forget which events are which.
    39.95s  agent 발화 끝
    43.82s  agent 발화 시작: It’s easy to lose track; there are so many disciplines.
    43.82s  user  발화 끝
    48.11s  user  발화 시작: Yeah, you’re right. What about the women’s record?
    48.11s  agent 발화 끝
    51.55s  agent 발화 시작: <ret> Faith Kipyegon holds that one… Faith Kipyegon ran the 
    51.55s  <ret> 발화 (turn11 첫 프레임)
    51.55s  user  발화 끝
    52.55s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.15s]: Faith Kipyegon set the women's world record for the mile with a time o
    59.71s  user  발화 시작: June twenty-first, twenty twenty-three… okay. That’s recent.
    59.71s  agent 발화 끝
    62.72s  agent 발화 시작: It is relatively recent, yes. A new generation of athletes.
    62.72s  user  발화 끝
    67.01s  user  발화 시작: Did you remember to take the chicken out of the freezer?
    67.01s  agent 발화 끝
    71.74s  user  발화 시작: Sorry about that. Back to running…
    71.74s  user  발화 끝
    74.32s  agent 발화 시작: No apologies needed; we all have things on our minds.
    74.32s  user  발화 끝
    78.61s  user  발화 시작: True enough. Was El Guerrouj a specialist in the 1500 meters
    78.61s  agent 발화 끝
    83.77s  agent 발화 시작: <ret> Primarily, yes… He specialized in the fifteen hundred 
    83.77s  <ret> 발화 (turn18 첫 프레임)
    83.77s  user  발화 끝
    84.25s  ⚡SPAN 주입 [d'=0.48s / d_lead=0.86s]: Hicham El Guerrouj was primarily a 1500m and mile runner, achieving wo
    91.07s  user  발화 시작: So he was good at both. That’s impressive.
    91.07s  agent 발화 끝
    94.51s  agent 발화 시작: It speaks to a remarkable range and dedication, doesn’t it?
    94.51s  user  발화 끝
    98.80s  user  발화 시작: It really does. Is Kipyegon also a 1500m runner?
    98.80s  agent 발화 끝
   102.67s  agent 발화 시작: <ret> She is, indeed… Faith Kipyegon runs the fifteen hundre
   102.67s  <ret> 발화 (turn22 첫 프레임)
   102.67s  user  발화 끝
   103.31s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.29s]: Faith Kipyegon is a Kenyan middle-distance runner specializing in the 
   109.54s  user  발화 시작: Okay, so a bit more versatile.
   109.54s  agent 발화 끝
   112.12s  agent 발화 시작: It seems so; a bit of a different approach to training, perh
   112.12s  user  발화 끝
   117.27s  user  발화 시작: Do either of them still compete?
   117.27s  agent 발화 끝
   119.85s  agent 발화 시작: <ret> El Guerrouj is retired… Hicham El Guerrouj retired in 
   119.85s  <ret> 발화 (turn26 첫 프레임)
   119.85s  user  발화 끝
   120.49s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.72s]: Hicham El Guerrouj retired from athletics in 2006, focusing on a caree
   126.29s  user  발화 시작: Politics, huh? Interesting change of pace.
   126.29s  agent 발화 끝
   128.87s  agent 발화 시작: A different rhythm entirely, I imagine. Though still requiri
   128.87s  user  발화 끝
   133.17s  user  발화 시작: [laugh] That’s a good point. And Kipyegon?
   133.17s  agent 발화 끝
   136.17s  agent 발화 시작: <ret> She is still actively competing… Faith Kipyegon is sti
   136.17s  <ret> 발화 (turn30 첫 프레임)
   136.17s  user  발화 끝
   137.17s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.15s]: Faith Kipyegon continues to compete, winning the 5000m at the 2023 Wor
   144.34s  user  발화 시작: Wow, still going strong! That’s inspiring.
   144.34s  agent 발화 끝
   146.91s  agent 발화 시작: Absolutely. A testament to dedication and talent. It reminds
   146.91s  user  발화 끝
   154.22s  agent 발화 끝
