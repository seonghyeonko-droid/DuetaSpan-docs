# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: weather.example.com에서 날씨 업데이트를 봐 주시겠어요?
     2.96s  <ret> 발화 (turn1 첫 프레임)
     3.10s  agent 발화 시작: <ret> 네, 해당 웹사이트의 날씨를 확인해 봤는데요, 현재 기온은 섭씨 22도이고 부분적으로 구름이 낀 
     3.23s  user  발화 끝
     4.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.87s]: (tool result) The website reports a temperature of 22 degrees Celsius 
     9.86s  agent 발화 끝
     9.91s  user  발화 시작: 와, 생각보다 따뜻하네요… 음, 제르마트로 가는 기차를 예약해야 할 것 같아요.
    15.09s  user  발화 끝
    15.10s  agent 발화 시작: 제르마트로 떠나시는군요, 정말 멋지네요! 혹시 여행하시고 싶은 날짜와 시간이 있으신가요?
    21.03s  agent 발화 끝
    21.88s  user  발화 시작: 네, 그러니까 7월 16일, 가능하다면 아침 열 시쯤으로요.
    25.35s  <ret> 발화 (turn5 첫 프레임)
    25.74s  agent 발화 시작: <ret> 기차 시간표를 확인해 보겠습니다. 7월 16일 오전 10시 15분에 제르마트로 가는 기차가 있고,
    25.91s  user  발화 끝
    27.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.55s]: (tool result) A train to Zermatt is available on July 16th at 10:15 AM
    35.34s  agent 발화 끝
    35.44s  user  발화 시작: 네, 부탁드립니다. 그리고 등산화를 챙기라고 알려주실 수 있나요?
    39.68s  <ret> 발화 (turn7 첫 프레임)
    40.02s  user  발화 끝
    40.07s  agent 발화 시작: <ret> 네, 등산화 챙기라고 알림을 설정해 드릴게요. 7월 15일 오후 6시에 등산화를 챙기라는 알림을 
    40.80s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.52s]: (tool result) A reminder to pack hiking boots is set for July 15th at 
    49.61s  agent 발화 끝
