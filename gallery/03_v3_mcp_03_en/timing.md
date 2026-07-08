# v3_mcp_03_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Start the checkout process in the shopping cart iframe.
     2.92s  <ret> 발화 (turn1 첫 프레임)
     3.32s  agent 발화 시작: <ret> Alright, let’s get that shopping cart finalized for yo
     3.51s  user  발화 끝
     3.88s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.87s]: (tool result) The shopping cart iframe’s “Checkout” button was clicked
     9.06s  agent 발화 끝
    10.42s  user  발화 시작: What’s the total amount due?
    12.18s  <ret> 발화 (turn3 첫 프레임)
    12.26s  agent 발화 시작: <ret> Let me quickly check the order total for you now. Your
    12.35s  user  발화 끝
    14.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.89s]: (tool result) The order total is $125.50, including shipping.
    21.11s  user  발화 시작: Can you use the gift card with code SUMMER20?
    21.20s  agent 발화 끝
    24.66s  <ret> 발화 (turn5 첫 프레임)
    24.80s  user  발화 끝
    24.81s  agent 발화 시작: <ret> Certainly, I can apply that gift card for you. The gif
    26.34s  ⚡SPAN 주입 [d'=1.68s / d_lead=2.95s]: (tool result) Gift card SUMMER20 applied; new total is $105.50.
    33.87s  user  발화 시작: Go ahead and confirm the order.
    33.99s  agent 발화 끝
    35.84s  agent 발화 시작: Very well, confirming the order now. It’s good to have thing
    35.85s  user  발화 끝
    45.90s  agent 발화 끝
