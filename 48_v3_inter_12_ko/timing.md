# v3_inter_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 내가 폴 매카트니 첫 솔로 앨범 이름이 뭐였는지 기억하려고 해.
     3.89s  user  발화 끝
     4.28s  agent 발화 시작: 음, 그거 궁금하네. 비틀즈 이후 음악 탐구에 대한 질문이구나.
     9.38s  agent 발화 끝
     9.70s  user  발화 시작: 그거 언제 나왔는지 알아?
    10.52s  <ret> 발화 (turn3 첫 프레임)
    11.01s  agent 발화 시작: <ret> 보자… 1970년 4월 17일에 발매됐어.
    11.16s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.65s]: McCartney was released on 17 April 1970.
    11.17s  user  발화 끝
    15.13s  agent 발화 끝
    15.48s  user  발화 시작: 그거 자가 제목 앨범이었어?
    16.98s  <ret> 발화 (turn5 첫 프레임)
    17.58s  agent 발화 시작: <ret> 맞아. 사실 그냥 *McCartney*라고 제목이 붙었어.
    17.74s  user  발화 끝
    17.98s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.78s]: McCartney is the first solo album by Paul McCartney.
    21.10s  user  발화 시작: [laugh] 그거… 아주 단순하네.
    21.14s  agent 발화 끝
    24.01s  user  발화 끝
    24.04s  agent 발화 시작: 그건 그의 예술에 대한 아주 직접적이고 개인적인 접근 방식을 반영하는 것 같아.
    29.83s  user  발화 시작: 그가 농장에서 거의 혼자 녹음했다는 얘기를 들었어?
    29.87s  agent 발화 끝
    32.00s  <ret> 발화 (turn9 첫 프레임)
    32.60s  agent 발화 시작: <ret> 네가 들은 게 맞아. 그는 농장에서 거의 혼자 녹음했는데, 꽤 특이한 방식이었어.
    32.72s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.47s]: McCartney was largely a one-man project, recorded by McCartney in his 
    32.79s  user  발화 끝
    38.29s  user  발화 시작: 그 농장 이름이 뭐였어?
    38.49s  agent 발화 끝
    39.18s  <ret> 발화 (turn11 첫 프레임)
    39.72s  agent 발화 시작: <ret> 그곳은… 카워드 매너라고 불렀어. 서섹스에 있는데, 잉글랜드의 아름다운 곳이야—
    39.90s  user  발화 끝
    40.18s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.45s]: Paul McCartney recorded the album at his farm, Coward Manor, in Sussex
    45.12s  user  발화 시작: 서섹스? 거기 내 이모가 살아!—그게 큰 영향을 미쳤어?
    45.93s  agent 발화 끝
    48.81s  agent 발화 시작: 응, 당연하지. 그에게는 분명한 변화를 의미했어.
    48.86s  user  발화 끝
    53.09s  agent 발화 시작: 그건 그에게 예술적으로 아주 중요한 순간이었어.
    53.11s  agent 발화 끝
    56.66s  agent 발화 끝
    56.78s  user  발화 시작: 그때 잘 받아들여졌어?
    57.73s  <ret> 발화 (turn16 첫 프레임)
    58.22s  agent 발화 시작: <ret> 처음에는… 좀 놀라움이 있었지. 처음에는 평가가 엇갈렸지만, 빠르게 상업적으로 성공했어.
    58.43s  user  발화 끝
    58.73s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.85s]: McCartney received mixed reviews upon release, but became a commercial
    65.92s  agent 발화 끝
    66.02s  user  발화 시작: 그러니까, 혹평에도 불구하고 잘 팔렸어?
    68.35s  agent 발화 시작: 그래, 처음 비평가들의 예약에도 불구하고 상업적으로 아주 잘 됐어.
    68.56s  user  발화 끝
    73.54s  agent 발화 끝
