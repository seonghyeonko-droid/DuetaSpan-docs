# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 시카고에서 덴버 가는 버스, 5월 10일에 세 명 보여 줘.
     4.14s  <ret> 발화 (turn1 첫 프레임)
     4.38s  agent 발화 시작: <ret> 알아보고 있어요… 5월 10일에 시카고에서 덴버로 가는 버스는 아침 8시랑 저녁 6시에 있고, 가
     4.49s  user  발화 끝
     6.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.88s]: (tool result) There are two buses departing Chicago on May tenth: one 
    14.90s  agent 발화 끝
    15.40s  user  발화 시작: 아침 8시 걸로 할게. 그 버스 세 자리 예약해 줘.
    18.72s  <ret> 발화 (turn3 첫 프레임)
    18.88s  agent 발화 시작: <ret> 네, 확인해 볼게요… 예약이 확정됐어요. 예약 번호는 BX7492이고, 덴버 가는 아침 8시 버스
    19.00s  user  발화 끝
    19.68s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.49s]: (tool result) Reservation confirmed: confirmation number is BX7492, th
    29.35s  agent 발화 끝
    29.57s  user  발화 시작: 좋아. 음, 덴버 도착 예상 시간은 어떻게 돼?
    33.45s  user  발화 끝
    33.58s  agent 발화 시작: 좋은 질문이네요—
    34.26s  user  발화 시작: 버스에 와이파이 있어?
    34.86s  agent 발화 끝
    35.73s  user  발화 끝
    35.85s  agent 발화 시작: 네, 덴버로 가는 모든 버스에는 무료 와이파이가 제공되고, 좌석마다 콘센트도 있어요.
    42.82s  <ret> 발화 (turn8 첫 프레임)
    43.08s  agent 발화 끝
    43.14s  agent 발화 시작: <ret> 도착 시간은 보통… 버스는 덴버에 마운틴 타임으로 저녁 6시쯤 도착할 예정이에요.
    44.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.45s]: (tool result) The estimated arrival time for the 8:00 AM Chicago to De
    46.84s  user  발화 시작: 응.
    47.25s  user  발화 끝
    49.25s  agent 발화 끝
    49.35s  user  발화 시작: 저녁 6시. 알았어. 수하물 허용량은 어떻게 돼?
    53.03s  <ret> 발화 (turn11 첫 프레임)
    53.35s  agent 발화 시작: <ret> 각 승객은… 각 승객은 위탁 수하물 하나랑 기내 수하물 하나씩 가져올 수 있고, 무게는 각각 오십
    53.61s  user  발화 끝
    54.79s  ⚡SPAN 주입 [d'=1.76s / d_lead=1.97s]: (tool result) Each passenger is allowed one checked bag and one carry-
    63.09s  user  발화 시작: 각각 오십 파운드, 알아두면 좋네. 아— 화장실은 있어?
    63.17s  agent 발화 끝
    68.46s  agent 발화 시작: 네, 저희 장거리 버스에는 승객 편의를 위해 화장실이 마련되어 있어요.
    68.61s  user  발화 끝
    73.00s  agent 발화 끝
    73.41s  user  발화 시작: 완벽해. 그리고 중간에 정류장이 있어?
    76.09s  <ret> 발화 (turn15 첫 프레임)
    76.33s  agent 발화 시작: <ret> 몇 군데 정류장이 있어요… 버스는 네브래스카 주의 오마하랑 캔자스 주의 헤이스에서 각각 15분씩 
    76.50s  user  발화 끝
    76.59s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.21s]: (tool result) The bus stops in Omaha, Nebraska, and Hays, Kansas, for 
    84.34s  agent 발화 끝
    85.41s  user  발화 시작: 각각 15분, 도움이 되네. 정말 고마워.
    89.07s  user  발화 끝
    89.24s  agent 발화 시작: 천만에요! 덴버 여행 즐겁게 다녀오세요. 여행 계획에 언제든지 도움을 드릴 수 있어요.
    95.73s  agent 발화 끝
