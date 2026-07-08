# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 남부 포인트 카지노가 라스베이거스에서 누구 소유인지 궁금했어요.
     4.44s  agent 발화 시작: 좋은 질문인데. 현지인들한테 인기 있는 곳이거든.
     4.62s  user  발화 끝
     7.42s  <ret> 발화 (turn2 첫 프레임)
     8.01s  agent 발화 시작: <ret> 음… 마이클 고건이 현재 남부 포인트 카지노, 호텔, 스파, 그리고 카지노의 소유주야.
     8.24s  agent 발화 끝
     8.30s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.03s]: Michael Gaughan currently owns the South Point Casino, Hotel, Spa, and
    13.83s  user  발화 시작: 그렇군요. 그럼 그가 얼마나 오랫동안 소유했는지 알 수 있을까요?
    14.22s  agent 발화 끝
    18.82s  user  발화 끝
    18.90s  agent 발화 시작: 고건은 수십 년 동안 베가스 게임 업계에서 중요한 인물이었어, 진짜 독특한 사람이지.
    23.29s  <ret> 발화 (turn5 첫 프레임)
    23.88s  agent 발화 시작: <ret> 그걸 정확히 알려줄 수 있을 것 같아. 마이클 고건은 이천육년에 남부 포인트를 샀어.
    23.95s  agent 발화 끝
    24.29s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.70s]: Michael Gaughan purchased the South Point Hotel, Casino & Spa in 2006.
    29.90s  agent 발화 끝
    30.37s  user  발화 시작: 네.
    30.67s  agent 발화 시작: 그는 그 위치의 잠재력을 정말 알아봤어, 스트립에서 조금 떨어져 있거든.
    30.91s  user  발화 끝
    34.32s  <ret> 발화 (turn8 첫 프레임)
    34.91s  agent 발화 시작: <ret> 자, 다른 부동산에 대해서는… 고건은 이천사년에 코스트 카지노를 팔기 전에 소유하고 있었어.
    35.32s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.55s]: Prior to South Point, Gaughan owned Coast Casinos, which he sold in 20
    35.35s  agent 발화 끝
    40.85s  user  발화 시작: 그럼 코스트 카지노에서 번 돈으로—
    41.02s  agent 발화 끝
    43.07s  agent 발화 시작: 그는 확실히 활용했지—
    43.30s  user  발화 끝
    43.66s  user  발화 시작: 남부 포인트를 직접 지었는지, 아니면 이미 있던 건물을 샀는지 궁금해요.
    44.59s  agent 발화 끝
    48.62s  agent 발화 시작: 실제로 아주 통찰력 있는 질문이야. 완전히 새로 지은 건물이 아니었어.
    48.75s  user  발화 끝
    53.23s  <ret> 발화 (turn13 첫 프레임)
    53.53s  agent 발화 끝
    53.82s  agent 발화 시작: <ret> 개발 역사를 좀 더 자세히 설명해 줄게. 그린스펀 코퍼레이션이 원래 이천오년에 남부 포인트를 지었
    54.23s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.94s]: The South Point was originally built in 2005 by the Greenspun Corporat
    60.51s  user  발화 시작: 아, 그럼 고건은 지어진 후에 샀다는 거군요.
    60.68s  agent 발화 끝
    63.13s  <ret> 발화 (turn15 첫 프레임)
    63.65s  user  발화 끝
    63.73s  agent 발화 시작: <ret> 맞아. 아주 현명한 인수였던 것 같아. 꽤 많이 개선했거든.
    64.13s  ⚡SPAN 주입(IRRELEVANT) [d'=1.00s / d_lead=3.84s]: (tool result) Driving directions from the South Point Hotel Casino Spa
    67.50s  agent 발화 시작: 그는 도박꾼들이 뭘 원하는지 잘 아는 재주가 있어.
    67.57s  agent 발화 끝
    69.85s  <ret> 발화 (turn17 첫 프레임)
    70.44s  agent 발화 시작: <ret> 근데 흥미로운 점은… 마이클의 아버지인 잭 고건도 예전에 베가스에서 유명한 카지노 소유주였다는 거
    70.55s  agent 발화 끝
    70.85s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.51s]: Michael Gaughan’s father, Jack Gaughan, was also a prominent Las Vegas
    76.98s  agent 발화 끝
    78.80s  user  발화 시작: 그럼 가족 사업인 거네요?
    80.64s  user  발화 끝
    80.67s  agent 발화 시작: 어떤 면에서는 그래. 유산이라고 할까. 마치 음악적 혈통 같은 거지.
    85.44s  agent 발화 끝
