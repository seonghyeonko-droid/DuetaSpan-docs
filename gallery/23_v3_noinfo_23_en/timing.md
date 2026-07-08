# v3_noinfo_23_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Mark the shipment for order one oh one thousand one hundred 
     4.04s  <ret> 발화 (turn1 첫 프레임)
     4.43s  agent 발화 시작: <ret> Certainly, let’s finalize that delivery status— That s
     4.53s  user  발화 끝
     6.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=2.79s]: (tool result) Shipment one oh one thousand one hundred twelve is now m
    13.28s  agent 발화 끝
    14.58s  user  발화 시작: What’s the estimated delivery for order one oh one thousand 
    18.33s  <ret> 발화 (turn3 첫 프레임)
    18.73s  agent 발화 시작: <ret> I can check the current status— Your order, one oh one
    18.93s  user  발화 끝
    19.61s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.29s]: (tool result) Order one oh one thousand one hundred thirteen is estima
    28.23s  user  발화 시작: Is there any way to get a more precise time?
    28.29s  agent 발화 끝
    31.19s  user  발화 끝
    31.41s  agent 발화 시작: Well, typically—
    31.89s  user  발화 시작: I— I mean, can we pay extra for a morning delivery slot?
    32.65s  agent 발화 끝
    35.75s  <ret> 발화 (turn7 첫 프레임)
    35.83s  agent 발화 시작: <ret> That’s a possibility; we can explore expedited options
    35.97s  user  발화 끝
    36.87s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.89s]: (tool result) Morning delivery for order one oh one thousand one hundr
    39.63s  agent 발화 시작: I’ve scheduled morning delivery for order one oh one thousan
    39.72s  agent 발화 끝
    47.51s  agent 발화 끝
