# v3_rags_29_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 지금 nba에서 가장 나이가 많은 선수는 누구예요?
     3.45s  <ret> 발화 (turn1 첫 프레임)
     3.60s  agent 발화 시작: <ret> 음, nba에서 가장 나이가 많은 선수를 알아볼게요. 빈스 카터 선수가 현재 nba에서 가장 나이
     3.84s  user  발화 끝
     5.37s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.67s]: Vince Carter is the oldest player currently in the NBA, having played 
    13.57s  agent 발화 끝
