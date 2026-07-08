# v3_rag_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어, 그럼 2005년 *찰리와 초콜릿 공장*에서 어거스터스 글룹 역을 누가 맡았어? 말이 좀 엇갈려서.
     7.53s  agent 발화 시작: 음, 좋은 질문이에요. 아역 배우들은 헷갈릴 때가 많거든요.
     7.69s  user  발화 끝
    11.13s  <ret> 발화 (turn2 첫 프레임)
    11.73s  agent 발화 시작: <ret> 알려 드릴게요. 팀 버튼의 2005년 영화에서 어거스터스 글룹은 필립 비그라츠가 연기했어요.
    11.74s  agent 발화 끝
    12.13s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.09s]: Philip Wiegratz played the role of Augustus Gloop in the 2005 film *Ch
    17.38s  agent 발화 끝
    18.92s  user  발화 시작: 필립 비그라츠라고? 다른 배우인 줄 알았는데… 진짜 확실해? 뭔가 이상한 것 같아.
    24.22s  <ret> 발화 (turn4 첫 프레임)
    24.82s  agent 발화 시작: <ret> 어떤 마음인지 알 것 같아요. 필립 비그라츠는 독일 배우이고, 어거스터스 글룹 역할로 유명해요.
    24.94s  ⚡SPAN 주입 [d'=0.72s / d_lead=2.07s]: Philip Wiegratz is a German actor who gained recognition for his role 
    25.03s  user  발화 끝
    31.52s  user  발화 시작: 그래, 독일 배우라… 흥미롭네. 근데 다른 작품은 별로 없는 것 같아. 진짜 그래?
    31.54s  agent 발화 끝
    39.12s  agent 발화 시작: 그건 흔히 있는 이야기예요. 큰 작품에 출연한 어린 배우들에게서 자주 보이는 현상이죠.
    39.35s  user  발화 끝
    43.29s  <ret> 발화 (turn7 첫 프레임)
    43.89s  agent 발화 시작: <ret> 그 뒤로는 조용한 편이에요. 필립 비그라츠는 영화 이후 연기를 그만두기로 했어요.
    44.12s  agent 발화 끝
    44.29s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.80s]: After *Charlie and the Chocolate Factory*, Philip Wiegratz largely wit
    49.02s  agent 발화 끝
    49.67s  user  발화 시작: 완전히 은퇴했어? 그거 좀… 특이하네. 왜 그런 결정을 한 거야?
    55.81s  agent 발화 시작: 개인적인 결정이고, 어린 시절부터 유명해지는 것의 압박감 때문일 수도 있어요.
    55.87s  user  발화 끝
    60.13s  <ret> 발화 (turn10 첫 프레임)
    60.71s  agent 발화 끝
    60.73s  agent 발화 시작: <ret> 다른 길을 택했나 봐요. 필립 비그라츠는 나중에 법을 공부해서 변호사가 됐어요.
    61.13s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.52s]: Philip Wiegratz pursued a legal career after his time as a child actor
    65.35s  agent 발화 끝
