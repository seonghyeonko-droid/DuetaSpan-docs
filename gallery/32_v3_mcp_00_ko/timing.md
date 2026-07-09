# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 에펠탑의 좌표를 알려 주실 수 있을까요?
     2.57s  <ret> 발화 (turn1 첫 프레임)
     2.88s  agent 발화 시작: <ret> 네, 그 유명한 랜드마크의 좌표를 찾아 볼게요. 에펠탑의 좌표는 북위 48.8584도, 동경 2.
     3.05s  user  발화 끝
     4.17s  ⚡SPAN 주입 [d'=1.60s / d_lead=8.04s]: (tool result) The Eiffel Tower is located at 48.8584° N, 2.2945° E.
    12.38s  agent 발화 끝
    12.53s  user  발화 시작: 잘 알겠습니다. 그럼 루브르 박물관까지의 거리는 얼마나 될까요?
    17.33s  <ret> 발화 (turn3 첫 프레임)
    17.72s  agent 발화 시작: <ret> 음, 두 곳 사이의 거리를 비교해 보면 방향 감각을 잡는 데 도움이 될 거예요. 두 랜드마크 사이
    17.86s  user  발화 끝
    18.53s  ⚡SPAN 주입 [d'=1.20s / d_lead=5.10s]: (tool result) The distance between the Eiffel Tower and the Louvre is 
    21.32s  user  발화 시작: 맞아요.
    22.13s  user  발화 끝
    26.54s  user  발화 시작: 알겠습니다. 걸어가는 길 안내를 해 주시겠어요?
    26.99s  agent 발화 끝
    29.79s  <ret> 발화 (turn6 첫 프레임)
    29.94s  agent 발화 시작: <ret> 네, 걸어서 이동하면 꽤 즐거울 거예요. 길 안내는 큄 브랑리 강변을 남서쪽으로 걸은 다음 오른쪽
    30.05s  user  발화 끝
    31.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.59s]: (tool result) Walk southwest on Quai Branly. Turn right onto Pont d'Ié
    38.10s  agent 발화 끝
