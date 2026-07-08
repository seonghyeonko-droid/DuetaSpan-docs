# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 홈페이지 전체 화면을 캡처해서 홈페이지로 저장해 드릴까요?
     3.96s  agent 발화 시작: <ret> 음, 구글 홈페이지 전체 화면 캡처를 홈페이지.png로 저장했어.
     3.96s  <ret> 발화 (turn1 첫 프레임)
     3.96s  ⚡SPAN 주입 [d'=0.00s / d_lead=0.57s]: File saved as homepage.png.
     3.96s  user  발화 끝
     8.48s  user  발화 시작: 아, 정말 다행이다. 뭐, 찰리 파커에 대해 읽고 있었는데… 진짜 대단했잖아?
     8.48s  agent 발화 끝
    14.69s  agent 발화 시작: 맞아, 진짜 그랬지. 혁신적인 즉흥 연주자였고, 매 음표마다 경계를 허물었어.
    14.69s  user  발화 끝
    20.34s  user  발화 시작: 네, 알겠습니다. 뉴올리언스로 12월 21일에 가는 비행기를 예약해야 해요.
    20.34s  agent 발화 끝
    25.43s  agent 발화 시작: <ret> 됐어. 뉴욕에서 뉴올리언스로 가는 12월 21일 비행기를 285달러에 예약했어.
    25.43s  <ret> 발화 (turn5 첫 프레임)
    25.43s  user  발화 끝
    26.43s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.70s]: Flight booked: New York to New Orleans, December 21st, $285.
    30.51s  agent 발화 끝
