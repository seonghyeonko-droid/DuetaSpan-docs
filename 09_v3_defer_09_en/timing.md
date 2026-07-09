# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.29s  <ret> 발화 (turn1 첫 프레임)
     5.53s  agent 발화 시작: <ret> Let’s see what availability looks like… I’ve reserved 
     5.68s  user  발화 끝
     6.49s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.30s]: (tool result) Your reservation is confirmed for three rooms at Ocean V
    13.97s  agent 발화 끝
    14.69s  user  발화 시작: What’s the cancellation policy?
    16.43s  agent 발화 시작: Ocean View Hotel allows free cancellation up to twenty-four 
    16.62s  user  발화 끝
    25.80s  agent 발화 끝
    26.44s  user  발화 시작: Can you send me a reminder the day before?
    28.23s  <ret> 발화 (turn5 첫 프레임)
    28.55s  agent 발화 시작: <ret> Absolutely, I can certainly do that for you. I’ve set 
    28.79s  user  발화 끝
    29.99s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.19s]: (tool result) A reminder has been set for February ninth at ten AM: Oc
    37.31s  agent 발화 끝
