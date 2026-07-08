# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was just wondering, who actually played the guitar solo on
     5.56s  <ret> 발화 (turn1 첫 프레임)
     5.80s  agent 발화 시작: <ret> That’s a popular question, certainly. Eddie Van Halen 
     5.93s  user  발화 끝
     7.16s  ⚡SPAN 주입 [d'=1.60s / d_lead=1.81s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    11.43s  user  발화 시작: Wow, really? I always assumed it was one of Jackson’s regula
    11.59s  agent 발화 끝
    16.58s  agent 발화 시작: It was quite a coup for Jackson to secure Van Halen for the 
    16.66s  user  발화 끝
    21.67s  agent 발화 끝
    21.75s  user  발화 시작: Hey, did you take out the trash yet?
    23.74s  user  발화 시작: Sorry about that. So, was Van Halen hesitant to work with Ja
    23.91s  user  발화 끝
    29.56s  <ret> 발화 (turn6 첫 프레임)
    29.96s  agent 발화 시작: <ret> There were some initial reservations, yes. Van Halen i
    30.00s  user  발화 끝
    30.60s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.14s]: Eddie Van Halen initially refused payment for his work on “Beat It”.
    38.16s  agent 발화 끝
    38.41s  user  발화 시작: That’s pretty cool. Did he ever explain why he didn’t want t
    42.58s  user  발화 끝
    42.84s  agent 발화 시작: He felt it was a fun project, and he admired Jackson’s willi
    48.21s  agent 발화 끝
