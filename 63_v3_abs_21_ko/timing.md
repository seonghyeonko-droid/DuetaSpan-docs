# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 프랑스 상원 의원 수는 몇 명이에요? | S2 오십칠 명이라니, 꽤 많네요. 그럼, 프랑스 대통령은 누가 선 | S3 결선 투표라… 흥미롭네요. 혹시 프랑스에서 가장 높은 산은 어 | S4 알프스 산맥… 언젠가 꼭 가보고 싶어요. [sigh]

     0.00s  user  발화 시작: 프랑스 상원 의원 수는 몇 명이에요?
     1.89s  <ret> 발화 (turn1 첫 프레임)
     2.13s  agent 발화 시작: <ret> 음… 그 부분은 제가 정확히 알지 못하네요.
     2.26s  user  발화 끝
     2.39s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.04s]: (no information found)
     5.14s  agent 발화 시작: 죄송하지만, 프랑스 상원 의원 수에 대한 정보는 찾을 수 없었습니다.
     5.17s  agent 발화 끝
     7.90s  user  발화 시작: Yeah.
     8.39s  user  발화 끝
     8.98s  agent 발화 끝
     9.65s  user  발화 시작: 아, 그렇군요. 그럼 프랑스 국민의회 의원 수는요?
    12.60s  <ret> 발화 (turn5 첫 프레임)
    12.91s  agent 발화 시작: <ret> 국민의회 의원 수는 찾았습니다. 프랑스 국민의회는 총 오백칠십칠 명의 의원으로 구성되어 있습니다.
    12.97s  user  발화 끝
    13.64s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.13s]: The French National Assembly has 577 members.
    17.64s  user  발화 시작: Yeah.
    18.09s  user  발화 끝
    19.29s  agent 발화 끝
    19.93s  user  발화 시작: 오십칠 명이라니, 꽤 많네요. 그럼, 프랑스 대통령은 누가 선출해요?
    25.07s  user  발화 끝
    25.51s  agent 발화 시작: 프랑스 대통령은 직접 선거를 통해 선출됩니다.
    28.23s  agent 발화 끝
    28.72s  user  발화 시작: 직접 선거요? 그건 어떻게 진행되는 거죠?
    31.31s  user  발화 끝
    31.31s  <ret> 발화 (turn10 첫 프레임)
    31.55s  agent 발화 시작: <ret> 대통령 선거는 두 번의 투표로 진행됩니다. 프랑스 대통령 선거는 두 번의 투표를 거쳐 결정됩니다.
    32.27s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.47s]: The French presidential election is decided by a two-round system.
    42.68s  agent 발화 끝
    43.10s  user  발화 시작: 결선 투표라… 흥미롭네요. 혹시 프랑스에서 가장 높은 산은 어디인가요?
    48.00s  <ret> 발화 (turn12 첫 프레임)
    48.32s  agent 발화 시작: <ret> 프랑스에서 가장 높은 산은 몽블랑입니다.
    48.38s  user  발화 끝
    49.44s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.59s]: Mont Blanc is the highest mountain in France, at 4,807 meters.
    50.91s  agent 발화 끝
    50.91s  agent 발화 시작: 몽블랑은 프랑스에서 가장 높은 산으로, 해발 사천팔백칠 미터입니다.
    52.40s  user  발화 시작: Yeah, yeah.
    53.13s  user  발화 끝
    55.59s  user  발화 시작: 사천팔백칠 미터나 되다니, 정말 대단하네요.
    55.64s  agent 발화 끝
    58.97s  agent 발화 시작: 몽블랑은 알프스 산맥에 위치하며 아름다운 경치를 자랑합니다.
    59.15s  user  발화 끝
    62.85s  agent 발화 끝
    64.16s  user  발화 시작: 알프스 산맥… 언젠가 꼭 가보고 싶어요. [sigh]
    67.36s  agent 발화 시작: 아름다운 곳을 방문하는 건 정말 좋은 생각입니다. 건강 관리에 늘 신경 쓰시고요.
    67.40s  user  발화 끝
    71.85s  agent 발화 끝
