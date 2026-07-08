# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Navigate to the login page.
     1.55s  <ret> 발화 (turn1 첫 프레임)
     1.71s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.40s]: (tool result) Navigating to https://www.example.com/login.
     2.14s  agent 발화 시작: <ret> Certainly. I’m taking you to the login page now.
     2.26s  user  발화 끝
     5.67s  user  발화 시작: Okay, uh, can you search for affordable housing in Boston— a
     5.70s  agent 발화 끝
    10.78s  <ret> 발화 (turn3 첫 프레임)
    10.86s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.96s]: (tool result) Found 23 properties matching “affordable housing” in Chi
    11.37s  agent 발화 시작: <ret> Of course. I’ve found twenty-three affordable housing 
    11.46s  user  발화 끝
    16.18s  agent 발화 끝
    16.23s  user  발화 시작: Hmm, what’s the average square footage of those?
    19.28s  <ret> 발화 (turn5 첫 프레임)
    19.60s  user  발화 끝
    19.76s  ⚡SPAN 주입 [d'=0.48s / d_lead=1.99s]: (tool result) Average square footage is 785 square feet.
    19.88s  agent 발화 시작: <ret> Let me check that for you. The average square footage 
    26.11s  user  발화 시작: That’s… smaller than I expected. Are any of them new constru
    26.17s  agent 발화 끝
    30.37s  <ret> 발화 (turn7 첫 프레임)
    30.97s  agent 발화 시작: <ret> I can certainly find out. Three of those properties ar
    31.11s  user  발화 끝
    31.37s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.85s]: (tool result) Three properties are new constructions.
    35.79s  agent 발화 끝
    35.87s  user  발화 시작: Okay, good. Can you show me details for the cheapest one?
    38.64s  <ret> 발화 (turn9 첫 프레임)
    38.72s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.36s]: (tool result) Prop7: 1 bed, 1 bath, 550 sq ft, $1200/month, built 2024
    39.24s  agent 발화 시작: <ret> Absolutely. Prop7 has one bedroom, one bath, and is fi
    39.38s  user  발화 끝
    46.33s  user  발화 시작: That sounds… manageable. Is there a virtual tour available?
    46.37s  agent 발화 끝
    49.86s  <ret> 발화 (turn11 첫 프레임)
    50.46s  agent 발화 시작: <ret> Let’s see. A virtual tour is available at example.com/
    50.50s  user  발화 끝
    50.74s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.34s]: (tool result) Virtual tour available at https://example.com/tour/prop7
    56.48s  agent 발화 끝
    56.48s  user  발화 시작: [laugh] Great, I’ll check that out. Thanks.
    58.80s  agent 발화 시작: You’re very welcome. As an architect, I always appreciate fi
    58.83s  user  발화 끝
    63.02s  agent 발화 끝
