# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 내 사용자 에이전트를 MyCustomBrowser 버전 십 점 오로 설정해 줄래?
     4.40s  user  발화 끝
     4.55s  <ret> 발화 (turn1 첫 프레임)
     4.63s  agent 발화 시작: <ret> 그래, 브라우저 설정을 바꿔 줬어. 지금 브라우저는 MyCustomBrowser, 버전 십 점 오
     6.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.61s]: (tool result) The user agent is now set to MyCustomBrowser version 10.
     9.53s  user  발화 시작: 음.
    10.03s  user  발화 끝
    11.10s  user  발화 시작: 어, 좋아. 그럼 이 페이지에서 내가 그렇게 보이는지 확인해 줄래?
    11.29s  agent 발화 끝
    14.37s  <ret> 발화 (turn4 첫 프레임)
    14.76s  agent 발화 시작: <ret> 현재 웹페이지에서 보고되는 사용자 에이전트를 확인해 볼게. 응, 페이지에서 지금은 브라우저를 My
    14.95s  user  발화 끝
    15.89s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.66s]: (tool result) The current user agent reported by the page is MyCustomB
    25.52s  agent 발화 끝
    25.54s  user  발화 시작: 좋아. 그럼 그 브라우저—MyCustomBrowser, 십 점 오—에 대한 리뷰 좀 찾아 줘.
    30.78s  <ret> 발화 (turn6 첫 프레임)
    31.09s  agent 발화 시작: <ret> 그 특정 브라우저 버전에 대한 리뷰를 검색해 줄게. 포럼 스레드 하나랑 블로그 게시물 세 개를 찾
    31.19s  user  발화 끝
    31.82s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.10s]: (tool result) Search results show one forum thread and three blog post
    42.22s  agent 발화 끝
    44.02s  user  발화 시작: 흠, 좋아. 제목만 읽어 줘.
    46.78s  user  발화 끝
    46.84s  agent 발화 시작: 당연히, 제목을 읽어 줄게.
    48.82s  agent 발화 끝
