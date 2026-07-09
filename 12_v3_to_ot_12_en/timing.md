# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 I was just wondering, who actually | S2 Wow, Eddie Van Halen? That’s… unex | S3 Hey, did you remember to take the  | S4 Sorry about that. So, was he asked

     0.00s  user  발화 시작: I was just wondering, who actually played the guitar solo on
     7.15s  <ret> 발화 (turn1 첫 프레임)
     7.39s  agent 발화 시작: <ret> That’s a great question, and a really memorable solo. 
     7.51s  user  발화 끝
     8.91s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.07s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    13.15s  user  발화 시작: Yeah.
    13.64s  user  발화 끝
    15.23s  agent 발화 끝
    15.38s  user  발화 시작: Wow, Eddie Van Halen? That’s… unexpected, honestly. I always
    22.17s  user  발화 시작: Hey, did you remember to take the trash out?
    22.32s  user  발화 끝
    24.45s  user  발화 시작: Sorry about that. So, was he asked specifically to do it, or
    24.66s  user  발화 끝
    30.14s  <ret> 발화 (turn6 첫 프레임)
    30.53s  agent 발화 시작: <ret> Michael Jackson apparently really wanted a hard rock e
    30.75s  user  발화 끝
    32.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.81s]: Michael Jackson specifically requested Eddie Van Halen to play guitar 
    37.24s  agent 발화 시작: Michael Jackson specifically requested Eddie Van Halen to pl
    37.34s  agent 발화 끝
    42.19s  agent 발화 끝
