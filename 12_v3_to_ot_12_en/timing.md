# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 I was just wondering, who actually | S2 Wow, really? Eddie Van Halen? I al | S3 Hey, did you remember to take the  | S4 Sorry about that, where was I? Oh 

     0.00s  user  발화 시작: I was just wondering, who actually played the guitar solo on
     8.18s  <ret> 발화 (turn1 첫 프레임)
     8.42s  agent 발화 시작: <ret> That's a great question, and a really interesting musi
     8.53s  user  발화 끝
    10.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.23s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    12.21s  user  발화 시작: Okay.
    12.71s  user  발화 끝
    18.15s  agent 발화 끝
    18.30s  user  발화 시작: Wow, really? Eddie Van Halen? I always assumed it was someon
    24.19s  user  발화 시작: Hey, did you remember to take the chicken out of the freezer
    24.37s  user  발화 끝
    27.32s  user  발화 시작: Sorry about that, where was I? Oh right, Van Halen on “Beat 
    27.52s  user  발화 끝
    33.13s  <ret> 발화 (turn6 첫 프레임)
    33.52s  agent 발화 시작: <ret> It’s natural to wonder about those behind-the-scenes d
    33.72s  user  발화 끝
    34.97s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.10s]: Eddie Van Halen was paid $20,000 for his work on “Beat It”.
    42.05s  agent 발화 끝
