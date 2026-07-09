# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 오션뷰 호텔에서 2월 10일부터 7박 동안 방 세 개 예약해 줘.
     4.49s  <ret> 발화 (turn1 첫 프레임)
     4.65s  agent 발화 시작: <ret> 네, 오션뷰 호텔 방 세 개를 2월 10일부터 7박으로 예약해 드리겠습니다.
     4.72s  user  발화 끝
     5.93s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.68s]: (tool result) Reservation confirmed for three rooms at Ocean View Hote
     9.14s  agent 발화 시작: 오션뷰 호텔, 샌디에이고에서 2월 10일부터 7박, 총 금액은 1260달러입니다.
     9.33s  agent 발화 끝
    12.43s  user  발화 시작: 어어.
    13.25s  user  발화 끝
    14.98s  agent 발화 끝
    15.00s  user  발화 시작: 혹시 취소 정책은 어떻게 돼?
    16.49s  <ret> 발화 (turn5 첫 프레임)
    16.80s  agent 발화 시작: <ret> 취소 정책에 대해서는…
    16.93s  user  발화 끝
    16.99s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.88s]: (tool result) Cancellations are permitted up to 48 hours before check-
    18.67s  agent 발화 시작: 체크인 48시간 전까지는 취소 가능하고, 수수료 10달러를 제외한 전액 환불됩니다.
    18.68s  agent 발화 끝
    25.02s  agent 발화 끝
    26.32s  user  발화 시작: 음, 좋아. 그럼 그 호텔 근처에 괜찮은 식당도 찾아줄 수 있어?
    31.03s  agent 발화 시작: 물론입니다. 어떤 종류의 음식을 좋아하세요?
    31.13s  user  발화 끝
    34.08s  agent 발화 끝
