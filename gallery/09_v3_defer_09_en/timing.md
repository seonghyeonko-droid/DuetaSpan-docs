# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.41s  <ret> 발화 (turn1 첫 프레임)
     5.65s  agent 발화 시작: <ret> Let’s see what availability looks like… I’ve found thr
     5.75s  user  발화 끝
     6.93s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.69s]: (tool result) The hotel has three rooms available from February tenth 
    17.76s  agent 발화 끝
    18.48s  user  발화 시작: That sounds good. Can you confirm the cancellation policy?
    21.65s  <ret> 발화 (turn3 첫 프레임)
    21.81s  agent 발화 시작: <ret> I can certainly check the details for you… You can can
    22.04s  user  발화 끝
    23.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.18s]: (tool result) Cancellations are permitted up to forty-eight hours befo
    30.57s  agent 발화 끝
    31.22s  user  발화 시작: Perfect. And what’s the hotel’s address?
    33.80s  agent 발화 시작: Let me check on that—just a moment.
    33.99s  user  발화 끝
    36.38s  agent 발화 끝
    36.39s  user  발화 시작: Oh, and could you remind me to pack sunscreen?
    38.55s  <ret> 발화 (turn7 첫 프레임)
    38.85s  agent 발화 시작: <ret> Absolutely, a good idea with the San Diego sun… I’ve s
    39.02s  user  발화 끝
    40.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.92s]: (tool result) Reminder set for February eighth at eight AM: "Pack suns
    48.72s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The Ocean View Hotel is located at 500 Ocean Boulevard, 
    49.75s  agent 발화 끝
    49.77s  agent 발화 시작: <ret> Regarding the address, I have that now… The Ocean View
    60.11s  agent 발화 끝
