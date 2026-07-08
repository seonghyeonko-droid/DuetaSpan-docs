# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 시 파일로 짧은 시 한 편 만들어 줄래?
     1.61s  <ret> 발화 (turn1 첫 프레임)
     1.85s  ⚡SPAN 주입 [d'=0.24s / d_lead=0.53s]: (tool result) A text file named poem was created with the content "The
     2.20s  agent 발화 시작: <ret> 응, 만들어 줬어. “poem”이라는 이름으로 파일 만들어서 시 넣어 놨어.
     2.45s  user  발화 끝
     7.53s  agent 발화 끝
     8.02s  user  발화 시작: 어… 근데 프랑스 수도가 어디지?
    10.31s  agent 발화 시작: 파리가 프랑스 수도야. 예술과 문화로 유명한 곳이지.
    10.32s  user  발화 끝
    13.99s  user  발화 시작: 그래.
    14.01s  agent 발화 끝
    14.13s  <ret> 발화 (turn5 첫 프레임)
    14.31s  user  발화 끝
    14.40s  agent 발화 시작: <ret> 근데 그 파일 말인데— 시에 더 추가하고 싶어, 아니면 다른 파일 만들고 싶어?
    14.93s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.62s]: <ret>
    19.68s  agent 발화 끝
    20.14s  user  발화 시작: 음, 내 주변 이탈리아 식당 좀 찾아 줘.
    22.75s  <ret> 발화 (turn7 첫 프레임)
    22.75s  ⚡SPAN 주입 [d'=0.00s / d_lead=0.88s]: (tool result) Four Italian restaurants are nearby: Bella Pasta, 0.5 mi
    23.32s  user  발화 끝
    23.34s  agent 발화 시작: <ret> 당연하지. 지금 네 위치에서 1.5마일 안에 이탈리아 식당 네 군데 찾았어.
    25.66s  user  발화 시작: 응.
    26.11s  user  발화 끝
    27.94s  <ret> 발화 (turn9 첫 프레임)
    28.20s  agent 발화 끝
    28.53s  agent 발화 시작: <ret> 그럼 뭘 해 줄까— 식당 평점이나 영업시간 같은 거 보고 싶어?
    28.94s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.59s]: <ret>
    32.04s  agent 발화 끝
    32.38s  user  발화 시작: 벨라 파스타 전화번호가 뭐야?
    33.68s  <ret> 발화 (turn11 첫 프레임)
    34.27s  agent 발화 시작: <ret> 잠깐만. 벨라 파스타 전화번호는 오오오-일이삼-사오육칠이고, 오늘 저녁 아홉 시까지 영업해.
    34.51s  user  발화 끝
    34.68s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.93s]: (tool result) Bella Pasta’s phone number is 555-123-4567, and it’s ope
    40.72s  agent 발화 끝
    41.73s  user  발화 시작: 거기 두 명으로 7시 30분에 예약해 줄래?
    43.59s  <ret> 발화 (turn13 첫 프레임)
    43.75s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.43s]: (tool result) A table for two at Bella Pasta is reserved for today at 
    44.18s  agent 발화 시작: <ret> 응, 오늘 저녁 7시 30분에 벨라 파스타에 두 명 예약됐어.
    44.41s  user  발화 끝
    48.48s  agent 발화 끝
