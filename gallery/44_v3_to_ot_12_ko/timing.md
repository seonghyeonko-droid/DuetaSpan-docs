# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 중국이 세계무역기구에 언제 가입했는지 궁금하네.
     2.36s  <ret> 발화 (turn1 첫 프레임)
     2.96s  user  발화 끝
     2.96s  agent 발화 시작: <ret> 좋은 질문이야. 중국은 이천일 년 십이 월 십일 일에 WTO 회원국이 됐어.
     3.36s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.50s]: China acceded to the World Trade Organization on December 11, 2001.
     7.45s  agent 발화 끝
     7.49s  user  발화 시작: 와, 꽤 오래됐네. 그럼 지금은 이십 년이 넘었어?
     9.97s  agent 발화 시작: 맞아, 그 중요한 순간 이후로 이십 년 넘게 흘렀어. 세계 상업을 크게 바꿔놨지.
    10.22s  user  발화 끝
    15.95s  agent 발화 끝
    17.45s  user  발화 시작: 궁금한데, 중국이 가입하려면 어떤 주요 난관을 넘어야 했어?
    20.69s  <ret> 발화 (turn5 첫 프레임)
    21.29s  agent 발화 시작: <ret> 좀 알려줄게. 중국의 WTO 가입은 농업 보조금 및 기타 무역 장벽에 대한 논의가 필요했어.
    21.30s  user  발화 끝
    21.69s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.23s]: China’s entry required extensive negotiations on issues including agri
    25.74s  user  발화 시작: 응.
    26.23s  user  발화 끝
    27.53s  agent 발화 시작: 그 협상은 복잡했고 양측 모두 많은 타협이 필요했어. 시간이 오래 걸린 과정이었지.
    27.55s  agent 발화 끝
    34.01s  agent 발화 끝
    34.14s  user  발화 시작: 그렇구나. 미국 경제에는 어떤 영향을 미쳤어?
    36.28s  <ret> 발화 (turn9 첫 프레임)
    36.87s  agent 발화 시작: <ret> 그건 좀 광범위한 질문인데— 이천일 년 이후로 미국과 중국 간의 무역이 증가하면서 기회와 어려움이
    37.01s  user  발화 끝
    37.24s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.25s]: U.S. trade with China increased significantly after 2001, leading to b
    43.63s  agent 발화 끝
    45.69s  user  발화 시작: 제조업에도 큰 변화가 있었어?
    47.58s  user  발화 끝
    47.64s  agent 발화 시작: —어떤 부문은 성장했고 다른 부문은 경쟁이 심화됐어—
    50.38s  user  발화 시작: 즉, 가입 후에 많은 제조업이 중국으로 옮겨갔어?
    50.96s  agent 발화 끝
    53.73s  agent 발화 시작: 응, 인건비 절감 등의 요인으로 중국으로 상당한 제조업 이주가 있었어.
    53.88s  user  발화 끝
    57.53s  agent 발화 끝
    58.06s  user  발화 시작: 저기, 보고서는 다 끝냈어?
    59.86s  user  발화 끝
    60.03s  user  발화 시작: 미안. 다시 중국으로 돌아가서— WTO 가입이 중국 내부 경제 정책에 큰 변화를 가져왔어?
    65.40s  agent 발화 시작: 내부적으로 상당한 경제 개혁을 촉진했고, 세계 무역 기준에 맞춰 정책을 조정했어. 정말 혁신적이었지.
    65.59s  user  발화 끝
    72.17s  <ret> 발화 (turn17 첫 프레임)
    72.54s  agent 발화 끝
    72.57s  ⚡SPAN 주입 [d'=0.40s / d_lead=1.82s]: WTO membership required China to adopt market-oriented policies, inclu
    72.77s  agent 발화 시작: <ret> 그 개혁은 광범위했어. 중국은 WTO에 가입하기 위해 시장 정책을 채택하고 산업에 대한 국가 통제
    80.04s  agent 발화 끝
