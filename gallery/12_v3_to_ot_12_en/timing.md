# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was just wondering, who actually played the guitar solo on
     8.08s  <ret> 발화 (turn1 첫 프레임)
     8.31s  agent 발화 시작: <ret> That’s an excellent question, a fascinating intersecti
     8.48s  user  발화 끝
    10.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.59s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    18.17s  user  발화 시작: Wow, really? Van Halen? I always assumed it was someone… ses
    18.27s  agent 발화 끝
    23.14s  agent 발화 시작: It was quite a coup for Jackson to secure Van Halen’s partic
    23.22s  user  발화 끝
    29.07s  agent 발화 끝
    29.11s  user  발화 시작: Hey, did you remember to take the recycling out?
    31.63s  user  발화 시작: Sorry about that. So, was he paid a fee, or royalties, or…?
    31.68s  user  발화 끝
    35.84s  <ret> 발화 (turn6 첫 프레임)
    36.17s  user  발화 끝
    36.24s  agent 발화 시작: <ret> That’s a detail often debated amongst music historians
    36.96s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.47s]: Eddie Van Halen did not receive any royalties for his work on “Beat It
    45.51s  agent 발화 끝
