# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Order a pool ride for one person to the Space Needle in Seat
     3.18s  <ret> 발화 (turn1 첫 프레임)
     3.34s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.42s]: (tool result) A pool ride has been requested for one passenger from yo
     3.77s  agent 발화 시작: <ret> Certainly. Your pool ride to the Space Needle is confi
     3.84s  user  발화 끝
    10.54s  agent 발화 끝
    11.24s  user  발화 시작: What's the estimated time of arrival?
    12.75s  <ret> 발화 (turn3 첫 프레임)
    13.35s  agent 발화 시작: <ret> Let me check that for you. Your ride will arrive in ap
    13.50s  user  발화 끝
    13.75s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.50s]: (tool result) The estimated time of arrival for ride 6892 is 8 minutes
    19.19s  agent 발화 끝
    19.75s  user  발화 시작: Is my driver—
    20.81s  agent 발화 시작: Regarding your driver—
    21.04s  user  발화 끝
    21.95s  user  발화 시작: …can I see their rating?
    22.65s  agent 발화 끝
    22.76s  <ret> 발화 (turn7 첫 프레임)
    23.22s  agent 발화 시작: <ret> Of course. David Miller, your driver, has a rating of 
    23.37s  user  발화 끝
    23.76s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.79s]: (tool result) The driver for ride 6892, David Miller, has a rating of 
    28.79s  user  발화 시작: That’s good. Can you remind me to tip them after the ride?
    29.01s  agent 발화 끝
    31.60s  <ret> 발화 (turn9 첫 프레임)
    32.00s  ⚡SPAN 주입 [d'=0.40s / d_lead=0.43s]: (tool result) A reminder to “Tip David Miller” has been set for 15 min
    32.20s  agent 발화 시작: <ret> Absolutely. I’ve set a reminder to tip David Miller in
    32.39s  user  발화 끝
    37.34s  agent 발화 끝
    37.57s  user  발화 시작: What time is it now, actually?
    39.70s  user  발화 끝
    39.99s  agent 발화 시작: It is currently seven forty-two PM.
    42.89s  user  발화 시작: I wonder if there are any meteor showers tonight…
    42.95s  agent 발화 끝
    45.80s  user  발화 끝
    46.21s  agent 발화 시작: [happy] Oh, a lovely thought! As an astronomer, I always kee
    54.81s  ⚡지연 SPAN 주입(선제발표 직전): <reference not found>
    56.01s  agent 발화 시작: <ret> It looks like I need to access a different data source
    56.18s  agent 발화 끝
    67.46s  agent 발화 끝
