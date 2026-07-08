# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 저도 옐로스톤이 언제 처음 방영됐는지 궁금하네요.
     6.95s  user  발화 끝
     7.37s  agent 발화 시작: 정말 인기 있는 드라마죠, 그렇죠? 많은 분들이 물어보시는 것 같아요.
    13.21s  agent 발화 끝
    13.28s  user  발화 시작: 네, 첫 화가 언제 나왔는지 알아보고 싶어서요.
    15.85s  <ret> 발화 (turn3 첫 프레임)
    16.01s  ⚡SPAN 주입 [d'=0.16s / d_lead=1.24s]: The first episode of Yellowstone premiered on June 20, 2018, on the Pa
    16.45s  agent 발화 시작: <ret> 잠시 찾아볼게요… 옐로스톤은 파라마운트 네트워크에서 두 천십팔년 여섯월 스무 날에 처음 방영됐습니
    16.52s  user  발화 끝
    21.41s  agent 발화 끝
    21.68s  user  발화 시작: 아, 알겠습니다, 여섯월 스무 날이군요. 바로 히트를 쳤나요?
    26.68s  user  발화 끝
    26.86s  agent 발화 시작: 빠르게 팬층을 확보했죠, 네. 많은 시청자들에게 어필했던 것 같아요.
    34.17s  agent 발화 끝
    34.50s  user  발화 시작: 케빈 코스트너가 연기를 잘한다고 들었어요.
    38.32s  agent 발화 시작: 정말 훌륭한 연기력을 보여주시는 배우시죠. 베테랑 배우시니까요.
    38.52s  user  발화 끝
    45.88s  agent 발화 끝
    46.63s  user  발화 시작: 처음 시작했을 때 큰 이벤트였나요?
    50.86s  <ret> 발화 (turn9 첫 프레임)
    51.44s  user  발화 끝
    51.46s  agent 발화 시작: <ret> 정말 화제가 됐었죠… 옐로스톤 첫 화는 이백팔십이만 명의 시청자를 끌어모았는데, 네트워크 기록이라
    51.86s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.88s]: Yellowstone’s premiere drew 2.82 million viewers, making it the most-w
    57.55s  user  발화 시작: 와, 거의 삼백만 명이나요! 정말 대단하네요.
    57.58s  agent 발화 끝
    60.94s  agent 발화 시작: 정말 의미 있는 숫자네요. 관심도가 높다는 것을 보여주는 지표죠.
    60.97s  user  발화 끝
    67.70s  agent 발화 끝
    68.87s  user  발화 시작: 그렇군요, 두 천십팔년 여섯월 스무 날… 그리고 많은 사람들이 봤고요.
    73.59s  agent 발화 시작: 맞습니다. 시리즈의 기억에 남는 데뷔였죠.
    73.63s  user  발화 끝
    78.73s  agent 발화 끝
    78.82s  user  발화 시작: [laugh] 저는 항상 이런 것들을 놓치는 것 같아요.
    83.03s  user  발화 끝
    83.07s  agent 발화 시작: 일어나는 일들을 놓치기 쉬워요. 인생은 빠르게 흘러가니까요, 그렇죠?
    89.19s  agent 발화 끝
    89.43s  user  발화 시작: 지금은 어떤 네트워크에서 방송하나요? 여전히 파라마운트인가요?
    92.16s  <ret> 발화 (turn17 첫 프레임)
    92.76s  agent 발화 시작: <ret> 여전히 파라마운트에서 방송됩니다… 옐로스톤은 현재 파라마운트 네트워크와 피콕에서 시청할 수 있습니
    92.80s  user  발화 끝
    93.16s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.68s]: Yellowstone currently airs on the Paramount Network and streams on Pea
    97.27s  user  발화 시작: 알겠습니다, 스트리밍으로 볼 수 있군요. 좋은 정보네요.
    97.38s  agent 발화 끝
   101.02s  user  발화 끝
   101.44s  agent 발화 시작: 편리하죠, 그렇죠? 지금은 따라잡을 수 있는 방법이 많습니다.
   106.45s  agent 발화 끝
   106.83s  user  발화 시작: 새로운 시즌이 곧 나오나요?
   108.02s  <ret> 발화 (turn21 첫 프레임)
   108.61s  agent 발화 시작: <ret> 계획은 있는 것 같아요… 옐로스톤 다섯 번째 시즌 후반부는 두 천이십사년 십일월에 시작될 예정입니
   108.73s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.94s]: The second part of Yellowstone’s fifth season is scheduled to premiere
   108.80s  user  발화 끝
   114.03s  agent 발화 끝
   114.22s  user  발화 시작: 두 천이십사년 십일월… 좋아요, 그때까지 따라잡을 시간이 있겠네요.
   117.92s  user  발화 끝
   118.00s  agent 발화 시작: 준비할 시간이 충분합니다. 정말 긴 시리즈죠.
   124.82s  agent 발화 끝
   124.87s  user  발화 시작: 촬영하는 곳이 흥미로운 곳인가요?
   127.30s  <ret> 발화 (turn25 첫 프레임)
   127.89s  agent 발화 시작: <ret> 경치가 정말 멋집니다… 옐로스톤은 주로 몬태나에서 촬영하고, 유타와 캐나다에서도 촬영합니다.
   128.06s  user  발화 끝
   128.30s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.87s]: Yellowstone is primarily filmed in Montana, with additional scenes sho
   133.28s  user  발화 시작: 몬태나라고요? 아름다운 곳이라고 들었어요.
   133.63s  agent 발화 끝
   138.40s  agent 발화 시작: 정말 험하고 아름다운 풍경이죠, 네. 옛날 성당에서 사용했던 돌들을 떠올리게 합니다.
   138.47s  user  발화 끝
   147.21s  agent 발화 끝
   147.42s  user  발화 시작: [surprised] 정말요? 어떻게 그렇게 생각하세요?
   151.59s  agent 발화 시작: 암석층이 드러나는 방식, 엄청난 규모… 수세기 전에 사용했던 채석장과 비슷한 느낌이 들어요.
   151.78s  user  발화 끝
   156.75s  user  발화 시작: 멋진 연결고리네요. 정보 감사합니다!
   156.83s  agent 발화 끝
   159.98s  user  발화 끝
   160.18s  agent 발화 시작: 도움이 됐다니 기쁩니다. 여러 가지 것들 사이의 연결고리를 찾는 것은 좋은 일이죠, 그렇죠?
   164.72s  agent 발화 끝
