# v3_to_ot_14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 야, 제일 빠른 마일 기록이 누구야? 궁금하네.
     3.90s  agent 발화 시작: 음, 사실 딱 정해진 답이 있는 질문이야.
     3.90s  user  발화 끝
     7.79s  user  발화 시작: 오, 좋네. 논쟁할 여지가 없는 게 좋아.
     7.79s  agent 발화 끝
    11.69s  agent 발화 시작: <ret> 말해줄게… 히샴 엘 게루즈가 제일 빠른 마일 기록을 세웠어—3분 43초 13.
    11.69s  <ret> 발화 (turn3 첫 프레임)
    11.69s  user  발화 끝
    12.69s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.23s]: Hicham El Guerrouj holds the world record for the fastest mile, with a
    17.81s  user  발화 시작: 와, 진짜… 빠르다. 엄청 빠르네. 어느 나라 사람이야?
    17.81s  agent 발화 끝
    22.27s  agent 발화 시작: <ret> 걔는 모로코 선수야… 히샴 엘 게루즈는 1974년 9월 23일에 모로코 세타트에서 태어났어.
    22.27s  <ret> 발화 (turn5 첫 프레임)
    22.27s  user  발화 끝
    23.27s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.23s]: Hicham El Guerrouj was born in Settat, Morocco, on September 23, 1974.
    28.95s  user  발화 시작: 9월 23일… 흥미롭네. 올림픽 메달은 땄어?
    28.95s  agent 발화 끝
    32.29s  agent 발화 시작: <ret> 땄지… 걔는 1996년 애틀랜타 올림픽 1500미터에서 금메달을 땄어.
    32.29s  <ret> 발화 (turn7 첫 프레임)
    32.29s  user  발화 끝
    33.29s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.67s]: Hicham El Guerrouj won a gold medal in the 1500 meters at the 1996 Sum
    36.74s  user  발화 시작: 와, 대단하다! 항상 어떤 종목이 뭔지 헷갈려.
    36.74s  agent 발화 끝
    40.64s  agent 발화 시작: 종목이 너무 많아서 헷갈릴 수 있지.
    40.64s  user  발화 끝
    43.98s  user  발화 시작: 그래, 맞다. 여자 기록은 어때?
    43.98s  agent 발화 끝
    46.76s  agent 발화 시작: <ret> 페이스 키피예곤이 가지고 있어… 페이스 키피예곤이 4분 7초 64로 여자 마일 최고 기록을 세웠어
    46.76s  <ret> 발화 (turn11 첫 프레임)
    46.76s  user  발화 끝
    47.76s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.78s]: Faith Kipyegon set the women's world record for the mile with a time o
    54.56s  user  발화 시작: 2023년 6월 21일… 알았어. 비교적 최근이네.
    54.56s  agent 발화 끝
    57.90s  agent 발화 시작: 그래, 비교적 최근이야. 새로운 세대의 선수들이야.
    57.90s  user  발화 끝
    61.24s  user  발화 시작: 냉동실에 있는 닭고기 꺼냈어?
    61.24s  agent 발화 끝
    63.46s  user  발화 시작: 미안해. 다시 달리기에 대해 얘기하자…
    63.46s  user  발화 끝
    66.25s  agent 발화 시작: 괜찮아. 다들 할 일이 있잖아.
    66.25s  user  발화 끝
    69.03s  user  발화 시작: 맞는 말이다. 엘 게루즈는 1500미터 전문 선수였어?
    69.03s  agent 발화 끝
    72.93s  agent 발화 시작: <ret> 주로 그랬지… 걔는 1500미터와 마일을 전문으로 했고, 둘 다 세계 기록을 세웠어.
    72.93s  <ret> 발화 (turn18 첫 프레임)
    72.93s  user  발화 끝
    73.65s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.11s]: Hicham El Guerrouj was primarily a 1500m and mile runner, achieving wo
    79.61s  user  발화 시작: 둘 다 잘했네. 대단하다.
    79.61s  agent 발화 끝
    81.83s  agent 발화 시작: 굉장한 재능과 노력이 느껴지지 않아?
    81.83s  user  발화 끝
    84.62s  user  발화 시작: 정말 그렇다. 키피예곤도 1500미터 달리기를 해?
    84.62s  agent 발화 끝
    87.96s  agent 발화 시작: <ret> 그렇지… 페이스 키피예곤은 1500미터, 3000미터, 마일을 달려.
    87.96s  <ret> 발화 (turn22 첫 프레임)
    87.96s  user  발화 끝
    88.84s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.67s]: Faith Kipyegon is a Kenyan middle-distance runner specializing in the 
    91.86s  user  발화 시작: 오, 좀 더 다재다능하네.
    91.86s  agent 발화 끝
    94.08s  agent 발화 시작: 훈련 방식이 좀 다른 것 같아.
    94.08s  user  발화 끝
    97.42s  user  발화 시작: 둘 다 아직도 경쟁에 참가해?
    97.42s  agent 발화 끝
   100.21s  agent 발화 시작: <ret> 엘 게루즈는 은퇴했어… 히샴 엘 게루즈는 2006년에 은퇴하고 정계에 입문했어.
   100.21s  <ret> 발화 (turn26 첫 프레임)
   100.21s  user  발화 끝
   101.17s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.23s]: Hicham El Guerrouj retired from athletics in 2006, focusing on a caree
   105.77s  user  발화 시작: 정치라… 흥미로운 변화네.
   105.77s  agent 발화 끝
   107.44s  agent 발화 시작: 전혀 다른 속도일 것 같아. 하지만 전략도 필요하겠지.
   107.44s  user  발화 끝
   111.90s  user  발화 시작: [laugh] 좋은 지적이다. 키피예곤은?
   111.90s  agent 발화 끝
   114.12s  agent 발화 시작: <ret> 아직도 활발하게 활동하고 있어… 페이스 키피예곤은 아직도 경쟁하고 있고, 2023년에 5000미터
   114.12s  <ret> 발화 (turn30 첫 프레임)
   114.12s  user  발화 끝
   115.12s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.78s]: Faith Kipyegon continues to compete, winning the 5000m at the 2023 Wor
   120.80s  user  발화 시작: 와, 여전히 잘 뛰네! 정말 감동적이다.
   120.80s  agent 발화 끝
   124.14s  agent 발화 시작: 정말 그렇지. 헌신과 재능의 증거야. 아티 타툼 생각도 나네, 항상 한계를 뛰어넘으려고 했거든.
   124.14s  user  발화 끝
   131.38s  agent 발화 끝
