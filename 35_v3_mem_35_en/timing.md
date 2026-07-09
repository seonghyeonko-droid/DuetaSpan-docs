# v3_mem_35_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 I’m thinking about a vacation, may | S2 Yeah, I was looking at Vietnam, ac | S3 Actually, before we get into detai | S4 Right.

     0.00s  user  발화 시작: I’m thinking about a vacation, maybe somewhere warm.
     3.42s  user  발화 끝
     3.43s  agent 발화 시작: Hi Victor, I’m Klen. It’s wonderful to hear you’re planning 
     9.72s  agent 발화 끝
     9.88s  user  발화 시작: Yeah, I was looking at Vietnam, actually.
    11.98s  <ret> 발화 (turn3 첫 프레임)
    12.38s  agent 발화 시작: <ret> Thinking about Vietnam is a great start… You mentioned
    12.46s  user  발화 끝
    13.10s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.45s]: [2026-06-15] User is planning a trip to Vietnam in October.
    20.07s  agent 발화 끝
    21.42s  user  발화 시작: Actually, before we get into details, do you think it’s a go
    25.85s  agent 발화 시작: That's a very practical question, Victor. Booking now versus
    25.95s  user  발화 끝
    28.29s  user  발화 시작: Mm-hmm.
    28.92s  user  발화 끝
    32.92s  user  발화 시작: Right.
    33.13s  <ret> 발화 (turn8 첫 프레임)
    33.29s  agent 발화 시작: <ret> Let’s look at current flight prices for October… Curre
    33.36s  agent 발화 끝
    33.51s  user  발화 끝
    34.89s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.59s]: (tool result) Flights to Vietnam from Toronto: Oct 15-29, $1200 CAD, A
    41.68s  user  발화 시작: Mm-hmm.
    42.32s  user  발화 끝
    44.32s  agent 발화 시작: Vietnam Airlines offers another option, departing October tw
    44.51s  agent 발화 끝
    54.52s  agent 발화 끝
