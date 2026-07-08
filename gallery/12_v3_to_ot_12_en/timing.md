# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was wondering, who actually played the guitar solo on 
     6.51s  <ret> 발화 (turn1 첫 프레임)
     6.74s  agent 발화 시작: <ret> That’s a very good question, a surprisingly complex st
     6.77s  user  발화 끝
     8.27s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.16s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    13.99s  user  발화 시작: Wow, really? Van Halen? I always assumed it was someone from
    14.11s  agent 발화 끝
    18.95s  agent 발화 시작: It was quite a coup for Jackson to get him, actually. Van Ha
    19.03s  user  발화 끝
    24.08s  agent 발화 끝
    24.14s  user  발화 시작: That’s amazing. I didn’t know he almost didn’t do it. [to ot
    31.11s  user  발화 시작: Seriously, it’s overflowing!
    31.28s  user  발화 끝
    33.44s  user  발화 시작: Sorry about that. Back to the song—
    33.60s  user  발화 끝
    35.56s  <ret> 발화 (turn7 첫 프레임)
    35.96s  agent 발화 시작: <ret> As I was saying, the circumstances— He recorded the so
    36.07s  user  발화 끝
    37.40s  ⚡SPAN 주입 [d'=1.84s / d_lead=1.99s]: Van Halen recorded his guitar solo for free, but insisted on not being
    45.23s  agent 발화 끝
    45.55s  user  발화 시작: That *is* strange. Why would he not want credit?
    49.49s  user  발화 끝
    49.63s  agent 발화 시작: He didn't want it to appear as if he was a "for-hire" guitar
    55.74s  agent 발화 끝
