# v3_rags_31_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Where does the columbia river meet the pacific ocean?
     2.56s  <ret> 발화 (turn1 첫 프레임)
     3.15s  agent 발화 시작: <ret> That’s a very common question. The Columbia River flow
     3.24s  user  발화 끝
     3.56s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.80s]: The Columbia River meets the Pacific Ocean at the Columbia Bar, a dang
    12.14s  agent 발화 끝
