# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 정부에서 본격적으로 퇴역 군인들을 돌보기 시작한 게 언제야?
     4.33s  agent 발화 시작: 좋은 질문이세요. 답변은 조금 복잡해요. 시간이 지나면서 진화했거든요.
     4.49s  user  발화 끝
     9.43s  <ret> 발화 (turn2 첫 프레임)
     9.66s  agent 발화 끝
     9.74s  agent 발화 시작: <ret> 전담 부서를 설립한 건— 의회에서 1930년에 공식적으로 만들었어요.
    10.55s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.99s]: The United States Department of Veterans Affairs was created by Congre
    12.95s  user  발화 시작: 어어.
    13.76s  user  발화 끝
    15.71s  agent 발화 끝
    16.97s  user  발화 시작: 1930년? 좀 늦은 것 같지 않아? 그 전에 프로그램 같은 건 없었어?
    22.02s  user  발화 끝
    22.10s  agent 발화 시작: 물론, 이전에도 지원이 있었지만, 이 규모나 초점은 아니었어요.
    27.03s  <ret> 발화 (turn6 첫 프레임)
    27.18s  agent 발화 시작: <ret> 부서가 설립되기 전 지원— 1811년에 설립된 연금국에서 퇴역 군인 혜택을 처리했어요.
    27.24s  agent 발화 끝
    28.15s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.89s]: Before 1930, veterans’ benefits were primarily administered by the Bur
    34.32s  user  발화 시작: 근데 그때, 1800년대 초에는 어떤 혜택을 받았는데?
    34.32s  agent 발화 끝
    38.43s  user  발화 끝
    38.75s  agent 발화 시작: 아, 아주 중요한 질문이시네요—
    40.74s  <ret> 발화 (turn9 첫 프레임)
    40.83s  agent 발화 끝
    40.89s  agent 발화 시작: <ret> 초기 혜택은 주로 토지 보조금과 복무 관련 장애에 대한 현금 지원이었어요.
    42.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.70s]: Early pension benefits primarily consisted of land grants and monetary
    46.59s  agent 발화 끝
