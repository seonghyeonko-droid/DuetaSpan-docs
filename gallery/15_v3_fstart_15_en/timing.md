# v3_fstart_15_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What are the latitude and longitude of the Sydney Opera Hous
     4.50s  <ret> 발화 (turn1 첫 프레임)
     4.58s  agent 발화 시작: <ret> That's a classic landmark, certainly. It sits at latit
     4.58s  user  발화 끝
     5.22s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.98s]: (tool result) The Sydney Opera House is located at latitude -33.8568 a
    14.88s  agent 발화 끝
    15.12s  user  발화 시작: And what’s the quickest way to get there from here— uh, from
    19.75s  <ret> 발화 (turn3 첫 프레임)
    19.83s  agent 발화 시작: <ret> Let’s map that out for you. Take the City and North Sh
    19.98s  user  발화 끝
    20.47s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.99s]: (tool result) The fastest route is by train: take the City & North Sho
    22.91s  user  발화 시작: Uh-huh.
    23.41s  user  발화 끝
    26.69s  agent 발화 시작: From Circular Quay, it's about a ten-minute walk along the h
    26.78s  agent 발화 끝
    33.83s  agent 발화 끝
    33.90s  user  발화 시작: Can you book me a table for two at Aria restaurant, for toni
    38.66s  <ret> 발화 (turn7 첫 프레임)
    38.74s  agent 발화 시작: <ret> Aria— an excellent choice, of course. I’ve secured a t
    38.99s  user  발화 끝
    40.42s  ⚡SPAN 주입 [d'=1.76s / d_lead=2.85s]: (tool result) Reservation confirmed: Aria, tonight at 7:30 PM for two 
    48.24s  agent 발화 끝
    49.62s  user  발화 시작: Perfect. What kind of music do they usually play there?
    53.97s  user  발화 끝
    54.13s  agent 발화 시작: Aria tends to feature sophisticated jazz and contemporary cl
    61.27s  agent 발화 끝
    61.92s  user  발화 시작: Is there parking nearby?
    63.77s  agent 발화 시작: Parking can be tricky—
    63.85s  user  발화 끝
    64.64s  user  발화 시작: Oh, I— I mean, is there secure parking?
    65.38s  agent 발화 끝
    68.18s  agent 발화 시작: Yes, the Wilson Parking at Opera Point is very close, and qu
    68.33s  user  발화 끝
    74.81s  agent 발화 끝
    75.58s  user  발화 시작: How much does that parking cost per hour?
    78.17s  <ret> 발화 (turn15 첫 프레임)
    78.41s  agent 발화 시작: <ret> Let's quickly check those rates. It’s seven dollars an
    78.49s  user  발화 끝
    78.67s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.93s]: (tool result) Wilson Parking at Opera Point charges $7.00 per hour, wi
    84.99s  agent 발화 끝
    85.28s  user  발화 시작: Okay, good to know.
    86.75s  user  발화 끝
    86.81s  agent 발화 시작: I remember playing a gig nearby, at a little club called The
    93.89s  agent 발화 끝
    94.33s  user  발화 시작: What's the weather forecast for Sydney tonight?
    96.59s  <ret> 발화 (turn19 첫 프레임)
    96.90s  agent 발화 시작: <ret> Let me see what the evening holds. It'll be partly clo
    97.10s  user  발화 끝
    97.55s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.53s]: (tool result) The forecast for Sydney tonight is partly cloudy, with a
   103.58s  user  발화 시작: Sounds pleasant enough.
   103.76s  agent 발화 끝
   105.19s  agent 발화 시작: Indeed. A perfect evening for music and good company, wouldn
   105.37s  user  발화 끝
   109.86s  agent 발화 끝
   109.91s  user  발화 시작: Could you set a reminder to leave for Aria at six forty-five
   113.72s  <ret> 발화 (turn23 첫 프레임)
   114.12s  user  발화 끝
   114.12s  agent 발화 시작: <ret> Absolutely, I can take care of that. I’ve set a remind
   114.84s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.22s]: (tool result) Reminder set: Leave for Aria at 6:45 PM.
   119.82s  agent 발화 끝
