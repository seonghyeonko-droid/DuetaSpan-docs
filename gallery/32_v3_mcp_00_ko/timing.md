# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 파리에서 4월 1일부터 4월 5일까지, 오후 2시 30분에 픽업하는 해치백 좀 찾아 줘.
     7.10s  <ret> 발화 (turn1 첫 프레임)
     7.42s  agent 발화 시작: <ret> 네, 알아보고 있어요—여행 시작 전에 차를 찾는 건 언제나 좋은 시작이죠. 유로프카에서 르노 클리
     7.55s  user  발화 끝
     8.71s  ⚡SPAN 주입 [d'=1.60s / d_lead=7.77s]: (tool result) A Renault Clio is available for seventy-eight euros per 
    20.73s  agent 발화 끝
    20.94s  user  발화 시작: 음, 하루에 78유로는 좀 비싸네. 더 싼 거 있어?
    25.09s  <ret> 발화 (turn3 첫 프레임)
    25.48s  agent 발화 시작: <ret> 가격은 당연히 달라지죠—수요와 렌터카 회사에 따라 달라져요.
    25.61s  user  발화 끝
    26.29s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.72s]: (tool result) A Peugeot 208 is available for fifty-five euros per day 
    30.18s  agent 발화 시작: 식스트에서 푸조 208을 하루에 55유로에 제공하고 있는데, 원하시는 가격에 딱 맞을 거예요.
    30.20s  agent 발화 끝
    36.45s  user  발화 시작: 55유로면 훨씬 좋네. 좋아, 푸조로 예약해 줘.
    36.94s  agent 발화 끝
    41.02s  <ret> 발화 (turn6 첫 프레임)
    41.17s  agent 발화 시작: <ret> 잘 됐네요—좋은 가격에 예약하신 건 정말 만족스러워요. 푸조 208이 식스트를 통해 예약되었고, 
    41.30s  user  발화 끝
    42.70s  ⚡SPAN 주입 [d'=1.68s / d_lead=4.35s]: (tool result) Your Peugeot 208 is reserved with Sixt; confirmation num
    52.77s  agent 발화 끝
    53.97s  user  발화 시작: 좋아! 고마워.
    55.58s  user  발화 끝
    55.63s  agent 발화 시작: 천만에요. 제가 차를 빌렸던 적이 있었는데…
    58.86s  agent 발화 끝
