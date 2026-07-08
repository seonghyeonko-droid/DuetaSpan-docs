# v3_fake__16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어… 2차 세계 대전 읽고 있었는데… 음, 미국이 원자폭탄을 어디에 떨어뜨렸어?
     6.25s  <ret> 발화 (turn1 첫 프레임)
     6.25s  ⚡SPAN 주입 [d'=0.00s / d_lead=2.36s]: The United States dropped atomic bombs on the Japanese cities of Hiros
     6.81s  user  발화 끝
     6.83s  agent 발화 시작: <ret> 그거 참 중요한 질문인데. 미국은 전쟁 중에 히로시마랑 나가사키에 원자폭탄을 떨어뜨렸어.
    13.31s  agent 발화 끝
    13.41s  user  발화 시작: 딱 두 군데 뿐이야, 그럼?
    15.53s  user  발화 끝
    15.54s  agent 발화 시작: 응, 맞아. 딱 두 군데 뿐이야.
    17.86s  user  발화 시작: 나가사키는 언제 정확히 폭격 받았어?
    17.89s  agent 발화 끝
    20.51s  <ret> 발화 (turn5 첫 프레임)
    21.09s  user  발화 끝
    21.11s  agent 발화 시작: <ret> 날짜 알려줄게. 나가사키는 1945년 8월 9일에 폭격 받았어.
    21.51s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.06s]: The city of Nagasaki was bombed on August 9, 1945.
    26.31s  user  발화 시작: [sigh] 끔찍하네. 처음부터 계획된 목표였어?
    26.53s  agent 발화 끝
    29.80s  <ret> 발화 (turn7 첫 프레임)
    30.38s  agent 발화 시작: <ret> 그건 좀 복잡한 역사를 알아야 해.
    30.56s  user  발화 끝
    30.76s  ⚡SPAN 주입(IRRELEVANT) [d'=0.96s / d_lead=2.58s]: (tool result) Current conditions in Ulaanbaatar are clear skies, 18 de
    32.82s  agent 발화 시작: 처음 목표는 달랐는데, 상황이 바뀌면서 나가사키로 바뀐 거야.
    32.96s  agent 발화 끝
    37.40s  agent 발화 끝
    38.14s  user  발화 시작: 그럼, 나가사키는 처음 선택은 아니었어?
    41.65s  user  발화 끝
