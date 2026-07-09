# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 검은색, 빨간색, 노란색이 들어간 국기가 궁금해. 어떤 나라  | S2 좋은 생각이야. 근데 독일 국기 색깔이 의미가 있어? | S3 오, 역사적인 의미가 있었구나. 그렇군요. 독일은 또 뭐가 유 | S4 아, 맞아! 자동차! 그럼 독일의 수도는 어디야?

     0.00s  user  발화 시작: 검은색, 빨간색, 노란색이 들어간 국기가 궁금해. 어떤 나라 국기일까?
     5.69s  <ret> 발화 (turn1 첫 프레임)
     5.76s  agent 발화 시작: <ret> 음, 그 색깔 조합을 가진 국기는 딱 한 군데밖에 없는 것 같아. 독일 국기는 검은색, 빨간색, 
     5.98s  user  발화 끝
     7.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.38s]: The flag of Germany features black, red, and yellow horizontal bands.
    15.11s  user  발화 시작: 아, 독일! 그렇구나. [laugh] 요즘 공부에 좀 집중이 안 돼서 그래.
    15.17s  agent 발화 끝
    21.23s  agent 발화 시작: 공부에 집중이 안 되는 건 누구나 겪는 일이야. 잠깐 쉬면서 좋아하는 음악을 듣거나 산책을 해보는 건 어때?
    21.26s  user  발화 끝
    24.82s  user  발화 시작: Right.
    25.46s  user  발화 끝
    29.06s  agent 발화 끝
    29.11s  user  발화 시작: 좋은 생각이야. 근데 독일 국기 색깔이 의미가 있어?
    33.42s  <ret> 발화 (turn6 첫 프레임)
    33.56s  agent 발화 시작: <ret> 색깔마다 의미가 숨겨져 있긴 해. 검은색, 빨간색, 금색은 나폴레옹과의 해방 전쟁 때 사용된 색깔
    33.65s  user  발화 끝
    35.18s  ⚡SPAN 주입 [d'=1.76s / d_lead=2.91s]: Black, red, and gold were the colors of the German liberation wars aga
    41.64s  user  발화 시작: 오, 역사적인 의미가 있었구나. 그렇군요. 독일은 또 뭐가 유명해?
    41.72s  agent 발화 끝
    47.84s  agent 발화 시작: 독일은 자동차 산업이 아주 발달했잖아. BMW나 벤츠 같은 유명 브랜드가 독일에서 만들어졌어.
    47.89s  user  발화 끝
    54.61s  user  발화 시작: 아, 맞아! 자동차! 그럼 독일의 수도는 어디야?
    54.93s  agent 발화 끝
    57.95s  <ret> 발화 (turn10 첫 프레임)
    58.06s  agent 발화 시작: <ret> 독일의 수도는 베를린이야. 베를린은 1990년에 독일 통일 이후 수도가 되었어.
    58.27s  user  발화 끝
    59.62s  ⚡SPAN 주입 [d'=1.68s / d_lead=2.14s]: Berlin became the capital of a unified Germany in 1990.
    65.20s  agent 발화 끝
