# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 야, 사용자 에이전트를 MyCustomBrowser 버전 10.5로 바꿔 줘.
     4.99s  user  발화 끝
     5.13s  <ret> 발화 (turn1 첫 프레임)
     5.21s  agent 발화 시작: <ret> 어, 알았어. 브라우저 설정 변경했어— 요청대로 브라우저 사용자 에이전트를 업데이트했어.
     6.33s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.87s]: (tool result) The user agent is now set to MyCustomBrowser version 10.
    10.96s  agent 발화 끝
    11.02s  user  발화 시작: 그럼, 그 변경 사항이 example.com에서 감지됐는지 확인해 줄래?
    14.95s  <ret> 발화 (turn3 첫 프레임)
    15.34s  agent 발화 시작: <ret> 그래, 확인해 볼게— example.com에서 네 사용자 에이전트를 인식하는 것 같아.
    15.37s  user  발화 끝
    15.67s  ⚡SPAN 주입 [d'=0.72s / d_lead=2.59s]: (tool result) The reported user agent on example.com is MyCustomBrowse
    20.33s  user  발화 시작: 아, 다행이다. 음, 내 주변의 크루아상 전문점을 찾아 줄래—
    20.53s  agent 발화 끝
    24.74s  agent 발화 시작: …크루아상 전문점을 찾고 싶다는 거야?
    24.95s  user  발화 끝
    27.10s  <ret> 발화 (turn6 첫 프레임)
    27.17s  agent 발화 시작: <ret> 찾아줄 수 있어— Le Petit Croissant가 근처에 있고, 리뷰도 엄청 좋고 별점도 4.
    27.41s  agent 발화 끝
    28.22s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.21s]: (tool result) Le Petit Croissant is 0.7 miles away with 4.8 stars from
    32.92s  agent 발화 끝
    34.72s  user  발화 시작: 오, 좋네. 그럼 내일 오전 10시에 거기 테이블 두 개 예약해 줘.
    38.61s  agent 발화 시작: 예약해 볼게
    38.75s  user  발화 끝
    39.80s  agent 발화 끝
