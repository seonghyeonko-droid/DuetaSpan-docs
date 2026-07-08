# v3_mcp_00_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Can you give me the coordinates for the Eiffel Tower in Pari
     3.07s  <ret> 발화 (turn1 첫 프레임)
     3.31s  agent 발화 시작: <ret> Let’s see what the map tells us… Those coordinates pin
     3.42s  user  발화 끝
     4.03s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.65s]: (tool result) The Eiffel Tower is located at 48.8584° N, 2.2945° E.
    15.00s  user  발화 시작: Okay, and can you find hotels near that location?
    15.04s  agent 발화 끝
    17.76s  <ret> 발화 (turn3 첫 프레임)
    18.16s  agent 발화 시작: <ret> Certainly, I can search for accommodations nearby. The
    18.38s  user  발화 끝
    19.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=2.49s]: (tool result) Hotel Plaza Athénée is 0.8 miles away, priced at $1,500 
    31.33s  agent 발화 끝
    31.60s  user  발화 시작: That Plaza Athénée sounds nice— can you book me a room there
    36.12s  <ret> 발화 (turn5 첫 프레임)
    36.44s  agent 발화 시작: <ret> I can certainly check availability for you.
    36.59s  user  발화 끝
    37.16s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.45s]: (tool result) A room at Hotel Plaza Athénée is reserved for you tonigh
    38.88s  agent 발화 끝
