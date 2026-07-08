# v3_hesit_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 폼페이에 대해 읽다가 문득 궁금해졌는데, 베수비오 화산이 마지막으로 폭발한 게 언제였을까요?
     6.28s  <ret> 발화 (turn1 첫 프레임)
     6.60s  agent 발화 시작: <ret> 네, 그 질문을 많이 하시더라고요. 베수비오 화산의 마지막 폭발은 천구백사십사년 삼월에 일어났습니
     6.62s  user  발화 끝
     8.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.57s]: Mount Vesuvius last erupted in March of 1944.
    13.74s  agent 발화 끝
    14.12s  user  발화 시작: 와, 생각보다 얼마 안 됐네요. 그때 폭발이 폼페이를 파괴했던 폭발만큼 컸나요?
    20.05s  user  발화 끝
    20.43s  agent 발화 시작: 아니요, 다행히 그때 폭발은 그만큼 엄청나지는 않았습니다. 천구백사십사년 폭발은 규모가 훨씬 작았습니다.
    29.43s  agent 발화 끝
    29.65s  user  발화 시작: 그래도 근처에 사는 사람들에게 영향을 줬나요?
    31.73s  <ret> 발화 (turn5 첫 프레임)
    32.05s  agent 발화 시작: <ret> 네, 영향을 줬습니다.
    32.24s  user  발화 끝
    32.77s  ⚡SPAN 주입 [d'=1.04s / d_lead=1.28s]: The 1944 eruption caused damage to nearby towns and villages.
    33.32s  agent 발화 끝
    33.33s  agent 발화 시작: 천구백사십사년 폭발은 주변 마을과 촌락에 피해를 입혔습니다.
    37.22s  agent 발화 끝
    38.49s  user  발화 시작: 그럼 과학자들이 지금도 주의 깊게 관찰하고 있겠네요? 혹시 곧 또 폭발할 위험이 있나요?
    44.28s  user  발화 끝
    44.64s  agent 발화 시작: 맞아요. 베수비오 화산은 끊임없이 감시를 받고 있고, 앞으로도 활동할 가능성이 있는 활화산입니다. 아주 복잡
    54.66s  agent 발화 끝
