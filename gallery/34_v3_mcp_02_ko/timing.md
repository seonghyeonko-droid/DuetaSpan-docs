# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: weather.example.com에서 날씨 업데이트를 봐 주시겠어요?
     3.71s  <ret> 발화 (turn1 첫 프레임)
     3.83s  agent 발화 시작: <ret> 지금 런던은 섭씨 12도이고 부분적으로 흐립니다.
     3.98s  user  발화 끝
     5.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.19s]: (tool result) The website reports current conditions in London are 12 
     7.01s  agent 발화 끝
     7.10s  user  발화 시작: 음, 12도라니… 꽤 쌀쌀하네요. 혹시 에델바이스에 대해 아시는 게 있으세요?
    12.55s  agent 발화 시작: 에델바이스는 아름답고 보호받는 알프스 꽃인데, 섬세해 보이지만 꽤 강인합니다.
    12.56s  user  발화 끝
    18.57s  agent 발화 끝
    19.43s  user  발화 시작: 스위스 여행을 계획 중인데, 좀 찾아보고 싶어요. 지금 꽃이 피어 있나요?
    24.08s  <ret> 발화 (turn5 첫 프레임)
    24.48s  agent 발화 시작: <ret> 에델바이스의 일반적인 개화 시기를 알아볼게요. 에델바이스는 보통 스위스 알프스에서 7월부터 9월 
    24.71s  user  발화 끝
    26.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.15s]: (tool result) Edelweiss typically blooms from July to September in the
    28.04s  user  발화 시작: 네네.
    28.81s  user  발화 끝
    32.38s  user  발화 시작: 잘 됐네요! 그럼 8월에 갈 예정이에요. 8월 15일에 취리히에서 그린델발트까지 가는 기차를 예약해 주시겠어
    32.50s  agent 발화 끝
    38.91s  <ret> 발화 (turn8 첫 프레임)
    39.31s  agent 발화 시작: <ret> 물론 기차 예약을 도와드릴 수 있습니다. 8월 15일에 취리히에서 오전 10시 15분에 출발하는 
    39.47s  user  발화 끝
    39.95s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.34s]: (tool result) A train is booked from Zurich to Grindelwald on August f
    46.55s  agent 발화 끝
