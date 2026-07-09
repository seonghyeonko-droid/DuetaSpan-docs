# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 프랑스 휴가 사진들 찾아 주시는데, 썸네일 말고 큰 사진으로 보여 주세요.
     3.90s  <ret> 발화 (turn1 첫 프레임)
     4.14s  agent 발화 시작: <ret> 응.
     4.24s  user  발화 시작: 네.
     4.25s  user  발화 끝
     4.26s  ⚡SPAN 주입 [d'=0.36s / d_lead=0.36s]: (tool result) Four files were found: "Paris_Eiffel_Tower.jpg", "Nice_B
     4.50s  agent 발화 끝
     4.83s  user  발화 끝
     5.61s  user  발화 시작: 당연히 바로 보내 줄 수 있지. 엘리즈 뒤퐁에게 에펠탑 사진이 담긴 이메일을 보냈어.
    10.64s  <ret> 발화 (turn4 첫 프레임)
    10.88s  agent 발화 시작: <ret> 응.
    10.96s  user  발화 시작: 네.
    11.00s  ⚡SPAN 주입 [d'=0.36s / d_lead=0.36s]: (tool result) Email sent to elise.dupont@example.com with subject "Par
    11.07s  user  발화 끝
    11.24s  agent 발화 끝
    11.55s  user  발화 끝
    12.74s  user  발화 시작: 알아볼게.
    13.47s  agent 발화 시작: 그래.
    13.56s  user  발화 끝
    13.66s  user  발화 시작: 네.
    13.72s  user  발화 시작: Okay, thanks.
    13.74s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The current weather in Nice, France is twenty-two degree
    13.97s  agent 발화 끝
    14.29s  user  발화 끝
    14.46s  agent 발화 시작: <ret> 아, 이제 날씨 정보 있네. 니스에는 기온이 22도이고 부분적으로 흐리고, 바람은 시속 15킬로미
    14.54s  user  발화 끝
    22.33s  agent 발화 끝
