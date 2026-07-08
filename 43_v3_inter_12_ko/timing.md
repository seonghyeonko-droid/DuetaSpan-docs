# v3_inter_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안녕하세요.
     0.46s  agent 발화 시작: 네, 안녕하세요. 날씨가 참 좋네요, 그렇지 않나요?
     0.46s  user  발화 끝
     3.68s  user  발화 시작: 아, 네, 그렇네요. 혹시 'Keeping Up With The Kardashians' 새로운 시즌이 언제 
     3.68s  agent 발화 끝
    10.13s  agent 발화 시작: <ret> 음, 그 질문에 답해 드릴 수 있어요. 사실 시즌 열넷은 2017년 10월 1일에 처음 공개됐어요
    10.13s  <ret> 발화 (turn3 첫 프레임)
    10.13s  user  발화 끝
    11.13s  ⚡SPAN 주입 [d'=1.00s / d_lead=6.90s]: Keeping Up with the Kardashians season fourteen premiered on October 1
    17.03s  user  발화 시작: 어, 와, 꽤 오래됐네요. 더 최신인 줄 알았어요.
    17.03s  agent 발화 끝
    20.71s  agent 발화 시작: 시간은 정말 빠르게 가네요, 그렇지 않나요? 얼마 전에 로키산맥 위에서 약간의 난기류를 겪었던 것 같은데.
    20.71s  user  발화 끝
    27.62s  user  발화 시작: [chuckle] 그러네요. 그럼 시즌 열다섯은 있나요?
    27.62s  agent 발화 끝
    30.38s  agent 발화 시작: <ret> 네, 있어요. 잠깐만요… 시즌 열다섯은 2018년 3월 18일에 방영을 시작했어요.
    30.38s  <ret> 발화 (turn7 첫 프레임)
    30.38s  user  발화 끝
    31.38s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.60s]: The fifteenth season of Keeping Up with the Kardashians premiered on M
    34.98s  user  발화 시작: 3월 18일… 알겠습니다, 좋은 정보네요. 아까 말씀하신 작은 호텔 기억나세요? 로마에 있는 호텔요?
    34.98s  agent 발화 끝
    40.97s  agent 발화 시작: 아, Hotel de Russie요! 정말 아름다운 곳이에요, 정말 아름다워요. 피우미치노 공항에 도착한 후
    40.97s  user  발화 끝
    48.33s  user  발화 시작: 거기 가보려고 생각 중이에요. 공항에서 호텔까지 가는 가장 좋은 방법이 뭘까요?
    48.33s  agent 발화 끝
    53.39s  agent 발화 시작: <ret> 피우미치노 공항에서 레오나르도 익스프레스 기차가 가장 좋은 방법이에요. 테르미니 역까지 바로 가요
    53.39s  <ret> 발화 (turn11 첫 프레임)
    53.39s  user  발화 끝
    54.39s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.52s]: The Leonardo Express is a non-stop train service from Fiumicino Airpor
    58.92s  user  발화 시작: 32분이면 괜찮네요. 직행 기차인가요?
    58.92s  agent 발화 끝
    60.76s  agent 발화 시작: 네, 직행 기차예요. 짐 들고 갈아탈 걱정은 안 하셔도 돼요. [happy] 그런 건 정말 다행이죠, 그렇지
    60.76s  user  발화 끝
    68.58s  user  발화 시작: 정말 그렇죠. 음, 또 궁금한 게 있는데요—
    68.58s  agent 발화 끝
    71.80s  agent 발화 시작: 그 기차에 대해서는… 대략 15분마다 운행하고, 그리고—
    71.80s  user  발화 끝
    75.03s  user  발화 시작: 잠깐만요—
    75.03s  agent 발화 끝
    75.49s  agent 발화 시작: —정말 편안해요, 말씀드려야겠어요—
    75.49s  user  발화 끝
    76.87s  user  발화 시작: 죄송하지만, 잠깐만요. 다른 게 궁금해졌어요. 이탈리아에서 가장 높은 산은 뭐예요?
    76.87s  agent 발화 끝
    81.47s  agent 발화 시작: <ret> 오, 좋은 질문이에요! 이탈리아에서 가장 높은 산은 몽블랑으로, 해발 4,886미터예요.
    81.47s  <ret> 발화 (turn19 첫 프레임)
    81.47s  user  발화 끝
    82.47s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.60s]: Mont Blanc, at 4,886 meters (16,033 ft), is the highest mountain in It
    86.07s  user  발화 시작: 와, 정말 높네요. 그렇게 높을 줄 몰랐어요.
    86.07s  agent 발화 끝
    89.30s  agent 발화 시작: 정말 높죠. 히말라야 산맥 위를 날았던 것과 비슷하네요, 물론 훨씬 더 높았지만요.
    89.30s  user  발화 끝
    94.82s  user  발화 시작: 정말 그랬겠네요. 그럼, 다시 카다시안으로 돌아가서, 시즌 열여섯은 무슨 내용이었나요?
    94.82s  agent 발화 끝
    99.42s  agent 발화 시작: <ret> 시즌 열여섯은 클로에와 트리스탄의 관계, 그리고 김의 대리모를 통한 출산 여정에 초점을 맞췄어요.
    99.42s  <ret> 발화 (turn23 첫 프레임)
    99.42s  user  발화 끝
   100.42s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.98s]: Season sixteen of Keeping Up with the Kardashians featured Khloé Karda
   105.41s  user  발화 시작: 아, 맞아요. 그런 얘기 들었어요. 꽤 드라마틱했죠, 그렇지 않나요?
   105.41s  agent 발화 끝
   109.55s  agent 발화 시작: 뭐, 인생은 그런 거 아니겠어요? 예상치 못한 기상 패턴과 비슷해요 – 그냥 항로를 조정해야죠.
   109.55s  user  발화 끝
   115.99s  user  발화 시작: [sigh] 맞는 말이네요. 고마워요, 모시, 정말 도움이 됐어요.
   115.99s  agent 발화 끝
   119.67s  agent 발화 시작: 전혀요. 이야기나 정보 같은 걸 공유하는 건 언제나 즐거운 일이에요.
   119.67s  user  발화 끝
   124.28s  agent 발화 끝
