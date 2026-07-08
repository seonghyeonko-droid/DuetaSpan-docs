# v3_rag_29_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was just reading about a game—it sounds really interesting
     5.60s  user  발화 끝
     5.67s  agent 발화 시작: It certainly does sound intriguing. Many games draw inspirat
    10.05s  user  발화 시작: But this one…it actually *includes* the attack on Pearl Harb
    10.21s  agent 발화 끝
    13.92s  <ret> 발화 (turn3 첫 프레임)
    14.51s  agent 발화 시작: <ret> Let me assure you… The game does include a playable mi
    14.72s  user  발화 끝
    14.92s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.38s]: A 2012 combat flight simulator by Konami features missions including t
    22.76s  agent 발화 끝
    24.16s  user  발화 시작: December seventh, nineteen forty-one…right. But it's a *Japa
    28.65s  user  발화 끝
    28.91s  agent 발화 시작: It's a valid point to consider cultural sensitivities when r
    33.25s  user  발화 시작: Sensitive is an understatement! I mean, recreating a surpris
    33.38s  agent 발화 끝
    38.92s  <ret> 발화 (turn7 첫 프레임)
    39.48s  ⚡SPAN 주입 [d'=0.56s / d_lead=0.63s]: The attack on Pearl Harbor was a surprise military strike by the Imper
    39.51s  agent 발화 시작: <ret> Perhaps understanding… The attack on Pearl Harbor was 
    39.59s  user  발화 끝
    47.50s  user  발화 시작: Okay, okay, historical context. But still… a *game*? It feel
    47.76s  agent 발화 끝
    53.12s  agent 발화 시작: Disrespect is certainly a possibility when dealing with trag
    53.20s  user  발화 끝
    58.68s  agent 발화 끝
    59.59s  user  발화 시작: So, the game…it’s a flight simulator, you said? What kind of
    64.78s  <ret> 발화 (turn11 첫 프레임)
    65.10s  ⚡SPAN 주입 [d'=0.32s / d_lead=1.04s]: The 2012 combat flight simulator features historically accurate aircra
    65.25s  user  발화 끝
    65.37s  agent 발화 시작: <ret> The simulator offers… The simulator features historica
    72.97s  agent 발화 끝
    73.82s  user  발화 시작: A6M Zero…that’s the Japanese one, right? It’s…ironic they’d 
    80.16s  user  발화 끝
    80.19s  agent 발화 시작: [sigh] Irony is a complex element in artistic representation
    85.80s  agent 발화 끝
    86.19s  user  발화 시작: I guess. So, is it a good game, aside from…all this? Is it a
    89.61s  <ret> 발화 (turn15 첫 프레임)
    90.01s  ⚡SPAN 주입 [d'=0.40s / d_lead=1.10s]: Reviews of the 2012 combat flight simulator praised its realistic flig
    90.21s  agent 발화 시작: <ret> Critics generally found… Critics praised the realistic
    90.26s  user  발화 끝
    97.17s  agent 발화 끝
    98.36s  user  발화 시작: Limited mission variety…that’s a shame. So, it’s just *one* 
   102.30s  <ret> 발화 (turn17 첫 프레임)
   102.90s  agent 발화 시작: <ret> The game includes… The game includes over thirty missi
   103.08s  user  발화 끝
   103.18s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.30s]: The combat flight simulator includes over thirty missions, with the Pe
   111.45s  user  발화 시작: Over thirty missions…okay. So, it’s not *entirely* focused o
   111.57s  agent 발화 끝
   116.34s  agent 발화 시작: It appears to offer a broader scope than initially suggested
   116.40s  user  발화 끝
   120.69s  agent 발화 끝
