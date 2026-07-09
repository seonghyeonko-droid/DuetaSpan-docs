# v3_mcp_03_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Start the checkout process in the shopping cart iframe.
     2.80s  <ret> 발화 (turn1 첫 프레임)
     3.20s  agent 발화 시작: <ret> Alright, initiating the checkout sequence now… The che
     3.37s  user  발화 끝
     4.24s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.53s]: (tool result) The shopping cart iframe’s “Checkout” button was clicked
     9.51s  agent 발화 끝
    10.91s  user  발화 시작: What’s the total cost, including shipping?
    13.65s  <ret> 발화 (turn3 첫 프레임)
    13.73s  agent 발화 시작: <ret> Let me quickly retrieve that for you… Your total, with
    13.82s  user  발화 끝
    15.01s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.12s]: (tool result) The checkout total is $78.50, including $8.50 for shippi
    22.07s  user  발화 시작: Can you use the gift card with code SUMMER20?
    22.21s  agent 발화 끝
    24.96s  <ret> 발화 (turn5 첫 프레임)
    25.36s  user  발화 끝
    25.36s  agent 발화 시작: <ret> Applying that discount right away… The gift card was s
    26.24s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.39s]: (tool result) Gift card SUMMER20 was applied; the new total is $58.50.
    35.38s  agent 발화 끝
