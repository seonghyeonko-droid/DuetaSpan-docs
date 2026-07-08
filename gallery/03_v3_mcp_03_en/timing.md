# v3_mcp_03_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Start the checkout process in the shopping cart iframe.
     2.77s  <ret> 발화 (turn1 첫 프레임)
     3.17s  agent 발화 시작: <ret> Alright, let’s get your order moving forward then. I’v
     3.32s  user  발화 끝
     3.73s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.27s]: (tool result) The checkout button in the shopping cart iframe was succ
     7.23s  user  발화 시작: Mm-hmm.
     7.73s  user  발화 끝
    10.13s  agent 발화 끝
    11.42s  user  발화 시작: What’s the total cost of everything in my cart?
    14.13s  <ret> 발화 (turn4 첫 프레임)
    14.19s  agent 발화 시작: <ret> Checking the order total now, just a moment. The curre
    14.19s  user  발화 끝
    15.81s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.08s]: (tool result) Your cart total is $125.50, including shipping and taxes
    23.05s  agent 발화 끝
