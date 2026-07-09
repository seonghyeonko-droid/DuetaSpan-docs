# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 야, 데미 로바토 새 앨범 언제 나와 궁금해. 올해 나온다는 얘기 얼핏 들었는데.
     4.67s  <ret> 발화 (turn1 첫 프레임)
     4.98s  agent 발화 시작: <ret> 오, 데미 로바토 신보에 관심 있구나—기대되겠다!
     5.18s  user  발화 끝
     6.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.60s]: Demi Lovato’s album, “Confident”, was released in October 2015.
     8.40s  agent 발화 시작: 걔 앨범 “Confident”는 사실 이천십오년 십월에 나왔어.
     8.58s  agent 발화 끝
    11.12s  user  발화 시작: 응.
    11.56s  user  발화 끝
    12.33s  agent 발화 끝
    13.23s  user  발화 시작: 이천십오년? 와, 엄청 오래됐네! 지금 다른 앨범도 만들고 있어?
    18.37s  user  발화 끝
    18.41s  agent 발화 시작: 시간이 좀 흘렀네, 그렇지? 뮤지션들은 계속 창작 활동하잖아.
    22.25s  agent 발화 끝
    22.79s  user  발화 시작: 진짜 새 앨범 듣고 싶어. 혹시 앨범 발매에 대한 정보 같은 거 있어?
    26.99s  <ret> 발화 (turn7 첫 프레임)
    27.38s  agent 발화 시작: <ret> 데미 로바토 음악 계획에 대한 최신 정보를 찾아볼게. 지금 업데이트를 확인 중인데, 새 앨범 발매
    27.61s  user  발화 끝
    28.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.92s]: (tool result) AAPL: 170.34 USD +0.45 (0.26%)
    32.60s  user  발화 시작: 어.
    33.24s  user  발화 끝
    36.33s  agent 발화 끝
    36.51s  user  발화 시작: 아쉽다. 발표가 있을 때까지 계속 기다려야겠네.
    39.73s  agent 발화 시작: 공식 채널을 주시하는 게 제일 좋아, 제일 먼저 알게 될 거야.
    39.89s  user  발화 끝
    41.31s  user  발화 시작: 음.
    41.66s  user  발화 끝
    43.50s  user  발화 시작: 그럼 걔 옛날 앨범은 어때? 추천해 줄 만한 거 있어?
    43.62s  agent 발화 끝
    47.09s  <ret> 발화 (turn13 첫 프레임)
    47.20s  user  발화 끝
    47.41s  agent 발화 시작: <ret> 오, 좋은 질문이다!
    48.21s  ⚡SPAN 주입 [d'=1.12s / d_lead=1.62s]: Demi Lovato’s debut album, “Don’t Forget”, was released in September 2
    48.88s  agent 발화 시작: 예전 앨범 좋아하면 “Don’t Forget”는 이천팔년 구월에 나왔어.
    49.03s  agent 발화 끝
    50.21s  user  발화 시작: 어.
    50.71s  user  발화 끝
    52.83s  user  발화 시작: 아, 그거 기억난다! 엄청 오래됐네.
    53.04s  agent 발화 끝
    55.55s  user  발화 끝
    55.88s  agent 발화 시작: 가끔 옛날 좋아하는 곡 다시 듣는 것도 재밌잖아—마치 익숙한 별자리 바라보는 것 같지.
    61.55s  user  발화 시작: 너 천문학자잖아, 그렇지? 별처럼 음악에서도 패턴을 찾니?
    61.76s  agent 발화 끝
    66.55s  user  발화 끝
    66.78s  agent 발화 시작: [laugh] 재밌는 생각인데! 가끔 평행선을 보기도 해—반복, 주제, 그리고 변화.
    70.35s  user  발화 시작: 어어.
    71.17s  user  발화 끝
    73.12s  agent 발화 끝
    75.06s  user  발화 시작: 정말 흥미롭다. 그럼, “Don’t Forget” 전에 앨범은 뭐였어?
    79.32s  user  발화 끝
    79.42s  agent 발화 시작: “Don’t Forget” 전에 데미 로바토는 디즈니 채널의 “Sonny with a Chance”에서 주로
    84.79s  agent 발화 끝
