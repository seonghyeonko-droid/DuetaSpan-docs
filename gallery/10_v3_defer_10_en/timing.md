# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     5.01s  <ret> 발화 (turn1 첫 프레임)
     5.09s  agent 발화 시작: <ret> Okay, searching your files for those photos… I found t
     5.10s  user  발화 끝
     6.21s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.83s]: (tool result) Three pictures were found: "Paris_Eiffel_Tower.jpg", "Ni
    13.99s  agent 발화 끝
    14.15s  user  발화 시작: Oh, excellent! And could you send the Paris one to my sister
    18.00s  <ret> 발화 (turn3 첫 프레임)
    18.26s  user  발화 끝
    18.31s  agent 발화 시작: <ret> Certainly, I can send that image to Sarah… The photo o
    18.96s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.44s]: (tool result) The file "Paris_Eiffel_Tower.jpg" was successfully sent 
    23.63s  user  발화 시작: Great, thanks. Uh, do you know what the average rainfall is 
    24.10s  agent 발화 끝
    28.57s  agent 발화 시작: That’s a good question. I'll need a moment to look that up f
    28.73s  user  발화 끝
    32.52s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The average rainfall in Reykjavik in December is 92 mill
    32.78s  agent 발화 끝
    32.89s  user  발화 시작: Right.
    33.47s  agent 발화 시작: <ret> I have the information now… Reykjavik gets an average 
    33.62s  user  발화 끝
    40.61s  agent 발화 끝
