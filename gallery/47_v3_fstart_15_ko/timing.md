# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 시드니 오페라 하우스의 위도와 경도가 뭔데?
     2.87s  <ret> 발화 (turn1 첫 프레임)
     3.18s  agent 발화 시작: <ret> 음, 정말 멋진 곳에서 시작하셨네요… 위도는 마이너스 삼십삼 점 팔오육팔이고, 경도는 백오십일 점
     3.43s  user  발화 끝
     4.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.01s]: (tool result) The Sydney Opera House is located at latitude -33.8568 a
    12.54s  agent 발화 끝
    12.87s  user  발화 시작: 거기 지금 날씨는 어때?
    14.90s  <ret> 발화 (turn3 첫 프레임)
    15.21s  agent 발화 시작: <ret> 시드니의 기후는… 대부분 좋을 거예요. 지금 시드니는 기온이 이십이 도이고 부분적으로 흐립니다.
    15.37s  user  발화 끝
    16.42s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.31s]: (tool result) The current temperature in Sydney is 22 degrees Celsius 
    21.84s  agent 발화 끝
    21.93s  user  발화 시작: 흐린 하늘이라고? 바람은 불어?
    24.05s  <ret> 발화 (turn5 첫 프레임)
    24.28s  agent 발화 시작: <ret> 바람은 공연에 영향을 줄 수도 있잖아요. 바람은 서남쪽에서 시속 십오 킬로미터로 불고 있습니다.
    24.51s  user  발화 끝
    25.41s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.90s]: (tool result) The wind speed in Sydney is 15 kilometers per hour from 
    27.05s  user  발화 시작: 응.
    27.50s  user  발화 끝
    30.63s  agent 발화 끝
    31.05s  user  발화 시작: 근처 재즈 클럽 좀 찾아 줘.
    32.93s  <ret> 발화 (turn8 첫 프레임)
    32.99s  user  발화 끝
    33.25s  agent 발화 시작: <ret> 아, 이제 제 얘기를 하시는군요—음악은 필수죠. 더 베이스먼트는 0.8킬로미터 거리에 있는 재즈 
    34.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.42s]: (tool result) The Basement is a jazz club 0.8 kilometers from the Sydn
    40.67s  agent 발화 끝
    41.10s  user  발화 시작: 거기 보통 무슨 재즈를 연주해?
    42.95s  agent 발화 시작: 거기는 주로 현대 스타일을 많이 연주하고, 경계를 넓혀 갑니다.
    43.21s  user  발화 끝
    46.84s  agent 발화 끝
    47.93s  user  발화 시작: 오늘 밤 라이브 음악 있어?
    49.19s  <ret> 발화 (turn12 첫 프레임)
    49.49s  agent 발화 시작: <ret> 일정을 확인해 드릴게요… 제임스 모리슨 쿼텟이 오늘 밤 여덟 시에 거기서 공연합니다.
    49.72s  user  발화 끝
    51.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.02s]: (tool result) The Basement has a performance by the James Morrison Qua
    54.67s  agent 발화 끝
    55.02s  user  발화 시작: 제임스 모리슨! 아— 그, 거기가 큰 곳이야?
    58.98s  <ret> 발화 (turn14 첫 프레임)
    59.37s  agent 발화 시작: <ret> 그는 정말 대단한 분이죠—더 베이스먼트는 대략 이백오십 명 정도 수용할 수 있습니다.
    59.51s  user  발화 끝
    60.50s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.11s]: (tool result) The Basement has a capacity of 250 people.
    64.69s  agent 발화 끝
    66.84s  user  발화 시작: 좋아, 저녁 일곱 시 반에 자리 두 개 예약해 줘.
    69.38s  <ret> 발화 (turn16 첫 프레임)
    69.60s  agent 발화 시작: <ret> 좋은 선택이에요—일찍 도착하는 건 항상 현명한 일이죠. 저녁 일곱 시 반에 두 분 자리 예약됐고,
    69.84s  user  발화 끝
    71.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.33s]: (tool result) Your reservation at The Basement for two people at 7:30 
    78.17s  agent 발화 끝
    79.40s  user  발화 시작: 완벽해. 여섯 시 사십오 분에 출발하라고 알림 설정해 줘.
    83.22s  <ret> 발화 (turn18 첫 프레임)
    83.29s  agent 발화 시작: <ret> 시간 엄수는 미덕이죠, 특히 음악을 들으러 갈 때는. 여섯 시 사십오 분에 출발하라고 알림을 설정
    83.52s  user  발화 끝
    85.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.51s]: (tool result) A reminder is set for 6:45 PM to leave for The Basement.
    90.76s  user  발화 시작: 고마워.
    90.80s  agent 발화 끝
    91.39s  user  발화 끝
    91.55s  agent 발화 시작: 천만에요—음악을 즐기세요. 정말 소중한 선물이랍니다.
    96.37s  agent 발화 끝
