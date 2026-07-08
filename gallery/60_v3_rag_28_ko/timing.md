# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 정부 부처에 대해 읽다가 궁금해졌는데, 참전용사부 언제 만들어졌어?
     5.25s  agent 발화 시작: 정말 좋은 질문이세요. 복무하신 분들을 위한 지원의 기원을 추적하는 것은 중요합니다.
     5.33s  user  발화 끝
    11.55s  <ret> 발화 (turn2 첫 프레임)
    11.86s  agent 발화 시작: <ret> 잠시 역사 기록을 확인해 볼게요— 참전용사부는 후버 대통령에 의해 천구백삼십년에 설립되었습니다.
    11.97s  agent 발화 끝
    13.15s  ⚡SPAN 주입 [d'=1.60s / d_lead=4.69s]: The United States Department of Veterans Affairs was established on Ju
    19.22s  user  발화 시작: 천구백삼십년? 꽤 최근 같지 않아? 그 전에 뭔가 있었던 것 같은데.
    19.23s  agent 발화 끝
    23.65s  agent 발화 시작: 맞아요. 이전부터 재향 군인 지원이 존재했지만, 공식적인 부서로 만들어지지는 않았습니다.
    23.76s  user  발화 끝
    30.20s  <ret> 발화 (turn5 첫 프레임)
    30.36s  agent 발화 시작: <ret> 선행 기관을 살펴보면 시간 순서가 더 명확해질 거예요— 천구백삼십년 이전에 재향 군인국이 천구백이
    30.42s  agent 발화 끝
    31.56s  ⚡SPAN 주입 [d'=1.36s / d_lead=5.80s]: Prior to 1930, the Veterans Bureau, created in 1921, handled most vete
    41.95s  agent 발화 끝
    43.08s  user  발화 시작: 근데 재향 군인국 *이전에는*—제1차 세계 대전에서 돌아온 군인들을 위한 혜택은 전혀 없었어?
    49.67s  agent 발화 시작: 정말 좋은 지적이세요—그렇지 않아도 지원이 있었지만, 중앙 집중화되지는 않았습니다.
    49.80s  user  발화 끝
    55.54s  <ret> 발화 (turn8 첫 프레임)
    55.69s  agent 발화 시작: <ret> 제1차 세계 대전 이후 제공된 지원에 대한 정보를 확인하고 있어요— 전쟁 위험 보험국이 천구백십칠
    55.97s  agent 발화 끝
    57.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.27s]: Following World War I, the U.S. government established the Bureau of W
    66.58s  agent 발화 끝
