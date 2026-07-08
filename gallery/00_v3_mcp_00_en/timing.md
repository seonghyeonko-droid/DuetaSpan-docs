# v3_mcp_00_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Can you find a hatchback for me in Paris, starting on April 
     8.08s  <ret> 발화 (turn1 첫 프레임)
     8.32s  agent 발화 시작: <ret> Let’s see what’s available—finding a car is always a g
     8.39s  user  발화 끝
     9.20s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.82s]: (tool result) A Renault Clio is available for seventy-eight euros per 
    18.90s  user  발화 시작: Hmm, seventy-eight euros a day… that’s a bit steep. Are ther
    18.98s  agent 발화 끝
    23.60s  <ret> 발화 (turn3 첫 프레임)
    23.99s  agent 발화 시작: <ret> Prices do vary, of course—it depends on demand and the
    24.28s  user  발화 끝
    25.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.93s]: (tool result) A Peugeot 208 is available for fifty-five euros per day 
    27.73s  agent 발화 시작: Sixt offers a Peugeot 208 for fifty-five euros a day, meetin
    27.92s  agent 발화 끝
    33.39s  user  발화 시작: Fifty-five euros sounds much better. Okay, let’s book the Pe
    33.47s  agent 발화 끝
    38.16s  <ret> 발화 (turn6 첫 프레임)
    38.32s  agent 발화 시작: <ret> Excellent—a good deal is always satisfying. Your Peuge
    38.44s  user  발화 끝
    39.68s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.71s]: (tool result) Your Peugeot 208 is reserved with Sixt; confirmation num
    47.33s  user  발화 시작: Wonderful! Thank you.
    47.35s  agent 발화 끝
    49.22s  user  발화 끝
    49.35s  agent 발화 시작: You’re most welcome. Reminds me of a time I was
    52.59s  agent 발화 끝
