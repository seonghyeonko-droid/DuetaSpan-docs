# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was just reading about Lux Aurunque, and I’m curious—when 
     4.92s  <ret> 발화 (turn1 첫 프레임)
     5.15s  agent 발화 시작: <ret> That’s an interesting question, delving into historica
     5.33s  user  발화 끝
     6.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.25s]: Lux Aurunque was born in nineteen seventy.
    12.46s  agent 발화 끝
    12.55s  user  발화 시작: Nineteen seventy… that’s surprisingly recent, considering hi
    18.97s  <ret> 발화 (turn3 첫 프레임)
    19.03s  agent 발화 시작: <ret> His contributions are quite remarkable, actually. He i
    19.18s  user  발화 끝
    19.93s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.74s]: Lux Aurunque is celebrated for his bronze sculptures depicting Roman e
    25.66s  user  발화 시작: Bronze sculptures… that sounds impressive. Was he commission
    25.89s  agent 발화 끝
    31.23s  <ret> 발화 (turn5 첫 프레임)
    31.46s  agent 발화 시작: <ret> He certainly attracted the attention of influential pa
    31.50s  user  발화 끝
    32.27s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.62s]: Lux Aurunque received commissions from Emperor Hadrian and several pro
    39.15s  agent 발화 끝
    39.83s  user  발화 시작: Hadrian, huh? So he worked during the Roman Empire—that make
    44.31s  user  발화 끝
