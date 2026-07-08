# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 사용자 에이전트를 슈퍼크롤러 버전 십 점 일로 설정해 주시겠어요?
     3.36s  <ret> 발화 (turn1 첫 프레임)
     3.75s  agent 발화 시작: <ret> 네, 브라우저 식별 정보를 변경하고 있습니다— 사용자 에이전트를 슈퍼크롤러 버전 십 점 일로 업데
     3.84s  user  발화 끝
     4.40s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.37s]: (tool result) The user agent is now set to SuperCrawler version 10.1.
    10.38s  agent 발화 끝
    10.47s  user  발화 시작: 음, 실제로 작동하는지 확인해 봐도 될까요? 현재 사용자 에이전트가 뭔지 확인해 줄 수 있나요?
    15.68s  <ret> 발화 (turn3 첫 프레임)
    15.99s  agent 발화 시작: <ret> 그 변경 사항을 확인해 보겠습니다— 네, 그렇습니다. 현재 사용자 에이전트는 슈퍼크롤러 버전 십 
    16.12s  user  발화 끝
    17.28s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.83s]: (tool result) The current user agent is SuperCrawler version 10.1.
    24.63s  user  발화 시작: 알겠습니다, 좋네요. 루브르 박물관 근처의 식당을 검색해 줄 수 있나요?
    24.75s  agent 발화 끝
    28.29s  <ret> 발화 (turn5 첫 프레임)
    28.52s  agent 발화 시작: <ret> 물론입니다, 근처 식당을 찾아보겠습니다— 루브르 근처에 세 곳의 식당을 찾았습니다. 르 퓌모아, 
    28.75s  user  발화 끝
    30.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.52s]: (tool result) Restaurants near the Louvre: Le Fumoir (French, 4.5 star
    37.32s  agent 발화 끝
