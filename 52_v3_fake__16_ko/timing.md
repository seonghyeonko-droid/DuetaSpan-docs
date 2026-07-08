# v3_fake__16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 워싱턴 D.C. 지역번호가 어떻게 되나요?
     6.25s  <ret> 발화 (turn1 첫 프레임)
     6.33s  ⚡SPAN 주입 [d'=0.08s / d_lead=4.32s]: Washington, D.C.’s area code is 202.
     6.81s  user  발화 끝
     6.83s  agent 발화 시작: <ret> 네, 간단하네요. 워싱턴 D.C.의 지역번호는 202입니다.
    13.31s  agent 발화 끝
    13.41s  user  발화 시작: 아, 그렇군요. 그럼 뉴욕은요?
    14.84s  <ret> 발화 (turn3 첫 프레임)
    15.16s  ⚡SPAN 주입 [d'=0.32s / d_lead=0.83s]: New York City has area codes 212, 646, 347, 718, 917, and 332.
    15.43s  agent 발화 시작: <ret> 음, 뉴욕은 조금 달라요. 뉴욕 시는 여러 개의 지역번호를 사용하는데, 212, 646, 347,
    15.53s  user  발화 끝
    17.76s  user  발화 시작: 와, 엄청 많네요! 그렇게 많은 이유가 있나요?
    17.78s  agent 발화 끝
    20.98s  user  발화 끝
    21.21s  agent 발화 시작: 주로 인구 증가 때문이에요. 도시가 커지면서 더 많은 번호가 필요했답니다.
    26.41s  user  발화 시작: 아, 그렇군요. 음, 호주의 수도는 어디인가요?
    26.63s  agent 발화 끝
    29.90s  <ret> 발화 (turn7 첫 프레임)
    30.48s  agent 발화 시작: <ret> 재미있는 질문이네요. 호주의 수도는 캔버라인데, 1913년에 세워졌습니다.
    30.66s  user  발화 끝
    30.90s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.11s]: Canberra is the capital city of Australia.
    33.06s  agent 발화 끝
    33.50s  user  발화 시작: 흥미롭네요. 캔버라의 인구는 얼마나 되나요?
    37.29s  <ret> 발화 (turn9 첫 프레임)
    37.88s  agent 발화 시작: <ret> 잠시만요, 확인해 볼게요. 캔버라의 2023년 기준 예상 인구는 46만 2,770명입니다.
    38.08s  user  발화 끝
    38.29s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.11s]: The estimated population of Canberra is 462,770 as of 2023.
    41.23s  user  발화 시작: 생각보다 작네요. 호주에서 가장 큰 도시는 어디인가요?
    41.40s  agent 발화 끝
    46.44s  <ret> 발화 (turn11 첫 프레임)
    46.88s  user  발화 끝
    47.03s  agent 발화 시작: <ret> 그건 시드니입니다. 시드니는 호주에서 인구가 가장 많은 도시로, 530만 1,200명의 주민이 살
    47.44s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.60s]: Sydney is the most populous city in Australia, with 5.312 million resi
    55.47s  agent 발화 끝
    55.74s  user  발화 시작: 500만 명… 굉장하네요. 음, 일본에서 사용하는 화폐는 무엇인가요?
    61.53s  <ret> 발화 (turn13 첫 프레임)
    62.13s  agent 발화 시작: <ret> 아주 실용적인 질문이네요. 일본의 화폐는 일본 엔입니다.
    62.27s  user  발화 끝
    62.49s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.46s]: The currency used in Japan is the Japanese yen.
    66.43s  user  발화 시작: 그걸 어떻게 쓰나요? 예를 들어 기호는 뭔가요?
    66.43s  agent 발화 끝
    69.93s  <ret> 발화 (turn15 첫 프레임)
    70.50s  user  발화 끝
    70.52s  agent 발화 시작: <ret> 꽤 간단해요. 일본 엔의 기호는 엔화 표시(¥)이고, ISO 코드는 JPY입니다.
    70.93s  ⚡SPAN 주입(IRRELEVANT) [d'=1.00s / d_lead=2.59s]: (tool result) Current time in Honolulu is 8:15 PM HST.
    77.00s  agent 발화 끝
    78.73s  user  발화 시작: 알겠습니다, ¥. 알아두면 좋겠네요. 아프리카에서 가장 높은 산은 무엇인가요?
    84.48s  <ret> 발화 (turn17 첫 프레임)
    84.99s  user  발화 끝
    85.07s  agent 발화 시작: <ret> 정말 웅장한 봉우리네요. 아프리카에서 가장 높은 산은 킬리만자로산인데, 높이가 5,895미터에 달
    85.48s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.54s]: The Japanese yen’s symbol is ¥, and its ISO code is JPY.
    94.76s  user  발화 시작: 와, 정말 높네요. 화산인가요?
    94.80s  agent 발화 끝
    97.82s  <ret> 발화 (turn19 첫 프레임)
    97.90s  ⚡SPAN 주입 [d'=0.08s / d_lead=1.51s]: Mount Kilimanjaro is the highest mountain in Africa, at 5,895 meters.
    98.42s  agent 발화 시작: <ret> 네, 휴화산입니다.
    98.46s  user  발화 끝
    99.93s  agent 발화 끝
   101.56s  user  발화 시작: 아! 그럼 세계에서 가장 긴 강은 무엇인가요?
   105.07s  <ret> 발화 (turn21 첫 프레임)
   105.54s  user  발화 끝
   105.66s  agent 발화 시작: <ret> 그건 고전적인 지리 문제네요. 나일강이 지구상에서 가장 긴 강으로 여겨집니다.
   106.07s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.13s]: The Nile River is generally regarded as the longest river in the world
   111.92s  agent 발화 끝
   112.02s  user  발화 시작: 나일강은 어디를 흐르나요?
   113.92s  <ret> 발화 (turn23 첫 프레임)
   114.51s  agent 발화 시작: <ret> 여러 나라를 흐릅니다. 나일강은 이집트와 수단 등을 포함한 11개국을 흐릅니다.
   114.69s  user  발화 끝
   114.92s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.59s]: The Nile flows through eleven countries, including Egypt and Sudan.
   121.69s  agent 발화 끝
   122.85s  user  발화 시작: 11개국이나! 정말 놀랍네요. 세계에서 가장 작은 나라는 어디인가요?
   128.60s  <ret> 발화 (turn25 첫 프레임)
   129.19s  agent 발화 시작: <ret> 정말 작은 곳이에요. 바티칸 시국이 세계에서 가장 작은 나라인데, 면적이 0.44제곱킬로미터입니다
   129.34s  user  발화 끝
   129.60s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.83s]: Vatican City is the smallest country in the world, covering 0.44 squar
   137.62s  agent 발화 끝
