# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 언제 정부 부처에 대해 읽다가 궁금해졌어… 재향군인부(Depa | S2 천구백삼십년? 꽤 최근 같지 않아? 그 전에 재향군인 혜택은  | S3 근데 그 재향군인국이 새로운 혜택을 *만들* 권한이 있었어,  | S4 그럼 후버 부처는… 권한 면에서 한 단계 더 나아간 거네?

     0.00s  user  발화 시작: 언제 정부 부처에 대해 읽다가 궁금해졌어… 재향군인부(Department of Veterans Affairs
     7.78s  agent 발화 시작: 정말 좋은 질문이에요. 복무하신 분들을 지원하는 역사를 추적하는 것은 중요하답니다.
     7.88s  user  발화 끝
    13.61s  <ret> 발화 (turn2 첫 프레임)
    13.91s  agent 발화 시작: <ret> 그 날짜를 정확히 알려 드릴게요— 재향군인부는 후버 대통령에 의해 천구백삼십년 칠월 이십일일에 설
    13.99s  agent 발화 끝
    14.89s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.96s]: The United States Department of Veterans Affairs was established on Ju
    18.97s  user  발화 시작: 어어.
    19.79s  user  발화 끝
    22.48s  agent 발화 끝
    23.81s  user  발화 시작: 천구백삼십년? 꽤 최근 같지 않아? 그 전에 재향군인 혜택은 없었어?
    29.19s  user  발화 끝
    29.27s  agent 발화 시작: 물론, 부처가 정식으로 만들어지기 전에도 혜택은 존재했답니다. 지원은 시간이 지나면서 발전해 왔어요.
    36.96s  <ret> 발화 (turn6 첫 프레임)
    37.10s  agent 발화 시작: <ret> 사실, 이전 형태의 지원은 상당히 광범위했답니다— 천구백삼십년 이전에 재향군인국(Veterans 
    37.20s  agent 발화 끝
    38.32s  ⚡SPAN 주입 [d'=1.36s / d_lead=5.76s]: Prior to 1930, the Veterans Bureau, created in 1921, administered bene
    46.28s  user  발화 시작: 응응.
    46.78s  user  발화 끝
    49.30s  user  발화 시작: 근데 그 재향군인국이 새로운 혜택을 *만들* 권한이 있었어, 아니면 의회가 준 것만 관리했어?
    49.35s  agent 발화 끝
    55.82s  user  발화 끝
    56.09s  agent 발화 시작: 미묘하지만 중요한 차이점이랍니다—
    58.26s  <ret> 발화 (turn10 첫 프레임)
    58.41s  agent 발화 시작: <ret> 재향군인국은 주로 의회가 승인한 혜택을 실행했고, 자체적으로 새로운 프로그램을 만들지는 않았답니다
    58.62s  agent 발화 끝
    60.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.53s]: The Veterans Bureau primarily implemented benefits authorized by Congr
    66.84s  user  발화 시작: 그럼 후버 부처는… 권한 면에서 한 단계 더 나아간 거네?
    66.94s  agent 발화 끝
    71.32s  agent 발화 시작: 맞아요. 천구백삼십년 개편으로 재향군인 서비스의 범위가 통합되고 확대되었답니다.
    71.37s  user  발화 끝
    77.10s  agent 발화 끝
