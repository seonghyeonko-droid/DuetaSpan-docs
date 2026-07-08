# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 사용자 에이전트를 슈퍼크롤러 버전 십 점 일로 설정해 주시겠어요?
     3.51s  <ret> 발화 (turn1 첫 프레임)
     3.90s  agent 발화 시작: <ret> 네, 브라우저 설정을 변경해 드릴 수 있습니다. 요청하신 대로 브라우저의 사용자 에이전트를 슈퍼크
     3.98s  user  발화 끝
     5.03s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.31s]: (tool result) The user agent is now set to SuperCrawler version 10.1.
    12.52s  agent 발화 끝
    12.63s  user  발화 시작: 음, 지금 웹사이트에서 보이는 게 맞나요, 아니면 새로 고쳐야 하나요?
    16.49s  agent 발화 시작: 페이지를 새로 고치면 웹사이트에서 새로운 사용자 에이전트를 확인할 수 있습니다.
    16.52s  user  발화 끝
    21.23s  user  발화 시작: 알겠습니다. 현재 IP 주소는 어떻게 되나요?
    21.30s  agent 발화 끝
    23.23s  <ret> 발화 (turn5 첫 프레임)
    23.63s  agent 발화 시작: <ret> 네, 현재 IP 주소를 확인하는 것은 간단합니다. 현재 IP 주소는 일구십이 점 영 점 이 점 사
    23.82s  user  발화 끝
    24.91s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.73s]: (tool result) Your current IP address is 192.0.2.44.
    30.13s  user  발화 시작: 그건… 예상 밖인데요. 로컬 주소인가요?
    30.67s  agent 발화 끝
    32.68s  agent 발화 시작: 네, 비공개 IP 주소로 보입니다. 네트워크 주소 변환 시스템 뒤에 있는 것 같습니다.
    32.86s  user  발화 끝
    38.56s  agent 발화 끝
