# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 야, 데미 로바토 새 앨범이 2015년에 언제 나왔는지 알아? 기억이 안 나서.
     4.65s  <ret> 발화 (turn1 첫 프레임)
     4.96s  agent 발화 시작: <ret> 아, 좋은 질문인데. 나도 가끔 별자리 칠 때 발매일을 찾아보거든.
     5.14s  user  발화 끝
     6.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.13s]: Demi Lovato’s fifth studio album, *Confident*, was released in October
     9.91s  agent 발화 시작: 그 앨범은 2015년 10월에 나왔어.
    10.09s  agent 발화 끝
    12.31s  user  발화 시작: 10월이었구나, 알았어. 그게 데미 로바토 첫 앨범이야?
    12.77s  agent 발화 끝
    16.18s  <ret> 발화 (turn4 첫 프레임)
    16.57s  agent 발화 시작: <ret> 아니, 전혀. *Confident* 전에 이미 앨범을 꽤 많이 냈었어.
    16.65s  user  발화 끝
    17.30s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.68s]: Demi Lovato released her debut studio album, *Don’t Forget*, in Septem
    21.14s  agent 발화 시작: 걔 첫 스튜디오 앨범, *Don’t Forget*은 2008년 9월에 나왔어.
    21.24s  agent 발화 끝
    25.63s  agent 발화 끝
    26.62s  user  발화 시작: 와, 진짜 오래됐네. 그 다음 앨범은 언제 나왔어?
    29.23s  <ret> 발화 (turn7 첫 프레임)
    29.30s  agent 발화 시작: <ret> 두 번째 스튜디오 앨범, *Here We Go Again*이 2009년에 나왔어.
    29.57s  user  발화 끝
    31.15s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.02s]: *Here We Go Again*, Demi Lovato’s second studio album, was released in
    33.30s  agent 발화 시작: *Here We Go Again*은 데뷔 앨범 나온 지 딱 1년 뒤인 2009년 7월에 발매됐어.
    33.32s  agent 발화 끝
    38.29s  user  발화 시작: 음, 알겠어. 이제 날짜가 좀 헷갈리지 않네.
    38.44s  agent 발화 끝
    41.48s  <ret> 발화 (turn10 첫 프레임)
    41.72s  agent 발화 시작: <ret> 날짜를 놓치기 쉽지, 안 그래? 시간은 마치 밤하늘을 가르는 혜성처럼 빠르게 흘러가.
    41.95s  user  발화 끝
    43.48s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=6.11s]: (tool result) AAPL: 170.34, +0.22, 0.13%
    47.71s  user  발화 시작: 근데, “Sorry Not Sorry”라는 노래에 대해서는 아는 거 있어?
    47.83s  agent 발화 끝
    50.87s  <ret> 발화 (turn12 첫 프레임)
    51.26s  agent 발화 시작: <ret> 그 노래 완전 중독성 있잖아! 2017년에 나왔어.
    51.50s  user  발화 끝
    52.15s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.56s]: “Sorry Not Sorry” was released as the lead single from Demi Lovato’s s
    54.57s  agent 발화 시작: 그 노래는 2017년 7월 24일에 나왔어. 선공개곡이었지.
    54.81s  agent 발화 끝
    59.18s  user  발화 시작: 2017년이구나. 알았어. 그 노래 많이 팔렸어?
    59.28s  agent 발화 끝
    62.95s  <ret> 발화 (turn15 첫 프레임)
    63.16s  user  발화 끝
    63.34s  agent 발화 시작: <ret> 엄청 성공했어. 빌보드 핫 100에서 6위까지 올라갔거든.
    64.71s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.61s]: “Sorry Not Sorry” peaked at number six on the *Billboard* Hot 100 char
    66.75s  agent 발화 시작: 빌보드 핫 100 차트에서 6위를 했어.
    66.95s  agent 발화 끝
    69.18s  agent 발화 끝
    69.53s  user  발화 시작: 꽤 괜찮네. 다시 한번 들어봐야겠다.
    72.07s  user  발화 끝
    72.39s  agent 발화 시작: 다시 들어봐도 좋을 거야. 맑은 밤에 좋은 노래— 완벽한 조합이지.
    76.85s  user  발화 시작: 그래, 네 말이 맞아. 정보 고마워!
    77.12s  agent 발화 끝
    79.44s  user  발화 끝
    79.62s  agent 발화 시작: 천만에. 도움이 됐다니 다행이고, 음악 즐겁게 들어.
    84.39s  agent 발화 끝
