# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was reading about government departments, and I’m curi
     7.79s  <ret> 발화 (turn1 첫 프레임)
     8.09s  agent 발화 시작: <ret> That's an interesting question, delving into the histo
     8.29s  user  발화 끝
     8.91s  ⚡SPAN 주입 [d'=1.12s / d_lead=5.19s]: The United States Department of Veterans Affairs was established on Ju
    13.09s  agent 발화 시작: The Department of Veterans Affairs was established on July t
    13.28s  agent 발화 끝
    19.43s  agent 발화 끝
    19.55s  user  발화 시작: Nineteen thirty? That seems…relatively recent, doesn’t it? W
    26.02s  <ret> 발화 (turn4 첫 프레임)
    26.41s  agent 발화 시작: <ret> Indeed, care existed before that date, though it was s
    26.55s  user  발화 끝
    28.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.77s]: Prior to 1930, the Veterans Bureau, created in 1921, handled most vete
    31.03s  agent 발화 시작: Before nineteen thirty, the Veterans Bureau, created in nine
    31.18s  agent 발화 끝
    37.05s  agent 발화 끝
    38.12s  user  발화 시작: Okay, so the Veterans Bureau was the precursor—but what exac
    43.14s  agent 발화 시작: It was a fairly broad undertaking, encompassing medical care
    43.30s  user  발화 끝
    46.51s  user  발화 시작: Pensions, right, but were they also handling things like bur
    47.34s  agent 발화 끝
    52.14s  <ret> 발화 (turn9 첫 프레임)
    52.37s  agent 발화 시작: <ret> That's a good point to clarify—burial benefits fell un
    52.57s  user  발화 끝
    53.26s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.67s]: The Veterans Bureau provided compensation, hospitalization, vocational
    57.01s  agent 발화 시작: The Veterans Bureau provided compensation, hospitalization, 
    57.04s  agent 발화 끝
    64.46s  agent 발화 끝
    66.04s  user  발화 시작: So, a pretty comprehensive package, even back then. Did the 
    76.44s  agent 발화 시작: The change was more about consolidation and a shift in empha
    76.57s  user  발화 끝
    82.47s  agent 발화 끝
