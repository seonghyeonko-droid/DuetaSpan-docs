# v3_rag_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 오늘 하루 어떠세요? 혹시 '콜스 더 하트' 시즌이 궁금하신가 봐요.
     5.51s  agent 발화 시작: 정말 좋은 드라마죠, 그렇지 않나요? 공동체 의식을 잘 담아낸 것 같아요.
     5.51s  user  발화 끝
    11.58s  user  발화 시작: 네, 괜찮아요. 근데 진짜, 지금 몇 번째 시즌이에요?
    11.58s  agent 발화 끝
    15.98s  agent 발화 시작: <ret> 알아볼게요… 지금 드라마는 2023년 3월에 시작된 열 번째 시즌으로 방송 중이에요.
    15.98s  <ret> 발화 (turn3 첫 프레임)
    15.98s  user  발화 끝
    16.46s  ⚡SPAN 주입 [d'=0.48s / d_lead=1.10s]: When Calls the Heart is currently on its tenth season, which premiered
    22.05s  user  발화 시작: 열 번째! 와, 진짜 많네요. 음, 이웃이 새 강아지를 데려왔어요, 골든 리트리버요.
    22.05s  agent 발화 끝
    28.66s  agent 발화 시작: 아, 골든 리트리버는 정말 멋진 강아지예요—에너지가 넘치죠.
    28.66s  user  발화 끝
    32.52s  user  발화 시작: 그렇죠. 다시 드라마 얘기로 돌아가서… 6번째 시즌이 있었던 것 같아요.
    32.52s  agent 발화 끝
    38.03s  agent 발화 시작: <ret> 잠시 생각해 보니… 6번째 시즌은 2019년 2월 25일부터 5월 6일까지 방영되었어요.
    38.03s  <ret> 발화 (turn7 첫 프레임)
    38.03s  user  발화 끝
    38.75s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.10s]: Season six of When Calls the Heart originally aired from February 25 t
    44.10s  user  발화 시작: 2019년… 정말 오래된 것 같아요. 다시 봐야겠어요.
    44.10s  agent 발화 끝
    47.95s  agent 발화 시작: 시간은 정말 빨리 가죠, 그렇지 않나요? 시간이 갈수록 더 빠르게 느껴지는 것 같아요.
    47.95s  user  발화 끝
    55.12s  user  발화 시작: 정말 그래요. 6번째 시즌에서… 큰일이 있었나요?
    55.12s  agent 발화 끝
    58.43s  agent 발화 시작: <ret> 기억을 더듬어 보면… 6번째 시즌에서는 잭 손튼 역을 맡았던 다니엘 리싱이 하차했어요.
    58.43s  <ret> 발화 (turn11 첫 프레임)
    58.43s  user  발화 끝
    58.83s  ⚡SPAN 주입 [d'=0.40s / d_lead=1.65s]: Season six of When Calls the Heart featured the departure of Daniel Li
    65.04s  user  발화 시작: 아, 안 돼! 저는 잭이 좋았는데! 너무 아쉽네요.
    65.04s  agent 발화 끝
    69.45s  agent 발화 시작: 좋아하는 캐릭터를 잃는 건 언제나 힘들죠—기존의 역학 관계가 깨지니까요.
    69.45s  user  발화 끝
    74.41s  user  발화 시작: 정말 그래요. 그 후로 드라마가 많이 바뀌었나요?
    74.41s  agent 발화 끝
    78.27s  agent 발화 시작: 드라마는 분명히 변화를 겪었죠. 이야기가 어떻게 전개되는지 보는 것도 흥미로워요.
    78.27s  user  발화 끝
    83.78s  user  발화 시작: 맞아요. 7번째 시즌은 언제 방영됐어요?
    83.78s  agent 발화 끝
    86.54s  agent 발화 시작: <ret> 잠깐만요… 7번째 시즌은 2020년 2월 24일부터 5월 17일까지 방영되었어요.
    86.54s  <ret> 발화 (turn17 첫 프레임)
    86.54s  user  발화 끝
    86.70s  ⚡SPAN 주입 [d'=0.16s / d_lead=1.65s]: Season seven of When Calls the Heart premiered on February 24, 2020, a
    91.50s  user  발화 시작: 알겠어요, 6번째 시즌 직후네요. 다행이에요.
    91.50s  agent 발화 끝
    94.25s  agent 발화 시작: 일관성이 시청자에게는 안심이 될 수 있죠—이야기 전개에 예측 가능한 리듬이 있으니까요.
    94.25s  user  발화 끝
   100.32s  user  발화 시작: 그럴 것 같아요. 2023년에는 드라마에서 무슨 일이 있었나요?
   100.32s  agent 발화 끝
   104.73s  agent 발화 시작: <ret> 그 해는 꽤 바빴어요… 2023년에는 캐나다 브리티시컬럼비아의 날씨 때문에 10번째 시즌의 제작이
   104.73s  <ret> 발화 (turn21 첫 프레임)
   104.73s  user  발화 끝
   105.73s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.76s]: In 2023, When Calls the Heart's tenth season experienced production de
   111.89s  user  발화 시작: 아, 안됐네요. 날씨는 정말 골칫거리예요.
   111.89s  agent 발화 끝
   114.65s  agent 발화 시작: 정말 그렇죠—특히 야외 촬영 일정에 영향을 미칠 때는요.
   114.65s  user  발화 끝
   119.06s  user  발화 시작: 10시즌이나 됐네요… 정말 대단하네요. 아직도 하고 있나요?
   119.06s  agent 발화 끝
   122.92s  agent 발화 시작: 네, 다행히도요. 여전히 많은 팬들에게 사랑받는 인기 프로그램이에요.
   122.92s  user  발화 끝
   127.33s  user  발화 시작: 잘 됐네요. 기분이 좋아요. 새로운 취미를 생각해 보고 있는데, 도자기를 해볼까 해요.
   127.33s  agent 발화 끝
   133.94s  agent 발화 시작: 도자기는 정말 촉각적인 예술 형태예요—마음을 안정시키고 창의적으로 만족감을 줄 수 있죠.
   133.94s  user  발화 끝
   140.00s  user  발화 시작: 네, 그런 걸 기대하고 있어요. 혹시 10시즌이 최신 시즌이 맞나요?
   140.00s  agent 발화 끝
   145.52s  agent 발화 시작: <ret> 지금까지는… '콜스 더 하트' 시즌 11이 2024년 2월에 시작될 예정이에요.
   145.52s  <ret> 발화 (turn29 첫 프레임)
   145.52s  ⚡SPAN 주입 [d'=0.00s / d_lead=1.65s]: When Calls the Heart season 11 is confirmed to premiere in February 20
   145.52s  user  발화 끝
   151.03s  user  발화 시작: 벌써 11번째나 된다니! 정말 굉장하네요.
   151.03s  agent 발화 끝
   153.78s  agent 발화 시작: 드라마의 장수성은 그 매력의 증거라고 할 수 있겠죠.
   153.78s  user  발화 끝
   158.19s  user  발화 시작: 정말 그래요. 몰아봐야겠어요.
   158.19s  agent 발화 끝
   159.85s  agent 발화 시작: 몰아보는 건 정말 만족스러울 수 있지만—조금 천천히 하시는 게 좋을 수도 있어요.
   159.85s  user  발화 끝
   166.46s  agent 발화 끝
