# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 그래서 정부 기관에 대해 읽다가 궁금해졌어… 재향군인부(Department of Veterans Affair
     7.28s  <ret> 발화 (turn1 첫 프레임)
     7.59s  agent 발화 시작: <ret> 그건 정말 흥미로운 질문이네요, 지원 역사를 추적해보면— 재향군인부는 후버 대통령 시절인 1930
     7.83s  user  발화 끝
     9.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.29s]: The Department of Veterans Affairs was established on July 21, 1930, u
    18.07s  agent 발화 끝
    18.41s  user  발화 시작: 1930년? 그거… 생각보다 얼마 안 된 것 같지 않아? 재향군인 지원은 그거보다 훨씬 오래 전부터 있었던 
    25.68s  agent 발화 시작: 정말 최근처럼 느껴지네요, 오랜 기간 동안 병사들이 돌봄을 받아야 했던 역사를 생각하면, 하지만 구조는 시간
    25.87s  user  발화 끝
    35.55s  agent 발화 끝
    36.34s  user  발화 시작: 근데 1930년 이전에 뭘 했어? 내가— 그러니까, 부서가 생기기 전에 재향군인들은 어떻게 도움을 받았어?
    42.94s  <ret> 발화 (turn5 첫 프레임)
    43.01s  agent 발화 시작: <ret> 부서가 정식으로 만들어지기 전에는 지원이— 1930년 이전에 재향군인 업무와 혜택은 1921년에 
    43.11s  user  발화 끝
    43.44s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.97s]: Prior to 1930, the Veterans Bureau, created in 1921, handled most vete
    54.37s  agent 발화 끝
    54.65s  user  발화 시작: 그러면 재향군인국은 재향군인부랑 같은 게 아니었어?
    58.17s  agent 발화 시작: 아니요, 같지 않았어요—
    58.26s  user  발화 끝
    59.38s  <ret> 발화 (turn8 첫 프레임)
    59.44s  agent 발화 시작: <ret> 재향군인국은 1930년에 부서로 확장되고 재조직된 선행 기관이었어요.
    59.59s  agent 발화 끝
    61.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.12s]: The Veterans Bureau was a predecessor agency, later expanded and reorg
    65.56s  agent 발화 끝
