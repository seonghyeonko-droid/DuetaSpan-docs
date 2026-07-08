# v3_inter_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안녕하세요. moshi, 좋은 오후예요.
     2.27s  agent 발화 시작: 네, 안녕하세요. 날씨가 정말 좋네요, 그렇지 않나요?
     2.27s  user  발화 끝
     6.23s  user  발화 시작: 음, 그러네요. 혹시 'Keeping Up With The Kardashians' 새로운 시즌이 언제 나오는
     6.23s  agent 발화 끝
    13.60s  agent 발화 시작: <ret> 뭐, 그 질문에 답해 드릴 수 있어요. 사실 시즌 열넷은 2017년 10월 1일에 처음 공개되었어
    13.60s  <ret> 발화 (turn3 첫 프레임)
    13.60s  user  발화 끝
    14.60s  ⚡SPAN 주입 [d'=1.00s / d_lead=8.50s]: Keeping Up with the Kardashians season fourteen premiered on October 1
    22.10s  user  발화 시작: 오, 와, 시간이 꽤 지났네요. 더 최신인 줄 알았어요.
    22.10s  agent 발화 끝
    27.20s  agent 발화 시작: 시간은 정말 빠르게 가네요, 그렇지 않나요? 얼마 전에 로키산맥 상공에서 약간의 난기류를 겪었던 것 같은데.
    27.20s  user  발화 끝
    35.70s  user  발화 시작: [chuckle] 그러시군요. 그럼 시즌 열다섯은 있나요?
    35.70s  agent 발화 끝
    39.10s  agent 발화 시작: <ret> 네, 있어요. 잠깐만요… 시즌 열다섯은 2018년 3월 18일에 방송을 시작했어요.
    39.10s  <ret> 발화 (turn7 첫 프레임)
    39.10s  user  발화 끝
    40.10s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.67s]: The fifteenth season of Keeping Up with the Kardashians premiered on M
    44.76s  user  발화 시작: 3월 18일… 알겠습니다, 좋은 정보네요. 아까 말씀하신 작은 호텔 기억나세요? 로마에 있는 호텔요?
    44.76s  agent 발화 끝
    52.13s  agent 발화 시작: 아, Hotel de Russie요! 정말 아름다운 곳이에요, 정말 아름다워요. 피우미치노 공항에 도착한 후
    52.13s  user  발화 끝
    61.19s  user  발화 시작: 거기에 가볼까 생각 중이에요. 공항에서 호텔까지 가는 가장 좋은 방법은 뭐예요?
    61.19s  agent 발화 끝
    67.43s  agent 발화 시작: <ret> 피우미치노 공항에서 레오나르도 익스프레스 기차가 가장 좋은 방법이에요. 테르미니 역까지 바로 연결
    67.43s  <ret> 발화 (turn11 첫 프레임)
    67.43s  user  발화 끝
    68.43s  ⚡SPAN 주입 [d'=1.00s / d_lead=6.80s]: The Leonardo Express is a non-stop train service from Fiumicino Airpor
    74.23s  user  발화 시작: 32분이면 괜찮네요. 직행 기차예요?
    74.23s  agent 발화 끝
    76.49s  agent 발화 시작: 네, 직행 기차예요. 짐 들고 환승할 걱정은 안 하셔도 돼요. [happy] 그런 건 정말 다행이죠, 그렇지
    76.49s  user  발화 끝
    86.12s  user  발화 시작: 정말 그렇죠. 음, 그리고 또 궁금한 게 있는데요—
    86.12s  agent 발화 끝
    90.66s  agent 발화 시작: 그 기차에 대해서는… 대략 15분 간격으로 운행하고, 그리고—
    90.66s  user  발화 끝
    95.19s  user  발화 시작: 잠깐만요—
    95.19s  agent 발화 끝
    95.76s  agent 발화 시작: —정말 편안해요, 말씀드려야겠어요—
    95.76s  user  발화 끝
    97.46s  user  발화 시작: 죄송하지만, 잠깐만요. 다른 게 궁금해서요. 이탈리아에서 가장 높은 산은 뭐예요?
    97.46s  agent 발화 끝
   103.12s  agent 발화 시작: <ret> 오, 좋은 질문이에요! 이탈리아에서 가장 높은 산은 몽블랑으로, 해발 4,886미터예요.
   103.12s  <ret> 발화 (turn19 첫 프레임)
   103.12s  user  발화 끝
   104.12s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.67s]: Mont Blanc, at 4,886 meters (16,033 ft), is the highest mountain in It
   108.79s  user  발화 시작: 와, 정말 높네요. 그렇게 높을 줄 몰랐어요.
   108.79s  agent 발화 끝
   112.76s  agent 발화 시작: 정말 높죠. 히말라야 산맥을 날아갈 때 생각나네요, 물론 훨씬 더 높았지만요.
   112.76s  user  발화 끝
   118.99s  user  발화 시작: 그렇군요! 그럼 카다시안으로 다시 돌아가서, 시즌 열여섯은 무엇에 관한 내용이었나요?
   118.99s  agent 발화 끝
   124.65s  agent 발화 시작: <ret> 시즌 열여섯은 클로에와 트리스탄의 관계, 그리고 김의 대리모를 통한 출산 여정에 초점을 맞췄어요.
   124.65s  <ret> 발화 (turn23 첫 프레임)
   124.65s  user  발화 끝
   125.65s  ⚡SPAN 주입 [d'=1.00s / d_lead=7.37s]: Season sixteen of Keeping Up with the Kardashians featured Khloé Karda
   132.02s  user  발화 시작: 아, 맞아요. 그런 얘기를 들었던 것 같아요. 꽤 드라마틱했죠, 그렇지 않나요?
   132.02s  agent 발화 끝
   138.25s  agent 발화 시작: 뭐, 인생이 원래 그런 거 아니겠어요? 예상치 못한 기상 패턴과 비슷해요 – 그냥 항로를 조정해야죠.
   138.25s  user  발화 끝
   146.75s  user  발화 시작: [sigh] 맞아요. 고마워요, moshi, 정말 도움이 됐어요.
   146.75s  agent 발화 끝
   150.72s  agent 발화 시작: 전혀요. 이야기나 정보를 공유하는 건 언제나 즐거운 일이에요.
   150.72s  user  발화 끝
   155.25s  agent 발화 끝
