# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 중국이 세계무역기구에 언제 가입했는지 궁금해서.
     3.17s  <ret> 발화 (turn1 첫 프레임)
     3.74s  agent 발화 시작: <ret> 그거 좋은 질문인데. 중국은 이천일 년 십이 월 십일 일에 WTO 회원국이 됐어.
     3.79s  user  발화 끝
     4.17s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.88s]: China acceded to the World Trade Organization on December 11, 2001.
     9.85s  agent 발화 끝
    10.41s  user  발화 시작: 와, 진짜 오래됐네. 그럼 지금 이십 년 넘었어?
    13.56s  agent 발화 시작: 맞아, 그 중요한 순간 이후로 이십 년 넘게 흘렀어. 세계 무역에 큰 영향을 줬지.
    13.74s  user  발화 끝
    18.41s  agent 발화 끝
    18.45s  user  발화 시작: 궁금한데, 중국이 가입하려면 어떤 큰 어려움을 넘어야 했어?
    22.07s  <ret> 발화 (turn5 첫 프레임)
    22.65s  agent 발화 시작: <ret> 좀 알려줄게. 중국의 WTO 가입은 농업 보조금이나 다른 무역 장벽에 대한 논의가 필요했어.
    22.80s  user  발화 끝
    23.07s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.40s]: China’s entry required extensive negotiations on issues including agri
    26.94s  user  발화 시작: 응.
    27.34s  user  발화 끝
    28.52s  agent 발화 시작: 그 협상은 복잡했고 양쪽 모두 많은 타협이 필요했어. 시간이 오래 걸린 과정이었지.
    28.87s  agent 발화 끝
    34.40s  agent 발화 끝
    36.16s  user  발화 시작: 그럼 미국의 경제에는 어떤 영향을 줬어?
    38.20s  <ret> 발화 (turn9 첫 프레임)
    38.78s  agent 발화 시작: <ret> 그건 좀 넓은 질문인데— 이천일 년 이후로 미국과 중국 간의 무역이 늘면서 기회와 어려움이 생겼어
    38.94s  user  발화 끝
    39.16s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.12s]: U.S. trade with China increased significantly after 2001, leading to b
    45.13s  agent 발화 끝
    45.25s  user  발화 시작: 그게 제조업에 큰 변화를 가져왔어?
    47.53s  agent 발화 시작: —어떤 분야는 성장했고 다른 분야는 경쟁이 심해졌어—
    47.65s  user  발화 끝
    50.49s  user  발화 시작: 그러니까, 가입 후에 제조업이 중국으로 많이 옮겨갔어?
    51.14s  agent 발화 끝
    54.19s  user  발화 끝
    54.55s  agent 발화 시작: 응, 인건비가 저렴하고 다른 요인들 때문에 중국으로 제조업이 상당히 이전됐어.
    59.81s  user  발화 시작: 저기, 보고서는 다 끝냈어?
    59.96s  agent 발화 끝
    61.92s  user  발화 시작: 미안. 다시 중국 얘기로 돌아가서— WTO 가입이 중국 내부 경제 정책에 큰 변화를 줬어?
    61.93s  user  발화 끝
    69.00s  agent 발화 시작: 내부적으로 상당한 경제 개혁을 촉진했고, 세계 무역 기준에 맞춰 정책을 정렬했어. 정말 큰 변화였지.
    69.15s  user  발화 끝
    75.82s  <ret> 발화 (turn17 첫 프레임)
    76.41s  agent 발화 시작: <ret> 그 개혁은 광범위했어. 중국은 WTO에 가입하기 위해 시장 정책을 채택하고 산업에 대한 국가 통제
    76.69s  agent 발화 끝
    76.82s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.17s]: WTO membership required China to adopt market-oriented policies, inclu
    85.08s  agent 발화 끝
