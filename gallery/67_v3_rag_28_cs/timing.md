# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 정부에서 본격적으로 참전 용사들을 챙기기 시작한 게 언제부터였어?
     4.18s  agent 발화 시작: 좋은 질문이세요. 당연히 시간이 지나면서 조금씩 변화해 왔답니다.
     4.35s  user  발화 끝
     7.81s  <ret> 발화 (turn2 첫 프레임)
     8.21s  agent 발화 시작: <ret> 전담 부서를 만들어서— 공식적으로는 천구백삼십 년에 설립되었지만, 그 이전에도 비슷한 프로그램들이
     8.30s  agent 발화 끝
     9.01s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.58s]: The United States Department of Veterans Affairs was established in 19
    12.46s  user  발화 시작: 어어.
    13.18s  user  발화 끝
    15.94s  agent 발화 끝
    16.02s  user  발화 시작: 천구백삼십 년? 좀 늦은 것 같지 않아? 제1차 세계 대전 참전 용사들은 어땠는데?
    22.06s  agent 발화 시작: 제1차 세계 대전에 참전하신 분들의 필요를 생각하면 늦어 보이기는 하네요.
    22.32s  user  발화 끝
    26.46s  <ret> 발화 (turn6 첫 프레임)
    26.60s  agent 발화 시작: <ret> 그 이전에도— 천구백삼십 년에 재향 군인국이 설립되어 보훈 혜택을 담당했답니다.
    26.78s  agent 발화 끝
    27.66s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.64s]: Prior to 1930, the Veterans Bureau, created in 1921, administered vete
    31.88s  agent 발화 끝
    32.72s  user  발화 시작: 그런데 남북 전쟁 이후에는, 재향 군인국이 생기기 전에는 어떤 혜택을 받았어?
    37.68s  agent 발화 시작: 정말 중요한 질문이시네요— 역사를 이해하는 게 중요하답니다—
    37.90s  user  발화 끝
    41.00s  user  발화 시작: 그냥, 잊혀졌던 거 아니야?
    41.79s  agent 발화 끝
    42.83s  agent 발화 시작: 전혀 잊혀지지 않았지만, 그때는 지원 방식이 지금처럼 체계적이지 않았어요.
    43.07s  user  발화 끝
    47.49s  <ret> 발화 (turn11 첫 프레임)
    47.64s  agent 발화 시작: <ret> 초기 지원은 주로— 남북 전쟁 이후에는 국가 자택에서 연금과 의료 지원을 제공했답니다.
    47.83s  agent 발화 끝
    48.53s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.62s]: After the Civil War, veterans received pensions and medical care throu
    53.94s  agent 발화 끝
