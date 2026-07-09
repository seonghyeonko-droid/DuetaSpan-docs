# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 데미 로바토 새 앨범 언제 나와? 2015년 기준으로. | S2 사실 요즘 노래를 쓰는데 가사가 잘 안 써져서… 영감이 좀 부 | S3 잠깐만, 근데 그 앨범 제목이 뭐였지? 2015년 10월에 나 | S4 “Confident”구나. 뭔가 가사 쓰는 데 힘이 날 것 같

     0.00s  user  발화 시작: 데미 로바토 새 앨범 언제 나와? 2015년 기준으로.
     4.07s  user  발화 끝
     4.19s  <ret> 발화 (turn1 첫 프레임)
     4.35s  agent 발화 시작: <ret> 음, 데미 로바토의 새 앨범이 언제 나오는지 궁금하시군요. 잠깐만 확인해 볼게.
     6.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.55s]: October 2015.
     9.69s  agent 발화 시작: 2015년 10월에 데미 로바토의 새 앨범이 발매됐어요.
     9.90s  agent 발화 끝
    12.28s  user  발화 시작: Right.
    12.68s  user  발화 끝
    13.47s  user  발화 시작: 아, 10월이구나. 그럼 그때 다른 앨범들도 많이 나왔겠네.
    13.71s  agent 발화 끝
    17.63s  user  발화 끝
    17.73s  agent 발화 시작: 앨범이 나오는 시기에는 늘 다양한 음악들이 함께 나오죠. 새로운 음악을 발견하는 즐거움도 크고요.
    21.50s  user  발화 시작: Uh-huh.
    22.27s  user  발화 끝
    24.02s  agent 발화 시작: 창작 활동에 영감을 얻는 건 정말 중요하다고 생각해요. 혹시 지금 뭔가 막히는 부분이 있으신가요?
    24.12s  agent 발화 끝
    31.01s  agent 발화 끝
    32.45s  user  발화 시작: 사실 요즘 노래를 쓰는데 가사가 잘 안 써져서… 영감이 좀 부족한 것 같아.
    38.00s  agent 발화 시작: 가사가 잘 안 써질 때는 다양한 시도를 해보는 게 도움이 될 수 있어요. 다른 장르의 음악을 들어보거나, 새
    38.10s  user  발화 끝
    46.27s  agent 발화 시작: 가끔은 완전히 다른 분야에서 영감을 얻을 수도 있어요—
    46.34s  agent 발화 끝
    50.10s  user  발화 시작: 잠깐만, 근데 그 앨범 제목이 뭐였지? 2015년 10월에 나온 데미 로바토 앨범.
    50.94s  agent 발화 끝
    56.02s  user  발화 끝
    56.08s  <ret> 발화 (turn12 첫 프레임)
    56.16s  agent 발화 시작: <ret> 아, 앨범 제목이 궁금하시군요. 잠시만요.
    58.00s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.23s]: Demi Lovato released "Confident" in October 2015.
    58.80s  <ret> 발화 (turn13 첫 프레임)
    59.20s  agent 발화 시작: <ret> 2015년 10월에 데미 로바토가 발매한 앨범 제목은 “Confident”예요.
    59.39s  agent 발화 끝
    60.80s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=4.81s]: The population of Tokyo is over 14 million people.
    63.80s  agent 발화 시작: 자신감을 북돋아 주는 앨범 제목이네요. 가사 쓰는데 도움이 될 수도 있겠어요.
    64.01s  agent 발화 끝
    66.53s  user  발화 시작: Mm-hmm.
    67.08s  user  발화 끝
    68.92s  user  발화 시작: “Confident”구나. 뭔가 가사 쓰는 데 힘이 날 것 같아. 고마워.
    69.16s  agent 발화 끝
    73.27s  user  발화 끝
    73.57s  agent 발화 시작: 자신감을 가지는 건 정말 중요해요. 긍정적인 마음으로 계속 창작 활동을 이어가시면 좋은 결과가 있을 거예요.
    80.42s  agent 발화 끝
