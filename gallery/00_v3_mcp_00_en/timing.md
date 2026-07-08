# v3_mcp_00_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Can you give me the coordinates for the Eiffel Tower in Pari
     3.06s  <ret> 발화 (turn1 첫 프레임)
     3.29s  agent 발화 시작: <ret> Certainly, locating landmarks is something I’ve done a
     3.37s  user  발화 끝
     4.10s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.80s]: (tool result) The Eiffel Tower is located at 48.8584° N, 2.2945° E.
    15.40s  user  발화 시작: Okay, and can you find hotels near that location?
    15.43s  agent 발화 끝
    18.24s  <ret> 발화 (turn3 첫 프레임)
    18.64s  agent 발화 시작: <ret> I can definitely search for nearby accommodations for 
    18.96s  user  발화 끝
    20.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.20s]: (tool result) Hotel Plaza Athénée is 0.7 miles away, with a price of $
    31.07s  agent 발화 끝
    31.27s  user  발화 시작: Book me a room at the Hotel Raphael for tonight.
    34.08s  <ret> 발화 (turn5 첫 프레임)
    34.38s  agent 발화 시작: <ret> I’ll go ahead and secure a reservation for you then.
    34.51s  user  발화 끝
    35.20s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.59s]: (tool result) Your reservation at Hotel Raphael is confirmed for one n
    36.97s  agent 발화 끝
