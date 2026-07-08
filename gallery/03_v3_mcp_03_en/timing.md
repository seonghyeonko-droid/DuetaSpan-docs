# v3_mcp_03_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Start the checkout process in the shopping cart iframe.
     2.84s  <ret> 발화 (turn1 첫 프레임)
     3.24s  agent 발화 시작: <ret> Alright, let’s get that cart finalized for you. Excell
     3.38s  user  발화 끝
     3.80s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.56s]: (tool result) The checkout button in the shopping cart iframe was clic
     9.91s  agent 발화 끝
    11.29s  user  발화 시작: What’s the total cost, including shipping?
    13.86s  <ret> 발화 (turn3 첫 프레임)
    13.93s  agent 발화 시작: <ret> Let me quickly retrieve that order summary for you. Yo
    14.02s  user  발화 끝
    15.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.70s]: (tool result) The order total is twenty-eight pounds and fifty pence, 
    22.41s  user  발화 시작: Can you confirm my delivery address is still 14 Oak Street?
    22.55s  agent 발화 끝
    26.71s  user  발화 끝
    26.94s  agent 발화 시작: Yes, your delivery address on file remains 14 Oak Street, as
    31.87s  user  발화 시작: That’s great, go ahead and place the order then.
    32.03s  agent 발화 끝
    34.16s  <ret> 발화 (turn7 첫 프레임)
    34.55s  agent 발화 시작: <ret> Certainly, I can finalize that purchase right away. Yo
    34.68s  user  발화 끝
    36.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.22s]: (tool result) Order number 78945 has been placed and confirmed—it will
    44.56s  agent 발화 끝
