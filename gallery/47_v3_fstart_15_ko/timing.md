# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 시드니 오페라 하우스의 위도와 경도가 뭔데?
     2.52s  <ret> 발화 (turn1 첫 프레임)
     2.83s  agent 발화 시작: <ret> 아, 정말 멋진 곳을 물어보셨네요… 위도는 삼십삼 점 팔오육팔, 경도는 백오십일 점 이일오삼입니다
     3.09s  user  발화 끝
     4.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.55s]: (tool result) The Sydney Opera House is located at latitude -33.8568 a
    10.52s  agent 발화 끝
    10.85s  user  발화 시작: 거기 지금 날씨는 어때?
    12.10s  <ret> 발화 (turn3 첫 프레임)
    12.40s  agent 발화 시작: <ret> 시드니는 정말 아름다운 도시인데… 지금 시드니는 이십이 도이고 부분적으로 흐립니다.
    12.59s  user  발화 끝
    13.62s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.05s]: (tool result) The current weather in Sydney, Australia is 22 degrees C
    18.19s  agent 발화 끝
    18.21s  user  발화 시작: 음, 괜찮네.
    19.38s  agent 발화 시작: 정말 그래요. 시드니는 일 년 내내 온화한 기후를 즐기기 때문에 야외 콘서트에 아주 좋습니다.
    19.50s  user  발화 끝
    25.63s  agent 발화 끝
    26.13s  user  발화 시작: 근처에 재즈 클럽 있어?
    27.91s  <ret> 발화 (turn7 첫 프레임)
    27.98s  agent 발화 시작: <ret> 이제 그 질문에 확실하게 답해 드릴 수 있겠네요… 별점 사 점 오인 베이스먼트는 단 팔십 미터 떨
    28.02s  user  발화 끝
    29.83s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.85s]: (tool result) The Basement is a jazz club 0.8 kilometers from the Sydn
    34.29s  agent 발화 끝
    34.68s  user  발화 시작: 아, 베이스먼트, 들어본 적 있어.
    36.65s  agent 발화 시작: 전설적인 곳이에요. 많은 거물들을 초청했고, 시드니 음악계의 중요한 곳입니다.
    36.75s  user  발화 끝
    42.90s  agent 발화 끝
    43.85s  user  발화 시작: 오늘 밤 공연하는 거 있는지 알아봐 줘.
    45.68s  <ret> 발화 (turn11 첫 프레임)
    46.07s  agent 발화 시작: <ret> 일정을 한번 살펴볼게요… 오늘 밤 여덟 시에 블루 노트가 공연하고, 티켓은 사십오 달러입니다.
    46.29s  user  발화 끝
    46.64s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.39s]: (tool result) The Basement has The Blue Notes performing tonight at 8:
    52.37s  agent 발화 끝
    52.53s  user  발화 시작: 좋다! 티켓 예매해 줘.
    53.93s  <ret> 발화 (turn13 첫 프레임)
    54.24s  agent 발화 시작: <ret> 물론이죠, 도와드릴 수 있어서 기쁩니다… 블루 노트 티켓 예매가 완료되었고, 확인 번호는 BX87
    54.37s  user  발화 끝
    55.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.50s]: (tool result) One ticket to The Blue Notes at The Basement is confirme
    61.56s  agent 발화 끝
    63.96s  user  발화 시작: 좋아!
    64.67s  agent 발화 시작: 정말 잘 됐네요. 확인서를 등록된 이메일 주소로 보내드렸습니다.
    64.88s  user  발화 끝
    68.63s  agent 발화 끝
    70.10s  user  발화 시작: 거기 가는 제일 좋은 방법은 뭐야?
    71.42s  <ret> 발화 (turn17 첫 프레임)
    71.81s  agent 발화 시작: <ret> 가장 빠른 경로를 계산해 드릴게요… 걸어서 십오 분, 택시를 타면 약 칠 분 정도 걸립니다.
    72.03s  user  발화 끝
    72.94s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.26s]: (tool result) The fastest route to The Basement is a 15-minute walk, o
    77.84s  user  발화 시작: 걸어갈게.
    77.92s  agent 발화 끝
    78.66s  user  발화 끝
    78.82s  agent 발화 시작: 그럼 즐거운 저녁 산책이 되겠네요. 음악과 도시를 즐기세요.
    83.53s  agent 발화 끝
    85.74s  user  발화 시작: 정말 고마워!
    86.90s  agent 발화 시작: 천만에요. 음악은 공유해야 하고, 시드니는 만끽해야 할 도시입니다.
    86.94s  user  발화 끝
    91.90s  agent 발화 끝
