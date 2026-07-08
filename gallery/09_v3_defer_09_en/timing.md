# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.61s  <ret> 발화 (turn1 첫 프레임)
     5.84s  agent 발화 시작: <ret> Certainly, let me confirm those details for you. I hav
     6.02s  user  발화 끝
     7.13s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.15s]: (tool result) Reservation confirmed for three rooms at Ocean View Hote
    16.09s  agent 발화 끝
    16.89s  user  발화 시작: What’s the cancellation policy?
    18.77s  agent 발화 시작: Let me check on that for you, just a moment.
    18.91s  user  발화 끝
    21.49s  agent 발화 끝
    22.13s  user  발화 시작: Okay, thanks. Is there a restaurant in the hotel?
    24.63s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) Ocean View Hotel allows free cancellation until February
    25.67s  agent 발화 시작: <ret> Regarding the cancellation policy, I have the details 
    25.88s  user  발화 끝
    35.50s  agent 발화 끝
