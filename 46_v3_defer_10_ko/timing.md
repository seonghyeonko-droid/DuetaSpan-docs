# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안녕하세요. 피닉스에서 로스앤젤레스까지 운전하는 데 얼마나 걸리나요?
     4.34s  <ret> 발화 (turn1 첫 프레임)
     4.74s  ⚡SPAN 주입 [d'=0.40s / d_lead=1.26s]: (tool result) It's 377 miles, about 5 hours and 45 minutes by car.
     4.94s  agent 발화 시작: <ret> 음, 확인해 볼게요. 피닉스에서 로스앤젤레스까지는 대략 다섯 시간 사십오 분 정도 걸리고, 총 삼
     5.14s  user  발화 끝
    15.69s  agent 발화 끝
    15.83s  user  발화 시작: 안녕하세요. 좋아요. 오늘 밤 산타모니카에 있는 호텔을 찾아주시겠어요?
    20.07s  <ret> 발화 (turn3 첫 프레임)
    20.31s  ⚡SPAN 주입 [d'=0.24s / d_lead=0.54s]: (tool result) The Georgian Hotel has availability, $350 per night, 4.5
    20.65s  user  발화 끝
    20.67s  agent 발화 시작: <ret> 네, 확인해 봤습니다. 산타모니카의 조지안 호텔에는 오늘 밤 삼백오십 달러에 객실이 있고, 별점은
    29.33s  agent 발화 끝
    29.49s  user  발화 시작: 안녕하세요. 삼백오십… 좀 비싸네요. 더 저렴한 옵션이 있나요?
    33.24s  <ret> 발화 (turn5 첫 프레임)
    33.84s  agent 발화 시작: <ret> 잠시 더 알아볼까요. 산타모니카의 씨 뷰 모텔은 오늘 밤 일백팔십오 달러에 객실을 제공하고, 별점
    34.12s  user  발화 끝
    34.24s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.09s]: (tool result) The Sea View Motel has rooms for $185, 3 stars.
    42.19s  agent 발화 끝
    42.42s  user  발화 시작: 안녕하세요. 일백팔십오 달러가 더 좋네요. 거기 방을 예약해 주시겠어요?
    47.06s  <ret> 발화 (turn7 첫 프레임)
    47.66s  agent 발화 시작: <ret> 네, 그렇게 하겠습니다. 씨 뷰 모텔 예약이 오늘 밤 일백팔십오 달러로 확정되었고, 확인 번호는 
    47.86s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.62s]: (tool result) Reservation confirmed. Sea View Motel, one night, $185, 
    47.88s  user  발화 끝
    55.48s  user  발화 시작: 안녕하세요. 완벽하네요. 음, 지금 산타모니카 날씨는 어떤가요?
    55.78s  agent 발화 끝
    59.88s  <ret> 발화 (turn9 첫 프레임)
    60.20s  ⚡SPAN 주입 [d'=0.32s / d_lead=3.36s]: (tool result) It's 72 degrees Fahrenheit and sunny.
    60.48s  agent 발화 시작: <ret> 현재 날씨를 확인해 보겠습니다. 현재 산타모니카는 화씨 섭씨 이십이도이고 맑습니다.
    60.49s  user  발화 끝
    66.09s  agent 발화 끝
    66.15s  user  발화 시작: 안녕하세요. 섭씨 이십이도… 좋네요. 근처에 좋은 재즈 클럽이 있는지 궁금합니다.
    72.44s  agent 발화 시작: 안녕하세요. 산타모니카는 활기찬 음악 장면을 가지고 있지만, 요즘은 록과 블루스 쪽으로 더 기울고 있습니다.
    72.68s  user  발화 끝
    80.17s  agent 발화 끝
    80.76s  user  발화 시작: 안녕하세요. 아, 그렇군요. 그럼 로스앤젤레스에는 있나요?
    83.80s  <ret> 발화 (turn13 첫 프레임)
    84.40s  agent 발화 시작: <ret> 네, 로스앤젤레스는 재즈의 천국입니다. 블루 웨일은 다운타운 로스앤젤레스에 위치한 유명한 재즈 클
    84.50s  user  발화 끝
    84.76s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.87s]: (tool result) The Blue Whale is a popular jazz club in downtown Los An
    92.14s  agent 발화 끝
    93.07s  user  발화 시작: 안녕하세요. 블루 웨일… 씨 뷰 모텔에서 얼마나 떨어져 있나요?
    96.59s  <ret> 발화 (turn15 첫 프레임)
    97.19s  agent 발화 시작: <ret> 알아보겠습니다. 블루 웨일은 씨 뷰 모텔에서 십 점 이 마일 떨어져 있으며, 차로 대략 이십 분 
    97.28s  user  발화 끝
    97.47s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.24s]: (tool result) It's 10.2 miles, about 20 minutes by car.
   104.61s  agent 발화 끝
   104.65s  user  발화 시작: 안녕하세요. 이십 분이면 괜찮네요. 거기서는 보통 어떤 종류의 재즈를 연주하나요?
   110.53s  user  발화 끝
   110.83s  agent 발화 시작: 안녕하세요. 블루 웨일은 정말 다양한 음악을 선보이며, 대부분 현대적이고 아방가르드하지만, 스트레이트 어헤드
   124.97s  agent 발화 끝
   125.11s  user  발화 시작: 안녕하세요. 흠, 흥미롭네요. 오늘 밤 여덟 시에 블루 웨일로 가도록 제 휴대폰에 알림을 추가해 주시겠어요?
   132.90s  <ret> 발화 (turn19 첫 프레임)
   133.50s  agent 발화 시작: <ret> 네, 그렇게 해 드릴 수 있습니다. 오늘 밤 여덟 시에 블루 웨일로 가도록 알림이 설정되었습니다.
   133.78s  user  발화 끝
   133.86s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.02s]: (tool result) Reminder set for 8:00 PM: Go to The Blue Whale.
   139.56s  agent 발화 끝
   140.80s  user  발화 시작: 안녕하세요. 좋습니다. 블루 웨일 근처에 주차장이 있나요?
   144.91s  <ret> 발화 (turn21 첫 프레임)
   145.51s  agent 발화 시작: <ret> 주차장을 찾아보겠습니다. LA 그랜드 파킹은 블루 웨일에서 한 블록 떨어진 곳에 있는 주차장입니다
   145.66s  user  발화 끝
   145.91s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.45s]: (tool result) LA Grand Parking is a garage one block from The Blue Wha
   153.48s  agent 발화 끝
   154.39s  user  발화 시작: 안녕하세요. 한 블록… 알아두면 좋겠네요. [sigh] 오늘 밤이 좋아질 것 같네요.
   160.08s  agent 발화 시작: 안녕하세요. 그렇게 생각하시는 것 같네요. 음악은 언제나 좋은 해결책입니다.
   160.28s  user  발화 끝
   165.91s  agent 발화 끝
   166.02s  user  발화 시작: 안녕하세요. 네. 그런데, 찰리 파커가 로스앤젤레스에서 처음 공연했을 때에 대해 아시나요?
   172.78s  user  발화 끝
   173.15s  agent 발화 시작: 안녕하세요. 아주 흥미로운 질문이고, 꽤 깊은 토론이 될 수도 있겠네요. 제대로 답변하려면 몇 가지 기록을 
   182.51s  agent 발화 끝
   182.67s  user  발화 시작: 안녕하세요. 아, 괜찮습니다. 괜찮아요.
   184.59s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) Charlie Parker played at the Plantation Club in Hollywoo
   185.77s  agent 발화 시작: <ret> 음, 방금 찾았습니다. 찰리 파커는 1948년에 할리우드의 플랜테이션 클럽에서 공연했는데, 서부 
   185.82s  user  발화 끝
   195.79s  agent 발화 끝
   195.88s  user  발화 시작: 안녕하세요. 플랜테이션 클럽… 와. 그곳에 대해 읽어본 적이 있습니다.
   201.85s  user  발화 끝
   202.22s  agent 발화 시작: 안녕하세요. 전설적인 곳이었죠. 서부 해안에서 비밥을 키운 진정한 온상이었어요.
   208.01s  agent 발화 끝
   208.67s  user  발화 시작: 안녕하세요. 그럼, 음, 405번 고속도로의 교통 상황은 지금 어떤가요?
   213.34s  <ret> 발화 (turn31 첫 프레임)
   213.93s  agent 발화 시작: <ret> 현재 교통 상황을 확인해 보겠습니다. 현재 윌셔 대로 주변 405번 북쪽에는 약간의 정체가 있습니
   214.09s  user  발화 끝
   214.34s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.84s]: (tool result) Moderate congestion on the 405 North near Wilshire Boule
   220.50s  user  발화 시작: 안녕하세요. 약간의 정체… 알겠습니다. 조금 일찍 출발해야 할 것 같네요.
   220.56s  agent 발화 끝
   226.87s  agent 발화 시작: 안녕하세요. 특히 로스앤젤레스에서는 신중함이 길 위의 좋은 동반자입니다.
   226.99s  user  발화 끝
   232.47s  agent 발화 끝
   232.58s  user  발화 시작: 안녕하세요. 맞아요. 혹시 안전하게 일곱 시 사십 분에 출발하도록 알림을 설정해 주시겠어요?
   238.53s  <ret> 발화 (turn35 첫 프레임)
   239.13s  agent 발화 시작: <ret> 네, 그렇게 하겠습니다. 일곱 시 사십 분에 블루 웨일로 출발하도록 알림을 설정했습니다.
   239.34s  user  발화 끝
   239.49s  ⚡SPAN 주입 [d'=0.96s / d_lead=1.02s]: (tool result) Reminder set for 7:40 PM: Leave for The Blue Whale.
   245.24s  agent 발화 끝
   246.06s  user  발화 시작: 안녕하세요. 감사합니다, 모시. 정말 큰 도움이 됐어요.
   250.05s  agent 발화 시작: 안녕하세요. 천만에요. 음악과 밤을 즐기세요. 좋은 시간을 보내실 것 같습니다.
   250.22s  user  발화 끝
   255.70s  agent 발화 끝
