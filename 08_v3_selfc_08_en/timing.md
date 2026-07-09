# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 Show me buses from Chicago to Denv | S2 That’s good to know. What about fo | S3 Six PM. That gives me plenty of ti | S4 So, just to be clear, the total is

     0.00s  user  발화 시작: Show me buses from Chicago to Denver for three passengers on
     3.91s  <ret> 발화 (turn1 첫 프레임)
     4.30s  agent 발화 시작: <ret> Certainly, let's find some options for you. There are 
     4.49s  user  발화 끝
     5.43s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.00s]: (tool result) Three buses are available: departing at 8:00 AM for $250
     8.68s  user  발화 시작: Yeah.
     9.31s  user  발화 끝
    15.01s  agent 발화 끝
    15.03s  user  발화 시작: That 8:00 AM one sounds good. Can you book that for me?
    18.58s  <ret> 발화 (turn4 첫 프레임)
    18.69s  user  발화 끝
    18.82s  agent 발화 시작: <ret> Absolutely, I can reserve that bus for you. Your bus i
    20.18s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.50s]: (tool result) Your reservation is confirmed: bus ID 8:00 AM Chicago to
    29.19s  user  발화 시작: Perfect. Um, actually— hold on— make that two passengers, no
    29.31s  agent 발화 끝
    34.31s  <ret> 발화 (turn6 첫 프레임)
    34.47s  agent 발화 시작: <ret> Let me adjust that reservation for you— The reservatio
    34.61s  user  발화 끝
    35.59s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.73s]: (tool result) Your reservation is updated: bus ID 8:00 AM Chicago to D
    43.04s  agent 발화 끝
    43.61s  user  발화 시작: Is there Wi-Fi on that bus?
    45.48s  <ret> 발화 (turn8 첫 프레임)
    45.87s  user  발화 끝
    45.88s  agent 발화 시작: <ret> Ah, a very practical question.
    45.98s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.54s]: (tool result) This bus offers Wi-Fi, power outlets, and reclining seat
    48.35s  agent 발화 시작: Yes, that bus has Wi-Fi, power outlets, and comfortable recl
    48.42s  agent 발화 끝
    51.79s  user  발화 시작: Yeah.
    52.48s  user  발화 끝
    53.86s  agent 발화 끝
    54.26s  user  발화 시작: That’s good to know. What about food?
    56.99s  agent 발화 시작: Buses generally don’t serve full meals, but—
    57.17s  user  발화 끝
    60.32s  <ret> 발화 (turn13 첫 프레임)
    60.56s  agent 발화 시작: <ret> You can purchase snacks and beverages during the journ
    60.78s  agent 발화 끝
    62.08s  ⚡SPAN 주입 [d'=1.76s / d_lead=4.08s]: (tool result) Snacks and beverages are available for purchase on board
    64.44s  user  발화 시작: Okay, great. I’m trying to remember if I packed my—
    64.64s  agent 발화 끝
    67.25s  agent 발화 시작: It’s understandable to feel a little anxious before a trip.
    67.40s  user  발화 끝
    71.46s  agent 발화 끝
    71.82s  user  발화 시작: No, no, it's just… what time does the bus arrive in Denver?
    76.27s  <ret> 발화 (turn17 첫 프레임)
    76.58s  agent 발화 시작: <ret> Let me check the arrival time for you. The bus is sche
    76.63s  user  발화 끝
    77.23s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.95s]: (tool result) The bus arrives in Denver at 6:00 PM Mountain Time.
    84.32s  agent 발화 끝
    84.50s  user  발화 시작: Six PM. That gives me plenty of time.
    87.59s  user  발화 끝
    88.02s  agent 발화 시작: A relaxed arrival is always preferable, wouldn't you agree?
    90.81s  user  발화 시작: Mhm.
    91.40s  user  발화 끝
    92.09s  agent 발화 끝
    92.31s  user  발화 시작: Yeah. Is there a bus station in Denver, or is it a stop?
    96.49s  <ret> 발화 (turn22 첫 프레임)
    96.65s  agent 발화 시작: <ret> That’s a useful detail to know. The Denver bus station
    96.79s  user  발화 끝
    97.93s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.47s]: (tool result) The Denver bus station is located at 1701 Blake Street.
   104.06s  agent 발화 끝
   106.27s  user  발화 시작: Seventeen oh one Blake Street. Got it. What’s the weather li
   110.57s  <ret> 발화 (turn24 첫 프레임)
   110.97s  agent 발화 시작: <ret> Let’s see the current weather in Denver. It’s currentl
   111.08s  user  발화 끝
   112.09s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.33s]: (tool result) The weather in Denver is currently 65 degrees Fahrenheit
   115.68s  user  발화 시작: Right.
   116.40s  user  발화 끝
   118.57s  agent 발화 끝
   119.64s  user  발화 시작: Perfect. That sounds lovely.
   121.58s  user  발화 끝
   121.62s  agent 발화 시작: A little sunshine can certainly elevate the spirit.
   123.16s  user  발화 시작: Yeah.
   123.79s  user  발화 끝
   125.27s  agent 발화 끝
   125.56s  user  발화 시작: So, just to be clear, the total is five hundred dollars?
   128.80s  <ret> 발화 (turn30 첫 프레임)
   129.12s  agent 발화 시작: <ret> Yes, let’s confirm the final amount. That's correct, t
   129.13s  user  발화 끝
   129.30s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.04s]: (tool result) Your reservation is confirmed: bus ID 8:00 AM Chicago to
   131.96s  user  발화 시작: Yeah, totally.
   133.25s  user  발화 끝
   136.21s  agent 발화 끝
   136.60s  user  발화 시작: Okay. And I’ll get a confirmation email?
   139.31s  <ret> 발화 (turn33 첫 프레임)
   139.62s  agent 발화 시작: <ret> You will receive all the details electronically.
   139.64s  user  발화 끝
   140.83s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.33s]: (tool result) Confirmation email sent to your registered email address
   142.74s  agent 발화 시작: A confirmation email has been sent to your email address.
   142.95s  agent 발화 끝
   146.90s  user  발화 시작: Wonderful. Thank you, Oruus.
   146.91s  agent 발화 끝
   149.45s  agent 발화 시작: You're very welcome. May your journey be smooth and restorat
   149.49s  user  발화 끝
   154.54s  agent 발화 끝
