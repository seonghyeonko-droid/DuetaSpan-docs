# v3_mcp_00_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Cancel my order, please.
     1.05s  <ret> 발화 (turn1 첫 프레임)
     1.21s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.53s]: (tool result) The order with ID 78945 has been cancelled.
     1.65s  agent 발화 시작: <ret> Certainly. Your order, number 78945, is now cancelled 
     1.75s  user  발화 끝
     6.81s  user  발화 시작: Oh, good. Uh, what was in that order, actually?
     6.92s  agent 발화 끝
     9.55s  agent 발화 시작: It contained three bolts of aso oke cloth and a set of ivory
     9.76s  user  발화 끝
    12.50s  user  발화 시작: Yeah, yeah.
    13.46s  user  발화 끝
    14.24s  user  발화 시작: And can you check if I have any other open orders?
    14.27s  agent 발화 끝
    16.18s  <ret> 발화 (turn6 첫 프레임)
    16.58s  ⚡SPAN 주입 [d'=0.40s / d_lead=1.18s]: (tool result) You have one open order.
    16.78s  agent 발화 시작: <ret> Let me see… You currently have one additional order th
    16.96s  user  발화 끝
    21.50s  agent 발화 끝
    21.56s  user  발화 시작: Okay, that's good to know.
    23.31s  user  발화 끝
