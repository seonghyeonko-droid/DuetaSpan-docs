# v3_noinfo_23_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 버튼 클릭한 로그 좀 보여 줘.
     1.07s  <ret> 발화 (turn1 첫 프레임)
     1.66s  agent 발화 시작: <ret> 네, 확인해 드릴게요. 가장 최근 로그에 따르면, 7월 26일 오후 2시 35분에 어떤 사용자가 
     1.84s  user  발화 끝
     2.07s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.12s]: (tool result) The most recent log entry shows a user clicked the “Subm
     9.88s  user  발화 시작: 음, 그래. 에러 관련된 기록은 다 찾아 줄 수 있어?
    10.14s  agent 발화 끝
    13.03s  <ret> 발화 (turn3 첫 프레임)
    13.11s  ⚡SPAN 주입 [d'=0.08s / d_lead=2.66s]: (tool result) Ten log entries mention “error”: timestamps range from 1
    13.62s  agent 발화 시작: <ret> 네, 그렇게 해 드릴 수 있습니다. 7월 26일 오후 2시 28분부터 2시 36분까지 네트워크 및
    13.76s  user  발화 끝
    24.24s  agent 발화 끝
    24.64s  user  발화 시작: 그건… 에러가 엄청 많네. 네트워크 오류만 딱 걸러 줄 수 있어?
    28.63s  <ret> 발화 (turn5 첫 프레임)
    29.22s  agent 발화 시작: <ret> 네, 그렇게 검색 범위를 좁혀 볼게요.
    29.45s  user  발화 끝
    29.63s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.92s]: (tool result) Five log entries report “Network failure” between 14:28:
    31.52s  agent 발화 끝
