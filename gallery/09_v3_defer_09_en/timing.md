# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.47s  <ret> 발화 (turn1 첫 프레임)
     5.71s  agent 발화 시작: <ret> Let’s see about securing those rooms for you. Your res
     5.88s  user  발화 끝
     7.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.92s]: (tool result) Hotel reservation confirmed for three rooms at Ocean Vie
    15.03s  agent 발화 끝
    15.77s  user  발화 시작: Uh, what’s the cancellation policy?
    17.57s  <ret> 발화 (turn3 첫 프레임)
    17.73s  agent 발화 시작: <ret> That's a very important thing to check, of course. You
    17.89s  user  발화 끝
    19.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.90s]: (tool result) Cancellation is permitted up to February third with a fu
    27.70s  agent 발화 끝
    28.31s  user  발화 시작: Right. Could you send me a copy of that confirmation?
    31.02s  <ret> 발화 (turn5 첫 프레임)
    31.41s  agent 발화 시작: <ret> I can certainly arrange that for you. The confirmation
    31.63s  user  발화 끝
    32.38s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.59s]: (tool result) Email sent to user’s email address with subject “Ocean V
    38.46s  agent 발화 끝
