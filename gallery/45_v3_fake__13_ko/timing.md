# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어, 혹시 “Run to the Hills” 누가 불렀는지 알아? 도저히 기억이 안 나네.
     3.89s  <ret> 발화 (turn1 첫 프레임)
     4.48s  agent 발화 시작: <ret> 네, 정말 유명한 곡이죠. “Run to the Hills”는 아이언 메이든이 처음 녹음하고 공연
     4.67s  user  발화 끝
     4.85s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.05s]: Iron Maiden performs the song “Run to the Hills”.
     9.99s  user  발화 시작: 아, 맞아! 아이언 메이든이었지. 응.
    10.22s  agent 발화 끝
    13.14s  <ret> 발화 (turn3 첫 프레임)
    13.55s  user  발화 끝
    13.72s  agent 발화 시작: <ret> 그분들은 에너지 넘치는 공연으로 아주 유명하시잖아요. 라이브 쇼에서 꼭 부르는 곡이기도 해요.
    14.58s  ⚡SPAN 주입(IRRELEVANT) [d'=1.44s / d_lead=5.97s]: (tool result) Current conditions in Ulaanbaatar, Mongolia are clear sk
    19.70s  agent 발화 끝
    21.81s  user  발화 시작: 그래, 근데… 그 노래 언제 나왔더라? 기억이 잘 안 나.
    24.67s  <ret> 발화 (turn5 첫 프레임)
    25.26s  agent 발화 시작: <ret> 잠깐만요, 발매일을 찾아볼게요… “Run to the Hills”는 천구백팔십이년에 *The Nu
    25.36s  user  발화 끝
    28.51s  ⚡SPAN 주입 [d'=3.84s / d_lead=5.20s]: “Run to the Hills” was released in 1982 as part of their album *The Nu
    33.92s  agent 발화 끝
