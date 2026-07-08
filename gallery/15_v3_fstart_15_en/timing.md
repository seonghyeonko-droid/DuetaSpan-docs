# v3_fstart_15_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What are the latitude and longitude of the Sydney Opera Hous
     3.97s  <ret> 발화 (turn1 첫 프레임)
     4.03s  user  발화 끝
     4.05s  agent 발화 시작: <ret> That’s a classic landmark, certainly… It’s at latitude
     4.93s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.06s]: (tool result) The Sydney Opera House is located at latitude -33.8568 a
    14.35s  agent 발화 끝
    14.44s  user  발화 시작: And what’s the weather like there right now?
    16.53s  <ret> 발화 (turn3 첫 프레임)
    16.77s  agent 발화 시작: <ret> A performer always checks the conditions… It’s twenty-
    16.98s  user  발화 끝
    18.13s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.81s]: (tool result) The current weather in Sydney is 22 degrees Celsius, par
    26.24s  user  발화 시작: Hmm. That sounds…nice.
    26.60s  agent 발화 끝
    28.73s  user  발화 끝
    28.77s  agent 발화 시작: A pleasant evening for a concert, wouldn’t you say? It’s a w
    33.32s  user  발화 시작: Can you find me a jazz club near there?
    33.44s  agent 발화 끝
    35.95s  user  발화 끝
    35.98s  <ret> 발화 (turn7 첫 프레임)
    36.21s  agent 발화 시작: <ret> Sydney has a vibrant jazz scene… The Basement, at seve
    36.94s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.27s]: (tool result) The Basement is a jazz club located at 70 York Street, S
    44.90s  user  발화 시작: Is it open tonight?
    44.92s  agent 발화 끝
    46.48s  <ret> 발화 (turn9 첫 프레임)
    46.64s  user  발화 끝
    46.72s  agent 발화 시작: <ret> Let’s check their schedule… Yes, The Basement is open 
    46.98s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.95s]: (tool result) The Basement is open tonight until 11:00 PM.
    52.92s  user  발화 시작: Great. Can you book a table for two at eight o’clock?
    53.07s  agent 발화 끝
    55.93s  <ret> 발화 (turn11 첫 프레임)
    56.17s  agent 발화 시작: <ret> A good time for some improvisation… Your table for two
    56.39s  user  발화 끝
    56.89s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.27s]: (tool result) Reservation confirmed at The Basement for two people at 
    66.00s  agent 발화 끝
    66.70s  user  발화 시작: Perfect!
    67.51s  user  발화 끝
    67.59s  agent 발화 시작: A night of music is a fine thing.
    69.85s  agent 발화 끝
    70.18s  user  발화 시작: Could you set a reminder for seven forty-five to leave for t
    74.25s  <ret> 발화 (turn15 첫 프레임)
    74.41s  agent 발화 시작: <ret> Punctuality is key, of course… I’ve set a reminder for
    74.49s  user  발화 끝
    75.85s  ⚡SPAN 주입 [d'=1.60s / d_lead=1.84s]: (tool result) Reminder set for 7:45 PM: Leave for The Basement.
    81.04s  agent 발화 끝
    81.42s  user  발화 시작: Thanks so much!
    82.51s  agent 발화 시작: My pleasure. Perhaps I’ll see you there—though I'll be at th
    82.61s  user  발화 끝
    87.24s  user  발화 시작: Actually, uh, what’s the best way to get there from the Oper
    87.42s  agent 발화 끝
    90.83s  <ret> 발화 (turn19 첫 프레임)
    91.06s  agent 발화 시작: <ret> A bit of navigation is always useful… Walk north on Be
    91.27s  user  발화 끝
    92.03s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.58s]: (tool result) Walk north on Bennelong Point for 0.6 kilometers, then t
   100.96s  user  발화 시작: Oh, that sounds easy enough.
   101.03s  agent 발화 끝
   102.64s  agent 발화 시작: It’s a pleasant stroll, and a good warm-up for the ears.
   102.67s  user  발화 끝
   106.38s  agent 발화 끝
