# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어, 구구공이공에 우편번호 넣었어?
     2.01s  agent 발화 시작: <ret> 아, 네. 요청하신 대로 우편번호 필드에 구구공이공이 입력됐어요.
     2.01s  <ret> 발화 (turn1 첫 프레임)
     2.01s  user  발화 끝
     2.17s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.50s]: Field populated successfully. Value: 90210.
     6.02s  user  발화 시작: 알았어. 그럼 거긴 날씨가 어때?
     6.02s  agent 발화 끝
     8.53s  agent 발화 시작: <ret> 음… 지금 베벌리힐스 날씨는 화씨 칠십이도에 맑고, 풍속은 시속 오 마일이에요.
     8.53s  <ret> 발화 (turn3 첫 프레임)
     8.53s  user  발화 끝
     9.41s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.00s]: Temperature: 72 degrees Fahrenheit. Condition: Sunny. Wind: 5 mph.
    14.05s  user  발화 시작: [laugh] 좋네. 근처에 괜찮은 이탈리아 식당 찾아줄래?
    14.05s  agent 발화 끝
    17.56s  agent 발화 시작: <ret> 뭐, 도와드릴 수 있어요. 일 파스타이오는 별점 사점 반이고, 가격은 대략 서른 달러 정도이고, 
    17.56s  <ret> 발화 (turn5 첫 프레임)
    17.56s  user  발화 끝
    18.56s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.51s]: Restaurant: “Il Pastaio”. Rating: 4.5 stars. Price: $30. Distance: 1.2
    26.59s  user  발화 시작: 좋네. 있잖아, 저녁 일곱 시에 두 명 예약해 줄래?
    26.59s  agent 발화 끝
    31.10s  agent 발화 시작: <ret> 맞아요. 오늘 저녁 일곱 시에 일 파스타이오 두 명 예약이 확정됐고, 확인 번호는 팔사 엑스 구제
    31.10s  <ret> 발화 (turn7 첫 프레임)
    31.10s  user  발화 끝
    31.26s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.50s]: Reservation confirmed. Restaurant: Il Pastaio. Date: October twenty-si
    39.13s  user  발화 시작: 좋아. 그, 거긴 사람이 많아?
    39.13s  agent 발화 끝
    41.64s  agent 발화 시작: <ret> 아… 일 파스타이오는 아주 인기 있는 곳이라 보통 삼십 분에서 육십 분 정도 기다려야 하고, 좌석
    41.64s  <ret> 발화 (turn9 첫 프레임)
    41.64s  user  발화 끝
    41.88s  ⚡SPAN 주입 [d'=0.24s / d_lead=1.00s]: Popularity: Very High. Wait times: 30-60 minutes. Seating capacity: 80
    51.17s  user  발화 시작: 와, 알았어. 뭐, 알아두면 좋네. 야외 좌석 있어?
    51.17s  agent 발화 끝
    55.19s  agent 발화 시작: <ret> 잠깐만 확인해 볼게… 네, 일 파스타이오는 스무 명 수용 가능한 야외 좌석이 있는데, 일부는 덮개
    55.19s  <ret> 발화 (turn11 첫 프레임)
    55.19s  user  발화 끝
    55.99s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.51s]: Outdoor seating: Available. Capacity: 20 seats. Covered: Partially.
    63.71s  user  발화 시작: 좋다. 완전 딱이네, 진짜. 고마워!
    63.71s  agent 발화 끝
    66.22s  agent 발화 시작: 천만에요. 특히 인기 있는 곳은 미리 준비하는 게 좋죠.
    66.22s  user  발화 끝
    70.74s  agent 발화 끝
