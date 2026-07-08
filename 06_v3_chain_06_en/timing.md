# v3_chain_06_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I want to schedule an appointment with Dr. Sofia Rodriguez o
     2.55s  <ret> 발화 (turn1 첫 프레임)
     2.71s  ⚡SPAN 주입 [d'=0.16s / d_lead=1.50s]: (tool result) Appointment with Dr. Sofia Rodriguez scheduled for March
     3.14s  agent 발화 시작: <ret> Let’s see what we can arrange. Your appointment with D
     3.24s  user  발화 끝
     8.15s  agent 발화 끝
     8.72s  user  발화 시작: Great. Uh, what’s the address of her office?
    11.73s  <ret> 발화 (turn3 첫 프레임)
    12.32s  agent 발화 시작: <ret> Certainly, I can look that up for you. Dr. Rodriguez’s
    12.55s  user  발화 끝
    12.73s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.93s]: (tool result) Dr. Rodriguez’s office is located at 7 Oak Street, Ashev
    19.62s  user  발화 시작: Okay, and are there any good flower shops near there? I— I m
    19.64s  agent 발화 끝
    23.60s  user  발화 끝
    23.62s  agent 발화 시작: Asheville is a lovely city for flowers, actually.
    29.37s  user  발화 시작: Yeah, but specifically near seven Oak Street?
    29.45s  agent 발화 끝
    33.07s  <ret> 발화 (turn7 첫 프레임)
    33.66s  agent 발화 시작: <ret> I can certainly check nearby options. Bloom Room is po
    33.81s  user  발화 끝
    33.87s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.70s]: (tool result) Bloom Room is 0.3 miles away, open until 6 PM. Petal & S
    41.30s  agent 발화 끝
    41.47s  user  발화 시작: Hmm, Bloom Room sounds closer. Can you look up their phone n
    44.31s  <ret> 발화 (turn9 첫 프레임)
    44.39s  ⚡SPAN 주입 [d'=0.08s / d_lead=2.59s]: (tool result) Bloom Room's phone number is 828-555-1212.
    44.90s  agent 발화 시작: <ret> Of course, let me find that for you. The phone number 
    44.98s  user  발화 끝
    53.00s  agent 발화 끝
    53.31s  user  발화 시작: Perfect. [sigh] Can you order a bouquet of lilies for delive
    56.43s  <ret> 발화 (turn11 첫 프레임)
    56.99s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.03s]: (tool result) Order placed. Lilies delivered to 12 Maple Drive, Greenv
    57.03s  agent 발화 시작: <ret> I can definitely help with that. Your lilies have been
    57.10s  user  발화 끝
    60.64s  agent 발화 끝
