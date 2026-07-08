# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Do you know who played the guitar solo on Michael Jackson’s 
     5.22s  <ret> 발화 (turn1 첫 프레임)
     5.45s  agent 발화 시작: <ret> That is a very popular question, indeed. Eddie Van Hal
     5.56s  user  발화 끝
     6.50s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.29s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    11.44s  user  발화 시작: Wow, I always thought it was someone else! I— I mean, it jus
    11.65s  agent 발화 끝
    18.11s  user  발화 끝
    18.15s  agent 발화 시작: Many listeners share that impression; it was a unique collab
    21.85s  agent 발화 끝
    21.96s  user  발화 시작: Hey, did you remember to take the chicken out of the freezer
    24.80s  user  발화 시작: Sorry about that. So, was Eddie Van Halen a big fan of Micha
    24.92s  user  발화 끝
    30.00s  <ret> 발화 (turn6 첫 프레임)
    30.39s  agent 발화 시작: <ret> Considering their differing styles, that’s a fair ques
    30.50s  user  발화 끝
    31.36s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.98s]: Van Halen was initially reluctant, but Jackson visited him and won him
    38.95s  agent 발화 끝
    39.16s  user  발화 시작: That’s incredible! [laugh] A visit from Michael Jackson woul
    44.90s  user  발화 끝
