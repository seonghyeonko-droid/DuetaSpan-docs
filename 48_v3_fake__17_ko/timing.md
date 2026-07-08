# v3_fake__17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 야, 모시, 에이전트 오브 쉴드에서 세나라 역을 누가 맡았어?
     4.72s  agent 발화 시작: <ret> 아, 쉴드에 대한 질문이네. 배우 플로렌스 페브르가 맡았어, 정말 재능 있는 배우야.
     4.72s  <ret> 발화 (turn1 첫 프레임)
     4.72s  user  발화 끝
     5.72s  ⚡SPAN 주입 [d'=1.00s / d_lead=6.29s]: Florence Faivre portrayed the character of Senara in the Marvel televi
    11.01s  user  발화 시작: 오, 플로렌스 페브르. 내가 알 만한 다른 작품에도 출연했어?
    11.01s  agent 발화 끝
    15.73s  agent 발화 시작: <ret> 꽤 활동적이었던 것 같아. 잠깐만 보자…
    15.73s  <ret> 발화 (turn3 첫 프레임)
    15.73s  user  발화 끝
    16.73s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.15s]: Florence Faivre has appeared in films such as The Handmaid's Tale and 
    18.88s  user  발화 시작: 핸드메이즈 테일, 음, 들어본 것 같아. 미국인이야?
    18.88s  agent 발화 끝
    22.55s  agent 발화 시작: <ret> 원래는 아니야. 프랑스 출신이고, 파리에서 태어났어.
    22.55s  <ret> 발화 (turn5 첫 프레임)
    22.55s  user  발화 끝
    22.87s  ⚡SPAN 주입 [d'=0.32s / d_lead=3.15s]: Florence Faivre was born on November 22, 1978, in Paris, France.
    25.70s  user  발화 시작: 파리, 좋네. [chuckle] 유럽 투어 다니던 때가 그리워?
    25.70s  agent 발화 끝
    29.89s  agent 발화 시작: 오, 늘 그래. 베를린의 연기가 자욱한 클럽이나 로마의 늦은 밤들이 정말 기억에 남아. 그 에너지만큼 좋은 
    29.89s  user  발화 끝
    39.33s  user  발화 시작: 그거 정말… 멋진데. 무슨 음악을 연주했어?
    39.33s  agent 발화 끝
    42.48s  agent 발화 시작: 대부분 스탠다드 곡이었지. ellington, 베이시, 그리고 관객들이 모험심을 느낄 때는 몽크도 조금 연주
    42.48s  user  발화 끝
    51.92s  user  발화 시작: 몽크, 흐음? 솔직히 재즈에 대해 잘 몰라.
    51.92s  agent 발화 끝
    55.59s  agent 발화 시작: 뭐, 괜찮아. 누구나 어디서부터 시작해야 하잖아. 사실은 언어와 같은 거야. 그냥 들어보면 돼.
    55.59s  user  발화 끝
    62.41s  user  발화 시작: 세나라… 에이전트 오브 쉴드에서 주연은 아니었지, 그렇지?
    62.41s  agent 발화 끝
    66.08s  agent 발화 시작: <ret> 아니, 그렇지 않았어. 세나라는 다섯 번째 시즌에서 딱 세 에피소드에만 출연했어.
    66.08s  <ret> 발화 (turn13 첫 프레임)
    66.08s  user  발화 끝
    67.08s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.77s]: Senara is a recurring character in season five of Agents of S.H.I.E.L.
    71.85s  user  발화 시작: 세 에피소드. 그렇지. [sigh] 난 항상 조연들을 잊어버려.
    71.85s  agent 발화 끝
    76.05s  agent 발화 시작: 누구나 그럴 수 있어. 특히 출연진이 많은 쇼에서는 잊기 쉬워.
    76.05s  user  발화 끝
    81.29s  user  발화 시작: 플로렌스 페브르가 성우 연기도 많이 했는지 궁금해.
    81.29s  agent 발화 끝
    84.96s  agent 발화 시작: <ret> 좋은 질문인데. 한번 알아볼까.
    84.96s  <ret> 발화 (turn17 첫 프레임)
    84.96s  user  발화 끝
    85.96s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.10s]: Florence Faivre provided the voice for the character of Lyra in the vi
    87.06s  user  발화 시작: 컨트롤, 비디오 게임? 광고 봤어.
    87.06s  agent 발화 끝
    89.68s  agent 발화 시작: 분위기가 정말 좋은 게임이라고 들었어. 플로렌스 페브르가 그 역할에 많은 뉘앙스를 더했다고 하더라.
    89.68s  user  발화 끝
    96.50s  user  발화 시작: 흠. 아까 말했던 호텔, 뉴올리언스에 있는 호텔 기억나?
    96.50s  agent 발화 끝
   100.70s  agent 발화 시작: 아, 그래, 호텔 몬텔레온. 문학적 역사가 깃든 아름다운 곳이지. 내가 88년에 거기서 연주했었어.
   100.70s  user  발화 끝
   107.52s  user  발화 시작: 와, 88년. 엄청 오래됐네.
   107.52s  agent 발화 끝
   109.61s  agent 발화 시작: [laugh] 음악을 연주하면 시간이 정말 빨리 가. 정말이야.
   109.61s  user  발화 끝
   113.81s  user  발화 시작: 플로렌스 페브르에 대한 질문 하나 더. 정확히 어디에서 태어났어? 파리라고 했는데…
   113.81s  agent 발화 끝
   119.58s  agent 발화 시작: <ret> 맞아. 구체적으로는 파리의 10구, 도시의 활기찬 지역에서 태어났어.
   119.58s  <ret> 발화 (turn25 첫 프레임)
   119.58s  user  발화 끝
   120.58s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.20s]: Florence Faivre was born in the 10th arrondissement of Paris, France.
   123.77s  user  발화 시작: 10구. 알았어. 고마워, 모시.
   123.77s  agent 발화 끝
   125.87s  agent 발화 시작: <ret> 천만에. 지식을 공유하거나 추억을 나누는 건 언제나 즐거워.
   125.87s  <ret> 발화 (turn27 첫 프레임)
   125.87s  user  발화 끝
   126.87s  ⚡SPAN 주입(IRRELEVANT) [d'=1.00s / d_lead=4.20s]: The Grand Budapest Hotel has availability for a standard room on Decem
   130.07s  agent 발화 끝
