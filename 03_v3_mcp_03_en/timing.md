# v3_mcp_03_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Start the checkout process in the shopping cart iframe.
     2.88s  <ret> 발화 (turn1 첫 프레임)
     3.26s  agent 발화 시작: <ret> Alright, let’s get that shopping cart moving forward. 
     3.42s  user  발화 끝
     3.84s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.26s]: (tool result) The checkout button in the shopping cart iframe was clic
    11.00s  agent 발화 끝
    12.35s  user  발화 시작: What’s the total cost of the order?
    14.45s  <ret> 발화 (turn3 첫 프레임)
    14.53s  agent 발화 시작: <ret> Let me quickly pull up the order details for you. The 
    14.61s  user  발화 끝
    16.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.54s]: (tool result) The order total is twenty-nine pounds and fifty pence.
    22.18s  user  발화 시작: Can you book a courier for tomorrow morning?
    22.31s  agent 발화 끝
    24.82s  <ret> 발화 (turn5 첫 프레임)
    24.95s  user  발화 끝
    24.97s  agent 발화 시작: <ret> Certainly, arranging a courier is something I can do. 
    26.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.16s]: (tool result) A courier is booked for tomorrow at nine AM, tracking nu
    32.74s  user  발화 시작: Exactly.
    33.70s  user  발화 끝
    36.05s  agent 발화 끝
    36.93s  user  발화 시작: Great, thanks.
    38.31s  user  발화 끝
