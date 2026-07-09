# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     4.98s  <ret> 발화 (turn1 첫 프레임)
     5.05s  user  발화 끝
     5.05s  agent 발화 시작: <ret> Certainly, I can locate those images for you. I’ve fou
     6.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.84s]: (tool result) Three files were found: "Paris_Eiffel_Tower.jpg", "Prove
    10.19s  user  발화 시작: Yeah.
    10.64s  user  발화 끝
    14.51s  user  발화 시작: Oh, that’s great! Could you send “Paris_Eiffel_Tower.jpg” to
    14.65s  agent 발화 끝
    22.36s  <ret> 발화 (turn4 첫 프레임)
    22.52s  agent 발화 시작: <ret> I can definitely handle that email for you. The email 
    22.67s  user  발화 끝
    23.32s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.04s]: (tool result) Email sent successfully to eleanor.vance@email.com with 
    25.61s  user  발화 시작: Yeah.
    26.25s  user  발화 끝
    30.12s  agent 발화 끝
    31.18s  user  발화 시작: Perfect, thanks! Uh, do you know if it’s likely to rain in N
    35.67s  user  발화 끝
    35.94s  agent 발화 시작: Let me check on that weather forecast for you.
    37.28s  user  발화 시작: Right.
    38.06s  user  발화 끝
    38.19s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The weather in Nice tomorrow will be partly cloudy with 
    38.49s  user  발화 시작: Right.
    38.71s  agent 발화 끝
    39.14s  agent 발화 시작: <ret> I have the forecast information now. Tomorrow in Nice 
    39.27s  user  발화 끝
    47.57s  agent 발화 끝
