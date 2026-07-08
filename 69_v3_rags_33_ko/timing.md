# v3_rags_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 야, 월드컵 개최국이 마지막으로 이긴 게 언제였지?
     0.92s  <ret> 발화 (turn1 첫 프레임)
     1.42s  user  발화 끝
     1.48s  agent 발화 시작: <ret> 음, 그거 재밌는 거네. 프랑스가 우승하면서 월드컵 개최국이 이긴 건 구십팔 년이었어.
     1.56s  ⚡SPAN 주입 [d'=0.64s / d_lead=2.73s]: France won the 1998 FIFA World Cup as the host nation.
     6.94s  agent 발화 끝
