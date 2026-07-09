# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 룩스 아우룬케 작곡가가 언제 태어났는지 궁금해요. | S2 천구백칠십 년이라고요? 좀 더 자세히 알려주시겠어요? | S3 잠깐만요, 그분이 어떤 장르의 음악을 주로 하셨는지 먼저 알  | S4 신기하네요. 그분이 활동했던 시기에 다른 유명한 음악가도 있었

     0.00s  user  발화 시작: 룩스 아우룬케 작곡가가 언제 태어났는지 궁금해요.
     3.23s  user  발화 끝
     3.47s  <ret> 발화 (turn1 첫 프레임)
     3.53s  agent 발화 시작: <ret> 그 분의 탄생 연도를 알아볼까요? 룩스 아우룬케는 천구백칠십 년에 태어났어요.
     4.75s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.27s]: Lux Aurunque was born in nineteen seventy.
     7.06s  user  발화 시작: 예.
     7.60s  user  발화 끝
    10.07s  agent 발화 끝
    10.41s  user  발화 시작: 천구백칠십 년이라고요? 좀 더 자세히 알려주시겠어요?
    14.19s  agent 발화 시작: 물론이죠. 그 시대에 어떤 음악적 배경이 있었는지 함께 알아볼까요?
    14.35s  user  발화 끝
    16.91s  user  발화 시작: 음.
    17.45s  user  발화 끝
    19.00s  agent 발화 끝
    19.47s  user  발화 시작: 잠깐만요, 그분이 어떤 장르의 음악을 주로 하셨는지 먼저 알 수 있을까요?
    24.22s  <ret> 발화 (turn7 첫 프레임)
    24.38s  agent 발화 시작: <ret> 아, 네, 어떤 장르였는지 궁금하시군요.
    24.51s  user  발화 끝
    25.26s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.14s]: Lux Aurunque primarily composed neoclassical darkwave music.
    27.35s  agent 발화 시작: 룩스 아우룬케는 주로 신고전 다크웨이브 음악을 작곡했어요.
    27.52s  agent 발화 끝
    30.14s  user  발화 시작: 그러니까요.
    31.04s  user  발화 끝
    32.73s  agent 발화 끝
    32.97s  user  발화 시작: 신기하네요. 그분이 활동했던 시기에 다른 유명한 음악가도 있었나요?
    37.59s  user  발화 끝
