# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 에펠탑의 좌표를 알려 주실 수 있을까요?
     2.68s  <ret> 발화 (turn1 첫 프레임)
     2.99s  agent 발화 시작: <ret> 네, 명소 위치를 찾는 건 제가 자주 하는 일이랍니다… 에펠탑의 좌표는 북위 사십팔 점 팔오팔사,
     3.06s  user  발화 끝
     3.80s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.84s]: (tool result) The Eiffel Tower is located at 48.8584 degrees North, 2.
    12.12s  agent 발화 끝
    12.27s  user  발화 시작: 알겠습니다. 혹시 그 근처에 있는 호텔을 찾아 주실 수 있을까요?
    16.42s  <ret> 발화 (turn3 첫 프레임)
    16.81s  agent 발화 시작: <ret> 네, 근처 숙소를 검색해 드릴 수 있답니다… 호텔 플라자 아테네는 점팔 킬로미터 떨어져 있으며, 
    16.95s  user  발화 끝
    17.46s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.72s]: (tool result) Hotel Plaza Athénée is 0.8 kilometers away, priced at 12
    25.84s  agent 발화 끝
    26.61s  user  발화 시작: 와, 정말 비싸네요! 조금 더 저렴한 곳은 없을까요?
    30.58s  <ret> 발화 (turn5 첫 프레임)
    30.73s  agent 발화 시작: <ret> 좀 더 합리적인 가격대의 옵션을 찾아 볼게요… 호텔 생 폴 리브 고슈는 점이십칠 킬로미터 떨어져 
    30.86s  user  발화 끝
    32.34s  ⚡SPAN 주입 [d'=1.76s / d_lead=2.92s]: (tool result) Hotel Saint-Paul Rive Gauche is 0.9 kilometers away, pri
    38.51s  agent 발화 끝
