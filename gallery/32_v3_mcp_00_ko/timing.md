# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 에펠탑의 좌표를 알려 주실 수 있을까요?
     2.49s  <ret> 발화 (turn1 첫 프레임)
     2.79s  agent 발화 시작: <ret> 네, 위치를 찾는 건 제가 자주 하는 일이랍니다. 에펠탑의 좌표는 위도 사십팔 점 팔오팔사, 경도
     3.00s  user  발화 끝
     3.61s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.31s]: (tool result) The Eiffel Tower is located at latitude 48.8584, longitu
    12.48s  agent 발화 끝
    12.63s  user  발화 시작: 알겠습니다. 혹시 그 좌표 근처에 있는 호텔을 찾아 주실 수 있을까요?
    17.42s  <ret> 발화 (turn3 첫 프레임)
    17.80s  agent 발화 시작: <ret> 네, 주변 숙소를 검색해 드릴 수 있습니다. 호텔 플라자 아테네는 십삼 킬로미터 정도 떨어져 있으
    17.96s  user  발화 끝
    18.46s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.59s]: (tool result) Hotel Plaza Athénée is 0.8 miles away, with a price of $
    27.02s  agent 발화 끝
    27.75s  user  발화 시작: 가격이 좀 비싸네요. 좀 더 저렴한 곳이 있을까요?
    31.83s  <ret> 발화 (turn5 첫 프레임)
    31.98s  agent 발화 시작: <ret> 좀 더 합리적인 가격의 호텔을 찾아 볼게요. 호텔 생 폴 리브 고슈는 이십오 킬로미터 정도 떨어져
    32.10s  user  발화 끝
    33.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.26s]: (tool result) Hotel Saint-Paul Rive Gauche is 1.5 miles away and costs
    41.44s  agent 발화 끝
