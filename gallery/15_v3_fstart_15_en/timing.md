# v3_fstart_15_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What is the current exchange rate between US dollars and eur
     9.73s  <ret> 발화 (turn1 첫 프레임)
    10.32s  agent 발화 시작: <ret> Let me share what I’ve found for you. British Airways 
    10.34s  user  발화 끝
    10.69s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.81s]: (tool result) Flights from London to Lagos next Tuesday are available 
    21.55s  agent 발화 끝
    21.70s  user  발화 시작: Hmm, that's a bit pricey. Are there any flights on Wednesday
    25.50s  <ret> 발화 (turn3 첫 프레임)
    26.10s  agent 발화 시작: <ret> Wednesday presents a few more options, certainly. Virg
    26.28s  user  발화 끝
    26.54s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.62s]: (tool result) Flights from London to Lagos next Wednesday are availabl
    36.20s  user  발화 시작: Okay, book me the Virgin Atlantic flight.
    36.58s  agent 발화 끝
    38.23s  <ret> 발화 (turn5 첫 프레임)
    38.83s  agent 발화 시작: <ret> Excellent— the booking is now complete. Your Virgin At
    38.93s  user  발화 끝
    39.83s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.60s]: (tool result) Booking confirmed: Virgin Atlantic flight from London to
    51.40s  agent 발화 끝
