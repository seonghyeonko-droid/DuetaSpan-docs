# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 그래서 정부 기관에 대해 읽다가 궁금해졌어… 재향군인부(Department of Veterans Affair
     7.11s  <ret> 발화 (turn1 첫 프레임)
     7.26s  agent 발화 시작: <ret> 그건 정말 흥미로운 질문이네요, 지원 역사를 추적해보면— 재향군인부는 후버 대통령 시절인 1930
     7.46s  user  발화 끝
     9.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.15s]: The Department of Veterans Affairs was established on July 21, 1930, u
    17.51s  agent 발화 끝
    17.53s  user  발화 시작: 1930년? 그거… 생각보다 별로 안 된 것 같지 않아? 재향군인 지원은 그거보다 훨씬 오래 전부터 있었을 
    25.22s  agent 발화 시작: 정말 최근처럼 느껴지네요, 오랜 기간 동안 병사들이 돌봄을 받아야 했던 역사를 생각하면, 하지만 구조는 시간
    25.46s  user  발화 끝
    34.12s  agent 발화 끝
    35.01s  user  발화 시작: 근데 1930년 이전에 뭘 했어? 내가— 그러니까, 부서가 생기기 전에 재향군인들은 어떻게 도움을 받았어?
    42.04s  <ret> 발화 (turn5 첫 프레임)
    42.18s  agent 발화 시작: <ret> 부서가 정식으로 만들어지기 전에는 지원이— 1930년 이전에 재향군인 관련 업무와 혜택은 1921
    42.37s  user  발화 끝
    44.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.43s]: Prior to 1930, the Veterans Bureau, created in 1921, handled most vete
    52.93s  agent 발화 끝
    53.06s  user  발화 시작: 그럼 재향군인국은 재향군인부랑 같은 게 아니었어?
    56.20s  agent 발화 시작: 아니, 같지는 않았어요—
    56.43s  user  발화 끝
    57.57s  <ret> 발화 (turn8 첫 프레임)
    57.96s  agent 발화 시작: <ret> 재향군인국은 1930년에 부서로 확장되고 재조직된 선행 기관이었어요.
    58.00s  agent 발화 끝
    59.01s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.32s]: The Veterans Bureau was a predecessor agency, later expanded and reorg
    63.28s  agent 발화 끝
