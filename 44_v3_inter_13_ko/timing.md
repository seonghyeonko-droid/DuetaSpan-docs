# v3_inter_13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 야, moshi, 랭커셔에 있는 옛 공업 도시들에 대해 아는 거 있어?
     5.11s  agent 발화 시작: 어, 랭커셔는 역사가 깊지? 옛날에 활기 넘치는 곳들이 많았어.
     5.11s  user  발화 끝
     9.29s  user  발화 시작: 그래, 하나에 대해 읽고 있었는데—음—남쪽 어딘가에 있었던 것 같아, 면화 산업이 큰 곳이었어?
     9.29s  agent 발화 끝
    15.33s  agent 발화 시작: <ret> 남쪽 랭커셔라고? 잠깐만 찾아볼게… 그건 좀 Chorley 같은데.
    15.33s  <ret> 발화 (turn3 첫 프레임)
    15.33s  user  발화 끝
    16.33s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.72s]: Chorley was a significant centre for the cotton industry during the In
    19.05s  agent 발화 시작: Chorley는 산업 혁명 때 면화 산업의 주요 도시였어. 그때 엄청 번성했지.
    19.05s  agent 발화 끝
    24.16s  user  발화 시작: Chorley, 그렇지. 이름은 들어본 것 같아. 지금은 어떤 곳이야?
    24.16s  agent 발화 끝
    28.34s  agent 발화 시작: 지금은 많이 달라졌어, 시장 도시 같은 느낌이야. 그래도 방문할 만한 곳이야.
    28.34s  user  발화 끝
    33.45s  user  발화 시작: Preston 근처야?
    33.45s  agent 발화 끝
    34.38s  agent 발화 시작: 응, 그래. 사실 Preston 북쪽에 있어, 약 6마일 정도 떨어져 있어.
    34.38s  user  발화 끝
    39.48s  user  발화 시작: 6마일, 알았어. 옛 공장이나 그런 게 볼 만한 게 있을까 해서.
    39.48s  agent 발화 끝
    44.59s  agent 발화 시작: 몇몇 흔적은 남아 있지. 내가 밤에 언덕에서 내려다본 적이 있는데—[chuckle]—별 보기에도 좋은 곳이야
    44.59s  user  발화 끝
    50.63s  user  발화 시작: 별 보기? 천문학에 관심이 있네?
    50.63s  agent 발화 끝
    52.96s  agent 발화 시작: 그렇지, 내 열정이야. 몇 년 동안 밤하늘을 관측하면서 가장 희미한 은하를 찾으려고 노력했어.
    52.96s  user  발화 끝
    59.00s  user  발화 시작: 와, 멋있다. 음, 다시 Chorley로 돌아가서—어떤 종류의 공장이 있었어?
    59.00s  agent 발화 끝
    63.18s  agent 발화 시작: <ret> 음, 꽤 많았어. 잠깐만… 큰 공장들에 대한 내용을 읽었던 게 기억나.
    63.18s  <ret> 발화 (turn14 첫 프레임)
    63.18s  user  발화 끝
    64.18s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.11s]: Several large cotton mills operated in Chorley during the nineteenth c
    68.29s  agent 발화 시작: Harwood Mill이랑 Vale Mill이 19세기 내내 운영되던 큰 공장들이었어. 그 지역 사람들에게 
    68.29s  agent 발화 끝
    74.79s  user  발화 시작: Harwood Mill… 그 이름은 들은 것 같아. 아직도 남아 있어?
    74.79s  agent 발화 끝
    79.43s  agent 발화 시작: 일부는 남아 있어. 지금은 아파트로 개조된 것 같아.
    79.43s  user  발화 끝
    83.15s  user  발화 시작: 아파트, 흐음?
    83.15s  agent 발화 끝
    84.08s  agent 발화 시작: 사실 흔한 일이야, 옛 구조물을 재활용하는 거—
    84.08s  user  발화 끝
    87.33s  user  발화 시작: 잠깐만, 잠깐. 호텔에 대해 궁금해.
    87.33s  agent 발화 끝
    89.65s  agent 발화 시작: 아! 호텔. 알았어. 좀 이야기가 바뀌었네.
    89.65s  user  발화 끝
    92.44s  user  발화 시작: 미안, 그래. Chorley 근처에 좋은 호텔이 있는지 알아?
    92.44s  agent 발화 끝
    96.16s  agent 발화 시작: <ret> Chorley 근처? 잠깐만 보자… 원하는 게 뭐냐에 따라 여러 옵션이 있어.
    96.16s  <ret> 발화 (turn23 첫 프레임)
    96.16s  user  발화 끝
    97.16s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.11s]: The Mercure Preston Samlesbury Hotel is located approximately four mil
   101.27s  agent 발화 시작: Mercure Preston Samlesbury Hotel이 Chorley 중심에서 약 4마일 떨어져 있어.
   101.27s  agent 발화 끝
   107.77s  user  발화 시작: 4마일… 그 근처는 좋은 곳이야?
   107.77s  agent 발화 끝
   110.09s  agent 발화 시작: 응, 좋아. Samlesbury Hall이 근처에 있는데, 아름다운 저택이고 역사도 흥미로워.
   110.09s  user  발화 끝
   114.74s  user  발화 시작: 저택이라… 재밌겠는데. 아까 말했던 호텔 기억나? Mercure?
   114.74s  agent 발화 끝
   117.99s  agent 발화 시작: Mercure, 응. 레스토랑에 대한 좋은 평가를 자주 받아.
   117.99s  user  발화 끝
   121.71s  user  발화 시작: 알아둬야겠다. 그 호텔을 한번 알아봐야겠어. 고마워, moshi.
   121.71s  agent 발화 끝
   124.96s  agent 발화 시작: 천만에. 랭커셔의 역사에 대해 이야기하는 것도 좋고, 여행 계획을 세우는 것도 물론 즐거워.
   124.96s  user  발화 끝
   131.00s  agent 발화 끝
