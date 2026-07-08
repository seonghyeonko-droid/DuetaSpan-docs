# v3_noinfo_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What is the rating for the Forbidden City?
     3.17s  agent 발화 시작: <ret> Let’s take a look. The Forbidden City has a rating of 
     3.17s  <ret> 발화 (turn1 첫 프레임)
     3.17s  user  발화 끝
     3.97s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.59s]: {"name": "Forbidden City", "rating": 4.6, "address": "1 Jingshan Front
    11.91s  user  발화 시작: And how about the Summer Palace?
    11.91s  agent 발화 끝
    14.29s  agent 발화 시작: <ret> Another beautiful spot. The Summer Palace is rated fou
    14.29s  <ret> 발화 (turn3 첫 프레임)
    14.29s  user  발화 끝
    14.93s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.19s]: {"name": "Summer Palace", "rating": 4.7, "address": "1 Nan Gongmen Rd,
    21.83s  user  발화 시작: Can you find me a hotel near the Summer Palace, um, with fre
    21.83s  agent 발화 끝
    27.38s  agent 발화 시작: <ret> Certainly, I can search for that.
    27.38s  <ret> 발화 (turn5 첫 프레임)
    27.38s  user  발화 끝
    28.34s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.38s]: {"hotel_name": "Beijing Heyuan Hotel", "address": "No.37 Nan Gongmen R
    29.76s  agent 발화 시작: The Beijing Heyuan Hotel is available, it’s at sixty-five ze
    29.76s  agent 발화 끝
    38.10s  user  발화 시작: Book it for me for two nights, starting December twenty-firs
    38.10s  agent 발화 끝
    42.07s  agent 발화 시작: <ret> Consider it done. Your reservation at the Beijing Heyu
    42.07s  <ret> 발화 (turn8 첫 프레임)
    42.07s  user  발화 끝
    43.07s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.19s]: {"booking_id": "BH211223", "hotel_name": "Beijing Heyuan Hotel", "chec
    53.18s  user  발화 시작: [sigh] What's the weather forecast for Beijing on December t
    53.18s  agent 발화 끝
    57.15s  agent 발화 시작: <ret> Let’s check that. The forecast for December twenty-fir
    57.15s  <ret> 발화 (turn10 첫 프레임)
    57.15s  user  발화 끝
    58.15s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.19s]: {"date": "December 21", "temperature_high": 2, "temperature_low": -5, 
    66.67s  user  발화 시작: Find me some live jazz in Beijing that night.
    66.67s  agent 발화 끝
    70.24s  agent 발화 시작: <ret> A fine choice.
    70.24s  <ret> 발화 (turn12 첫 프레임)
    70.24s  user  발화 끝
    71.12s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.19s]: (no information found)
    71.43s  agent 발화 시작: I’m afraid I couldn’t find any live jazz events scheduled in
    71.43s  agent 발화 끝
    77.39s  user  발화 시작: Oh, darn. Well, can you remind me to check again on December
    77.39s  agent 발화 끝
    82.55s  agent 발화 시작: <ret> Absolutely.
    82.55s  <ret> 발화 (turn15 첫 프레임)
    82.55s  ⚡SPAN 주입 [d'=0.00s / d_lead=0.40s]: {"reminder_id": "RM1215JZ", "date": "December 15", "task": "Check for 
    82.55s  user  발화 끝
    82.94s  agent 발화 시작: I’ve set a reminder, ID RM one two one five JZ, to check for
    82.94s  agent 발화 끝
    90.48s  agent 발화 끝
