# v3_rag_32_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, uh, where *is* Yale University? I always get confused.
     8.22s  agent 발화 시작: It’s a question I get quite a bit, actually.
     8.44s  user  발화 끝
    11.45s  <ret> 발화 (turn2 첫 프레임)
    12.05s  agent 발화 시작: <ret> Let’s get that sorted. Yale University is in New Haven
    12.06s  agent 발화 끝
    12.45s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.60s]: Yale University is located in New Haven, Connecticut.
    19.07s  user  발화 시작: New Haven… Connecticut. Hmm. Is that near New York City?
    19.18s  agent 발화 끝
    25.18s  user  발화 끝
    25.64s  agent 발화 시작: Relatively speaking, yes, though they have very different vi
    30.72s  <ret> 발화 (turn5 첫 프레임)
    30.88s  ⚡SPAN 주입 [d'=0.16s / d_lead=1.82s]: New Haven, Connecticut is approximately seventy-three miles from New Y
    31.29s  agent 발화 시작: <ret> It’s a manageable distance. New Haven, Connecticut is 
    31.71s  agent 발화 끝
    37.70s  user  발화 시작: Seventy-three miles… okay. But is New Haven a big city? I— I
    38.10s  agent 발화 끝
    41.64s  agent 발화 시작: It’s a city with a lot of character, steeped in history.
    41.72s  user  발화 끝
    48.43s  <ret> 발화 (turn8 첫 프레임)
    49.02s  agent 발화 시작: <ret> It’s not New York, certainly. New Haven, Connecticut h
    49.24s  agent 발화 끝
    49.43s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.54s]: New Haven, Connecticut has a population of approximately 134,023 peopl
    53.65s  agent 발화 끝
    54.16s  user  발화 시작: One hundred and thirty-four thousand… not huge, no. Still, a
    58.60s  user  발화 끝
    59.08s  agent 발화 시작: Absolutely. It very much revolves around the university.
    65.14s  agent 발화 끝
