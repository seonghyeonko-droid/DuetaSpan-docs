# v3_mcp_03_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Start the checkout process in the shopping cart iframe.
     2.72s  <ret> 발화 (turn1 첫 프레임)
     3.11s  agent 발화 시작: <ret> Alright, initiating the checkout sequence for you now.
     3.29s  user  발화 끝
     3.68s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.62s]: (tool result) The shopping cart iframe’s “Checkout” button was clicked
    12.15s  agent 발화 끝
    13.55s  user  발화 시작: What’s the total amount due?
    15.26s  <ret> 발화 (turn3 첫 프레임)
    15.34s  agent 발화 시작: <ret> Let me quickly retrieve that information for you. Your
    15.44s  user  발화 끝
    16.78s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.32s]: (tool result) The total amount due is $125.50, including shipping.
    24.85s  user  발화 시작: Can you confirm my shipping address is still 14 Oak Street?
    24.89s  agent 발화 끝
    28.96s  user  발화 끝
    29.23s  agent 발화 시작: Yes, your shipping address on file remains 14 Oak Street. I 
    35.85s  user  발화 시작: No, that’s fine. Go ahead and complete the purchase.
    35.99s  agent 발화 끝
    38.63s  <ret> 발화 (turn7 첫 프레임)
    39.03s  agent 발화 시작: <ret> Very well, I’ll finalize the order then. Your purchase
    39.09s  user  발화 끝
    40.23s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.66s]: (tool result) The purchase was completed; order number is 789456.
    48.53s  agent 발화 끝
