# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 주니 카페 가격대는 어떻게 돼요?
     1.36s  <ret> 발화 (turn1 첫 프레임)
     1.75s  agent 발화 시작: <ret> 잠시만 확인해 볼게요… 주니 카페는 가격대가 보통 비싼 편이고, 가격 표시는 세 개의 달러 표시예
     1.93s  user  발화 끝
     3.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.15s]: (tool result) Zuni Cafe’s price range is dollar signs three, meaning m
     9.53s  agent 발화 끝
     9.58s  user  발화 시작: 알겠습니다. 지금은 영업 중인가요?
    11.41s  <ret> 발화 (turn3 첫 프레임)
    11.73s  agent 발화 시작: <ret> 영업시간을 확인해 볼 수 있어요… 네, 주니 카페는 오늘 저녁 열 시까지 영업하고 있어요.
    11.93s  user  발화 끝
    13.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.69s]: (tool result) Zuni Cafe is currently open and closes at ten PM tonight
    17.34s  user  발화 시작: 좋아요. 저녁 일곱 시 반에 두 명 자리를 예약해 줄 수 있을까요?
    17.48s  agent 발화 끝
    20.74s  <ret> 발화 (turn5 첫 프레임)
    21.13s  agent 발화 시작: <ret> 예약 가능 여부를 확인해 볼게요… 주니 카페에 두 명 자리가 일곱 시 반에 예약 완료됐습니다. 확
    21.28s  user  발화 끝
    22.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.47s]: (tool result) Reservation confirmed at Zuni Cafe for two people at sev
    30.08s  agent 발화 끝
    30.36s  user  발화 시작: 완벽하네요. 주소 다시 알려 주시겠어요?
    32.78s  <ret> 발화 (turn7 첫 프레임)
    32.86s  agent 발화 시작: <ret> 바로 확인해 드릴게요… 주니 카페 주소는 샌프란시스코 마켓 스트리트 1658번지입니다.
    33.08s  user  발화 끝
    33.74s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.56s]: (tool result) Zuni Cafe is located at 1658 Market Street, San Francisc
    38.79s  agent 발화 끝
    39.56s  user  발화 시작: 거기 주변에 주차하기 어렵나요?
    41.24s  <ret> 발화 (turn9 첫 프레임)
    41.47s  agent 발화 시작: <ret> 그쪽은 주차하기가 까다로울 수 있는데, 잠시 알아볼게요… 근처 주차장들은 저녁에 삼십 달러에서 육
    41.55s  user  발화 끝
    43.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.18s]: (tool result) Nearby parking garages have rates ranging from thirty to
    49.77s  agent 발화 끝
    50.55s  user  발화 시작: 육십 달러는 좀 비싸네요—
    52.24s  user  발화 끝
    52.27s  agent 발화 시작: 네, 조금 높은 가격인 것 같아요. 그리고 제가—
    55.02s  user  발화 시작: 대중교통 옵션은 가까이에 있나요?
    55.76s  agent 발화 끝
    57.13s  agent 발화 시작: 물론입니다. 가장 가까운 무니 메트로 역은 시빅 센터 역이고, 주니 카페에서 가까운 거리에 있어요.
    57.28s  user  발화 끝
    64.12s  agent 발화 끝
    64.19s  user  발화 시작: 알겠습니다, 좋네요. 시빅 센터 역에서 걸어서 얼마나 걸릴까요?
    67.82s  <ret> 발화 (turn15 첫 프레임)
    68.14s  agent 발화 시작: <ret> 거기서부터 가는 길 안내를 해 드릴 수 있어요… 시빅 센터 역에서 주니 카페까지 걸어서 약 십오 
    68.31s  user  발화 끝
    69.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.26s]: (tool result) Walking from Civic Center Station to Zuni Cafe takes app
    75.89s  agent 발화 끝
    76.11s  user  발화 시작: 십오 분이면 괜찮겠네요. [happy] 일곱 시 십오 분에 출발하라고 알림 설정해 줄 수 있나요?
    80.65s  <ret> 발화 (turn17 첫 프레임)
    80.89s  agent 발화 시작: <ret> 물론이죠, 설정해 드릴게요… 주니 카페에 가기 위해 저녁 일곱 시 십오 분에 출발하라는 알림이 설
    81.11s  user  발화 끝
    82.57s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.47s]: (tool result) Reminder set for seven fifteen PM: Leave for Zuni Cafe.
    88.12s  user  발화 시작: 정말 감사합니다.
    88.34s  agent 발화 끝
    89.48s  agent 발화 시작: 천만에요. 주니 카페에서 즐거운 시간 보내시길 바랍니다. 저는 항상 그들의 로스트 치킨을 좋아했는데, 정말 
    89.60s  user  발화 끝
    98.61s  agent 발화 끝
