# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안녕하세요. 뒤플레시 가족에 대해 읽다가 그 이름이 어디에서 유래했는지 궁금해졌어요. 뭔가… 프랑스어 같은 
     7.50s  <ret> 발화 (turn1 첫 프레임)
     7.66s  agent 발화 시작: <ret> 아, 정말 흥미로운 질문이시네요. 가족 이름을 추적하면 많은 역사를 알 수 있거든요.
     7.88s  user  발화 끝
     9.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.46s]: The surname Du Plessis is of French origin, meaning "of the Plessis," 
    13.09s  agent 발화 시작: 뒤플레시라는 이름은 프랑스에서 유래했는데, '플레시'라는 장소에서 온 사람을 의미한다고 해요.
    13.12s  agent 발화 끝
    19.16s  agent 발화 끝
    20.73s  user  발화 시작: 아, 정말 프랑스어군요! 그럼 '플레시'라는 곳이 여러 군데 있나요?
    23.72s  <ret> 발화 (turn4 첫 프레임)
    24.04s  agent 발화 시작: <ret> 네, 실제로 프랑스에 그 이름을 가진 여러 곳이 있어서 성씨로 널리 퍼지게 되었어요.
    24.20s  user  발화 끝
    25.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: There are numerous places in France named Plessis, including Plessis-l
    29.76s  agent 발화 시작: 프랑스에는 플레시-레-투르, 플레시-피케, 플레시-플뤼슈 같은 곳들이 있어요.
    29.83s  agent 발화 끝
    35.28s  user  발화 시작: 정말 흥미롭네요. 그런 곳들에 대해 들어본 적이 없어요. 그런데 그 이름이 어떻게 남아프리카로 가게 된 거죠
    35.32s  agent 발화 끝
    41.15s  <ret> 발화 (turn7 첫 프레임)
    41.30s  user  발화 끝
    41.31s  agent 발화 시작: <ret> 다음으로 궁금해하실 만한 질문이네요. 이주 패턴이 성씨의 분포를 설명해주는 경우가 많아요.
    43.07s  ⚡SPAN 주입 [d'=1.92s / d_lead=5.56s]: The Du Plessis name arrived in South Africa with French Huguenots who 
    46.87s  agent 발화 끝
    46.91s  agent 발화 시작: 뒤플레시라는 이름은 17세기에 프랑스 위그노들이 남아프리카로 가져왔어요.
    51.82s  agent 발화 끝
    52.05s  user  발화 시작: 위그노… 맞아요, 개신교도들이었죠. 종교적인 문제 때문에 도망쳤던 건가요?
    56.46s  <ret> 발화 (turn10 첫 프레임)
    56.78s  agent 발화 시작: <ret> 네, 정확해요. 그들은 네덜란드 케이프 식민지를 포함한 여러 나라에서 피난처를 찾았어요.
    56.95s  user  발화 끝
    57.98s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.37s]: Many Huguenots settled in the Dutch Cape Colony after being granted pe
    62.15s  agent 발화 끝
    62.27s  agent 발화 시작: 위그노들은 네덜란드 동인도 회사의 허가를 받아 네덜란드 케이프 식민지에 정착했어요.
    67.54s  agent 발화 끝
    67.63s  user  발화 시작: 네덜란드 사람들은 그들이 오는 것을 허락했다고요? 그건… 놀랍네요.
    72.42s  <ret> 발화 (turn13 첫 프레임)
    72.54s  user  발화 끝
    72.58s  agent 발화 시작: <ret> 네덜란드 사람들은 실용적인 면이 있었고, 식민지를 강화하기 위해 숙련된 노동자와 농부들을 필요로 
    74.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.00s]: The Dutch East India Company encouraged Huguenot immigration to streng
    79.56s  agent 발화 시작: 네덜란드 동인도 회사는 식민지의 경제와 노동력을 개선하기 위해 위그노들을 원했어요.
    79.57s  agent 발화 끝
    85.04s  user  발화 시작: 그렇군요, 이해가 돼요. 뒤플레시 가족은 남아프리카에서 중요한 역할을 했나요?
    85.11s  agent 발화 끝
    90.06s  <ret> 발화 (turn16 첫 프레임)
    90.37s  user  발화 끝
    90.38s  agent 발화 시작: <ret> 네, 시간이 지나면서 가족의 일부 지파는 꽤 영향력이 커졌어요.
    92.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.39s]: The Du Plessis family became influential in South Africa, holding posi
    94.73s  agent 발화 시작: 뒤플레시 가족은 남아프리카에서 정부, 군대, 농업 분야에서 영향력을 행사했어요.
    94.77s  agent 발화 끝
    99.46s  agent 발화 끝
    99.52s  user  발화 시작: 그들은 어떤 직책을 맡았나요?
   101.46s  user  발화 끝
   101.65s  agent 발화 시작: 좋은 질문이세요… 그들의 역할을 알아볼까요…
   104.79s  agent 발화 끝
   104.96s  user  발화 시작: 정확히 말해서, 장군이나 총독 같은 사람들이었나요?
   107.86s  <ret> 발화 (turn21 첫 프레임)
   108.02s  agent 발화 시작: <ret> 네, 물론이죠. 뒤플레시 가족의 여러 구성원들이 중요한 행정 및 군사 직책을 맡았어요.
   108.20s  user  발화 끝
   109.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.74s]: Willem Adolf Du Plessis was a prominent South African politician and s
   113.76s  agent 발화 끝
   113.86s  agent 발화 시작: 빌렘 아돌프 뒤플레시는 정치인이었고 케이프 입법 의회에서 활동했어요.
   118.16s  agent 발화 끝
   118.22s  user  발화 시작: 아, 정치인이군요. 흥미롭네요. 보어 전쟁에 뒤플레시가 참여했나요?
   122.47s  <ret> 발화 (turn24 첫 프레임)
   122.71s  agent 발화 시작: <ret> 네, 물론이죠. 여러 뒤플레시들이 보어 측에서 그 전쟁에 참전했어요.
   122.89s  user  발화 끝
   124.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.67s]: General Johannes Petrus Du Plessis led Boer forces during the Second B
   127.39s  agent 발화 끝
   127.47s  agent 발화 시작: 요하네스 페트루스 뒤플레시는 제2차 보어 전쟁 중에 보어군을 이끌었어요.
   132.11s  agent 발화 끝
   132.50s  user  발화 시작: 장군이었군요, 와우. 그들은 정말 강력한 가족이 되었군요.
   136.84s  <ret> 발화 (turn27 첫 프레임)
   136.85s  user  발화 끝
   136.91s  agent 발화 시작: <ret> 그들의 영향력은 군사 및 정치 분야를 넘어 토지 소유권으로도 확장되었어요.
   138.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.62s]: The Du Plessis family accumulated substantial land holdings in the Wes
   141.53s  agent 발화 끝
   141.59s  agent 발화 시작: 뒤플레시 가족은 남아프리카에서 상당한 토지를 획득했어요.
   145.70s  agent 발화 끝
   146.66s  user  발화 시작: 오늘날 남아프리카에는 뒤플레시 가족이 많이 남아 있나요?
   149.58s  <ret> 발화 (turn30 첫 프레임)
   149.90s  agent 발화 시작: <ret> 네, 그 이름은 남아프리카 전역에서 비교적 흔하게 사용되고 있어요.
   150.03s  user  발화 끝
   151.42s  ⚡SPAN 주입 [d'=1.84s / d_lead=4.03s]: Du Plessis ranks among the most frequently occurring surnames in South
   153.85s  agent 발화 시작: 뒤플레시는 오늘날 남아프리카에서 흔한 성씨예요.
   153.93s  agent 발화 끝
   156.83s  user  발화 시작: 정말 놀랍네요. 그렇게 먼 거리를 여행하고도 그 힘을 유지한 이름이라니.
   157.09s  agent 발화 끝
   161.44s  <ret> 발화 (turn33 첫 프레임)
   161.76s  agent 발화 시작: <ret> 그것은 그들의 회복력과 적응력을 보여주는 증거이며, 디아스포라 역사의 일반적인 이야기예요.
   161.82s  user  발화 끝
   163.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.69s]: The continued presence of the Du Plessis name reflects the Huguenots’ 
   167.45s  agent 발화 시작: 뒤플레시 이름의 생존은 위그노들이 남아프리카 사회에 통합된 것을 보여줘요.
   167.46s  agent 발화 끝
   172.58s  agent 발화 끝
   173.84s  user  발화 시작: 저… 그러니까, 프랑스의 지명이 남아프리카의 가족을 정의하게 된 건 정말 놀라운 일이에요.
   179.56s  <ret> 발화 (turn36 첫 프레임)
   179.67s  user  발화 끝
   179.72s  agent 발화 시작: <ret> 네, 그렇습니다. 세계 역사가 얼마나 깊이 얽혀 있는지 상기시켜주는 강력한 사례예요.
   180.06s  ⚡SPAN 주입 [d'=0.50s / d_lead=5.14s]: The journey of the Du Plessis name exemplifies the complex connections
   184.86s  agent 발화 끝
   184.96s  agent 발화 시작: 뒤플레시 이름은 유럽과 아프리카 역사의 연결성을 보여줍니다.
   188.75s  agent 발화 끝
