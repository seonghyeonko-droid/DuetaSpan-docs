# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 Set up a viewing for me at The Gra | S2 That’s good to know. [laugh] And w | S3 It is. Actually, I was thinking… c | S4 I appreciate it. You've really tak

     0.00s  user  발화 시작: Set up a viewing for me at The Grandview Lofts on June fifte
     3.85s  <ret> 발화 (turn1 첫 프레임)
     4.08s  agent 발화 시작: <ret> Okay, let’s find a time that works for you at The Gran
     4.30s  user  발화 끝
     5.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.17s]: (tool result) The Grandview Lofts is available for viewings on June fi
     8.20s  agent 발화 시작: Those are the times available on June fifteenth: two, three-
     8.25s  agent 발화 끝
    14.94s  user  발화 시작: Hmm, two is a little early. I— I mean, could we do three ins
    14.97s  agent 발화 끝
    18.78s  <ret> 발화 (turn4 첫 프레임)
    18.98s  agent 발화 시작: <ret> Three-thirty it is! Let’s confirm that viewing for you
    19.19s  user  발화 끝
    20.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.84s]: (tool result) Viewing scheduled at The Grandview Lofts on June fifteen
    22.64s  agent 발화 시작: Wonderful. Your viewing at The Grandview Lofts is confirmed 
    22.82s  agent 발화 끝
    30.85s  agent 발화 끝
    30.90s  user  발화 시작: Perfect! Is there parking available at the building?
    34.29s  <ret> 발화 (turn7 첫 프레임)
    34.52s  agent 발화 시작: <ret> Yes, there is parking available.
    34.69s  user  발화 끝
    35.25s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.30s]: (tool result) The Grandview Lofts offers complimentary covered parking
    36.77s  agent 발화 시작: Absolutely. The Grandview Lofts has complimentary covered pa
    36.82s  agent 발화 끝
    41.66s  user  발화 시작: That’s good to know. [laugh] And what about nearby coffee sh
    41.82s  agent 발화 끝
    48.27s  <ret> 발화 (turn10 첫 프레임)
    48.35s  agent 발화 시작: <ret> There are a few great options nearby!
    48.37s  user  발화 끝
    49.47s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.45s]: (tool result) Three coffee shops are within a half-mile of The Grandvi
    50.69s  agent 발화 시작: Brew & Bites, The Daily Grind, and Coffee Haven are all clos
    50.80s  agent 발화 끝
    55.45s  agent 발화 끝
    55.69s  user  발화 시작: Brew & Bites sounds nice. How far away is that one?
    58.95s  <ret> 발화 (turn13 첫 프레임)
    59.19s  agent 발화 시작: <ret> It's just a short walk.
    59.39s  user  발화 끝
    59.45s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.61s]: (tool result) Brew & Bites is 0.3 miles from The Grandview Lofts, a si
    60.62s  agent 발화 시작: Brew & Bites is only point-three miles away, about a six-min
    60.80s  agent 발화 끝
    64.16s  user  발화 시작: Mm-hmm.
    64.79s  user  발화 끝
    66.04s  agent 발화 끝
    66.15s  user  발화 시작: That’s really convenient. I’m getting excited about this vie
    69.62s  user  발화 끝
    69.65s  agent 발화 시작: [happy] That’s fantastic! I’m happy to hear you’re feeling p
    76.64s  agent 발화 끝
    76.64s  user  발화 시작: It is. Actually, I was thinking… could we maybe reschedule f
    82.41s  <ret> 발화 (turn19 첫 프레임)
    82.56s  agent 발화 시작: <ret> Let's check the availability for June sixteenth.
    82.76s  user  발화 끝
    84.33s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.05s]: (tool result) The Grandview Lofts is available for viewings on June si
    85.52s  agent 발화 시작: The sixteenth has openings at ten AM, one PM, and four-thirt
    85.61s  agent 발화 끝
    91.67s  user  발화 시작: Four-thirty sounds perfect.
    91.86s  agent 발화 끝
    92.99s  <ret> 발화 (turn22 첫 프레임)
    93.32s  user  발화 끝
    93.39s  agent 발화 시작: <ret> Excellent! Let’s get that rescheduled for you.
    94.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.24s]: (tool result) Viewing rescheduled at The Grandview Lofts on June sixte
    96.49s  agent 발화 시작: All set! Your viewing is now on June sixteenth at four-thirt
    96.63s  agent 발화 끝
   101.42s  user  발화 시작: Uh-huh.
   101.82s  user  발화 끝
   104.79s  agent 발화 끝
   105.33s  user  발화 시작: Wonderful, thank you so much!
   107.14s  agent 발화 시작: You’re very welcome! I’m glad I could help you get everythin
   107.27s  user  발화 끝
   110.70s  user  발화 시작: Yeah.
   111.09s  user  발화 끝
   111.95s  user  발화 시작: I appreciate it. You've really taken a load off my mind.
   112.14s  agent 발화 끝
   114.93s  agent 발화 시작: That’s what I’m here for! Transitions can be stressful, so I
   115.00s  user  발화 끝
   120.12s  user  발화 시작: Okay.
   120.67s  user  발화 끝
   121.65s  agent 발화 끝
   121.94s  user  발화 시작: It really is. I’m just hoping this place feels right.
   125.17s  user  발화 끝
   125.41s  agent 발화 시작: I truly hope so too! Trust your instincts during the viewing
   132.76s  user  발화 시작: That’s good advice. I will.
   132.96s  agent 발화 끝
   135.07s  user  발화 끝
   135.19s  agent 발화 시작: Wonderful. Remember, it’s okay to take your time and find a 
   141.49s  agent 발화 끝
