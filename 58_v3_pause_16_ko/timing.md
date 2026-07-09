# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 음, 책을 읽고 있었구나. | S2 그냥 흔히 있는 말인 줄 알았는데… | S3 오웰이 진짜 감시를 염두에 두고 쓴 건지, 아니면 다른 의미였 | S4 지금 얼마나 많이 쓰이는지 알면 놀랄까?

     0.00s  user  발화 시작: 음, 책을 읽고 있었구나.
     1.66s  user  발화 끝
     1.69s  user  발화 시작: “빅 브라더”라는 말이 나왔대.
     3.80s  agent 발화 시작: 그거 진짜 흥미로운 문화적 언급이야.
     3.81s  user  발화 끝
     6.07s  agent 발화 끝
     6.32s  user  발화 시작: 감시 같은 거에 대해 많이 들어봤지, 그렇지?
     8.57s  <ret> 발화 (turn4 첫 프레임)
     8.90s  user  발화 끝
     8.97s  agent 발화 시작: <ret> 그 단어의 유래를 알아볼까? 조지 오웰의 소설 *1984*년에 처음 나왔어. 천구백팔십사 년에 출
    10.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.02s]: The term "Big Brother" originates from George Orwell's dystopian novel
    14.61s  user  발화 시작: 맞아요.
    15.20s  user  발화 끝
    16.43s  agent 발화 끝
    17.75s  user  발화 시작: 그냥 흔히 있는 말인 줄 알았는데…
    19.40s  user  발화 끝
    19.69s  user  발화 시작: 현대적인 발명품 같은 건 줄 알았는데, 책이라니? 신기하다.
    23.85s  user  발화 끝
    23.92s  agent 발화 시작: 문학이 우리 언어에 영향을 주는 게 정말 놀랍지.
    25.03s  user  발화 시작: 아.
    25.52s  user  발화 끝
    26.87s  agent 발화 끝
    26.98s  user  발화 시작: 오웰이 진짜 감시를 염두에 두고 쓴 건지, 아니면 다른 의미였는지 궁금해.
    31.36s  <ret> 발화 (turn11 첫 프레임)
    31.68s  agent 발화 시작: <ret> 오웰의 의도는 좀 복잡해. 전쟁 중에 시민들에게 경계를 늦추지 말라고 독려하는 포스터에서 아이디어
    31.71s  user  발화 끝
    33.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.26s]: Orwell stated the concept was inspired by a poster from World War II p
    36.51s  user  발화 시작: 네.
    36.86s  user  발화 끝
    42.54s  agent 발화 끝
    42.92s  user  발화 시작: 애국적인 걸로 시작해서, 나중에 더 어두워진 거네?
    46.56s  agent 발화 시작: 맞아—소설의 맥락에 따라 의미가 바뀐 거지.
    46.62s  user  발화 끝
    47.72s  user  발화 시작: 그렇죠.
    48.22s  user  발화 끝
    49.47s  agent 발화 끝
    49.52s  user  발화 시작: [laugh] 아이러니하다, 그렇지 않아?
    51.97s  agent 발화 시작: 생각해보면 꽤 애절한 반전이지.
    51.97s  user  발화 끝
    54.41s  agent 발화 끝
    55.29s  user  발화 시작: 지금 얼마나 많이 쓰이는지 알면 놀랄까?
    57.91s  <ret> 발화 (turn19 첫 프레임)
    58.19s  user  발화 끝
    58.23s  agent 발화 시작: <ret> 오웰이 오늘날 어떻게 생각할지는 모르겠어. 그의 소설은 전 세계적으로 오천만 권 넘게 팔렸어. 지
    59.83s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.93s]: *Nineteen Eighty-Four* has sold over fifty million copies worldwide si
    64.34s  user  발화 시작: 네네.
    64.93s  user  발화 끝
    66.99s  agent 발화 끝
    68.05s  user  발화 시작: 와, 오천만 권이라니. 엄청난 독자네.
    71.00s  user  발화 끝
    71.14s  agent 발화 시작: 정말 우리 생각 방식에 큰 영향을 줬어.
    73.73s  agent 발화 끝
