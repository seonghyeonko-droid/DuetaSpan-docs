# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 야, 데미 로바토 새 앨범 언제 나와 궁금해. 곧 나온다는 얘기 들었는데.
     4.95s  agent 발화 시작: 오, 좋은 질문인데! 데미 로바토 요즘 엄청 바쁘잖아.
     5.14s  user  발화 끝
     9.05s  user  발화 시작: 응, 노래 진짜 좋아. 새 앨범 언제 나오는지 알고 싶어.
     9.26s  agent 발화 끝
    12.81s  <ret> 발화 (turn3 첫 프레임)
    12.84s  user  발화 끝
    13.05s  agent 발화 시작: <ret> 알아볼게— *Confidence* 앨범은 2015년 10월에 나왔어.
    14.25s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.54s]: Demi Lovato’s album, Confidence, was released in October 2015.
    17.59s  agent 발화 끝
    19.93s  user  발화 시작: 2015년 10월? 와, 엄청 오래됐네! 더 새로운 거 계획된 거 있어?
    25.12s  user  발화 끝
    25.12s  agent 발화 시작: 시간 엄청 흐른 것 같지 않아? 그 뒤로도 싱글 같은 거 계속 냈잖아.
    28.93s  user  발화 시작: 맞아, 싱글은 나왔었지. 근데 앨범 전체는? 새 앨범 빨리 나왔으면 좋겠어.
    29.05s  agent 발화 끝
    33.81s  <ret> 발화 (turn7 첫 프레임)
    34.20s  agent 발화 시작: <ret> 새로운 소식 있는지 찾아볼까— 가장 최근 앨범 *Dancing with the Devil… the
    34.39s  user  발화 끝
    35.17s  ⚡SPAN 주입 [d'=1.36s / d_lead=4.56s]: Demi Lovato released the album *Dancing with the Devil… the Art of Sta
    42.81s  user  발화 시작: 2021년 4월… 그래, 그게 좀 더 최근이네. 그 이후로는?
    42.86s  agent 발화 끝
    47.29s  <ret> 발화 (turn9 첫 프레임)
    47.60s  agent 발화 시작: <ret> 미안, 그 이후로는 아직 새로운 앨범에 대한 정보가 없어.
    47.80s  user  발화 끝
    48.41s  ⚡SPAN 주입(IRRELEVANT) [d'=1.12s / d_lead=3.65s]: (tool result) AAPL: 170.34 USD +0.22 (0.13%)
    50.63s  user  발화 시작: 아, 그래? 그럼 발표 기다려봐야겠다.
    51.24s  agent 발화 끝
    53.33s  agent 발화 시작: 그게 좋겠다. 소셜 미디어에서 자주 활동하니까, 거기서 소식 찾을 수 있을 거야.
    53.48s  user  발화 끝
    57.77s  agent 발화 끝
    58.69s  user  발화 시작: 맞다! 확인해 줘서 고마워, 진짜.
    61.46s  user  발화 끝
    61.48s  agent 발화 시작: 천만에! 밤하늘을 보는 것 같네—가끔은 바로 찾을 수도 있고, 가끔은 딱 맞는 순간을 기다려야 해.
    69.77s  agent 발화 끝
