# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 그래서 정부 기관에 대해 읽다가 궁금해졌는데, 참전용사부(Department of Veterans Affai
     7.55s  agent 발화 시작: 좋은 질문이에요. 복무하신 분들을 지원한 역사를 추적하는 건 정말 중요하죠.
     7.74s  user  발화 끝
    12.09s  <ret> 발화 (turn2 첫 프레임)
    12.47s  agent 발화 시작: <ret> 좀 더 역사적인 맥락을 말씀드릴게요. 참전용사부는 1930년 7월 21일에 행정 명령으로 설립됐습
    12.54s  agent 발화 끝
    13.29s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.71s]: The United States Department of Veterans Affairs was established on Ju
    19.89s  agent 발화 끝
    20.57s  user  발화 시작: 1930년? 그거…상대적으로 최근 같지 않아? 그전에 참전용사들을 위한 프로그램은 없었어?
    27.50s  agent 발화 시작: 물론, 이전에도 비슷한 형태의 지원은 있었지만, 그 특정 부서 체제 아래에 공식적으로 존재하지는 않았습니다.
    27.65s  user  발화 끝
    34.23s  <ret> 발화 (turn5 첫 프레임)
    34.38s  agent 발화 시작: <ret> 참전용사부 이전에는 지원 방식이 달랐어요. 1930년 이전에 참전용사 혜택은 전쟁 위험 보험국과 
    34.45s  agent 발화 끝
    36.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.05s]: Prior to 1930, veteran benefits were administered by the Bureau of War
    44.48s  agent 발화 끝
    45.34s  user  발화 시작: 근데 남북 전쟁 이후는 어땠어? 그때는 분명 뭔가 있었을 텐데—
    49.70s  agent 발화 시작: 네, 물론이죠—
    49.82s  user  발화 끝
    50.69s  user  발화 시작: 그럼 남북 전쟁 직후 참전용사들은 어떤 지원을 받았어?
    51.54s  agent 발화 끝
    54.20s  user  발화 끝
