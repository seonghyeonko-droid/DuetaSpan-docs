# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 내 사용자 에이전트를 MyCustomBrowser 버전 십 점 오로 설정해 줄래?
     4.86s  user  발화 끝
     5.01s  <ret> 발화 (turn1 첫 프레임)
     5.08s  agent 발화 시작: <ret> 그래, 브라우저 설정을 바꿔 줬어. 사용자 에이전트는 MyCustomBrowser, 버전 십 점 
     6.45s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.30s]: (tool result) The user agent is now set to MyCustomBrowser version 10.
    11.28s  agent 발화 끝
    11.35s  user  발화 시작: 그거 검색 결과에 영향 줄 거야?
    13.60s  user  발화 끝
    13.80s  agent 발화 시작: 사이트에 따라 그럴 수도 있어—어떤 곳들은 어떤 브라우저를 사용하는지 알아내서 그에 맞춰 결과를 보여 주거든
    20.89s  user  발화 시작: 그럼 그 새로운 사용자 에이전트로 내 주변 빵집 좀 찾아 줘.
    21.13s  agent 발화 끝
    24.97s  <ret> 발화 (turn5 첫 프레임)
    25.04s  agent 발화 시작: <ret> 그 설정으로 어떤 빵집들이 나오는지 보자. Flourish Bakery는 영 점 팔 마일 떨어져 
    25.19s  user  발화 끝
    26.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.96s]: (tool result) Flourish Bakery is 0.8 miles away, open until 6 PM. The 
    37.72s  user  발화 시작: 오, Flourish Bakery 맛있어?
    37.79s  agent 발화 끝
    39.62s  user  발화 끝
    39.88s  agent 발화 시작: [놀라서] 사람들이 말하는 걸 들어보니까, Flourish Bakery는 크루아상으로 엄청 유명하대—진짜 동
    48.31s  agent 발화 끝
