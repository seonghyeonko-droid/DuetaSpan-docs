# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 사용자 에이전트를 슈퍼크롤러 버전 십 점 일로 설정해 주시겠어요?
     3.41s  <ret> 발화 (turn1 첫 프레임)
     3.80s  agent 발화 시작: <ret> 네, 브라우저 설정을 변경해 드릴 수 있습니다. 요청하신 대로 브라우저는 현재 슈퍼크롤러 버전 십
     3.84s  user  발화 끝
     4.93s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.89s]: (tool result) The user agent is now set to SuperCrawler version 10.1.
    11.59s  agent 발화 끝
    11.70s  user  발화 시작: 음, 그건 좀… 공격적인 것 같아요. 좀 더 눈에 띄지 않게 바꿔 주실 수 있을까요? 예를 들어, 그냥 “M
    18.98s  <ret> 발화 (turn3 첫 프레임)
    19.29s  agent 발화 시작: <ret> 물론이죠, 좀 더 은근한 접근 방식이 훨씬 좋겠네요. 프로필이 덜 눈에 띄도록 사용자 에이전트를 
    19.43s  user  발화 끝
    20.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.91s]: (tool result) The user agent is now set to MyBrowser.
    28.50s  user  발화 시작: 좋네요. 그럼 도미니크 앙셀 베이커리에서 파인 오 쇼콜라의 현재 가격을 찾아 주시겠어요?
    28.56s  agent 발화 끝
    33.35s  <ret> 발화 (turn5 첫 프레임)
    33.58s  agent 발화 시작: <ret> 정말 좋은 선택이네요—확인해 드릴 수 있습니다. 도미니크 앙셀 베이커리의 파인 오 쇼콜라는 현재 
    33.83s  user  발화 끝
    35.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.22s]: (tool result) A pain au chocolat at Dominique Ansel Bakery currently c
    41.01s  user  발화 시작: 육 달러 쉰 센트요? [surprised] 음… 엄청 비싸네요. 알겠습니다, 당분간 페이스트리는 됐어요.
    41.55s  agent 발화 끝
    47.68s  user  발화 끝
