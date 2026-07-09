# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 사용자 에이전트를 슈퍼크롤러 버전 십 점 일로 설정해 주시겠어요?
     4.06s  <ret> 발화 (turn1 첫 프레임)
     4.35s  user  발화 끝
     4.46s  agent 발화 시작: <ret> 네, 브라우저 설정을 변경해 드릴 수 있습니다… 지금부터 브라우저는 슈퍼크롤러, 버전 십 점 일로
     6.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.78s]: (tool result) The user agent is now set to SuperCrawler version 10.1.
     8.13s  user  발화 시작: 그렇죠.
     8.94s  user  발화 끝
    12.57s  agent 발화 끝
    13.00s  user  발화 시작: 흠, 그게 실제로 웹사이트들이 저를 보는 방식을 바꾸는지— 제가— 제 아이피 주소가 여전히 같은지 확인해 주
    20.56s  <ret> 발화 (turn4 첫 프레임)
    20.74s  agent 발화 시작: <ret> 공용 아이피 주소를 확인해서 확인해 보겠습니다… 현재 공용 아이피 주소는 이백삼 점 영 점 일일삼
    21.02s  user  발화 끝
    22.32s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.67s]: (tool result) Your public IP address is 203.0.113.42.
    28.53s  agent 발화 끝
    28.70s  user  발화 시작: 알겠습니다, 다행이네요. 그러니까 바뀌지 않았네요. 혹시 바뀔까 봐 걱정했는데— 그래도 다행입니다.
    34.82s  user  발화 끝
    34.88s  agent 발화 시작: 확인해 보시는 건 당연합니다, 특히 그런 변경 사항이 있을 때는요. 때로는 작은 조정도 중요하게 느껴질 수 
    42.48s  agent 발화 끝
