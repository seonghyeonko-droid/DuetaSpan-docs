# v3_fstart_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 알라모로 가는 길을 안내해 드릴까요?
     1.86s  <ret> 발화 (turn1 첫 프레임)
     2.34s  ⚡SPAN 주입 [d'=0.48s / d_lead=0.59s]: (tool result) The Alamo is 306 Alamo Plaza, San Antonio, Texas, 78205.
     2.45s  agent 발화 시작: <ret> 네, 알라모는 텍사스주 샌안토니오 알라모 플라자 306번지에 위치해 있습니다.
     2.58s  user  발화 끝
     7.78s  agent 발화 끝
     8.00s  user  발화 시작: 음, 지금 그곳 날씨는 어떤가요?
     9.79s  <ret> 발화 (turn3 첫 프레임)
    10.38s  agent 발화 시작: <ret> 잠시만 확인해 볼게요. 현재 텍사스주 샌안토니오에서는 화씨 85도이고 맑습니다.
    10.58s  user  발화 끝
    10.79s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.20s]: (tool result) It is currently 85 degrees Fahrenheit and sunny in San A
    16.27s  user  발화 시작: 화씨 85도요? 와, 정말 덥네요.
    16.68s  agent 발화 끝
    19.65s  user  발화 끝
    19.73s  agent 발화 시작: 네, 이맘때 날씨로는 꽤 더운 편이에요.
    22.31s  agent 발화 끝
