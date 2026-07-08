# v3_rag_32_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, who played Augustus Gloop in the 2005 *Charlie and the C
     8.22s  agent 발화 시작: That’s a good question, there’s often confusion with child a
     8.44s  user  발화 끝
    11.45s  <ret> 발화 (turn2 첫 프레임)
    12.05s  agent 발화 시작: <ret> Let me clarify that for you. Philip Wiegratz portrayed
    12.06s  agent 발화 끝
    12.45s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.68s]: Philip Wiegratz played the role of Augustus Gloop in the 2005 film *Ch
    19.03s  user  발화 시작: Philip Wiegratz, huh? I thought it was another actor… are yo
    19.18s  agent 발화 끝
    24.85s  <ret> 발화 (turn4 첫 프레임)
    25.01s  ⚡SPAN 주입 [d'=0.16s / d_lead=1.62s]: Philip Wiegratz is a German actor who gained recognition for his role 
    25.14s  user  발화 끝
    25.45s  agent 발화 시작: <ret> I understand your hesitation. Philip Wiegratz, a Germa
    31.42s  user  발화 시작: Okay, a German actor… interesting. But he doesn't seem to ha
    31.52s  agent 발화 끝
    38.09s  agent 발화 시작: That's a common observation about young performers in large 
    38.23s  user  발화 끝
    41.41s  <ret> 발화 (turn7 첫 프레임)
    42.00s  agent 발화 시작: <ret> His subsequent career is relatively quiet. Following t
    42.11s  agent 발화 끝
    42.37s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.68s]: After *Charlie and the Chocolate Factory*, Philip Wiegratz largely wit
    49.60s  agent 발화 끝
    50.02s  user  발화 시작: Withdrew completely? That’s… unusual. What made him do that?
    54.66s  user  발화 끝
    55.08s  agent 발화 시작: It’s a personal decision, often stemming from the pressures 
    58.88s  <ret> 발화 (turn10 첫 프레임)
    59.47s  agent 발화 시작: <ret> He preferred a different path, apparently. Philip Wieg
    59.51s  agent 발화 끝
    59.88s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.42s]: Philip Wiegratz pursued a legal career after his time as a child actor
    65.54s  agent 발화 끝
