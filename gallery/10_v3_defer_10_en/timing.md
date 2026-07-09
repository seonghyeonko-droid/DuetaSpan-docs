# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     4.58s  <ret> 발화 (turn1 첫 프레임)
     4.65s  agent 발화 시작: <ret> Certainly, I can locate those images for you. I found 
     4.68s  user  발화 끝
     6.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.01s]: (tool result) Seven files were found: "Paris_Eiffel_Tower.jpg", "Nice_
    10.55s  user  발화 시작: Yeah.
    11.19s  user  발화 끝
    15.54s  user  발화 시작: Oh, great! And can you send "Paris_Eiffel_Tower.jpg" to my s
    15.69s  agent 발화 끝
    20.20s  <ret> 발화 (turn4 첫 프레임)
    20.36s  agent 발화 시작: <ret> Sending a photo is no trouble at all. The picture of t
    20.54s  user  발화 끝
    21.16s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.71s]: (tool result) The file "Paris_Eiffel_Tower.jpg" was sent to Eleanor’s 
    24.34s  user  발화 시작: Yeah.
    25.11s  user  발화 끝
    30.09s  agent 발화 끝
    31.11s  user  발화 시작: Perfect, thank you. Uh, what was the weather like in Nice on
    36.12s  user  발화 끝
    36.38s  agent 발화 시작: Let me check on that weather information for you.
    37.82s  user  발화 시작: Right.
    38.32s  user  발화 끝
    39.12s  user  발화 시작: Actually, never mind about the weather – just remind me to b
    39.34s  agent 발화 끝
    43.07s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) A reminder was set for Saturday at 8:00 PM to “Book a re
    44.01s  agent 발화 시작: <ret> Right, I can set that reminder for you now. I've set a
    44.12s  user  발화 끝
    51.89s  agent 발화 끝
