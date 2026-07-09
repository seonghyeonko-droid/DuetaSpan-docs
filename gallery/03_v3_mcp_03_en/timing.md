# v3_mcp_03_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Start the checkout process in the shopping cart iframe.
     3.02s  <ret> 발화 (turn1 첫 프레임)
     3.40s  agent 발화 시작: <ret> Alright, let's get that shopping cart moving forward. 
     3.61s  user  발화 끝
     4.95s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.10s]: (tool result) The checkout button in the shopping cart iframe was clic
    10.77s  agent 발화 끝
    12.17s  user  발화 시작: What's the total cost of the order?
    14.36s  <ret> 발화 (turn3 첫 프레임)
    14.44s  agent 발화 시작: <ret> Let me quickly access the order details to confirm tha
    14.52s  user  발화 끝
    15.72s  ⚡SPAN 주입 [d'=1.36s / d_lead=4.73s]: (tool result) The total order cost is $125.50, including shipping.
    25.33s  user  발화 시작: Can you confirm my shipping address is still 14 Oak Street?
    25.48s  agent 발화 끝
    29.26s  user  발화 끝
    29.54s  agent 발화 시작: Yes, your shipping address on file is indeed fourteen Oak St
    35.54s  user  발화 시작: Yeah.
    35.89s  user  발화 끝
    37.51s  agent 발화 끝
    38.48s  user  발화 시작: And is it possible to expedite shipping?
    41.13s  <ret> 발화 (turn8 첫 프레임)
    41.29s  agent 발화 시작: <ret> Certainly, let’s check the options for faster delivery
    41.44s  user  발화 끝
    43.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.83s]: (tool result) Two-day shipping to 14 Oak Street is available for an ad
    51.35s  agent 발화 끝
