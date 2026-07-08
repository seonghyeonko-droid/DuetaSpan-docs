# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안녕하세요. 옐로스톤이 처음 방영된 시기를 아시나요?
     5.33s  agent 발화 시작: 네, 인기가 많은 드라마죠, 그러시네요. 많은 분들이 물어보시는 것 같아요.
     5.55s  user  발화 끝
    10.94s  agent 발화 끝
    11.29s  user  발화 시작: 네, 첫 화가 언제 방영됐는지 알아보고 싶어서요.
    13.29s  <ret> 발화 (turn3 첫 프레임)
    13.86s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.10s]: The first episode of Yellowstone premiered on June 20, 2018, on the Pa
    13.89s  agent 발화 시작: <ret> 잠시 기억을 더듬어볼게요… 옐로스톤은 파라마운트 네트워크에서 두천십팔년 육월 이십일에 처음 방영되
    13.98s  user  발화 끝
    17.91s  agent 발화 끝
    18.05s  user  발화 시작: 아, 알겠습니다, 육월 이십일이요. 바로 히트를 쳤나요?
    23.79s  user  발화 끝
    23.89s  agent 발화 시작: 네, 빠르게 팬층을 확보했죠. 많은 시청자들에게 공감을 얻었어요.
    29.73s  agent 발화 끝
    29.93s  user  발화 시작: 케빈 코스트너가 연기를 잘한다는 이야기를 들었어요.
    35.61s  agent 발화 시작: 정말 훌륭한 연기를 보여주시는 배우시죠. 베테랑 배우이시니까요.
    35.76s  user  발화 끝
    43.12s  agent 발화 끝
    43.57s  user  발화 시작: 시작할 때 큰 이벤트였나요?
    47.43s  <ret> 발화 (turn9 첫 프레임)
    47.82s  user  발화 끝
    47.91s  ⚡SPAN 주입 [d'=0.48s / d_lead=1.93s]: Yellowstone’s premiere drew 2.82 million viewers, making it the most-w
    48.03s  agent 발화 시작: <ret> 정말 화제가 되었었죠… 옐로스톤 첫 화는 이백팔십이만 명의 시청자를 끌어모았는데, 네트워크 기록이
    53.60s  user  발화 시작: 와, 거의 삼백만 명이나요! 정말 좋네요.
    53.82s  agent 발화 끝
    56.83s  agent 발화 시작: 네, 확실히 상당한 숫자예요. 관심도가 높다는 것을 보여주는 지표죠.
    57.01s  user  발화 끝
    62.94s  agent 발화 끝
    63.33s  user  발화 시작: 그러니까, 두천십팔년 육월 이십일… 그리고 많은 사람들이 봤고요.
    68.52s  agent 발화 시작: 네, 맞아요. 시리즈의 기억에 남는 데뷔였죠.
    68.65s  user  발화 끝
    72.87s  agent 발화 끝
    73.18s  user  발화 시작: 하하, 저는 항상 이런 것들을 놓치는 것 같아요.
    77.02s  user  발화 끝
    77.19s  agent 발화 시작: 일어나는 일들을 놓치기 쉬워요. 인생은 빠르게 흘러가니까요, 그렇죠?
    84.74s  agent 발화 끝
    85.54s  user  발화 시작: 지금은 어떤 네트워크에서 방송하나요? 여전히 파라마운트인가요?
    88.07s  <ret> 발화 (turn17 첫 프레임)
    88.47s  ⚡SPAN 주입 [d'=0.40s / d_lead=1.34s]: Yellowstone currently airs on the Paramount Network and streams on Pea
    88.67s  agent 발화 시작: <ret> 여전히 파라마운트에서 방송하고 있어요… 옐로스톤은 현재 파라마운트 네트워크와 피콕에서 시청할 수 
    88.77s  user  발화 끝
    92.69s  agent 발화 끝
    94.83s  user  발화 시작: 알겠습니다, 스트리밍으로 볼 수 있군요. 좋은 정보네요.
    98.66s  agent 발화 시작: 편리하죠, 안 그래요? 지금은 따라잡을 수 있는 방법이 많아요.
    98.67s  user  발화 끝
   103.57s  agent 발화 끝
   104.19s  user  발화 시작: 새 시즌이 곧 나오나요?
   105.27s  <ret> 발화 (turn21 첫 프레임)
   105.85s  agent 발화 시작: <ret> 계획은 있어요… 옐로스톤 시즌 다섯의 후반부는 두천이십사년 십일월에 초연될 예정이에요.
   106.03s  user  발화 끝
   106.27s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.59s]: The second part of Yellowstone’s fifth season is scheduled to premiere
   111.03s  agent 발화 끝
   111.40s  user  발화 시작: 두천이십사년 십일월… 좋아요, 그때까지 따라잡을 시간이 있겠네요.
   115.73s  agent 발화 시작: 준비할 시간이 충분해요. 시리즈가 꽤 길죠.
   115.84s  user  발화 끝
   122.12s  agent 발화 끝
   123.49s  user  발화 시작: 촬영하는 곳이 흥미로운 곳인가요?
   125.97s  <ret> 발화 (turn25 첫 프레임)
   125.97s  ⚡SPAN 주입 [d'=0.00s / d_lead=2.89s]: Yellowstone is primarily filmed in Montana, with additional scenes sho
   126.56s  agent 발화 시작: <ret> 경치가 꽤 멋져요… 옐로스톤은 주로 몬태나에서 촬영하고, 유타와 캐나다에서도 촬영해요.
   126.73s  user  발화 끝
   132.34s  agent 발화 끝
   134.54s  user  발화 시작: 몬태나라고요? 아름다운 곳이라고 들었어요.
   139.41s  user  발화 끝
   139.68s  agent 발화 시작: 네, 험하고 아름다운 풍경이에요. 옛날 성당에서 사용했던 돌들을 떠올리게 해요.
   148.30s  agent 발화 끝
   148.59s  user  발화 시작: 정말요? 어떻게 그렇게 생각하세요?
   152.84s  agent 발화 시작: 암석층이 드러나는 방식, 엄청난 규모… 우리가 수세기 전에 사용했던 채석장과 비슷한 느낌이 있어요.
   152.99s  user  발화 끝
   157.79s  agent 발화 끝
   157.85s  user  발화 시작: 멋진 연결고리네요. 정보 감사합니다!
   161.70s  agent 발화 시작: 도움이 되었다니 기쁘네요. 여러 가지 것들 사이의 연결고리를 찾는 것은 좋은 일이죠, 안 그래요?
   161.83s  user  발화 끝
   165.49s  agent 발화 끝
