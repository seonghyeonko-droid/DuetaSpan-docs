# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was reading about government agencies, and I wondered—
     7.35s  <ret> 발화 (turn1 첫 프레임)
     7.66s  agent 발화 시작: <ret> That’s an interesting question, and one that reflects 
     7.88s  user  발화 끝
     8.47s  ⚡SPAN 주입 [d'=1.12s / d_lead=5.19s]: The United States Department of Veterans Affairs was established on Ju
    12.63s  agent 발화 시작: The Department of Veterans Affairs was established on July t
    12.85s  agent 발화 끝
    17.68s  agent 발화 끝
    17.80s  user  발화 시작: Nineteen thirty? That seems…relatively recent, doesn’t it? W
    24.85s  <ret> 발화 (turn4 첫 프레임)
    25.25s  agent 발화 시작: <ret> Of course—care for veterans has a much longer history,
    25.39s  user  발화 끝
    26.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.98s]: Prior to 1930, the administration of veterans’ benefits was divided am
    31.11s  agent 발화 시작: Before nineteen thirty, veterans’ benefits were managed by m
    31.23s  agent 발화 끝
    36.01s  agent 발화 끝
    37.12s  user  발화 시작: So it was kind of piecemeal before that? What exactly *were*
    42.87s  agent 발화 시작: They addressed needs like pensions and medical care, but it 
    43.05s  user  발화 끝
    47.22s  user  발화 시작: But did they have hospitals specifically *for* veterans back
    48.01s  agent 발화 끝
    50.84s  <ret> 발화 (turn9 첫 프레임)
    51.07s  agent 발화 시작: <ret> That’s a very pertinent point—early facilities were of
    51.24s  user  발화 끝
    52.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.35s]: The first dedicated veterans’ hospital opened in 1866, originally as a
    57.39s  agent 발화 시작: The first hospital specifically for veterans opened in eight
    57.42s  agent 발화 끝
    63.00s  agent 발화 끝
    64.59s  user  발화 시작: Eighteen sixty-six… so a little over sixty years before the 
    74.22s  <ret> 발화 (turn12 첫 프레임)
    74.61s  agent 발화 시작: <ret> There was growing pressure, especially after the First
    74.79s  user  발화 끝
    76.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.28s]: The American Legion advocated strongly for a unified Department of Vet
    79.86s  agent 발화 시작: The American Legion actively campaigned for a unified depart
    79.89s  agent 발화 끝
    85.50s  agent 발화 끝
