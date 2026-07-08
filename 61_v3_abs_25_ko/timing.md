# v3_abs_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안녕하세요. 누가 기본적인 가족 계획 자금 지원을 중단하기로 결정했나요?
     4.36s  <ret> 발화 (turn1 첫 프레임)
     4.96s  agent 발화 시작: <ret> 음, 그건 좀 어려운 질문인 것 같아요.
     5.14s  user  발화 끝
     5.32s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.68s]: (no information found)
     7.64s  agent 발화 끝
     7.70s  agent 발화 시작: 자세히 찾아봤는데, 아쉽게도 이용 가능한 기록에는 단일 의사 결정자가 명시되어 있지 않아요. 좀 더 복잡한 
    16.83s  agent 발화 끝
    16.90s  user  발화 시작: 아, 그렇군요. 그럼 아프리카에서 가장 높은 산은 무엇인가요?
    20.17s  <ret> 발화 (turn4 첫 프레임)
    20.77s  agent 발화 시작: <ret> 이제 대답할 수 있는 질문이네요! 탄자니아에 있는 킬리만자로 산은 해발 오천팔백구십오 미터에 달합
    20.93s  user  발화 끝
    21.17s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.91s]: Mount Kilimanjaro, located in Tanzania, is the highest mountain in Afr
    30.83s  agent 발화 끝
    31.06s  user  발화 시작: 오천… 와우. 그 산에 비행기가 추락한 적이 있나요?
    34.91s  <ret> 발화 (turn6 첫 프레임)
    35.51s  agent 발화 시작: <ret> 안타깝게도 네, 사고가 있었습니다. 킬리만자로 산에서 천구백칠십사 년에 비행기 두 대가 추락했어요
    35.69s  user  발화 끝
    35.91s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.58s]: Several aircraft crashes have occurred on Mount Kilimanjaro, including
    45.06s  agent 발화 끝
    45.22s  user  발화 시작: 정말 끔찍하네요. 2000년에 추락한 비행기는 어떤 종류였나요?
    49.60s  <ret> 발화 (turn8 첫 프레임)
    50.19s  agent 발화 시작: <ret> 자세한 내용을 확인해 볼게요. 정밀 항공편은 보잉 737-200이었습니다. 정말 비극적인 인명 피
    50.22s  user  발화 끝
    50.60s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.47s]: The Precision Air flight that crashed in 2000 was a Boeing 737-200.
    59.56s  agent 발화 끝
    60.04s  user  발화 시작: 보잉 737… 저는 그걸 몇 년 동안이나 비행했었어요. 호주의 수도는 어디인가요?
    65.55s  <ret> 발화 (turn10 첫 프레임)
    66.14s  agent 발화 시작: <ret> 주제가 바뀌었네요, 확실히.
    66.15s  user  발화 끝
    66.51s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.07s]: Canberra is the capital city of Australia.
    68.21s  agent 발화 끝
    68.24s  agent 발화 시작: 호주의 수도는 캔버라입니다. 제가 기억하기로 계획 도시였던 걸로 알고 있어요.
    73.70s  agent 발화 끝
    74.29s  user  발화 시작: 계획 도시라고요? 항상 수도였나요?
    76.13s  <ret> 발화 (turn13 첫 프레임)
    76.72s  agent 발화 시작: <ret> 처음부터 그랬던 건 아니에요. 캔버라는 시드니와 멜버른 대신에 천구백팔 년에 타협점을 찾아 선택되
    76.93s  user  발화 끝
    77.13s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.09s]: Sydney and Melbourne were rival candidates for the capital before Canb
    85.85s  user  발화 시작: [laugh] 재미있네요. 일본의 인구는 얼마나 되나요?
    85.98s  agent 발화 끝
    89.48s  <ret> 발화 (turn15 첫 프레임)
    90.08s  agent 발화 시작: <ret> 정말 큰 인구네요. 일본의 인구는 약 1억 2천3백3십만 명입니다. 인구 밀도가 높은 섬나라죠.
    90.29s  user  발화 끝
    90.48s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.41s]: As of 2023, the population of Japan is approximately 123.3 million.
    97.92s  agent 발화 끝
    98.10s  user  발화 시작: 1억… 정말 많은 사람들이네요. 세계에서 가장 긴 강은 무엇인가요?
   102.61s  <ret> 발화 (turn17 첫 프레임)
   103.21s  agent 발화 시작: <ret> 이제 지리적인 도전이네요. 아마존 강은 약 6천9백9십2킬로미터에 달합니다. 저는 그 강 위를 날
   103.29s  user  발화 끝
   103.61s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.65s]: The Amazon River is generally considered the longest river in the worl
   111.77s  user  발화 시작: 6천… 와우. 브라질의 통화는 무엇인가요?
   112.21s  agent 발화 끝
   114.96s  <ret> 발화 (turn19 첫 프레임)
   115.44s  ⚡SPAN 주입 [d'=0.48s / d_lead=1.77s]: The official currency of Brazil is the Brazilian real, abbreviated as 
   115.56s  agent 발화 시작: <ret> 또 좋은 질문이네요. 브라질은 브라질 헤알을 사용하는데, 약칭은 BRL입니다. 환율을 꼭 확인하세
   115.71s  user  발화 끝
   122.65s  agent 발화 끝
   122.76s  user  발화 시작: BRL… 알겠습니다. 세계에서 가장 높은 폭포는 무엇인가요?
   126.12s  <ret> 발화 (turn21 첫 프레임)
   126.72s  agent 발화 시작: <ret> 정말 장관일 거예요. 베네수엘라의 엔젤 폭포는 높이가 979미터입니다. 물보라가 몇 마일이나 뻗어
   126.78s  user  발화 끝
   127.12s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.09s]: Angel Falls in Venezuela is the world’s highest uninterrupted waterfal
   135.98s  agent 발화 끝
   136.16s  user  발화 시작: 9백… 믿을 수 없네요. 세계에서 가장 큰 사막은 무엇인가요?
   141.15s  <ret> 발화 (turn23 첫 프레임)
   141.71s  ⚡SPAN 주입 [d'=0.56s / d_lead=2.86s]: The Antarctic Polar Desert is the largest desert in the world, coverin
   141.74s  agent 발화 시작: <ret> “사막”을 어떻게 정의하느냐에 따라 달라집니다.
   141.81s  user  발화 끝
   144.55s  agent 발화 시작: 남극 극지 사막은 1천4백만 제곱킬로미터에 달합니다. 대부분의 사람들이 생각하는 것과는 다른 차갑고 얼음으로
   144.60s  agent 발화 끝
   154.24s  agent 발화 끝
   154.42s  user  발화 시작: 남극… 놀랍네요. 세계에서 가장 작은 나라는 어디인가요?
   158.27s  <ret> 발화 (turn26 첫 프레임)
   158.68s  user  발화 끝
   158.86s  agent 발화 시작: <ret> 정말 작은 나라네요. 바티칸 시국은 0.44제곱킬로미터입니다. 역사에 깃든 놀라운 곳이죠.
   159.27s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.34s]: Vatican City is the smallest country in the world, with an area of onl
   167.20s  agent 발화 끝
   167.33s  user  발화 시작: 1제곱킬로미터도 안 되네요! 바티칸 시국의 인구는 얼마나 되나요?
   170.94s  <ret> 발화 (turn28 첫 프레임)
   171.54s  agent 발화 시작: <ret> 아시다시피, 인구가 매우 적습니다. 바티칸 시국의 인구는 약 825명입니다. 정말 독특한 공동체죠
   171.73s  user  발화 끝
   171.94s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.65s]: The population of Vatican City is approximately 825 people as of 2019.
   178.98s  user  발화 시작: 8백… 마을 정도네요. 빛의 속도는 얼마인가요?
   179.51s  agent 발화 끝
   182.56s  <ret> 발화 (turn30 첫 프레임)
   182.96s  ⚡SPAN 주입 [d'=0.40s / d_lead=1.42s]: The speed of light in a vacuum is approximately 299,792,458 meters per
   183.15s  user  발화 끝
   183.15s  agent 발화 시작: <ret> 근본적인 상수죠.
   184.38s  agent 발화 시작: 빛은 초당 2억9천9백7십9만2천4백5십8미터의 속도로 이동합니다. 그냥 그 숫자에 익숙해져야 해요.
   184.57s  agent 발화 끝
   192.44s  user  발화 시작: 2억9천9백… 인상적이네요. 타이타닉 호는 언제 침몰했나요?
   192.45s  agent 발화 끝
   196.89s  <ret> 발화 (turn33 첫 프레임)
   197.44s  user  발화 끝
   197.49s  agent 발화 시작: <ret> 오늘날에도 기억되는 비극적인 사건입니다. 타이타닉 호는 천구백십이 년 4월 15일에 침몰했습니다.
   197.89s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.41s]: The Titanic sank in the North Atlantic Ocean on April 15, 1912.
   206.57s  agent 발화 끝
   207.62s  user  발화 시작: 천구백십이 년… 정말 오래됐네요. 캐나다의 수도는 어디인가요?
   211.67s  <ret> 발화 (turn35 첫 프레임)
   212.27s  agent 발화 시작: <ret> 아름다운 도시죠.
   212.39s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.33s]: Ottawa is the capital city of Canada.
   212.44s  user  발화 끝
   213.42s  agent 발화 시작: 캐나다의 수도는 오타와입니다. 저는 그곳을 몇 번 날아본 적이 있는데, 정말 기분 좋은 공항이었어요.
   213.60s  agent 발화 끝
   220.13s  agent 발화 끝
   220.84s  user  발화 시작: 오타와… 흥미롭네요. 세계에서 가장 큰 바다는 무엇인가요?
   224.39s  <ret> 발화 (turn38 첫 프레임)
   224.98s  agent 발화 시작: <ret> 광대한 수역입니다. 태평양은 지구상에서 가장 크고 깊은 바다입니다. 정말 거대한 물이죠.
   225.18s  user  발화 끝
   225.39s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.18s]: The Pacific Ocean is the largest and deepest of Earth’s oceanic divisi
   231.84s  user  발화 시작: 태평양… 당연하네요. 호주의 인구는 얼마나 되나요?
   231.98s  agent 발화 끝
   235.38s  <ret> 발화 (turn40 첫 프레임)
   235.96s  agent 발화 시작: <ret> 계속 성장하는 나라네요. 호주의 인구는 약 2천6백4십만 명입니다. 제가 듣기로는 정말 다양한 나
   236.05s  user  발화 끝
   236.38s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.10s]: As of 2023, the population of Australia is approximately 26.4 million.
   244.63s  agent 발화 끝
   245.34s  user  발화 시작: 2천6백만… 알겠습니다. 고마워요, 모시!
   248.63s  agent 발화 시작: 전혀요. 지식을 공유하거나 이야기라도 해 드릴 수 있어서 기쁩니다.
   248.81s  user  발화 끝
   253.36s  agent 발화 끝
