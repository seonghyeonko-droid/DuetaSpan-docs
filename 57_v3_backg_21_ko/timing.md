# v3_backg_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어, “When You Wish Upon a Star” 제일 먼저 부른 사람이 누구야?
     3.25s  <ret> 발화 (turn1 첫 프레임)
     3.85s  agent 발화 시작: <ret> 아, 좋은 질문이에요. 클리프 에드워즈가 영화 *피노키오*에서 “When You Wish Upon
     3.88s  user  발화 끝
     4.25s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.11s]: Cliff Edwards first performed “When You Wish Upon a Star” in the 1940 
    13.24s  user  발화 시작: 음, 그 이름은 처음 들어보는 것 같아. 그 사람이 뭘 더 했어?
    13.36s  agent 발화 끝
    16.39s  <ret> 발화 (turn3 첫 프레임)
    16.66s  user  발화 끝
    16.98s  agent 발화 시작: <ret> 그 사람은 꽤 다양한 활동을 했어요. 클리프 에드워즈는, 유켈렐레 아이크라는 이름으로도 알려져 있
    17.39s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.48s]: Cliff Edwards, also known as Ukulele Ike, was an American singer and m
    28.81s  agent 발화 끝
    30.03s  user  발화 시작: 유켈렐레 아이크? 재밌는 별명이네. 인기가 많았어?
    33.14s  <ret> 발화 (turn5 첫 프레임)
    33.73s  agent 발화 시작: <ret> 그랬어요. 그는 1920년대와 30년대에 유켈렐레와 라디오 방송으로 인기를 얻었거든요. 진짜 엔터
    33.87s  user  발화 끝
    34.14s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.06s]: Edwards gained popularity in the 1920s and 1930s for his ukulele playi
    43.00s  agent 발화 끝
    43.16s  user  발화 시작: 라디오? 그래? 무슨 음악을 했어?
    45.17s  <ret> 발화 (turn7 첫 프레임)
    45.75s  user  발화 끝
    45.76s  agent 발화 시작: <ret> 실제로 다양한 장르를 소화했어요. 그는 재즈, 블루스, 그리고 대중적인 스탠더드 곡들을 연주했어요
    46.17s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.55s]: Cliff Edwards performed songs in various genres, including jazz, blues
    53.29s  user  발화 시작: 흥미롭네. 유명한 사람들과 같이 일한 적 있어?
    53.41s  agent 발화 끝
    55.60s  <ret> 발화 (turn9 첫 프레임)
    56.20s  agent 발화 시작: <ret> 네, 꽤 많이 있었어요. 빙 크로스비와 함께 일했고, 스파이크 존스와 함께 레코딩도 했어요.
    56.23s  user  발화 끝
    56.60s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.82s]: Cliff Edwards collaborated with musicians like Bing Crosby and perform
    62.31s  agent 발화 끝
    63.37s  user  발화 시작: 스파이크 존스… 그 이름은 들어본 것 같아.
    66.41s  user  발화 끝
    66.48s  agent 발화 시작: 정말 기발한 음악가였죠, 안 그래요?
    69.58s  agent 발화 끝
    69.83s  user  발화 시작: 분리수거는 내놨어?
    71.77s  user  발화 끝
    71.99s  user  발화 시작: 음, 방금 생각하고 있었는데… *피노키오*는 몇 년에 나왔어?
    74.72s  <ret> 발화 (turn14 첫 프레임)
    75.32s  agent 발화 시작: <ret> 잠시 정보를 찾아볼게요. *피노키오*는 1940년 2월 23일에 개봉했어요. 획기적인 애니메이션 
    75.55s  user  발화 끝
    75.72s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.81s]: *Pinocchio* was released by Walt Disney Productions on February 23, 19
    83.71s  agent 발화 끝
    83.94s  user  발화 시작: 1940년… 와, 진짜 오래됐네.
    87.50s  user  발화 끝
    87.70s  agent 발화 시작: 그렇죠, 그렇죠? 그래도 예술성은 여전히 훌륭해요.
    91.73s  user  발화 시작: 그 사람이 영화에서 노래를 부르고, 그 다음엔? 그 노래가 그 사람한테도 히트했어?
    91.77s  agent 발화 끝
    96.63s  <ret> 발화 (turn18 첫 프레임)
    97.22s  agent 발화 시작: <ret> 그 노래는 확실히 인지도를 얻었어요. 영화 개봉 후에 유명해졌고 아카데미 상도 받았거든요.
    97.47s  user  발화 끝
    97.63s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.16s]: “When You Wish Upon a Star” became widely recognized after its inclusi
   103.71s  agent 발화 끝
   105.20s  user  발화 시작: 아카데미 상? 노래로?
   107.79s  user  발화 끝
   107.83s  agent 발화 시작: 네, 맞아요. 명곡인 데는 다 이유가 있어요.
   110.79s  user  발화 시작: 그렇겠지. 전쟁 이후에도 계속 공연했어?
   110.79s  agent 발화 끝
   113.07s  <ret> 발화 (turn22 첫 프레임)
   113.67s  agent 발화 시작: <ret> 그는 한동안 계속 공연했어요. 1961년까지 음악을 연주하고 녹음했어요. 길고 다채로운 경력이었죠
   113.69s  user  발화 끝
   114.07s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.76s]: Cliff Edwards continued to perform and record music until his death in
   122.39s  agent 발화 끝
   122.54s  user  발화 시작: 1961년… 알았어. 정보 고마워.
   126.24s  user  발화 끝
   126.43s  agent 발화 시작: 도와드릴 수 있어서 기뻐요. 이런 음악사 이야기를 나누는 건 언제나 즐거워요.
   132.17s  agent 발화 끝
