# v3_hesit_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 폼페이에 대해 읽다가… 음, 궁금해졌어요. 베수비오 화산이 마지막으로 폭발한 게 언제였을까요?
     6.44s  <ret> 발화 (turn1 첫 프레임)
     6.76s  agent 발화 시작: <ret> 아, 좋은 질문이세요. 그 지역을 방문하는 분들이 자주 물어보시는 질문이기도 해요. 베수비오 화산
     6.82s  user  발화 끝
     8.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.15s]: Mount Vesuvius last erupted in March of 1944.
    17.24s  agent 발화 끝
    17.59s  user  발화 시작: 천구백사십사년… 와, 생각보다 최근이네요. 그때 폭발이 컸나요?
    23.43s  user  발화 끝
    23.85s  agent 발화 시작: 다행히도 천구백칠십구년 폭발보다는 훨씬 작았어요. 예전처럼 광범위한 피해는 없었습니다.
    30.70s  agent 발화 끝
    30.89s  user  발화 시작: 음… 그래도 혹시 피해를 입은 사람들이 있었나요? 아니면 그냥—
    35.30s  <ret> 발화 (turn5 첫 프레임)
    35.70s  agent 발화 시작: <ret> 그 점을 고려하시는 게 아주 중요해요. 폭발이 작더라도… 천구백사십사년 폭발로 근처 마을과 미국 
    35.93s  user  발화 끝
    37.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.29s]: The 1944 eruption caused damage to nearby villages and the US Air Forc
    39.55s  user  발화 시작: 네네.
    40.00s  user  발화 끝
    45.76s  agent 발화 끝
    47.03s  user  발화 시작: 미국 공군 기지가요? 음… 놀랍네요. 그때가 전쟁 중이었나요?
    52.58s  user  발화 끝
    52.99s  agent 발화 시작: 네, 맞습니다. 그 기지는 이탈리아 연합군 침공 당시 그곳에 세워졌습니다.
    58.45s  agent 발화 끝
    59.37s  user  발화 시작: 그러니까, 군사 작전에 실제로 지장을 줬다는 건가요? 꽤 흥미로운 이야기네요.
    64.36s  user  발화 끝
    64.44s  agent 발화 시작: 네, 어느 정도 혼란이 있었지만, 다행히 그 사건으로 인해 인명 피해는 없었습니다.
    69.16s  agent 발화 끝
