# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.31s  <ret> 발화 (turn1 첫 프레임)
     5.54s  agent 발화 시작: <ret> Certainly, let’s see about those rooms for you. I’ve r
     5.70s  user  발화 끝
     7.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.20s]: (tool result) Your reservation is confirmed for three rooms at Ocean V
    15.55s  agent 발화 끝
    16.26s  user  발화 시작: Uh, what’s the cancellation policy?
    18.22s  <ret> 발화 (turn3 첫 프레임)
    18.38s  agent 발화 시작: <ret> That's a very important thing to know, of course. You 
    18.57s  user  발화 끝
    20.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.43s]: (tool result) Cancellations are permitted up to forty-eight hours prio
    27.14s  agent 발화 끝
    27.74s  user  발화 시작: Right. And could you send me a confirmation email?
    30.27s  <ret> 발화 (turn5 첫 프레임)
    30.59s  agent 발화 시작: <ret> Absolutely, I can take care of that for you. I’ve just
    30.78s  user  발화 끝
    32.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.41s]: (tool result) A confirmation email has been sent to your registered em
    39.30s  agent 발화 끝
