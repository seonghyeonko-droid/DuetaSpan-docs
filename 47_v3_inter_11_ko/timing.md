# v3_inter_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 걸 스카우트에서 동상이라는 게 뭐예요?
     6.06s  <ret> 발화 (turn1 첫 프레임)
     6.66s  agent 발화 시작: <ret> 아, 좋은 질문이세요. 동상은 걸 스카우트 프로그램 내에서 세 번째로 높은 영예로 인정받고 있습니
     6.86s  user  발화 끝
     7.02s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.03s]: The Bronze Award is the third highest award a Girl Scout can earn.
    17.28s  agent 발화 끝
    17.85s  user  발화 시작: 아, 그렇군요. 그걸 받으려면 뭘 해야 하나요?
    22.18s  <ret> 발화 (turn3 첫 프레임)
    22.78s  agent 발화 시작: <ret> 지역 사회 봉사 프로젝트를 해야 합니다.
    23.04s  user  발화 끝
    23.18s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.40s]: To earn the Bronze Award, Girl Scouts must complete a project that ben
    25.18s  agent 발화 끝
    25.56s  agent 발화 시작: 스카우트들은 지역 사회에 실질적인 혜택을 주는 프로젝트를 완료해야 하는데, 꽤 복잡합니다.
    32.32s  agent 발화 끝
    33.48s  user  발화 시작: 그러니까… 큰 프로젝트라는 건가요? 음—
    40.20s  user  발화 끝
    40.20s  agent 발화 시작: 상당한 계획이 필요합니다—
    51.20s  user  발화 시작: 근데 보통 얼마나 걸리나요?
    51.74s  agent 발화 끝
    55.19s  <ret> 발화 (turn8 첫 프레임)
    55.79s  agent 발화 시작: <ret> 그건 꽤 다양합니다. 일반적으로 관련된 걸 스카우트들은 20시간에서 40시간 정도의 작업을 해야 
    55.91s  user  발화 끝
    56.19s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.93s]: Girl Scout Bronze Award projects typically take between twenty and for
    65.75s  agent 발화 끝
    65.88s  user  발화 시작: 와, 정말 많네요. [surprised]
    67.45s  user  발화 끝
