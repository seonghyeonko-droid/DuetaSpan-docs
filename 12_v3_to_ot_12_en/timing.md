# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 Do you know who played the guitar  | S2 Hey, did you take the trash out ye | S3 Sorry about that. So, was he asked | S4 That’s amazing! So it was complete

     0.00s  user  발화 시작: Do you know who played the guitar solo on Michael Jackson’s 
     5.22s  <ret> 발화 (turn1 첫 프레임)
     5.45s  agent 발화 시작: <ret> That is a very popular question, indeed. Eddie Van Hal
     5.56s  user  발화 끝
     6.58s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.68s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
     8.65s  user  발화 시작: Right.
     9.15s  user  발화 끝
    12.73s  agent 발화 끝
    12.80s  user  발화 시작: Wow, I always thought it was someone else! I— I mean, it jus
    19.06s  agent 발화 시작: Many listeners are surprised by the collaboration, given Van
    19.19s  user  발화 끝
    20.43s  user  발화 시작: Mm-hmm.
    21.07s  user  발화 끝
    23.60s  agent 발화 끝
    23.70s  user  발화 시작: Hey, did you take the trash out yet?
    25.64s  user  발화 시작: Sorry about that. So, was he asked specifically to make it d
    25.68s  user  발화 끝
    30.68s  <ret> 발화 (turn8 첫 프레임)
    30.91s  agent 발화 시작: <ret> Considering the context, that is a reasonable inquiry.
    31.00s  user  발화 끝
    31.88s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.87s]: Van Halen recorded his guitar solo separately and Jackson did not dire
    34.98s  user  발화 시작: Yeah.
    35.62s  user  발화 끝
    38.10s  agent 발화 끝
    38.36s  user  발화 시작: That’s amazing! So it was completely his own artistic choice
    42.39s  user  발화 끝
