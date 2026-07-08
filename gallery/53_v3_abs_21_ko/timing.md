# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 이 가스의 압력은 얼마예요?
     1.37s  <ret> 발화 (turn1 첫 프레임)
     1.97s  agent 발화 시작: <ret> 음, 그 가스 압력에 대한 정보는 없는 것 같아.
     1.99s  user  발화 끝
     2.25s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.33s]: (no information found)
     4.91s  user  발화 시작: 흠, 알겠습니다. 시카고에서 제일 높은 건물은 뭔가요?
     4.97s  agent 발화 끝
     8.12s  <ret> 발화 (turn3 첫 프레임)
     8.71s  agent 발화 시작: <ret> 뭐, 찾아봤는데 윌리스 타워, 예전에는 시어스 타워라고 불렀어. 높이가 천사백오십일 피트래.
     8.80s  user  발화 끝
     9.12s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.17s]: (tool result) The Chicago skyline is dominated by the Willis Tower, wh
    16.23s  user  발화 시작: 와, 정말 높네요! 에너지 효율은 좋은가요?
    16.35s  agent 발화 끝
    19.53s  agent 발화 시작: 에너지 효율은 요즘 건축에서 엄청 중요하지. 난 항상 그걸 핵심 디자인 원칙이라고 생각해.
    19.65s  user  발화 끝
    26.15s  agent 발화 끝
