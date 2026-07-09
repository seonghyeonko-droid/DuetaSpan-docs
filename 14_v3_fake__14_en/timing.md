# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 Do you know who wrote “My Love, My | S2 Right. And Benny wrote a lot of th | S3 That's amazing, they're so talente | S4 That sounds lovely. Maybe I’ll loo

     0.00s  user  발화 시작: Do you know who wrote “My Love, My Life” from Mamma Mia? It’
     5.07s  <ret> 발화 (turn1 첫 프레임)
     5.28s  user  발화 끝
     5.30s  agent 발화 시작: <ret> That’s a lovely choice. Björn Ulvaeus is credited with
     6.27s  ⚡SPAN 주입 [d'=1.20s / d_lead=1.53s]: Björn Ulvaeus wrote “My Love, My Life”.
    11.36s  user  발화 시작: Oh, okay. Was he in ABBA too? I always get them mixed up.
    11.41s  agent 발화 끝
    15.10s  user  발화 끝
    15.11s  agent 발화 시작: Yes, he was! Björn Ulvaeus was a key member of ABBA, alongsi
    20.75s  user  발화 시작: Right. And Benny wrote a lot of the music, didn't he?
    20.90s  agent 발화 끝
    23.46s  <ret> 발화 (turn5 첫 프레임)
    23.61s  agent 발화 시작: <ret> He did indeed. Benny Andersson was the primary compose
    23.80s  user  발화 끝
    25.46s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=4.95s]: (tool result) AAPL stock is currently trading at 170.34 USD, up 0.5% f
    28.57s  agent 발화 끝
    28.76s  user  발화 시작: Hmm. So, both of them worked on Mamma Mia as well?
    32.55s  agent 발화 시작: Absolutely. Both Björn Ulvaeus and Benny Andersson were heav
    32.60s  user  발화 끝
    39.41s  agent 발화 끝
    39.45s  user  발화 시작: That's amazing, they're so talented. I— I mean, the whole th
    43.52s  agent 발화 시작: It truly is. Their music has touched so many people, and con
    43.66s  user  발화 끝
    45.92s  user  발화 시작: Yeah.
    46.56s  user  발화 끝
    49.29s  user  발화 시작: I’m thinking of visiting Stockholm, actually. Is it a nice c
    49.31s  agent 발화 끝
    53.47s  agent 발화 시작: Stockholm is a beautiful city, full of charm and history. I 
    53.50s  user  발화 끝
    55.59s  user  발화 시작: Yeah.
    56.17s  user  발화 끝
    59.58s  agent 발화 끝
    59.70s  user  발화 시작: That sounds lovely. Maybe I’ll look for places connected to 
    64.85s  agent 발화 시작: That’s a wonderful idea! There are several museums and locat
    64.97s  user  발화 끝
    71.98s  agent 발화 끝
