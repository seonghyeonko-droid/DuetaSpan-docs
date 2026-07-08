# v3_fake__17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was just wondering, when did college basketball start usin
     5.33s  agent 발화 시작: That’s an interesting question, tracing innovations in the g
     5.46s  user  발화 끝
     9.00s  <ret> 발화 (turn2 첫 프레임)
     9.60s  agent 발화 시작: <ret> Let me share some history. It was officially adopted d
     9.63s  agent 발화 끝
    10.00s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.11s]: The three-point line was officially adopted by NCAA college basketball
    17.45s  user  발화 시작: Oh, wow, that’s… relatively recent, huh? I thought it’d be o
    17.62s  agent 발화 끝
    21.48s  user  발화 끝
    21.91s  agent 발화 시작: Indeed. It represents a significant shift in strategy and ga
    27.20s  agent 발화 끝
    27.26s  user  발화 시작: So, before nineteen eighty-one, everything was just twos and
    31.11s  <ret> 발화 (turn6 첫 프레임)
    31.43s  ⚡SPAN 주입 [d'=0.32s / d_lead=0.54s]: Prior to the 1980–81 season, all field goals in NCAA basketball were w
    31.70s  user  발화 끝
    31.70s  agent 발화 시작: <ret> Precisely. Before nineteen eighty-one, all successful 
    40.35s  user  발화 시작: Huh. I wonder what prompted the change?
    40.37s  agent 발화 끝
    43.54s  user  발화 끝
    43.77s  agent 발화 시작: [sigh] That’s a question of evolving tactics and a desire fo
    49.42s  agent 발화 끝
