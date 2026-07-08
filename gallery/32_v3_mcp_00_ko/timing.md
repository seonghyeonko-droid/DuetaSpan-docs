# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 에펠탑의 좌표를 알려 주실 수 있을까요?
     2.84s  <ret> 발화 (turn1 첫 프레임)
     3.15s  agent 발화 시작: <ret> 네, 명소 위치를 찾는 건 제가 자주 하는 일인데요. 에펠탑의 좌표는 북위 48.8584도, 동경
     3.38s  user  발화 끝
     4.12s  ⚡SPAN 주입 [d'=1.28s / d_lead=5.72s]: (tool result) The Eiffel Tower is located at 48.8584° N, 2.2945° E.
    13.86s  agent 발화 끝
    14.01s  user  발화 시작: 알겠습니다. 혹시 그 좌표 근처에 있는 호텔을 찾아 주실 수 있을까요?
    18.31s  <ret> 발화 (turn3 첫 프레임)
    18.70s  agent 발화 시작: <ret> 물론이죠, 근처에 머물 곳을 찾는 건 좋은 생각이에요. 호텔 플라자 아테네는 천오백 달러이고, 호
    18.83s  user  발화 끝
    19.51s  ⚡SPAN 주입 [d'=1.20s / d_lead=6.45s]: (tool result) Hotel Plaza Athénée is 0.7 miles away, priced at $1,500 
    27.83s  agent 발화 끝
    28.64s  user  발화 시작: 플라자 아테네는 괜찮아 보이네요. 오늘 밤에 거기로 방을 예약해 주실 수 있을까요?
    35.01s  <ret> 발화 (turn5 첫 프레임)
    35.16s  agent 발화 시작: <ret> 좋은 선택이세요, 바로 예약을 진행해 드릴게요.
    35.36s  user  발화 끝
    36.69s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.37s]: (tool result) Your reservation at Hotel Plaza Athénée is confirmed for
    38.53s  agent 발화 끝
