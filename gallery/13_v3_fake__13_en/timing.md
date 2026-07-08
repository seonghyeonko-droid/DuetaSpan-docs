# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Hey, I was wondering, when is Demi Lovato’s new album coming
     6.40s  user  발화 끝
     6.41s  agent 발화 시작: Well, Demi Lovato has released several albums over the years
    11.08s  agent 발화 끝
    11.78s  user  발화 시작: Oh, right, sorry. I meant the one she was working on in 2015
    16.74s  <ret> 발화 (turn3 첫 프레임)
    16.98s  agent 발화 시작: <ret> Let’s see if I can pinpoint that release for you… Her 
    17.15s  user  발화 끝
    18.42s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.12s]: Demi Lovato’s album “Confident” was released in October 2015.
    23.84s  agent 발화 끝
    25.58s  user  발화 시작: October? That feels like ages ago! I remember being so excit
    30.77s  user  발화 끝
    31.19s  agent 발화 시작: It does fly by, doesn’t it? Music moves quickly. I’ve spent 
    40.41s  agent 발화 끝
    40.79s  user  발화 시작: [laugh] That’s a cool perspective. So, “Confident” was the n
    44.43s  <ret> 발화 (turn7 첫 프레임)
    44.50s  agent 발화 시작: <ret> That is correct. “Confident” was the title of the albu
    44.62s  user  발화 끝
    46.43s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=5.79s]: (tool result) AAPL: 170.34 USD +0.23 (0.14%)
    49.81s  user  발화 시작: I’m trying to remember what the first single was… was it “Co
    50.29s  agent 발화 끝
    53.77s  agent 발화 시작: You have a good memory! “Cool for the Summer” *was* the lead
    53.93s  user  발화 끝
    58.27s  agent 발화 끝
    58.80s  user  발화 시작: I really liked that song. It was everywhere that summer.
    62.14s  agent 발화 시작: It certainly had a strong presence. I remember it playing on
    62.18s  user  발화 끝
    67.00s  agent 발화 끝
    67.28s  user  발화 시작: Was “Confident” a big hit? I vaguely recall it doing well.
    70.92s  <ret> 발화 (turn13 첫 프레임)
    71.32s  agent 발화 시작: <ret> I can quickly check its chart performance… Yes, “Confi
    71.45s  user  발화 끝
    72.44s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.70s]: “Confident” debuted at number one on the Billboard 200 chart.
    79.42s  user  발화 시작: Wow, number one! That’s fantastic. Thanks for the info!
    79.81s  agent 발화 끝
    83.21s  user  발화 끝
    83.23s  agent 발화 시작: You’re very welcome! It’s always rewarding to share a bit of
    87.20s  agent 발화 끝
