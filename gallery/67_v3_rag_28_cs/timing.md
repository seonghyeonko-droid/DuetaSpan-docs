# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 그래서 정부 부처에 대해 읽다가 궁금해졌는데, 재향군인부(Department of Veterans Affai
     7.78s  agent 발화 시작: 정말 좋은 질문이세요. 복무하신 분들을 위한 지원의 기원을 추적하는 것은 중요합니다.
     7.97s  user  발화 끝
    13.33s  <ret> 발화 (turn2 첫 프레임)
    13.72s  agent 발화 시작: <ret> 잠시 역사 기록을 확인해 볼게요— 재향군인부는 1930년에 후버 대통령에 의해 설립되었습니다.
    13.80s  agent 발화 끝
    15.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.57s]: The United States Department of Veterans Affairs was established on Ju
    20.91s  agent 발화 끝
    21.52s  user  발화 시작: 1930년? 그거…상대적으로 최근 같지 않아? 그 전에 뭔가 있었던 것 같은데.
    27.13s  agent 발화 시작: 맞아요, 의문을 가지시는 게 맞습니다—더 공식적인 부서가 되기 전에도 퇴역 군인 지원의 형태가 분명히 존재했
    27.30s  user  발화 끝
    35.43s  <ret> 발화 (turn5 첫 프레임)
    35.49s  agent 발화 시작: <ret> 선행 기관을 살펴보면 타임라인이 더 명확해질 거예요— 1930년 이전에 재향군인국(Veterans
    35.52s  agent 발화 끝
    37.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.92s]: Prior to 1930, the Veterans Bureau, created in 1921, handled most vete
    46.02s  agent 발화 끝
    46.91s  user  발화 시작: 근데 재향군인국 *이전에는*—1차 세계 대전에서 돌아온 군인들을 위한 혜택은 전혀 없었어?
    53.76s  agent 발화 시작: 정말 좋은 지적이세요—분산된 형태이긴 했지만 지원은 있었습니다.
    53.86s  user  발화 끝
    57.50s  <ret> 발화 (turn8 첫 프레임)
    57.88s  agent 발화 시작: <ret> 1차 세계 대전 이후 제공된 지원에 대한 정보를 확인하고 있습니다— 전쟁 위험 보험국(Bureau
    57.92s  agent 발화 끝
    59.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.07s]: Following World War I, the U.S. government established the Bureau of W
    69.01s  agent 발화 끝
