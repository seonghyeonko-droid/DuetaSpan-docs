# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 파리 에펠탑의 좌표를 알려 주실 수 있을까요?
     3.23s  <ret> 발화 (turn1 첫 프레임)
     3.54s  agent 발화 시작: <ret> 네, 명소 위치를 찾는 건 제가 많이 해 봤습니다. 에펠탑의 좌표는 북위 사십팔 점 팔오팔사 도,
     3.60s  user  발화 끝
     4.51s  ⚡SPAN 주입 [d'=1.28s / d_lead=4.79s]: (tool result) The Eiffel Tower is located at 48.8584° N, 2.2945° E.
    13.60s  agent 발화 끝
    13.76s  user  발화 시작: 알겠습니다. 혹시 그 근처에 있는 호텔을 찾아 주실 수 있을까요?
    18.85s  <ret> 발화 (turn3 첫 프레임)
    19.24s  agent 발화 시작: <ret> 네, 근처 숙소를 찾아 드릴 수 있습니다. 플라자 아테네는 천오백 달러이고, 호텔 라파엘은 천이백
    19.37s  user  발화 끝
    20.05s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.79s]: (tool result) Hotel Plaza Athénée is 0.7 miles away, with a price of $
    28.28s  agent 발화 끝
    28.89s  user  발화 시작: 호텔 라파엘에 오늘 밤 방을 예약해 주세요.
    32.20s  <ret> 발화 (turn5 첫 프레임)
    32.35s  agent 발화 시작: <ret> 예약을 진행해 드리겠습니다.
    32.49s  user  발화 끝
    33.96s  ⚡SPAN 주입 [d'=1.76s / d_lead=1.89s]: (tool result) Your reservation at Hotel Raphael is confirmed for one n
    34.24s  agent 발화 끝
