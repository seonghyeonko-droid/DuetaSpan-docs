# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 혹시 브라우저 사용자 에이전트를 슈퍼크롤러 버전 10.1로 설 | S2 음… 그런데 혹시 지금 사용자 에이전트가 제대로 설정되었는지  | S3 아, 네, 잘 됐네요. 그럼 이제… 이 사용자 에이전트로 구글 | S4 잠깐만요, 구글 말고 네이버로 먼저 접속해 보고, 네이버 메인

     0.00s  user  발화 시작: 혹시 브라우저 사용자 에이전트를 슈퍼크롤러 버전 10.1로 설정해 줄 수 있을까요?
     4.96s  <ret> 발화 (turn1 첫 프레임)
     5.35s  agent 발화 시작: <ret> 네, 그렇게 해 드릴게요. 사용자 에이전트를 슈퍼크롤러 버전 10.1로 설정했습니다. 이제 웹사이
     5.38s  user  발화 끝
     5.92s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.01s]: (tool result) The user agent was successfully set to SuperCrawler vers
    10.13s  user  발화 시작: Yeah.
    10.62s  user  발화 끝
    13.87s  agent 발화 끝
    14.64s  user  발화 시작: 음… 그런데 혹시 지금 사용자 에이전트가 제대로 설정되었는지 확인해 볼 수 있을까요?
    19.16s  <ret> 발화 (turn4 첫 프레임)
    19.39s  agent 발화 시작: <ret> 물론이죠, 지금 바로 확인해 볼게요. 현재 사용자 에이전트는 슈퍼크롤러 버전 10.1로 설정되어 
    19.50s  user  발화 끝
    20.52s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.64s]: (tool result) The current user agent is SuperCrawler version 10.1.
    27.73s  user  발화 시작: 아, 네, 잘 됐네요. 그럼 이제… 이 사용자 에이전트로 구글에 접속해서 검색을 한번 해 볼까요?
    27.82s  agent 발화 끝
    34.03s  user  발화 끝
    34.51s  agent 발화 시작: 네, 좋습니다. 어떤 검색어를 입력해 드릴까요?
    37.38s  user  발화 시작: 잠깐만요, 구글 말고 네이버로 먼저 접속해 보고, 네이버 메인 페이지 제목을 알려줄 수 있을까요?
    37.61s  agent 발화 끝
    43.22s  user  발화 끝
    43.36s  agent 발화 시작: 네, 알겠습니다. 네이버 메인 페이지 제목을 확인해 볼게요.
    47.29s  agent 발화 끝
