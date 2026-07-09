# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 방 세 개를 샌디에이고 오션 뷰 호텔에서 2월 10일부터 7박 | S2 근데, 그 전에 아침 식사가 포함돼 있어? | S3 알았어, 좋은 정보네. 그럼 취소 정책은 뭔데? | S4 그거 괜찮네. 고마워, 티안.

     0.00s  user  발화 시작: 방 세 개를 샌디에이고 오션 뷰 호텔에서 2월 10일부터 7박으로 예약해 줘.
     4.46s  <ret> 발화 (turn1 첫 프레임)
     4.78s  agent 발화 시작: <ret> 네, 예약을 확정해 드렸습니다. 오션 뷰 호텔에서 방 세 개를 7박 동안 예약됐습니다.
     5.00s  user  발화 끝
     6.22s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.01s]: (tool result) Reservation confirmed for three rooms at Ocean View Hote
     8.70s  user  발화 시작: 응.
     9.20s  user  발화 끝
    10.38s  agent 발화 끝
    10.74s  user  발화 시작: 취소 정책은 뭐야?
    12.30s  user  발화 끝
    12.70s  agent 발화 시작: 알아봐 드릴게요—
    13.00s  user  발화 시작: 근데, 그 전에 아침 식사가 포함돼 있어?
    13.56s  agent 발화 끝
    15.88s  agent 발화 시작: 검색 결과에는 아침 식사에 대한 언급이 없어서 예약에 자동으로 포함되지는 않는 것 같아요.
    15.95s  user  발화 끝
    21.52s  agent 발화 끝
    21.82s  user  발화 시작: 알았어, 좋은 정보네. 그럼 취소 정책은 뭔데?
    24.72s  <ret> 발화 (turn8 첫 프레임)
    25.04s  agent 발화 시작: <ret> 취소에 대해서는 지금 정보를 가져오고 있습니다. 2월 10일 48시간 전까지 취소하시면 전액 환불
    25.24s  user  발화 끝
    26.32s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.25s]: (tool result) Cancellations are permitted up to forty-eight hours befo
    32.00s  agent 발화 끝
    33.65s  user  발화 시작: 그거 괜찮네. 고마워, 티안.
    36.05s  user  발화 끝
