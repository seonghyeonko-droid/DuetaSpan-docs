# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 I was just wondering, who actually | S2 Hey, did you remember to take the  | S3 Sorry about that. So, Van Halen ju | S4 A prank? That's wild!

     0.00s  user  발화 시작: I was just wondering, who actually played the guitar solo on
     8.54s  <ret> 발화 (turn1 첫 프레임)
     8.78s  agent 발화 시작: <ret> That’s a great question, and a really distinctive solo
     8.90s  user  발화 끝
    10.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.43s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    12.03s  user  발화 시작: Okay.
    12.76s  user  발화 끝
    17.17s  agent 발화 끝
    17.31s  user  발화 시작: Wow, really? Eddie Van Halen? I always thought it was someon
    21.87s  user  발화 시작: Hey, did you remember to take the chicken out of the freezer
    22.03s  user  발화 끝
    24.63s  user  발화 시작: Sorry about that. So, Van Halen just… did it as a favor, or 
    24.83s  user  발화 끝
    30.93s  agent 발화 시작: It was a bit of both, actually. Quincy Jones wanted a rock e
    31.08s  user  발화 끝
    37.79s  agent 발화 끝
    38.42s  user  발화 시작: A prank? That's wild!
    40.54s  user  발화 끝
    40.58s  agent 발화 시작: He eventually agreed, and didn’t want any royalties—only tha
    48.54s  agent 발화 끝
