# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어, 시드니 오페라 하우스 위도 경도 궁금해?
     2.48s  <ret> 발화 (turn1 첫 프레임)
     3.08s  agent 발화 시작: <ret> 음, 시드니 오페라 하우스의 좌표는 위도 마이너스 삼십삼 점 팔오육팔, 경도 백오십일 점 이일오삼
     3.23s  user  발화 끝
     3.48s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.56s]: (tool result) The Sydney Opera House is at -33.8568 degrees latitude, 
    11.98s  agent 발화 끝
    12.91s  user  발화 시작: 흐음, 좀 이상한 것 같은데. 진짜 맞아? 삼십삼 점 팔육 정도인 줄 알았어.
    17.11s  <ret> 발화 (turn3 첫 프레임)
    17.70s  agent 발화 시작: <ret> 네, 꼼꼼히 확인하는 게 좋죠. 위도 마이너스 삼십삼 점 팔오육팔, 경도 백오십일 점 이일오삼이 
    17.92s  user  발화 끝
    18.11s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.21s]: (tool result) The Sydney Opera House is at -33.8568 degrees latitude, 
    27.69s  user  발화 시작: 알았어, 됐어. 그럼 라고스에서 시드니 가는 항공편 찾아줘. 12월 20일에 출발하는 걸로.
    27.86s  agent 발화 끝
    33.80s  <ret> 발화 (turn5 첫 프레임)
    34.40s  agent 발화 시작: <ret> 네, 항공편을 알아볼게요. 카타르 항공이 제일 저렴한데, 12월 20일 오전 10시 30분에 라고
    34.45s  user  발화 끝
    34.80s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.23s]: (tool result) The cheapest flight is with Qatar Airways, departing 10:
    47.75s  agent 발화 끝
