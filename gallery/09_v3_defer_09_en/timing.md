# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: List all of my alarms, including any inactive ones.
     3.85s  agent 발화 시작: <ret> Certainly, let me review your current alarm settings. 
     3.86s  <ret> 발화 (turn1 첫 프레임)
     3.98s  user  발화 끝
     5.38s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.99s]: (tool result) There are three alarms set: seven AM, repeat Monday thro
    14.32s  agent 발화 끝
    14.92s  user  발화 시작: Oh, um, can you cancel that two PM alarm? It’s— I mean, I do
    20.50s  agent 발화 시작: <ret> Of course.
    20.50s  <ret> 발화 (turn3 첫 프레임)
    20.66s  user  발화 끝
    21.06s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.10s]: (tool result) The two PM alarm has been deleted.
    21.60s  agent 발화 끝
    22.02s  agent 발화 시작: The two PM alarm has now been successfully cancelled for you
    26.09s  agent 발화 끝
    26.17s  user  발화 시작: Great, thanks. What time is it in Nuuk, Greenland right now?
    29.97s  agent 발화 시작: <ret> That's a good question—I’ll check the current time the
    29.97s  <ret> 발화 (turn6 첫 프레임)
    30.09s  user  발화 끝
    33.01s  ⚡SPAN 주입 [d'=3.04s / d_lead=4.49s]: (tool result) The time in Nuuk, Greenland is currently 7:48 PM.
    42.21s  agent 발화 끝
