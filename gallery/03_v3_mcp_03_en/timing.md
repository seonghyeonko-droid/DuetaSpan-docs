# v3_mcp_03_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Start the checkout process in the shopping cart iframe.
     3.11s  <ret> 발화 (turn1 첫 프레임)
     3.50s  agent 발화 시작: <ret> Alright, initiating the checkout sequence now… The che
     3.70s  user  발화 끝
     4.07s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.72s]: (tool result) The shopping cart iframe’s checkout button was successfu
    11.64s  agent 발화 끝
    13.07s  user  발화 시작: What’s the total cost, including shipping?
    15.69s  <ret> 발화 (turn3 첫 프레임)
    15.77s  agent 발화 시작: <ret> Let me quickly retrieve that information for you… Your
    15.84s  user  발화 끝
    17.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.91s]: (tool result) The total cost is $78.50, including $8.50 for shipping.
    24.90s  user  발화 시작: Could you use my saved address for shipping?
    25.04s  agent 발화 끝
    27.72s  user  발화 끝
    27.99s  agent 발화 시작: Certainly. I can confirm your saved address is one-two-three
    33.98s  user  발화 시작: Yes, that’s the one. Confirm the order.
    34.10s  agent 발화 끝
    36.33s  <ret> 발화 (turn7 첫 프레임)
    36.71s  agent 발화 시작: <ret> Very well, confirming your order now… Your order is co
    36.85s  user  발화 끝
    38.01s  ⚡SPAN 주입 [d'=1.68s / d_lead=2.86s]: (tool result) Order confirmed with ID 98765; shipping to 123 Oak Stree
    45.75s  agent 발화 끝
