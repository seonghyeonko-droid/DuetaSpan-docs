# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was wondering, do you happen to know when the Oakland A's 
     4.91s  <ret> 발화 (turn1 첫 프레임)
     5.30s  agent 발화 시작: <ret> That’s a good baseball question, and I can certainly l
     5.47s  user  발화 끝
     6.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.64s]: <The last time the Oakland Athletics were no-hit was April 21, 2018.>
    15.59s  user  발화 시작: Wow, that was quite a while ago.
    15.78s  agent 발화 끝
    18.18s  user  발화 끝
    18.23s  agent 발화 시작: It certainly was—a testament to their pitching staff that it
    27.41s  agent 발화 끝
    27.59s  user  발화 시작: Do you know who pitched the no-hitter against them?
    30.01s  <ret> 발화 (turn5 첫 프레임)
    30.25s  agent 발화 시작: <ret> That’s an excellent follow-up question, and I can find
    30.40s  user  발화 끝
    32.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.41s]: <James Paxton pitched a no-hitter against the Oakland Athletics on May
    40.26s  agent 발화 끝
    40.58s  user  발화 시작: Can you believe how loud the dog is barking?
    43.63s  user  발화 끝
    43.63s  user  발화 시작: So, it wasn’t that long after the last time they *were* no-h
    47.80s  user  발화 끝
