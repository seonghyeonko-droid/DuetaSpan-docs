# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 사용자 에이전트를 슈퍼크롤러 버전 십 점 일로 설정해 주시겠어요?
     3.36s  <ret> 발화 (turn1 첫 프레임)
     3.75s  agent 발화 시작: <ret> 네, 고객님의 브라우저 설정을 변경해 드릴 수 있습니다. 요청하신 대로 사용자 에이전트를 슈퍼크롤
     3.84s  user  발화 끝
     4.88s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.27s]: (tool result) The user agent is now set to SuperCrawler version 10.1.
    12.28s  agent 발화 끝
    12.43s  user  발화 시작: 음, 그게 웹사이트들이 저를 인식하는 방식에 영향을 줄까요?
    16.12s  agent 발화 시작: 네, 분명히 영향을 줄 겁니다. 웹사이트들은 고객님의 브라우저를 슈퍼크롤러, 버전 십 점 일로 인식할 겁니다
    16.17s  user  발화 끝
    23.84s  user  발화 시작: 알겠습니다. 그럼 그 크롤러를 구체적으로 언급하는 웹사이트를 찾아주시겠어요?
    23.95s  agent 발화 끝
    27.81s  <ret> 발화 (turn5 첫 프레임)
    28.20s  agent 발화 시작: <ret> 슈퍼크롤러에 대해 웹에서 무엇을 찾을 수 있는지 확인해 보겠습니다. 슈퍼크롤러 버전 십 점 일을 
    28.42s  user  발화 끝
    29.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.78s]: (tool result) Search results show two pages mentioning “SuperCrawler v
    38.66s  user  발화 시작: 포럼 토론이라고요? 그 포럼 게시물의 첫 번째 줄만 읽어주시겠어요?
    39.19s  agent 발화 끝
    42.20s  <ret> 발화 (turn7 첫 프레임)
    42.28s  agent 발화 시작: <ret> 네, 특정 부분을 가져와 드릴 수 있습니다.
    42.50s  user  발화 끝
    43.24s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.31s]: (tool result) The first line of the forum post reads: “Anyone else hav
    44.59s  agent 발화 끝
