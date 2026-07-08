# v3_abs_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안녕하세요. 와르미아는 언제 설립되었나요?
     2.51s  agent 발화 시작: <ret> 네, 흥미로운 질문이네요. 하지만 아쉽게도 지금 당장은 와르미아의 정확한 설립 날짜를 알 수 없어
     2.51s  <ret> 발화 (turn1 첫 프레임)
     2.51s  user  발화 끝
     3.47s  ⚡SPAN 주입 [d'=0.96s / d_lead=8.80s]: (no information found)
    11.31s  user  발화 시작: 아, 그렇군요. 뭐, 면적은 얼마나 되나요? 제곱킬로미터로요.
    11.31s  agent 발화 끝
    15.71s  agent 발화 시작: <ret> 음… 와르미아는 천삼백육십오 제곱킬로미터의 면적을 가지고 있어요. 꽤 큰 지역이에요.
    15.71s  <ret> 발화 (turn3 첫 프레임)
    15.71s  user  발화 끝
    16.71s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.26s]: Warmia has an area of 2,365 square kilometers.
    22.00s  user  발화 시작: 천삼백… 네. 저기, 지금 폴란드 땅에 속해 있나요?
    22.00s  agent 발화 끝
    27.02s  agent 발화 시작: <ret> 맞아요. 와르미아-마주리아는 현재 폴란드의 16개 보이보데십 중 하나예요. 정말 아름다운 곳이죠.
    27.02s  <ret> 발화 (turn5 첫 프레임)
    27.02s  user  발화 끝
    27.50s  ⚡SPAN 주입 [d'=0.48s / d_lead=1.89s]: Warmia-Masuria is one of the sixteen voivodeships (provinces) of Polan
    33.94s  user  발화 시작: 보이보데십… 그렇군요. 그 보이보데십의 수도는 어디인가요?
    33.94s  agent 발화 끝
    37.71s  agent 발화 시작: <ret> 정말 예쁜 도시예요. 올슈틴이 와르미아-마주리아 보이보데십의 수도랍니다. 역사에 대해서도 꽤 많이
    37.71s  <ret> 발화 (turn7 첫 프레임)
    37.71s  user  발화 끝
    38.71s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.51s]: Olsztyn is the capital of the Warmian-Masurian Voivodeship.
    45.25s  user  발화 시작: 올슈틴이요. 독일 이름 같네요. 독일어로도 이름이 있었나요?
    45.25s  agent 발화 끝
    49.65s  agent 발화 시작: <ret> 역사적으로는 그랬어요. 올슈틴은 독일 통치 시절에 알렌슈타인이라고 불렸어요. 이름은 역사의 변화를
    49.65s  <ret> 발화 (turn9 첫 프레임)
    49.65s  user  발화 끝
    50.61s  ⚡SPAN 주입 [d'=0.96s / d_lead=1.26s]: Olsztyn was known as Allenstein in German.
    58.44s  user  발화 시작: 알렌슈타인. [sigh] 그럼 올슈틴의 인구는 얼마나 되나요?
    58.44s  agent 발화 끝
    62.84s  agent 발화 시작: <ret> 최근에… 올슈틴의 인구는 2023년 1월 1일 기준으로 십칠만 육천 이백사 명이었어요. 점점 커지
    62.84s  <ret> 발화 (turn11 첫 프레임)
    62.84s  user  발화 끝
    63.84s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.89s]: (population: 176,204; date: 2023-01-01)
    73.53s  user  발화 시작: 그건… 정말 많은 사람들이네요. 큰 산업 중심지인가요?
    73.53s  agent 발화 끝
    77.93s  agent 발화 시작: <ret> 중요한 역할을 하고 있어요. 올슈틴은 폴란드 북동부의 중요한 경제 및 산업 중심지 역할을 하고 있
    77.93s  <ret> 발화 (turn13 첫 프레임)
    77.93s  user  발화 끝
    78.93s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.14s]: Olsztyn is a significant economic and industrial hub in northeastern P
    89.24s  user  발화 시작: 음. 어떤 산업들이 있나요?
    89.24s  agent 발화 끝
    91.75s  agent 발화 시작: <ret> 다양한 기반을 가지고 있어요. 기계, 식품 가공, 임업이 올슈틴 경제의 주요 산업이에요. 그 분야
    91.75s  <ret> 발화 (turn15 첫 프레임)
    91.75s  user  발화 끝
    92.75s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.89s]: Key industries in Olsztyn include machinery, food processing, and fore
   101.81s  user  발화 시작: 임업… 흥미롭네요. 그 지역은 숲이 많은 편인가요?
   101.81s  agent 발화 끝
   106.21s  agent 발화 시작: <ret> 정말 그래요. 와르미아-마주리아 보이보데십 토지의 약 33%가 숲으로 덮여 있어요. 아름다운 녹색
   106.21s  <ret> 발화 (turn17 첫 프레임)
   106.21s  user  발화 끝
   107.21s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.89s]: Approximately 33% of the Warmian-Masurian Voivodeship is covered by fo
   114.37s  user  발화 시작: 33%요. 상당하네요. 호수는 얼마나 있나요?
   114.37s  agent 발화 끝
   117.52s  agent 발화 시작: <ret> 정말 많아요. 와르미아-마주리아 보이보데십은 “천 개의 호수 땅”으로 널리 알려져 있어요. 정말 
   117.52s  <ret> 발화 (turn19 첫 프레임)
   117.52s  user  발화 끝
   118.52s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.89s]: The Warmian-Masurian Voivodeship is known as the "Land of a Thousand L
   126.94s  user  발화 시작: 천 개의 호수! 와우. [laugh] 관광객들이 많이 찾는 곳인가요?
   126.94s  agent 발화 끝
   132.60s  agent 발화 시작: <ret> 꽤 인기가 있어요. 마주리 호수 지구는 매년 백만 명 이상의 관광객을 맞이하고 있어요. 정말 아름
   132.60s  <ret> 발화 (turn21 첫 프레임)
   132.60s  user  발화 끝
   133.60s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.89s]: The Masurian Lake District attracts over one million tourists annually
   142.65s  user  발화 시작: 백만 명… 정말 인기가 많네요. 그곳에서 주로 쓰는 언어는 무엇인가요?
   142.65s  agent 발화 끝
   148.94s  agent 발화 시작: <ret> 당연하죠. 폴란드어는 폴란드 전역, 와르미아 지역에서도 공식 언어로 사용되고 있어요. 예상하셨겠죠
   148.94s  <ret> 발화 (turn23 첫 프레임)
   148.94s  user  발화 끝
   149.02s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.63s]: The official language of Poland, including Warmia, is Polish.
   155.85s  user  발화 시작: 폴란드어, 당연하죠. 제가… 그러니까, 멍청한 질문이었네요. 화폐는 무엇인가요?
   155.85s  agent 발화 끝
   160.88s  agent 발화 시작: <ret> 꽤 간단해요. 폴란드는 폴란드 즈워티(PLN)를 공식 화폐로 사용하고 있어요. 일반적으로 안정적인
   160.88s  <ret> 발화 (turn25 첫 프레임)
   160.88s  ⚡SPAN 주입 [d'=0.00s / d_lead=1.89s]: The currency of Poland is the Polish złoty (PLN).
   160.88s  user  발화 끝
   168.42s  user  발화 시작: 즈워티… 그렇군요. 방문하기 비싼 곳인가요?
   168.42s  agent 발화 끝
   171.56s  agent 발화 시작: <ret> 상대적으로 저렴해요. 폴란드에서의 하루 평균 경비는 보통 50달러에서 100달러 사이예요. 여행객
   171.56s  <ret> 발화 (turn27 첫 프레임)
   171.56s  user  발화 끝
   172.56s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.26s]: Average daily expenses in Poland range from $50 to $100 USD.
   180.36s  user  발화 시작: 50달러에서 100달러… 나쁘지 않네요. 기후는 어떤가요?
   180.36s  agent 발화 끝
   184.13s  agent 발화 시작: <ret> 사계절이 뚜렷해요. 와르미아의 기후는 습한 대륙성 기후로, 여름은 따뜻하고 겨울은 추워요. 양쪽 
   184.13s  <ret> 발화 (turn29 첫 프레임)
   184.13s  user  발화 끝
   184.69s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.89s]: Warmia has a humid continental climate with warm summers and cold wint
   193.56s  user  발화 시작: 습한 대륙성 기후… 그럼 눈이 많이 오나요?
   193.56s  agent 발화 끝
   197.96s  agent 발화 시작: <ret> 정말 많이 와요. 올슈틴은 연간 평균 125센티미터의 적설량을 기록하고 있어요. 제대로 된 겨울 
   197.96s  <ret> 발화 (turn31 첫 프레임)
   197.96s  user  발화 끝
   198.96s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.51s]: Average annual snowfall in Olsztyn is 125 centimeters.
   206.75s  user  발화 시작: 125센티미터! 와우. 방문하기 가장 좋은 시기는 언제인가요?
   206.75s  agent 발화 끝
   211.15s  agent 발화 시작: <ret> 그게 성수기예요. 5월부터 9월까지가 마주리 호수 지구를 방문하기 가장 좋은 달로 여겨져요. 날씨
   211.15s  <ret> 발화 (turn33 첫 프레임)
   211.15s  user  발화 끝
   212.15s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.51s]: The best time to visit the Masurian Lake District is between May and S
   220.58s  user  발화 시작: 5월부터 9월까지. 알아두면 좋겠네요. 와르미아 출신 유명인이 있나요?
   220.58s  agent 발화 끝
   225.61s  agent 발화 시작: <ret> 정말 저명한 인물이에요. 천문학자 니콜라우스 코페르니쿠스는 역사적인 와르미아에 속하는 토룬에서 태
   225.61s  <ret> 발화 (turn35 첫 프레임)
   225.61s  user  발화 끝
   226.57s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.51s]: Nicolaus Copernicus was born in Toruń, located within the historical W
   234.41s  user  발화 시작: 코페르니쿠스! 물론이죠. 흥미롭네요. 사토 박사님, 감사합니다.
   234.41s  agent 발화 끝
   238.18s  agent 발화 시작: 천만에요. 이 지역과 그 역사를 논하는 것은 언제나 즐거워요. 정말 매혹적인 곳이죠.
   238.18s  user  발화 끝
   245.72s  agent 발화 끝
