# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Show me buses from Chicago to Denver for three passengers on
     4.27s  <ret> 발화 (turn1 첫 프레임)
     4.67s  agent 발화 시작: <ret> Let’s find a bus for that trip— There are three bus op
     4.72s  user  발화 끝
     5.47s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.47s]: (tool result) Buses_3_FindBus returned three options: Greyhound, FlixB
    13.25s  user  발화 시작: That’s a little pricey. What about just two passengers?
    13.47s  agent 발화 끝
    16.51s  <ret> 발화 (turn3 첫 프레임)
    16.75s  agent 발화 시작: <ret> Adjusting the passenger count— For two passengers, the
    16.85s  user  발화 끝
    17.15s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.41s]: (tool result) Buses_3_FindBus returned three options: Greyhound, FlixB
    23.09s  agent 발화 끝
    23.48s  user  발화 시작: Hmm, is Greyhound always the cheapest?
    26.20s  user  발화 끝
    26.59s  agent 발화 시작: Generally, yes, Greyhound tends to offer the most economical
    29.99s  user  발화 시작: Do any of them have Wi-Fi?
    30.70s  agent 발화 끝
    31.87s  agent 발화 시작: Greyhound and FlixBus both list Wi-Fi as an available amenit
    31.97s  user  발화 끝
    35.28s  user  발화 시작: Yeah.
    35.68s  user  발화 끝
    37.47s  agent 발화 시작: Greyhound’s website also notes power outlets at every seat, 
    37.66s  agent 발화 끝
    42.60s  <ret> 발화 (turn10 첫 프레임)
    43.00s  agent 발화 시작: <ret> Greyhound bus G749 departs at eight AM, arriving in De
    43.10s  ⚡SPAN 주입 [d'=0.50s / d_lead=7.04s]: (tool result) Buses_3_GetDetails returned: Greyhound bus ID G749 depar
    43.17s  agent 발화 끝
    47.46s  user  발화 시작: Yeah, totally.
    48.74s  user  발화 끝
    49.91s  user  발화 시작: Okay, book me two tickets on that Greyhound bus.
    50.04s  agent 발화 끝
    52.57s  <ret> 발화 (turn13 첫 프레임)
    52.96s  agent 발화 시작: <ret> Securing those tickets for you— Your tickets are booke
    52.96s  user  발화 끝
    53.85s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.29s]: (tool result) Buses_3_Book returned: Confirmation number is B29X7R, tw
    61.67s  agent 발화 끝
