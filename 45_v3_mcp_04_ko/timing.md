# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 사용자 에이전트를 슈퍼크롤러 버전 십 점 일로 설정해 주시겠어요?
     3.56s  <ret> 발화 (turn1 첫 프레임)
     3.87s  agent 발화 시작: <ret> 네, 브라우저 설정을 변경해 드릴 수 있습니다— 사용자 에이전트가 슈퍼크롤러, 버전 십 점 일로 
     3.93s  user  발화 끝
     5.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.24s]: (tool result) User agent is now set to SuperCrawler version 10.1.
     6.97s  user  발화 시작: 그렇죠.
     7.46s  user  발화 끝
    10.35s  user  발화 시작: 흠, 혹시 실제로 적용된 건지 궁금하네요. 지금 사용자 에이전트가 뭔지 확인해 주시겠어요?
    10.82s  agent 발화 끝
    16.61s  user  발화 끝
    16.63s  <ret> 발화 (turn4 첫 프레임)
    16.70s  agent 발화 시작: <ret> 변경 사항을 확인해 드리겠습니다— 현재 사용자 에이전트는 슈퍼크롤러, 버전 십 점 일로 설정되어 
    18.31s  ⚡SPAN 주입 [d'=1.68s / d_lead=2.82s]: (tool result) Current user agent is SuperCrawler version 10.1.
    23.28s  agent 발화 끝
    23.41s  user  발화 시작: 알겠습니다, 좋아요. 보스턴에서 덴버로 다음 화요일에 가는 항공편을 찾아 주시겠어요?
    29.15s  <ret> 발화 (turn6 첫 프레임)
    29.22s  agent 발화 시작: <ret> 물론 항공편 검색을 도와드릴 수 있습니다— 보스턴에서 덴버로 다음 화요일에 가는 가장 저렴한 항공
    29.25s  user  발화 끝
    31.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.47s]: (tool result) Flights from Boston to Denver next Tuesday start at two 
    38.73s  agent 발화 끝
