# v3_inter_13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 뭐 먹을 거 있어? 노스캐롤라이나는 어떤 음식으로 유명해?
     2.80s  <ret> 발화 (turn1 첫 프레임)
     3.39s  agent 발화 시작: <ret> 음, 노스캐롤라이나는 주로 돼지고기 바비큐랑 베이컨으로 유명해요.
     3.61s  user  발화 끝
     3.80s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.51s]: North Carolina is known for its pork barbecue and bacon.
     7.79s  agent 발화 끝
     7.81s  user  발화 시작: 아, 바비큐, 그렇지. 해산물은 어때? 거기도 많이 먹어?
    10.94s  agent 발화 시작: 해안가에서는 해산물도 인기가 많아요.
    11.03s  user  발화 끝
    12.90s  user  발화 시작: [laugh] 응, 당연하지. 근데 주에서 공식적으로 지정한 토스트는 뭐야? 있잖아?
    13.33s  agent 발화 끝
    16.37s  <ret> 발화 (turn5 첫 프레임)
    16.96s  agent 발화 시작: <ret> 뭐, 좀 더 자세한 걸 물어보시는군요— 노스캐롤라이나의 공식 주 토스트는, 놀랍게도 치어와인이라는
    17.06s  user  발화 끝
    17.37s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.91s]: The official state toast of North Carolina is the Cheerwine soft drink
    27.34s  user  발화 시작: 치어와인? 그거… 의외네. 흐음.
    27.58s  agent 발화 끝
    29.59s  user  발화 끝
