# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 작년 프랑스 휴가 사진 찾아줘, 썸네일 말고.
     3.28s  <ret> 발화 (turn1 첫 프레임)
     3.35s  agent 발화 시작: <ret> 네, 알겠습니다. 프랑스 휴가 사진을 찾아볼게요. 작년 프랑스 휴가 사진이 27장 발견됐어요. 썸
     3.56s  user  발화 끝
     4.88s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.47s]: (tool result) Found 27 photos matching "France holiday photos" from 20
     8.71s  user  발화 시작: Exactly.
     9.82s  user  발화 끝
    12.02s  agent 발화 끝
    14.73s  user  발화 시작: 그중에서 에펠탑이 나오는 사진만 보여줘.
    17.24s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) Found 8 photos with "Eiffel Tower" in the filename or ta
    17.95s  agent 발화 시작: <ret> 에펠탑 사진을 찾아서… 잠시만 기다려 봐. 에펠탑이 들어간 사진이 8장 있어요. 아까 찾은 사진들
    18.16s  user  발화 끝
    26.53s  agent 발화 끝
