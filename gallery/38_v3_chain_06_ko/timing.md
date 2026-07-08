# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 내 user agent를 MyCustomBrowser 버전 십 점 오로 바꿔 줘.
     4.54s  user  발화 끝
     4.66s  <ret> 발화 (turn1 첫 프레임)
     4.74s  agent 발화 시작: <ret> 알았어, 브라우저 설정을 바꿔 줄게. user agent는 MyCustomBrowser, 버전 십
     6.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.74s]: (tool result) The user agent is now set to MyCustomBrowser version 10.
    12.11s  agent 발화 끝
    12.21s  user  발화 시작: 그럼, 그 user agent가 whatismyuseragent.com에서 제대로 감지되는지 확인해 줄래?
    18.00s  <ret> 발화 (turn3 첫 프레임)
    18.39s  agent 발화 시작: <ret> 변경 사항이 제대로 적용됐는지 확인해 볼까. 웹사이트에서 user agent가 MyCustomBr
    18.46s  user  발화 끝
    19.52s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.78s]: (tool result) The website reports the user agent as MyCustomBrowser ve
    28.01s  user  발화 시작: 좋아! 그럼 그 페이지 스크린샷 찍어 줘.
    28.22s  agent 발화 끝
    30.45s  <ret> 발화 (turn5 첫 프레임)
    30.77s  agent 발화 시작: <ret> 응, 그 확인 화면을 시각적으로 기록할 수 있어. 스크린샷을 screenshot_이천이십사년 이월
    30.92s  user  발화 끝
    32.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.91s]: (tool result) A screenshot has been saved as screenshot_20240229_1435.
    40.74s  user  발화 시작: 완벽해. 고마워!
    40.82s  agent 발화 끝
    42.48s  user  발화 끝
