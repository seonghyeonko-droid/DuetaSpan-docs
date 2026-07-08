# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 파리 에펠탑의 좌표를 알려 주실 수 있을까요?
     2.94s  <ret> 발화 (turn1 첫 프레임)
     3.24s  agent 발화 시작: <ret> 알아볼게요. 지도에 따르면 에펠탑의 좌표는 북위 사십팔 점 팔오팔사 도, 동경 이 점 이구사오 도
     3.46s  user  발화 끝
     4.22s  ⚡SPAN 주입 [d'=1.28s / d_lead=4.50s]: (tool result) The Eiffel Tower is located at 48.8584° N, 2.2945° E.
    12.88s  agent 발화 끝
    13.04s  user  발화 시작: 알겠습니다. 혹시 그 근처에 있는 호텔을 찾아 주실 수 있을까요?
    16.86s  <ret> 발화 (turn3 첫 프레임)
    17.25s  agent 발화 시작: <ret> 네, 근처 숙소를 검색해 드릴 수 있습니다. 호텔 플라자 아테네는 0.8마일 거리에 있으며, 1박
    17.39s  user  발화 끝
    17.90s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.30s]: (tool result) Hotel Plaza Athénée is 0.8 miles away, priced at $1,500 
    30.14s  agent 발화 끝
    30.86s  user  발화 시작: 플라자 아테네가 괜찮아 보이네요. 오늘 밤에 방을 예약해 주실 수 있을까요?
    35.72s  <ret> 발화 (turn5 첫 프레임)
    35.86s  agent 발화 시작: <ret> 네, 예약 가능 여부를 확인해 드릴 수 있습니다.
    35.99s  user  발화 끝
    37.48s  ⚡SPAN 주입 [d'=1.76s / d_lead=2.74s]: (tool result) A room at Hotel Plaza Athénée is reserved for you tonigh
    38.99s  agent 발화 끝
