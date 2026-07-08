# v3_inter_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 나 폴 매카트니 첫 솔로 앨범 이름이 뭐였는지 기억이 안 나.
     4.17s  user  발화 끝
     4.54s  agent 발화 시작: 음, 그거 궁금하네. 비틀즈 이후 음악을 찾아보는 질문이구나.
     8.61s  agent 발화 끝
     8.64s  user  발화 시작: 그거 언제 나왔는지 알아?
     9.59s  <ret> 발화 (turn3 첫 프레임)
    10.12s  agent 발화 시작: <ret> 보자… 1970년 4월 17일에 발매됐어.
    10.34s  user  발화 끝
    10.39s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.54s]: McCartney was released on 17 April 1970.
    13.96s  agent 발화 끝
    14.46s  user  발화 시작: 그거 자가 제목 앨범이었어?
    15.92s  <ret> 발화 (turn5 첫 프레임)
    16.32s  ⚡SPAN 주입 [d'=0.40s / d_lead=1.80s]: McCartney is the first solo album by Paul McCartney.
    16.51s  agent 발화 시작: <ret> 맞아. 사실 그냥 *McCartney*라고 돼 있어.
    16.77s  user  발화 끝
    20.11s  agent 발화 끝
    20.33s  user  발화 시작: [laugh] 그거… 미니멀리스트네.
    23.54s  agent 발화 시작: 그건 그의 예술에 대한 아주 직접적이고 개인적인 접근 방식을 반영하는 것 같아.
    23.74s  user  발화 끝
    28.62s  user  발화 시작: 그가 농장에서 거의 혼자 녹음했다는 얘기를 들었는데?
    29.19s  agent 발화 끝
    31.84s  <ret> 발화 (turn9 첫 프레임)
    32.32s  user  발화 끝
    32.43s  agent 발화 시작: <ret> 네가 들은 게 맞아. 그는 농장에서 거의 혼자 녹음했는데, 꽤 특이한 방식이었어.
    32.84s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.47s]: McCartney was largely a one-man project, recorded by McCartney in his 
    38.31s  agent 발화 끝
    38.62s  user  발화 시작: 그 농장 이름이 뭐였어?
    39.57s  <ret> 발화 (turn11 첫 프레임)
    40.16s  agent 발화 시작: <ret> 그곳은… 카워드 매너라고 불렀어. 서섹스에 있는데, 잉글랜드의 아름다운 곳이야—
    40.19s  user  발화 끝
    40.57s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.76s]: Paul McCartney recorded the album at his farm, Coward Manor, in Sussex
    46.24s  user  발화 시작: 서섹스? 거기 내 이모가 살아!—그게 큰 영향을 줬어?
    46.93s  agent 발화 끝
    51.43s  user  발화 끝
    51.51s  agent 발화 시작: 응, 완전 그랬어. 그에게는 분명한 변화를 알렸어.
    56.09s  agent 발화 끝
    56.12s  agent 발화 시작: 그건 그에게 예술적으로 아주 중요한 순간이었어.
    59.96s  agent 발화 끝
    60.97s  user  발화 시작: 그때 잘 받아들여졌어?
    62.01s  <ret> 발화 (turn16 첫 프레임)
    62.41s  ⚡SPAN 주입 [d'=0.40s / d_lead=4.07s]: McCartney received mixed reviews upon release, but became a commercial
    62.54s  agent 발화 시작: <ret> 처음에는… 좀 놀랐어. 처음에는 평가가 엇갈렸지만, 빠르게 상업적으로 성공했어.
    62.76s  user  발화 끝
    69.68s  user  발화 시작: 그러니까, 혹평에도 불구하고 잘 팔렸어?
    69.86s  agent 발화 끝
    72.72s  agent 발화 시작: 응, 처음 비평가들의 예약에도 불구하고 상업적으로 아주 잘 됐어.
    72.91s  user  발화 끝
    77.63s  agent 발화 끝
