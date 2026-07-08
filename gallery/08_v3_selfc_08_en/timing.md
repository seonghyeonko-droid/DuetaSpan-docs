# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Show me buses from Chicago to Denver for three passengers on
     4.04s  <ret> 발화 (turn1 첫 프레임)
     4.39s  user  발화 끝
     4.43s  agent 발화 시작: <ret> Certainly, let me check bus availability for that rout
     5.56s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.82s]: (tool result) Three buses are available on May tenth: at 8:00 AM, 2:00
    12.09s  user  발화 시작: What are the prices for those?
    12.27s  agent 발화 끝
    13.64s  <ret> 발화 (turn3 첫 프레임)
    13.88s  agent 발화 시작: <ret> I can quickly look up the fares for each of those buse
    14.02s  user  발화 끝
    15.24s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.40s]: (tool result) The 8:00 AM bus costs $150, the 2:00 PM bus costs $180, 
    23.52s  agent 발화 끝
    24.48s  user  발화 시작: Hmm, I— I meant May eleventh, not tenth.
    28.36s  user  발화 끝
    28.37s  <ret> 발화 (turn5 첫 프레임)
    28.53s  agent 발화 시작: <ret> Ah, you'd like me to recheck for the eleventh instead?
    29.97s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.41s]: (tool result) Two buses are available on May eleventh: at 9:00 AM and 
    36.36s  agent 발화 끝
    36.66s  user  발화 시작: Are those sleeper buses?
    38.27s  user  발화 끝
    38.44s  agent 발화 시작: As to whether those buses—
    39.56s  user  발화 시작: Do they have restrooms?
    40.24s  agent 발화 끝
    41.03s  agent 발화 시작: Both the 9 AM and 6 PM buses have restrooms, but neither is 
    41.16s  user  발화 끝
    44.37s  user  발화 시작: Really?
    45.20s  user  발화 끝
    46.22s  agent 발화 끝
    46.22s  agent 발화 시작: It's a roughly eighteen-hour trip, so restrooms are quite he
    49.72s  user  발화 시작: Book me on the 9 AM bus.
    49.92s  agent 발화 끝
    52.09s  <ret> 발화 (turn13 첫 프레임)
    52.16s  user  발화 끝
    52.16s  agent 발화 시작: <ret> Certainly, let’s go ahead and reserve seats for you. Y
    54.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.68s]: (tool result) Your booking is confirmed: confirmation number is BX947Z
    60.74s  agent 발화 끝
    60.94s  user  발화 시작: Great, can you send me a reminder the day before?
    63.38s  <ret> 발화 (turn15 첫 프레임)
    63.78s  agent 발화 시작: <ret> Absolutely, I can set a reminder for that. I’ve set a 
    64.03s  user  발화 끝
    64.50s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.34s]: (tool result) Reminder set for May tenth at 9:00 AM: “Bus to Denver de
    70.22s  agent 발화 끝
    70.48s  user  발화 시작: Perfect. Thanks!
    72.09s  user  발화 끝
    72.33s  agent 발화 시작: You’re very welcome. I hope you enjoy the journey to Denver—
    79.28s  agent 발화 끝
