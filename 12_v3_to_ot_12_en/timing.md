# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 I was just listening to Beat It, a | S2 Wow, really? I always thought it s | S3 Hey, did you take the trash out ye | S4 Sorry about that. So, Van Halen ju

     0.00s  user  발화 시작: I was just listening to Beat It, and I was wondering— who ac
     5.91s  <ret> 발화 (turn1 첫 프레임)
     6.14s  agent 발화 시작: <ret> That’s a fantastic question, and a really iconic solo.
     6.35s  user  발화 끝
     7.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.54s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
     9.95s  user  발화 시작: Okay.
    10.91s  user  발화 끝
    15.79s  user  발화 시작: Wow, really? I always thought it sounded like Steve Vai.
    15.97s  agent 발화 끝
    20.40s  agent 발화 시작: It’s understandable to think of Steve Vai, they both have su
    20.47s  user  발화 끝
    24.43s  user  발화 시작: Hey, did you take the trash out yet?
    25.11s  agent 발화 끝
    26.58s  user  발화 시작: Sorry about that. So, Van Halen just… agreed to do it? Was h
    26.69s  user  발화 끝
    33.71s  <ret> 발화 (turn7 첫 프레임)
    34.10s  agent 발화 시작: <ret> Their collaboration was quite interesting, actually. M
    34.13s  user  발화 끝
    34.83s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.33s]: Michael Jackson invited Eddie Van Halen to contribute a guitar solo to
    46.53s  agent 발화 끝
