# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 그래서 보훈처는 정확히 언제 시작됐어? 날짜가 여러 개로 들려와.
     4.30s  <ret> 발화 (turn1 첫 프레임)
     4.61s  agent 발화 시작: <ret> 좋은 질문이세요. 사실 역사 자체가 조금 복잡해요.
     4.81s  user  발화 끝
     5.58s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.74s]: The United States Department of Veterans Affairs was established on Ju
     8.27s  agent 발화 시작: 보훈부는 후버 대통령에 의해 천구백삼십년 칠월 이십일일에 설립됐습니다.
     8.36s  agent 발화 끝
    14.52s  agent 발화 끝
    14.54s  user  발화 시작: 천구백삼십년? 좀… 늦은 것 같아. 그 전에 이미 참전 용사들을 위한 혜택이 있었잖아?
    20.74s  <ret> 발화 (turn4 첫 프레임)
    20.89s  agent 발화 시작: <ret> 네, 혜택은 분명히 있었는데요. 천구백삼십년 이전에 전쟁 위험 보험국이 천구백십칠년에 설립돼서 참
    21.12s  user  발화 끝
    21.78s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.58s]: Prior to 1930, the administration of veterans’ benefits fell under the
    30.58s  agent 발화 끝
    31.27s  user  발화 시작: 근데 남북 전쟁 이후에는 어땠어? 분명히 그 참전 용사들을 위해서 뭔가 했을 텐데—
    36.34s  agent 발화 시작: —그 혜택을 관리했고—
    36.45s  user  발화 끝
    37.47s  user  발화 시작: …남북 전쟁 직후에 병원이나 연금 같은 게 만들어졌어?
    38.18s  agent 발화 끝
    41.23s  <ret> 발화 (turn8 첫 프레임)
    41.38s  agent 발화 시작: <ret> [sigh] 아주 중요한 지적이고, 훨씬 더 이전 단계였어요.
    41.48s  user  발화 끝
    43.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.26s]: The first federal veterans’ hospital opened in 1866, and a system of d
    45.52s  agent 발화 시작: 최초의 참전 용사 병원은 천구백육십육년에 개원했고, 연금은 천구백육십이년에 시작됐습니다.
    45.64s  agent 발화 끝
    53.05s  user  발화 시작: 그러면 우리가 아는 VA는 비교적 최근에 생긴 거고, 참전 용사들을 위한 지원은 훨씬 더 오래전부터 시작됐다
    53.13s  agent 발화 끝
    61.30s  agent 발화 시작: 정확합니다. 복무하신 분들의 필요에 따라 진화해 온 과정입니다.
    61.49s  user  발화 끝
    66.16s  agent 발화 끝
