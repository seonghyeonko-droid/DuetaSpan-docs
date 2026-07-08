# v3_hesit_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 폼페이에 대해 읽고 있었는데… 음, 그게 궁금해졌어요— 베수비오 화산이 마지막으로 폭발한 게 언제였죠?
     7.17s  <ret> 발화 (turn1 첫 프레임)
     7.49s  agent 발화 시작: <ret> 정말 좋은 질문이세요, 그리고 그 지역을 방문하는 분들이 자주 하시는 질문이기도 해요. 베수비오 
     7.50s  user  발화 끝
     9.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.20s]: Mount Vesuvius last erupted in March of nineteen forty-four.
    19.83s  agent 발화 끝
    20.13s  user  발화 시작: 천구백사십사년… 와, 생각보다 최근이네요, 그렇죠? 저는 훨씬 더 오래전이라고 생각했어요.
    26.62s  user  발화 끝
    27.02s  agent 발화 시작: 지질학적으로 보면 정말 최근이에요. 베수비오 화산은 여전히 활화산으로 간주되며, 면밀히 감시되고 있습니다.
    34.46s  <ret> 발화 (turn4 첫 프레임)
    34.86s  agent 발화 시작: <ret> 천구백사십사년 사건에 대한 자세한 내용을 빠르게 확인해 볼게요— 천구백사십사년 삼월의 폭발로 주변
    34.90s  agent 발화 끝
    36.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.76s]: The nineteen forty-four eruption caused considerable damage to nearby 
    45.16s  user  발화 시작: 그런데 그 폭발 때문에— 대피가 있었나요, 아니면 사람들이 여전히 가까이 살고 있었나요?
    45.57s  agent 발화 끝
    51.29s  agent 발화 시작: 그 지역의 역사를 고려할 때 정말 중요한 질문이세요.
    51.41s  user  발화 끝
    54.36s  <ret> 발화 (turn7 첫 프레임)
    54.60s  agent 발화 시작: <ret> 천구백사십사년 폭발 전에 베수비오 화산 근처 마을에서 약 삼천 명의 사람들이 대피했습니다, 다행히
    54.62s  agent 발화 끝
    56.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.06s]: Approximately three thousand people were evacuated from the villages s
    62.25s  agent 발화 끝
