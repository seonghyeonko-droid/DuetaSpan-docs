# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어, 정부 부처들 읽다가 궁금해졌는데, 재향군인부 언제 시작했어?
     5.16s  <ret> 발화 (turn1 첫 프레임)
     5.32s  agent 발화 시작: <ret> 네, 복무하신 분들을 지원한 역사를 파헤치는 질문이시네요.
     5.56s  user  발화 끝
     7.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.37s]: The United States Department of Veterans Affairs was established on Ju
     8.66s  agent 발화 시작: 재향군인부는 1930년 7월 21일에 행정 명령으로 설립됐습니다.
     8.69s  agent 발화 끝
    13.67s  agent 발화 끝
    14.34s  user  발화 시작: 1930년? 그거…상대적으로 최근 같지 않아? 그때보다 전에 이미 퇴역 군인들을 돌봤잖아?
    20.73s  <ret> 발화 (turn4 첫 프레임)
    20.88s  agent 발화 시작: <ret> 네, 그 날짜 이전에도 관리가 있었지만, 구조가 상당히 달랐습니다.
    21.10s  user  발화 끝
    22.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.67s]: Prior to 1930, the Veterans Bureau, created in 1921, handled most vete
    25.46s  agent 발화 시작: 1930년 이전에 1921년에 설립된 재향군인국에서 대부분의 퇴역 군인 관련 업무를 처리했습니다.
    25.55s  agent 발화 끝
    32.27s  agent 발화 끝
    33.16s  user  발화 시작: 알겠네, 그럼 재향군인국이 전신이었네—근데 정확히 뭘 했어?
    36.91s  agent 발화 시작: 꽤 광범위한 사업이었는데, 의료 지원, 연금 등을 포함했어요.
    37.00s  user  발화 끝
    40.69s  user  발화 시작: 연금은 그렇고, 장례 혜택 같은 것도 처리했어, 아니면 따로 했어?
    41.49s  agent 발화 끝
    44.81s  <ret> 발화 (turn9 첫 프레임)
    45.20s  agent 발화 시작: <ret> 확실히 해 드리자면, 장례 혜택도 관할했습니다.
    45.37s  user  발화 끝
    46.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.38s]: The Veterans Bureau provided compensation, hospitalization, vocational
    48.49s  agent 발화 시작: 재향군인국은 자격 있는 퇴역 군인에게 보상, 입원 치료, 재활, 장례 혜택을 제공했습니다.
    48.57s  agent 발화 끝
    54.43s  agent 발화 끝
    56.12s  user  발화 시작: 그럼, 심지어 그때도 꽤 포괄적인 패키지였네. 1930년 변경이 혜택 전달 방식 자체를 근본적으로 바꿨어, 
    65.57s  agent 발화 시작: 그 변화는 오히려 통합과 강조점 이동에 관한 것이었고, 절차를 간소화했습니다.
    65.62s  user  발화 끝
    71.35s  agent 발화 끝
