# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Set up a viewing for me at The Grandview Lofts on June fifte
     3.26s  <ret> 발화 (turn1 첫 프레임)
     3.37s  user  발화 끝
     3.49s  agent 발화 시작: <ret> Certainly, let’s get that scheduled for you. I’ve book
     4.22s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.40s]: (tool result) A viewing at The Grandview Lofts is confirmed for June f
    11.37s  agent 발화 끝
    11.38s  user  발화 시작: Can you send me directions to that address?
    13.40s  <ret> 발화 (turn3 첫 프레임)
    13.47s  agent 발화 시작: <ret> Absolutely, I can provide those directions right away.
    13.67s  user  발화 끝
    14.60s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.80s]: (tool result) Directions to The Grandview Lofts are: head north on Elm
    23.62s  agent 발화 끝
    23.77s  user  발화 시작: That’s helpful. How long will that drive take?
    26.41s  <ret> 발화 (turn5 첫 프레임)
    26.65s  agent 발화 시작: <ret> Let me check the estimated travel time for you. The dr
    26.68s  user  발화 끝
    28.25s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.46s]: (tool result) The drive to The Grandview Lofts is estimated to take fi
    34.34s  agent 발화 끝
    34.63s  user  발화 시작: Okay, good. And what’s the parking situation like there?
    37.58s  agent 발화 시작: Parking can be a bit limited, but there’s street parking ava
    37.77s  user  발화 끝
    44.02s  agent 발화 끝
    44.69s  user  발화 시작: Is there a grocery store close by, in case I want to grab so
    49.27s  user  발화 끝
    49.58s  agent 발화 시작: Yes, there is!
    50.39s  <ret> 발화 (turn10 첫 프레임)
    50.79s  agent 발화 시작: <ret> There is a grocery store nearby— Fresh Foods Market is
    50.90s  agent 발화 끝
    51.67s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.30s]: (tool result) Fresh Foods Market is a five-minute walk from The Grandv
    57.70s  agent 발화 끝
    58.04s  user  발화 시작: Excellent. I’m also looking at a place on Bleecker Street…
    61.37s  agent 발화 시작: Ah, another property. Which address on Bleecker Street are y
    61.42s  user  발화 끝
    66.09s  agent 발화 끝
    66.48s  user  발화 시작: It’s 42 Bleecker Street. Can we schedule a viewing there too
    69.66s  <ret> 발화 (turn14 첫 프레임)
    69.99s  user  발화 끝
    70.05s  agent 발화 시작: <ret> Certainly, let’s see about scheduling a viewing there 
    71.42s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.63s]: (tool result) A viewing at 42 Bleecker Street is confirmed for June ei
    78.66s  user  발화 시작: Perfect. But actually… June seventeenth would work better fo
    78.76s  agent 발화 끝
    82.87s  <ret> 발화 (turn16 첫 프레임)
    83.11s  agent 발화 시작: <ret> Let me adjust that for you— I’ve rescheduled your view
    83.24s  user  발화 끝
    83.99s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.20s]: (tool result) The viewing at 42 Bleecker Street is now scheduled for J
    90.43s  agent 발화 끝
    91.58s  user  발화 시작: Great, thank you. What's the square footage of the Bleecker 
    96.01s  <ret> 발화 (turn18 첫 프레임)
    96.17s  agent 발화 시작: <ret> Let me pull up those details for you now. The apartmen
    96.30s  user  발화 끝
    97.93s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.25s]: (tool result) 42 Bleecker Street is 750 square feet with one bedroom a
   105.81s  user  발화 시작: That sounds good. And how about The Grandview Lofts? What’s 
   105.90s  agent 발화 끝
   109.98s  <ret> 발화 (turn20 첫 프레임)
   110.30s  agent 발화 시작: <ret> Let me check that information for you. The Grandview L
   110.48s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.58s]: (tool result) The Grandview Lofts are 900 square feet with two bedroom
   110.53s  user  발화 끝
   118.42s  agent 발화 끝
   119.60s  user  발화 시작: Hmm, okay. That's a significant difference. Thanks for all y
   123.71s  agent 발화 시작: You’re very welcome. I’m glad I could assist you with these 
   123.77s  user  발화 끝
   127.78s  agent 발화 끝
