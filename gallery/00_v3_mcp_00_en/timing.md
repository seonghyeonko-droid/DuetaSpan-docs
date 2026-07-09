# v3_mcp_00_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Can you give me the coordinates for the Eiffel Tower in Pari
     3.27s  <ret> 발화 (turn1 첫 프레임)
     3.50s  agent 발화 시작: <ret> Certainly, locating landmarks is something I do often.
     3.60s  user  발화 끝
     4.31s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.27s]: (tool result) The Eiffel Tower is located at 48.8584° N, 2.2945° E.
    15.36s  user  발화 시작: Okay, and can you find me hotels near there?
    15.37s  agent 발화 끝
    18.09s  <ret> 발화 (turn3 첫 프레임)
    18.49s  agent 발화 시작: <ret> I can certainly help with that, finding a good hotel i
    18.59s  user  발화 끝
    20.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.47s]: (tool result) Hotel Plaza Athénée is 0.8 km away, priced at 1200 euros
    23.45s  user  발화 시작: Yeah.
    23.94s  user  발화 끝
    31.09s  user  발화 시작: What’s the Plaza Athénée like?
    31.15s  agent 발화 끝
    33.28s  agent 발화 시작: It’s a very well-regarded luxury hotel, known for its except
    33.36s  user  발화 끝
    41.33s  user  발화 시작: Book me a room at the Raphael for one night.
    41.39s  agent 발화 끝
    44.24s  user  발화 끝
    44.36s  agent 발화 시작: A comfortable choice, let's get that reservation confirmed f
    48.19s  agent 발화 끝
