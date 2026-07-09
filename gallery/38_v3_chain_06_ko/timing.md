# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 야, 사용자 에이전트를 MyCustomBrowser 버전 십 점 오로 바꿔 줘.
     4.52s  user  발화 끝
     4.63s  <ret> 발화 (turn1 첫 프레임)
     4.71s  agent 발화 시작: <ret> 응, 브라우저 설정을 바꿔 줬어. 사용자 에이전트를 MyCustomBrowser, 버전 십 점 오
     6.07s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.14s]: (tool result) The user agent is now set to MyCustomBrowser version 10.
     9.09s  user  발화 시작: 음.
     9.72s  user  발화 끝
    10.49s  user  발화 시작: 좋네. 이제 그 설정으로 브라우징할 때 내 IP 주소가 어떻게 보이는지 확인해 줘.
    10.69s  agent 발화 끝
    15.25s  <ret> 발화 (turn4 첫 프레임)
    15.65s  agent 발화 시작: <ret> 알았어, 공용 IP 주소가 어떻게 나오는지 볼까. 지금 IP 주소는 이백삼 점 영 점 일일삼 점 
    15.81s  user  발화 끝
    15.97s  ⚡SPAN 주입 [d'=0.72s / d_lead=4.33s]: (tool result) Your public IP address is 203.0.113.42, and your locatio
    24.32s  agent 발화 끝
    24.37s  user  발화 시작: 흠, 시애틀? 이상하네. 근처에 있는 별점 다섯 개짜리 빵집 찾아 줘.
    28.84s  <ret> 발화 (turn6 첫 프레임)
    29.15s  agent 발화 시작: <ret> 별점 높은 빵집 검색은 좋지.
    29.27s  user  발화 끝
    29.34s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.50s]: (tool result) Dahlia Bakery is 0.8 miles away, rated 5 stars; The Crèm
    31.65s  agent 발화 끝
