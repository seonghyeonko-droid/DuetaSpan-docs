# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 혹시 왕좌의 게임 네 번째 에피소드가 언제 방영됐는지 아세요?
     3.34s  <ret> 발화 (turn1 첫 프레임)
     3.94s  agent 발화 시작: <ret> 그거 많이 물어보네.
     4.06s  user  발화 끝
     4.14s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.38s]: August 6, 2017 was the airdate for the fourth episode of Game of Thron
     5.32s  agent 발화 끝
     5.58s  agent 발화 시작: 왕좌의 게임 네 번째 에피소드는 2017년 8월 6일에 방영됐어.
    10.02s  agent 발화 끝
    10.02s  user  발화 시작: 와, 진짜 오래됐네요.
    11.48s  agent 발화 시작: 시간 진짜 빨리 가는 것 같지 않아?
    11.64s  user  발화 끝
    12.33s  user  발화 시작: 맞아요.
    12.59s  <ret> 발화 (turn6 첫 프레임)
    12.83s  user  발화 끝
    13.19s  agent 발화 시작: <ret> 다시 보려고? 지금 HBO Max, Now TV, Sky Go에서 왕좌의 게임을 볼 수 있어.
    13.28s  agent 발화 끝
    13.59s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.97s]: (tool result) Search results for "Game of Thrones streaming services" 
    18.70s  agent 발화 끝
    19.27s  user  발화 시작: 솔직히 그런 판타지물은 좀 질색이에요.
    21.67s  user  발화 끝
    21.84s  user  발화 시작: 아, 그거 흥미롭네요. 음… 제가 궁금한 게 있는데요, 혹시 가고일이 있는 건물에서 일해 보신 적 있으세요?
    31.07s  user  발화 끝
