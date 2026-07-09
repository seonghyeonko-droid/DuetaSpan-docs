# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 음… 오클랜드 에이스가 노히트를 당한 게 언제였더라? 기억이 잘 안 나네요.
     5.07s  <ret> 발화 (turn1 첫 프레임)
     5.31s  agent 발화 시작: <ret> 에이스 팬이시군요. 두 팀이 맞붙은 경기에서, 2018년 4월 21일에 노히트를 당했었습니다.
     5.32s  user  발화 끝
     5.57s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.19s]: April 21, 2018.
    11.64s  user  발화 시작: 아, 그렇군요. 꽤 오래됐네요. [interrupting] 잠깐만, 엄마, 오늘 저녁 뭐 먹을까?
    11.85s  agent 발화 끝
    18.13s  user  발화 시작: 다시 말씀해 주시겠어요? 전에 무슨 말을 하셨죠?
    18.31s  user  발화 끝
    21.23s  user  발화 끝
    21.26s  agent 발화 시작: 에이스가 마지막으로 노히트를 당한 날짜에 대해 말씀드렸어요.
    24.25s  user  발화 시작: Okay.
    24.74s  user  발화 끝
    25.26s  agent 발화 시작: 혹시 다른 팀의 노히트 경기 기록이 궁금하신가요?
    25.29s  agent 발화 끝
    28.50s  agent 발화 끝
