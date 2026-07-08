# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 그래서 정부 기관에 대해 읽다가 궁금해졌는데, 퇴역 군인부(Department of Veterans Affa
     7.90s  agent 발화 시작: 좋은 질문이에요. 복무하신 분들을 지원한 역사를 추적하는 건 정말 중요하죠.
     8.06s  user  발화 끝
    13.17s  <ret> 발화 (turn2 첫 프레임)
    13.48s  agent 발화 시작: <ret> 좀 더 역사적인 맥락을 말씀드릴게요. 퇴역 군인부는 1930년 7월 21일에 행정 명령으로 설립됐
    13.55s  agent 발화 끝
    14.45s  ⚡SPAN 주입 [d'=1.28s / d_lead=4.04s]: The United States Department of Veterans Affairs was established on Ju
    22.23s  user  발화 시작: 1930년이라고? 꽤 최근 같지 않아? 그 전에 퇴역 군인들을 위한 프로그램은 없었어?
    22.24s  agent 발화 끝
    28.06s  agent 발화 시작: 물론, 이전에도 비슷한 형태의 지원은 있었지만, 그 특정 부서 체제 아래에 공식적으로 존재하지는 않았습니다.
    28.25s  user  발화 끝
    35.50s  <ret> 발화 (turn5 첫 프레임)
    35.65s  agent 발화 시작: <ret> 부서가 설립되기 전에는 지원 방식이 달랐어요. 1930년 이전에 퇴역 군인 혜택은 전쟁 위험 보험
    35.71s  agent 발화 끝
    36.62s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.47s]: Prior to 1930, veteran benefits were administered by the Bureau of War
    46.50s  agent 발화 끝
    47.51s  user  발화 시작: 근데 남북 전쟁 이후는 어땠어? 그때는 분명 뭔가 있었을 텐데—
    51.45s  agent 발화 시작: 네, 물론이죠—
    51.53s  user  발화 끝
    52.13s  user  발화 시작: 그럼 남북 전쟁 직후 퇴역 군인들은 어떤 도움을 받았어?
    52.92s  agent 발화 끝
    55.82s  user  발화 끝
