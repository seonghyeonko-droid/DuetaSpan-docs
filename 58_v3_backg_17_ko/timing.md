# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 심박수 보통 얼마 정도 돼? | S2 어, 생각보다 범위가 엄청 넓네. 그럼 딱 이상적인 숫자는 있 | S3 분리수거는 내놓고 왔어? | S4 그럼, 육십 회보다 낮으면 걱정해야 돼?

     0.00s  user  발화 시작: 심박수 보통 얼마 정도 돼?
     2.11s  <ret> 발화 (turn1 첫 프레임)
     2.50s  user  발화 끝
     2.51s  agent 발화 시작: <ret> 음, 많이 물어보는데, 사람마다 다르긴 해— 보통 성인의 경우 안정 시 심박수는 분당 육십 회에서
     3.63s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.85s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
    10.22s  user  발화 시작: 어, 생각보다 범위가 엄청 넓네. 그럼 딱 이상적인 숫자는 있어?
    10.25s  agent 발화 끝
    14.02s  <ret> 발화 (turn3 첫 프레임)
    14.34s  agent 발화 시작: <ret> 뭐, 딱 좋은 게 있긴 하지— 건강한 심박수는 보통 분당 오십 회에서 구십 회 정도라고 봐.
    14.48s  user  발화 끝
    15.46s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.01s]: A healthy heart rate typically falls between 50 and 90 beats per minut
    20.77s  agent 발화 끝
    21.31s  user  발화 시작: 분리수거는 내놓고 왔어?
    22.98s  user  발화 시작: 그럼, 육십 회보다 낮으면 걱정해야 돼?
    23.06s  user  발화 끝
    25.61s  user  발화 끝
