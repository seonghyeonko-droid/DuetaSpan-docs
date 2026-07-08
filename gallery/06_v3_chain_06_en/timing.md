# v3_chain_06_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Mark order twelve thousand three hundred forty five as deliv
     6.27s  <ret> 발화 (turn1 첫 프레임)
     6.27s  ⚡SPAN 주입 [d'=0.00s / d_lead=0.52s]: (tool result) Shipment 12345 is now marked as delivered with transacti
     6.86s  agent 발화 시작: <ret> Certainly. Your shipment, order twelve thousand three 
     7.00s  user  발화 끝
    14.09s  agent 발화 끝
    14.61s  user  발화 시작: And can you tell me the delivery address for that order?
    16.41s  <ret> 발화 (turn3 첫 프레임)
    17.01s  agent 발화 시작: <ret> I can look that up— The delivery address for order twe
    17.20s  user  발화 끝
    17.41s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.37s]: (tool result) The delivery address for order 12345 is 42 Elm Street, A
    21.80s  user  발화 시작: Right.
    22.53s  user  발화 끝
    27.91s  agent 발화 끝
    28.59s  user  발화 시작: Actually, hold on— was that shipped with expedited delivery?
    31.64s  agent 발화 시작: Yes, order twelve thousand three hundred forty five was ship
    31.82s  user  발화 끝
    37.90s  agent 발화 끝
    38.49s  user  발화 시작: Okay, good. And what was the total shipping cost?
    41.35s  user  발화 끝
