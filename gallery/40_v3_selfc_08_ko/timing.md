# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 시카고에서 덴버까지 세 명, 5월 10일에 가는 버스 좀 보여 줘.
     4.49s  <ret> 발화 (turn1 첫 프레임)
     4.73s  agent 발화 시작: <ret> 네, 버스 좌석 상황을 확인해 드릴게요. 5월 10일에 출발하는 버스가 두 대 있는데, 가격은 각
     4.81s  user  발화 끝
     6.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.49s]: (tool result) There are two buses available on May tenth: one departin
    14.27s  agent 발화 끝
    14.73s  user  발화 시작: 오전 8시 거 괜찮은 것 같아. 그걸로 예약해 줘.
    18.27s  <ret> 발화 (turn3 첫 프레임)
    18.43s  agent 발화 시작: <ret> 네, 해당 출발 시간으로 예약을 완료해 드렸습니다. 예약 번호는 BX8729이고, 세 명으로 예약
    18.57s  user  발화 끝
    19.31s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.93s]: (tool result) Your booking is confirmed: confirmation number is BX8729
    27.00s  agent 발화 끝
    27.23s  user  발화 시작: 좋네. 음, 그 버스 수하물 규정은 어떻게 돼?
    30.22s  <ret> 발화 (turn5 첫 프레임)
    30.54s  agent 발화 시작: <ret> 여행 준비에 관해 좋은 질문이세요— 각 승객은 무게가 50파운드 이하인 휴대 수하물 하나와 위탁 
    30.60s  user  발화 끝
    32.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.81s]: (tool result) Each passenger is allowed one carry-on bag and one check
    36.07s  user  발화 시작: 응.
    36.56s  user  발화 끝
    39.58s  agent 발화 끝
    39.59s  user  발화 시작: 버스에 와이파이 있어?
    40.58s  <ret> 발화 (turn8 첫 프레임)
    40.98s  agent 발화 시작: <ret> 네, 승객분들이 이동 중에도 연결 상태를 유지할 수 있습니다. 버스에 와이파이가 제공되며, 속도는
    41.19s  user  발화 끝
    42.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.43s]: (tool result) Wi-Fi is available on the Chicago to Denver bus, with a 
    50.48s  agent 발화 끝
    50.68s  user  발화 시작: 알아두면 좋네. 아, 화장실도 있나?
    53.87s  user  발화 시작: 음식은 살 수 있어?
    54.05s  user  발화 끝
    55.30s  user  발화 끝
    55.30s  agent 발화 시작: 네, 승객 편의를 위해 버스에 화장실이 마련되어 있습니다. —
    59.73s  <ret> 발화 (turn12 첫 프레임)
    59.79s  agent 발화 끝
    59.89s  agent 발화 시작: <ret> 음료와 음식에 대해서도 확인해 드릴게요. 샌드위치, 감자칩, 탄산음료 등 간식과 음료를 구매할 수
    61.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.55s]: (tool result) Snacks and drinks are available for purchase on the bus,
    67.86s  agent 발화 끝
    67.95s  user  발화 시작: 좋네. 덴버 미술관에 대해서는…
    70.58s  agent 발화 시작: 덴버는 훌륭한 미술관이 여러 곳 있는 멋진 예술 도시예요.
    70.73s  user  발화 끝
    75.02s  agent 발화 끝
    75.11s  user  발화 시작: 콜럼버스 이전 미술품 컬렉션이 제일 좋은 곳은 어디야?
    79.20s  <ret> 발화 (turn16 첫 프레임)
    79.28s  user  발화 끝
    79.52s  agent 발화 시작: <ret> 덴버 미술관이 콜럼버스 이전 미술품 컬렉션으로 유명합니다. 덴버 미술관에는 콜럼버스 이전 유물이 
    81.04s  ⚡SPAN 주입 [d'=1.84s / d_lead=5.24s]: (tool result) The Denver Art Museum’s pre-Columbian collection contain
    88.13s  user  발화 시작: 와, 굉장하네. 버스 정류장에서 얼마나 떨어져 있어?
    88.42s  agent 발화 끝
    91.74s  <ret> 발화 (turn18 첫 프레임)
    92.14s  agent 발화 시작: <ret> 거리를 확인하고 이동 시간을 알려 드릴게요.
    92.20s  user  발화 끝
    92.86s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.44s]: (tool result) The Denver Art Museum is 2.5 miles from the Denver Bus S
    94.59s  agent 발화 끝
