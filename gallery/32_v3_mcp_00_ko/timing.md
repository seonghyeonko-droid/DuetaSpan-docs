# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 에펠탑 파리 지도를 알려 주실 수 있을까요?
     2.26s  <ret> 발화 (turn1 첫 프레임)
     2.56s  agent 발화 시작: <ret> 네, 랜드마크 위치를 찾는 건 익숙한 일입니다. 에펠탑의 좌표는 위도 사십팔 점 팔오팔사, 경도 
     2.77s  user  발화 끝
     3.38s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.68s]: (tool result) The Eiffel Tower is located at latitude 48.8584, longitu
    11.50s  agent 발화 끝
    11.76s  user  발화 시작: 그럼 뉴욕에 있는 엠파이어 스테이트 빌딩은 어떠세요?
    15.11s  <ret> 발화 (turn3 첫 프레임)
    15.51s  agent 발화 시작: <ret> 유명한 건축물을 비교하는 건 언제나 흥미로운 일이에요. 엠파이어 스테이트 빌딩의 좌표는 위도 사십
    15.60s  user  발화 끝
    16.15s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.66s]: (tool result) The Empire State Building is located at latitude 40.7484
    27.10s  agent 발화 끝
    27.90s  user  발화 시작: 두 건물 사이의 거리를 알려 주시겠어요?
    30.96s  agent 발화 시작: 좋은 질문이세요—
    31.09s  user  발화 끝
    32.11s  <ret> 발화 (turn6 첫 프레임)
    32.26s  agent 발화 시작: <ret> 두 랜드마크 사이의 거리는 삼천구백사십팔 마일입니다.
    32.30s  agent 발화 끝
    33.79s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.74s]: (tool result) The distance between the Eiffel Tower and the Empire Sta
    35.89s  user  발화 시작: 와, 정말 멀네요. 감사합니다!
    36.00s  agent 발화 끝
    38.75s  user  발화 끝
    38.78s  agent 발화 시작: 정말 그렇습니다.
    40.11s  agent 발화 끝
