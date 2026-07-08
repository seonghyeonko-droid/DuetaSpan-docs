# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어이, 데미 로바토 새 앨범 언제 나와 궁금해. 올해 나온다고 얼핏 들었는데.
     5.18s  agent 발화 시작: 음, 데미 로바토는 여러 앨범을 냈으니까, 어떤 걸 말하는지에 따라 달라.
     5.33s  user  발화 끝
     9.87s  user  발화 시작: 아, 맞다, 미안. 2015년에 작업했던 앨범 말이야. 그때 다들 엄청 얘기했잖아.
    10.09s  agent 발화 끝
    15.63s  <ret> 발화 (turn3 첫 프레임)
    15.66s  user  발화 끝
    15.87s  agent 발화 시작: <ret> 어디 한번 찾아볼까… 네가 예상한 대로, 2015년 10월에 “Confident”라는 앨범이 나왔
    17.07s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.76s]: Demi Lovato’s album “Confident” was released in October 2015.
    22.21s  agent 발화 끝
    24.40s  user  발화 시작: 10월? 엄청 오래된 것 같은데! 그때 완전 기대했었거든.
    28.38s  user  발화 끝
    28.41s  agent 발화 시작: 시간 진짜 빠르지, 안 그래? 음악은 금방 바뀌어. 나는 밤새도록 별자리를 보면서 시간을 관찰하거든—별을 보
    38.47s  user  발화 시작: [laugh] 멋진 관점이네. 그럼 “Confident”가 맞지?
    38.51s  agent 발화 끝
    41.84s  <ret> 발화 (turn7 첫 프레임)
    42.24s  agent 발화 시작: <ret> 그래. 2015년 10월에 발매된 앨범 제목이 “Confident”야.
    42.45s  user  발화 끝
    43.84s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=4.35s]: (tool result) AAPL: 170.34 USD +0.23 (0.14%)
    46.44s  user  발화 시작: 첫 싱글이 뭐였는지 기억하려고 하는데… “Cool for the Summer”였나?
    46.59s  agent 발화 끝
    51.44s  agent 발화 시작: 기억력 진짜 좋다! “Cool for the Summer”가 “Confident”의 리드 싱글이었어.
    51.63s  user  발화 끝
    55.95s  user  발화 시작: 그 노래 진짜 좋아했어. 그 여름에 엄청 많이 들었거든.
    56.62s  agent 발화 끝
    59.40s  agent 발화 시작: 정말 강렬한 노래였지. 내가 망원경 설치할 때 라디오에서 계속 나오던 게 기억나.
    59.55s  user  발화 끝
    65.01s  agent 발화 끝
    65.92s  user  발화 시작: “Confident”가 엄청 히트했어? 잘 됐던 것 같은데 잘 기억이 안 나.
    70.12s  <ret> 발화 (turn13 첫 프레임)
    70.43s  agent 발화 시작: <ret> 차트 성적을 빠르게 확인해 볼게… 응, “Confident”는 빌보드 200 차트에서 1위를 데뷔
    70.50s  user  발화 끝
    72.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.89s]: “Confident” debuted at number one on the Billboard 200 chart.
    78.22s  agent 발화 끝
    78.97s  user  발화 시작: 와, 1위! 대단하다. 정보 고마워!
    81.81s  agent 발화 시작: 천만에! 음악 역사를 공유하는 건 언제나 즐거워.
    81.89s  user  발화 끝
    85.51s  agent 발화 끝
