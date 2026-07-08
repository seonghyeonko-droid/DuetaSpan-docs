# v3_mcp_00_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Can you give me the coordinates for the Eiffel Tower in Pari
     2.97s  <ret> 발화 (turn1 첫 프레임)
     3.21s  agent 발화 시작: <ret> Certainly, locating landmarks is something I often do…
     3.37s  user  발화 끝
     3.93s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.17s]: (tool result) The Eiffel Tower is located at 48.8584° N, 2.2945° E.
    14.65s  user  발화 시작: Okay, and can you find me hotels near those coordinates?
    14.71s  agent 발화 끝
    17.68s  <ret> 발화 (turn3 첫 프레임)
    18.08s  agent 발화 시작: <ret> Of course, finding a place to stay nearby is a good id
    18.35s  user  발화 끝
    19.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.12s]: (tool result) Hotel Plaza Athénée is 0.7 miles away, priced at $1,500 
    29.07s  agent 발화 끝
    29.37s  user  발화 시작: That Plaza Athénée sounds nice—can you book me a room there 
    33.65s  <ret> 발화 (turn5 첫 프레임)
    33.97s  agent 발화 시작: <ret> A lovely choice, let’s secure that for you right away…
    34.14s  user  발화 끝
    35.01s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.56s]: (tool result) Your reservation at Hotel Plaza Athénée is confirmed for
    37.52s  agent 발화 끝
