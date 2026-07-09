# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 데미 로바토 새 앨범 언제 나와? 올해 나온다던데… 2015년?
     4.80s  agent 발화 시작: 어, 데미 로바토 앨범 발매 일정 물어보는 거구나. 좋아하는 가수가 새 음악 내면 기분 좋지.
     5.00s  user  발화 끝
    10.96s  <ret> 발화 (turn2 첫 프레임)
    11.19s  agent 발화 시작: <ret> 잠깐만 알아볼게… 걔 앨범 *Confident*는 네가 예상한 대로 이천십오 년 10월에 나왔어.
    11.38s  agent 발화 끝
    12.16s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.20s]: Demi Lovato’s album, *Confident*, was released in October 2015.
    15.42s  user  발화 시작: 와.
    16.05s  user  발화 끝
    17.49s  agent 발화 끝
    18.27s  user  발화 시작: 10월이라고? 완전 금방이네. 완전 놓쳤어!
    21.50s  user  발화 끝
    21.56s  agent 발화 시작: 그러게, 가끔 시간 가는 줄 모르지. 앨범 발매일은 기억하기가 쉽지 않아.
    24.40s  user  발화 시작: 어.
    24.89s  user  발화 끝
    26.61s  agent 발화 끝
    28.01s  user  발화 시작: 앨범 나오기 전에 싱글은 뭐 나왔어?
    30.17s  <ret> 발화 (turn8 첫 프레임)
    30.57s  agent 발화 시작: <ret> 앨범 전에 나온 싱글 찾아볼까? “Cool for the Summer”가 이천십오 년 7월 1일에
    30.78s  user  발화 끝
    32.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.47s]: The lead single, “Cool for the Summer”, was released on July 1, 2015.
    32.91s  user  발화 시작: 음.
    33.54s  user  발화 끝
    36.04s  user  발화 시작: 아, 맞아! 그 노래 기억나! 라디오에서 엄청 많이 나왔었어.
    36.13s  agent 발화 끝
    39.71s  <ret> 발화 (turn11 첫 프레임)
    39.78s  agent 발화 시작: <ret> [laugh] 진짜 중독성 있었지, 안 그래? 엄청 기억에 남는 곡이야.
    39.83s  user  발화 끝
    41.56s  user  발화 시작: 어.
    41.71s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=5.33s]: (tool result) AAPL: 170.34, +0.25, 0.15%
    41.95s  user  발화 끝
    45.11s  agent 발화 끝
    45.90s  user  발화 시작: 음, 좋아. 어떤 스타일의 음악이야?
    48.29s  user  발화 끝
    48.35s  agent 발화 시작: *Confident*는 보통 팝이라고 하는데, R&B랑 일렉트로닉 댄스 뮤직 요소도 좀 있어.
    55.20s  agent 발화 끝
    55.68s  user  발화 시작: 흥미롭네. 이전 앨범이랑 많이 달라?
    58.00s  <ret> 발화 (turn16 첫 프레임)
    58.21s  user  발화 끝
    58.23s  agent 발화 시작: <ret> 좋은 질문인데, 예전 앨범이랑 비교해 보면… 좀 더 성숙하고 실험적인 앨범이라고 해, 예전 앨범과
    60.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.15s]: *Confident* is seen as a more mature and experimental album than Lovat
    63.27s  user  발화 시작: 어어.
    63.91s  user  발화 끝
    66.98s  agent 발화 끝
    67.06s  user  발화 시작: 아, 그렇구나. 정보 고마워!
    69.13s  agent 발화 시작: 천만에! 앨범 정보 찾는 거 도와줘서 기뻐. 내가 아는 거 공유하는 거 좋아해.
    69.17s  user  발화 끝
    74.40s  agent 발화 끝
