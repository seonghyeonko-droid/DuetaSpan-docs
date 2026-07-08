# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 해리 포터 책이 처음 언제 나왔는지 궁금했어.
     2.95s  agent 발화 시작: 정말 많이들 물어보시는 질문이에요.
     3.10s  user  발화 끝
     5.64s  agent 발화 시작: <ret> 제가 한번 찾아볼까요— 처음 영국에서 천구백구십칠년 칠월 이십육일에 출판됐어요.
     5.65s  <ret> 발화 (turn2 첫 프레임)
     5.81s  agent 발화 끝
     8.69s  ⚡SPAN 주입 [d'=3.04s / d_lead=4.29s]: Harry Potter and the Philosopher's Stone was first published in the Un
    12.08s  agent 발화 끝
    14.41s  user  발화 시작: 음, 그렇긴 한데 미국에서는 훨씬 나중에 나온 것 같아. 맞을까?
    19.46s  user  발화 끝
    19.64s  agent 발화 시작: 네, 질문하신 게 맞아요.
    21.42s  agent 발화 시작: <ret> 구분하는 게 중요해요— 미국에서는 천구백구십팔년 구월 일일에 처음 출판됐어요.
    21.43s  <ret> 발화 (turn5 첫 프레임)
    21.43s  agent 발화 끝
    22.39s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.39s]: Harry Potter and the Sorcerer's Stone was first published in the Unite
    26.72s  user  발화 시작: 구월 일일… 꽤 차이가 나네, 그렇지? 거의 일 년이나!
    26.79s  agent 발화 끝
    30.51s  user  발화 끝
    30.69s  agent 발화 시작: 네, 꽤 큰 차이예요. 출판 일정은 꽤 복잡할 수 있어요.
    34.86s  agent 발화 시작: <ret> 차이점을 설명해 드릴게요— 스콜라스틱 코퍼레이션이 천구백구십칠년에 미국에서 이 시리즈를 출판할 권
    34.87s  <ret> 발화 (turn8 첫 프레임)
    34.99s  agent 발화 끝
    35.35s  ⚡SPAN 주입 [d'=0.48s / d_lead=3.38s]: Scholastic Corporation acquired the US rights to publish the Harry Pot
    42.88s  user  발화 시작: 스콜라스틱이 일 년 동안 가지고 있다가 출시했어? 왜 그렇게 시간이 걸렸어?
    42.98s  agent 발화 끝
    47.35s  agent 발화 시작: 여러 가지 고려 사항이 있었던 것 같아요.
    47.36s  user  발화 끝
    49.60s  agent 발화 시작: <ret> 준비가 필요했어요— 스콜라스틱은 미국 시장을 위해 책을 일 년 동안 재편집하고 제목을 변경했어요.
    49.61s  <ret> 발화 (turn11 첫 프레임)
    49.66s  agent 발화 끝
    51.85s  ⚡SPAN 주입 [d'=2.24s / d_lead=2.34s]: Scholastic spent a year re-editing and re-titling the book for the Ame
    57.20s  agent 발화 끝
    57.54s  user  발화 시작: 제목을 바꿨다고? 제목을 뭘로 바꿨어?
    60.40s  agent 발화 시작: 실제로 꽤 큰 변화였어요.
    60.58s  user  발화 끝
    62.21s  agent 발화 시작: <ret> 미국판은— 제목이 미국 독자들을 위해 “해리 포터와 마법사의 돌”로 변경됐어요.
    62.22s  <ret> 발화 (turn14 첫 프레임)
    62.66s  agent 발화 끝
    62.94s  ⚡SPAN 주입 [d'=0.72s / d_lead=2.01s]: "Harry Potter and the Philosopher's Stone" was changed to "Harry Potte
    68.92s  agent 발화 끝
    70.03s  user  발화 시작: 마법사 대신 철학자… 흥미롭네. 미국 아이들은 “철학자”라는 단어를 이해하지 못할 거라고 생각한 거야?
    77.07s  agent 발화 시작: 주로 마케팅 결정이었어요—
    77.12s  user  발화 끝
    79.32s  agent 발화 시작: <ret> 출판사들은— 스콜라스틱은 “마법사”가 “철학자”보다 미국 아이들에게 더 어필할 것이라고 생각했어요
    79.33s  <ret> 발화 (turn17 첫 프레임)
    79.47s  agent 발화 끝
    80.29s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.04s]: Scholastic thought "sorcerer" would appeal more to American children t
    85.98s  user  발화 시작: 그럴 수도 있겠네. 그럼 첫 번째 책 이후로는—
    86.14s  agent 발화 끝
    89.02s  agent 발화 시작: 처음 성공한 이후로는—
    89.08s  user  발화 끝
    91.09s  agent 발화 끝
    91.35s  agent 발화 시작: <ret> 이후 출판물은— 이후 책들은 양국에서 거의 동시에 출판됐어요.
    91.35s  <ret> 발화 (turn20 첫 프레임)
    91.43s  ⚡SPAN 주입 [d'=0.08s / d_lead=1.73s]: Subsequent books in the series were published in both the UK and US ne
    95.97s  agent 발화 끝
    96.99s  user  발화 시작: 거의? 그럼 그때도 약간의 지연이 있었던 거야?
    99.56s  agent 발화 시작: 간혹 사소한 차이가 있었어요—
    99.67s  user  발화 끝
   101.53s  agent 발화 시작: <ret> 흔한 일은 아니에요— 배송 및 유통 물류로 인해 약간의 출판일 차이가 발생했어요.
   101.54s  <ret> 발화 (turn23 첫 프레임)
   102.00s  agent 발화 끝
   102.18s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.53s]: Minor publication date differences occurred due to shipping and distri
   107.05s  user  발화 시작: 그래, 배송은 이해가 돼. 그게 열풍에 영향을 미쳤을까…—
   107.65s  agent 발화 끝
   111.12s  agent 발화 시작: 그럴 수도 있어요—
   111.25s  user  발화 끝
   112.50s  agent 발화 끝
   112.68s  agent 발화 시작: <ret> 기대감은— 처음 지연으로 인해 첫 번째 책에 대한 상당한 기대감과 수요가 생겼어요.
   112.69s  <ret> 발화 (turn26 첫 프레임)
   113.49s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.47s]: The initial delay created significant anticipation and demand for the 
   118.51s  user  발화 시작: 그런데 J.K. 롤링은 이런 모든 것, 변화와 지연에 대해 알고 있었을까?
   118.56s  agent 발화 끝
   123.83s  user  발화 끝
   123.87s  agent 발화 시작: 물론이죠—
   125.45s  agent 발화 시작: <ret> 그녀는 확실히— J.K. 롤링은 제목 변경에 대해 상의했고 미국 과정에 참여했어요.
   125.47s  <ret> 발화 (turn29 첫 프레임)
   125.61s  agent 발화 끝
   127.23s  ⚡SPAN 주입 [d'=1.76s / d_lead=1.78s]: J.K. Rowling was consulted on the title change and remained involved i
   131.98s  agent 발화 끝
   133.46s  user  발화 시작: 그녀도 어느 정도 말할 권리가 있었다니 다행이네. 그럼 “마법사의 돌” 버전이 대부분의 미국인들이 자라면서 
   141.71s  user  발화 끝
   142.17s  agent 발화 시작: 맞아요. 그 버전이 여기서 상징이 되었어요.
   145.32s  agent 발화 시작: <ret> 바로 그 판본— “해리 포터와 마법사의 돌”은 대부분의 미국 독자들에게 결정적인 판본이 되었어요.
   145.33s  <ret> 발화 (turn32 첫 프레임)
   145.73s  agent 발화 끝
   145.89s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.62s]: "Harry Potter and the Sorcerer's Stone" became the defining edition fo
   152.36s  agent 발화 끝
