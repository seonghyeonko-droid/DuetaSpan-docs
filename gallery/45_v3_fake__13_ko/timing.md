# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 걔, 데미 로바토 새 앨범이 2015년에 언제 나왔는지 궁금해.
     4.36s  <ret> 발화 (turn1 첫 프레임)
     4.67s  agent 발화 시작: <ret> 아, 옛날 얘기네! 한번 찾아볼까…
     4.86s  user  발화 끝
     5.80s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.86s]: Demi Lovato’s album, *Confident*, was released in October 2015.
     7.37s  agent 발화 시작: 2015년 10월에 나왔어. 팝 음악계에 꽤 재밌는 해였지.
     7.53s  agent 발화 끝
    10.76s  user  발화 시작: 10월이구나, 알겠어. 그게 걔 첫 앨범이었어?
    11.21s  agent 발화 끝
    13.66s  <ret> 발화 (turn4 첫 프레임)
    14.06s  agent 발화 시작: <ret> 아니, 데뷔 앨범은 아니었어. 그 전에 이미 음악을 냈었거든.
    14.13s  user  발화 끝
    14.70s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.07s]: Demi Lovato’s debut album, *Don’t Forget*, was released in September 2
    18.06s  agent 발화 시작: 걔 첫 앨범인 *Don’t Forget*은 2008년 9월에 나왔어.
    18.14s  agent 발화 끝
    21.81s  agent 발화 끝
    22.79s  user  발화 시작: 오, 2008년이네. 와, 엄청 오래됐네! 그때 음악 스타일은 어땠어?
    27.65s  agent 발화 시작: *Confident*랑은 좀 달랐어. 완전 팝-락이었지.
    27.78s  user  발화 끝
    31.12s  agent 발화 끝
    31.53s  user  발화 시작: 팝-락이라고? 그때 인기 있었던 노래들이 생각나려고 해.
    35.30s  <ret> 발화 (turn9 첫 프레임)
    35.62s  agent 발화 시작: <ret> 인기 있었던 노래들을 생각해보면… 차트에는 신나는 댄스곡들이 가득했어.
    35.87s  user  발화 끝
    36.59s  ⚡SPAN 주입(IRRELEVANT) [d'=1.28s / d_lead=4.86s]: (tool result) AAPL stock is currently trading at $170.34, up 0.5% toda
    40.26s  user  발화 시작: 그럼 *Confident*도 엄청 히트했어?
    40.49s  agent 발화 끝
    42.31s  agent 발화 시작: 응, 그랬어! 빌보드 차트에서 꽤 높은 순위를 기록했어—
    42.52s  user  발화 끝
    45.62s  user  발화 시작: 얼마나 높았는데? 숫자가 궁금해.
    46.57s  agent 발화 끝
    47.56s  <ret> 발화 (turn13 첫 프레임)
    47.79s  agent 발화 시작: <ret> 잠깐만 정확한 차트 순위를 확인해볼게… 빌보드 200 차트에서 1위를 했어! 진짜 대단하지!
    48.02s  user  발화 끝
    49.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.18s]: *Confident* debuted at number one on the Billboard 200 chart in the Un
    55.20s  agent 발화 끝
    56.27s  user  발화 시작: 1위라니, 엄청나다! 인기 있는 싱글도 있었어?
    59.69s  <ret> 발화 (turn15 첫 프레임)
    59.84s  agent 발화 시작: <ret> 당연하지. “Cool for the Summer”가 그 앨범에서 엄청난 히트를 쳤어.
    59.97s  user  발화 끝
    61.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.00s]: "Cool for the Summer" peaked at number six on the Billboard Hot 100 ch
    64.79s  agent 발화 시작: “Cool for the Summer”는 빌보드 핫 100에서 6위를 했어—엄청 인기 있었던 노래야.
    64.84s  agent 발화 끝
    69.71s  user  발화 시작: 6위면 꽤 괜찮네. 걔 노래 들었던 것 같아.
    69.74s  agent 발화 끝
    73.33s  agent 발화 시작: 한동안 엄청 많이 나왔었지! 진짜 중독성 있는 곡이었어, 기억나는 대로.
    73.41s  user  발화 끝
    78.05s  agent 발화 끝
    78.94s  user  발화 시작: 그래, 네 말이 맞아. 정보 고마워, 모시!
    81.89s  user  발화 끝
    81.94s  agent 발화 시작: 천만에. 이런 음악 추억을 되새기는 건 언제나 즐거워.
    86.10s  agent 발화 끝
