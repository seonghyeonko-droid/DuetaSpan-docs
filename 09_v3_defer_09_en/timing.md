# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 Book three rooms at Ocean View Hot | S2 Actually, before you do, is breakf | S3 Okay, good to know. So, what *is*  | S4 That sounds reasonable. Thanks, Ti

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.35s  <ret> 발화 (turn1 첫 프레임)
     5.59s  agent 발화 시작: <ret> Certainly, let’s get that arranged for you. Your reser
     5.74s  user  발화 끝
     6.55s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.36s]: (tool result) Reservation confirmed for three rooms at Ocean View Hote
    10.73s  user  발화 시작: Mm-hmm.
    11.36s  user  발화 끝
    13.01s  agent 발화 끝
    13.06s  user  발화 시작: And what’s the cancellation policy?
    15.11s  agent 발화 시작: Let me check on that for you—
    15.13s  user  발화 끝
    16.01s  user  발화 시작: Actually, before you do, is breakfast included?
    16.67s  agent 발화 끝
    18.85s  agent 발화 시작: The tool result doesn’t mention breakfast, so it’s not autom
    18.92s  user  발화 끝
    23.57s  agent 발화 끝
    23.71s  user  발화 시작: Okay, good to know. So, what *is* the cancellation policy th
    28.59s  <ret> 발화 (turn8 첫 프레임)
    28.94s  agent 발화 시작: <ret> Regarding cancellations, I’m retrieving that informati
    29.18s  user  발화 끝
    29.95s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.46s]: (tool result) Cancellations are permitted up to forty-eight hours befo
    36.31s  agent 발화 끝
    36.62s  user  발화 시작: That sounds reasonable. Thanks, Tian.
    39.25s  user  발화 끝
