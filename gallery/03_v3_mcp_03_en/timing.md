# v3_mcp_03_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Start the checkout process in the shopping cart iframe.
     3.00s  <ret> 발화 (turn1 첫 프레임)
     3.40s  agent 발화 시작: <ret> Alright, let’s get that shopping cart finalized for yo
     3.56s  user  발화 끝
     3.96s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.47s]: (tool result) The shopping cart iframe’s checkout button was clicked s
    10.72s  agent 발화 끝
    12.16s  user  발화 시작: What’s the total cost, including shipping?
    14.83s  <ret> 발화 (turn3 첫 프레임)
    14.91s  agent 발화 시작: <ret> Let me quickly retrieve the order total for you now. Y
    15.02s  user  발화 끝
    16.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.10s]: (tool result) The total order cost is twenty-seven pounds and fifty pe
    23.39s  user  발화 시작: Can you confirm my delivery address is still 12 Oak Street?
    23.53s  agent 발화 끝
    27.65s  user  발화 끝
    27.88s  agent 발화 시작: Yes, your current delivery address on file is indeed twelve 
    34.39s  user  발화 시작: No, that’s fine. Just proceed with the order.
    34.55s  agent 발화 끝
    37.62s  agent 발화 시작: Very well. I’m submitting the order now — a confirmation wil
    37.63s  user  발화 끝
    51.31s  agent 발화 끝
