# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Show me buses from Chicago to Denver for three passengers on
     4.08s  <ret> 발화 (turn1 첫 프레임)
     4.39s  user  발화 끝
     4.47s  agent 발화 시작: <ret> Certainly, let me check bus availability for that rout
     6.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.28s]: (tool result) Three buses are available on May tenth: 8:00 AM, $250; 2
    14.17s  user  발화 시작: The 8:00 AM one sounds good. Can you book that?
    14.30s  agent 발화 끝
    17.72s  <ret> 발화 (turn3 첫 프레임)
    17.96s  agent 발화 시작: <ret> Of course, I can reserve seats on the 8:00 AM bus. You
    18.05s  user  발화 끝
    19.32s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.78s]: (tool result) Your reservation is confirmed: bus departs Chicago at 8:
    26.54s  agent 발화 끝
    26.87s  user  발화 시작: Great! Does that bus stop in Omaha?
    29.92s  user  발화 끝
    30.31s  agent 발화 시작: Let me quickly check the route details for that bus—
    32.95s  user  발화 시작: Actually, never mind about Omaha. What about baggage allowan
    33.69s  agent 발화 끝
    36.86s  agent 발화 시작: Each passenger is allowed one standard carry-on bag and one 
    36.96s  user  발화 끝
    42.71s  user  발화 시작: Okay, good to know.
    42.92s  agent 발화 끝
    43.69s  <ret> 발화 (turn9 첫 프레임)
    43.93s  agent 발화 시작: <ret> Now, would you like me to send the itinerary to your e
    44.09s  user  발화 끝
    44.73s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.51s]: (tool result) Email sent to user's email with subject “Bus Itinerary” 
    50.69s  user  발화 시작: Perfect, thank you.
    51.25s  agent 발화 끝
    51.83s  agent 발화 시작: You’re most welcome! I’m glad I could assist with your trave
    52.11s  user  발화 끝
    58.86s  user  발화 시작: That’s true. Um, do you know anything about the pre-Columbia
    58.87s  agent 발화 끝
    65.44s  agent 발화 시작: Oh, absolutely! The Denver Art Museum has a wonderful collec
    65.49s  user  발화 끝
    69.41s  user  발화 시작: Yeah.
    69.86s  user  발화 끝
    71.99s  agent 발화 시작: The Moche were known for their incredibly detailed stirrup-s
    72.11s  agent 발화 끝
    78.99s  user  발화 시작: Interesting. Are there any pieces from the Nazca culture the
    79.17s  agent 발화 끝
    83.55s  <ret> 발화 (turn17 첫 프레임)
    83.78s  agent 발화 시작: <ret> Yes, indeed, they do have some Nazca pieces— They have
    83.89s  user  발화 끝
    84.91s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.03s]: (tool result) Denver Art Museum: Nazca collection includes textiles, p
    92.49s  agent 발화 끝
    92.56s  user  발화 시작: That sounds amazing! I’m really looking forward to the trip 
    97.09s  user  발화 끝
    97.15s  agent 발화 시작: Wonderful! I am so pleased to hear that. Perhaps you’ll disc
   103.40s  agent 발화 끝
