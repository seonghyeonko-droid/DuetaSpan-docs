# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Start navigation to thirty-five point six eight nine five la
     8.33s  agent 발화 시작: <ret> Certainly. Navigation to Tokyo Skytree is now starting
     8.33s  <ret> 발화 (turn1 첫 프레임)
     8.33s  user  발화 끝
     8.49s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.40s]: Destination: Tokyo Skytree. Distance: 12.5 kilometers. Estimated time:
    15.87s  user  발화 시작: Uh, can you find me a nearby coffee shop?
    15.87s  agent 발화 끝
    19.44s  agent 발화 시작: <ret> Of course. Coffee House Yama is point eight kilometers
    19.44s  <ret> 발화 (turn3 첫 프레임)
    19.44s  user  발화 끝
    19.68s  ⚡SPAN 주입 [d'=0.24s / d_lead=0.79s]: Name: Coffee House Yama. Address: 1-1-1 Oshiage, Sumida-ku, Tokyo. Dis
    27.76s  user  발화 시작: What’s the weather like there now?
    27.76s  agent 발화 끝
    30.14s  agent 발화 시작: <ret> Let’s have a look. It's twenty-four degrees Celsius an
    30.14s  <ret> 발화 (turn5 첫 프레임)
    30.14s  user  발화 끝
    31.14s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.59s]: Temperature: 24 degrees Celsius. Condition: Partly cloudy. Wind speed:
    38.87s  user  발화 시작: That’s good. Book me a table for two at Yama at three thirty
    38.87s  agent 발화 끝
    44.42s  agent 발화 시작: <ret> Right away. Your table for two at Coffee House Yama is
    44.42s  <ret> 발화 (turn7 첫 프레임)
    44.42s  user  발화 끝
    44.58s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.79s]: Reservation confirmed. Restaurant: Coffee House Yama. Time: 3:30 PM. P
    52.36s  user  발화 시작: [sigh] Is there a florist near the Skytree? I— I mean, a goo
    52.36s  agent 발화 끝
    57.91s  agent 발화 시작: <ret> I can certainly check. Hanabana Flowers is one point t
    57.91s  <ret> 발화 (turn9 첫 프레임)
    57.91s  user  발화 끝
    58.91s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.59s]: Name: Hanabana Flowers. Address: 2-2-3 Oshiage, Sumida-ku, Tokyo. Dist
    66.63s  user  발화 시작: Okay, great. What kind of flowers do they specialize in?
    66.63s  agent 발화 끝
    70.60s  agent 발화 시작: That’s a slightly more complex question; I’ll look into thei
    70.60s  user  발화 끝
    77.34s  user  발화 시작: Hmm, okay. Never mind about that for now. Can you remind me 
    77.34s  agent 발화 끝
    84.88s  agent 발화 시작: <ret> Absolutely. A reminder to buy a souvenir at Tokyo Skyt
    84.88s  <ret> 발화 (turn13 첫 프레임)
    84.88s  user  발화 끝
    85.20s  ⚡SPAN 주입 [d'=0.32s / d_lead=0.40s]: Reminder set. Text: Buy souvenir at Tokyo Skytree. Location: Tokyo Sky
    91.23s  user  발화 시작: Perfect. What’s the fastest route to Hanabana Flowers from h
    91.23s  agent 발화 끝
    95.19s  agent 발화 시작: <ret> Let me recalculate. It’s one point two kilometers to H
    95.19s  <ret> 발화 (turn15 첫 프레임)
    95.19s  user  발화 끝
    96.15s  ⚡SPAN 주입 [d'=0.96s / d_lead=1.19s]: Distance: 1.2 kilometers. Estimated time: 5 minutes. Route type: walki
   101.02s  ⚡지연 SPAN 주입(선제발표 직전): Specialization: Orchid arrangements and seasonal bouquets. Price range
   101.54s  agent 발화 시작: <ret> Regarding Hanabana Flowers… Hanabana Flowers specializ
   101.54s  agent 발화 끝
   110.66s  agent 발화 끝
