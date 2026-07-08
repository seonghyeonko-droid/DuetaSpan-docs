# v3_rags_33_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Name of cat in secret life of pets?
     2.54s  agent 발화 시작: <ret> That’s a good one. Ozone is the grey tabby cat from th
     2.54s  <ret> 발화 (turn1 첫 프레임)
     2.54s  user  발화 끝
     3.42s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.27s]: The grey tabby cat in *The Secret Life of Pets* is named Ozone.
     6.68s  agent 발화 끝
