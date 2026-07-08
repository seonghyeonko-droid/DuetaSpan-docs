# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 내 사용자 에이전트를 MyCustomBrowser 버전 십 점 오로 설정해 줄래?
     5.09s  user  발화 끝
     5.22s  <ret> 발화 (turn1 첫 프레임)
     5.30s  agent 발화 시작: <ret> 응, 브라우저 설정을 바꿔 봤어— 사용자 에이전트가 MyCustomBrowser, 버전 십 점 오
     6.42s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.05s]: (tool result) The user agent is now set to MyCustomBrowser version 10.
    13.22s  agent 발화 끝
    13.27s  user  발화 시작: 음, 제대로 됐는지 확인해 줄 수 있어? whatismyuseragent.com에 들어가 봐.
    18.47s  <ret> 발화 (turn3 첫 프레임)
    18.86s  agent 발화 시작: <ret> 당연히 확인해 줄 수 있지— 웹사이트에서 사용자 에이전트가 MyCustomBrowser, 버전 십
    18.88s  user  발화 끝
    19.19s  ⚡SPAN 주입 [d'=0.72s / d_lead=3.64s]: (tool result) The page reports the user agent as MyCustomBrowser versi
    27.50s  user  발화 시작: 그래. 좋아. 그럼 블랙베리랑 라벤더를 사용한 레시피 좀 찾아 줘.
    27.71s  agent 발화 끝
    31.67s  <ret> 발화 (turn5 첫 프레임)
    31.99s  agent 발화 시작: <ret> 맛있겠다, 레시피 좀 찾아볼까— 블랙베리 라벤더 스콘, 잼, 그리고 타르트 레시피 세 개를 찾았어
    32.13s  user  발화 끝
    33.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.33s]: (tool result) Search found three results: “Blackberry Lavender Scones”
    38.56s  user  발화 시작: 오, 스콘 맛있겠다! 그 스콘 레시피 전체를 가져와 줘.
    38.66s  agent 발화 끝
    42.45s  user  발화 끝
    42.71s  agent 발화 시작: 그래, 스콘 레시피 자세히 보여 줄게
    45.48s  agent 발화 끝
