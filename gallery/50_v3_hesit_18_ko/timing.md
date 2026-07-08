# v3_hesit_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 폼페이에 대해 읽다가 문득 궁금해졌어요… 베수비오 화산이 마지막으로 폭발한 게 언제였죠?
     5.97s  <ret> 발화 (turn1 첫 프레임)
     6.29s  agent 발화 시작: <ret> 그 지역의 역사를 생각하면 아주 자연스러운 질문이에요.
     6.30s  user  발화 끝
     7.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.70s]: Mount Vesuvius last erupted in March of 1944.
     9.99s  agent 발화 시작: 베수비오 화산의 마지막 공식적인 폭발은 천구백사십사년 삼월에 일어났습니다.
     9.99s  agent 발화 끝
    16.47s  agent 발화 끝
    17.66s  user  발화 시작: 천구백사십사년… 와. 생각보다 얼마 안 된 거네요. 폼페이 폭발만큼 컸나요?
    24.79s  <ret> 발화 (turn4 첫 프레임)
    24.98s  user  발화 끝
    25.11s  agent 발화 시작: <ret> 폭발 규모는 상당히 다양하게 나타나는데, 천구백사십사년의 폭발은 폼페이를 덮었던 폭발보다 훨씬 덜
    25.83s  ⚡SPAN 주입 [d'=1.04s / d_lead=9.73s]: The 1944 eruption was Strombolian, producing lava flows and ash, but n
    34.70s  agent 발화 시작: 천구백사십사년의 폭발은 스트롬볼리식 형태였고, 용암류와 화산재가 떨어졌지만 화쇄류는 발생하지 않았습니다.
    34.85s  agent 발화 끝
    42.81s  agent 발화 끝
    42.88s  user  발화 시작: 스트롬볼리식… 그게 무슨 뜻이죠? 그러니까—
    45.79s  user  발화 끝
    45.80s  agent 발화 시작: 간헐적으로 가스와 용암이 분출되는 특정 유형의 폭발을 의미합니다.
    49.80s  user  발화 시작: 그럼, 칠십구 년에 있었던 것처럼 엄청난 화산재와 경석 구름은 없었나요?
    50.43s  agent 발화 끝
    54.61s  <ret> 발화 (turn9 첫 프레임)
    54.79s  user  발화 끝
    54.85s  agent 발화 시작: <ret> 정확합니다. 칠십구 년의 폭발은 훨씬 더 격렬한 플리니식 폭발이었습니다.
    56.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.18s]: Plinian eruptions are characterized by sustained columns of gas and as
    60.03s  agent 발화 시작: 플리니식 폭발은 칠십구 년의 폭발처럼 지속적인 가스와 화산재 기둥을 동반하며, 종종 화쇄류를 일으킵니다.
    60.03s  agent 발화 끝
    68.23s  agent 발화 끝
    68.96s  user  발화 시작: 알겠습니다, 이제 좀 이해가 돼요. 그럼 아직도… 활화산인가요? 베수비오 화산은요?
    74.58s  agent 발화 시작: 네, 베수비오 화산은 활화산으로 간주되며, 불안정한 징후가 없는지 지속적으로 감시하고 있습니다.
    74.75s  user  발화 끝
    81.20s  agent 발화 끝
