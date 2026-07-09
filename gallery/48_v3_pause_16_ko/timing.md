# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 음, 디스토피아 소설 읽으셨구나.
     1.98s  user  발화 끝
     2.44s  agent 발화 시작: 글쎄, 강력한 문학 작품에 그런 반응 보이는 건 흔한 일이야.
     6.51s  agent 발화 끝
     6.95s  user  발화 시작: “빅 브라더”라는 표현이 어디서 나왔는지 궁금하네요. 왠지 익숙한 느낌이 들어요.
    12.55s  <ret> 발화 (turn3 첫 프레임)
    12.95s  agent 발화 시작: <ret> 그거 참 흥미로운 질문인데, 엄청난 영향을 준 표현이거든. “빅 브라더”는 조지 오웰의 *1984
    13.06s  user  발화 끝
    14.31s  ⚡SPAN 주입 [d'=1.76s / d_lead=5.47s]: The term “Big Brother” originates from George Orwell’s dystopian novel
    24.50s  agent 발화 끝
    24.98s  user  발화 시작: 천구백사십구 년… 역사적으로 보면 그렇게 오래된 건 아니네요.
    29.84s  user  발화 끝
    29.87s  agent 발화 시작: 맞아, 근데 지금은 훨씬 더 오래된 것 같지 않아?
    31.34s  user  발화 시작: 맞아요.
    31.79s  user  발화 끝
    33.02s  agent 발화 끝
    33.92s  user  발화 시작: 오웰은 그 캐릭터를 만들 때 특정 인물을 염두에 두고 있었나요?
    38.63s  <ret> 발화 (turn8 첫 프레임)
    38.71s  agent 발화 시작: <ret> 오웰이 뭘 참고했는지 찾아보니까 꽤 흥미로운 내용이 있네. 오웰은 빅 브라더를 요셉 스탈린의 초상
    38.78s  user  발화 끝
    40.47s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.44s]: Orwell stated the concept of Big Brother was inspired by a poster depi
    50.49s  agent 발화 끝
    50.57s  user  발화 시작: 스탈린이요? 실제로 그런 것 같아요—
    53.21s  agent 발화 시작: 끊임없이 감시당하는 이미지—
    53.29s  user  발화 끝
    54.47s  user  발화 시작: 그게 가족에 대한 건 아니었나요? 저는 항상 그렇게 생각했어요—
    55.00s  agent 발화 끝
    58.02s  user  발화 끝
    58.40s  agent 발화 시작: 아니, 가족에 대한 의미는 전혀 없었어.
    61.12s  agent 발화 끝
    62.46s  user  발화 시작: 정말 놀랍네요! 저는 보호해 주는 큰 형 같은 느낌이라고 생각했어요.
    67.31s  user  발화 끝
    67.49s  agent 발화 시작: 표현 자체 때문에 그렇게 오해할 수도 있어.
    69.75s  agent 발화 끝
    70.74s  user  발화 시작: 그 표현이 책이 출판되자마자 바로 유명해졌나요?
    73.24s  <ret> 발화 (turn16 첫 프레임)
    73.56s  agent 발화 시작: <ret> 그 표현이 널리 퍼지는 데는 시간이 좀 걸렸어. “빅 브라더”는 천구백오십년대와 육십년대에 억압적
    73.65s  user  발화 끝
    74.52s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.91s]: The phrase “Big Brother” gained widespread use in the nineteen fifties
    78.74s  user  발화 시작: 아.
    79.05s  user  발화 끝
    82.79s  user  발화 시작: 그러니까 조금…
    82.83s  agent 발화 끝
    83.93s  user  발화 끝
    84.07s  user  발화 시작: …시간이 걸렸다는 거네요? 지금처럼 널리 쓰이게 되기까지.
    87.45s  user  발화 끝
    87.50s  agent 발화 시작: 그래. 시간이 지나면서 의미가 더 깊어졌어. 그리고 기술이 발전하면서 더 중요해졌지.
    93.10s  agent 발화 끝
