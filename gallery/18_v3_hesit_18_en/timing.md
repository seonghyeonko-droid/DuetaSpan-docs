# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was just reading about Pompeii… and, uh, it got me thinkin
     6.98s  <ret> 발화 (turn1 첫 프레임)
     7.22s  agent 발화 시작: <ret> That’s a very good question, and a common one for visi
     7.42s  user  발화 끝
     8.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.89s]: Mount Vesuvius last erupted in March of nineteen forty-four.
    19.00s  agent 발화 끝
    20.34s  user  발화 시작: Nineteen forty-four… wow, that’s relatively recent, isn’t it
    26.26s  agent 발화 시작: It is quite recent, geologically speaking. Vesuvius is still
    26.27s  user  발화 끝
    34.73s  <ret> 발화 (turn4 첫 프레임)
    34.81s  agent 발화 시작: <ret> Let me quickly check on the details of that nineteen f
    34.97s  agent 발화 끝
    36.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.42s]: The nineteen forty-four eruption caused considerable damage to nearby 
    48.35s  agent 발화 끝
    48.41s  user  발화 시작: But did that eruption— did it cause any evacuations, or were
    54.38s  user  발화 끝
    54.65s  agent 발화 시작: That’s a very pertinent question, considering the history of
    58.94s  <ret> 발화 (turn7 첫 프레임)
    59.01s  agent 발화 시작: <ret> I can access some information about the population den
    59.09s  agent 발화 끝
    60.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.55s]: Approximately three thousand people were evacuated from the villages s
    72.42s  agent 발화 끝
