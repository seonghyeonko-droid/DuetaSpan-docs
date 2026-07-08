# v3_rags_34_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 야, fifty shades of grey 후속작이 뭔데?
     3.24s  agent 발화 시작: <ret> 음, 많이 물어보시네요. fifty shades darker가 fifty shades of gre
     3.24s  <ret> 발화 (turn1 첫 프레임)
     3.24s  user  발화 끝
     4.20s  ⚡SPAN 주입 [d'=0.96s / d_lead=1.85s]: Fifty Shades Darker is the second book in the Fifty Shades trilogy by 
    10.17s  agent 발화 끝
