# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 사용자 에이전트를 슈퍼크롤러 버전 십 점 일로 설정해 주실 수 있을까요?
     3.88s  <ret> 발화 (turn1 첫 프레임)
     4.28s  agent 발화 시작: <ret> 네, 고객님의 요청대로 브라우저 설정을 변경해 드렸습니다. 브라우저는 이제 요청하신 대로 슈퍼크롤
     4.35s  user  발화 끝
     5.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.57s]: (tool result) The user agent is now set to SuperCrawler version 10.1.
    12.91s  agent 발화 끝
    13.04s  user  발화 시작: 음, 그게 웹사이트가 저를 인식하는 방식에 영향을 주나요?
    16.36s  agent 발화 시작: 네, 영향을 줍니다. 웹사이트는 콘텐츠를 맞춤 설정하기 위해 사용자 에이전트를 사용하므로, 특정 크롤러로 보
    16.42s  user  발화 끝
    24.99s  user  발화 시작: 알겠습니다. 그럼, 지금 웹사이트가 제가 여전히 일반 브라우저라고 생각하는지 확인해 주실 수 있나요? 구글 
    25.08s  agent 발화 끝
    31.69s  <ret> 발화 (turn5 첫 프레임)
    32.08s  agent 발화 시작: <ret> 네, 변경된 사용자 에이전트를 구글이 인식하는지 테스트해 드릴 수 있습니다. 구글에서는 고객님을 
    32.27s  user  발화 끝
    33.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.10s]: (tool result) Google reports the user agent as SuperCrawler version 10
    42.68s  user  발화 시작: 아, 그럼 제대로 작동한 거군요? 좋네요. 이제 다시 원래대로 되돌릴 수 있을까요?
    43.21s  agent 발화 끝
    48.15s  agent 발화 시작: 네, 즉시 사용자 에이전트를 기본 설정으로 되돌릴 수 있습니다.
    48.37s  user  발화 끝
    52.64s  agent 발화 끝
