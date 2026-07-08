# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 백업 파일 dot txt를 2023년 11월 1일 데이터베이스 백업 메시지로 덮어쓸 수 있습니다.
     6.33s  agent 발화 시작: <ret> 네, 요청하신 대로 파일을 덮어썼습니다.
     6.33s  <ret> 발화 (turn1 첫 프레임)
     6.44s  user  발화 끝
     7.69s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.86s]: (tool result) The file backup.txt was overwritten with the provided te
     9.19s  agent 발화 끝
     9.78s  user  발화 시작: 알겠습니다. 현재 보수 공사 중인 가장 가까운 대성당을 찾아 주실 수 있을까요?
    14.49s  user  발화 끝
    14.73s  agent 발화 시작: <ret> 음, 정말 흥미로운 질문이네요. 세인트 올반스 대성당이 2.7마일 거리에 있으며 현재 지붕 수리를
    14.73s  <ret> 발화 (turn3 첫 프레임)
    15.69s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.47s]: (tool result) St. Albans Cathedral is two point seven miles away, with
    22.06s  user  발화 시작: 그런데… 제가— 그 수리에 어떤 종류의 돌을 사용하고 있는지 알고 싶어요.
    22.14s  agent 발화 끝
    27.52s  user  발화 끝
    27.87s  agent 발화 시작: 역사적인 건물에서는 세부 사항을 잘 고려하는 것이 중요하죠. 원래 재료에 따라 다르겠지만, 성공적인 복원을 
    37.05s  agent 발화 끝
