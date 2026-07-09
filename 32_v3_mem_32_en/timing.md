# v3_mem_32_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 Hi Thunalo, that's nice. I was won | S2 Oh, right! Dr. Han. Mm-hmm. | S3 Actually, yes. I'm planning a trip | S4 But… I mean, I’m a bit anxious abo

     0.00s  agent 발화 시작: Hi Manon, I'm Thunalo. It's lovely to connect with you today
     3.79s  agent 발화 끝
     4.51s  user  발화 시작: Hi Thunalo, that's nice. I was wondering, can you remind me 
     9.94s  <ret> 발화 (turn2 첫 프레임)
    10.02s  agent 발화 시작: <ret> Of course, recalling details is something I can certai
    10.16s  user  발화 끝
    11.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.09s]: Past chat — Booked a dentist appointment: asked for an early-morning s
    18.55s  agent 발화 끝
    18.96s  user  발화 시작: Oh, right! Dr. Han. Mm-hmm.
    21.82s  user  발화 끝
    21.90s  agent 발화 시작: Is there anything specific about that appointment you'd like
    25.32s  user  발화 시작: Yeah.
    25.77s  user  발화 끝
    26.53s  agent 발화 끝
    27.23s  user  발화 시작: Actually, yes. I'm planning a trip in March, and I need to r
    30.80s  <ret> 발화 (turn7 첫 프레임)
    30.96s  agent 발화 시작: <ret> A change of plans is perfectly alright, let's see what
    31.02s  user  발화 끝
    32.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.29s]: [2026-07-25] User is planning a trip to Kyoto in March.
    39.50s  user  발화 시작: But… I mean, I’m a bit anxious about traveling so far.
    39.54s  agent 발화 끝
    43.41s  user  발화 끝
