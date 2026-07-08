# v3_fstart_15_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What are the latitude and longitude of the Sydney Opera Hous
     4.20s  <ret> 발화 (turn1 첫 프레임)
     4.27s  agent 발화 시작: <ret> Let’s pinpoint that architectural marvel for you… It s
     4.30s  user  발화 끝
     5.24s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.08s]: (tool result) The Sydney Opera House is located at latitude -33.8568 a
    16.15s  agent 발화 끝
    16.23s  user  발화 시작: And what’s the weather like there right now?
    18.22s  <ret> 발화 (turn3 첫 프레임)
    18.46s  agent 발화 시작: <ret> A performer always checks the conditions… Right now in
    18.64s  user  발화 끝
    19.50s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.50s]: (tool result) The current weather in Sydney is 22 degrees Celsius, par
    28.14s  user  발화 시작: Hmm, that sounds pleasant.
    28.48s  agent 발화 끝
    29.95s  agent 발화 시작: Indeed. A bit breezy for an outdoor concert perhaps, but not
    30.03s  user  발화 끝
    35.77s  user  발화 시작: Could you find me a jazz club near there?
    35.87s  agent 발화 끝
    38.68s  <ret> 발화 (turn7 첫 프레임)
    38.68s  user  발화 끝
    38.86s  agent 발화 시작: <ret> Finding the right venue is key… The Basement, a jazz c
    39.64s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.27s]: (tool result) The Basement is a jazz club located at 70 York Street, S
    47.92s  user  발화 시작: Is it a good one?
    47.94s  agent 발화 끝
    49.07s  user  발화 끝
    49.48s  agent 발화 시작: The Basement has a long history, a real institution. Many gr
    55.63s  user  발화 시작: What about hotels nearby? I— I mean, good ones.
    55.78s  agent 발화 끝
    59.27s  <ret> 발화 (turn11 첫 프레임)
    59.34s  agent 발화 시작: <ret> A comfortable stay is essential, of course… The Park H
    59.51s  user  발화 끝
    60.23s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.66s]: (tool result) The Park Hyatt Sydney is a five-star hotel located at 7 
    69.22s  agent 발화 끝
    69.98s  user  발화 시작: What's their phone number?
    71.36s  <ret> 발화 (turn13 첫 프레임)
    71.44s  agent 발화 시작: <ret> Let’s get you directly in touch… Their phone number is
    71.50s  user  발화 끝
    72.40s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.32s]: (tool result) The Park Hyatt Sydney's phone number is +61 2 9256 1234.
    79.55s  agent 발화 끝
    80.05s  user  발화 시작: Can you book me a room there for tonight?
    82.26s  user  발화 끝
    82.33s  agent 발화 시작: Certainly. What type of room are you looking for?
    85.29s  agent 발화 끝
    85.64s  user  발화 시작: Just a standard room will do.
    87.34s  <ret> 발화 (turn17 첫 프레임)
    87.58s  agent 발화 시작: <ret> Let’s see about securing that room… Your standard room
    87.77s  user  발화 끝
    88.38s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.52s]: (tool result) A standard room at the Park Hyatt Sydney has been reserv
    97.03s  user  발화 시작: Excellent.
    97.22s  agent 발화 끝
    97.82s  agent 발화 시작: Wonderful. I trust you’ll enjoy your stay, and perhaps catch
    97.98s  user  발화 끝
   102.62s  user  발화 시작: Thanks, Moshi.
   102.68s  agent 발화 끝
   103.71s  agent 발화 시작: My pleasure. Always happy to help a fellow music lover plan 
   103.71s  user  발화 끝
   108.24s  agent 발화 끝
