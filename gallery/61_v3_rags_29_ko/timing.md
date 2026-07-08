# v3_rags_29_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 트루먼 쇼 촬영한 플로리다 마을이 어디예요?
     2.11s  <ret> 발화 (turn1 첫 프레임)
     2.68s  user  발화 끝
     2.71s  agent 발화 시작: <ret> 음, 그 영화는 주로 플로리다의 시사이드에서 촬영됐습니다.
     3.11s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.17s]: Seaside, Florida, served as the primary filming location for the 1998 
     7.15s  agent 발화 끝
