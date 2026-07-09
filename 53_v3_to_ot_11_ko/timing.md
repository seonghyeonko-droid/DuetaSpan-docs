# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 혹시 그거 에이즈 팀한테 최근에 일어났는지 궁금했어요. 노히트 | S2 와, 정말 오래됐네요. 음… 그보다 더 최근에 그런 일이 있었 | S3 저기요, 냉동고에서 닭고기 꺼낸 거 기억하세요? | S4 죄송합니다. 그런데, 그 당시에 누가 노히트 게임을 던졌나요?

     0.00s  user  발화 시작: 혹시 그거 에이즈 팀한테 최근에 일어났는지 궁금했어요. 노히트 게임 당한 적 있는지요?
     5.07s  <ret> 발화 (turn1 첫 프레임)
     5.28s  user  발화 끝
     5.30s  agent 발화 시작: <ret> 좋은 질문이세요. 꽤 구체적인 질문인데요— 에이즈 팀은 이천십팔 년 4월 21일에 마지막으로 노히
     6.67s  ⚡SPAN 주입 [d'=1.60s / d_lead=4.59s]: The last time the Oakland A's were no-hit was April 21, 2018.
    12.77s  user  발화 시작: 와, 정말 오래됐네요. 음… 그보다 더 최근에 그런 일이 있었던 것 같은데요.
    12.95s  agent 발화 끝
    18.05s  agent 발화 시작: 시간 가는 줄 모르기 쉽죠. 특히 팀의 부침을 따라다니면서요.
    18.23s  user  발화 끝
    22.09s  user  발화 시작: 저기요, 냉동고에서 닭고기 꺼낸 거 기억하세요?
    22.31s  agent 발화 끝
    25.18s  user  발화 시작: 죄송합니다. 그런데, 그 당시에 누가 노히트 게임을 던졌나요?
    25.24s  user  발화 끝
    28.89s  <ret> 발화 (turn6 첫 프레임)
    29.21s  agent 발화 시작: <ret> 잠깐만 찾아볼게요— 마이크 피어스가 휴스턴 애스트로스 소속으로 그날 오클랜드 상대로 노히트 게임을
    29.34s  user  발화 끝
    30.41s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.11s]: Mike Fiers of the Houston Astros pitched the no-hitter against the A's
    35.89s  agent 발화 끝
