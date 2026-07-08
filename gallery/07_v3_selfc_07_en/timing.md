# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Set up a viewing for me at The Grandview Lofts on June fifte
     3.52s  <ret> 발화 (turn1 첫 프레임)
     3.70s  user  발화 끝
     3.76s  agent 발화 시작: <ret> Certainly, let's get that scheduled for you. I’ve sche
     4.48s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.34s]: (tool result) A viewing at The Grandview Lofts is scheduled for June f
    10.04s  user  발화 시작: That’s great, but— I mean, could we do it later in the day?
    10.11s  agent 발화 끝
    13.42s  user  발화 끝
    13.47s  agent 발화 시작: Later that day would work, what time were you thinking?
    16.70s  agent 발화 끝
    16.88s  user  발화 시작: Around six, if possible.
    18.40s  <ret> 발화 (turn5 첫 프레임)
    18.49s  user  발화 끝
    18.56s  agent 발화 시작: <ret> Let me check availability for a six PM viewing. Yes, s
    19.36s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.93s]: (tool result) A viewing at The Grandview Lofts is scheduled for June f
    26.86s  agent 발화 끝
    27.11s  user  발화 시작: Perfect. And can you tell me about the neighborhood?
    29.17s  agent 발화 시작: The Grandview Lofts are in the historic district, known for 
    29.33s  user  발화 끝
    34.49s  agent 발화 끝
    35.13s  user  발화 시작: Is it a walkable area, though?
    37.12s  user  발화 끝
    37.47s  agent 발화 시작: It absolutely is—
    38.44s  user  발화 시작: I mean, is it good for getting around without a car?
    39.12s  agent 발화 끝
    41.01s  agent 발화 시작: It’s very walkable, with a walk score of ninety-two out of o
    41.17s  user  발화 끝
    43.01s  user  발화 시작: Yeah.
    43.69s  user  발화 끝
    45.52s  agent 발화 시작: The area has excellent public transportation options as well
    45.63s  agent 발화 끝
    49.45s  agent 발화 끝
    50.51s  user  발화 시작: That's good to hear. What about parking, though, if I *do* h
    54.48s  agent 발화 시작: Street parking is limited, but there's a parking garage two 
    54.53s  user  발화 끝
    59.48s  agent 발화 끝
    59.52s  user  발화 시작: Okay, and what's the average rent for a two-bedroom there?
    62.61s  <ret> 발화 (turn17 첫 프레임)
    63.01s  agent 발화 시작: <ret> Let me quickly look up current rental rates. The avera
    63.08s  user  발화 끝
    64.29s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.06s]: (tool result) The average rent for a two-bedroom at The Grandview Loft
    71.82s  agent 발화 끝
    71.87s  user  발화 시작: That's a little higher than I expected… maybe twenty-five hu
    75.71s  <ret> 발화 (turn19 첫 프레임)
    76.10s  agent 발화 시작: <ret> I can search for similar properties around twenty-five
    76.17s  user  발화 끝
    77.31s  ⚡SPAN 주입 [d'=1.60s / d_lead=4.01s]: (tool result) Three properties match your criteria: Elm Street Apartme
    85.27s  user  발화 시작: Tell me more about Oakwood Residences.
    85.46s  agent 발화 끝
    87.59s  <ret> 발화 (turn21 첫 프레임)
    87.62s  user  발화 끝
    87.75s  agent 발화 시작: <ret> Let me get you the details for Oakwood Residences. Oak
    88.39s  ⚡SPAN 주입 [d'=0.80s / d_lead=3.84s]: (tool result) Oakwood Residences offers one and two-bedroom apartments
    95.86s  agent 발화 끝
    96.11s  user  발화 시작: Sounds promising. Can we schedule a viewing there for next w
    99.03s  agent 발화 시작: Of course. What day next week works best for you?
    99.16s  user  발화 끝
   103.43s  agent 발화 끝
