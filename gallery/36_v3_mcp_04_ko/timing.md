# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 사용자 에이전트를 슈퍼크롤러 버전 십 점 일로 설정해 주시겠어요?
     3.21s  <ret> 발화 (turn1 첫 프레임)
     3.61s  agent 발화 시작: <ret> 네, 브라우저 설정을 변경해 드릴 수 있습니다. 사용자 에이전트는 슈퍼크롤러 버전 십 점 일로 성
     3.66s  user  발화 끝
     4.73s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.33s]: (tool result) The user agent is now set to SuperCrawler version 10.1.
    11.30s  agent 발화 끝
    11.39s  user  발화 시작: 음, 그게 좀… 공격적으로 느껴지네요. 기본 설정으로 다시 바꿔 주시겠어요?
    15.87s  <ret> 발화 (turn3 첫 프레임)
    16.18s  agent 발화 시작: <ret> 네, 기본 설정으로 되돌리는 건 간단합니다. 사용자 에이전트는 이제 브라우저의 기본 설정으로 돌아
    16.35s  user  발화 끝
    17.47s  ⚡SPAN 주입 [d'=1.60s / d_lead=4.28s]: (tool result) The user agent has been reset to the default browser set
    23.05s  user  발화 시작: 좋아요. 그럼, 혹시 마들렌에 대해 아시나요?
    23.13s  agent 발화 끝
    26.58s  agent 발화 시작: 하하, 마들렌은 정말 사랑스러운 프랑스 과자예요—조개 모양의 스펀지 케이크인데, 보통 레몬 향이 납니다.
    26.74s  user  발화 끝
    34.22s  user  발화 시작: 네. 그거… 만들기 어려운가요? 반죽을 숙성시켜야 한다고 들었어요.
    34.70s  agent 발화 끝
    39.04s  agent 발화 시작: 반죽을 숙성시키는 게 중요해요. 글루텐이 이완되어서 섬세한 부스러기를 만들 수 있거든요. *어렵지는* 않지만
    39.22s  user  발화 끝
    48.74s  agent 발화 끝
