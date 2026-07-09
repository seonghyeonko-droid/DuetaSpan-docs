# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 사용자 에이전트를 슈퍼크롤러 버전 십 점 일로 설정해 주시겠어요?
     3.42s  <ret> 발화 (turn1 첫 프레임)
     3.81s  agent 발화 시작: <ret> 네, 브라우저 설정을 변경해 드릴게요. 지금 브라우저는 슈퍼크롤러 버전 십 점 일로 식별되고 있습
     3.84s  user  발화 끝
     4.94s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.26s]: (tool result) The user agent has been set to SuperCrawler version 10.1
    10.44s  agent 발화 끝
    10.55s  user  발화 시작: 음, 실제로 작동하는지 확인해 봐도 될까요? 지금 사용자 에이전트가 뭔지 확인해 줄 수 있어요?
    15.58s  <ret> 발화 (turn3 첫 프레임)
    15.89s  agent 발화 시작: <ret> 그 변경 사항을 바로 확인해 볼게요. 네, 슈퍼크롤러 버전 십 점 일로 보고되고 있습니다.
    16.02s  user  발화 끝
    17.18s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.36s]: (tool result) The current user agent is SuperCrawler version 10.1.
    18.33s  user  발화 시작: 그렇죠.
    18.96s  user  발화 끝
    21.77s  agent 발화 끝
    22.05s  user  발화 시작: 좋아요. 그럼, 아폴로 극장 근처에 늦게까지 하는 식당 좀 찾아 줄 수 있을까요?
    27.30s  <ret> 발화 (turn6 첫 프레임)
    27.51s  user  발화 끝
    27.53s  agent 발화 시작: <ret> [웃음] 공연 후에 늦은 밤에 뭔가 드시고 싶으신가요?
    29.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.81s]: (tool result) Carmine’s Italian Restaurant is open until eleven PM and
    32.20s  agent 발화 시작: 카민스 이탈리안 레스토랑은 극장에서 0.3마일 떨어진 곳에 있고, 밤 11시까지 영업합니다.
    32.34s  agent 발화 끝
    35.10s  user  발화 시작: 그렇죠.
    35.73s  user  발화 끝
    38.58s  user  발화 시작: 카민스… 그곳 괜찮은 곳인가요? 예약을 받나요?
    38.69s  agent 발화 끝
    41.99s  agent 발화 시작: 거기는 가족 스타일의 이탈리아 요리로 유명한 아주 인기 있는 곳입니다.
    42.19s  user  발화 끝
    46.81s  agent 발화 끝
