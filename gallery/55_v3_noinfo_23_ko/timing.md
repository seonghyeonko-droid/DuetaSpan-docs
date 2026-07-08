# v3_noinfo_23_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 버튼 누른 기록 보여 줘.
     0.95s  <ret> 발화 (turn1 첫 프레임)
     1.51s  agent 발화 시작: <ret> 네, 확인해 드릴게요. 가장 최근 기록은 7월 26일 오후 2시 35분에 사용자가 “제출” 버튼을
     1.60s  user  발화 끝
     1.96s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.51s]: (tool result) The most recent log entry shows a user clicked the “Subm
     9.47s  user  발화 시작: 음, 알았어. 에러 관련 기록은 다 찾아 줘.
     9.53s  agent 발화 끝
    12.03s  <ret> 발화 (turn3 첫 프레임)
    12.52s  user  발화 끝
    12.63s  agent 발화 시작: <ret> 네, 그렇게 해 드릴 수 있습니다. 7월 26일 오후 2시 28분부터 2시 36분 사이에 네트워크
    13.03s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.46s]: (tool result) Ten log entries mention “error”: timestamps range from 1
    22.88s  agent 발화 끝
    22.99s  user  발화 시작: 생각보다 에러가 많네. 네트워크 오류만 걸러 줘.
    25.39s  <ret> 발화 (turn5 첫 프레임)
    25.55s  ⚡SPAN 주입 [d'=0.16s / d_lead=1.75s]: (tool result) Five log entries report “Network failure” between 14:28:
    25.99s  agent 발화 시작: <ret> 네, 검색 범위를 좁혀 볼게요.
    26.23s  user  발화 끝
    27.74s  agent 발화 끝
