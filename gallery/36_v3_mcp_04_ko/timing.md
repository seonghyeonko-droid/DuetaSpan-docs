# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 사용자 에이전트를 SuperCrawler 버전 10.1로 설정해 주세요.
     3.50s  <ret> 발화 (turn1 첫 프레임)
     3.88s  user  발화 끝
     3.90s  agent 발화 시작: <ret> 물론이죠, 브라우저 설정을 변경해 드렸습니다. 요청하신 대로 사용자 에이전트는 슈퍼크롤러 버전 십
     5.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.37s]: (tool result) The user agent is now set to SuperCrawler version 10.1.
    12.84s  agent 발화 끝
    12.97s  user  발화 시작: 음, 좀 과격한 것 같네요. 기본 설정으로 다시 바꿔 주실 수 있을까요?
    16.73s  <ret> 발화 (turn3 첫 프레임)
    17.05s  agent 발화 시작: <ret> 네, 표준 설정으로 되돌리는 건 간단합니다. 사용자 에이전트를 이제 기본 설정으로 되돌렸으니, 다
    17.22s  user  발화 끝
    18.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.14s]: (tool result) The user agent has been reset to the default browser set
    26.19s  agent 발화 끝
