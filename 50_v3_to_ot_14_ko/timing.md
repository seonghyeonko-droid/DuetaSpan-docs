# v3_to_ot_14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어, 모차르트에 대해 읽고 있었는데… 진짜 어릴 때부터 공연을 시작했어?
     4.35s  user  발화 끝
     4.41s  agent 발화 시작: 음, 어떤 재능은 진짜 빨리 나타나는 것 같아.
     7.46s  agent 발화 끝
     8.04s  user  발화 시작: 열일곱 살쯤 된다고 들었는데… 그 나이에 프로 음악가라니 좀 빠른 것 같아. 그 나이에 뭘 하고 다녔어?
    13.16s  <ret> 발화 (turn3 첫 프레임)
    13.75s  agent 발화 시작: <ret> 그거 좀 정확하게 말해줄게. 모차르트는 열일곱 살 때 오스트리아 잘츠부르크에서 궁정 음악가로 일했
    13.92s  user  발화 끝
    14.16s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.22s]: Wolfgang Amadeus Mozart became a court musician in Salzburg, Austria, 
    20.95s  user  발화 시작: 와. 궁정 음악가라… 왕족한테 고용된 거네?
    20.98s  agent 발화 끝
    24.46s  user  발화 끝
    24.47s  agent 발화 시작: 대체로 그렇다. 꾸준한 수입과 함께 의뢰가 계속 들어오는 명성 있는 자리였어.
    30.07s  agent 발화 끝
    30.47s  user  발화 시작: 그럼, 궁정에서 무슨 음악을 연주했을까?
    32.73s  <ret> 발화 (turn7 첫 프레임)
    33.31s  agent 발화 시작: <ret> 그의 레퍼토리는 꽤 다양했어. 모차르트는 거의 모든 시대의 음악 장르에서 800곡이 넘는 작품을 
    33.34s  user  발화 끝
    33.73s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.65s]: Mozart composed over eight hundred works spanning nearly every genre o
    40.73s  agent 발화 끝
    41.53s  user  발화 시작: 800곡! 엄청 많네. 주로 오페라를 작곡했어?
    44.40s  agent 발화 시작: 꼭 그렇진 않아. 오페라가 그의 유산에서 중요한 부분을 차지하지만, 다른 형식으로도 많이 썼어.
    44.58s  user  발화 끝
    50.38s  agent 발화 끝
    51.71s  user  발화 시작: 쓰레기 버린 거 잊었네.
    53.04s  user  발화 끝
    53.16s  user  발화 시작: 미안. 다시 모차르트 얘기로 돌아가서… 생전에 유명했어?
    57.21s  agent 발화 시작: 꽤 유명해졌는데, 말년에는 재정적으로 어려움을 겪었어.
    57.27s  user  발화 끝
    61.09s  agent 발화 끝
    61.64s  user  발화 시작: 유명한데도 재정적인 어려움이 있었다고? 좀 이상하네.
    64.37s  <ret> 발화 (turn14 첫 프레임)
    64.96s  agent 발화 시작: <ret> 상황이 좀 복잡했어. 성공적인 시기도 있었지만, 모차르트는 성인 생활 내내 재정적인 어려움에 시달
    65.02s  user  발화 끝
    65.33s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.67s]: Mozart struggled financially throughout much of his adult life despite
    71.91s  agent 발화 끝
    72.42s  user  발화 시작: 그럼, 항상 부유하고 편안하게 살았던 건 아니었어?
    75.67s  agent 발화 시작: 전혀. 후원은 변덕스러웠고, 꾸준하지 않은 의뢰에 의존해야 했거든.
    75.75s  user  발화 끝
    81.45s  agent 발화 끝
    81.79s  user  발화 시작: 그때 음악가로 사는 게 지금보다 훨씬 불안정했던 것 같아.
    85.02s  user  발화 끝
    85.47s  agent 발화 시작: 지금처럼 안정적인 환경은 아니었지. 예술가들은 다른 사람의 지원에 크게 의존했어.
    91.26s  agent 발화 끝
