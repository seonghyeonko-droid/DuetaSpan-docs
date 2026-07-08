# v3_fstart_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I need a pool ride to Times Square, just for one person.
     1.64s  <ret> 발화 (turn1 첫 프레임)
     1.80s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.34s]: (tool result) A pool ride to Times Square is estimated at 22 dollars a
     2.23s  agent 발화 시작: <ret> Certainly. A pool ride to Times Square will cost twent
     2.45s  user  발화 끝
     7.60s  agent 발화 끝
     8.89s  user  발화 시작: That sounds good, book it for me.
    10.79s  <ret> 발화 (turn3 첫 프레임)
    11.04s  ⚡SPAN 주입 [d'=0.24s / d_lead=0.44s]: (tool result) Ride confirmed. Pickup in 3 minutes, driver is David, ve
    11.39s  agent 발화 시작: <ret> Wonderful. Your ride is confirmed with David in a silv
    11.46s  user  발화 끝
    17.92s  agent 발화 끝
    18.84s  user  발화 시작: Great! Uh, do you know anything about alpine gentians?
    21.80s  user  발화 끝
    21.84s  agent 발화 시작: Alpine gentians are fascinating wildflowers, typically a dee
    24.33s  agent 발화 끝
    25.04s  user  발화 시작: Oh, that’s lovely. Are they hard to cultivate?
    27.48s  user  발화 끝
    27.64s  agent 발화 시작: They are notoriously difficult to cultivate outside their na
    34.96s  agent 발화 끝
