# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안녕하세요. 검색창의 자리 표시 글자가 뭔지 궁금하시군요.
     2.82s  <ret> 발화 (turn1 첫 프레임)
     3.22s  ⚡SPAN 주입 [d'=0.40s / d_lead=2.05s]: (tool result) The placeholder text is "Search our plants".
     3.23s  user  발화 끝
     3.42s  agent 발화 시작: <ret> 음, 확인해 봤는데요. 웹사이트 검색창의 자리 표시 글자는 “Search our plants”라고
     7.81s  user  발화 시작: 아, 그렇군요. 그리고 혹시 다음 화요일에 런던에서 에든버러까지 기차표 예약을 해주실 수 있을까요?
     7.85s  agent 발화 끝
    14.67s  user  발화 끝
    14.84s  agent 발화 시작: 네, 물론입니다. 몇 시쯤 출발하시고 싶으세요?
    17.79s  user  발화 시작: 가능하다면 아침 열 시쯤으로 부탁드립니다.
    17.79s  agent 발화 끝
    20.46s  <ret> 발화 (turn5 첫 프레임)
    20.94s  ⚡SPAN 주입 [d'=0.48s / d_lead=1.68s]: (tool result) Train booked. LNER, departs 10:15 AM, arrives 2:42 PM, £
    21.06s  agent 발화 시작: <ret> 알겠습니다. 지금 확인해 보고 있습니다. LNER 기차로, 오전 열 시 십오 분에 출발해서 오후 
    21.21s  user  발화 끝
    29.45s  agent 발화 끝
