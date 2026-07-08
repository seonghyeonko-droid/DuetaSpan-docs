# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     4.91s  <ret> 발화 (turn1 첫 프레임)
     4.99s  agent 발화 시작: <ret> Certainly, I can locate those images for you. I’ve fou
     5.00s  user  발화 끝
     6.35s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.39s]: (tool result) Three files were found: "Paris_Eiffel_Tower.jpg", "Prove
    13.87s  user  발화 시작: Oh, great! And could you send “Paris_Eiffel_Tower.jpg” to my
    13.89s  agent 발화 끝
    21.96s  <ret> 발화 (turn3 첫 프레임)
    22.17s  user  발화 끝
    22.28s  agent 발화 시작: <ret> Absolutely, I can send that picture right away. The em
    22.92s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.21s]: (tool result) Email sent to eleanor.vance@email.com with attachment "P
    29.97s  user  발화 시작: Perfect, thank you. Uh, what was the weather like in Nice on
    30.30s  agent 발화 끝
    35.09s  agent 발화 시작: Let me check on that information for you.
    35.15s  user  발화 끝
    37.82s  agent 발화 끝
    37.89s  user  발화 시작: Okay, thanks.
    38.17s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The weather in Nice on July fifteenth, 2023, was twenty-
    39.12s  agent 발화 시작: <ret> Right, I have the weather details now. On July fifteen
    39.27s  user  발화 끝
    48.30s  agent 발화 끝
