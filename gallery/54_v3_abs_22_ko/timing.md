# v3_abs_22_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 무슨 정부 형태를 무정부주의자들이 싫어해?
     2.55s  <ret> 발화 (turn1 첫 프레임)
     2.86s  agent 발화 시작: <ret> 음, 정치 이념을 탐구하는 질문이라 흥미롭네. 지금 당장은 그 질문에 대한 답이 없어.
     2.95s  user  발화 끝
     3.75s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.47s]: (no information found)
     9.30s  agent 발화 끝
     9.61s  user  발화 시작: 그래. 뭐, 사람 뇌 무게는 평균적으로 얼마야?
    13.00s  <ret> 발화 (turn3 첫 프레임)
    13.16s  agent 발화 시작: <ret> 그건 흔히 물어보는 질문이고, 쉽게 대답할 수 있어. 성인 인간 뇌 무게는 대략 일 점 삼에서 일
    13.35s  user  발화 끝
    14.76s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.24s]: The average adult human brain weighs around 3 pounds (1.3 to 1.4 kilog
    21.86s  user  발화 시작: 와, 생각보다 가볍네, 진짜.
    22.06s  agent 발화 끝
    23.47s  user  발화 끝
    23.62s  agent 발화 시작: 그렇지? 작은 공간에 엄청난 복잡성이 다 들어있거든.
    27.28s  user  발화 시작: 뇌 무게랑 지능 사이에 상관관계가 있어?
    27.41s  agent 발화 끝
    30.11s  <ret> 발화 (turn7 첫 프레임)
    30.19s  agent 발화 시작: <ret> 그건 우리가 꽤 많이 연구한 질문이지. 뇌 크기는 지능과 약한 상관관계를 보이지만, 구조랑 연결이
    30.24s  user  발화 끝
    31.39s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.66s]: While brain size correlates weakly with intelligence, it's not a defin
    37.51s  agent 발화 끝
    38.07s  user  발화 시작: 그러니까 뇌가 얼마나 큰지가 중요한 게 아니라, 어떻게 연결되어 있느냐가 더 중요하다는 거야?
    42.80s  agent 발화 시작: 맞아! 연결, 경로—거기서 진짜 마법이 일어나는 거야.
    42.93s  user  발화 끝
    46.02s  user  발화 시작: 응.
    46.46s  user  발화 끝
    48.08s  agent 발화 끝
    48.09s  agent 발화 시작: 컴퓨터 같은 거라고 생각해 봐—처리 능력은 칩 크기에만 달려 있는 게 아니잖아.
    52.26s  agent 발화 끝
    52.70s  user  발화 시작: 알츠하이머병의 기억 상실은 그럼… 연결 문제인 거야?
    55.94s  <ret> 발화 (turn13 첫 프레임)
    56.25s  agent 발화 시작: <ret> 실제로 아주 날카로운 관찰이네.
    56.39s  user  발화 끝
    56.90s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.07s]: Alzheimer's disease is characterized by the progressive loss of neuron
    58.31s  agent 발화 시작: 알츠하이머병은 뉴런과 시냅스가 손실되면서 뇌 위축을 일으켜.
    58.32s  agent 발화 끝
    62.71s  agent 발화 끝
    63.92s  user  발화 시작: 그러니까 뇌가 물리적으로 줄어든다는 거야?
    66.16s  agent 발화 시작: 응, 안타깝게도. 정말 끔찍한 과정이야.
    66.18s  user  발화 끝
    69.11s  agent 발화 끝
    69.40s  user  발화 시작: 예방할 수 있는 방법은 없어?
    71.06s  user  발화 끝
    71.10s  agent 발화 시작: 정신적으로나 신체적으로 활동하는 게 권장되기도 해.
    74.29s  agent 발화 끝
    74.54s  user  발화 시작: 그건 당연하네. 사토 선생님, 감사합니다.
    77.36s  user  발화 끝
