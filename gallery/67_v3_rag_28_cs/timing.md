# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어… 해리 포터 첫 번째 책이 언제 나왔는지 궁금해.
     4.02s  agent 발화 시작: 네, 정말 인기 있는 질문이에요.
     4.17s  user  발화 끝
     5.74s  <ret> 발화 (turn2 첫 프레임)
     6.13s  agent 발화 시작: <ret> 제가 한번 찾아볼까요— 영국에서는 천구백구십칠년 칠월 이십육일에 처음 출판됐어요.
     6.18s  agent 발화 끝
     6.94s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.86s]: Harry Potter and the Philosopher's Stone was first published in the Un
    11.91s  agent 발화 끝
    12.45s  user  발화 시작: 음, 알았어. 근데 미국에서는 훨씬 나중에 나왔다고 생각했는데, 맞나?
    16.98s  user  발화 끝
    17.33s  agent 발화 시작: 네, 질문하신 게 맞아요.
    18.68s  <ret> 발화 (turn5 첫 프레임)
    18.83s  agent 발화 시작: <ret> 중요한 건— 미국에서는 천구백구십팔년 구월 일일에 처음 출판됐어요.
    18.94s  agent 발화 끝
    19.88s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.59s]: Harry Potter and the Sorcerer's Stone was first published in the Unite
    24.02s  agent 발화 끝
    24.10s  user  발화 시작: 구월 일일… 꽤 차이가 나네, 그렇지? 거의 일 년이나!
    27.94s  agent 발화 시작: 네, 꽤 큰 차이예요. 출판 일정은 꽤 복잡할 수 있어요.
    28.13s  user  발화 끝
    31.20s  <ret> 발화 (turn8 첫 프레임)
    31.59s  agent 발화 시작: <ret> 차이점을 설명해 드릴까요— 스콜라스틱 코퍼레이션이 천구백구십칠년에 미국에서 이 시리즈를 출판할 권
    31.78s  agent 발화 끝
    33.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.21s]: Scholastic Corporation acquired the US rights to publish the Harry Pot
    39.17s  user  발화 시작: 스콜라스틱이 일 년 동안 가지고 있다가 출시했어? 왜 그렇게 시간이 걸렸어?
    39.28s  agent 발화 끝
    43.83s  agent 발화 시작: 몇 가지 고려해야 할 사항이 있었던 것 같아요.
    43.94s  user  발화 끝
    46.16s  <ret> 발화 (turn11 첫 프레임)
    46.31s  agent 발화 시작: <ret> 준비가 필요했어요— 스콜라스틱은 미국 시장을 위해 책을 일 년 동안 재편집하고 제목을 변경하는 데
    46.50s  agent 발화 끝
    47.28s  ⚡SPAN 주입 [d'=1.12s / d_lead=1.81s]: Scholastic spent a year re-editing and re-titling the book for the Ame
    53.53s  agent 발화 끝
    53.54s  user  발화 시작: 제목을 바꿨다고? 뭘로 바꿨어?
    56.02s  agent 발화 시작: 꽤 큰 변화였어요, 사실.
    56.12s  user  발화 끝
    57.22s  <ret> 발화 (turn14 첫 프레임)
    57.53s  agent 발화 시작: <ret> 미국판은— 제목이 미국 독자들을 위해 “Harry Potter and the Sorcerer’s 
    58.00s  agent 발화 끝
    58.42s  ⚡SPAN 주입 [d'=1.20s / d_lead=1.47s]: "Harry Potter and the Philosopher's Stone" was changed to "Harry Potte
    63.41s  agent 발화 끝
    63.41s  user  발화 시작: Sorcerer 대신 Philosopher… 흥미롭네. 미국 아이들은 "philosopher"를 이해하지 못
    69.52s  user  발화 끝
    69.69s  agent 발화 시작: 주로 마케팅 결정이었어요—
    70.89s  <ret> 발화 (turn17 첫 프레임)
    71.27s  agent 발화 시작: <ret> 출판사들은— 스콜라스틱은 “sorcerer”가 “philosopher”보다 미국 아이들에게 더 어
    71.43s  agent 발화 끝
    71.77s  ⚡SPAN 주입 [d'=0.88s / d_lead=2.35s]: Scholastic thought "sorcerer" would appeal more to American children t
    79.11s  agent 발화 끝
    79.15s  user  발화 시작: 그럴 수도 있겠네. 그럼 첫 번째 책 이후로는—
    82.34s  user  발화 끝
    82.48s  agent 발화 시작: 처음 성공한 이후로는—
    84.13s  agent 발화 끝
    84.37s  <ret> 발화 (turn20 첫 프레임)
    84.44s  agent 발화 시작: <ret> 이후 출판물들은— 이후 책들은 두 나라에서 거의 동시에 출판됐어요.
    84.87s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.78s]: Subsequent books in the series were published in both the UK and US ne
    89.77s  agent 발화 끝
    90.61s  user  발화 시작: 거의? 그럼 그때도 약간의 지연이 있었던 거야?
    93.85s  agent 발화 시작: 간혹 사소한 차이가 있었어요—
    93.85s  user  발화 끝
    95.33s  <ret> 발화 (turn23 첫 프레임)
    95.69s  agent 발화 끝
    95.73s  agent 발화 시작: <ret> 이건 흔한 일이에요— 배송 및 유통 물류로 인해 약간의 출판일 차이가 발생했어요.
    95.83s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.37s]: Minor publication date differences occurred due to shipping and distri
   101.19s  agent 발화 끝
   102.23s  user  발화 시작: 그래, 배송은 이해가 돼. 그게 열풍에 영향을 미쳤을까…—
   106.16s  agent 발화 시작: 그럴 수도 있어요—
   106.39s  user  발화 끝
   106.55s  <ret> 발화 (turn26 첫 프레임)
   106.94s  agent 발화 시작: <ret> 기대감은— 초기 지연으로 인해 첫 번째 책에 대한 상당한 기대감과 수요가 생겼어요.
   107.05s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.35s]: The initial delay created significant anticipation and demand for the 
   107.31s  agent 발화 끝
   112.35s  agent 발화 끝
   112.75s  user  발화 시작: 근데 J.K. 롤링은 이런 모든 것들, 변화와 지연에 대해 알고 있었어?
   117.28s  agent 발화 시작: 물론이죠—
   117.47s  user  발화 끝
   117.89s  <ret> 발화 (turn29 첫 프레임)
   118.10s  agent 발화 끝
   118.11s  agent 발화 시작: <ret> 그녀는 당연히— J.K. 롤링은 제목 변경에 대해 상의했고 미국 과정에 참여했어요.
   119.17s  ⚡SPAN 주입 [d'=1.28s / d_lead=1.55s]: J.K. Rowling was consulted on the title change and remained involved i
   123.81s  agent 발화 끝
   123.95s  user  발화 시작: 그녀도 어느 정도 말할 권리가 있었다니 다행이네. 그럼 Sorcerer’s Stone 버전이 대부분의 미국인
   130.76s  user  발화 끝
   130.88s  agent 발화 시작: 맞아요. 그 버전이 여기서 상징적인 존재가 됐어요.
   133.14s  <ret> 발화 (turn32 첫 프레임)
   133.53s  agent 발화 시작: <ret> 그것은— “Harry Potter and the Sorcerer’s Stone”은 대부분의 미국 
   133.69s  agent 발화 끝
   134.50s  ⚡SPAN 주입 [d'=1.36s / d_lead=1.40s]: "Harry Potter and the Sorcerer's Stone" became the defining edition fo
   139.60s  agent 발화 끝
