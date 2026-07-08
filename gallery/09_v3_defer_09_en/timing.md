# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.06s  <ret> 발화 (turn1 첫 프레임)
     5.30s  agent 발화 시작: <ret> Let me see what’s available at the Ocean View Hotel fo
     5.42s  user  발화 끝
     7.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.12s]: (tool result) Reservation confirmed for three rooms at Ocean View Hote
    15.97s  agent 발화 끝
    16.68s  user  발화 시작: Uh, what's the cancellation policy?
    18.59s  <ret> 발화 (turn3 첫 프레임)
    18.75s  agent 발화 시작: <ret> I can certainly look up the cancellation policy for th
    18.94s  user  발화 끝
    20.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.02s]: (tool result) Ocean View Hotel allows free cancellation until seven da
    27.51s  agent 발화 끝
    28.12s  user  발화 시작: Right. And could you send me a copy of the confirmation to m
    31.33s  <ret> 발화 (turn5 첫 프레임)
    31.71s  agent 발화 시작: <ret> Absolutely, I can send that confirmation to your email
    31.95s  user  발화 끝
    33.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.17s]: (tool result) Email sent to user_email with subject "Ocean View Hotel 
    39.64s  agent 발화 끝
