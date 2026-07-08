# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 해리 포터 책이 처음 언제 나왔는지 궁금했어.
     2.95s  agent 발화 시작: 정말 많이들 물어보시는 질문이에요.
     3.10s  user  발화 끝
     5.43s  <ret> 발화 (turn2 첫 프레임)
     5.74s  agent 발화 시작: <ret> 제가 한번 찾아볼까요— 처음 영국에서 천구백구십칠년 칠월 이십육일에 출판됐어요.
     5.81s  agent 발화 끝
     6.71s  ⚡SPAN 주입 [d'=1.28s / d_lead=4.29s]: Harry Potter and the Philosopher's Stone was first published in the Un
    12.18s  agent 발화 끝
    12.21s  user  발화 시작: 음, 그렇긴 한데 미국에서는 훨씬 나중에 나온 것 같아. 맞을까?
    17.03s  agent 발화 시작: 네, 질문하신 게 맞아요.
    17.26s  user  발화 끝
    18.59s  <ret> 발화 (turn5 첫 프레임)
    18.74s  agent 발화 시작: <ret> 구분하는 게 중요해요— 미국에서는 천구백구십팔년 구월 일일에 처음 출판됐어요.
    18.82s  agent 발화 끝
    19.55s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.39s]: Harry Potter and the Sorcerer's Stone was first published in the Unite
    24.11s  agent 발화 끝
    25.14s  user  발화 시작: 구월 일일… 꽤 차이가 나네, 그렇지? 거의 일 년이나!
    28.81s  agent 발화 시작: 네, 꽤 큰 차이예요. 출판 일정은 꽤 복잡할 수 있어요.
    28.93s  user  발화 끝
    32.74s  <ret> 발화 (turn8 첫 프레임)
    32.88s  agent 발화 시작: <ret> 차이점을 설명해 드릴게요— 스콜라스틱 코퍼레이션이 천구백구십칠년에 미국에서 이 시리즈를 출판할 권
    33.11s  agent 발화 끝
    34.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.38s]: Scholastic Corporation acquired the US rights to publish the Harry Pot
    41.00s  agent 발화 끝
    41.51s  user  발화 시작: 스콜라스틱이 일 년 동안 가지고 있다가 출시했어? 왜 그렇게 시간이 걸렸어?
    45.92s  agent 발화 시작: 여러 가지 고려 사항이 있었던 것 같아요.
    45.99s  user  발화 끝
    47.80s  <ret> 발화 (turn11 첫 프레임)
    48.19s  agent 발화 시작: <ret> 준비가 필요했어요— 스콜라스틱은 미국 시장을 위해 책을 일 년 동안 재편집하고 제목을 변경했어요.
    48.23s  agent 발화 끝
    48.92s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.34s]: Scholastic spent a year re-editing and re-titling the book for the Ame
    55.79s  agent 발화 끝
    55.79s  user  발화 시작: 제목을 바꿨다고? 제목을 뭘로 바꿨어?
    58.79s  agent 발화 시작: 실제로 꽤 큰 변화였어요.
    58.83s  user  발화 끝
    60.73s  <ret> 발화 (turn14 첫 프레임)
    60.88s  agent 발화 시작: <ret> 미국판은— 제목이 미국 독자들을 위해 “해리 포터와 마법사의 돌”로 변경됐어요.
    61.06s  agent 발화 끝
    61.23s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.01s]: "Harry Potter and the Philosopher's Stone" was changed to "Harry Potte
    67.08s  user  발화 시작: 마법사 대신 철학자… 흥미롭네. 미국 아이들은 “철학자”라는 단어를 이해하지 못할 거라고 생각한 거야?
    67.60s  agent 발화 끝
    73.96s  agent 발화 시작: 주로 마케팅 결정이었어요—
    74.17s  user  발화 끝
    75.89s  <ret> 발화 (turn17 첫 프레임)
    76.28s  agent 발화 시작: <ret> 출판사들은— 스콜라스틱은 “마법사”가 “철학자”보다 미국 아이들에게 더 어필할 것이라고 생각했어요
    76.36s  agent 발화 끝
    76.85s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.04s]: Scholastic thought "sorcerer" would appeal more to American children t
    83.10s  agent 발화 끝
    83.98s  user  발화 시작: 그럴 수도 있겠네. 그럼 첫 번째 책 이후로는—
    87.08s  user  발화 끝
    87.13s  agent 발화 시작: 처음 성공한 이후로는—
    88.71s  <ret> 발화 (turn20 첫 프레임)
    89.11s  agent 발화 시작: <ret> 이후 출판물은— 이후 책들은 양국에서 거의 동시에 출판됐어요.
    89.20s  agent 발화 끝
    89.35s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.73s]: Subsequent books in the series were published in both the UK and US ne
    93.73s  agent 발화 끝
    94.44s  user  발화 시작: 거의? 그럼 그때도 약간의 지연이 있었던 거야?
    97.11s  user  발화 끝
    97.14s  agent 발화 시작: 간혹 사소한 차이가 있었어요—
    99.18s  <ret> 발화 (turn23 첫 프레임)
    99.49s  agent 발화 시작: <ret> 흔한 일은 아니에요— 배송 및 유통 물류로 인해 약간의 출판일 차이가 발생했어요.
    99.58s  agent 발화 끝
   100.62s  ⚡SPAN 주입 [d'=1.44s / d_lead=1.53s]: Minor publication date differences occurred due to shipping and distri
   105.39s  user  발화 시작: 그래, 배송은 이해가 돼. 그게 열풍에 영향을 미쳤을까…—
   105.61s  agent 발화 끝
   109.50s  agent 발화 시작: 그럴 수도 있어요—
   109.59s  user  발화 끝
   110.40s  <ret> 발화 (turn26 첫 프레임)
   110.79s  agent 발화 시작: <ret> 기대감은— 처음 지연으로 인해 첫 번째 책에 대한 상당한 기대감과 수요가 생겼어요.
   110.87s  agent 발화 끝
   110.96s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.47s]: The initial delay created significant anticipation and demand for the 
   116.66s  agent 발화 끝
   117.74s  user  발화 시작: 그런데 J.K. 롤링은 이런 모든 것, 변화와 지연에 대해 알고 있었을까?
   122.89s  agent 발화 시작: 물론이죠—
   123.06s  user  발화 끝
   124.01s  <ret> 발화 (turn29 첫 프레임)
   124.39s  agent 발화 시작: <ret> 그녀는 확실히— J.K. 롤링은 제목 변경에 대해 상의했고 미국 과정에 참여했어요.
   124.63s  agent 발화 끝
   125.29s  ⚡SPAN 주입 [d'=1.28s / d_lead=1.78s]: J.K. Rowling was consulted on the title change and remained involved i
   130.89s  user  발화 시작: 그녀도 어느 정도 말할 권리가 있었다니 다행이네. 그럼 “마법사의 돌” 버전이 대부분의 미국인들이 자라면서 
   130.93s  agent 발화 끝
   139.03s  agent 발화 시작: 맞아요. 그 버전이 여기서 상징이 되었어요.
   139.13s  user  발화 끝
   142.26s  <ret> 발화 (turn32 첫 프레임)
   142.49s  agent 발화 시작: <ret> 바로 그 판본— “해리 포터와 마법사의 돌”은 대부분의 미국 독자들에게 결정적인 판본이 되었어요.
   142.59s  agent 발화 끝
   143.22s  ⚡SPAN 주입 [d'=0.96s / d_lead=1.62s]: "Harry Potter and the Sorcerer's Stone" became the defining edition fo
   149.53s  agent 발화 끝
