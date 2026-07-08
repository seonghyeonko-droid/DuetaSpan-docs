# v3_mcp_00_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Can you give me the coordinates for the Eiffel Tower in Pari
     3.34s  <ret> 발화 (turn1 첫 프레임)
     3.57s  agent 발화 시작: <ret> Certainly, locating landmarks is something I often do…
     3.70s  user  발화 끝
     4.38s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.22s]: (tool result) The Eiffel Tower is located at 48.8584 degrees North, 2.
    14.38s  user  발화 시작: Okay, and can you find me hotels near that location?
    14.42s  agent 발화 끝
    17.22s  <ret> 발화 (turn3 첫 프레임)
    17.61s  agent 발화 시작: <ret> I can certainly search for accommodations nearby… Hote
    17.89s  user  발화 끝
    19.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=2.70s]: (tool result) Hotel Plaza Athénée is 0.8 kilometers away, priced at 12
    26.09s  agent 발화 끝
    26.35s  user  발화 시작: Wow, that’s expensive! What about something a little cheaper
    30.12s  <ret> 발화 (turn5 첫 프레임)
    30.45s  agent 발화 시작: <ret> Let’s explore some more budget-friendly options… Hotel
    30.61s  user  발화 끝
    31.25s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.85s]: (tool result) Hotel Saint-Paul Rive Gauche is 0.9 kilometers away, pri
    36.15s  agent 발화 끝
