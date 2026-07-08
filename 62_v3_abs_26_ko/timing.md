# v3_abs_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 봇스완나가 스포츠 사냥으로 막을 수 없다고 주장한 게 뭔지 궁금하시군요.
     4.14s  <ret> 발화 (turn1 첫 프레임)
     4.73s  agent 발화 시작: <ret> 아, 그건 좀 어렵네. 봇스완나가 구체적으로 사냥으로 뭘 막을 수 없다고 주장했는지 찾을 수가 없
     4.90s  user  발화 끝
     5.14s  ⚡SPAN 주입 [d'=1.00s / d_lead=7.83s]: (no information found)
    12.56s  agent 발화 끝
    12.87s  user  발화 시작: 아, 그렇군요. 그럼, “Strange Fruit”는 누가 녹음했나요?
    16.59s  <ret> 발화 (turn3 첫 프레임)
    16.99s  user  발화 끝
    17.18s  agent 발화 시작: <ret> 그 노래는 정말 감동적이네. 빌리 홀리데이가 아벨 미어로폴이 쓴 시를 바탕으로 “Strange F
    17.59s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.93s]: Billie Holiday first recorded "Strange Fruit" in 1939, though it was o
    27.79s  agent 발화 끝
    28.09s  user  발화 시작: 음, 그렇군요. 그럼 루이 암스트롱은 언제 태어났나요?
    31.86s  <ret> 발화 (turn5 첫 프레임)
    32.45s  agent 발화 시작: <ret> 정말 대단한 예술가였지. 루이 암스트롱은 1901년 8월 4일에 뉴올리언스에서 태어났어.
    32.53s  user  발화 끝
    32.86s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.34s]: Louis Armstrong was born on August 4, 1901, in New Orleans, Louisiana.
    39.12s  agent 발화 끝
    39.37s  user  발화 시작: 뉴올리언스, 맞아요. 그는 듀크 엘링턴과 함께 연주한 적이 있나요?
    44.09s  user  발화 끝
    44.09s  agent 발화 시작: 걔네는 수년 동안 같이 무대에 많이 섰어.
    46.51s  user  발화 시작: 아— 그건, 공식적인 녹음이나 투어였나요?
    46.67s  agent 발화 끝
    49.49s  <ret> 발화 (turn9 첫 프레임)
    50.08s  agent 발화 시작: <ret> 좋은 질문인데. 암스트롱과 엘링턴은 1961년에 앨범에서 함께 연주했고, 투어도 같이 했어.
    50.12s  user  발화 끝
    50.49s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.65s]: Louis Armstrong and Duke Ellington performed together on multiple occa
    57.36s  agent 발화 끝
    57.90s  user  발화 시작: 그렇군요, 협업을 했었네요. 알아두니 좋네요. 아프리카에서 가장 높은 산은 뭐예요?
    62.88s  <ret> 발화 (turn11 첫 프레임)
    63.47s  agent 발화 시작: <ret> 지리적인 질문이네. 탄자니아의 킬리만자로 산이 아프리카에서 가장 높은 산이야. 해발 5895미터지
    63.70s  user  발화 끝
    63.88s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.88s]: Mount Kilimanjaro, located in Tanzania, is the highest mountain in Afr
    72.00s  agent 발화 끝
    72.50s  user  발화 시작: 와, 거의 6천 미터네요. [sigh] 북아메리카에서 가장 낮은 지점은 어디인가요?
    77.90s  <ret> 발화 (turn13 첫 프레임)
    78.49s  agent 발화 시작: <ret> 정말 대조적이네. 데스밸리의 배드워터 베이신이 북아메리카에서 가장 낮은 지점인데, 해수면 아래 8
    78.75s  user  발화 끝
    78.90s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.50s]: Badwater Basin in Death Valley, California, is the lowest point in Nor
    86.88s  agent 발화 끝
    86.92s  user  발화 시작: 해수면 아래 86미터라니. 놀랍네요. “별이 빛나는 밤”은 누가 그린 건가요?
    92.33s  <ret> 발화 (turn15 첫 프레임)
    92.92s  agent 발화 시작: <ret> 정말 상징적인 작품이지. 빈센트 반 고흐가 1889년 6월에 프랑스에서 “별이 빛나는 밤”을 그렸
    93.13s  user  발화 끝
    93.33s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.37s]: Vincent van Gogh painted *The Starry Night* in June 1889, while residi
   100.51s  user  발화 시작: 정신병원에 있으면서요. 슬프네요. 찰리 파커는 언제 죽었나요?
   100.61s  agent 발화 끝
   104.81s  <ret> 발화 (turn17 첫 프레임)
   105.41s  agent 발화 시작: <ret> 음악계의 비극적인 손실이었지. 찰리 파커는 1955년 3월 12일에 34세의 나이로 폐렴과 간경변
   105.51s  user  발화 끝
   105.81s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.35s]: Charlie Parker died on March 12, 1955, at the age of thirty-four, from
   114.13s  agent 발화 끝
   115.05s  user  발화 시작: 폐렴과 간경변이라니… 끔찍하네요. 호주의 수도는 어디인가요?
   119.71s  <ret> 발화 (turn19 첫 프레임)
   120.30s  agent 발화 시작: <ret> 흔히 묻는 질문이지. 캔버라는 시드니와 멜버른 간의 분쟁 끝에 1913년에 호주의 수도가 됐어.
   120.47s  user  발화 끝
   120.71s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.67s]: Canberra is the capital city of Australia, officially becoming so in 1
   127.11s  agent 발화 끝
   127.62s  user  발화 시작: 캔버라. 항상 잊어버리네요. 일본의 인구는 얼마나 되나요?
   130.88s  <ret> 발화 (turn21 첫 프레임)
   131.48s  agent 발화 시작: <ret> 인구 밀도가 높은 섬나라네. 일본의 인구는 2023년 기준으로 1억 2570만 명이야.
   131.70s  user  발화 끝
   131.88s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.33s]: The population of Japan is 125.7 million as of 2023, making it the ele
   138.79s  agent 발화 끝
   138.92s  user  발화 시작: 정말 많은 사람들이네요. [laugh] 마일스 데이비스는 무슨 악기를 연주했나요?
   145.40s  user  발화 끝
   145.58s  agent 발화 시작: 이제 내 취향을 말하는 거네.
   147.56s  agent 발화 끝
   147.99s  user  발화 시작: 네! 그 질문을 아는지 궁금했어요.
   150.74s  <ret> 발화 (turn25 첫 프레임)
   151.03s  user  발화 끝
   151.33s  agent 발화 시작: <ret> 내 마음과 가까운 질문이야. 마일스 데이비스는 트럼펫을 연주했고, 재즈에서 정말 중요한 인물이었어
   151.74s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.29s]: Miles Davis was primarily known for playing the trumpet, and he was a 
   159.91s  agent 발화 끝
   160.93s  user  발화 시작: 정말 그랬어요. 고마워요, 모시.
   163.46s  agent 발화 시작: 천만에. 언제나 음악에 대해 이야기하는 걸 좋아해.
   163.51s  user  발화 끝
   167.49s  agent 발화 끝
