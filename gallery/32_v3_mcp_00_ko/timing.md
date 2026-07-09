# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 파리 에펠탑의 좌표를 알려 주실 수 있을까요?
     2.67s  <ret> 발화 (turn1 첫 프레임)
     2.98s  agent 발화 시작: <ret> 네, 그 랜드마크의 위치를 빠르게 찾아 드릴게요. 위도 48.8584도, 경도 2.2945도입니다
     3.19s  user  발화 끝
     3.95s  ⚡SPAN 주입 [d'=1.28s / d_lead=6.15s]: (tool result) The Eiffel Tower is located at 48.8584° N, 2.2945° E.
    16.05s  agent 발화 끝
    16.32s  user  발화 시작: 알겠습니다. 혹시 그 근처에 있는 호텔을 찾아 주실 수 있을까요?
    20.59s  <ret> 발화 (turn3 첫 프레임)
    20.98s  agent 발화 시작: <ret> 네, 근처 숙소를 검색해 드릴 수 있습니다. 호텔 플라자 아테네는 영 점 팔 킬로미터 미만 거리에
    21.14s  user  발화 끝
    21.63s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.50s]: (tool result) Hotel Plaza Athénée is 0.8 km away, with prices starting
    25.26s  user  발화 시작: 맞아요.
    26.08s  user  발화 끝
    31.50s  user  발화 시작: 가격이 조금 비싸네요. 좀 더 저렴한 곳은 없을까요?
    31.97s  agent 발화 끝
    35.36s  <ret> 발화 (turn6 첫 프레임)
    35.51s  agent 발화 시작: <ret> 알겠습니다. 좀 더 합리적인 가격의 호텔을 찾아 볼게요. 호텔 에펠 투렌은 0.9
    35.66s  user  발화 끝
    37.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.29s]: (tool result) Hotel Eiffel Turenne is 0.9 km away, costing 180 euros p
    41.95s  agent 발화 끝
