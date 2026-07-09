# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 심박수 궁금했어. | S2 어, 생각보다 범위가 꽤 넓네. 그 안에서 딱 좋은 숫자가 있 | S3 쓰레기 버린 거 기억해? | S4 그 범위를 벗어나면 걱정해야 하는 거야?

     0.00s  user  발화 시작: 심박수 궁금했어.
     1.19s  <ret> 발화 (turn1 첫 프레임)
     1.35s  agent 발화 시작: <ret> 좋은 질문인데, 보통 성인의 정상적인 휴식 심박수는 분당 육십 회에서 백 회 사이야.
     1.37s  user  발화 끝
     1.69s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.80s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
     7.42s  agent 발화 끝
     8.97s  user  발화 시작: 어, 생각보다 범위가 꽤 넓네. 그 안에서 딱 좋은 숫자가 있어?
    12.92s  <ret> 발화 (turn3 첫 프레임)
    13.16s  agent 발화 시작: <ret> 운동량에 따라 조금 다르긴 한데, 건강한 심박수는 보통 분당 오십 회에서 구십 회 정도라고 봐.
    13.23s  user  발화 끝
    14.28s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.70s]: A healthy heart rate typically falls between 50 and 90 beats per minut
    19.92s  agent 발화 끝
    20.11s  user  발화 시작: 쓰레기 버린 거 기억해?
    21.52s  user  발화 끝
    21.55s  user  발화 시작: 그 범위를 벗어나면 걱정해야 하는 거야?
    24.03s  user  발화 끝
