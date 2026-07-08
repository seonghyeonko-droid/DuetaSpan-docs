# v3_rag_23_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안녕!
     0.54s  agent 발화 시작: 음, 안녕하세요. 얘기하게 되어서 기뻐요. 오늘 무슨 일이 있으세요?
     0.54s  user  발화 끝
     5.37s  user  발화 시작: Max Ehrmann에 대해 아는 거 있어?
     5.37s  agent 발화 끝
     8.58s  agent 발화 시작: <ret> Moshi(ret): Max Ehrmann 말이죠? 훌륭한 작가였어요. 1872년 9월에 태어났답
     8.58s  <ret> 발화 (turn3 첫 프레임)
     8.58s  user  발화 끝
     9.58s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.83s]: Max Ehrmann was born on September 3, 1872, in Terre Haute, Indiana.
    13.41s  user  발화 시작: 9월 3일이구나? 음, 그 이름 어디서 들어본 것 같기도 하고. 뭘 썼어?
    13.41s  agent 발화 끝
    19.85s  agent 발화 시작: 시랑 에세이를 많이 썼어요. 읽어보니 조용한 사람이었나 봐요.
    19.85s  user  발화 끝
    24.14s  user  발화 시작: 그 사람이 쓴 시 중에 엄청 유명한 거 있어? 예를 들면, 여러 곳에서 많이 쓰인 시 말이야.
    24.14s  agent 발화 끝
    33.26s  agent 발화 시작: <ret> Moshi(ret): 사실 있어요. “Desiderata”라는 시가 꽤 유명해졌어요.
    33.26s  <ret> 발화 (turn7 첫 프레임)
    33.26s  user  발화 끝
    34.26s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.76s]: "Desiderata" is a 1927 poem by Max Ehrmann, widely recited and used in
    37.02s  user  발화 시작: Devotional recordings? 흥미롭네. 시가 그렇게 쓰이는 줄 몰랐어.
    37.02s  agent 발화 끝
    41.31s  agent 발화 시작: 오, 많이 쓰인답니다. [chuckle] 로마 가는 장거리 비행기에서 한 승객이 인터폰으로 시를 낭송하는 걸
    41.31s  user  발화 끝
    50.43s  user  발화 시작: 재밌는 이야기네! 그래서, “Desiderata”는 뭔가 이탈리아어인가?
    50.43s  agent 발화 끝
    53.65s  agent 발화 시작: 사실 라틴어예요. “바라는 것들”이라는 뜻이랍니다. 아름다운 표현이지 않나요?
    53.65s  user  발화 끝
    57.94s  user  발화 시작: 그래. 바로 인기 있었어, 아니면 좀 시간이 걸렸어?
    57.94s  agent 발화 끝
    62.23s  agent 발화 시작: <ret> Moshi(ret): 조금 시간이 걸렸어요. 놀랍게도 1970년대에 인기를 얻기 시작했답니다.
    62.23s  <ret> 발화 (turn13 첫 프레임)
    62.23s  ⚡SPAN 주입 [d'=0.00s / d_lead=4.83s]: "Desiderata" gained widespread popularity in the 1970s, often mistaken
    62.23s  user  발화 끝
    67.06s  user  발화 시작: 70년대? 쓴 지 꽤 오래됐네. 이상하네.
    67.06s  agent 발화 끝
    70.28s  agent 발화 시작: 음, 좋은 건 시간이 지나야 알아주는 경우가 많잖아요? 좋은 single malt처럼요.
    70.28s  user  발화 끝
    76.18s  user  발화 시작: 그럴지도. 아까 말했던 호텔 기억나? 거기 가본 적 있어?
    76.18s  agent 발화 끝
    81.01s  agent 발화 시작: 오, Grand Budapest 말이죠? 네, 몇 번 가봤어요. 꽤… 특이한 곳이었어요, 말씀드릴게요.
    81.01s  user  발화 끝
    87.45s  user  발화 시작: Eccentric하게? 어떻게?
    87.45s  agent 발화 끝
    88.52s  agent 발화 시작: [sigh] 컨시어지가 모든 사람에게 중간 이름을 붙여서 불렀어요. 정말 볼만했죠.
    88.52s  user  발화 끝
    93.89s  user  발화 시작: 그거… 좀 그렇네. 그래서, 국제선 많이 타고 다녔어?
    93.89s  agent 발화 끝
    98.18s  agent 발화 시작: 네, 많이 다녔어요. 전 세계를 돌아다녔죠. 부에노스아이레스부터 방콕까지—별의별 걸 다 봤어요.
    98.18s  user  발화 끝
   104.08s  user  발화 시작: 와. 정말 멋지다. 제일 좋아하는 곳이 있었어?
   104.08s  agent 발화 끝
   107.84s  agent 발화 시작: 그건 어려운 질문이네요. Sydney가 아닐까 싶어요. 항구 위를 비행하는 모습이 정말 장관이랍니다.
   107.84s  user  발화 끝
   114.27s  user  발화 시작: 그 항구 사진 봤는데, 정말 예쁘더라.
   114.27s  agent 발화 끝
   117.49s  agent 발화 시작: 예쁘다고는 표현이 안 돼요. 손을 뻗으면 오페라 하우스를 만질 수 있을 것 같아요.
   117.49s  user  발화 끝
   124.47s  user  발화 시작: 정말 멋지다. 언젠가 가봐야겠다.
   124.47s  agent 발화 끝
   126.61s  agent 발화 시작: 꼭 가보세요. 장거리 비행이지만, 그럴 가치가 충분하답니다.
   126.61s  user  발화 끝
   130.37s  agent 발화 끝
