# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 그래서, 참전용사부(Veterans Affairs department)는 언제 시작됐어? 날짜가 다르다고 들
     6.33s  <ret> 발화 (turn1 첫 프레임)
     6.48s  agent 발화 시작: <ret> 좋은 질문이세요. 사실 역사 자체가 조금 복잡하답니다.
     6.72s  user  발화 끝
     8.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.35s]: The United States Department of Veterans Affairs was established on Ju
    10.70s  agent 발화 시작: 참전용사부는 후버 대통령에 의해 천구백삼십년 칠월 이십일일에 설립되었어요.
    10.82s  agent 발화 끝
    16.82s  agent 발화 끝
    17.52s  user  발화 시작: 천구백삼십년? 좀… 늦은 것 같은데. 그전에 참전용사 혜택은 없었어?
    22.62s  <ret> 발화 (turn4 첫 프레임)
    22.77s  agent 발화 시작: <ret> 음, 혜택은 분명히 있었는데요. 천구백삼십년 이전에 전쟁위험보험국(Bureau of War Ris
    22.99s  user  발화 끝
    23.74s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.77s]: Prior to 1930, the administration of veterans’ benefits fell under the
    33.68s  user  발화 시작: 근데 남북전쟁 이후는 어땠어? 그 참전용사들을 위해서 뭔가 해줬을 거 아니야—
    33.85s  agent 발화 끝
    38.17s  user  발화 끝
    38.52s  agent 발화 시작: —그 혜택을 관리했고—
    39.61s  user  발화 시작: …남북전쟁 직후에 병원이나 연금을 만들었어?
    40.37s  agent 발화 끝
    42.34s  <ret> 발화 (turn8 첫 프레임)
    42.73s  agent 발화 시작: <ret> [sigh] 아주 중요한 지적이에요. 훨씬 더 이전 단계였죠.
    42.85s  user  발화 끝
    44.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.48s]: The first federal veterans’ hospital opened in 1866, and a system of d
    47.16s  agent 발화 시작: 최초의 참전용사 병원은 천구백육십육년에 개원했고, 연금은 천구백육십이년부터 시작되었어요.
    47.21s  agent 발화 끝
    53.74s  agent 발화 끝
    53.84s  user  발화 시작: 그러면, 우리가 아는 VA는 비교적 최근에 생긴 거지만, 참전용사들을 위한 지원은 훨씬 오래전부터 있었다는 
    62.12s  agent 발화 시작: 정확해요. 복무하신 분들의 필요에 맞춰 진화해 온 과정이랍니다.
    62.27s  user  발화 끝
    66.05s  agent 발화 끝
