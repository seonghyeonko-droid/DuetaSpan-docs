# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Show me buses from Chicago to Denver for three passengers on
     4.33s  <ret> 발화 (turn1 첫 프레임)
     4.67s  user  발화 끝
     4.72s  agent 발화 시작: <ret> Certainly, let me check bus availability for that rout
     6.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.36s]: (tool result) There are two buses available on May tenth: a Greyhound 
    15.74s  user  발화 시작: That’s good. What about returning on May fifteenth?
    15.93s  agent 발화 끝
    18.59s  <ret> 발화 (turn3 첫 프레임)
    18.83s  agent 발화 시작: <ret> Of course, I can look into return options for you. On 
    18.98s  user  발화 끝
    19.87s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.10s]: (tool result) Two buses are available on May fifteenth: a Greyhound de
    28.75s  agent 발화 끝
    29.16s  user  발화 시작: Hmm, I— I mean, are there any earlier Greyhound departures o
    34.16s  user  발화 끝
    34.44s  agent 발화 시작: Let's see if we can find a Greyhound leaving Chicago a bit s
    37.56s  user  발화 시작: Does FlixBus have reclining seats?
    38.28s  agent 발화 끝
    40.11s  agent 발화 시작: That’s a good question! FlixBus generally offers comfortable
    40.28s  user  발화 끝
    44.57s  user  발화 시작: Yeah.
    45.02s  user  발화 끝
    47.17s  <ret> 발화 (turn9 첫 프레임)
    47.41s  agent 발화 시작: <ret> Now, about those earlier Greyhound departures… There i
    47.57s  agent 발화 끝
    48.13s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.31s]: (tool result) An additional Greyhound bus departs at 6:00 AM on May te
    56.07s  user  발화 시작: Okay, book me the 6:00 AM Greyhound going to Denver and the 
    56.26s  agent 발화 끝
    61.55s  <ret> 발화 (turn11 첫 프레임)
    61.63s  agent 발화 시작: <ret> Excellent, let's confirm those bookings for you. Your 
    61.72s  user  발화 끝
    62.99s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.54s]: (tool result) Your outbound Greyhound on May tenth at 6:00 AM and retu
    68.36s  user  발화 시작: Perfect. Will I get an email confirmation?
    68.54s  agent 발화 끝
    71.36s  user  발화 끝
    71.66s  agent 발화 시작: Absolutely, you will receive a confirmation email shortly wi
    83.06s  agent 발화 끝
    83.34s  user  발화 시작: That's interesting. Do they have any exhibits on textiles?
    87.04s  user  발화 끝
