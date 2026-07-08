# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어… 해리 포터 첫 번째 책이 언제 나왔는지 궁금해.
     4.02s  agent 발화 시작: 네, 정말 인기 있는 질문이에요.
     4.17s  user  발화 끝
     5.76s  <ret> 발화 (turn2 첫 프레임)
     6.16s  agent 발화 시작: <ret> 제가 한번 찾아볼까요— 영국에서는 천구백구십칠년 칠월 이십육일에 처음 출판됐어요.
     6.18s  agent 발화 끝
     6.96s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.86s]: Harry Potter and the Philosopher's Stone was first published in the Un
    11.94s  agent 발화 끝
    12.64s  user  발화 시작: 음, 알았어. 근데 미국에서는 훨씬 나중에 나왔다고 생각했는데, 맞나?
    16.99s  agent 발화 시작: 네, 질문하신 게 맞아요.
    17.17s  user  발화 끝
    18.42s  <ret> 발화 (turn5 첫 프레임)
    18.57s  agent 발화 시작: <ret> 중요한 건— 미국에서는 천구백구십팔년 구월 일일에 처음 출판됐어요.
    18.60s  agent 발화 끝
    19.62s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.59s]: Harry Potter and the Sorcerer's Stone was first published in the Unite
    23.75s  agent 발화 끝
    24.62s  user  발화 시작: 구월 일일… 꽤 차이가 나네, 그렇지? 거의 일 년이나!
    28.59s  agent 발화 시작: 네, 꽤 큰 차이예요. 출판 일정은 꽤 복잡할 수 있어요.
    28.65s  user  발화 끝
    31.98s  <ret> 발화 (turn8 첫 프레임)
    32.37s  agent 발화 시작: <ret> 차이점을 설명해 드릴까요— 스콜라스틱 코퍼레이션이 천구백구십칠년에 미국에서 이 시리즈를 출판할 권
    32.42s  agent 발화 끝
    33.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.21s]: Scholastic Corporation acquired the US rights to publish the Harry Pot
    39.85s  user  발화 시작: 스콜라스틱이 일 년 동안 가지고 있다가 출시했어? 왜 그렇게 시간이 걸렸어?
    40.06s  agent 발화 끝
    44.62s  user  발화 끝
    44.85s  agent 발화 시작: 몇 가지 고려해야 할 사항이 있었던 것 같아요.
    47.27s  <ret> 발화 (turn11 첫 프레임)
    47.42s  agent 발화 시작: <ret> 준비가 필요했어요— 스콜라스틱은 미국 시장을 위해 책을 일 년 동안 재편집하고 제목을 변경하는 데
    47.53s  agent 발화 끝
    48.39s  ⚡SPAN 주입 [d'=1.12s / d_lead=1.81s]: Scholastic spent a year re-editing and re-titling the book for the Ame
    54.53s  user  발화 시작: 제목을 바꿨다고? 뭘로 바꿨어?
    54.65s  agent 발화 끝
    57.03s  agent 발화 시작: 꽤 큰 변화였어요, 사실.
    57.11s  user  발화 끝
    58.53s  <ret> 발화 (turn14 첫 프레임)
    58.84s  agent 발화 시작: <ret> 미국판은— 제목이 미국 독자들을 위해 “Harry Potter and the Sorcerer’s 
    59.01s  agent 발화 끝
    59.73s  ⚡SPAN 주입 [d'=1.20s / d_lead=1.47s]: "Harry Potter and the Philosopher's Stone" was changed to "Harry Potte
    64.67s  user  발화 시작: Sorcerer 대신 Philosopher… 흥미롭네. 미국 아이들은 "philosopher"를 이해하지 못
    64.72s  agent 발화 끝
    70.77s  agent 발화 시작: 주로 마케팅 결정이었어요—
    70.78s  user  발화 끝
    71.93s  <ret> 발화 (turn17 첫 프레임)
    72.31s  agent 발화 시작: <ret> 출판사들은— 스콜라스틱은 “sorcerer”가 “philosopher”보다 미국 아이들에게 더 어
    72.51s  agent 발화 끝
    72.81s  ⚡SPAN 주입 [d'=0.88s / d_lead=2.35s]: Scholastic thought "sorcerer" would appeal more to American children t
    79.89s  user  발화 시작: 그럴 수도 있겠네. 그럼 첫 번째 책 이후로는—
    80.14s  agent 발화 끝
    83.08s  user  발화 끝
    83.10s  agent 발화 시작: 처음 성공한 이후로는—
    84.65s  <ret> 발화 (turn20 첫 프레임)
    84.72s  agent 발화 시작: <ret> 이후 출판물들은— 이후 책들은 두 나라에서 거의 동시에 출판됐어요.
    84.75s  agent 발화 끝
    85.15s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.78s]: Subsequent books in the series were published in both the UK and US ne
    90.05s  agent 발화 끝
    90.78s  user  발화 시작: 거의? 그럼 그때도 약간의 지연이 있었던 거야?
    93.81s  agent 발화 시작: 간혹 사소한 차이가 있었어요—
    94.01s  user  발화 끝
    95.22s  <ret> 발화 (turn23 첫 프레임)
    95.62s  agent 발화 시작: <ret> 이건 흔한 일이에요— 배송 및 유통 물류로 인해 약간의 출판일 차이가 발생했어요.
    95.66s  agent 발화 끝
    95.72s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.37s]: Minor publication date differences occurred due to shipping and distri
   101.09s  agent 발화 끝
   101.36s  user  발화 시작: 그래, 배송은 이해가 돼. 그게 열풍에 영향을 미쳤을까…—
   105.52s  user  발화 끝
   105.53s  agent 발화 시작: 그럴 수도 있어요—
   106.27s  <ret> 발화 (turn26 첫 프레임)
   106.66s  agent 발화 시작: <ret> 기대감은— 초기 지연으로 인해 첫 번째 책에 대한 상당한 기대감과 수요가 생겼어요.
   106.68s  agent 발화 끝
   106.77s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.35s]: The initial delay created significant anticipation and demand for the 
   112.07s  agent 발화 끝
   113.00s  user  발화 시작: 근데 J.K. 롤링은 이런 모든 것들, 변화와 지연에 대해 알고 있었어?
   117.72s  user  발화 끝
   117.76s  agent 발화 시작: 물론이죠—
   118.43s  <ret> 발화 (turn29 첫 프레임)
   118.59s  agent 발화 끝
   118.66s  agent 발화 시작: <ret> 그녀는 당연히— J.K. 롤링은 제목 변경에 대해 상의했고 미국 과정에 참여했어요.
   119.71s  ⚡SPAN 주입 [d'=1.28s / d_lead=1.55s]: J.K. Rowling was consulted on the title change and remained involved i
   124.35s  agent 발화 끝
   124.42s  user  발화 시작: 그녀도 어느 정도 말할 권리가 있었다니 다행이네. 그럼 Sorcerer’s Stone 버전이 대부분의 미국인
   131.23s  user  발화 끝
   131.28s  agent 발화 시작: 맞아요. 그 버전이 여기서 상징적인 존재가 됐어요.
   133.51s  <ret> 발화 (turn32 첫 프레임)
   133.90s  agent 발화 시작: <ret> 그것은— “Harry Potter and the Sorcerer’s Stone”은 대부분의 미국 
   134.10s  agent 발화 끝
   134.87s  ⚡SPAN 주입 [d'=1.36s / d_lead=1.40s]: "Harry Potter and the Sorcerer's Stone" became the defining edition fo
   139.96s  agent 발화 끝
