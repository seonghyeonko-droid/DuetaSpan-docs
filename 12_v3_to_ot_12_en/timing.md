# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 I was just wondering, who actually | S2 Wow, really? I always thought it w | S3 Hey, did you take the trash out ye | S4 Sorry about that. So, was he appro

     0.00s  user  발화 시작: I was just wondering, who actually played the guitar solo on
     6.21s  <ret> 발화 (turn1 첫 프레임)
     6.45s  agent 발화 시작: <ret> That’s a great question, and a very famous solo. Eddie
     6.58s  user  발화 끝
     8.05s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.21s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
     9.21s  user  발화 시작: Okay.
     9.89s  user  발화 끝
    13.59s  agent 발화 끝
    13.75s  user  발화 시작: Wow, really? I always thought it was someone else. That’s am
    17.98s  agent 발화 시작: It truly is a remarkable piece of musicianship, and a surpri
    18.11s  user  발화 끝
    23.95s  agent 발화 끝
    24.74s  user  발화 시작: Hey, did you take the trash out yet?
    26.97s  user  발화 시작: Sorry about that. So, was he approached specifically for tha
    27.05s  user  발화 끝
    32.45s  <ret> 발화 (turn7 첫 프레임)
    32.68s  agent 발화 시작: <ret> Michael Jackson specifically sought him out. Jackson p
    32.91s  user  발화 끝
    33.65s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.74s]: Michael Jackson personally requested Eddie Van Halen to play on “Beat 
    39.53s  agent 발화 끝
