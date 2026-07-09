# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 Set up a viewing for me at The Gra | S2 Is there parking available at the  | S3 Eight dollars… that’s a little ste | S4 Perfect. I think that covers every

     0.00s  user  발화 시작: Set up a viewing for me at The Grandview Lofts on June fifte
     3.85s  <ret> 발화 (turn1 첫 프레임)
     4.02s  user  발화 끝
     4.09s  agent 발화 시작: <ret> Alright, let's get that scheduled for you. Great, I’ve
     4.89s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.08s]: (tool result) A viewing at The Grandview Lofts is scheduled for June f
    14.67s  agent 발화 끝
    15.25s  user  발화 시작: That's good, but… June sixteenth would actually work better.
    18.75s  <ret> 발화 (turn3 첫 프레임)
    18.91s  agent 발화 시작: <ret> No problem at all, let’s adjust that for you. Okay, I’
    19.09s  user  발화 끝
    20.19s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.97s]: (tool result) A viewing at The Grandview Lofts is scheduled for June s
    24.49s  user  발화 시작: Right.
    25.22s  user  발화 끝
    29.48s  agent 발화 끝
    29.92s  user  발화 시작: Is there parking available at the building?
    32.62s  agent 발화 시작: The Grandview Lofts offers both street parking and a paid ga
    32.79s  user  발화 끝
    37.76s  user  발화 시작: What’s the garage’s hourly rate?
    37.88s  agent 발화 끝
    40.04s  <ret> 발화 (turn8 첫 프레임)
    40.11s  agent 발화 시작: <ret> Let me quickly check the current rates for you. The ho
    40.34s  user  발화 끝
    41.32s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.55s]: (tool result) The Grandview Lofts Garage charges eight dollars per hou
    44.69s  user  발화 시작: Right.
    45.42s  user  발화 끝
    48.34s  user  발화 시작: Eight dollars… that’s a little steep. Are there any cheaper 
    48.40s  agent 발화 끝
    53.18s  <ret> 발화 (turn11 첫 프레임)
    53.34s  agent 발화 시작: <ret> Absolutely, let’s see what we can find nearby. City Ce
    53.48s  user  발화 끝
    54.62s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.52s]: (tool result) City Center Parking is a five-minute walk and charges fi
    62.57s  agent 발화 끝
    62.99s  user  발화 시작: Five dollars is much better. Can you check if they have avai
    68.15s  <ret> 발화 (turn13 첫 프레임)
    68.54s  agent 발화 시작: <ret> Certainly, let me check their availability for you. Ye
    68.59s  user  발화 끝
    69.91s  ⚡SPAN 주입 [d'=1.76s / d_lead=4.03s]: (tool result) City Center Parking has twenty spaces available at ten A
    78.30s  user  발화 시작: Perfect. I think that covers everything.
    78.61s  agent 발화 끝
    80.68s  agent 발화 시작: Wonderful! It sounds like you’re well-prepared for your view
    80.84s  user  발화 끝
    88.37s  agent 발화 끝
