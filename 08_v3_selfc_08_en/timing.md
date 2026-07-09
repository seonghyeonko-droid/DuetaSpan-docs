# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 Show me buses from Chicago to Denv | S2 The FlixBus sounds good. Can you r | S3 Okay, good to know. | S4 The Denver Art Museum sounds like 

     0.00s  user  발화 시작: Show me buses from Chicago to Denver for three passengers on
     4.39s  <ret> 발화 (turn1 첫 프레임)
     4.72s  user  발화 끝
     4.78s  agent 발화 시작: <ret> Let’s find a bus for your trip— There are three buses 
     5.91s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.65s]: (tool result) Buses_3_FindBus returned three options: Greyhound, 8:00 
    15.24s  user  발화 시작: Hmm, actually, make that May eleventh—
    15.39s  agent 발화 끝
    17.71s  <ret> 발화 (turn3 첫 프레임)
    17.95s  agent 발화 시작: <ret> Adjusting the date to May eleventh— For May eleventh, 
    18.13s  user  발화 끝
    18.83s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.30s]: (tool result) Buses_3_FindBus returned two options: FlixBus, 9:00 AM, 
    29.45s  agent 발화 끝
    29.82s  user  발화 시작: The FlixBus sounds good. Can you reserve three seats?
    33.57s  <ret> 발화 (turn5 첫 프레임)
    33.62s  user  발화 끝
    33.72s  agent 발화 시작: <ret> Certainly, I can reserve those seats— Your FlixBus res
    34.85s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.56s]: (tool result) Buses_3_ReserveSeats returned Reservation ID: BX7892. Pa
    40.30s  user  발화 시작: Yeah, totally.
    41.49s  user  발화 끝
    43.91s  user  발화 시작: Does that include baggage fees?
    43.97s  agent 발화 끝
    45.89s  agent 발화 시작: That’s a good question—
    46.03s  user  발화 끝
    47.17s  <ret> 발화 (turn9 첫 프레임)
    47.24s  agent 발화 시작: <ret> FlixBus charges twenty-five dollars per bag after the 
    47.36s  agent 발화 끝
    49.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.25s]: (tool result) Buses_3_GetBaggageFees returned FlixBus baggage fee: $25
    50.04s  user  발화 시작: Okay.
    50.72s  user  발화 끝
    51.49s  agent 발화 끝
    51.65s  user  발화 시작: Okay, good to know.
    52.87s  agent 발화 시작: Now, about pre-Columbian art, did you know the cultures of M
    53.06s  user  발화 끝
    57.22s  user  발화 시작: Yeah.
    57.67s  user  발화 끝
    60.08s  agent 발화 시작: It was highly prized, symbolizing life and renewal— its vibr
    60.20s  agent 발화 끝
    65.36s  user  발화 시작: Yeah.
    65.81s  user  발화 끝
    69.54s  agent 발화 끝
    69.82s  user  발화 시작: That's interesting. Are there any museums in Denver with sig
    75.65s  <ret> 발화 (turn17 첫 프레임)
    75.89s  agent 발화 시작: <ret> Denver has several options— The Denver Art Museum boas
    76.07s  user  발화 끝
    77.09s  ⚡SPAN 주입 [d'=1.44s / d_lead=1.46s]: (tool result) Museums_FindMuseums returned Denver Art Museum: Pre-Colu
    86.87s  agent 발화 끝
    87.17s  user  발화 시작: The Denver Art Museum sounds like the place to go.
    90.64s  user  발화 끝
    90.78s  agent 발화 시작: It's an excellent choice! They have a particularly strong co
    99.08s  agent 발화 끝
