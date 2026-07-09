# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 그래서, 정부가 공식적으로 참전 용사들을 챙기기 시작한 게 언제야?
     4.18s  agent 발화 시작: 좋은 질문이세요. 답변은 조금 복잡해요. 시간이 지나면서 발전했거든요.
     4.36s  user  발화 끝
     8.28s  <ret> 발화 (turn2 첫 프레임)
     8.66s  agent 발화 시작: <ret> 전담 부서를 설립한 건— 의회에서 천구백삼십년에 공식적으로 만들었어요.
     8.71s  agent 발화 끝
     9.47s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.69s]: The United States Department of Veterans Affairs was created by Congre
    11.56s  user  발화 시작: 어어.
    12.38s  user  발화 끝
    14.04s  agent 발화 끝
    14.10s  user  발화 시작: 천구백삼십 년? 늦은 것 같지 않아? 그 전에 프로그램 같은 건 없었어?
    18.37s  agent 발화 시작: 네, 이전에도 조치가 있었지만, 이 규모나 초점은 아니었어요.
    18.64s  user  발화 끝
    22.07s  <ret> 발화 (turn6 첫 프레임)
    22.22s  agent 발화 시작: <ret> 부서가 설립되기 전 지원— 천구백삼십년 이전에, 1811년에 설립된 연금국에서 참전 용사 혜택을 
    22.40s  agent 발화 끝
    23.59s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.94s]: Before 1930, veterans’ benefits were primarily administered by the Bur
    30.75s  agent 발화 끝
    31.59s  user  발화 시작: 근데 그때, 1800년대 초반에 어떤 혜택을 받았는데?
    35.35s  agent 발화 시작: 아, 아주 중요한 질문이시네요—
    35.60s  user  발화 끝
    36.83s  <ret> 발화 (turn9 첫 프레임)
    37.22s  agent 발화 시작: <ret> 초기 혜택은 주로 토지 보조금과 복무 관련 장애에 대한 현금 지원이었어요.
    37.41s  agent 발화 끝
    38.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.42s]: Early pension benefits primarily consisted of land grants and monetary
    42.63s  agent 발화 끝
