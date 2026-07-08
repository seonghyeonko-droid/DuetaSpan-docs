# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 내 사용자 에이전트를 MyCustomBrowser 버전 십 점 오로 설정해 줄래?
     4.30s  user  발화 끝
     4.43s  <ret> 발화 (turn1 첫 프레임)
     4.50s  agent 발화 시작: <ret> 응, 브라우저 설정을 바꿔 놨어. 요청대로 MyCustomBrowser 버전 십 점 오로 업데이트
     6.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.14s]: (tool result) The user agent is now set to MyCustomBrowser version 10.
    11.36s  agent 발화 끝
    11.51s  user  발화 시작: 좋아. 그 사용자 에이전트가 caniuse.com에서 감지되는지 확인해 줄래?
    16.16s  <ret> 발화 (turn3 첫 프레임)
    16.56s  agent 발화 시작: <ret> 음, 확인해 봤는데 CanIUse에는 그 특정 사용자 에이전트 문자열에 대한 데이터가 없어.
    16.60s  user  발화 끝
    17.68s  ⚡SPAN 주입 [d'=1.52s / d_lead=6.16s]: (tool result) CanIUse does not have any specific data for MyCustomBrow
    23.07s  user  발화 시작: 흠. 좋아, 그럼 “브라우저 호환성 테스트”를 구글에서 검색해 줄래?
    23.28s  agent 발화 끝
    27.12s  <ret> 발화 (turn5 첫 프레임)
    27.43s  agent 발화 시작: <ret> 당연하지, 바로 검색해 볼게. 구글에서 약 칠십만 팔천이백 건의 결과를 찾았어.
    27.64s  user  발화 끝
    29.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.34s]: (tool result) Google found approximately seven hundred and eighty-two 
    33.68s  user  발화 시작: 엄청 많네! 첫 번째 결과의 제목이랑 스니펫 읽어 줘.
    33.77s  agent 발화 끝
    37.70s  user  발화 끝
    37.90s  agent 발화 시작: 그래, 읽어 줄게.
    39.60s  agent 발화 끝
