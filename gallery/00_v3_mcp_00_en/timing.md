# v3_mcp_00_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Can you give me the coordinates for the Eiffel Tower in Pari
     3.16s  <ret> 발화 (turn1 첫 프레임)
     3.40s  agent 발화 시작: <ret> Certainly, pinpointing locations is something I do oft
     3.56s  user  발화 끝
     4.12s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.06s]: (tool result) The Eiffel Tower is located at latitude 48.8584, longitu
    14.07s  user  발화 시작: Okay, and can you find hotels near those coordinates?
    14.11s  agent 발화 끝
    16.96s  <ret> 발화 (turn3 첫 프레임)
    17.36s  agent 발화 시작: <ret> I can certainly search for accommodations nearby. Hote
    17.64s  user  발화 끝
    18.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=2.55s]: (tool result) Hotel Plaza Athénée is 0.8 miles away, with a price of $
    25.37s  agent 발화 끝
    25.65s  user  발화 시작: That’s a bit pricey. Are there any cheaper options?
    28.95s  <ret> 발화 (turn5 첫 프레임)
    29.27s  agent 발화 시작: <ret> Let me refine that search for more affordable hotels. 
    29.44s  user  발화 끝
    30.31s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.47s]: (tool result) Hotel Saint-Paul Rive Gauche is 1.5 miles away and costs
    39.29s  agent 발화 끝
