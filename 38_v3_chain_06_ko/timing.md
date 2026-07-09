# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 사용자 에이전트를 MyCustomBrowser 버전 10.5로 설정해 줘.
     4.49s  user  발화 끝
     4.82s  <ret> 발화 (turn1 첫 프레임)
     4.89s  agent 발화 시작: <ret> 그럼, 브라우저 설정을 바꿔 줄게. 지금 브라우저는 MyCustomBrowser 버전 십 점 오로
     6.26s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.71s]: (tool result) The user agent is now set to MyCustomBrowser version 10.
     9.97s  user  발화 시작: 음.
    10.61s  user  발화 끝
    11.58s  user  발화 시작: 좋아. 그럼 그 브라우저 리뷰 좀 찾아 줘.
    11.79s  agent 발화 끝
    13.99s  <ret> 발화 (turn4 첫 프레임)
    14.37s  agent 발화 시작: <ret> 알았어, 한번 찾아볼게. 한 리뷰에서 빠르고 가볍다고 하는데, 확장 기능이 부족하대.
    14.58s  user  발화 끝
    15.51s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.72s]: (tool result) Search found one result: “MyCustomBrowser 10.5 – Fast an
    20.67s  agent 발화 끝
    20.76s  user  발화 시작: 흠, 확장 기능이 제한적이네… 그럼 파이어폭스는 어때?
    24.41s  <ret> 발화 (turn6 첫 프레임)
    24.72s  agent 발화 시작: <ret> 파이어폭스는 인기가 많고, 확장 기능 라이브러리가 엄청 커. 강력하고 사용자 설정이 가능하고 개인
    24.88s  user  발화 끝
    26.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.41s]: (tool result) Search found three results: “Firefox – Powerful, customi
    36.97s  agent 발화 끝
    39.13s  user  발화 시작: 좋아, 그게 더 나은 것 같아. 내 기본 브라우저를 파이어폭스로 바꿔 줄래?
    43.87s  agent 발화 시작: 바꿀 수 있어.
    43.95s  user  발화 끝
    45.15s  agent 발화 끝
