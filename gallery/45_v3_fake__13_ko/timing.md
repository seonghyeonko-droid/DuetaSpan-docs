# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어, 데미 로바토 새 앨범이 언제 나왔었더라… 2015년쯤이었나?
     4.37s  agent 발화 시작: 아, 맞아, 2015년은 진짜 음악 많이 나온 해였지.
     4.54s  user  발화 끝
     7.76s  <ret> 발화 (turn2 첫 프레임)
     7.99s  agent 발화 시작: <ret> 잠깐만 찾아볼게… 네가 생각한 대로 *Confident* 앨범은 2015년 10월에 나왔어.
     8.21s  agent 발화 끝
     9.20s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.54s]: Demi Lovato’s album, *Confident*, was released in October 2015.
    12.62s  user  발화 시작: 10월이라고? 그 앨범에서 나온 싱글을 올해 초에 들었던 것 같은데. “Cool for the Summer”
    13.04s  agent 발화 끝
    20.22s  user  발화 끝
    20.27s  agent 발화 시작: 좋은 질문이야. 당연히 들어 있었지!
    22.23s  <ret> 발화 (turn5 첫 프레임)
    22.61s  agent 발화 시작: <ret> 싱글이 앨범 전체 분위기를 보여주는 경우가 많잖아… “Cool for the Summer”는 20
    22.71s  agent 발화 끝
    24.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.20s]: "Cool for the Summer" was released as the lead single from *Confident*
    32.49s  agent 발화 끝
    33.45s  user  발화 시작: 와, 7월이네! 진짜 오래됐네. 옛날 플레이리스트 듣다가 갑자기 생각났어.
    38.77s  <ret> 발화 (turn7 첫 프레임)
    38.85s  agent 발화 시작: <ret> 음, 음악은 진짜 시간을 되돌리는 힘이 있는 것 같지 않아? [happy]
    39.05s  user  발화 끝
    40.69s  ⚡SPAN 주입(IRRELEVANT) [d'=1.92s / d_lead=3.93s]: (tool result) AAPL: 170.34 USD +0.56 (0.33%)
    42.78s  agent 발화 끝
    43.24s  user  발화 시작: 그럼 *Confident*는 데미 로바토 앨범 네 번째였나, 아니면… 내가 순서를 잘못 기억하고 있는 건가?
    49.78s  <ret> 발화 (turn9 첫 프레임)
    50.09s  agent 발화 시작: <ret> 앨범 번호에 대해 생각해보니… 사실 *Confident*는 *Unbroken* 다음에 나온 다섯 
    50.33s  user  발화 끝
    51.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.32s]: *Confident* is Demi Lovato’s fifth studio album, released after *Unbro
    56.06s  user  발화 시작: 다섯 번째! 아, 그래, 완전 잘못 기억했네. *Unbroken*은 항상 까먹어.
    56.25s  agent 발화 끝
    61.73s  agent 발화 시작: 그럴 수 있어, 특히 시간이 많이 지나면 더 헷갈리잖아.
    61.90s  user  발화 끝
    64.32s  user  발화 시작: *Confident* 평가는 괜찮았어? 나는 그 앨범 전체를 제대로 들어본 적이 없는 것 같아.
    64.97s  agent 발화 끝
    70.23s  <ret> 발화 (turn13 첫 프레임)
    70.63s  agent 발화 시작: <ret> 앨범 평가는 항상 살펴볼 만한 가치가 있지… 비평가들은 대체로 *Confident*에 대해 긍정적
    70.81s  user  발화 끝
    71.83s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.45s]: *Confident* received generally positive reviews from music critics.
    79.34s  agent 발화 끝
    80.21s  user  발화 시작: 알아둬야겠다. 지금 한번 들어봐야겠다. 정보 고마워!
    84.56s  user  발화 끝
    84.62s  agent 발화 시작: 천만에! 다시 듣는 재미를 느끼거나, 처음 경험하는 기분이 들길 바라.
    89.90s  agent 발화 끝
