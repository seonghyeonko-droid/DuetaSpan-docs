# v3_mcp_02_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What is the placeholder text of the search bar?
     4.92s  <ret> 발화 (turn1 첫 프레임)
     5.51s  agent 발화 시작: <ret> Let me check that for you. The website’s search bar pl
     5.65s  user  발화 끝
     5.92s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.40s]: (tool result) The placeholder text is "Search our plants".
    11.31s  user  발화 시작: Oh, interesting. And uh, can you book me a train from London
    11.52s  agent 발화 끝
    19.00s  user  발화 끝
    19.22s  agent 발화 시작: Certainly. What time would you prefer to travel?
    22.32s  agent 발화 끝
    22.89s  user  발화 시작: Around ten in the morning, if possible.
    26.27s  <ret> 발화 (turn5 첫 프레임)
    26.86s  agent 발화 시작: <ret> I'm looking at options now. Your train is booked with 
    27.10s  user  발화 끝
    27.27s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.81s]: (tool result) Train booked. LNER, departs 10:15 AM, arrives 2:42 PM, £
    35.91s  agent 발화 끝
