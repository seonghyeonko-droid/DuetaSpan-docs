# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 정부에서 본격적으로 참전용사들을 챙기기 시작한 게 언제부터였어?
     4.13s  agent 발화 시작: 좋은 질문이세요. 당연히 시간이 지나면서 조금씩 변화해 왔습니다.
     4.35s  user  발화 끝
     8.54s  <ret> 발화 (turn2 첫 프레임)
     8.85s  agent 발화 시작: <ret> 전담 부서를 만들어서— 공식적으로는 천구백삼십년에 설립되었지만, 그 이전에도 프로그램이 있었습니다
     8.99s  agent 발화 끝
     9.66s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.98s]: The United States Department of Veterans Affairs was established in 19
    12.95s  user  발화 시작: 어어.
    13.77s  user  발화 끝
    16.30s  agent 발화 끝
    17.64s  user  발화 시작: 천구백삼십년? 좀 늦은 것 같지 않아? 제1차 세계 대전 참전용사들은 어땠는데?
    23.43s  user  발화 끝
    23.50s  agent 발화 시작: 제1차 세계 대전에 참전하신 분들의 필요를 생각하면 늦어 보이긴 합니다.
    28.37s  <ret> 발화 (turn6 첫 프레임)
    28.52s  agent 발화 시작: <ret> 그 이전에도— 천구백삼십 년에 참전용사국이 설립되어 보훈 혜택을 담당했습니다.
    28.60s  agent 발화 끝
    29.49s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.21s]: Prior to 1930, the Veterans Bureau, created in 1921, administered vete
    34.31s  agent 발화 끝
    34.33s  user  발화 시작: 근데 남북전쟁 이후에는, 참전용사국이 생기기 전에는 어떤 혜택을 받았는데?
    39.83s  user  발화 끝
    40.12s  agent 발화 시작: 정말 중요한 질문이시네요— 역사를 이해하는 게 중요합니다—
    43.68s  user  발화 시작: 그냥, 다들 잊혀졌던 거 아니야?
    44.47s  agent 발화 끝
    45.94s  user  발화 끝
    46.13s  agent 발화 시작: 전혀 잊혀지지 않았지만, 그때는 지원 방식이 지금처럼 체계적이지 않았습니다.
    50.96s  <ret> 발화 (turn11 첫 프레임)
    51.19s  agent 발화 시작: <ret> 초기 지원은 주로— 남북전쟁 이후에는 국립자활원에서 연금과 의료 지원을 제공했습니다.
    51.36s  agent 발화 끝
    52.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.38s]: After the Civil War, veterans received pensions and medical care throu
    57.95s  agent 발화 끝
