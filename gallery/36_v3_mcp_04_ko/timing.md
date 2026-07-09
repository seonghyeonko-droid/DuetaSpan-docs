# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 사용자 에이전트를 슈퍼크롤러 버전 십 점 일로 설정해 주시겠어요?
     3.57s  <ret> 발화 (turn1 첫 프레임)
     3.97s  agent 발화 시작: <ret> 네, 브라우저 설정을 변경해 드릴게요. 요청하신 대로 브라우저는 이제 슈퍼크롤러 버전 십 점 일로
     4.02s  user  발화 끝
     5.09s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.34s]: (tool result) The user agent is now set to SuperCrawler version 10.1.
    11.20s  agent 발화 끝
    11.29s  user  발화 시작: 음, 그게 좀… 공격적으로 들리네요. 표준 아이폰 사용자 에이전트로 바꿔 주실 수 있을까요?
    16.08s  <ret> 발화 (turn3 첫 프레임)
    16.40s  agent 발화 시작: <ret> 네, 좀 더 은근한 방법도 괜찮습니다. 요청하신 대로 사용자 에이전트를 표준 아이폰 설정으로 업데
    16.57s  user  발화 끝
    18.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.77s]: (tool result) The user agent is now set to Mozilla/5.0 (iPhone; CPU iP
    19.46s  user  발화 시작: 그렇죠.
    20.19s  user  발화 끝
    23.81s  agent 발화 끝
    24.10s  user  발화 시작: 잘 됐네요. 훨씬 낫네요. 그런데, 라즈베리 스월 치즈케이크가 얼그레이 티와 잘 어울릴까요?
    29.73s  agent 발화 시작: 하하, 정말 잘 어울려요! 라즈베리의 상큼함이 얼그레이의 베르가못 향을 아주 예쁘게 돋보워 줄 거예요.
    29.75s  user  발화 끝
    37.42s  agent 발화 끝
