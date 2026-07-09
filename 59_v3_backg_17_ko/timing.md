# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 심장이 건강할 때 평균 맥박수가 어떻게 돼? | S2 아, 그건 좀 높은 것 같고… 좀 더 낮은 범위는 없어? | S3 저녁 뭐 먹을까? | S4 오, 그럼 50에서 90 사이가 가장 이상적인 건가 보네.

     0.00s  user  발화 시작: 심장이 건강할 때 평균 맥박수가 어떻게 돼?
     2.50s  <ret> 발화 (turn1 첫 프레임)
     2.66s  agent 발화 시작: <ret> 건강한 사람의 맥박수를 알아볼까요? 건강한 성인의 정상적인 휴식 시 맥박은 분당 60회에서 100
     2.92s  user  발화 끝
     3.00s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.25s]: A normal resting heart rate for adults ranges from 60 to 100 bpm.
     7.69s  user  발화 시작: Wow.
     8.51s  user  발화 끝
    10.32s  user  발화 시작: 아, 그건 좀 높은 것 같고… 좀 더 낮은 범위는 없어?
    10.54s  agent 발화 끝
    14.25s  <ret> 발화 (turn4 첫 프레임)
    14.48s  agent 발화 시작: <ret> 좀 더 정확한 정보를 찾아볼게요. 건강한 사람의 평균 맥박은 분당 50회에서 90회 사이입니다.
    14.48s  user  발화 끝
    15.61s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.69s]: The average healthy heart rate is between 50 and 90 bpm.
    21.47s  agent 발화 끝
    21.51s  user  발화 시작: 저녁 뭐 먹을까?
    22.88s  user  발화 시작: 오, 그럼 50에서 90 사이가 가장 이상적인 건가 보네.
    23.02s  user  발화 끝
    26.63s  user  발화 끝
