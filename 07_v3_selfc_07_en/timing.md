# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 Set up a viewing for me at The Gra | S2 Is there parking available at The  | S3 Sushi Zen sounds good. What's thei | S4 Yeah, I— I mean, I just really don

     0.00s  user  발화 시작: Set up a viewing for me at The Grandview Lofts on June fifte
     4.54s  <ret> 발화 (turn1 첫 프레임)
     4.78s  agent 발화 시작: <ret> Absolutely, let’s get that scheduled for you. Wonderfu
     5.00s  user  발화 끝
     5.50s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.30s]: (tool result) A viewing at The Grandview Lofts is scheduled for June f
    11.36s  agent 발화 끝
    11.63s  user  발화 시작: That’s… uh, actually, June sixteenth would work better.
    16.08s  <ret> 발화 (turn3 첫 프레임)
    16.24s  agent 발화 시작: <ret> No problem at all, let’s adjust that date for you. Oka
    16.34s  user  발화 끝
    17.52s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.24s]: (tool result) A viewing at The Grandview Lofts is scheduled for June s
    19.96s  user  발화 시작: Right.
    20.45s  user  발화 끝
    23.38s  agent 발화 끝
    23.98s  user  발화 시작: Is there parking available at The Grandview Lofts?
    27.18s  <ret> 발화 (turn6 첫 프레임)
    27.41s  agent 발화 시작: <ret> That’s a practical thing to consider beforehand. Yes, 
    27.49s  user  발화 끝
    29.02s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.15s]: (tool result) The Grandview Lofts offers on-site parking with a fee of
    34.60s  agent 발화 끝
    34.73s  user  발화 시작: Okay, and what about nearby restaurants?
    37.51s  <ret> 발화 (turn8 첫 프레임)
    37.67s  agent 발화 시작: <ret> Exploring dining options is a smart move. There are th
    37.87s  user  발화 끝
    39.11s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.85s]: (tool result) Three restaurants are near The Grandview Lofts: Bella It
    41.94s  user  발화 시작: Right.
    42.76s  user  발화 끝
    45.41s  agent 발화 끝
    45.76s  user  발화 시작: Sushi Zen sounds good. What's their phone number?
    49.22s  <ret> 발화 (turn11 첫 프레임)
    49.36s  user  발화 끝
    49.62s  agent 발화 시작: <ret> Let me quickly find that for you. Their number is 555-
    51.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.89s]: (tool result) Sushi Zen’s phone number is 555-123-4567.
    55.45s  user  발화 시작: Great. I think I’m feeling a bit anxious about this whole mo
    55.74s  agent 발화 끝
    60.60s  agent 발화 시작: It's completely normal to feel anxious with big changes like
    60.73s  user  발화 끝
    69.23s  agent 발화 끝
    69.49s  user  발화 시작: Yeah, I— I mean, I just really don’t want to make the wrong 
    74.36s  agent 발화 시작: That’s a very common concern, and it's good you're recognizi
    74.40s  user  발화 끝
    83.54s  agent 발화 끝
    83.75s  user  발화 시작: [laugh] It's just… a lot.
    86.01s  user  발화 끝
    86.32s  agent 발화 시작: It absolutely is a lot, and you're handling it well by talki
    96.47s  agent 발화 끝
